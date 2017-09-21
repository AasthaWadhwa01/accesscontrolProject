import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { LostCardService } from '../../services/lost-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lostcard',
  templateUrl: './lost-card.component.html',
  styleUrls: ['./lost-card.component.css']
})
export class LostCardComponent implements OnInit {
    date:any
    comment:any
    data:any=[]
  constructor(private LostCardService:LostCardService, private router:Router) { }

datepickerModel: Date;

  ngOnInit() {
     
  }
save(comment,date){
         
         this.data={/*"employeID":lostCard.name,*/
         /*date:lostCard.date,*/
         comment:comment,
         date:date    
         };
         this.LostCardService.save(this.data).subscribe((data:any)=>{
           this.router.navigate(['/dashboard']);
         })
          
}

back() {
  this.router.navigate(['/dashboard']);
}
}