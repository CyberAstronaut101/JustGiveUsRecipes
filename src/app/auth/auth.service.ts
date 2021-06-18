import { Injectable } from '@angular/core';


import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";

// import { auth } from 'firebase/app';

// import auth from 'firebase/app';

import { firebase } from '@firebase/app';
// import { User } from '@firebase/default/user';
import { User } from '../shared/interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NotificationService } from '../shared/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: any;
  // currentUser;
  // private authStatusSub = new BehaviorSubject(this.user);
  // currentAuthStatus = this.authStatusSub.asObservable();

  // public signedIn: Observable<any>;

  private authStatusListener = new Subject<boolean>();

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private notify: NotificationService
    ) {

    // this.signedIn = new Observable((subscriber) => {
    //   this.afAuth.onAuthStateChanged(subscriber);
    //   console.log("Signed In authStatusChanged");
    // });

    this.afAuth.authState.subscribe(user => {
      console.log("AUTH SERVICE::::: AUTHSTATE SUBSCIPTION UPDATED");
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user')!);
        this.authStatusListener.next(true);
      } else {
        this.authStatusListener.next(false);
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user')!);
      }
    })

  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // authStatusListener() {
  //   this.afAuth.onAuthStateChanged((credential) => {
  //     console.log("AUTH STATUS CHANGED");
  //     console.log(credential);
  //     if(credential) {

  //       // console.log(credential)
  //       // localStorage.setItem('user', JSON.stringify(credential.uid));

  //       this.authStatusSub.next(credential);
  //     } else {
  //       this.authStatusSub.next(null);
  //       localStorage.setItem('user', "")
  //     }
  //   })
  // }


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log("AuthService const user:", user)
    return user !== null;
  }

  async loginWithGoogle() {
    // await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    
    console.log("ADD LOGIN WITH GOOGLE SERVICE");
  }


  async login(email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log("Login Result");
        console.log(result);
        this.authStatusListener.next(true);
        this.router.navigate(['home']);
      })
      .catch(err => {
        console.log("ERROR:", err.message);

        this.notify.badAlert("Failed to Login!", "Okay");

        if(err.code == "auth/user-not-found") {
          return false;
        }

        return false;



      })

  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    return this.afAuth.currentUser.then(u => u?.sendEmailVerification())
    .then(() => {
      // this.router.navigate['verify-email'];
      console.log('Navigate router to verify-email page...')
      this.router.navigate(['auth/verify-email']);
    })
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  logout() {
    console.log("LOGGING OUT");

    return this.afAuth.signOut().then(() => {
      // Remove local storage of user
      localStorage.removeItem('user');

      this.authStatusListener.next(false);

      this.router.navigate(['auth/login']);

    })
  }
}
