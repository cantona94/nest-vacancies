import { JobResponse } from 'src/job-response/entities/job-response.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Vacancy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  arraySkills: string[];

  @ManyToOne(() => User, (user) => user.vacancies)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => JobResponse, (jobResponse) => jobResponse, {
    onDelete: 'CASCADE',
  })
  jobResponses: JobResponse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
