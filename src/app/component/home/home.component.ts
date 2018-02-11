import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public idx;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  swipe(route) {
    this.router.navigate([route]);
  }
}
