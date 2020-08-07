import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserMigration1596744182480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'User',
      columns: [
        {
          name: 'id',
          type: 'varchar(36)',
          isPrimary: true,
        },
        {
          name: 'username',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'created',
          type: 'timestamp',
        },
        {
          name: 'imagePath',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'location',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'about',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'role',
          type: 'varchar',
          isNullable: true,
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('User');
  }
}
