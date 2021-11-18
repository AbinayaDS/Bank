import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { details } from './details';
import { details1 } from './details1';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Details: any={};
  Signedin: boolean = false;

  Transaction: details[] = [];

  Users: details1[] = [
    {Id:"1", Username: "Admin", Password: "admin", Usertype: "Admin" },
    {Id:"2", Username: "User", Password: "user", Usertype: "User" }
  ];
  constructor(public r: Router) { }
  login(Username: string, Password: string) {
   this.Details = this.Users.find((x) => x.Username.toLowerCase() === Username.toLowerCase() && x.Password === Password);
 this.Signedin=this.Details ? true:false;
return this.Signedin;
   }
  Logout() {
    // this.Signedin=false;
    this.r.navigate(['/login']);
  }
 

}

