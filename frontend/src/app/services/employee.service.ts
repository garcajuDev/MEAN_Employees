import { Injectable } from '@angular/core';
import { Employee } from '../models/employee'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly API_URL = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees(){
    return this.http.get(this.API_URL);
  }

  postEmployee(employee: Employee){
    return this.http.post(this.API_URL, employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.API_URL + `/${employee._id}`, employee );
  }

  deleteEmployee(_id: String){
    return this.http.delete(this.API_URL + `/${_id}`);
  }
}
