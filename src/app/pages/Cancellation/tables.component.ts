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
  fetch=[];
  len="";
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

  Openpopup()
  {
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("hell").style.opacity = "0.2";
  }
  Closepopup()
  {
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("hell").style.opacity = "1";
  }

  onSubmit()
  {
    console.log("working!");
    console.log(this.cancel);
      this.bus.cancelb(this.cancel)
      .subscribe(
        data => {console.log("Success!!!",data);
        this.fetch=data[0];
        this.len=data[0].path.length;
        this.source=data[0].source;
        this.destination=data[0].destination;
        this.path=data[0].path;
        this.qty=data[0].quantity;
        
        
      },
        error => {
                  console.log("Error!",error);
                  this.router.navigate(['/check-information']);
                }
      )

}
}
