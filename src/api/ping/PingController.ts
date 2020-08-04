import { Controller, Get } from '@nestjs/common';
import { PingService } from './PingService';
import { GettingPingMethodDocs, PingTags } from './docs';

@Controller('ping')
@PingTags
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  @GettingPingMethodDocs
  getHello(): string {
    return this.pingService.getHello();
  }
}
