import { UploadedFileType } from '../../models/interfaces/UploadedFile';

export interface ImageRepository {
  saveImages(file: UploadedFileType): Promise<string>;
}
