import { Project } from '../../models/interfaces/Project';

export interface ProjectRepository {
  getById(id: string): Promise<Project | undefined>;
  getList(): Promise<Project[]>;
  create(project: Project): Promise<Project>;
  update(id: string, project: Partial<Project>): Promise<void>;
  delete(id: string): Promise<void>;
}
