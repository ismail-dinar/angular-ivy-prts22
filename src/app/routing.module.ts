import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CompoComsComponent } from './compo-coms/compo-coms.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { ROUTES_PATHS } from './routes-paths';

const routes: Route[] = [
  {
    component: NgIfNgForComponent,
    path: ROUTES_PATHS.NgIfNgForComponent,
  },
  {
    component: CompoComsComponent,
    path: ROUTES_PATHS.CompoComsComponent,
  },
  {
    component: HttpRequestComponent,
    path: ROUTES_PATHS.HttpRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
