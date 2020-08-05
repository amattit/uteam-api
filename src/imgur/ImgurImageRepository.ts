import { HttpService, Inject } from '@nestjs/common';
import FormData from 'form-data';
import { ImageRepository } from '../shared/repositories/image/ImageRepository';
import { UploadedFileType } from '../shared/models/interfaces/UploadedFile';

export class ImgurImageRepository implements ImageRepository {
  constructor(@Inject('HttpService') private httpService: HttpService) {}

  async saveImages(file: UploadedFileType): Promise<string> {
    const bodyFormData = new FormData();
    bodyFormData.append('image', file.buffer.toString('base64'));

    const { data: { link } } = await this.httpService
      .post('/image', bodyFormData, {
        headers: {
          ...bodyFormData.getHeaders(),
        },
      })
      .toPromise()
      .then((res) => res.data);

    return link;
  }
}
