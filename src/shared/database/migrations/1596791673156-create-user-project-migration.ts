import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createUserProjectMigration1596791673156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'UserProject',
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
          name: 'projectId',
          type: 'uuid',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('UserProject', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('UserProject', new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('');
  }
}
