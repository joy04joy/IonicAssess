import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =""
  password: string =""

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    this.router.navigate(['/home'])
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(username, password)
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("User not found")
      }
    }
  }

}
