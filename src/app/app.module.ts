import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
