import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
