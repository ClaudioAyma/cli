import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {CustomMaterialModule } from '../material/material.module'
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule 
  ],
  declarations: [
    FormComponent
  ],
  exports:[
    FormComponent
  ]
})
export class LoginModule { }
