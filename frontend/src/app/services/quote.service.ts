import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";
import {environment} from "../../environments/environment";

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) {
  }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(environment.SERVER_API_URL + '/quote');
  }
}
