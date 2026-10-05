import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarToggleService } from './sidebar-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'course-enrollment-demo';

  // Tracks which side of the mobile breakpoint the viewport was on last, so onWindowResize()
  // only reacts when a resize actually crosses it - not on every resize within the same size.
  private isMobileWidth = false;

  constructor(public sidebarToggle: SidebarToggleService) { }

  ngOnInit(): void {
    // Sidebar defaults to visible (see SidebarToggleService) for desktop - on a mobile-sized
    // viewport it should start hidden instead, matching the Bootstrap sm breakpoint used
    // elsewhere for mobile-specific styling (see app.component.css).
    this.isMobileWidth = window.innerWidth < 576;
    if (this.isMobileWidth) {
      this.sidebarToggle.visible = false;
    }
  }

  // Keeps the sidebar's visibility correct when the viewport is resized across the mobile
  // breakpoint: always visible again on returning to desktop width, and hidden (not
  // auto-opened) on entering mobile width - matching ngOnInit()'s own initial-load rule.
  @HostListener('window:resize')
  onWindowResize(): void {
    const nowMobileWidth = window.innerWidth < 576;
    if (nowMobileWidth === this.isMobileWidth) {
      return;
    }
    this.isMobileWidth = nowMobileWidth;
    this.sidebarToggle.visible = !nowMobileWidth;
  }
}
