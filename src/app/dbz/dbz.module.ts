import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManiPageComponent } from './mani-page/mani-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [    
  ManiPageComponent, PersonajesComponent, AgregarComponent],
  exports:[
    ManiPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
