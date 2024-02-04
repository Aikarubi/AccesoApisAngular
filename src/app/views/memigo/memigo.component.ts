import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { DataService } from '../../services/data.service';
import { Meme } from '../../models/response.interface';

@Component({
  selector: 'app-memigo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo.component.html',
  styleUrl: './memigo.component.css'
})
export class MemigoComponent {
  constructor(public service: DataService) { }

  public title: string = 'Meme Nuevo';
  public photo: string = 'url(https://img.squadhelp.com/story_images/visual_images/memiqo.png?class=show)';
  public memes: Meme[] = [];


  public getResponse(): void {
    this.service.getMemeResponse().subscribe(response => {
      this.memes = response.data.memes;
    });
  }

  public ngOnInit(): void {
    this.getResponse();
  }
}
