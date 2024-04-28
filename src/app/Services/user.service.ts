import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../Interfaces/user';
import { ProfileService } from './profile.service';
import { Repository } from '../Interfaces/repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new Subject<User>();
  private repositories = new Subject<Repository[]>();
  user$ = this.user.asObservable();
  repos$ = this.repositories.asObservable();

  constructor(private profileService: ProfileService) { 
    this.fetchInitialData();
  }

  sendUserInformation(data: User) {
    this.user.next(data);
    this.profileService.getReposInfo(data.repos_url).subscribe(data => this.repositories.next(data));
  }

  private fetchInitialData() {
    this.profileService.getProfileInfo('github').subscribe(data => {
      const user: User = {
        id: data.id,
        avatar_url: data.avatar_url,
        name: data.name,
        location: data.location,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        repos_url: data.repos_url
      }
      this.user.next(user);
      this.profileService.getReposInfo(user.repos_url).subscribe(data => this.repositories.next(data));
    })
  }
}
