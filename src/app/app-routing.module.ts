import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TablinksPage } from 'src/app/tablinks/tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
   {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
    },
   {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
   },
   {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
    },
    {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
    },
  ]
  },
  {
    path: '',
    redirectTo: '/tablinks/inicio', 
    pathMatch: 'full'
  },
  //Las siguientes rutas son para que la APP encuentre las subrutas!!!. (30-10-2022)
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'inicio',
    redirectTo: '/tablinks/inicio',
    pathMatch: 'full'
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'medios-pago',
    loadChildren: () => import('./medios-pago/medios-pago.module').then( m => m.MediosPagoPageModule)
  },
  {
    path: 'mis-compras',
    loadChildren: () => import('./mis-compras/mis-compras.module').then( m => m.MisComprasPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'condiciones',
    loadChildren: () => import('./condiciones/condiciones.module').then( m => m.CondicionesPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'agradecimientos',
    loadChildren: () => import('./agradecimientos/agradecimientos.module').then( m => m.AgradecimientosPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'medio-pago',
    loadChildren: () => import('./medio-pago/medio-pago.module').then( m => m.MedioPagoPageModule)
  },
  {
    path: 'banco',
    loadChildren: () => import('./banco/banco.module').then( m => m.BancoPageModule)
  },
  {
    path: 'banco2',
    loadChildren: () => import('./banco2/banco2.module').then( m => m.Banco2PageModule)
  },
  {
    path: 'recibo',
    loadChildren: () => import('./recibo/recibo.module').then( m => m.ReciboPageModule)
  },
  


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


