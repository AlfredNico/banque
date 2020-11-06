import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class PublicSharedModule { }
