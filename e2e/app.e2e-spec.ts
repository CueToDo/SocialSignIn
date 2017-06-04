import { SocialSignInPage } from './app.po';

describe('social-sign-in App', () => {
  let page: SocialSignInPage;

  beforeEach(() => {
    page = new SocialSignInPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
