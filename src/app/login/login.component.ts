import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
// import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username = "";
  Password = "";
  filter: any;
  constructor(public d: DataService, public r: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this.filter = this.d.login(this.Username, this.Password);

    if (this.filter) {
      if (this.d.Details.Usertype === "Admin") {
        this.r.navigate(['/admin']);
      }
      if (this.d.Details.Usertype === "User") {
        this.r.navigate(["/admin"]);
      }
    }
  }
  }

//     // showToasterSuccess(){
//     this.notifyService.showSuccess("Login successfully !!","Bank.com");
//
