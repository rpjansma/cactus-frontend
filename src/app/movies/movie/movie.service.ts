import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

const API = 'http://localhost:3000/'

@Injectable({ providedIn: 'root'})

export class MovieService {
    

    constructor(private http: HttpClient) {}
    
    listFromUser(userName: string) {
        return this.http 
        .get<Movie[]>(API + userName + '/photos' )
    }
}