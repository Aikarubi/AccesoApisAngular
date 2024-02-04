import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/response.interface';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  constructor(public service: DataService) {}

    public users: Item[] = [];

    public getResponse(): void {
      this.service.getGithubResponse('developer').subscribe(response => {
        this.users = response.items;
      });
    }
  
}
