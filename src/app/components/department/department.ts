import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department.html',
  styleUrls: ['./department.css']
})
export class Department implements OnInit {

  departments: any[] = [];

  departmentData = {
    name: '',
    location: ''
  };

  editId: number | null = null;

  ngOnInit() {
    // temporary static data (test UI)
    this.departments = [
    ];
  }

  saveDepartment() {
    if (this.editId) {
      const index = this.departments.findIndex(d => d.id === this.editId);
      if (index !== -1) {
        this.departments[index] = {
          id: this.editId,
          ...this.departmentData
        };
      }
    } else {
      const newId = this.departments.length + 1;
      this.departments.push({
        id: newId,
        ...this.departmentData
      });
    }
    this.resetForm();
  }

  editDepartment(dept: any) {
    this.editId = dept.id;
    this.departmentData = {
      name: dept.name,
      location: dept.location
    };
  }

  deleteDepartment(id: number) {
    this.departments = this.departments.filter(d => d.id !== id);
  }

  resetForm() {
    this.editId = null;
    this.departmentData = {
      name: '',
      location: ''
    };
  }
}
