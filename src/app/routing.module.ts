import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";
import { CComponent } from "./c/c.component";

const routes: Routes = [
  { path: "", component: AComponent },
  { path: "component-b", component: BComponent },
  { path: "component-c", component: CComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
