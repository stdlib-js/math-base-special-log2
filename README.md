<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Binary Logarithm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [binary logarithm][binary-logarithm].

<section class="intro">

The [binary logarithm][binary-logarithm] (logarithm with base 2) is defined for any positive real number as

<!-- <equation class="equation" label="eq:binary_logarithm" align="center" raw="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" alt="Equation for the binary logarithm."> -->

```math
\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x
```

<!-- <div class="equation" align="center" data-raw-text="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" data-equation="eq:binary_logarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8cb4d022f6163be6523964802725ed2a74f2497b/lib/node_modules/@stdlib/math/base/special/log2/docs/img/equation_binary_logarithm.svg" alt="Equation for the binary logarithm.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import log2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@v0.1.0-esm/index.mjs';
```

#### log2( x )

Evaluates the [binary logarithm][binary-logarithm].

```javascript
var v = log2( 4.0 );
// returns 2.0

v = log2( 0.0 );
// returns -Infinity

v = log2( Infinity );
// returns Infinity

v = log2( NaN );
// returns NaN
```

For negative numbers, the [binary logarithm][binary-logarithm] is **not** defined.

```javascript
var v = log2( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import log2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@v0.1.0-esm/index.mjs';

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'log2(%d) = %d', x, log2( x ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/exp2`][@stdlib/math/base/special/exp2]</span><span class="delimiter">: </span><span class="description">base 2 exponential function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math-base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">base `b` logarithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log2

[test-image]: https://github.com/stdlib-js/math-base-special-log2/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-log2/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-log2/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-log2/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-log2/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-log2/blob/main/branches.md

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp2]: https://github.com/stdlib-js/math-base-special-exp2/tree/esm

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln/tree/esm

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math-base-special-log/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
