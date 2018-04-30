import { Component, ViewEncapsulation } from '@angular/core';
import { single, multi } from './charts.data';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OperationService } from '../operation/operation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [OperationService]
})
export class DashboardComponent  {

  public single: any[];
  public multi: any[];

  public coinOps: any[];
 
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor(
    private _operationService:OperationService
  ) {
    this.coinOps = [];
    this._operationService.getOperationsByCoin().subscribe(
      response => {
        this.coinOps = response;
      }
    );

    Object.assign(this, {single});   
  }
  
  public onSelect(event) {
    console.log(event);
  }
   
}