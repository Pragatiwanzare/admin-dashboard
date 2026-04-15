import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './permission.html',
  styleUrls: ['./permission.css']
})
export class Permission implements OnInit {

  permissions: any[] = [];

  permissionData = {
    permission: ''
  };

  editId: string | null = null;

  ngOnInit() {
    // dummy data for UI
    this.permissions = [
    ];
  }

  savePermission() {
    if (this.editId) {
      const index = this.permissions.findIndex(
        p => p.permission === this.editId
      );
      if (index !== -1) {
        this.permissions[index] = { ...this.permissionData };
      }
    } else {
      this.permissions.push({ ...this.permissionData });
    }
    this.resetForm();
  }

  editPermission(p: any) {
    this.editId = p.permission;
    this.permissionData = { permission: p.permission };
  }

  deletePermission(permission: string) {
    this.permissions = this.permissions.filter(
      p => p.permission !== permission
    );
  }

  resetForm() {
    this.editId = null;
    this.permissionData = { permission: '' };
  }
}
