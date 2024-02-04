import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Meme';
  @Input() photo: string = 'url(https://img.squadhelp.com/story_images/visual_images/memiqo.png?class=show)';
  @Output() modal = new EventEmitter<string>();


  public onClick(): void {
    this.modal.emit('modal show-modal');
   }
}
