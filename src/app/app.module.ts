import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './routing.module';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CompoComsComponent } from './compo-coms/compo-coms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './compo-coms/parent/parent.component';
import { ChildComponent } from './compo-coms/child/child.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { DataService } from './http-request/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NgIfNgForComponent,
    CompoComsComponent,
    ParentComponent,
    ChildComponent,
    HttpRequestComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UsersService, DataService],
})
export class AppModule {}
