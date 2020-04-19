import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonageComponent } from "./personage.component";
import { MainPersonageComponent } from "./main-personage/main-personage.component";
import { CultOfKosmosComponent } from "./cult-of-kosmos/cult-of-kosmos.component";

const routes: Routes = [
  { path: '', component: PersonageComponent, children: [
      { path: '', component: MainPersonageComponent },
      { path: 'main-personage', component: MainPersonageComponent },
      { path: 'cult-of-kosmos', component: CultOfKosmosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonageRoutingModule {}
