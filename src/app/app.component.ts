import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmlycss';
  datos:string="";
  valor:string="";
  icono:string="";
  documental:string="";

  pdoc:string=""; 
  pdoc1:string=""; 
  pdoc2:string=""; 
  pdoc3:string=""; 
  clave:string="89557"
  codigo:string="";
  permiso:boolean=false;

  probar:boolean=false;

  IniciarVariable(valor:string){
      this.datos=valor; 
      this.icono="";  
      this.documental=""; 
      this.valor=""; 
      this.permiso=false;
      
  }
funcionCodigo(){
   if(this.codigo==this.clave){
       this.permiso=true;
       this.codigo="";
     }
}
  setHistoria(valor:string){
     this.valor=valor;  
     
    // require('./mysql/conexion.js');
}

 getVariableVideo(valor:string)
  {
     this.valor=valor;  
  }

  setIniciarvariable(valor:string){
       this.valor=valor;  
       this.documental="";
      // require('./mysql/conexion.js');
  }
  setIcono(icono:string){
       this.icono=icono;
       this.datos=""; 
       this.valor="";
       this.documental="";
  }
  setDocumental(valor:string){
       this.valor="";
       this.icono="";      
       this.documental=valor;           
  }
  funcionUno(valor:string){
         this.pdoc=valor;
         alert("valor "+valor)
  }
}