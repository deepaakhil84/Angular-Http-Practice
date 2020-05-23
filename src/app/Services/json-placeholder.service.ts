import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  readonly URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getdata(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }


}
