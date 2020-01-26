import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  errorMsg: string;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployees()
     .subscribe(employeesData=>this.employees = employeesData,
      responseEmployeerError => this.errorMsg = responseEmployeerError);
  }

}
