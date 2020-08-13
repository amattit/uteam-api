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
          type: 'varchar(36)',
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
          name: 'projectId',
          type: 'varchar(36)',
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
