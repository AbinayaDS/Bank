import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { details } from '../details';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  Transaction: details[] = [];

  details: details = new details;

  constructor(public d: DataService, public r: Router) {
    this.details.Usertype = this.d.Details.Usertype; 
    this.details.Id = this.d.Details.Id
  }

  ngOnInit(): void {
  }
  add() {
    if (this.details.Name != null && this.details.Date != null && this.details.Amount != null && this.details.Particular != null) {
      this.d.Transaction.push(this.details);
      this.details = new details;
      this.r.navigate(['/admin'])
    }
    else {
      alert("Fill All the Details");
       }
  }
}