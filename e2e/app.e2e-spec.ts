import { SASUIPage } from './app.po';

describe('sas-ui App', () => {
  let page: SASUIPage;

  beforeEach(() => {
    page = new SASUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
