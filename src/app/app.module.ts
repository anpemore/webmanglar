import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia/historia.component';
import { VideoComponent } from './videos/video.component';
import { FotoComponent } from './foto/foto.component';
import { DocumetosComponent } from './documetos/documetos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConexionesService } from './conexiones.service';
import { PersonasComponent } from './personas/personas.component';
import { CulturaComponent } from './cultura/cultura.component';
import { DeportesComponent } from './deportes/deportes.component';
import { EconomiaComponent } from './economia/economia.component';

const rutas:Routes=[
  {path:'inicio',component:InicioComponent},
  {path:'fotos',component:FotoComponent},
  {path:'videos',component:VideoComponent},
  {path:'historias',component:HistoriaComponent},
  {path:'Documentales',component:DocumetosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    VideoComponent,
    
    FotoComponent,
    DocumetosComponent,
    InicioComponent,
    ContactoComponent,
    PersonasComponent,
    CulturaComponent,
    DeportesComponent,
    EconomiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ConexionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
