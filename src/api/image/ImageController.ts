import {
  BadRequestException,
  Controller, Post, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import path from 'path';
import { ImageService } from './ImageService';
import { ImageTags, SavingImageMethodDocs } from './docs';
import { UploadedFileType } from '../../shared/models/interfaces/UploadedFile';

const fileFilter = (
  req: any,
  file: { originalname: string },
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
    callback(new BadRequestException('Only images are allowed!'), false);

    return;
  }

  callback(null, true);
};

@Controller('v1/image')
@ImageTags
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    limits: { fileSize: 1024 * 1024 },
    fileFilter,
  }))
  @SavingImageMethodDocs
  saveImage(@UploadedFile() file: UploadedFileType): Promise<string> {
    return this.imageService.saveImage(file);
  }
}
