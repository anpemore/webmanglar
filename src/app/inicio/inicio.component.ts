import { Component } from '@angular/core';
import { ConexionesService } from '../conexiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
        titulo="Que son las Empresa";
        constructor(conexionesService:ConexionesService){
       
      } 
}
