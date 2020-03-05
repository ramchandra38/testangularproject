import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  //apiUrl
  apiUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  //getAllUsers
  getAllUsers() {
    return this.http.get(this.apiUrl + 'users', {});
  }

  //getSpecificUserRepository
  getSpecificUserRepository(data): Observable<any> {
    return this.http.get(this.apiUrl + `users/${data}` + '/repos', {});
  }

  //searchUserByName
  searchUserByName(data): Observable<any> {
    return this.http.get(this.apiUrl + 'search/users?q=' + `${data}`, {});
  }

}

