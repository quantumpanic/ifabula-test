import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'change-name',
    loadChildren: () => import('./change-name/change-name.module').then( m => m.ChangeNamePageModule)
  },
  {
    path: 'http-req',
    loadChildren: () => import('./http-req/http-req.module').then( m => m.HttpReqPageModule)
  },
  {
    path: 'hash-function',
    loadChildren: () => import('./hash-function/hash-function.module').then( m => m.HashFunctionPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
