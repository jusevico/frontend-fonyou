import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsPipe } from './pipes/thousands.pipe';
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    ThousandsPipe
  ],
  exports: [
    ThousandsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
