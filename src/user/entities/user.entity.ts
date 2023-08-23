import { JobResponse } from 'src/job-response/entities/job-response.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Vacancy, (vacancy) => vacancy, {
    onDelete: 'CASCADE',
  })
  vacancies: Vacancy[];

  @OneToMany(() => JobResponse, (jobResponse) => jobResponse, {
    onDelete: 'CASCADE',
  })
  jobResponses: JobResponse[];

  @Column({ nullable: true })
  phone: string;

  @CreateDateColumn()
  createdAt: Date;
}
