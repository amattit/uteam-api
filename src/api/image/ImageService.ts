import { Inject, Injectable } from '@nestjs/common';
import { ImageRepository } from '../../shared/repositories/image/ImageRepository';

@Injectable()
export class ImageService {
  constructor(@Inject('ImageRepository') private imageRepository: ImageRepository) {
  }

  saveImage(): Promise<string> {
    return this.imageRepository.saveImages();
  }
}
