import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../models/quote';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  async getData(): Promise<Quote[]>{
    var data = await this.http.get<Quote[]>("https://www.breakingbadapi.com/api/quotes").toPromise();
    return data;
    /*return this.http.get("https://www.breakingbadapi.com/api/quotes")
      .pipe(map((data: any) =>{
        return data.map(function(quote: any): Quote{
          return new Quote(quote.quote_id, quote.quote, quote.author, quote.series);
        });
      }));*/
  }
}
