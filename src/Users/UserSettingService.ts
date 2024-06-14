import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from 'src/graphql/models/Usersetting';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private UserSettingRepos: Repository<UserSetting>,
  ) {}
  createSetting() {}
  getSetting() {}
}
