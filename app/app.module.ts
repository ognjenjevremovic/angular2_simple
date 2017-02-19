import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreServicesModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreServicesModule,
        SharedModule,
        UserModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
