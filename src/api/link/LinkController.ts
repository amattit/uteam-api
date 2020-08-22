import {
  Body,
  Controller, Delete, Param, Post, Put, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LinkService } from './LinkService';
import {
  LinkTags,
  AddLinkMethodDocs,
  UpdateProjectLinkMethodDocs,
  DeleteProjectLinkMethodDocs,
} from './docs';
import { LinkEntity } from './models/LinkEntity';

@Controller('v1/project')
@LinkTags
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post(':projectId/link')
  @UseGuards(AuthGuard('jwt'))
  @AddLinkMethodDocs
  addLinkToProject(@Param('projectId') projectId: string, @Body() link: LinkEntity) {
    return this.linkService.addLinkToProject(projectId, link);
  }

  @Put(':projectId/link/:linkId')
  @UseGuards(AuthGuard('jwt'))
  @UpdateProjectLinkMethodDocs
  updateProjectLink(
  @Param('projectId') projectId: string,
    @Param('linkId') linkId: string,
    @Body() link: LinkEntity,
  ) {
    return this.linkService.updateProjectLink(projectId, linkId, link);
  }

  @Delete(':projectId/link/:linkId')
  @UseGuards(AuthGuard('jwt'))
  @DeleteProjectLinkMethodDocs
  deleteProjectLink(
  @Param('projectId') projectId: string,
    @Param('linkId') linkId: string,
  ) {
    return this.linkService.deleteProjectLink(projectId, linkId);
  }
}
