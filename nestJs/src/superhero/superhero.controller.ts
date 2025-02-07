import { Controller, Get, Post, Body } from '@nestjs/common';
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
      return 'Humility score must be between 0 and 10';

    return this.superheroService.create(createSuperheroDto);
  }

  @Get()
  findAll() {
    return this.superheroService.getAllSortedByHumilityScore();
  }
}
