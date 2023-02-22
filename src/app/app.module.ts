import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructionComponent } from './instruction/instruction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {enableProdMode} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InstructionComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
