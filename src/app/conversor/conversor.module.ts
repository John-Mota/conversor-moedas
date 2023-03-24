import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ConversorComponent } from './conversor/conversor.component';
import { MoedaService } from './service/moeda.service';
import { ConversorService } from './service/conversor.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
