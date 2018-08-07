import { ApolloUIPage } from './app.po';

describe('apollo-ui App', () => {
  let page: ApolloUIPage;

  beforeEach(() => {
    page = new ApolloUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
