import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    nombre:string="";
    apellido:string="";
    telefono:string="";
    email:string="";
    
    VerificarCampos(){         
      if(this.nombre==""){
         alert("No se puede guardar nada datos en blanco");
       /*  if(this.apellido=="")
            alert(this.apellido);
         if(this.telefono=="")
            alert(this.telefono);
         if(this.email=="")
            alert(this.email);*/
    }
    else
        alert("Se guardaran Datos todo esta bien");
   }

   LimpiarCampos(){
      this.nombre="";
      this.apellido="";
      this.telefono="";
      this.email="";
   }
    
}
