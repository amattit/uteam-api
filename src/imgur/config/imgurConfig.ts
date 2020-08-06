import { ImgurConfig } from '../entities/ImgurConfig';

const {
  IMGUR_URL: url,
  IMGUR_CLIENT_ID: clientId,
} = process.env;

export const imgurConfig: ImgurConfig = {
  url: url!,
  clientId: clientId!,
};
