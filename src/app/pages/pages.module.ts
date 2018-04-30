import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { FormsModule }  from '@angular/forms';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { UserCreateComponent } from './user/user-create.component';
import { UserListComponent } from './user/user-list.component';
import { UserUpdateComponent } from './user/user-update.component';
import { ClientCreateComponent } from './client/client-create.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { ClientListComponent } from './client/client-list.component';
import { TransactionOutCreateComponent } from './transaction/transaction-out-create.component';
import { TransactionOutUpdateComponent } from './transaction/transaction-out-update.component';
import { TransactionListComponent} from './transaction/transaction-list.component';
import { SimulateInvoiceComponent } from './invoice/simulate-invoice.component';
import { AppointmentCreateComponent } from './appointment/appointment-create.component';
import { AppointmentListComponent } from './appointment/appointment-list.component';
import { OperationCreateComponent } from './operation/operation-create.component';
import { OperationUpdateComponent } from './operation/operation-update.component';
import { OperationListComponent } from './operation/operation-list.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,//.forRoot(PERFECT_SCROLLBAR_CONFIG),
    routing,
    FormsModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    ToastrModule.forRoot(),
    NgSelectModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserMenuComponent,
    BlankComponent,
    SearchComponent,
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
    TransactionOutCreateComponent,
    TransactionOutUpdateComponent,
    TransactionListComponent,
    SimulateInvoiceComponent,
    AppointmentCreateComponent,
    AppointmentListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientListComponent,
    OperationCreateComponent,
    OperationUpdateComponent,
    OperationListComponent
  ]
})
export class PagesModule { }
