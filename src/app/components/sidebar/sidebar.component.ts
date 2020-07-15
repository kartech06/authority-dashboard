import { Component, OnInit } from '@angular/core';
import {SigninService} from '../../services/signin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private AuthorSignin: SigninService) { }

  ngOnInit() {
  }
name=this.AuthorSignin.username;
}
