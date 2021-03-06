import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './AppModule';
import { IdentifyAuthGuard } from './api/auth/guards/IdentifyAuthGuard';

declare const module: any;

const {
  HOST: host = '0.0.0.0',
  PORT: port = 3000,
  NODE_ENV: nodeEnv = 'development',
} = process.env;

const isDevelopment = nodeEnv === 'development';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      validationError: { target: false },
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useGlobalGuards(new IdentifyAuthGuard());

  const options = new DocumentBuilder()
    .setTitle('UTeam API')
    .setDescription('The UTeam API documentation')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  app.enableCors({
    origin: isDevelopment ? /localhost/ : [/uteam/, /teamu-front/],
    credentials: true,
  });

  try {
    await app.listen(port, host);

    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  } catch (error) {
    console.error(`${new Date().toISOString()} - error - NestBootstrap@main.ts - ${error.stack || error.message}`);
    process.exit(1);
  }
})();
