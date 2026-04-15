import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company.html',
  styleUrls: ['./company.css']
})
export class Company {

  companyList: any[] = [];

  company = {
    cname: '',
    location: '',
    google_phno: '',
    email: '',
    pincode: '',
    area: '',
    hr_phone: '',
    hr_name: ''
  };

  isEditMode = false;
  editIndex: number | null = null;

  addCompany() {
    if (this.isEditMode && this.editIndex !== null) {
      this.companyList[this.editIndex] = { ...this.company };
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.companyList.push({ ...this.company });
    }
    this.resetForm();
  }

  editCompany(index: number) {
    this.company = { ...this.companyList[index] };
    this.isEditMode = true;
    this.editIndex = index;
  }

  deleteCompany(index: number) {
    this.companyList.splice(index, 1);
  }

  resetForm() {
    this.company = {
      cname: '',
      location: '',
      google_phno: '',
      email: '',
      pincode: '',
      area: '',
      hr_phone: '',
      hr_name: ''
    };
  }
}