'use strict'; /* global describe, it */

const testsContext = require.context('./test/', true, /\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
// const componentsContext = require.context('./src/', true, /\.js$/);
//
// componentsContext.keys().forEach(componentsContext);
