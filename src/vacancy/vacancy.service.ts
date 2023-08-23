import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { Vacancy } from './entities/vacancy.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy)
    private readonly vacancyRepository: Repository<Vacancy>,
  ) {}

  async create(createVacancyDto: CreateVacancyDto) {
    const newVacancy = {
      user: { id: +createVacancyDto.user },
      name: createVacancyDto.name,
      description: createVacancyDto.description,
      arraySkills: createVacancyDto.arraySkills,
    };

    return await this.vacancyRepository.save(newVacancy);
  }

  async update(id: number, updateVacancyDto: UpdateVacancyDto) {
    const user = await this.vacancyRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await this.vacancyRepository.update(id, updateVacancyDto);
  }

  async findAllWithPagination(page: number, limit: number, sort: string) {
    console.log(sort);
    const vacancies = await this.vacancyRepository.find({
      select: {
        user: {
          name: true,
        },
      },
      relations: ['user'],
      order: {
        [sort]: 'ASC',
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    return vacancies;
  }
}
