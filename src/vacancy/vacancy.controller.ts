import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Post()
  create(@Body() CreateVacancyDto: CreateVacancyDto) {
    return this.vacancyService.create(CreateVacancyDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateVacancyDto: UpdateVacancyDto) {
    return this.vacancyService.update(+id, UpdateVacancyDto);
  }

  @Get('pagination')
  findAllWithPagination(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 3,
    @Query('sort') sort: string = 'createdAt',
    @Query('userName') userName: string | null = null,
  ) {
    return this.vacancyService.findAllWithPagination(+page, +limit, sort, userName);
  }
}
