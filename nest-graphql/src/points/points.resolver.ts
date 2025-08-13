import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
import { PointsService } from './points.service';
// import { CreatePointInput } from './dto/create-point.input';
// import { UpdatePointInput } from './dto/update-point.input';
import { users } from '@prisma/client';

@Resolver('Point')
export class PointsResolver {
  constructor(private readonly pointsService: PointsService) {}

  // @Query('points')
  // findAll() {
  //   return [];
  // }

  @Query('point')
  findOne(@Args('id') id: string) {
    return this.pointsService.findOne(id);
  }

  // @Mutation('updatePoint')
  // update(@Args('updatePointInput') updatePointInput: UpdatePointInput) {
  //   return this.pointsService.update(updatePointInput.id, updatePointInput);
  // }

  // @Mutation('createPoint')
  // create(@Args('createPointInput') createPointInput: CreatePointInput) {
  //   return this.pointsService.create(createPointInput);
  // }

  // @Mutation('removePoint')
  // remove(@Args('id') id: number) {
  //   return this.pointsService.remove(id);
  // }
}
function ResolverField(): (
  target: PointsResolver,
  propertyKey: 'posts',
  descriptor: TypedPropertyDescriptor<(user: users) => string>,
) => void | TypedPropertyDescriptor<(user: users) => string> {
  throw new Error('Function not implemented.');
}
