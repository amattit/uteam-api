import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createFavoriteUsersMigration1596792000198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'FavoriteUsers',
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
          name: 'favoriteUserId',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('FavoriteUsers');
  }
}
