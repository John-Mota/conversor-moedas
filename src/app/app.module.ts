import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorModule } from './conversor/conversor.module';
import { MoedaModule } from './moeda/moeda.module';
import { ConversaoModule } from './conversao/conversao.module';
import { RespostaConversaoModule } from './resposta-conversao/resposta-conversao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConversorModule,
    MoedaModule,
    ConversaoModule,
    RespostaConversaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
