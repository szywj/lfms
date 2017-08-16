import { LfmsFrontPage } from './app.po';

describe('lfms-front App', () => {
  let page: LfmsFrontPage;

  beforeEach(() => {
    page = new LfmsFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
