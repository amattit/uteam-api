import { Inject, Injectable } from '@nestjs/common';
import { ImageRepository } from '../../shared/repositories/image/ImageRepository';
import { UploadedFileType } from '../../shared/models/interfaces/UploadedFile';

@Injectable()
export class ImageService {
  constructor(@Inject('ImageRepository') private imageRepository: ImageRepository) {
  }

  saveImage(file: UploadedFileType): Promise<string> {
    return this.imageRepository.saveImages(file);
  }
}
