import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
    @Output() valor = new EventEmitter<string>();
    titulo="Paisajes En Mahate";   
    
    
    iniciarVariable(valor:string){
        this.valor.emit(valor);
    }
}


