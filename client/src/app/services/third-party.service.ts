import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ThirdPartyService {

  
constructor(private http: Http) { }

//to insert the values from database

thirdPartyInsert(thirdparty){

     return this.http

             .post('http://localhost:4000/thirdInsert',thirdparty)

             .map(res=>res.json());

}
//Method is use to hit api of express server and to retrieve detail of third partuy
getThird()
{
	return this.http
	            .get('http://localhost:4000/findthird')
	            .map(res=>res.json());
}

}

