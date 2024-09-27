(()=>{"use strict";var e={482:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(63),o=t.n(r),a=t(248),i=t.n(a)()(o());i.push([e.id,'/* General styles */\nbody {\n  margin: 0;\n  font-family: "Arial", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n\n#app {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n}\n\nheader {\n  margin-bottom: 20px;\n}\n\nheader h1 {\n  margin: 0;\n  font-size: 1.5rem;\n}\n\n#city-form {\n  display: flex;\n  margin-top: 10px;\n}\n\n#city-input {\n  flex-grow: 1;\n  padding: 10px;\n  border-radius: 4px;\n  border: none;\n}\n\n#city-form button {\n  padding: 10px 20px;\n  border: none;\n  background-color: #007bff;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#city-form button:hover {\n  background-color: #0056b3;\n}\n\nmain {\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 15px;\n  border-radius: 8px;\n}\n\n#current-weather {\n  margin-bottom: 20px;\n}\n\n#current-weather h2 {\n  margin: 0;\n  font-size: 1.5rem;\n}\n\n#current-weather-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#weather-icon {\n  width: 100px;\n  height: 100px;\n}\n\n#forecast {\n  margin-top: 20px;\n}\n\n#forecast-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.forecast-item {\n  width: 48%;\n  background-color: rgba(255, 255, 255, 0.1);\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.forecast-item img {\n  width: 50px;\n  height: 50px;\n}\n',""]);const c=i},248:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},63:e=>{e.exports=function(e){return e[1]}},478:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},301:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},626:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},222:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},135:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},279:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(478),o=t.n(r),a=t(135),i=t.n(a),c=t(301),s=t.n(c),d=t(222),p=t.n(d),u=t(626),l=t.n(u),f=t(279),m=t.n(f),h=t(482),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;const b=t.p+"054861a9e42de4ab8c54.jpg",y=t.p+"128e116c168be5b828d7.jpg",v=t.p+"8752f666f68d7bb0b892.jpg",x=t.p+"4743ded5ea122a2fa421.jpg",w=t.p+"bf14de958884581d8788.jpg",$=t.p+"16c63ecab1ee1bed9953.jpg",C=t.p+"202facc5edcc02e71f39.jpg",E="31245f08a04ae5f3669c461da4a5c620",j="https://api.openweathermap.org/data/2.5/",k=document.getElementById("city-form"),I=document.getElementById("city-input"),T=document.getElementById("city-name"),A=document.getElementById("weather-icon"),S=document.getElementById("weather-condition"),M=document.getElementById("temperature"),B=document.getElementById("rain-chance"),L=document.getElementById("forecast-container");function N(e){return(e-273.15).toFixed(1)}function P(e,n){fetch(`${j}weather?lat=${e}&lon=${n}&appid=${E}`).then((e=>e.json())).then((e=>{console.log(e),function(e){T.textContent=`${e.name}, ${e.sys.country}`,A.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,S.textContent=e.weather[0].main,M.textContent=`${N(e.main.temp)}°C`,B.textContent=`Humidity: ${e.main.humidity}%`,function(e){let n;switch(e){case"Clear":n=y;break;case"Clouds":n=v;break;case"Rain":case"Drizzle":n=x;break;case"Thunderstorm":n=w;break;case"Snow":n=$;break;case"Mist":case"Fog":n=C;break;default:n=b}document.body.style.backgroundImage=`url(${n})`}(e.weather[0].main)}(e)})),fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e}&lon=${n}&exclude=minutely,hourly&appid=${E}`).then((e=>e.json())).then((e=>{401===e.cod?console.log(e.message):function(e){L.innerHTML="",e.daily.slice(1,8).forEach((e=>{const n=document.createElement("div");n.classList.add("forecast-item"),n.innerHTML=`\n      <p>${new Date(1e3*e.dt).toLocaleDateString()}</p>\n      <img src="http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="Weather Icon">\n      <p>${N(e.temp.day)}°C</p>\n    `,L.appendChild(n)}))}(e)}))}function z(e){fetch(`${j}weather?q=${e}&appid=${E}`).then((e=>e.json())).then((e=>{const{lat:n,lon:t}=e.coord;P(n,t)})).catch((e=>alert("City not found!")))}k.addEventListener("submit",(e=>{e.preventDefault();const n=I.value.trim();n&&(z(n),I.value="")})),navigator.geolocation.getCurrentPosition((e=>{const{latitude:n,longitude:t}=e.coords;P(n,t)}),(()=>{alert("Geolocation not enabled. Using default city."),z("New York")}))})();