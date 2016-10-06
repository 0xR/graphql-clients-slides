// Make propType warnings errors
const consoleError = console.error;

function failTestForReactWarnings() {
  if (/Warning:/.test(arguments[0])) {
    fail(arguments[0]);
  }
  consoleError.apply(console, arguments);
}

jasmine.getEnv().beforeEach(() => {
  console.error = failTestForReactWarnings;
});

jasmine.getEnv().afterEach(() => {
  console.error = consoleError;
});
