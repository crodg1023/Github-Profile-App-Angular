import { Component } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { RepositoryCardComponent } from '../repository-card/repository-card.component';
import { UserService } from '../../Services/user.service';
import { User } from '../../Interfaces/user';
import { Repository } from '../../Interfaces/repository';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserInfoComponent, RepositoryCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user!: User;
  repos: Repository[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() : void {
    this.userService.user$.subscribe(data => {
      this.user = data
    });
    this.userService.repos$.subscribe(data => {
      this.repos = data;
    });
  }
}
