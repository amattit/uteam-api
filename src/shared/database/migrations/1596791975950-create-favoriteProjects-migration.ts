import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createFavoriteProjectsMigration1596791975950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'FavoriteProjects',
      columns: [
        {
          name: 'id',
          type: 'varchar(36)',
          isPrimary: true,
        },
        {
          name: 'userId',
          type: 'varchar(36)',
        },
        {
          name: 'projectId',
          type: 'varchar(36)',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('FavoriteProjects', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('FavoriteProjects', new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('FavoriteProjects');
  }
}
