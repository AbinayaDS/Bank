import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { details1 } from '../details1';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  details:details1[]=[]
  constructor(public d:DataService,public r:Router) { 
    this.details=this.d.Users;
  }

  ngOnInit(): void {
  }

}
