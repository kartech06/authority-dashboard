import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RescheduleB } from '../../services/reschedule';
import { BusService } from '../../services/bus.service';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
rebus=new RescheduleB('','','');
errorMsg="";
successMsg="";
  constructor(
        private appService: AppService,
        private busservice: BusService ,
        private AuthorSignin: SigninService,
        private router: Router) {}
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log("working!");
    console.log(this.rebus);
      this.busservice.check(this.rebus)
      .subscribe(
        data => {console.log("Success!!!",data);
        this.successMsg=data;
},
        error => {
                  console.log("Error!",error);
                  this.errorMsg=error.error;
                  this.router.navigate(['/reschedule']);
                }
      )
  }

}
