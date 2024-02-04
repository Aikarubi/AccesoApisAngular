import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { DataService } from '../../services/data.service';
import { Meme } from '../../models/response.interface';

@Component({
  selector: 'app-memigo-two',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo-two.component.html',
  styleUrl: './memigo-two.component.css'
})
export class MemigoTwoComponent {
  constructor(public service: DataService) { }

  public memes: Meme[] = [];
  public title: string = 'My title';
  public counter: number = 0;
  public photo: string = 'url(https://img.squadhelp.com/story_images/visual_images/memiqo.png?class=show)';





  public getResponse(): void {
    this.service.getMemeResponse().subscribe(response => {
      this.memes = response.data.memes;
      this.title = this.memes[0].name;
      this.photo = `url(${this.memes[0].url})`;
    });
  }

  /* public previous(): void {
     if (this.counter === 0) {
       this.counter = this.memes.length - 1;
     } else {
       this.counter--;
     }
   }
 
   
 
   public next(): void {
     if (this.counter === this.memes.length - 1) {
       this.counter = 0;
     } else {
       this.counter++;
     }
    
   }*/

  public changeMeme(position: number): void {
    this.counter += position;
    if (this.counter === this.memes.length) {
      this.counter = 0;

    } else if (this.counter < 0) {
      this.counter = this.memes.length - 1;
    }
    this.title = this.memes[this.counter].name;
    this.photo = `url(${this.memes[this.counter].url})`;
  }

  public ngOnInit(): void {
    this.getResponse();
  }
}
