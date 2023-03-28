import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormComponent } from './MyModules/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ShowBookComponent } from './MyModules/show-book/show-book.component';
import { UpdateFormComponent } from './MyModules/update-form/update-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FormComponent,
    ShowBookComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [HttpClient, HttpClientModule, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
