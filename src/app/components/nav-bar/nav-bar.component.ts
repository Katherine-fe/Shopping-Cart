import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse() {
    this.show = !this.show
  }

}
