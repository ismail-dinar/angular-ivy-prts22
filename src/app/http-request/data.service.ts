import { Injectable } from '@angular/core';
import { IFood } from '../interfaces';

@Injectable()
export class DataService {

  // This api returns a single element by default, you can pass "size" as a query param to get an array.
  public apiUrl: string = 'https://random-data-api.com/api/food/random_food';

  public constructor() {}
}
