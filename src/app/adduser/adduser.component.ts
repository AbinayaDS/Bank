import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { details1 } from '../details1';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

User1:details1=new details1;

  constructor(public d:DataService,public r:Router) {
   this.User1.Id=Math.random();
   }

  ngOnInit(): void {
    this.User1.Usertype="user"
  }
  Add(){
    this.d.Users.push(this.User1);
    this.User1=new details1;
    this.r.navigate(['/users'])
  }

}
