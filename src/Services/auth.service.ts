import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Types/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];

  constructor(private http : HttpClient) { }

  saveUser(user: User): void {
    // Append the user to the local storage
    this.users.push(user);
    // You can also store the updated users array in LocalStorage or IndexedDB here if you want the data to persist between app sessions.
  }

  getUsers(): User[] {
    // Return the current list of users
    return this.users;
  }
}
