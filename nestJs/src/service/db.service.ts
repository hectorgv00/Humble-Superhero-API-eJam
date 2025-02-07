import { CreateSuperheroDto } from 'src/superhero/dto/create-superhero.dto';

export class DbService {
  // "Database" to store data
  private db: CreateSuperheroDto[] = [];

  constructor() {}

  // Method to store data in the "database"
  public store(data: any) {
    this.db.push(data);
  }

  // Method to get all data from the "database"
  public getAll() {
    return this.db;
  }
}
