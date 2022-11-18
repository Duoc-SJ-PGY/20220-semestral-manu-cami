import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
    {
      path:'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path:'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path:'configuracion',
      loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
    },
    {
      path:'registro',
      loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
    },
    
    {
      path:'',
      //redirectTo: '/login', //modfificado 30-10-2022
      redirectTo: '/tablinks/inicio', //modfificado 30-10-2022
      pathMatch: 'full'
    },

    ]
  },
  {
    path: '',
    redirectTo: './tablinks/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}

