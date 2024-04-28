import { Component } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { User } from '../../Interfaces/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  username: string = '';

  constructor (private profileService: ProfileService, private userService: UserService) {}

  handleSearch() {
    this.profileService.getProfileInfo(this.username).subscribe(data => {
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
      this.userService.sendUserInformation(user);
    });
  }
  onInput(e: any) {
    const { value } = e.target;
    this.username = value; 
  }
}
