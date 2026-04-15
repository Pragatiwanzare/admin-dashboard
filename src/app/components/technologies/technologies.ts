import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './technologies.html',
  styleUrls: ['./technologies.css']
})
export class Technologies implements OnInit {

  technologies: any[] = [];

  techData = {
    techId: null,
    techName: '',
    duration: '',
    version: ''
  };

  editId: number | null = null;

  ngOnInit() {
    // dummy data for UI testing
    this.technologies = [
    ];
  }

  saveTechnology() {
    if (this.editId !== null) {
      const index = this.technologies.findIndex(t => t.techId === this.editId);
      if (index !== -1) {
        this.technologies[index] = { ...this.techData };
      }
    } else {
      const newId = this.technologies.length + 1;
      this.technologies.push({
        ...this.techData
      });
    }
    this.resetForm();
  }

  editTechnology(tech: any) {
    this.editId = tech.techId;
    this.techData = { ...tech };
  }

  deleteTechnology(id: number) {
    this.technologies = this.technologies.filter(t => t.techId !== id);
  }

  resetForm() {
    this.editId = null;
    this.techData = {
      techId: null,
      techName: '',
      duration: '',
      version: ''
    };
  }
}
