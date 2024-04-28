import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../Interfaces/repository';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private URL: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getProfileInfo(username: string) : Observable<User> {
    return this.http.get<User>(`${this.URL}/${username}`);
  }
  getReposInfo(reposUrl: string) : Observable<Repository[]> {
    return this.http.get<Repository[]>(reposUrl);
  }
}
