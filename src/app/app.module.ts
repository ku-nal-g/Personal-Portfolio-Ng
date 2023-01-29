import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
