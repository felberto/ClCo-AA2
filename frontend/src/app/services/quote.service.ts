import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";
import {environment} from "../../environments/environment";

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<HttpResponse<Quote>> {
    return this.http.get<Quote>(environment.SERVER_API_URL + '/quote', {observe: 'response'});
  }
}
