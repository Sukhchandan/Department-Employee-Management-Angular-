import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url : string = "./assets/apidata/employeedata1.json";
  constructor(private _http:Http) { }

  getEmployees(){
    return this._http.get(this._url).pipe(map((response:Response)=> response.json())).pipe(catchError(this._errorHandler));
  }
  _errorHandler(error: Response){
    console.error(error);
    return throwError(error || "serverError");
  }
}
