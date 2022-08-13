import { Component, VERSION } from '@angular/core';
import { CHALLENGES } from './challenges';
import { IChallenge } from './interfaces';
import { sortBy } from 'lodash';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public challenges: IChallenge[] = sortBy(CHALLENGES, 'displayOrder');
}
