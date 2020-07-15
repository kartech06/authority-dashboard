import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import {CancelB} from '../../services/cancelbus';
import {BusService} from '../../services/bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  source="";
  destination="";
  path=[];
  qty="";
cancel=new CancelB("");
  constructor(private appService: AppService,private bus: BusService,private router: Router) {}
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
    console.log(this.cancel);
      this.bus.cancelb(this.cancel)
      .subscribe(
        data => {console.log("Success!!!",data);
        this.router.navigate(['/dashboard']);
        this.source=data.source;
        console.log(this.source);        
        this.destination=data.destination;
        console.log(this.destination); 
        this.path=data.path;
        console.log(this.path);
        this.qty=data.quantity;
        console.log(this.qty);
      },
        error => {
                  console.log("Error!",error);
                  this.router.navigate(['/check-information']);
                }
      )

}
}
