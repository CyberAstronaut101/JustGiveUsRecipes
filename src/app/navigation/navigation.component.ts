import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy{

  @ViewChild('sidenav', {static: false}) sidenavRef!: MatSidenavModule;

  // private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  userLevel = 'default';
  userName = 'default';

  faBars = faBars;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private authListener: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    // private authService: AuthService,
    private router: Router) {
      this.authListener = this.authService.getAuthStatusListener()
        .subscribe(isAuthenticated => {
          console.log("NAVIGATION SUBSCRIPTION UPDATED WITH NEW AUTH STATE:");
          this.userIsAuthenticated = isAuthenticated;
      })

    }


  ngOnInit() {

    console.log("NAVIGATION: ",this.authService.isLoggedIn);

    // this.authService.getAuthStatus();

    // if(this.authService.isLoggedIn) {
    //   console.log(this.authService.isLoggedIn);
    //  this.userIsAuthenticated = true;
    // }
   
    // this.authListener = this.authService.getAuthStatusListener()
    //   .subscribe(isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   })
  }

  onLogout() {
    this.authService.logout();
    // clear token
    // inform all parts about auth change
    // this.authService.logout();
    this.router.navigate(['/auth/login']);
    // this.route.
  }

  ngOnDestroy() {
    // this.authListenerSubs.unsubscribe();
  }
    // have a listener to listen for the token

    // use auth service to get token


}
