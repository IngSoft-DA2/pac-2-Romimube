import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { ReflectionComponent } from './features/reflection/pages/reflection.component';

// ...otros imports y componentes

@NgModule({
  declarations: [
    AppComponent,
    ReflectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([]) // las rutas las configuras donde corresponda
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
