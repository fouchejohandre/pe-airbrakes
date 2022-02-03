import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { LocateContactUsComponent } from './pages/locateContactUs/locateContactUs.component';
import { GetInTouchComponent } from './pages/getInTouch/getInTouch.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'aboutUs',           component: AboutUsComponent },
    { path: 'locateContactUs',          component: LocateContactUsComponent },
    { path: 'getInTouch',      component: GetInTouchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
