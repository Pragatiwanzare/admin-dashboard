import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './college.html',
  styleUrls: ['./college.css']
})
export class College implements OnInit {

  colleges: any[] = [];

  collegeData = {
    cname: '',
    city: '',
    university: '',
    hodname: '',
    hodcontact: '',
    tponame: '',
    tpocontact: ''
  };

  editId: string | null = null;

  ngOnInit() {
    // dummy data (UI testing)
    this.colleges = [
    ];
  }

  saveCollege() {
    if (this.editId) {
      const index = this.colleges.findIndex(c => c.cname === this.editId);
      this.colleges[index] = { ...this.collegeData };
    } else {
      this.colleges.push({ ...this.collegeData });
    }
    this.resetForm();
  }

  editCollege(college: any) {
    this.editId = college.cname;
    this.collegeData = { ...college };
  }

  deleteCollege(cname: string) {
    this.colleges = this.colleges.filter(c => c.cname !== cname);
  }

  resetForm() {
    this.editId = null;
    this.collegeData = {
      cname: '',
      city: '',
      university: '',
      hodname: '',
      hodcontact: '',
      tponame: '',
      tpocontact: ''
    };
  }
}
