import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DamagecardService {

  constructor(public http:Http) { }

 damage(request){
 return this.http
              .post('http://localhost:4000/damageInsert',request)
  .map(res => res.json(),(err:any)=>{
      err.json();
  });
}

/*
save(fav) {
  console.log(fav);
  return this.http
              .post('http://localhost:7001/insert',fav)
              .map(res=>res.json());
 }

*/

getDamageCard()
{
	return this.http
	            .get('http://localhost:4000/finddamage')
	            .map(res=>res.json());
}

}
