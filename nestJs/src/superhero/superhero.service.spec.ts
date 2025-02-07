import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { SuperheroRepository } from './superhero.repository';
import { DbService } from '../service/db.service';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService, SuperheroRepository, DbService],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
