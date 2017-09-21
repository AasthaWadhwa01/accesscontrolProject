import { Component, OnInit } from '@angular/core';
import {ThirdPartyService} from '../../services/third-party.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-thirdparty',
  templateUrl: './thirdparty.component.html',
  styleUrls: ['./thirdparty.component.css']
})
export class ThirdPartyComponent implements OnInit {

  constructor(private thirdParty :ThirdPartyService, private router:Router) { }


  thirdPartySubmit(term)
  {
    console.log(term.value);
    this.thirdParty.thirdPartyInsert(term.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/dashboard']); 
    })
     
  }

back() {
  this.router.navigate(['/dashboard']);
}

  ngOnInit() {
  }

}
