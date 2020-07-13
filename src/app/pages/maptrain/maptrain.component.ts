import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-maptrain',
  templateUrl: './maptrain.component.html',
  styleUrls: ['./maptrain.component.scss']
})
export class MaptrainComponent implements OnInit {

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
