import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

/*
  Use
  import { MatSelectSearchModule } from 'mat-select-search/src/public-api';
  to use the library. The import below is done from project folders because stackblitz is showing errors when using the above
  import statement. The import statement above works well on the local projects.
*/
import { MatSelectSearchModule } from '../../projects/mat-select-search/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
