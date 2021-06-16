import { Injectable } from '@angular/core';


import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";

// import { auth } from 'firebase/app';

// import auth from 'firebase/app';

import { firebase } from '@firebase/app';
import { User } from '../shared/interfaces';
// import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(public afAuth: AngularFireAuth, public router: Router) {

    // Subscribe to the authentication state
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', ""); // TODO SET THIS TO NULL???
      }
    })

  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user !== null;
  }

  async loginWithGoogle() {
    // await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    
    console.log("ADD LOGIN WITH GOOGLE SERVICE");
  }


  async login(email: string, password: string){
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);

    console.log("TODO redirect based on the result state");
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

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }
}
