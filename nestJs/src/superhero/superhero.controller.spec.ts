import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: {
            create: jest.fn(),
            getAllSortedByHumilityScore: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return an error message if humility score is out of range', () => {
      const dto: CreateSuperheroDto = {
        name: 'Test',
        superpower: 'Test',
        humilityScore: 11,
      };
      expect(controller.create(dto)).toBe(
        'Humility score must be between 0 and 10',
      );
    });

    it('should call service.create with correct parameters', () => {
      const dto: CreateSuperheroDto = {
        name: 'Test',
        superpower: 'Test',
        humilityScore: 5,
      };
      controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should call service.getAllSortedByHumilityScore', () => {
      controller.findAll();
      expect(service.getAllSortedByHumilityScore).toHaveBeenCalled();
    });
  });
});
