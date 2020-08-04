export interface ImageRepository {
  saveImages(): Promise<string>;
}
