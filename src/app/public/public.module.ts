import { SharedModule } from './../shared/modules/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicSharedModule } from './public-shared.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { 
        path: 'accueil',
        component: LayoutComponent,
        children: [
          { path: '', component: HomePageComponent }
        ]
      }, 
      { path: '', redirectTo: 'accueil', pathMatch: 'full' }
    ]),
    PublicSharedModule,
    MatIconModule,
    MatListModule,
  ],
})
export class PublicModule { }
