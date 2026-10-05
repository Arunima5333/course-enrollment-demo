import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseWiseEnrollmentComponent } from './course-wise-enrollment/course-wise-enrollment.component';

// No redirect from '' to 'course-enrollment' - the app must not auto-load the Course-wise
// Enrollment page on initial open. It's only reached by explicitly clicking "Course
// Enrollment" under Configure in the sidebar (see app.component.html), which still routes
// here via routerLink="/course-enrollment".
const routes: Routes = [
  {
    path: 'course-enrollment',
    component: CourseWiseEnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
