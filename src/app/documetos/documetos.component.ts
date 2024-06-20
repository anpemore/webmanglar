import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-documetos',
  templateUrl: './documetos.component.html',
  styleUrls: ['./documetos.component.css']
})
export class DocumetosComponent {
    @Output() datoAlPadre =new EventEmitter<string>();
    title="Documentales De San Jose Del Playón";
    doc="Fiestas patronales";
    doc1="Carreras de caballo";
    doc2="Cosechar la producción";
    doc3="Anédoctas";
    doc4="Personajes";
     getLlenar(valor:string){
         this.datoAlPadre.emit(valor);
        
        /* alert("llenamos la variable padre");*/
    }
}
