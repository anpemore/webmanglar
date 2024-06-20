import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @Output() newItemEvent = new EventEmitter<string>();
    titulo="Videos En Mahate";    
    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }
}



