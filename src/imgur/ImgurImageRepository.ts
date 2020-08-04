import { NotImplementedException } from '@nestjs/common';
import { ImageRepository } from '../shared/repositories/image/ImageRepository';

export class ImgurImageRepository implements ImageRepository {
  async saveImages(): Promise<string> {
    throw new NotImplementedException('Coming soon');
  }
}
