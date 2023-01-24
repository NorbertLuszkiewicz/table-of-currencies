import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, share } from "rxjs/operators";
import { Currency, CurrencyResponse } from "../Types/currency";

@Injectable({
  providedIn: "root",
})
export class CurrencyService {
  // api_url should be in env
  api_url = `http://api.nbp.pl/api/exchangerates/tables/A/`;

  constructor(private http: HttpClient) {}

  getCurrencyList(date?: string): Observable<Currency[]> {
    const query = date ? `${date}/` : "";

    return this.http.get<CurrencyResponse[]>(`${this.api_url}${query}?format=json`).pipe(map(x => x[0].rates));
  }
}
