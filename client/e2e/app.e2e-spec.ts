import { AppPage } from './app.po';

<<<<<<< HEAD
describe('client App', () => {
=======
describe('cse App', () => {
>>>>>>> 9905c514b4c1c27d3943afc5dcf240141d36e45d
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
