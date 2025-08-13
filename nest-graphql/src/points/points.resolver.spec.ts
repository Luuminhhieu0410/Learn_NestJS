import { Test, TestingModule } from '@nestjs/testing';
import { PointsResolver } from './points.resolver';
import { PointsService } from './points.service';

describe('PointsResolver', () => {
  let resolver: PointsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointsResolver, PointsService],
    }).compile();

    resolver = module.get<PointsResolver>(PointsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
