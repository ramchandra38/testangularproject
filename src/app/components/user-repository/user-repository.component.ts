import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css']
})
export class UserRepositoryComponent implements OnInit {

  //Declaration of Variables
  id: any;
  userRepository: any;

  constructor(
    private userService: UserserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //selected userId
    this.id = this.route.snapshot.params.id;
    this.getSpecificUserRepository();
  }

  // getSpecificUserRepository
  getSpecificUserRepository() {
    this.userService.getSpecificUserRepository(this.id).subscribe((res: any) => {
      this.userRepository = res;
    });
  }

}
