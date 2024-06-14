import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  getUsers() {
    return this.UserRepository.find();
  }
  createUser(CreateUserInput: CreateUserInput) {
    const newUser = this.UserRepository.create(CreateUserInput);
    this.UserRepository.save(newUser);
    return this.UserRepository.find();
  }
  getUserById(id: number) {
    return this.UserRepository.findOneBy({ id });
  }
}
