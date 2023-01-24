import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CurrencyService } from "../currency.service";
import { Currency } from "../../Types/currency";

@Component({
  selector: "app-currency-table",
  templateUrl: "./currency-table.component.html",
  styleUrls: ["./currency-table.component.scss"],
})
export class CurrencyTableComponent implements OnInit {
  constructor(private currencyService: CurrencyService) {}
  subscriptions = new Subscription();
  currencies: Currency[] = [];
  currencyDate: Date | null = null;

  private _getCurrencyList(date?: string): void {
    const sub = this.currencyService.getCurrencyList(date).subscribe(
      currencyList => (this.currencies = currencyList),
      err => {
        if (err.error.toLowerCase().includes("brak danych")) this.currencies = [];
        else {
          window.alert(err.error);
        }
      }
    );
    this.subscriptions.add(sub);
  }

  ngOnInit(): void {
    this._getCurrencyList();
  }

  getCurrencyFromGivenDate(): void {
    if (!this.currencyDate) return;

    console.log(this.currencyDate.toISOString(), "ddd");

    const dateRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const date = this.currencyDate.toISOString().split("T")[0];

    if (!dateRegex.test(date)) return;

    this._getCurrencyList(date);
    this._getCurrencyList(date);
    this._getCurrencyList(date);
    this._getCurrencyList(date);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
