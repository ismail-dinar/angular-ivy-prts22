import { IChallenge } from './interfaces';
import { ROUTES_PATHS } from './routes-paths';

export const CHALLENGES: IChallenge[] = [
  {
    name: 'NgIf NgFor',
    displayOrder: 1,
    route: ROUTES_PATHS.NgIfNgForComponent,
  },
  {
    name: 'Components Communication',
    displayOrder: 2,
    route: ROUTES_PATHS.CompoComsComponent,
  },
  {
    name: 'Http Request',
    displayOrder: 3,
    route: ROUTES_PATHS.HttpRequestComponent,
  },
];
