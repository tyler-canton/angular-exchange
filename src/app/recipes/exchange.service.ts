import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ExchangeService {
  constructor(private http: Http) {}
  questionExchange(question: any[]) {
    return this.http.post(
      "https://variableassign-1498009708125.firebaseio.com/data.json",
      question
    );
  }
  getExchangeQuestion(question: string) {
    return this.http
      .get(
        `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${question}&site=stackoverflow`
      )
      .map((response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = "FETCHED_" + server.name;
        }
        return data;
      })
      .catch((error: Response) => {
        return Observable.throw("Something went wrong");
      });
  }
}
