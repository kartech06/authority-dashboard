import { Component, OnInit } from '@angular/core';
import {SigninService} from '../../services/signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tsidebar',
  templateUrl: './tsidebar.component.html',
  styleUrls: ['./tsidebar.component.scss']
})
export class TsidebarComponent implements OnInit {

  constructor( private AuthorSignin: SigninService , private router: Router ) { }

  ngOnInit(): void {
  }
  onLogout()
  {
    this.AuthorSignin.Logout();
    this.router.navigate(['signin']);
    return false;
  }
  name=this.AuthorSignin.username;

}
