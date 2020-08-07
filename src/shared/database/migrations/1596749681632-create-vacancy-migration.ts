import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createVacancyMigration1596749681632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'Vacancy',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'vachar',
        },
        {
          name: 'shareType',
          type: 'vachar',
        },
        {
          name: 'shareValue',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'aboutVacancy',
          type: 'vachar',
          isNullable: true,
        },
        {
          name: 'aboutFeature',
          type: 'vachar',
          isNullable: true,
        },
        {
          name: 'isVacant',
          type: 'bool',
        },
        {
          name: 'ownerId',
          type: 'int',
        },
        {
          name: 'projectId',
          type: 'int',
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
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Vacancy');
  }
}
