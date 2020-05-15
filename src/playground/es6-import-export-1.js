//const utils=require('./utils.js');
//import * as utils from './utils.js';
import defaultImport, { add, square } from './es6-import-export-2-utils.jsrt-export-2-utils.js';
import validator from 'validator';

console.log('app.js is running');

console.log(add(1, 2));
defaultImport();

console.log(validator.isEmail('test'));

