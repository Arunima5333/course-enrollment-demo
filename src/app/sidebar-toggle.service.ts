import { Injectable } from '@angular/core';

// Shared show/hide state for the left navigation sidebar (rendered in AppComponent), toggled
// from the list icon on the Course-wise Enrollment page. A single injectable service - rather
// than an @Input/@Output pair - because the toggle control and the sidebar it controls live in
// two components that are siblings in the router tree (AppComponent hosts <router-outlet>,
// CourseWiseEnrollmentComponent is routed into it), with no direct parent/child relationship
// for @Input/@Output to bridge.
@Injectable({ providedIn: 'root' })
export class SidebarToggleService {
  visible = true;

  toggle(): void {
    this.visible = !this.visible;
  }
}
