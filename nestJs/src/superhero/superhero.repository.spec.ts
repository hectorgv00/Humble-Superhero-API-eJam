import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroRepository } from './superhero.repository';
import { DbService } from '../service/db.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroRepository', () => {
  let repository: SuperheroRepository;
  let dbService: DbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroRepository,
        {
          provide: DbService,
          useValue: {
            getAll: jest.fn(),
            store: jest.fn(),
          },
        },
      ],
    }).compile();

    repository = module.get<SuperheroRepository>(SuperheroRepository);
    dbService = module.get<DbService>(DbService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getAllSortedByHumilityScore', () => {
    it('should return data sorted by humility score in descending order', () => {
      const data = [
        { name: 'Superman', superpower: 'Fly', humilityScore: 9 },
        { name: 'Wolverine', superpower: 'Paws', humilityScore: 2 },
      ];
      jest.spyOn(dbService, 'getAll').mockReturnValue(data);

      const result = repository.getAllSortedByHumilityScore();
      expect(result).toEqual([
        { name: 'Superman', superpower: 'Fly', humilityScore: 9 },
        { name: 'Wolverine', superpower: 'Paws', humilityScore: 2 },
      ]);
    });
  });

  describe('create', () => {
    it('should call dbService.store with correct parameters', () => {
      const dto: CreateSuperheroDto = {
        name: 'Test',
        superpower: 'Test',
        humilityScore: 5,
      };
      repository.create(dto);
      expect(dbService.store).toHaveBeenCalledWith(dto);
    });
  });
});
