import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroRepository } from './superhero.repository';

@Injectable()
export class SuperheroService {
  constructor(private superheroRE: SuperheroRepository) {}

  create(createSuperheroDto: CreateSuperheroDto) {
    return this.superheroRE.create(createSuperheroDto);
  }

  getAllSortedByHumilityScore() {
    return this.superheroRE.getAllSortedByHumilityScore();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} superhero`;
  // }

  // update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
  //   return `This action updates a #${id} superhero`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} superhero`;
  // }
}
