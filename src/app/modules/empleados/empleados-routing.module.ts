import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmpleadosComponent} from './empleados.component';
import {EmpleadosFormComponent} from "./empleados-form/empleados-form.component";

const routes: Routes = [
  {path: '', component: EmpleadosComponent},
  {path: 'new', component: EmpleadosFormComponent},
  {path: ':id', component: EmpleadosFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule {
}
