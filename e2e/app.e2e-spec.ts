import { ThestrewAngularPage } from './app.po';

describe('thestrew-angular App', () => {
  let page: ThestrewAngularPage;

  beforeEach(() => {
    page = new ThestrewAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
