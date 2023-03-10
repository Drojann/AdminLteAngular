import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraficasComponent } from './graficas/graficas.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent},
    {path:'graficas', component:GraficasComponent}
  ]
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
