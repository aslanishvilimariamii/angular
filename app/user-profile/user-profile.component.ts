import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  MyUser:User = {Id : 0, Name : "", Status :true};
  Id: number = 1;

  constructor(public UsersService:UsersService, private route: ActivatedRoute) {}
  ngOnInit(): void{
    const idString = this.route.snapshot.paramMap.get('id');
    const parsedId = idString ? parseInt(idString) : 0;
    this.Id = parsedId;

    console.log("id"+idString)
    console.log(this.Id)
    this.getUser()
  }

  getUser(){
    console.log(this.Id)
    return this.MyUser = this.UsersService.getUserById(this.Id)
  }

}
