!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){var r;window,n.exports=(r=e(1),function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t){n.exports=r},function(n,t,e){"use strict";e.r(t);var r=e(0);const o=[10,13,16,30,33,23,30,61,62,45,59,119,116,90,156,198,373,326],i=[10,14,23,27,37,58,81,82,135,169,344,319],a=["person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"];e.d(t,"yolov3Tiny",function(){return p}),e.d(t,"yolov3",function(){return h});var s=function(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(n){try{l(r.next(n))}catch(n){i(n)}}function s(n){try{l(r.throw(n))}catch(n){i(n)}}function l(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,s)}l((r=r.apply(n,t||[])).next())})},l=function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=function(n){return Array(n).fill(0).map(function(n,t){return t})};function u(n,t,e,o,i){var a=function(n,t,e,o){return r.tidy(function(){var i=t.shape[0],a=t.reshape([1,i,2]),s=n.shape.slice(0,2),l=r.tile(r.reshape(c(s[0]),[-1,1,1,1]),[1,s[1],1,1]),u=r.tile(r.reshape(c(s[1]),[1,-1,1,1]),[s[0],1,1,1]).concat(l,3);u=r.cast(u,n.dtype);var f=r.reshape(n,[s[0],s[1],i,e+5]),d=r.split(f,[2,2,1,80],3),p=d[0],h=d[1],b=d[2],m=d[3];return[r.div(r.add(r.sigmoid(p),u),s.reverse()),r.div(r.mul(r.exp(h),a),o.reverse()),r.sigmoid(b),r.sigmoid(m)]})}(n,t,e,o),s=a[0],l=a[1],u=a[2],f=a[3],d=function(n,t,e,o){return r.tidy(function(){var i=r.concat(r.split(n,[1,1],3).reverse(),3),a=r.concat(r.split(t,[1,1],3).reverse(),3),s=r.div(e,o);i=r.div(r.mul(i,e),s),a=r.div(r.mul(a,e),s);var l=r.sub(i,r.div(a,2)),c=r.add(i,r.div(a,2));return r.concat(r.split(l,[1,1],3).concat(r.split(c,[1,1],3)),3)})}(s,l,o,i);d=d.reshape([-1,4]);var p=r.mul(u,f);return[d,p=p.reshape([-1,e])]}var f=document.createElement("canvas");f.width=416,f.height=416;var d=f.getContext("2d");function p(n){var t=void 0===n?{}:n,e=t.modelUrl,r=void 0===e?"https://willyman870321.github.io/yolov3tensorflowjs/model/yolov3-tiny/model.json":e,o=t.anchors,a=void 0===o?i:o;return s(this,void 0,void 0,function(){return l(this,function(n){switch(n.label){case 0:return[4,b({modelUrl:r,anchors:a})];case 1:return[2,n.sent()]}})})}function h(n){var t=void 0===n?{}:n,e=t.modelUrl,r=void 0===e?"https://willyman870321.github.io/yolov3tensorflowjs/model/yolov3/model.json":e,i=t.anchors,a=void 0===i?o:i;return s(this,void 0,void 0,function(){return l(this,function(n){switch(n.label){case 0:return[4,b({modelUrl:r,anchors:a})];case 1:return[2,n.sent()]}})})}function b(n){var t=n.modelUrl,e=n.anchors;return s(this,void 0,void 0,function(){var n,o=this;return l(this,function(i){switch(i.label){case 0:return[4,r.loadLayersModel(t)];case 1:return n=i.sent(),[2,function(t){return s(o,void 0,void 0,function(){var o;return l(this,function(i){switch(i.label){case 0:return d.drawImage(t,0,0,416,416),o=r.stack([r.div(r.cast(r.browser.fromPixels(f),"float32"),255)]),[4,n.predict(o)];case 1:return[4,function(n,t,e,o,i,c,f){return void 0===i&&(i=20),void 0===c&&(c=.3),void 0===f&&(f=.45),s(this,void 0,void 0,function(){var s,d,p,h,b,m,v,g,y,x,w,k,j,S,E,L,O,U;return l(this,function(l){switch(l.label){case 0:for(s=n.length,d=3===s?[[6,7,8],[3,4,5],[0,1,2]]:[[3,4,5],[1,2,3]],p=n[0].shape.slice(0,2).map(function(n){return 32*n}),h=[],b=[],E=0;E<s;E++)m=u(n[E],t.gather(r.cast(r.tensor1d(d[E]),"int32")),e,p,o),v=m[0],g=m[1],h.push(v),b.push(g);y=r.concat(h,0),x=r.concat(b,0),w=[],k=[],j=[],S=r.split(x,Array(e).fill(1),1),E=0,l.label=1;case 1:return E<e?[4,r.image.nonMaxSuppressionAsync(y,S[E].reshape([-1]),i,f,c)]:[3,4];case 2:if(!(L=l.sent()).size)return[3,3];O=r.gather(y,L),U=r.gather(S[E],L),w=w.concat(r.split(O,Array(L.size).fill(1)).map(function(n){return n.dataSync()})),k=k.concat(r.split(U,Array(L.size).fill(1)).map(function(n){return n.dataSync()})),j=j.concat(Array(L.size).fill(E)),U.dispose(),O.dispose(),l.label=3;case 3:return E++,[3,1];case 4:return y.dispose(),x.dispose(),[2,w.map(function(n,t){return{top:n[0],left:n[1],bottom:n[2],right:n[3],width:+n[3]-+n[1],height:+n[2]-+n[0],scores:k[t][0],classes:a[j[t]]}})]}})})}(i.sent().map(function(n){return n.reshape(n.shape.slice(1))}),r.tensor1d(e).reshape([-1,2]),a.length,[t.clientHeight,t.clientWidth])];case 2:return[2,i.sent()]}})})}]}})})}}]))},function(n,t){n.exports=tf},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #fff;\n\tfont-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n.title {\n  text-align: center;\n  padding: 20px 0;\n  font-size: 50px;\n  margin-top: 100px;\n  transition-duration: 200ms;\n}\n\n.title font {\n  color: #437BE8;\n}\n\n#img-box {\n  position: relative;\n  text-align: center;\n  margin: 50px 0;\n}\n\n#img-box img {\n  box-shadow: 0 0 50px #999;\n}\n#img-box .rect {\n  position: absolute;\n  border: 2px dashed #4183c4;\n  background: rgba(65, 131, 196, 0.4);\n}\n#img-box .rect .className {\n  position: absolute;\n  top: 0;\n  color: #fff;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n#test-canvas {\n}\n\n.loading-box p {\n  text-align: center;\n  font-size: 26px;\n  line-height: 50px;\n}\n.loading-box .tip {\n  font-size: 16px;\n\n}\n\n#loading {\n  height: 299px;\n  margin-bottom: 20px;\n\tposition: relative;\n}\n\n#loading :first-child{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  opacity: 0.5;\n}\n\n#loading > :nth-child(2)::before, #loading > :nth-child(2)::after{\n  border-radius: 50%;\n}\n\n#loading > :nth-child(2), #loading > :nth-child(2)::before, #loading > :nth-child(2)::after{\n  z-index: 11;\n  animation-duration: 2s;\n  animation-direction: normal;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n}\n\n#loading > :nth-child(2){\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  animation-name: loading;\n}\n\n#loading > :nth-child(2)::before{\n  content: '';\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  background-color: #009bef;\n  box-shadow: 0 0 16px #deedf7;\n  left: 50%;\n  transform: translateX(-50%) rotate(-45deg);\n  animation-name: loading2;\n}\n\n#loading > :nth-child(2)::after{\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  box-shadow: 0 0 8px #deedf7, 0 0 8px #95c4f3 inset;\n  left: 50%;\n  transform: translateX(-50%) translateY(25%) rotate(-45deg);\n  animation-name: loading2;\n}\n\n@keyframes loading {\n  from{\n    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n  }\n  to{\n    transform: translateX(-50%) translateY(-50%) rotate(360deg);\n  }\n}\n\n@keyframes loading2 {\n  from{\n    border-radius: 50%;\n  }\n  25% {\n    border-radius: 0 50% 50% 50%;\n  }\n  75% {\n    border-radius: 0 50% 50% 50%;\n  }\n  to{\n    border-radius: 50%;\n  }\n}\n\n.content {\n  display: none;\n}\n.examples {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1010px;\n  margin: 0 auto;\n}\n.examples li {\n  cursor: pointer;\n  margin-right: 5px;\n  opacity: .5;\n  transition-duration: 200ms;\n}\n.examples li.active {\n  opacity: 1;\n}\n.examples li img {\n  max-height: 100px;\n}\n\n.loading-box {\n  display: none;\n}\n\n.loading .loading-box {\n  display: block;\n}\n\n.loaded .loading-box, .loading .button-group, .loaded .button-group {\n  display: none;\n}\n\n.loaded .title {\n  font-size: 30px;\n  margin-top: 0px;\n}\n\n.loaded .content {\n  display: block!important;\n}\n\n.file-lable {\n  display: block;\n\ttext-align: center;\n\tmargin: 40px 0;\n}\n\n.upload-img {\n  display: inline-block;\n  padding: 15px;\n  cursor: pointer;\n  margin-right: 5px;\n  height: 25px;\n  min-width: 100px;\n  background: #437BE8;\n  border: none;\n  outline: none;\n  color: white;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 20px;\n  border-radius: 3px;\n  box-shadow: 0 5px 0px #437be8;\n  border-bottom: 2px solid #3571e6;\n}\n.upload-img:hover {\n  background: #2c6be5;\n  box-shadow: 0 4px 1px #2c6be5;\n  border-bottom: 2px solid #1f61e4;\n  transition: all 0.1s ease-in;\n}\n.upload-img:active {\n  transform: translateY(4px);\n  border-bottom-width: 2px;\n  box-shadow: none;\n}\n\n.button-group {\n  text-align: center;\n  margin-top: 60px;\n}\n.button {\n  border: 2px solid #437be8;\n  display: inline-block;\n  text-align: center;\n  line-height: 60px;\n  width: 200px;\n  height: 60px;\n  font-size: 18px;\n  border-radius: 4px;\n  transition: .6s;\n  overflow: hidden;\n  color: #437be8;\n  margin: 0 20px;\n}\n.button:hover {\n  background: #437be8;\n  color: #fff;\n  cursor: pointer;\n}",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),l=null,c=0,u=[],f=e(6);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return v(t,n.attrs),h(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function g(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=c++;e=l||(l=m(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){b(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return d(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){"use strict";e.r(t);var r=e(0);e(2);var o=function(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(n){try{l(r.next(n))}catch(n){i(n)}}function s(n){try{l(r.throw(n))}catch(n){i(n)}}function l(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,s)}l((r=r.apply(n,t||[])).next())})},i=function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},a=function(n){return Math.round(1e4*n)/100+"%"},s=document.getElementById("progress"),l=document.getElementById("img"),c=document.body,u=document.getElementById("rect-box");function f(n){return o(this,void 0,void 0,function(){function t(n){return o(this,void 0,void 0,function(){var t;return i(this,function(e){switch(e.label){case 0:return[4,f(n)];case 1:return t=e.sent(),u.innerHTML="",t.forEach(function(t){var e=document.createElement("div");e.className="rect",e.style.top=t.top+"px",e.style.left=t.left+n.offsetLeft+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",e.innerHTML="<span class='className'>"+t.classes+" "+a(t.scores)+"</span>",u.appendChild(e)}),[2]}})})}var e,f,d;return i(this,function(o){switch(o.label){case 0:return function(n,t){window.fetch;var e=2*n,r=0,o=0,i=Promise.all.bind(Promise);Promise.all=function(n){if(n.length===e/2&&r++<=1){var a={isDone:!1};n.forEach(function(n){n.then(function(n){a.isDone=!0,t(++o/e)}).catch(function(n){})})}return i.apply(window,arguments)}}((e={yolov3:{modelCount:191,fn:r.yolov3},"yolov3-tiny":{modelCount:30,fn:r.yolov3Tiny}})[n].modelCount,function(n){s.innerHTML=a(n)}),c.className="loading",[4,e[n].fn()];case 1:return f=o.sent(),c.className="loaded",(d=Array.from(document.querySelectorAll(".examples li"))).forEach(function(n){n.addEventListener("click",function(){var e=n.querySelector("img");l.src=e.src,d.forEach(function(n){n.className=""}),n.className="active",u.innerHTML="",l.onload=function(){setTimeout(function(){t(l)})}})}),d[0].click(),document.getElementById("file").addEventListener("change",function(n){var e=n.target.files[0];l.src=window.URL.createObjectURL(e),d.forEach(function(n){n.className=""}),u.innerHTML="",l.onload=function(){setTimeout(function(){t(l)})}}),[2]}})})}var d=document.getElementById("button1"),p=document.getElementById("button2");d.addEventListener("click",function(){f("yolov3")}),p.addEventListener("click",function(){f("yolov3-tiny")})}]);
