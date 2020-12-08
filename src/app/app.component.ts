import { Component, OnInit } from '@angular/core';
import { Movie } from './movies/movie/movie';
import { MovieService } from './movies/movie/movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  movies: Movie[] = []

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {

  this.movieService
  .listFromUser('flavio')
  .subscribe(movies => this.movies = movies);
}

}
