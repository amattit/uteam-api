import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createFavoriteUsersMigration1596792000198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'FavoriteUsers',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'userId',
          type: 'uuid',
        },
        {
          name: 'favoriteUserId',
          type: 'uuid',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('FavoriteUsers', new TableForeignKey({
      columnNames: ['favoriteUserId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('FavoriteUsers', new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('FavoriteUsers');
  }
}
