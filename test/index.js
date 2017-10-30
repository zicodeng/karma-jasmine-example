// Bootstrap all test files.
// This is where you tell the test runner where your files are located.
// The extra boolean flag indicates if you want it to go looking for files in subdirectories under ./.
const testContext = require.context('./', true, /\.spec\.(js|jsx|ts|tsx)$/);
testContext.keys().forEach(testContext);

// Source files, that you wanna generate coverage for
// (these files will be instrumented by Istanbul).
const components = require.context('../src/', true, /index\.js$/);
components.keys().forEach(components);
