import { DbService } from 'src/service/db.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroRepository {
  constructor(private dbService: DbService) {}

  public getAllSortedByHumilityScore() {
    // We get the information from the "database"
    const data = this.dbService.getAll();

    // We sort the data by humility score desc
    return data.sort((a, b) => a.humilityScore - b.humilityScore);
  }

  public create(data: CreateSuperheroDto) {
    this.dbService.store(data);
  }
}
