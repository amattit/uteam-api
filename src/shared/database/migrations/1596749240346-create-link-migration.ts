import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createLinkMigration1596749240346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Link',
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
          type: 'int',
        },
        {
          name: 'projectId',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Link');
  }
}
