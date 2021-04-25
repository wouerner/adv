import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Client1619384270244 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'client',
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar(200)"
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
