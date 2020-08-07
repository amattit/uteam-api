import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProjectMigration1596745744452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Project',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'created',
          type: 'timestamp',
        },
        {
          name: 'updated',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'ownerId',
          type: 'int',
        },
        {
          name: 'imagePath',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'isPublished',
          type: 'bool',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }
}
