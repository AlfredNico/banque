import { AdminSharedModule } from './admin-shared.module';
import { SharedModule } from './../shared/modules/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { LayoutComponent } from './../admin/components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    AdminSharedModule,
    RouterModule.forChild([
      { 
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', component: AdminHomepageComponent },
          { path: 'list-utilsatuer', component: UserListComponent }
        ]
      }
    ])
    
  ]
})
export class AdminModule { }
