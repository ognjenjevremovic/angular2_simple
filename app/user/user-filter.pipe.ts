import { Pipe, PipeTransform } from '@angular/core';

import { IUser } from './user.interface';

@Pipe({
    name: 'filterByName'
})
export class UserFilterPipe implements PipeTransform {
    transform(users: IUser[], filterByName: string): IUser[] {
        filterByName = filterByName ? filterByName.toLocaleLowerCase() : null;
        return filterByName ? users.filter(
            (user: IUser) => user.name.first.toLocaleLowerCase().includes(filterByName) || user.name.last.toLocaleLowerCase().includes(filterByName)
        ) : users;
    }
}
