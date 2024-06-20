import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent {
    dato:string="";
    setHistoria(valor:string){
         this.dato=valor;
    }
}
