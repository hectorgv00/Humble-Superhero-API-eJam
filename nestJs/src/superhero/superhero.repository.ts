import { DbService } from '../service/db.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroRepository {
  constructor(private dbService: DbService) {}

  // Method that calls the getAll method from the db service and sorts the data by humility score descending
  public getAllSortedByHumilityScore() {
    // We get the information from the "database"
    const data = this.dbService.getAll();

    // I want the data to be stored by humility score descending
    return data.sort((a, b) => b.humilityScore - a.humilityScore);
  }

  // Method that calls the store method from the db service
  public create(data: CreateSuperheroDto) {
    this.dbService.store(data);
  }
}
