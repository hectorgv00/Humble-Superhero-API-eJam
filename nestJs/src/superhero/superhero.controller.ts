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

  // Post method to create a superhero
  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    // If the humility score is not between 0 and 10, return an error
    if (
      createSuperheroDto.humilityScore < 0 ||
      createSuperheroDto.humilityScore > 10
    )
      throw new HttpException(
        { message: 'Humility score must be between 0 and 10' },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    // Try to create the superhero
    try {
      // Call the create method from the superhero service
      this.superheroService.create(createSuperheroDto);

      // If successful, return a success message
      return {
        statusCode: HttpStatus.OK,
        message: 'Superhero created',
      };
    } catch (error) {
      // If an error occurs, return an error message
      throw new HttpException(
        { message: 'Error creating superhero' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Get method to fetch all superheroes
  @Get()
  findAll() {
    // Try to fetch all superheroes
    try {
      // Call the getAll method from the superhero service
      const superheroes = this.superheroService.getAllSortedByHumilityScore();

      // If successful, return the superheroes
      return {
        statusCode: HttpStatus.OK,
        data: superheroes,
      };
    } catch (error) {
      // If an error occurs, return an error message
      throw new HttpException(
        { message: 'Error fetching superheroes' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
