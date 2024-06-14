import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/Usersetting';
import { createUserSettingInput } from '../utils/CreateUserSettinginput';
import { mockSettings } from 'src/_mocks_/mockSetting';

@Resolver()
export class UserSettingResolver {
  @Mutation(() => [UserSetting])
  createUserSetting(
    @Args('createUserSettingInput')
    { recEmail, recNotification }: createUserSettingInput,
  ) {
    const newUserSetting = {
      recEmail,
      recNotification,
      userId: 4,
    };
    mockSettings.push(newUserSetting);
    return mockSettings;
  }
}
