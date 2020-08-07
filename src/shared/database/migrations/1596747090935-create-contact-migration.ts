import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createContactMigration1596747090935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Contact',
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
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Contact');
  }
}
