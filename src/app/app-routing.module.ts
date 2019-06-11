import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes : Routes = [
    { path : 'add-user' ,component : AddUserComponent },
    { path : 'add-user/:id' ,component : AddUserComponent },
    { path : 'show-user' ,component : ShowUserComponent },
   
];

@NgModule({
    imports :[ RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class  AppRoutingModule { }
export const routingComponents = [ AddUserComponent, ShowUserComponent]