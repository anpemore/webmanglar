import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class FotoComponent {
    @Output() valor = new EventEmitter<string>();
   // titulo="TRABAJO DE TECNOLOGIA 9 GRADO";   
      titulo="Socializacion del modelo canvas"
      mujer="Laura Cristina Arango Rueda ";
      hombre="Oscar Dario Higuita Gómez";
    iniciarVariable(valor:string){
        this.valor.emit(valor);
    }
contador_hombre=0;
    ejercervoto(){
             
         alert("GRACIAS POR SU VOTO");
         this.contador_hombre++;
    }
contador_mujer=0;
    ejercervoto1(){
             
      alert("GRACIAS POR SU VOTO");
      this.contador_mujer++;
 }
 
   resultado(){
       let totalVotos =this.contador_hombre+this.contador_mujer;
       if(this.contador_mujer>this.contador_hombre){
        alert("Nueva personera "+this.mujer+" "+this.contador_mujer);
       }
       else
       if(this.contador_hombre>this.contador_mujer){
         
         alert("Nuevo Personero "+this.hombre+"  "+this.contador_hombre);
       }
       else   
          alert("EMPATE  "+this.contador_hombre);

   }

}


