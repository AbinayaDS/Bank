import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { details } from '../details';
import { details1 } from '../details1';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Transaction1: details[] = [];
  DetUser: details = new details;
  //  ------------------------------
  Users: details1[] = [];
  Details: details1 = new details1;
  // -----------------------------
  totalincome = 0;
  totalexpense = 0;
  totalbalance = 0;
  textsearch = "";
  // ------------------
  Usertype: boolean = false;
  // --------------------
  Useris:boolean=false;
  constructor(public d: DataService, public r: Router) {
    if(d.Details.Usertype==="Admin"){
      this.Transaction1=this.d.Transaction;
      this.Useris=true;
}
else if(d.Details.Usertype==="User"){
  this.Transaction1=this.d.Transaction.filter((x) => x.Usertype ==="User" && x.Id ===this.d.Details.Id)
}

  }
  ngOnInit(): void {
  }

  Userdetails() {
    this.r.navigate(['/userdetails']);

  }
  Adduser() {
    this.r.navigate(['/adduser'])
  }
  // add() {
  //   if (this.DetUser.Type == 'true') {
  //     this.totalincome = this.totalincome + this.DetUser.Amount;
  //   }
  //   else {
  //     this.totalexpense = this.totalexpense + this.DetUser.Amount;
  //   }
  //   this.totalbalance = this.totalincome - this.totalexpense;
  //   this.DetUser = new details;
  // }
  Logout() {
    this.d.Logout();
  }

}
