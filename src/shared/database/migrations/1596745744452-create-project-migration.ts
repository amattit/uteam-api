import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createProjectMigration1596745744452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Project',
      columns: [
        {
          name: 'id',
          type: 'varchar(36)',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar(6000)',
        },
        {
          name: 'created',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'updated',
          type: 'timestamp',
          isNullable: true,
          onUpdate: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'ownerId',
          type: 'varchar(36)',
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

    await queryRunner.createForeignKey('Project', new TableForeignKey({
      columnNames: ['ownerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }
}
