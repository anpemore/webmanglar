import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-documetos',
  templateUrl: './documetos.component.html',
  styleUrls: ['./documetos.component.css']
})
export class DocumetosComponent {
    @Output() datoAlPadre =new EventEmitter<string>();
    title="Colegio Vereda el Leon";
    doc="Fiestas Culturales";
    doc1="Fiesta dos";
    doc2="Actividad tres";
    doc3="Anédoctas";
    doc4="Personajes";
     getLlenar(valor:string){
         this.datoAlPadre.emit(valor);
        
        /* alert("llenamos la variable padre");*/
    }
}
