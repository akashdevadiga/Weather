// import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// @Component({
//   selector: 'app-responsive-tab',
//   templateUrl: './responsive-tab.component.html',
//   styleUrls: ['./responsive-tab.component.scss']
// })
// export class ResponsiveTabComponent {
//   isDesktopView = true;
//   constructor(private breakpointObserver: BreakpointObserver) {
//     this.breakpointObserver.observe([
//       Breakpoints.HandsetPortrait,
//       Breakpoints.TabletPortrait
//     ]).subscribe(result => {
//       this.isDesktopView = !result.matches;
//     });
//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-responsive-tab',
  templateUrl: './responsive-tab.component.html',
  styleUrls: ['./responsive-tab.component.scss'],
})
export class ResponsiveTabComponent implements OnInit {

  // @ViewChild('sidenav') sidenav: MatSidenav;

  isDesktopView: boolean = true;
  isMobileView: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  reason = '';

  ngOnInit() {
    // this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
    //   this.isDesktopView = !result.matches;
    //   this.isMobileView = result.matches;
    // });
  }


  close(reason: string) {
    this.reason = reason;
    // this.sidenav.close();
  }
}

