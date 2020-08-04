import { Controller, Post } from '@nestjs/common';
import { ImageService } from './ImageService';
import { ImageTags } from './docs';

@Controller('image')
@ImageTags
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  saveImage(): Promise<string> {
    return this.imageService.saveImage();
  }
}
