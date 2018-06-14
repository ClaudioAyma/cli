import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatToolbarModule, 
         MatCardModule, 
         MatInputModule, 
         MatProgressSpinnerModule,
         MatGridListModule,
         MatSidenavModule,  
         MatIconModule, 
         MatListModule,  
         MatMenuModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule, 
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSidenavModule,  
    MatIconModule, 
    MatListModule,  
    MatMenuModule 
  ],
  exports:[   
    CommonModule, 
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule, 
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSidenavModule,  
    MatIconModule, 
    MatListModule,  
    MatMenuModule 
  ],
  declarations: []
})
export class CustomMaterialModule  { }
