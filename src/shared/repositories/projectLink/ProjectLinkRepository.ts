import { Link } from '../../models/interfaces/Link';

export interface ProjectLinkRepository {
  create(link: Link): Promise<Link>;
  update(id: string, link: Partial<Link>): Promise<void>;
  delete(id: string): Promise<void>;
}
