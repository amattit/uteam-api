import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createProjectLabelTypeMigration1596790559205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ProjectLabelType',
      columns: [
        {
          name: 'id',
          type: 'varchar(36)',
          isPrimary: true,
        },
        {
          name: 'projectId',
          type: 'varchar(36)',
        },
        {
          name: 'labelId',
          type: 'varchar(36)',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('ProjectLabelType', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('ProjectLabelType', new TableForeignKey({
      columnNames: ['labelId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'LabelType',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ProjectLabelType');
  }
}
