import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardComponent } from './dashboard.component';
import { InfoPanelsComponent } from './info-panels/info-panels.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    InfoPanelsComponent
  ]
})

export class DashboardModule { }
