import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { UserSetting } from '../graphql/models/Usersetting';
import { mockSettings } from 'src/_mocks_/mockSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './Userservice';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [User])
  getUser() {
    return this.userService.getUsers();
  }
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }
  @ResolveField(() => UserSetting, { name: 'setting', nullable: true })
  getUserSetting(@Parent() user: User) {
    // console.log(user);
    return mockSettings.find((data) => data.userId == user.id);
  }
  @Mutation(() => [User])
  createUser(@Args('CreateUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
