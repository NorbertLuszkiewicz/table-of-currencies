import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private themeService: ThemeService, private primengConfig: PrimeNGConfig) {}

  theme = "dark-style";

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  changeTheme(): void {
    this.theme = this.theme === "dark-style" ? "light-style" : "dark-style";
    this.themeService.switchTheme(this.theme);
  }
}
