// This file isn' transpiled,so must use Commonjs and ES5

//register babel to transpile before our tests are run.
require('babel-register')();

//disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
