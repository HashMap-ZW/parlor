import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../_models/user-dto';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  createUser(user: UserDto) {
    return this.http.post<any>(`${this.apiUrl}/api/v1/Account/create`, user, this.httpOptions);
  }


  getUserById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }


  updateUser(id: number, user: UserDto) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, user, this.httpOptions);
  }


  deleteUser(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


  getAllUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/Account/getAll`);
  }
}