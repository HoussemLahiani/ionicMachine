import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { configFromSession } from '@ionic/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user= {
    email:'',
    password:''
  }
  constructor(private router: Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async logMeIn() { 
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user);

    if (user.user.email) {
      this.router.navigate(['/home']);
    } else{
        alert('Anmeldung fehlgeschlagen')
      }
    }
    //code for loggin
  async register () {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user);

    if (user.user.email) {
      alert('Regestrierung erfolgreich');
    } else{
      alert('Regestrierung fehlgeschlagen')
    }
  }
}
