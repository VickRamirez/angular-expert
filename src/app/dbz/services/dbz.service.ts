import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    constructor(){        
    }

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        },
        {
            nombre: 'Krill',
            poder: 700
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personajeParam: Personaje){
        this._personajes.push(personajeParam);
    }

}