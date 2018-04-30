import { Component } from '@angular/core';
import { Operation } from './operation.model';
import { OperationService } from './operation.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user/user.service';

@Component({
	selector: 'operation-create',
	templateUrl: './operation-form.component.html',
	providers: [OperationService, UserService]
	})
export class OperationCreateComponent{
	public title:string;
	public dateStruct:NgbDateStruct;
	public success: boolean;
	public operation:Operation;
	public options:ToastrConfig;
	public coins:any[];
	public users:any[];
	public toastrMessage:string;
	public toastrTitle:string;

	constructor(
		private _operationService:OperationService,
		private _userService:UserService,
		private _router:Router,
		private _toastrService:ToastrService,
		private ngbDateParserFormatter: NgbDateParserFormatter
	){
		this.title = 'Create Operation';
		this.success = null;
		this.operation = new Operation (null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
		this.options = this._toastrService.toastrConfig;
		this.toastrMessage = 'Mensaje!!!';
		this.toastrTitle = 'Titulo!!!';
	}

	ngOnInit() {
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

		let date = new Date();
		this.dateStruct = { day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
	}

	saveOperation() {
		let d = this.ngbDateParserFormatter.format(this.dateStruct);
		this.operation.date = new Date(d).toISOString();
		
		this._operationService.createOperation(this.operation).subscribe(
			response => {
				this.showMessage('success', 'Created', 'Operation was successfully created');
				this._router.navigate(['/pages/operation-update', response.id]);
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