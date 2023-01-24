import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { DropdownModule } from "primeng/dropdown";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CurrencyTableComponent } from "./components/currency-table/currency-table.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, CurrencyTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToggleButtonModule,
    DropdownModule,
    ToolbarModule,
    ButtonModule,
    CalendarModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
