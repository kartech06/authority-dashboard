import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';
import { Login } from 'src/app/services/signin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private AuthorSignin: SigninService ,private router: Router) { }

  ngOnInit(): void {
  }
  login = new Login("","","");
  errorMsg='';
  // passbool=false;
  // confpass : string;
  // passcheck()
  // {
  //   if(this.Authoritymodel.password==this.confpass)
  //   {
  //     this.passbool=true;
  //   //  return this.passbool;
  //   }
  // }
  onSubmit()
    {
      console.log(this.login);
        this.AuthorSignin.check(this.login)
        .subscribe(
          data => {console.log("Success!!!",data);
          localStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard']);},
          error => {
                    console.log("Error!",error);
                    this.errorMsg=error.error;
                    this.router.navigate(['/signin']);
                  }
        )
    }
}
