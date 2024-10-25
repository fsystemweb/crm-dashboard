import { Pipe, PipeTransform } from '@angular/core';
import { UserInfo } from '../models/user-info.interface';

@Pipe({
  name: 'userRole',
  standalone: true,
})
class UserRolePipe implements PipeTransform {
  transform(user: UserInfo): string {
    if (!user) {
      return '';
    }

    return `${user.fullname} - ${user.role}`;
  }
}

export { UserRolePipe };
