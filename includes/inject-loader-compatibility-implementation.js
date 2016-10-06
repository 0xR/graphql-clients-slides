// Make global for webpack inject loader compatibility
// TODO: Replace injectLoaderCompatibility with standard jest mocking
function injectLoaderCompatibility(specDirname, moduleUnderTest, modulesToInject) {
  // resetModules so we can inject new mock instances and get a new module
  jest.resetModules();

  const injectFiles = Object.keys(modulesToInject);
  const dirnameModuleUnderTest = path.dirname(moduleUnderTest);
  injectFiles.forEach(currentFilename => {
    const relativeFilename = path.join(specDirname, dirnameModuleUnderTest, currentFilename);
    // Ignore absolute imports
    const toMock = /^\./.test(currentFilename) ? relativeFilename : currentFilename;

    const mockFactory = () => modulesToInject[currentFilename];
    jest.doMock(toMock, mockFactory);
  });

  const absolutePathModuleUnderTest = path.join(specDirname, moduleUnderTest);
  return require(absolutePathModuleUnderTest);
}

global.injectLoaderCompatibility = injectLoaderCompatibility;
