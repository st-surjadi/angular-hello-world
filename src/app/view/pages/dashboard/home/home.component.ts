import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { jsonphUsersUseCase } from 'src/core/usecase/jsonph-users/jsonph-users.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: jsonphUsersUseCase
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.execute().pipe(take(1)).subscribe((res: any) => {
      console.log(res);
    });
  }

}
