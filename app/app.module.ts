import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreServicesModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreServicesModule,
        SharedModule,
        UserModule,
        AppRoutingModule
   ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
