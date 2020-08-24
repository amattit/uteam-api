import { User } from '../../models/interfaces/User';

export interface UserRepository {
  getById(id: string): Promise<User | undefined>;
  create(user: User): Promise<User>;
  update(id: string, user: Partial<User>): Promise<void>;
  getAll(): Promise<User[]>;
  getUserByEmailAndPassword(email: string, password: string): Promise<Omit<User, 'password'> | undefined>;
}
