import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appsettings } from '../configurations/appsettings';

@Injectable({
    providedIn: 'root'
})

export class PokemonService{


    constructor( private http: HttpClient) {}


    getPokemons(pokemonId:number):Observable<any[]>{    
        const API_URL = `${Appsettings.API_ENDPOINT_FULL}/pokemon/${pokemonId}`;
        return this.http.get<any[]>( API_URL )
    }



}
