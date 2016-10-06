describe('My module', () => {
  beforeEach(() => {
    myModule = injectLoaderCompatibility(
      __dirname,
      '../src/my-module.js',
      {
        'events': eventsMock,
        '../lib/dispatcher': dispatcherMock,
        '../lib/handle-action': handleActionMock
      }
    );
  });
});
