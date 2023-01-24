import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { ThemeService } from "src/app/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  theme = "dark-style";

  constructor(private themeService: ThemeService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  changeTheme(): void {
    this.theme = this.theme === "dark-style" ? "light-style" : "dark-style";
    this.themeService.switchTheme(this.theme);
  }
}
