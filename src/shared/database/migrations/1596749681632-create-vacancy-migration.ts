import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createVacancyMigration1596749681632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'Vacancy',
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
          name: 'shareType',
          type: 'varchar',
        },
        {
          name: 'shareValue',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'aboutVacancy',
          type: 'varchar(3000)',
          isNullable: true,
        },
        {
          name: 'aboutFeature',
          type: 'varchar(3000)',
          isNullable: true,
        },
        {
          name: 'isVacant',
          type: 'bool',
        },
        {
          name: 'ownerId',
          type: 'varchar(36)',
        },
        {
          name: 'projectId',
          type: 'varchar(36)',
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
      ],
    }), true, true);

    await queryRunner.createForeignKey('Vacancy', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('Vacancy', new TableForeignKey({
      columnNames: ['ownerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Vacancy');
  }
}
