import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    if (
      createSuperheroDto.humilityScore < 0 ||
      createSuperheroDto.humilityScore > 10
    )
      throw new HttpException(
        { message: 'Humility score must be between 0 and 10' },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    try {
      this.superheroService.create(createSuperheroDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Superhero created',
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Error creating superhero' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  findAll() {
    try {
      const superheroes = this.superheroService.getAllSortedByHumilityScore();
      return {
        statusCode: HttpStatus.OK,
        data: superheroes,
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Error fetching superheroes' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
