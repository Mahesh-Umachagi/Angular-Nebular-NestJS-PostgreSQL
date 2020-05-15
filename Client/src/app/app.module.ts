import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule, NbCardModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SampleComponent } from "./sample/sample.component";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

@NgModule({
  declarations: [AppComponent, SampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, "fr-FR");
