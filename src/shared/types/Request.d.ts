// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User as UserModel } from '../models/interfaces/User';

declare global {
  namespace Express {
    interface User extends UserModel {
      id: string;
    }
  }
}
