import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LiveFormDialogComponent } from './views/home/live-form-dialog/live-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,   
    LiveFormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
