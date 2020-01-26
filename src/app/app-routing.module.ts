import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
const routes: Routes = [
  {path: '', redirectTo: '/random', pathMatch:'full'},
  {path: 'random', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'random/:id', component: DepartmentDetailComponent},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent, PageNotFoundComponentComponent];
