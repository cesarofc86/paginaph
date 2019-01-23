import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SinEspacios } from './form/validaciones.directive';
import { FormDosComponent } from './form-dos/form-dos.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: 'formDos', component: FormDosComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: FormComponent, pathMatch: 'full' }
];




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SinEspacios,
    FormDosComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
