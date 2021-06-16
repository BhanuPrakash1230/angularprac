import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformComponent } from './reactform/reactform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';
import { HooksComponent } from './lifecyclehooks/hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent,
    ChangeColorDirective,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
