import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThirdPartyService } from '../../../services/third-party.service';
import { config } from '../../../config';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css']
})

export class ThirdPartyComponent implements OnInit {
  errors: any;
  config: any;

  //constructor initializes third party service and router
  constructor(private thirdparty: ThirdPartyService, private router: Router) {}

  //method call on submit button for saving the details of third party
  thirdpartySubmit(term) {
    this.thirdparty.thirdPartyInsert(term.value).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    })
    error => {
      this.errors = error;
    }
  }

  //method to get config elements
  getConfig(): any {
    return Promise.resolve(config)
      .then(data => {
        this.config = data;
      })
  }

  //method called on Go back button and navigate to dashboard of employee
  back() {
    this.router.navigate(['/dashboard']);
  }

  //getting config elements on page load
  ngOnInit() {
    this.getConfig();
  }
}
