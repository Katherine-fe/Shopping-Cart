import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  show:boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  toggleCollapse() {
    this.show = !this.show
  }

  logout(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(['./login'])
    });
  }

}
