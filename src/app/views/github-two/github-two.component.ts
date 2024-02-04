import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/response.interface';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-github-two',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './github-two.component.html',
  styleUrl: './github-two.component.css'
})
export class GithubTwoComponent {
  constructor(public service: DataService) { }

  public users: Item[] = [];
  public modal: string = 'modal';
  public modalTitle: string = '';
  public modalPhoto: string = '';

    public getResponse(): void {
      this.service.getGithubResponse('angular').subscribe(response => {
        this.users = response.items;
      });
    }

  public openModal(profile: number): void {
    this.modalTitle = this.users[profile].login;
    this.modalPhoto = `url(${this.users[profile].avatar_url})`;
    this.modal = 'modal show-modal';
  }

  public closeModal(): void {
    this.modal = 'modal';
  }

  public ngOnInit(): void {
    this.getResponse();
  }
}
