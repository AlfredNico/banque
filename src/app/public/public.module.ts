import { LoandComponent } from './components/loand/loand.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MoneyChangeComponent } from './components/money-change/money-change.component';
import { VirementComponent } from './components/virement/virement.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './../shared/modules/shared.module';
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
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'accueil', component: HomePageComponent }, 
          { path: 'pret-bancaire', component: LoandComponent },
          { path: 'inscription', component: SubscriptionComponent },
          { path: 'changement-devis', component: MoneyChangeComponent },
          { path: 'virement', component: VirementComponent },
          { path: 'recherche', component: RechercheComponent },
          { path: 'a-propos', component: AboutComponent },
          { path: '', redirectTo: 'accueil', pathMatch: 'full' }
        ]
      }, 
    ]),
    PublicSharedModule,
    MatIconModule,
    MatListModule,
  ],
})
export class PublicModule { }
