import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
})
export class NgIfNgForComponent implements OnInit {
  public users: IUser[];

  public constructor(private userService: UsersService) {}

  public ngOnInit(): void {
    Array.from({ length: 10 }).forEach(() => {
      this.users.push(this.userService.createRandomUser());
    });
  }
}
