// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";function i(i,r){var m,d,a,o;if(2===(m=arguments.length))return s(i)||s(r)?NaN:i===e||r===e?e:i===r&&0===i?t(i)?i:r:i<r?i:r;for(d=n,o=0;o<m;o++){if(s(a=arguments[o])||a===e)return a;(a<d||a===d&&0===a&&t(a))&&(d=a)}return d}export{i as default};
//# sourceMappingURL=index.mjs.map
