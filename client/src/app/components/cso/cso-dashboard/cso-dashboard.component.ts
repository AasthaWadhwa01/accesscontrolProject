import { Component, OnInit } from '@angular/core';

import { config } from '../../../config';

@Component({
  selector: 'app-cso-dashboard',
  templateUrl: './cso-dashboard.component.html',
  styleUrls: ['./cso-dashboard.component.css']
})
export class CsoDashboardComponent implements OnInit {

config = config;

  constructor() { }

  ngOnInit() {
  }

}
