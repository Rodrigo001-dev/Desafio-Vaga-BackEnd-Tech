import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Post from './Post';

// ManyToOne => vários comentários para um posts

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  comment: string;

  @Column()
  post_id: number;

  @ManyToOne(() => Post, post => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: Post; // somente um post para vários comentários
};