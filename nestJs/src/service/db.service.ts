import { CreateSuperheroDto } from 'src/superhero/dto/create-superhero.dto';

export class DbService {
  private db: CreateSuperheroDto[] = [];

  constructor() {}

  public store(data: any) {
    this.db.push(data);
  }

  public getAll() {
    return this.db;
  }
}
