import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserHeaderComponent } from './user-header.component';
import { UserModalComponent } from './user-modal.component';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        UserHeaderComponent,
        UserModalComponent
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        UserHeaderComponent,
        UserModalComponent
    ]
})
export class SharedModule { }
