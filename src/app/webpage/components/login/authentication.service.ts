import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  //gọi API get token
  getDataLogin(credentials: { username: '', password: '' }) {
    return this.httpClient.post<any>('https://fakestoreapi.com/auth/login', credentials)
  }

}
