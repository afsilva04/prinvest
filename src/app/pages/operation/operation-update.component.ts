import { Component } from '@angular/core';
import { Operation } from './operation.model';
import { OperationService } from './operation.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user/user.service';

@Component({
	selector: 'operation-update',
	templateUrl: './operation-form.component.html',
	providers: [OperationService, UserService]
	})
export class OperationUpdateComponent{
	public title:string;
	public dateStruct: NgbDateStruct;
    public operation:Operation;
	public id:number;
	public options:ToastrConfig;
	public coins:any[];
	public users:any[];

	constructor(
		private _operationService:OperationService,
		private _userService:UserService,
        private _route:ActivatedRoute,
		private _router:Router,
		private _toastrService:ToastrService,
		private ngbDateParserFormatter: NgbDateParserFormatter
	){
		this.title = 'Update Operation';
		this.operation = new Operation (null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
		this.options = this._toastrService.toastrConfig;
    }
    
    ngOnInit(){
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
		});

		this._operationService.getCoins().subscribe(
			response => {
				this.coins = response;
			}
		);

		this._userService.getUsers().subscribe(
			response => {
				this.users = response;
			}
		);
		
		this._operationService.getOperation(this.id).subscribe(
			response => {
				this.operation = response;
				this.dateStruct = this.ngbDateParserFormatter.parse(this.operation.date);
			}
		);	      
	}
	
	saveOperation() {
		let d = this.ngbDateParserFormatter.format(this.dateStruct);
		this.operation.date = new Date(d).toISOString();
		
		this._operationService.updateOperation(this.operation).subscribe(
			response => {
				this.showMessage('success', 'Updated', 'Operation was successfully updated');
			}
		);
		console.log(this.operation);
	}

	public showMessage(type, title, message){
		this.options.tapToDismiss = true;
		this.options.timeOut = 10000;
		this.options.positionClass = 'toast-top-right';

		this._toastrService.toastrConfig.timeOut = 10000;
		this._toastrService.toastrConfig.extendedTimeOut = 5000;
		this._toastrService.toastrConfig.maxOpened = 0;
		this._toastrService.toastrConfig.tapToDismiss = true;
		this._toastrService.toastrConfig.positionClass = 'toast-top-right';
		this._toastrService.toastrConfig.titleClass = 'toast-title';
		this._toastrService.toasts.push(this._toastrService[type](message,title));
	}	
}