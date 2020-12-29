import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany,
  JoinColumn
} from 'typeorm';
import Comment from './Comment';

// OneToMany => 1 post para vários comentários

@Entity('posts') // tabela
export default class Post {
  // campos
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() // coluna no banco
  name: string;

  @Column()
  message: string;

  // OneToMany recebe um primeiro parâmetro que é uma função que devolve qual
  // é o tipo de retorno e o segundo prâmetro é, dado um comentário que eu 
  // recebi, qual que é o campo dentro desse comentário que retorna o 
  // relacionamento inverso, ou seja, que me retorna o post em si. No 
  // OneToMany eu consigo passar uma terceira opção com algumas configurações
  @OneToMany(() => Comment, comment => comment.post, {
    // quando eu for cadastrar um post(insert) ou alterar esse post(update)
    // ele vai automaticamente cadastrar ou atualizar os comentários que estão
    // relacionados com aquele post
    cascade: ['insert', 'update']
  })

  // nome da coluna que armazena o relacionamento de post com comentários
  @JoinColumn({ name: 'post_id' })

  // comments não existi nessa tabela no banco, ele é um array[] de Comments
  // dentro do model de comentários 
  comments: Comment[]; // vários comentários
};