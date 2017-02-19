import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreServicesModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreServicesModule,
        SharedModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
