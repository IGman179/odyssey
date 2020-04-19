import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonageRoutingModule } from './personage-routing.module';
import { PersonageComponent } from './personage.component';
import { MainPersonageComponent } from './main-personage/main-personage.component';
import { CultOfKosmosComponent } from './cult-of-kosmos/cult-of-kosmos.component';


@NgModule({
  declarations: [MainPersonageComponent, CultOfKosmosComponent, PersonageComponent],
  imports: [
    CommonModule,
    PersonageRoutingModule
  ]
})
export class PersonageModule { }
