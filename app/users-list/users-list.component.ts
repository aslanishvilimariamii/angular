import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../Models/user';
import { NgFor } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  UserList : User[] = []

  constructor(public UsersService:UsersService) {
    this.UserList =UsersService.UsersList;
  }

}
