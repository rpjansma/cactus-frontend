import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { MovieComponent } from './movie/movie.component';

@NgModule({
    declarations: [ MovieComponent ],
    exports: [ MovieComponent ],
    imports: [ HttpClientModule ]
})

export class MoviesModule {}