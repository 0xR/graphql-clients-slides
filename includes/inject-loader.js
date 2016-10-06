import injector from 'inject!../src/my-module.js';

describe('My module', () => {
  beforeEach(() => {
    myModule = injector({
      'events': eventsMock,
      '../lib/dispatcher': dispatcherMock,
      '../lib/handle-action': handleActionMock
    });
  });
});
