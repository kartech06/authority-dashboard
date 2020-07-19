import { Component, OnInit } from '@angular/core';
import {SigninService} from '../../services/signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private AuthorSignin: SigninService,private router: Router) { }

  ngOnInit() {
  }
  onLogout()
  {
    this.AuthorSignin.Logout();
    this.router.navigate(['signin']);
    return false;
  }
name=this.AuthorSignin.username;
}
