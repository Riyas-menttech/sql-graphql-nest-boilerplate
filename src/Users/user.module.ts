import { Module } from '@nestjs/common';
import { UserResolver } from './User-resolver';
import { UserService } from './Userservice';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSetting } from 'src/graphql/models/Usersetting';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserResolver, UserService, UserSettingService],
})
export class UserModule {}
