import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RoutingModule } from "./routing.module";
import { AppComponent } from "./app.component";
import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";
import { CComponent } from "./c/c.component";

@NgModule({
  declarations: [AppComponent, AComponent, BComponent, CComponent],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
