import { Angular4UdemyPage } from './app.po';

describe('angular4-udemy App', () => {
  let page: Angular4UdemyPage;

  beforeEach(() => {
    page = new Angular4UdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
