import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DiceComponent } from './components/dice/dice.component';
import { GameClientService } from './services/game-client.service';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
