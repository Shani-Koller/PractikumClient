import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';
import { userService } from '../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor() {
  }
  ngOnInit(): void {
  }
  
}
