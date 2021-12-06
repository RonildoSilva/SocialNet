import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeModule } from '../components/home/home.module';

const routes: Routes = [
  //Lazy load module 
  {
    path: '', 
    loadChildren: () => import('../components/home/home.module')
    .then((m:{HomeModule:HomeModule}) => m.HomeModule)
  },
  {
    path: 'login', 
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
