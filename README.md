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

# minn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the minimum value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import minn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minn@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-minn/tags). For example,

```javascript
import minn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minn@v0.1.0-deno/mod.js';
```

#### minn( \[x\[, y\[, ...args]]] )

Returns the minimum value.

```javascript
var v = minn( 4.2, 3.14 );
// returns 3.14

v = minn( +0.0, -0.0 );
// returns -0.0

v = minn( 4.2, 3.14, -1.0, 6.8 );
// returns -1.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = minn( 4.2, NaN );
// returns NaN

v = minn( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = minn();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, the function returns `+infinity`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@deno/mod.js';
import minn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minn@deno/mod.js';

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = minn( x, y );
    console.log( 'min(%d,%d) = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/max`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-minn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-minn

[test-image]: https://github.com/stdlib-js/math-base-special-minn/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-minn/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-minn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-minn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-minn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-minn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-minn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-minn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-minn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-minn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-minn/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math-base-special-max/tree/deno

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math-base-special-minabs/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
