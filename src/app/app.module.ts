import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { PortfolioComponent } from './pages/profile/portfolio/portfolio.component';
import { FooterComponent } from './partials/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
