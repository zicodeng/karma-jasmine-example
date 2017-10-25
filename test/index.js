// Bootstrap all test files.
// This is where you tell the test runner where your files are located.
// The extra boolean flag indicates if you want it to go looking for files in subdirectories under ./.
var testContext = require.context('./', true, /-spec\.(js|ts)$/);
testContext.keys().forEach(testContext);
