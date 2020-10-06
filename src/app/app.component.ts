import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: "Ivan", country: "Guatemala"},
    {id: 2, name: "Andrea", country: "USA"}
  ];

  selectEmployee: Employee = new Employee();


  AgregarOrEditar()
  {
    if(this.selectEmployee.id === 0)
    {
      this.selectEmployee.id= this.employeeArray.length +1;
      this.employeeArray.push(this.selectEmployee);
    }
    this.selectEmployee = new Employee();
  }

  openForEdit(employee: Employee)
  {
    this.selectEmployee = employee;
  }

  delete()
  {
    if(confirm('Desea eliminar al Empleado'))
    {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectEmployee);
      this.selectEmployee = new Employee();
    }
  }
}
