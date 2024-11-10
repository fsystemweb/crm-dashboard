import { UserRolePipe } from './user-role.pipe';
import { UserInfo } from '../models/user-info.interface';

describe('UserRolePipe', () => {
  let pipe: UserRolePipe;

  beforeEach(() => {
    pipe = new UserRolePipe();
  });

  it('should return formatted string with fullname and role when user is provided', () => {
    const user: UserInfo = { fullname: 'John Doe', role: 'Admin', picture: 'jonh.ong' };
    expect(pipe.transform(user)).toBe('John Doe - Admin');
  });
});
