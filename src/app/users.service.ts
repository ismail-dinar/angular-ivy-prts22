import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { IUser } from './interfaces';

@Injectable()
export class UsersService {
  public createRandomUser(): IUser {
    const birthdate = faker.date.birthdate();
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate,
      age: new Date().getFullYear() - birthdate.getFullYear(),
      registeredAt: faker.date.past(),
    };
  }
}
