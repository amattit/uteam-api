import { MigrationInterface, QueryRunner } from 'typeorm';

const labels = [
  {
    title: 'делаем mvp',
  },
  {
    title: 'mvp готов',
  },
  {
    title: 'есть идея',
  },
  {
    title: 'есть ТЗ',
  },
  {
    title: 'работает',
  },
  {
    title: 'делаем анализ',
  },
  {
    title: 'масштабируем',
  },
  {
    title: 'ищем деньги',
  },
];

export class labelTypeDictionary1598091041935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner
      .manager
      .createQueryBuilder()
      .insert()
      .into('LabelType')
      .values(labels)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner
      .manager
      .createQueryBuilder()
      .delete()
      .from('LabelType')
      .execute();
  }
}
