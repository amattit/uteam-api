import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createFavoriteProjectsMigration1596791975950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'FavoriteProjects',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'userId',
          type: 'int',
        },
        {
          name: 'projectId',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('FavoriteProjects');
  }
}
