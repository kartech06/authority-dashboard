import { Component, OnInit } from '@angular/core';
import {SigninService} from '../../services/signin.service';


@Component({
  selector: 'app-tsidebar',
  templateUrl: './tsidebar.component.html',
  styleUrls: ['./tsidebar.component.scss']
})
export class TsidebarComponent implements OnInit {

  constructor( private AuthorSignin: SigninService ) { }

  ngOnInit(): void {
  }
  name=this.AuthorSignin.username;

}
