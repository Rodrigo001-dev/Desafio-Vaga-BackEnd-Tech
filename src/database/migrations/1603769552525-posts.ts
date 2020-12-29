import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class posts1603769552525 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // método que realiza alterações como:
    // Criar uma nova tabela, criar um novo campo, deletar algum campo
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // sempre número positivo
          isPrimary: true, // primary key
          isGenerated: true, // vai ser gerada automaticamente
          generationStrategy: 'increment' // vai ser AutoIncrementavel
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'message',
          type: 'varchar'
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // método que desfaz o que foi feito no método up
    await queryRunner.dropTable('posts')
  }

}
