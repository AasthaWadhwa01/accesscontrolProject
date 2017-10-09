 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParamMap, Params, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

public data: any;
role: any;
errors:string;

 constructor(private router: Router, private login:LoginService, private route: ActivatedRoute) { }

 ngOnInit() {
 		this.route.paramMap
      .switchMap((params: ParamMap) => this.login.getToken(this.route.snapshot.params['value']))
      .subscribe((res):any => {
        if(res!=null)
        {
        	this.role = this.login.getRole(res.UserID);
        }
        },
        error => {
          this.errors = error;
        })

/*     this.login.setToken().subscribe(data=>{
     this.data=data;
     let use = JSON.parse(localStorage.getItem(data.role));
    })*/
 }

redir(empid:any) {
	
 this.router.navigate(['/accessforms', empid])
}
}