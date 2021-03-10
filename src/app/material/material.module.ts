import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
