import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroRepository } from './superhero.repository';

@Injectable()
export class SuperheroService {
  constructor(private superheroRE: SuperheroRepository) {}

  // Method that calls the create method from the superhero repository
  create(createSuperheroDto: CreateSuperheroDto) {
    return this.superheroRE.create(createSuperheroDto);
  }

  // Method that calls the getAllSortedByHumilityScore method from the superhero repository
  getAllSortedByHumilityScore() {
    return this.superheroRE.getAllSortedByHumilityScore();
  }
}
