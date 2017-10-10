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
value: any={}

 constructor(private router: Router, private loginService:LoginService, private route: ActivatedRoute) { }

 ngOnInit() {
   console.log(this.route.snapshot.params['value'])
 		this.route.paramMap
      .switchMap((params: ParamMap) => this.loginService.getToken(this.route.snapshot.params['value']))
      .subscribe((res):any => {
        console.log("res");
        console.log(res,"laksdjkadh");
        localStorage.setItem("userDetails", JSON.stringify(res));
         
         this.value= localStorage.getItem("userDetails")
         let userRole=JSON.parse(this.value).data.role;
         let empid=JSON.parse(this.value).data.UserID;
         if(userRole=='HR')
         {
           this.router.navigate(['/hrdash'])
         }else if(userRole=='CSO')
         {
           this.router.navigate(['/csodash'])
         }if(userRole=='SUPERVISOR')
         {
           this.router.navigate(['/superdash'])
         }if(userRole=='EMPLOYEE')
         {
           this.router.navigate(['/accessforms',empid])
         }
     /*   if(res!=null)
        {
        	this.role = this.login.getRole(res.UserID);
        }*/
        },
        error => {
          this.errors = error;
        })

     this.login.setValue(this.role)
 }
 use = JSON.parse(localStorage.getItem('role'));
redir(empid:any) {
	
 this.router.navigate(['/accessforms', empid])
}
}