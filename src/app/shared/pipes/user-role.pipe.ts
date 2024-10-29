import { Pipe, PipeTransform } from '@angular/core';
import { UserInfo } from '../models/user-info.interface';

@Pipe({
  name: 'userRole',
  standalone: true,
})
export class UserRolePipe implements PipeTransform {
  transform(user: UserInfo): string {
    if (!user) {
      return '';
    }

    return `${user.fullname} - ${user.role}`;
  }
}
