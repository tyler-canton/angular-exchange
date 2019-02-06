import { Questions } from "./../shared/questions.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
// tslint:disable-next-line:import-blacklist
import "rxjs/Rx";
// tslint:disable-next-line:import-blacklist
import { Subject, Observable } from "rxjs/Rx";
import { mergeMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class ExchangeService {
  passGetExchangeQuestionsData = new Subject<Questions[]>();
  passGetExchangeQuestionData = new Subject<Questions>();

  constructor(private http: Http) {}
  postQuestion(question: any[]) {
    return this.http.post(
      "https://variableassign-1498009708125.firebaseio.com/data.json",
      question
    );
  }
  getExchangeQuestion(question: string) {
    return this.http
      .get(`${environment.apiHost}&intitle=${question}&site=stackoverflow`)
      .map((response: Response) => {
        const data = response.json();
        return data.items;
      })
      .catch((error: Response) => {
        return Observable.throw("Something went wrong");
      });
  }
}
