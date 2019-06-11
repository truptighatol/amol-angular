import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  public user=[];

  constructor(private _userservice: UserServiceService) { }

  ngOnInit() {

    this._userservice.getEmployees().subscribe(data => this.user = data );
  }

}
