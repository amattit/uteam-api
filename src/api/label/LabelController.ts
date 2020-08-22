import {
  Body,
  Controller, Get, Param, Post, UseGuards, BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LabelService } from './LabelService';
import {
  GetLabelsMethodDocs,
  LabelTags,
  SaveLabelsMethodDocs,
} from './docs';
import { LabelIdEntity } from './models/LabelIdEntity';
import { ArrayValidationPipe } from '../../shared/validationPipes/ArrayValidationPipes';

@Controller('v1/project')
@LabelTags
export class LabelController {
  constructor(private readonly labelService: LabelService) {}

  @Get('label')
  @GetLabelsMethodDocs
  getAllLabels() {
    return this.labelService.getAllLabels();
  }

  @Post(':projectId/label')
  @UseGuards(AuthGuard('jwt'))
  @SaveLabelsMethodDocs
  saveLabels(@Param('projectId') projectId: string, @Body(ArrayValidationPipe(LabelIdEntity)) labels: LabelIdEntity[]) {
    if (labels.length > 2) throw new BadRequestException('Array length mustn\'t be more than 2');

    return this.labelService.saveLabels(projectId, labels);
  }
}
