import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class AdminSharedModule { }
