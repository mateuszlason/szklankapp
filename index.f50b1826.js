!function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=0,l=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(a&&a(t);l.length;)l.shift()()}var r={},n={1:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+""+({}[e]||e)+".f50b1826.js"}(e);var a=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}n[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=c;o(o.s=2)}([function(e,t,r){},,function(e,t,r){"use strict";r.r(t);r(0);r.e(2).then(r.t.bind(null,10,7)),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),console.log("HELLO 🚀");var n=document.querySelector(".button__dodaj--js"),o=document.querySelector(".button__usun--js"),i=document.querySelector(".liczba--js"),c=(new Date).toISOString().slice(0,10),u=0;n.addEventListener("click",(function(){u++,i.innerHTML=u,localStorage.setItem(c,u)})),o.addEventListener("click",(function(){u>0&&(u--,localStorage.setItem(c,u)),i.innerHTML=u})),localStorage.getItem(c)?u=localStorage.getItem(c):localStorage.setItem(c,0),i.innerHTML=u}]);