import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicSharedModule } from './public-shared.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LayoutComponent }
    ]),
    PublicSharedModule
  ]
})
export class PublicModule { }
