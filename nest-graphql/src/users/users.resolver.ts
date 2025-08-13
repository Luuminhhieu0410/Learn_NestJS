import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { users } from '@prisma/client';
import { PointsService } from '../points/points.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private pointsService: PointsService,
  ) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return [];
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    console.log('-------' + id);
    return this.usersService.findOne(id); // khi query user(id: ) sẽ tự động giá trị vào @Parent 
  }
  @ResolveField('point')
  point(@Parent() user: users) { // user nhận vào là object nhận từ hàm findOne
    return this.pointsService.findOne(user.id);
  }
  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return;
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
