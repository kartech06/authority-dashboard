import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.scss']
})
export class OccupancyComponent implements OnInit {

  constructor(private appService: AppService) {}
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

  ngOnInit(): void {
  }

}
