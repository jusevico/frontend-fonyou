import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { EmpleadosFormComponent } from './empleados-form/empleados-form.component';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {SharedModule} from "../../shared/shared.module";
import {ComponentsModule} from "../../shared/components/components.module";
import {ApiService} from "../../shared/services/api.service";

@NgModule({
  declarations: [
    EmpleadosComponent,
    EmpleadosFormComponent,
    EmpleadosListComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatLineModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class EmpleadosModule { }
