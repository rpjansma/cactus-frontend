import { Component, Input } from "@angular/core";

@Component({
    selector: 'c-movie',
    templateUrl: 'movie.component.html'
})

export class MovieComponent {

    @Input() description='';

    @Input() url='';
}