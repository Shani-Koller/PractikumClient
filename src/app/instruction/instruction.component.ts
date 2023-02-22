import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  user:User;
  userDefult = "אורח"
  constructor(public ser:userService) {
    this.user=ser.user;
   }

  ngOnInit(): void {
  }

}
