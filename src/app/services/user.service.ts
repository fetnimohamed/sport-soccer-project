import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/getUsers`);
  }
  addUser(user: any, image: any) {
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('pwd', user.pwd);
    formData.append('tel', user.tel);
    formData.append('role', user.role);
    formData.append('avatar', image);

    return this.httpClient.post<{message:string}>(`${this.userUrl}/addUser`, formData);
  }
  getUserById(id: number) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/getuser/${id}`);

  }
  login(user: any) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userUrl}/login`, user);
  }
  deleteUser(id: string) {
    return this.httpClient.delete<{ message: any }>(`${this.userUrl}/delete/${id}`);
  }
}

