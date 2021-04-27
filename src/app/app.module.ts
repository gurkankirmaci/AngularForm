import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrunService } from './urun.service';
import { HttpClientModule } from '@angular/common/http';
import { UrunDetayService } from './urun-detay.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [UrunService,  UrunDetayService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
