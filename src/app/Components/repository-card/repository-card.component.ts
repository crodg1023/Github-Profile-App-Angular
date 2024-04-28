import { Component, Input } from '@angular/core';
import { Repository } from '../../Interfaces/repository';
import { User } from '../../Interfaces/user';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css'
})
export class RepositoryCardComponent {
  @Input() repoInfo!: Repository;

  handleRepoClick() {
    window.open(this.repoInfo.html_url);
  }

  getLastUpdated() {
    const lastUpdatedDate = new Date(this.repoInfo.updated_at);
    const currentDate = new Date();
    const msDifference = currentDate.getTime() - lastUpdatedDate.getTime();
    return Math.floor(msDifference / (1000 * 60 * 60 * 24));
  }
}
