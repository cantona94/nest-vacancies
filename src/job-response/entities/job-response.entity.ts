import { User } from 'src/user/entities/user.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class JobResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  viewed: boolean;

  @ManyToOne(() => Vacancy, (vacancy) => vacancy.jobResponses)
  @JoinColumn({ name: 'vacancy_id' })
  vacancy: Vacancy;

  @ManyToOne(() => User, (user) => user.jobResponses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
