import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<HttpResponse<Quote>> {
    return this.http.get<Quote>('https://3qohjrpb94.execute-api.us-east-1.amazonaws.com/default/RequestQuote', {observe: 'response'});
  }
}
