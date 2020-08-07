import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createProjectLabelTypeMigration1596790559205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ProjectLabelType_Relations',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'projectId',
          type: 'uuid',
        },
        {
          name: 'labelId',
          type: 'uuid',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('ProjectLabelType_Relations', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('ProjectLabelType_Relations', new TableForeignKey({
      columnNames: ['labelId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Label',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ProjectLabelType_Relations');
  }
}
