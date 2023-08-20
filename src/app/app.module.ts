import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, NavbarLinkComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LandingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
