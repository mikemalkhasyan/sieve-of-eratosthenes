const yargs = require('yargs');
const Prime = require('./main');

// Get number value from command params either set default value.
const number = yargs.argv.calc || 15;

Prime.calc(number);