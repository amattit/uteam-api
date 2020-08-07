import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class createContactMigration1596747090935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Contact',
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
      ],
    }), true, true);

    await queryRunner.createForeignKey('Contact', new TableForeignKey({
      columnNames: ['ownerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'User',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Contact');
  }
}
