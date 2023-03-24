import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './conversor/conversor.component';

import { MoedaService } from './service/moeda.service';
import { ConversorService } from './service/conversor.service';

import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';




@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent
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
