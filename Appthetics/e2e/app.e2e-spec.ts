import { ApptheticsPage } from './app.po';

describe('appthetics App', () => {
  let page: ApptheticsPage;

  beforeEach(() => {
    page = new ApptheticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
