import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class comments1603821620330 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'comments',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'comment',
          type: 'varchar',
        },
        {
          name: 'post_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'CommentPost',
          columnNames: ['post_id'],
          referencedTableName: 'posts', // tabela relacionada 
          referencedColumnNames: ['id'],  // coluna da tabela relacionada
          // se o id do post mudar o post_id também vai ser alterado
          onUpdate: 'CASCADE',
          // se o post for deletado os comments relacionados a ele também vão
          // ser deletados
          onDelete: 'CASCADE' 
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comments');
  }

}
