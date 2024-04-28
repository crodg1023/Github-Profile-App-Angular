import { Component, Input } from '@angular/core';
import { User } from '../../Interfaces/user';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() user!: User;
}
