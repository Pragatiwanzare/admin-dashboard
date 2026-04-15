import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
})
export class Course {
  courseList: any[] = [];

  course = {
    name: '',
    feesAmount: '',
    duration: '',
    requiredQualification: '',
    feesPolicy: '',
  };

  isEditMode = false;
  editIndex: number | null = null;

  addCourse() {
    if (this.isEditMode && this.editIndex !== null) {
      this.courseList[this.editIndex] = { ...this.course };
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.courseList.push({ ...this.course });
    }
    this.resetForm();
  }

  editCourse(index: number) {
    this.course = { ...this.courseList[index] };
    this.isEditMode = true;
    this.editIndex = index;
  }

  deleteCourse(index: number) {
    this.courseList.splice(index, 1);
  }

  resetForm() {
    this.course = {
      name: '',
      feesAmount: '',
      duration: '',
      requiredQualification: '',
      feesPolicy: '',
    };
  }
}