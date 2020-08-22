import {
  Body,
  Controller, Delete, Param, Post, Put, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { VacancyService } from './VacancyService';
import {
  VacancyTags,
  AddVacancyMethodDocs,
  UpdateVacancyMethodDocs,
  DeleteVacancyMethodDocs,
} from './docs';
import { VacancyEntity } from './models/VacancyEntity';

@Controller('v1/project')
@VacancyTags
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Post(':projectId/vacancy')
  @UseGuards(AuthGuard('jwt'))
  @AddVacancyMethodDocs
  addVacancyToProject(@Param('projectId') projectId: string, @Body() vacancy: VacancyEntity) {
    return this.vacancyService.addVacancyToProject(projectId, vacancy);
  }

  @Put(':projectId/vacancy/:vacancyId')
  @UseGuards(AuthGuard('jwt'))
  @UpdateVacancyMethodDocs
  updateVacancy(
  @Param('projectId') projectId: string,
    @Param('vacancyId') vacancyId: string,
    @Body() vacancy: VacancyEntity,
  ) {
    return this.vacancyService.updateVacancy(projectId, vacancyId, vacancy);
  }

  @Delete(':projectId/vacancy/:vacancyId')
  @UseGuards(AuthGuard('jwt'))
  @DeleteVacancyMethodDocs
  deleteVacancy(
  @Param('projectId') projectId: string,
    @Param('vacancyId') vacancyId: string,
  ) {
    return this.vacancyService.deleteVacancy(projectId, vacancyId);
  }
}
