import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LostCardService {

  constructor(private http: Http) { }
  
//Lost Card Service to hit API of db to save comment & date
save(comment) {	
	console.log(comment)
 return this.http
             .post('http://localhost:4000/lostInsert',comment)
             .map(res=>res.json());
	}

//Lost Card Service to hit API of db to get details of lost card
getLostCard()
{
	return this.http
	            .get('http://localhost:4000/findlost')
	            .map(res=>res.json());
}

	}
