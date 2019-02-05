import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ExchangeService {
  constructor(private http: Http) {}
  questionExchange(question: any[]) {
    return this.http.post(
      "https://variableassign-1498009708125.firebaseio.com/data.json",
      question
    );
  }
}
