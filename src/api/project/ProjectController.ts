import {
  Body,
  Controller, Delete, Get, Param, Post, Put, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProjectService } from './ProjectService';
import {
  ProjectTags,
  CreatingProjectMethodDocs,
  DeletingProjectMethodDocs,
  GettingProjectByIdMethodDocs,
  GettingProjectsMethodDocs,
  UpdatingProjectMethodDocs, PublishingProjectMethodDocs, DraftingProjectMethodDocs,
} from './docs';
import { SavingProjectEntity } from './models/CreateProjectRequestEntity';

@Controller('v1/project')
@ProjectTags
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @GettingProjectsMethodDocs
  getProjects() {
    return this.projectService.getProjects();
  }

  @Get(':id')
  @GettingProjectByIdMethodDocs
  getProject(@Param('id') id: string) {
    return this.projectService.getProject(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @CreatingProjectMethodDocs
  createProject(@Body() project: SavingProjectEntity) {
    return this.projectService.createProject(project);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @UpdatingProjectMethodDocs
  updateProject(@Param('id') id: string, @Body() project: SavingProjectEntity) {
    return this.projectService.updateProject(id, project);
  }

  @Put(':id/public')
  @UseGuards(AuthGuard('jwt'))
  @PublishingProjectMethodDocs
  publishProject(@Param('id') id: string) {
    return this.projectService.publishProject(id);
  }

  @Put(':id/checkout')
  @UseGuards(AuthGuard('jwt'))
  @DraftingProjectMethodDocs
  draftProject(@Param('id') id: string) {
    return this.projectService.draftProject(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @DeletingProjectMethodDocs
  deleteProject(@Param('id') id: string) {
    return this.projectService.deleteProject(id);
  }
}
