import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { ProjectLinkRepository } from './ProjectLinkRepository';
import { LinkModel } from '../../database/models/LinkModel';
import { Link } from '../../models/interfaces/Link';

@Injectable()
export class TypeormProjectLinkRepository implements ProjectLinkRepository {
  constructor(
    @InjectRepository(LinkModel)
    private linkGenericRepository: Repository<LinkModel>,
  ) {}

  async create(link: Link): Promise<Link> {
    const {
      generatedMaps: [{ id, created }],
    } = await this.linkGenericRepository.insert(link);

    return {
      ...link,
      id,
      created,
    };
  }

  async update(id: string, link: Partial<Link>): Promise<void> {
    await this.linkGenericRepository.save({
      ...link,
      id,
    });
  }

  async delete(id: string): Promise<void> {
    await this.linkGenericRepository.delete({ id });
  }
}
