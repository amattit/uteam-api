import { Module } from '@nestjs/common';
import { SharedModule } from './shared/SharedModule';
import { ApiModule } from './api/ApiModule';

@Module({
  imports: [
    SharedModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
