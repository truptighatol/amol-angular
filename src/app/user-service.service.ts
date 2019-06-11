import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';
import { Usercls } from './usercls';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string = 'http://localhost:3001/';

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3001/getAllRecords');
  }

  addUser(data: Usercls){
    return this.http.post<any>('http://localhost:3001/insertRecord',data);
  }

  getUser(id:string): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3001/getSpecificRecord/'+id);
  }



}
