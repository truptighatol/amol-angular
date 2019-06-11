import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Usercls } from '../usercls';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  add_user = 'Add Member Form:';
  id :string;
  userClsObj;
  constructor( private _userservice: UserServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id"); 
    if(this.id){
      this._userservice.getUser(this.id)
      .subscribe(
        d => {
          console.log(d);
          console.log(d[0].id);
          this.userClsObj = new Usercls(d[0].name,null,null,null,null,null);

        },
        err=> console.log(err)
     );
    }
    else
    {
      this.userClsObj = new Usercls(null,null,null,null,null,null);
    }
  }

  
  update()
  {
  
  }
  
  onSubmit(){
    this._userservice.addUser(this.userClsObj)
    .subscribe(
      data => {
        alert("Inserted data successfully!");
        console.log(data);
      },
      error=>{ 
        
        console.log(error)
      }
    );
  }
}
