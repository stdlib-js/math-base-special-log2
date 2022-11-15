/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs-write-file' ).sync;
var currentYear = require( '@stdlib/time-current-year' );
var licenseHeader = require( '@stdlib/_tools-licenses-header' );
var compile = require( '@stdlib/math-base-tools-evalpoly-compile' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var P = [
	3.999999999940941908e-01, // 3FD99999 9997FA04
	2.222219843214978396e-01, // 3FCC71C5 1D8E78AF
	1.531383769920937332e-01  // 3FC39A09 D078C69F
];
var Q = [
	6.666666666666735130e-01, // 3FE55555 55555593
	2.857142874366239149e-01, // 3FD24924 94229359
	1.818357216161805012e-01, // 3FC74664 96CB03DE
	1.479819860511658591e-01  // 3FC2F112 DF3E5244
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p.js' );
	str = header + compile( P );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_q.js' );
	str = header + compile( Q );
	writeFileSync( fpath, str, opts );
}

main();
