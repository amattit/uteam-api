import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createLinkMigration1596749240346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Link',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'link',
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
          type: 'uuid',
        },
        {
          name: 'projectId',
          type: 'uuid',
        },
      ],
    }), true, true);

    await queryRunner.createForeignKey('Link', new TableForeignKey({
      columnNames: ['projectId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Project',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('Link', new TableForeignKey({
      columnNames: ['ownerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Link');
  }
}
