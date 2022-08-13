import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { IUser } from './interfaces';

@Injectable()
export class UsersService {

  public createRandomUser(): IUser {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

}