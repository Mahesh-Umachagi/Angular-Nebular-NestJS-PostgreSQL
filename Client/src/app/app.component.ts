import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "nebular-app";
  companies$: Observable<string>;
  constructor(http: HttpClient) {
    this.companies$ = http.get(`${environment.apiUrl}`, {
      responseType: "text"
    });
  }
}
