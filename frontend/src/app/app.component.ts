import {Component, OnInit} from '@angular/core';
import {Quote} from "./models/Quote";
import {QuoteService} from "./services/quote.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClCo-AA2';

  randomQuote: Quote;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe(res => {
      this.randomQuote = res;
    });
  }
}
