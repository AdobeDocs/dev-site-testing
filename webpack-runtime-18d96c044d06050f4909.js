!function(){"use strict";var e,t,n,r,o,a={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var d=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[f])}))?n.splice(f--,1):(d=!1,o<a&&(a=o));d&&(e.splice(c--,1),t=r())}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({2:"7deef1cd",35:"0abf01d3",42:"49d9dfa3",125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",146:"9f96d65d",206:"2dee68d8",303:"component---src-pages-frame-md",305:"5e65052d",351:"commons",446:"8313d723",490:"b6f3ea4c",530:"f5cc1685",532:"styles",714:"8b61fb39",964:"component---src-pages-index-md"}[e]||e)+"-"+{2:"a096f750c8f30a206c52",35:"345cbcdb5cf9cd3e1268",42:"fd790c516fa6cf9e9404",125:"bfa912a2857593724109",146:"272416efdbe1fb2b574d",206:"53011fce3ffe549538a2",303:"2e58ebbf29954ac4153f",305:"6197c1e1907851596ad8",351:"abe146411819ffe20b31",446:"d951e3158ace81934c65",490:"ad9fb1cb897939b15438",527:"a8185a656c49c50673fa",530:"969748da814a97705ff6",532:"c57be9f939a7b80cb457",578:"58661ab1c29e1ac8c2f3",586:"b62cfb84694e710ca037",714:"195b34efee239f538c3b",776:"2b4b0ec591d267931453",964:"5c7a302eb9f9b97af915"}[e]+".js"},i.miniCssF=function(e){return"styles.2041bd1f1eb535456016.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="dev-site-product-template:",i.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var d,f;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){d=l;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),t[e]=[r];var s=function(n,r){d.onerror=d.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),f&&document.head.appendChild(d)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="/dev-site-testing/",r=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(d=n[r]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===t))return d}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var d;if((o=(d=a[r]).getAttribute("data-href"))===e||o===t)return d}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var d=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=d,f.request=i,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},i.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(532!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),d=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,r[1](d)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=function(t){return 0===e[t]||532==t};var t=function(t,n){var r,o,a=n[0],d=n[1],f=n[2],c=0;for(r in d)i.o(d,r)&&(i.m[r]=d[r]);for(f&&f(i),t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;i.O()},n=self.webpackChunkdev_site_product_template=self.webpackChunkdev_site_product_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.O()}();
//# sourceMappingURL=webpack-runtime-18d96c044d06050f4909.js.map