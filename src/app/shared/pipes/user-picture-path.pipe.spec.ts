import { UserPicturePathPipe } from './user-picture-path.pipe';

describe('UserPicturePathPipe', () => {
  let pipe: UserPicturePathPipe;

  beforeEach(() => {
    pipe = new UserPicturePathPipe();
  });

  it('should return the full picture path when picture name is provided', () => {
    const picture = 'john_doe.jpg';
    expect(pipe.transform(picture)).toBe('/images/users/john_doe.jpg');
  });

  it('should return black user svg when picture is empty', () => {
    expect(pipe.transform('')).toBe('/images/users/blank-user.png');
  });
});
