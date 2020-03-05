import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //Declaration of Variables
  users: any;
  queryString: any;
  searchResult: any;

  constructor(
    private userService: UserserviceService,
    public router: Router
    ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  // getAllUsers
  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log('this.users', this.users);
    });
  }

  // searchUserByName
  searchUserByName() {
    this.userService.searchUserByName(this.queryString).subscribe((res: any) => {
      this.searchResult = res;
      this.users = this.searchResult.items;
    });
  }

  // search
  search() {
    this.searchUserByName();
  }

  // specificUserRepositoryNavigation
  specificUserRepository(user) {
    const myurl = `specific-user-repository/${user.login}`;
    this.router.navigateByUrl(myurl);
  }

}
