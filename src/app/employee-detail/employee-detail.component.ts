import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employees = [];
  errorMsg: string;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployees()
     .subscribe(employeesData=>this.employees = employeesData,
      responseEmployeerError => this.errorMsg = responseEmployeerError);
  }

}
