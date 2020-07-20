import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Train } from '../../services/train';
import { TrainService } from '../../services/train.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-retrain',
  templateUrl: './retrain.component.html',
  styleUrls: ['./retrain.component.scss']
})
export class RetrainComponent implements OnInit {
  retrain=new Train('','','');
  errorMsg="";
  successMsg=""
    constructor(
          private appService: AppService,
          private trainservice: TrainService ,
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
      console.log(this.retrain);
        this.trainservice.check(this.retrain)
        .subscribe(
          data => {console.log("Success!!!",data);
          this.successMsg=data;
          this.router.navigate(['/train-reschedule']);
        },
          error => {
                    console.log("Error!",error);
                    this.errorMsg=error.error;
                    this.router.navigate(['/train-reschedule']);
                  }
        )
    }
}
