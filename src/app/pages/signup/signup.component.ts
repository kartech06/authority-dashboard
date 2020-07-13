import { Component, OnInit } from '@angular/core';
import { Authority } from 'src/app/services/signup';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private AuthorSignup: SignupService ,private router: Router) { }

  ngOnInit(): void {
  }
  Authoritymodel = new Authority("","","","","","");
  errorMsg='';
  passbool=false;
  confpass : string;
  passcheck()
  {
    if(this.Authoritymodel.password==this.confpass)
    {
      this.passbool=true;
     return this.passbool;
    }
  }
  onSubmit()
    {
      console.log(this.Authoritymodel);
        this.AuthorSignup.enroll(this.Authoritymodel)
        .subscribe(
          data => {console.log("Success!!!",data);
          this.router.navigate(['/signin']);},
          error => {
                    console.log("Error!",error);
                    this.errorMsg=error.error;
                    this.router.navigate(['/signup']);
                  }
        )
    }
}
