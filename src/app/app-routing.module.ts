import { NotfoundComponent } from './notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'materials', loadChildren: () => import('./material/material-module.module')
                                                .then(m => m.MaterialModuleModule)
  },
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
