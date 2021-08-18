import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mani-page',
  templateUrl: './mani-page.component.html'
})
export class ManiPageComponent  {

  constructor(){
    
  }

  nuevo: Personaje = {
    nombre: 'Mazinger',
    poder: 1000
  }

}
