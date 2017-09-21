import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LostCardService {

  constructor(private http: Http) { }


save(comment) {									//Lost Card Service to hit API of db to save details
	console.log(comment)
 // 	console.log(lostCard)
 /*let api='http://localhost:5000/update';*/
 return this.http
             .post('http://localhost:4000/lostInsert',comment)
             .map(res=>res.json());
	}


getLostCard()
{
	return this.http
	            .get('http://localhost:4000/findlost')
	            .map(res=>res.json());
}

	}
