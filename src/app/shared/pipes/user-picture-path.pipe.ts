import { Pipe, PipeTransform } from '@angular/core';

const userPathFolder = '/images/users/';

@Pipe({
  name: 'userPicture',
  standalone: true,
})
class UserPicturePathPipe implements PipeTransform {
  transform(picture: string): string {
    if (!picture) {
      return '';
    }

    return userPathFolder + picture;
  }
}

export { UserPicturePathPipe };
