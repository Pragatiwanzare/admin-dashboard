import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role.html',
  styleUrls: ['./role.css'],
})
export class Role {
  roleList: any[] = [];

  role = {
    roleName: '',
  };

  isEditMode = false;
  editIndex: number | null = null;

  addRole() {
    if (this.isEditMode && this.editIndex !== null) {
      this.roleList[this.editIndex] = { ...this.role };
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.roleList.push({ ...this.role });
    }
    this.resetForm();
  }

  editRole(index: number) {
    this.role = { ...this.roleList[index] };
    this.isEditMode = true;
    this.editIndex = index;
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
  }

  resetForm() {
    this.role = {
      roleName: '',
    };
  }
}