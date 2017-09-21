import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent implements OnInit {

 public data:any;

  constructor(private router:Router) { }

  ngOnInit() {

  }
redir(empid:any)
{
  this.router.navigate(['/category',empid])
}

}
