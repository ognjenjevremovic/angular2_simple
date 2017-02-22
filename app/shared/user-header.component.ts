import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'user-header.component.html',
    selector: 'ua-user-header'
})
export class UserHeaderComponent {
    @Input() title: string;
    @Input() additionalInfo: string;
    @Input() buttonText: string;
    @Input() buttonNavigateTo: string;
    @Input() routerParams: any;
}