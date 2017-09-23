import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DamagedCardService {
 constructor(public http:Http) { }


//method for inserting data of form to database in server side
 damage(request){
 return this.http
              .post('http://localhost:4000/damageInsert',request)
  .map(res => res.json(),(err:any)=>{
      err.json();
  });
}

// method for getting damage data from api in server side
getDamageCard()
{
	return this.http
	            .get('http://localhost:4000/'+'finddamage')
	            .map(res=>res.json());
}

}
