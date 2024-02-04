import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() title: string = 'title';
  @Input() photo: string = 'url(https://img.squadhelp.com/story_images/visual_images/memiqo.png?class=show)';
  @Input() modalClass: string = 'modal';
  @Output() modal = new EventEmitter<string>();

  public closeModal(): void {
    this.modal.emit('modal');
  }
}
