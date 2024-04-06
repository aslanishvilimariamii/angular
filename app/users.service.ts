import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public Users: User[] = [
    {Id : 1, Name : "lizi", Status :true},
    {Id : 2, Name : "mariamiii", Status :true}]

  
  constructor() { }

  get UsersList(): User[] {
    return this.Users;
  }

  getUserById(id:number):User{
    const user :User | undefined = this.Users.find(user => user.Id === id);
    if (!user) {
      throw new Error(`User with ID ${id} not found.`);
    }
    console.log(user)
    return user
  }


}
