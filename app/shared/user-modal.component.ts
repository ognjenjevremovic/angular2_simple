import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../core/user.service';
import { IUser } from '../user/user.interface';

@Component({
    moduleId: module.id,
    templateUrl: 'user-modal.component.html',
    selector: 'ua-user-modal'
})
export class UserModalComponent {
    @Input() user: IUser;
    @Output() userDeleted: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private _userService: UserService
    ) { }

    removeUser(): void {
        this._userService.removeUserById(this.user._id)
            .subscribe(
                (data) => this.userDeleted.emit()
            );
    }

}
