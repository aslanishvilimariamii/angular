import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    { path: "", component: UsersListComponent },
    { path: "UserProfile/:id", component:  UserProfileComponent},
    { path: "UserList", component: UsersListComponent }
];
