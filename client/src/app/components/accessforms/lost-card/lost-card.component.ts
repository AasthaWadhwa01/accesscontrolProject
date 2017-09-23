  import { Component, OnInit } from '@angular/core';
  import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
  import { Router } from '@angular/router';

  import { LostCardService } from '../../../services/lost-card.service';
  import { config } from '../../../config';

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styleUrls: ['./lost-card.component.css']
})

export class LostCardComponent implements OnInit {

    date: any;
    comment: any;
    data: any = [];
    datepickerModel: Date;
    errors: any;
    config: any;
    //Constructor initialize LostcardService & Router 
    constructor(private LostCardService: LostCardService, private router: Router) {}

    ngOnInit() {
    this.getConfig();
  }

    getConfig(): any {
    return Promise.resolve(config)
    .then(data => {
      this.config = data;
    })
  }


    //method call on submit button for saving the reasion & date of lost card
    save(comment: string, date: any) {

      this.data = {
        comment: comment,
        date: date
      };
      this.LostCardService.save(this.data).subscribe((data: any) => {
        this.router.navigate(['/empdash']);
      },
      error => {
         this.errors = error;
       })

    }

    //method call on Go back button & navigate to dashboard of employee
    back() {
      this.router.navigate(['/empdash']);
    }
  }
