import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard';
import { Course } from './components/course/course';
import { College } from './components/college/college';
import { Company } from './components/company/company';
import { Department } from './components/department/department';
import { Role } from './components/role/role';
import { Permission } from './components/permission/permission';
import { Technologies } from './components/technologies/technologies';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'course', component: Course },
      { path: 'college', component: College },
      { path: 'company', component: Company },
      { path: 'department', component: Department },
      { path: 'role', component: Role },
      { path: 'permission', component: Permission },
      { path: 'technologies', component: Technologies }
    ]
  }
];
