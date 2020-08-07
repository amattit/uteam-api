import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProjectLabelTypeMigration1596790559205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ProjectLabelType_Relations',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'prjcetId',
          type: 'int',
        },
        {
          name: 'labelId',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ProjectLabelType_Relations');
  }
}
