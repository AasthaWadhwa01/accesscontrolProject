import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

public data: any;

 constructor(private router: Router) { }

 ngOnInit() {
 }

redir(empid:any) {
 this.router.navigate(['/accessforms', empid])
}
}