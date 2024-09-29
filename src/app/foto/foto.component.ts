import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
    @Output() valor = new EventEmitter<string>();
    titulo="TRABAJO DE TECNOLOGIA 9 GRADO";   
    
    
    iniciarVariable(valor:string){
        this.valor.emit(valor);
    }
}


