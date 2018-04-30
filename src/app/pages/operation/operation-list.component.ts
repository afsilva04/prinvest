import { Component } from '@angular/core';
import { Operation } from './operation.model';
import { OperationService } from './operation.service';
import { Router } from '@angular/router';

@Component({
	selector: 'operation-list',
	templateUrl: './operation-list.component.html',
	providers: [OperationService]
	})
export class OperationListComponent{
	public title:string;
	public filter:string;
	public operation:Operation;
	public operations:Operation[];
	public settings = {
		selectMode: 'single',
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Actions',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [],
		  position: 'right'
		},
		disable: {
			editButtonContent: '<i class="fa fa-trash-o mr-3 text-primary"></i>',
			saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
			cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
		  saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		noDataMessage: 'No operations found',
		columns: {     
		  id: {
			title: 'Id',
			type: 'string',
			filter: false
			},
		  coin: {
				title: 'Coin',
				type: 'string'
			},			
		  entryBTC: {
			title: 'EntryBTC',
			type: 'string'
		  },			
		  exitBTC: {
			title: 'ExitBTC',
			type: 'string'
		  },			
		  userName: {
			title: 'User',
			type: 'string'
		  }
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
	  };
	
	constructor(
		private _operationService:OperationService,
		private _router:Router
	){ }

	ngOnInit(){
		this.title = 'Operations';
		this.filter = '';

		this._operationService.getOperations(this.filter).subscribe(
			(response:Operation[]) => {
				this.operations = response;
			}
		)
	}

	updateClient(event) {
		this._router.navigate(['/pages/operation-update/', event.data.id]);
	}

	searchOperations() {
		this._operationService.getOperations(this.filter).subscribe(
			response => {
				this.operations = response;
			}
		);
	}

}