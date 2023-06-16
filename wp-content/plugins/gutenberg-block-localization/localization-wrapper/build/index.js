/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@codeamp/block-components/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@codeamp/block-components/dist/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! For license information please see index.js.LICENSE.txt */
!function(){var e={814:function(e,t,o){var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var l=c.apply(null,o);l&&e.push(l)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},922:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(c[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},499:function(e){"use strict";e.exports=function(e){return e[1]}},245:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,':root{--wp-admin-theme-color: #007cba;--wp-admin-theme-color--rgb: 0,124,186;--wp-admin-theme-color-darker-10: #006ba1;--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;--wp-admin-theme-color-darker-20: #005a87;--wp-admin-theme-color-darker-20--rgb: 0,90,135;--wp-admin-border-width-focus: 2px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){:root{--wp-admin-border-width-focus: 1.5px}}.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}.codeamp-components-multi-select-control__input-container{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;padding:6px 8px;box-shadow:0 0 0 transparent;transition:box-shadow 0.1s linear;border-radius:2px;border:1px solid #757575;font-size:16px;line-height:normal;width:100%;margin:0 0 8px 0;padding:0;cursor:text}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__input-container{transition-duration:0s;transition-delay:0s}}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}}.codeamp-components-multi-select-control__input-container:focus{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container::-webkit-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container::-moz-placeholder{opacity:1;color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container:-ms-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container.is-disabled{background:#ddd;border-color:#ddd}.codeamp-components-multi-select-control__input-container.is-active{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{display:inline-block;flex:1;font-family:inherit;font-size:16px;width:100%;max-width:100%;margin-left:4px;padding:0;min-height:24px;min-width:50px;background:inherit;border:0;color:#1e1e1e;box-shadow:none}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{font-size:13px}}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input:focus,.codeamp-components-multi-select-control.is-active .codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{outline:none;box-shadow:none}.codeamp-components-multi-select-control__input-container .codeamp-components-multi-select-control__token+input[type="text"].codeamp-components-multi-select-control__input{width:auto}.codeamp-components-multi-select-control__help{font-size:12px;font-style:normal;color:#757575}.codeamp-components-multi-select-control__tokens-container{padding:4px}.codeamp-components-multi-select-control__token{font-size:13px;display:flex;color:#1e1e1e;max-width:100%}.codeamp-components-multi-select-control__token.is-borderless{position:relative;padding:0 24px 0 0}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__token-text{background:transparent;color:var(--wp-admin-theme-color)}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__remove-token{background:transparent;color:#757575;position:absolute;top:1px;right:0;padding:0}.codeamp-components-multi-select-control__token.is-borderless.is-success .codeamp-components-multi-select-control__token-text{color:#4ab866}.codeamp-components-multi-select-control__token.is-borderless.is-error .codeamp-components-multi-select-control__token-text{color:#cc1818;border-radius:4px 0 0 4px;padding:0 4px 0 6px}.codeamp-components-multi-select-control__token.is-borderless.is-validating .codeamp-components-multi-select-control__token-text{color:#1e1e1e}.codeamp-components-multi-select-control__token.is-disabled .codeamp-components-multi-select-control__remove-token{cursor:default}.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{display:inline-block;line-height:24px;height:auto;background:#ddd;min-width:unset;transition:all 0.2s cubic-bezier(0.4, 1, 0.4, 1)}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-delay:0s}}.codeamp-components-multi-select-control__token-text{border-radius:2px 0 0 2px;padding:0 0 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codeamp-components-multi-select-control__remove-token.components-button{cursor:pointer;border-radius:0 2px 2px 0;padding:0 2px;color:#1e1e1e;line-height:10px;overflow:initial}.codeamp-components-multi-select-control__remove-token.components-button:hover{color:#1e1e1e}.codeamp-components-multi-select-control__suggestions-list{flex:1 0 100%;min-width:100%;max-height:9em;overflow-y:auto;transition:all 0.15s ease-in-out;list-style:none;border-top:1px solid #757575;margin:0;padding:0}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__suggestions-list{transition-duration:0s;transition-delay:0s}}.codeamp-components-multi-select-control__no-suggestions{color:#757575;font-size:13px;margin:0;display:block;padding:4px 8px}.codeamp-components-multi-select-control__suggestion{color:#757575;display:block;font-size:13px;padding:4px 8px;margin:0;cursor:pointer}.codeamp-components-multi-select-control__suggestion.is-selected{background:var(--wp-admin-theme-color);color:#fff}.codeamp-components-multi-select-control__suggestion-match{text-decoration:underline}\n',""]),t.Z=c},313:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,".codeamp-components-resource-select-control>.components-base-control__field{position:relative;display:flex;flex-wrap:wrap}.codeamp-components-resource-select-control>.components-base-control__field>.components-base-control__label{flex:2}.codeamp-components-resource-select-control__label{margin-bottom:8px}.codeamp-components-resource-select-control__add_button{padding:0;margin:0;min-height:revert;height:auto;color:var(--wp-admin-theme-color);align-self:center;justify-content:right;margin-bottom:8px}.codeamp-components-resource-select-control__add_button:hover{text-decoration:underline}.codeamp-components-resource-select-control__edit_button{height:auto;margin-bottom:8px}.codeamp-components-resource-select-control__select{width:auto;flex:1}.codeamp-components-resource-select-control .components-base-control{margin-bottom:8px}.codeamp-components-resource-select-control .components-base-control__field{margin-bottom:0}.codeamp-components-resource-select-control .components-base-control{flex:1}\n",""]),t.Z=c},379:function(e){"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},c=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var d=o(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=r(m,n);n.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var l=o(i[c]);t[l].references--}for(var a=n(e,r),s=0;s<i.length;s++){var u=o(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.amdO={},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};!function(){"use strict";o.r(n),o.d(n,{MultiSelectControl:function(){return we},ResourceSelectControl:function(){return O}});var e=window.wp.i18n,t=window.wp.components,r=window.wp.compose,i=o(379),c=o.n(i),l=o(795),a=o.n(l),s=o(569),u=o.n(s),p=o(565),d=o.n(p),m=o(216),f=o.n(m),v=o(589),b=o.n(v),y=o(313),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),c()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var g=o(814),_=o.n(g);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w.apply(this,arguments)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var S=function(){},O=function o(n){var i,c,l,a,s=n.onChange,u=void 0===s?S:s,p=n.onPrimaryAction,d=void 0===p?S:p,m=n.onSecondaryAction,f=void 0===m?S:m,v=n.label,b=void 0===v?"":v,y=n.primaryActionLabel,h=void 0===y?(0,e.__)("Edit","codeamp-block-components"):y,g=n.secondaryActionLabel,O=void 0===g?(0,e.__)("Add new","codeamp-block-components"):g,k=n.loadingLabel,E=void 0===k?(0,e.__)("Loading","codeamp-block-components"):k,j=n.showPrimaryAction,A=void 0===j||j,I=n.disabled,C=void 0!==I&&I,P=n.showSecondaryAction,L=void 0===P||P,R=n.defaultOption,T=n.options,M=n.value,N=n.help,D=n.primaryActionProps,B=n.secondaryActionProps,z=n.id,W=n.className,F=[];E&&(F=[{value:"loading",label:E}]),T&&(F=[],R&&F.push(R),(l=F).push.apply(l,function(e){if(Array.isArray(e))return x(e)}(a=T)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?x(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var H=(0,r.useInstanceId)(o,"codeamp-components-resource-select-control");return z&&(H=z),React.createElement(t.BaseControl,{id:H,className:_()("components-base-control codeamp-components-resource-select-control",W),help:N,label:b},L&&React.createElement(t.Button,w({className:"codeamp-components-resource-select-control__add_button",disabled:C,onClick:f},B),null!==(i=null==B?void 0:B.label)&&void 0!==i?i:O),React.createElement(t.__experimentalHStack,null,React.createElement(t.SelectControl,{id:H,value:M,options:F,className:"codeamp-components-resource-select-control__select",onChange:u,disabled:C}),A&&React.createElement(t.Button,w({onClick:d,variant:"secondary",disabled:C,className:"codeamp-components-resource-select-control__edit_button"},D),null!==(c=null==D?void 0:D.label)&&void 0!==c?c:h)))},k=window.wp.element,E=window.wp.a11y,j=window.wp.isShallowEqual,A=o.n(j),I=window.wp.primitives,C=(0,k.createElement)(I.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,k.createElement)(I.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),P=function(){};function L(o){var n=o.value,i=o.label,c=o.title,l=o.isBorderless,a=void 0!==l&&l,s=o.disabled,u=void 0!==s&&s,p=o.onClickRemove,d=void 0===p?P:p,m=o.onMouseEnter,f=o.onMouseLeave,v=o.messages,b=o.termPosition,y=o.termsCount,h=(0,r.useInstanceId)(L),g=_()("codeamp-components-multi-select-control__token",{"is-borderless":a,"is-disabled":u}),w=(0,e.sprintf)((0,e.__)("%1$s (%2$s of %3$s)"),i,b,y);return React.createElement("span",{className:g,onMouseEnter:m,onMouseLeave:f,title:c,style:{margin:"0"}},React.createElement("span",{className:"codeamp-components-multi-select-control__token-text",id:"codeamp-components-multi-select-control__token-text-".concat(h)},React.createElement(t.VisuallyHidden,{as:"span"},w),React.createElement("span",{"aria-hidden":"true"},i)),React.createElement(t.Button,{className:"codeamp-components-multi-select-control__remove-token",icon:C,onClick:!u&&function(){return d({value:n})},label:v.remove,"aria-describedby":"codeamp-components-multi-select-control__token-text-".concat(h)}))}var R=["value","isExpanded","instanceId","selectedSuggestionIndex","className","onChange","onFocus","onBlur"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},T.apply(this,arguments)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var N=(0,k.forwardRef)((function(e,t){var o=e.value,n=e.isExpanded,r=e.instanceId,i=e.selectedSuggestionIndex,c=e.className,l=e.onChange,a=e.onFocus,s=e.onBlur,u=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,R),p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),d=p[0],m=p[1],f=o?o.length+1:0;return React.createElement("input",T({ref:t,id:r,type:"text"},u,{value:o||"",onChange:function(e){l&&l({value:e.target.value})},onFocus:function(e){m(!0),null==a||a(e)},onBlur:function(e){m(!1),null==s||s(e)},size:f,className:_()(c,"codeamp-components-multi-select-control__input"),autoComplete:"off",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-owns":n?"".concat(r,"-suggestions"):void 0,"aria-activedescendant":d&&-1!==i&&n?"".concat(r,"-suggestions-").concat(i):void 0,"aria-describedby":"".concat(r,"-howto"),"data-lpignore":"true"}))}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e){return B="function"==typeof Symbol&&"symbol"===D(Symbol.iterator)?function(e){return D(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":D(e)},B(e)}function z(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function W(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function F(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if("number"!=typeof o){var r=e.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function H(e){return F(e)}function V(e){return F(e,!0)}function U(e){var t=function(e){var t,o,n,r=e.ownerDocument,i=r.body,c=r&&r.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=c.clientLeft||i.clientLeft||0,top:n-=c.clientTop||i.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=H(n),t.top+=V(n),t}var Z,$=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),q=/^(top|right|bottom|left)$/;function K(e,t){for(var o=0;o<e.length;o++)t(e[o])}function G(e){return"border-box"===Z(e,"boxSizing")}"undefined"!=typeof window&&(Z=window.getComputedStyle?function(e,t,o){var n="",r=e.ownerDocument,i=o||r.defaultView.getComputedStyle(e,null);return i&&(n=i.getPropertyValue(t)||i[t]),n}:function(e,t){var o=e.currentStyle&&e.currentStyle[t];if($.test(o)&&!q.test(t)){var n=e.style,r=n.left,i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,n.left="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n.left=r,e.runtimeStyle.left=i}return""===o?"auto":o});var J=["margin","border","padding"];function X(e,t,o){var n,r={},i=e.style;for(n in t)t.hasOwnProperty(n)&&(r[n]=i[n],i[n]=t[n]);for(n in o.call(e),t)t.hasOwnProperty(n)&&(i[n]=r[n])}function Y(e,t,o){var n,r,i,c=0;for(r=0;r<t.length;r++)if(n=t[r])for(i=0;i<o.length;i++){var l;l="border"===n?"".concat(n+o[i],"Width"):n+o[i],c+=parseFloat(Z(e,l))||0}return c}function Q(e){return null!=e&&e==e.window}var ee={};function te(e,t,o){if(Q(e))return"width"===t?ee.viewportWidth(e):ee.viewportHeight(e);if(9===e.nodeType)return"width"===t?ee.docWidth(e):ee.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,i=(Z(e),G(e)),c=0;(null==r||r<=0)&&(r=void 0,(null==(c=Z(e,t))||Number(c)<0)&&(c=e.style[t]||0),c=parseFloat(c)||0),void 0===o&&(o=i?1:-1);var l=void 0!==r||i,a=r||c;if(-1===o)return l?a-Y(e,["border","padding"],n):c;if(l){var s=2===o?-Y(e,["border"],n):Y(e,["margin"],n);return a+(1===o?0:s)}return c+Y(e,J.slice(o),n)}K(["Width","Height"],(function(e){ee["doc".concat(e)]=function(t){var o=t.document;return Math.max(o.documentElement["scroll".concat(e)],o.body["scroll".concat(e)],ee["viewport".concat(e)](o))},ee["viewport".concat(e)]=function(t){var o="client".concat(e),n=t.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var oe={position:"absolute",visibility:"hidden",display:"block"};function ne(e){var t,o=arguments;return 0!==e.offsetWidth?t=te.apply(void 0,o):X(e,oe,(function(){t=te.apply(void 0,o)})),t}function re(e,t,o){var n=o;if("object"!==B(t))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[t]=n)):Z(e,t);for(var r in t)t.hasOwnProperty(r)&&re(e,r,t[r])}K(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);ee["outer".concat(t)]=function(t,o){return t&&ne(t,e,o?0:1)};var o="width"===e?["Left","Right"]:["Top","Bottom"];ee[e]=function(t,n){return void 0===n?t&&ne(t,e,-1):t?(Z(t),G(t)&&(n+=Y(t,["padding","border"],o)),re(t,e,n)):void 0}}));var ie=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?W(o,!0).forEach((function(t){z(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return U(e);!function(e,t){"static"===re(e,"position")&&(e.style.position="relative");var o,n,r=U(e),i={};for(n in t)t.hasOwnProperty(n)&&(o=parseFloat(re(e,n))||0,i[n]=o+t[n]-r[n]);re(e,i)}(e,t)},isWindow:Q,each:K,css:re,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(Q(e)){if(void 0===t)return H(e);window.scrollTo(t,V(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(Q(e)){if(void 0===t)return V(e);window.scrollTo(H(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},ee);function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var le=function(e){e.preventDefault()},ae=function(t){var o=t.selectedIndex,n=t.scrollIntoView,i=t.searchValue,c=t.onHover,l=t.onSelect,a=t.suggestions,s=void 0===a?[]:a,u=t.instanceId,p=t.__experimentalRenderItem,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),m=d[0],f=d[1],v=(0,r.useRefEffect)((function(e){var t;return o>-1&&n&&e.children[o]&&(f(!0),function(e,t,o){o=o||{},9===t.nodeType&&(t=ie.getWindow(t));var n=o.allowHorizontalScroll,r=o.onlyScrollIfNeeded,i=o.alignWithTop,c=o.alignWithLeft,l=o.offsetTop||0,a=o.offsetLeft||0,s=o.offsetBottom||0,u=o.offsetRight||0;n=void 0===n||n;var p,d,m,f,v,b,y,h,g,_,w=ie.isWindow(t),x=ie.offset(e),S=ie.outerHeight(e),O=ie.outerWidth(e);w?(y=t,_=ie.height(y),g=ie.width(y),h={left:ie.scrollLeft(y),top:ie.scrollTop(y)},v={left:x.left-h.left-a,top:x.top-h.top-l},b={left:x.left+O-(h.left+g)+u,top:x.top+S-(h.top+_)+s},f=h):(p=ie.offset(t),d=t.clientHeight,m=t.clientWidth,f={left:t.scrollLeft,top:t.scrollTop},v={left:x.left-(p.left+(parseFloat(ie.css(t,"borderLeftWidth"))||0))-a,top:x.top-(p.top+(parseFloat(ie.css(t,"borderTopWidth"))||0))-l},b={left:x.left+O-(p.left+m+(parseFloat(ie.css(t,"borderRightWidth"))||0))+u,top:x.top+S-(p.top+d+(parseFloat(ie.css(t,"borderBottomWidth"))||0))+s}),v.top<0||b.top>0?!0===i?ie.scrollTop(t,f.top+v.top):!1===i?ie.scrollTop(t,f.top+b.top):v.top<0?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top):r||((i=void 0===i||!!i)?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top)),n&&(v.left<0||b.left>0?!0===c?ie.scrollLeft(t,f.left+v.left):!1===c?ie.scrollLeft(t,f.left+b.left):v.left<0?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left):r||((c=void 0===c||!!c)?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left)))}(e.children[o],e,{onlyScrollIfNeeded:!0}),t=requestAnimationFrame((function(){f(!1)}))),function(){void 0!==t&&cancelAnimationFrame(t)}}),[o,n]),b=function(e){return function(){m||null==c||c(e)}},y=function(e){return function(){null==l||l(e)}};return React.createElement("ul",{ref:v,className:"codeamp-components-multi-select-control__suggestions-list",id:"".concat(u,"-suggestions"),role:"listbox"},0===s.length&&React.createElement("li",{className:"codeamp-components-multi-select-control__no-suggestions",role:"option"},(0,e.__)("No results found.","codeamp-block-components")),s.map((function(e,t){var n,r=function(e){var t=e.label.toLocaleLowerCase().indexOf(i);return{suggestionBeforeMatch:e.label.substring(0,t),suggestionMatch:e.label.substring(t,t+i.length),suggestionAfterMatch:e.label.substring(t+i.length)}}(e),c=_()("codeamp-components-multi-select-control__suggestion",{"is-selected":t===o});return n="function"==typeof p?p({item:e}):r?React.createElement("span",{"aria-label":e.label},r.suggestionBeforeMatch,React.createElement("strong",{className:"codeamp-components-multi-select-control__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch):e.label,React.createElement("li",{id:"".concat(u,"-suggestions-").concat(t),role:"option",className:c,key:e.value,onMouseDown:le,onClick:y(e),onMouseEnter:b(e),"aria-selected":t===o},n)})))},se=o(245),ue={};function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},pe.apply(this,arguments)}function de(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function me(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ve(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ye(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||ye(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){if(e){if("string"==typeof e)return he(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(""===e)return null;var o=null!=e?e:"",n=t.find((function(e){return-1!==e.label.toLocaleLowerCase().indexOf(o.trim().toLocaleLowerCase())}));return n}ue.styleTagTransform=b(),ue.setAttributes=d(),ue.insert=u().bind(null,"head"),ue.domAPI=a(),ue.insertStyleElement=f(),c()(se.Z,ue),se.Z&&se.Z.locals&&se.Z.locals;var _e=function(){};function we(o){var n=o.autoCapitalize,i=o.autoComplete,c=o.maxLength,l=o.placeholder,a=o.label,s=void 0===a?(0,e.__)("Add item"):a,u=o.help,p=o.className,d=o.suggestions,m=void 0===d?[]:d,f=o.options,v=void 0===f?[]:f,b=o.maxSuggestions,y=void 0===b?100:b,h=o.value,g=void 0===h?[]:h,w=o.onChange,x=void 0===w?function(){}:w,S=o.onInputChange,O=void 0===S?function(){}:S,j=o.onFocus,I=void 0===j?void 0:j,C=(o.isBorderless,o.id),P=o.disabled,R=void 0!==P&&P,T=o.messages,M=void 0===T?{added:(0,e.__)("Item added."),removed:(0,e.__)("Item removed."),remove:(0,e.__)("Remove item"),__experimentalInvalid:(0,e.__)("Invalid item")}:T,D=o.__experimentalRenderItem,B=o.__experimentalAutoSelectFirstMatch,z=void 0===B||B,W=o.__experimentalValidateInput,F=void 0===W?function(){return!0}:W,H=o.__experimentalCloseSuggestionsOnSelect,V=void 0===H||H,U=o.__next36pxDefaultSize,Z=void 0!==U&&U,$=(0,r.useInstanceId)(we,"codeamp-components-multi-select-control");C&&($=C);var q=be((0,k.useState)(""),2),K=q[0],G=q[1],J=be((0,k.useState)(0),2),X=J[0],Y=J[1],Q=be((0,k.useState)(!1),2),ee=Q[0],te=Q[1],oe=be((0,k.useState)(!1),2),ne=oe[0],re=oe[1],ie=be((0,k.useState)(-1),2),ce=ie[0],le=ie[1],se=be((0,k.useState)(!1),2),ue=se[0],ye=se[1],he=(0,r.usePrevious)(m),xe=(0,r.usePrevious)(g),Se=(0,k.useRef)(null),Oe=(0,k.useRef)(null),ke=(0,r.useDebounce)(E.speak,500);function Ee(){var e;null===(e=Se.current)||void 0===e||e.focus()}function je(){var e;return Se.current===(null===(e=Se.current)||void 0===e?void 0:e.ownerDocument.activeElement)}function Ae(e){je()||e.target===Oe.current?(te(!0),re(!0)):te(!1),"function"==typeof I&&I(e)}function Ie(e){e.target===Oe.current&&ee&&e.preventDefault()}function Ce(e){Me(e.value),Ee()}function Pe(e){var t=!1;return je()&&We()&&(e(),t=!0),t}function Le(){var e=ze()-1;e>-1&&Me(g[e])}function Re(){var e=ze();e<g.length&&(Me(g[e]),function(e){Y(g.length-Math.max(e,-1)-1)}(e))}function Te(e){F(e.label)?(function(e){if(ve(new Set(e.filter((function(e){return!function(e){return g.some((function(t){return Ne(e)===Ne(t)}))}(e)})))),e.length>0){var t=ve(g);t.splice.apply(t,[ze(),0].concat(ve(e))),x(t)}}([e.value]),(0,E.speak)(M.added,"assertive"),G(""),ye(!1),le(-1),V&&re(!1),ee&&Ee()):(0,E.speak)(M.__experimentalInvalid,"assertive")}function Me(e){var t=g.filter((function(t){return Ne(t)!==Ne(e)}));x(t),(0,E.speak)(M.removed,"assertive")}function Ne(e){return"object"===fe(e)?e.value:e}function De(){return v.filter((function(e){return-1===g.indexOf(e.value)}))}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De(),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;if(""!==e.trim()){var n=[],r=[];t.forEach((function(t){var o=t.label.toLocaleLowerCase().indexOf(e.trim().toLocaleLowerCase());0===o?n.push(t):o>0&&r.push(t)})),t=n.concat(r)}return t.slice(0,o)}function ze(){return g.length-X}function We(){return 0===K.length}function Fe(){var e,t;return(null===(e=ge(K))||void 0===e||null===(t=e.label)||void 0===t?void 0:t.length)>0}function He(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=Be(K),n=o.length>0;t&&(z&&n?(le(0),ye(!0)):(le(-1),ye(!1))),le(0);var r=n?(0,e.sprintf)((0,e._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",o.length),o.length):(0,e.__)("No results.");ke(r,"assertive")}(0,k.useEffect)((function(){ee&&!je()&&Ee()}),[ee]),(0,k.useEffect)((function(){var e=!A()(m,he||[]);(e||g!==xe)&&He(e)}),[m,he,g,xe]),(0,k.useEffect)((function(){He()}),[K]),R&&ee&&(te(!1),G(""));var Ve,Ue,Ze=_()(p,"codeamp-components-multi-select-control__input-container",{"is-active":ee,"is-disabled":R}),$e={className:"components-base-control codeamp-components-multi-select-control",tabIndex:-1},qe=Be();return R||($e=Object.assign({},$e,{onKeyDown:function(e){var t=!1;if(!e.defaultPrevented){switch(e.code){case"Backspace":t=Pe(Le);break;case"Enter":case"Space":t=function(){var e=!1,t=function(){if(-1!==ce)return Be()[ce]}();return t&&ne?(Te(t),e=!0):Fe()&&""!==K.trim()&&(Te(K),e=!0),e}();break;case"ArrowLeft":t=function(){var e=!1;return We()&&(Y((function(e){return Math.min(e+1,g.length)})),e=!0),e}();break;case"ArrowUp":t=ne?(le((function(e){return(0===e?Be(K,De(),g,y).length:e)-1})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"ArrowRight":t=function(){var e=!1;return We()&&(Y((function(e){return Math.max(e-1,0)})),e=!0),e}();break;case"ArrowDown":t=ne?(le((function(e){return(e+1)%Be(K,De(),g,y).length})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"Delete":t=Pe(Re);break;case"Escape":t=function(e){return e.target instanceof HTMLInputElement&&(G(e.target.value),re(!1),le(-1),ye(!1)),!0}(e)}t&&e.preventDefault()}},onKeyPress:function(e){var t=!1;44===e.charCode&&(Fe()&&Te(K),t=!0),t&&e.preventDefault()},onFocus:Ae})),React.createElement(t.BaseControl,{id:$,label:s,help:u},React.createElement("div",$e,React.createElement("div",{ref:Oe,className:Ze,tabIndex:-1,onMouseDown:Ie,onTouchStart:Ie},React.createElement(t.Flex,{className:"codeamp-components-multi-select-control__tokens-container",justify:"flex-start",align:"flex-start",gap:"4px",wrap:!0,__next36pxDefaultSize:Z,hasTokens:!!g.length},(Ue=g.map((function(e){return v.find((function(t){return t.value===e}))||null})).map((function(e,o){return function(e,o){var n=e.value,r=e.label,i=e.onMouseEnter,c=void 0===i?_e:i,l=e.onMouseLeave,a=void 0===l?_e:l,s=e.isBorderless,u=void 0!==s&&s,p=n,d=o+1;return React.createElement(t.FlexItem,{key:"token-"+p},React.createElement(L,{value:p,label:r,title:"string"!=typeof token?r:void 0,onClickRemove:Ce,isBorderless:u,onMouseEnter:c,onMouseLeave:a,disabled:R,messages:M,termPosition:d,termsCount:g.length}))}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?de(Object(o),!0).forEach((function(t){me(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),o)})),Ue.splice(ze(),0,(Ve={instanceId:$,autoCapitalize:n,autoComplete:i,placeholder:0===g.length?l:"",key:"input",disabled:R,value:K,onBlur:function(){Fe()?te(!1):(G(""),Y(0),te(!1),re(!1),le(-1),ye(!1))},isExpanded:ne,selectedSuggestionIndex:ce,style:{lineHeight:"24px"},onClick:Ae},React.createElement(N,pe({},Ve,{onChange:c&&g.length>=c?void 0:function(e){var t=e.value;G(t),re(!0),O(t)},ref:Se})))),Ue)),ne&&React.createElement(ae,{instanceId:$,match:ge(K,v),searchValue:K.trim(),suggestions:qe,selectedIndex:ce,scrollIntoView:ue,onHover:function(e){var t=Be().indexOf(e);t>=0&&(le(t),ye(!1))},onSelect:function(e){Te(e)},__experimentalRenderItem:D}))))}}();var r=exports;for(var i in n)r[i]=n[i];n.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: {
    type: 'string',
    selector: 'h3',
    default: 'Localization Wrapper'
  },
  ui_state: {
    type: 'boolean',
    default: false
  },
  is_default_block: {
    type: 'boolean',
    default: false
  },
  other_locales_show: {
    type: 'boolean',
    default: false
  },
  block_locale_us_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ca_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ca_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_au_en: {
    type: 'boolean',
    default: false
  },
  block_locale_gb_en: {
    type: 'boolean',
    default: false
  },
  block_locale_nz_en: {
    type: 'boolean',
    default: false
  },
  block_locale_de_de: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ph_en: {
    type: 'boolean',
    default: false
  },
  block_locale_mx_en: {
    type: 'boolean',
    default: false
  },
  block_locale_mx_es: {
    type: 'boolean',
    default: false
  },
  block_locale_es_en: {
    type: 'boolean',
    default: false
  },
  block_locale_es_es: {
    type: 'boolean',
    default: false
  },
  block_locale_sg_en: {
    type: 'boolean',
    default: false
  },
  block_locale_it_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_de: {
    type: 'boolean',
    default: false
  },
  block_locale_nl_en: {
    type: 'boolean',
    default: false
  },
  block_locale_nl_nl: {
    type: 'boolean',
    default: false
  },
  block_locale_se_en: {
    type: 'boolean',
    default: false
  },
  block_locale_be_en: {
    type: 'boolean',
    default: false
  },
  block_locale_be_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_id_en: {
    type: 'boolean',
    default: false
  },
  block_locale_cl_es: {
    type: 'boolean',
    default: false
  },
  block_locale_cl_en: {
    type: 'boolean',
    default: false
  },
  block_locale_za_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ie_en: {
    type: 'boolean',
    default: false
  },
  block_locale_no_es: {
    type: 'boolean',
    default: false
  },
  block_locale_hk_en: {
    type: 'boolean',
    default: false
  },
  block_locale_fi_en: {
    type: 'boolean',
    default: false
  },
  block_locale_at_en: {
    type: 'boolean',
    default: false
  },
  block_locale_jp_en: {
    type: 'boolean',
    default: false
  },
  block_locale_gr_en: {
    type: 'boolean',
    default: false
  },
  block_locale_pt_en: {
    type: 'boolean',
    default: false
  },
  block_locale_dk_en: {
    type: 'boolean',
    default: false
  },
  block_locale_cz_en: {
    type: 'boolean',
    default: false
  },
  block_locale_il_en: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_at_de: {
    type: 'boolean',
    default: false
  },
  block_locale_be_de: {
    type: 'boolean',
    default: false
  },
  block_locale_be_nl: {
    type: 'boolean',
    default: false
  }
});

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codeamp/block-components */ "./node_modules/@codeamp/block-components/dist/index.js");
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);








const MyMultiSelectControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.withState)({
  value: [],
  options: [{
    "af_NA": {
      "name": "Afrikaans (Namibia)",
      "charset": "UTF-8"
    },
    "af_ZA": {
      "name": "Afrikaans (South Africa)",
      "charset": "UTF-8"
    },
    "af": {
      "name": "Afrikaans",
      "charset": "UTF-8"
    },
    "ak_GH": {
      "name": "Akan (Ghana)",
      "charset": "UTF-8"
    },
    "ak": {
      "name": "Akan",
      "charset": "UTF-8"
    },
    "sq_AL": {
      "name": "Albanian (Albania)",
      "charset": "UTF-8"
    },
    "sq": {
      "name": "Albanian",
      "charset": "UTF-8"
    },
    "am_ET": {
      "name": "Amharic (Ethiopia)",
      "charset": "UTF-8"
    },
    "am": {
      "name": "Amharic",
      "charset": "UTF-8"
    },
    "ar_DZ": {
      "name": "Arabic (Algeria)",
      "charset": "UTF-8"
    },
    "ar_BH": {
      "name": "Arabic (Bahrain)",
      "charset": "ISO-8859-6"
    },
    "ar_EG": {
      "name": "Arabic (Egypt)",
      "charset": "ISO-8859-6"
    },
    "ar_IQ": {
      "name": "Arabic (Iraq)",
      "charset": "ISO-8859-6"
    },
    "ar_JO": {
      "name": "Arabic (Jordan)",
      "charset": "ISO-8859-6"
    },
    "ar_KW": {
      "name": "Arabic (Kuwait)",
      "charset": "ISO-8859-6"
    },
    "ar_LB": {
      "name": "Arabic (Lebanon)",
      "charset": "ISO-8859-6"
    },
    "ar_LY": {
      "name": "Arabic (Libya)",
      "charset": "ISO-8859-6"
    },
    "ar_MA": {
      "name": "Arabic (Morocco)",
      "charset": "ISO-8859-6"
    },
    "ar_OM": {
      "name": "Arabic (Oman)",
      "charset": "ISO-8859-6"
    },
    "ar_QA": {
      "name": "Arabic (Qatar)",
      "charset": "ISO-8859-6"
    },
    "ar_SA": {
      "name": "Arabic (Saudi Arabia)",
      "charset": "ISO-8859-6"
    },
    "ar_SD": {
      "name": "Arabic (Sudan)",
      "charset": "ISO-8859-6"
    },
    "ar_SY": {
      "name": "Arabic (Syria)",
      "charset": "ISO-8859-6"
    },
    "ar_TN": {
      "name": "Arabic (Tunisia)",
      "charset": "ISO-8859-6"
    },
    "ar_AE": {
      "name": "Arabic (United Arab Emirates)",
      "charset": "ISO-8859-6"
    },
    "ar_YE": {
      "name": "Arabic (Yemen)",
      "charset": "ISO-8859-6"
    },
    "ar": {
      "name": "Arabic",
      "charset": "ISO-8859-6"
    },
    "hy_AM": {
      "name": "Armenian (Armenia)",
      "charset": "ARMSCII-8"
    },
    "hy": {
      "name": "Armenian",
      "charset": "ARMSCII-8"
    },
    "as_IN": {
      "name": "Assamese (India)",
      "charset": "UTF-8"
    },
    "as": {
      "name": "Assamese",
      "charset": "UTF-8"
    },
    "asa_TZ": {
      "name": "Asu (Tanzania)",
      "charset": "UTF-8"
    },
    "asa": {
      "name": "Asu",
      "charset": "UTF-8"
    },
    "az_Cyrl": {
      "name": "Azerbaijani (Cyrillic, Azerbaijan)",
      "charset": "UTF-8"
    },
    "az_Cyrl_AZ": {
      "name": "Azerbaijani (Cyrillic, Azerbaijan)",
      "charset": "UTF-8"
    },
    "az_Latn": {
      "name": "Azerbaijani (Latin)",
      "charset": "UTF-8"
    },
    "az_Latn_AZ": {
      "name": "Azerbaijani (Latin, Azerbaijan)",
      "charset": "UTF-8"
    },
    "az": {
      "name": "Azerbaijani",
      "charset": "UTF-8"
    },
    "bm_ML": {
      "name": "Bambara (Mali)",
      "charset": "iso-8859-1"
    },
    "bm": {
      "name": "Bambara",
      "charset": "iso-8859-1"
    },
    "eu_ES": {
      "name": "Basque (Spain)",
      "charset": "ISO-8859-1"
    },
    "eu": {
      "name": "Basque",
      "charset": "ISO-8859-1"
    },
    "be_BY": {
      "name": "Belarusian (Belarus)",
      "charset": "UTF-8"
    },
    "be": {
      "name": "Belarusian",
      "charset": "UTF-8"
    },
    "bem_ZM": {
      "name": "Bemba (Zambia)",
      "charset": "UTF-8"
    },
    "bem": {
      "name": "Bemba",
      "charset": "UTF-8"
    },
    "bez_TZ": {
      "name": "Bena (Tanzania)",
      "charset": "UTF-8"
    },
    "bez": {
      "name": "Bena",
      "charset": "UTF-8"
    },
    "bn_BD": {
      "name": "Bengali (Bangladesh)",
      "charset": "UTF-8"
    },
    "bn_IN": {
      "name": "Bengali (India)",
      "charset": "UTF-8"
    },
    "bn": {
      "name": "Bengali",
      "charset": "UTF-8"
    },
    "bs_BA": {
      "name": "Bosnian (Bosnia and Herzegovina)",
      "charset": "UTF-8"
    },
    "bs": {
      "name": "Bosnian",
      "charset": "UTF-8"
    },
    "bg_BG": {
      "name": "Bulgarian (Bulgaria)",
      "charset": "ISO-8859-2"
    },
    "bg": {
      "name": "Bulgarian",
      "charset": "ISO-8859-2"
    },
    "my_MM": {
      "name": "Burmese (Myanmar [Burma])",
      "charset": "UTF-8"
    },
    "my": {
      "name": "Burmese",
      "charset": "UTF-8"
    },
    "yue_Hant_HK": {
      "name": "Cantonese (Traditional, Hong Kong SAR China)",
      "charset": "UTF-8"
    },
    "ca_ES": {
      "name": "Catalan (Spain)",
      "charset": "ISO-8859-15"
    },
    "ca": {
      "name": "Catalan",
      "charset": "ISO-8859-15"
    },
    "tzm_Latn": {
      "name": "Central Morocco Tamazight (Latin)",
      "charset": "ISO-8859-1"
    },
    "tzm_Latn_MA": {
      "name": "Central Morocco Tamazight (Latin, Morocco)",
      "charset": "ISO-8859-1"
    },
    "tzm": {
      "name": "Central Morocco Tamazight",
      "charset": "ISO-8859-1"
    },
    "chr_US": {
      "name": "Cherokee (United States)",
      "charset": "U+13A0"
    },
    "chr": {
      "name": "Cherokee",
      "charset": "U+13A0"
    },
    "cgg_UG": {
      "name": "Chiga (Uganda)",
      "charset": "ISO-8859-1"
    },
    "cgg": {
      "name": "Chiga",
      "charset": "ISO-8859-1"
    },
    "zh_Hans": {
      "name": "Chinese (Simplified Han)",
      "charset": "UTF-8"
    },
    "zh_Hans_CN": {
      "name": "Chinese (Simplified Han, China)",
      "charset": "UTF-8"
    },
    "zh_Hans_HK": {
      "name": "Chinese (Simplified Han, Hong Kong SAR China)",
      "charset": "UTF-8"
    },
    "zh_Hans_MO": {
      "name": "Chinese (Simplified Han, Macau SAR China)",
      "charset": "UTF-8"
    },
    "zh_Hans_SG": {
      "name": "Chinese (Simplified Han, Singapore)",
      "charset": "UTF-8"
    },
    "zh_Hant": {
      "name": "Chinese (Traditional Han)",
      "charset": "UTF-8"
    },
    "zh_Hant_HK": {
      "name": "Chinese (Traditional Han, Hong Kong SAR China)",
      "charset": "UTF-8"
    },
    "zh_Hant_MO": {
      "name": "Chinese (Traditional Han, Macau SAR China)",
      "charset": "UTF-8"
    },
    "zh_Hant_TW": {
      "name": "Chinese (Traditional Han, Taiwan)",
      "charset": "UTF-8"
    },
    "zh": {
      "name": "Chinese",
      "charset": "UTF-8"
    },
    "kw_GB": {
      "name": "Cornish (United Kingdom)",
      "charset": "ISO-8859-1"
    },
    "kw": {
      "name": "Cornish",
      "charset": "ISO-8859-1"
    },
    "hr_HR": {
      "name": "Croatian (Croatia)",
      "charset": "ISO-8859-2"
    },
    "hr": {
      "name": "Croatian",
      "charset": "ISO-8859-2"
    },
    "cs_CZ": {
      "name": "Czech (Czech Republic)",
      "charset": "ISO-8859-2"
    },
    "cs": {
      "name": "Czech",
      "charset": "ISO-8859-2"
    },
    "da_DK": {
      "name": "Danish (Denmark)",
      "charset": "ISO-8859-1"
    },
    "da": {
      "name": "Danish",
      "charset": "ISO-8859-1"
    },
    "nl_BE": {
      "name": "Dutch (Belgium)",
      "charset": "ISO-8859-15"
    },
    "nl_NL": {
      "name": "Dutch (Netherlands)",
      "charset": "ISO-8859-15"
    },
    "nl": {
      "name": "Dutch",
      "charset": "ISO-8859-15"
    },
    "ebu_KE": {
      "name": "Embu (Kenya)",
      "charset": "UTF-8"
    },
    "ebu": {
      "name": "Embu",
      "charset": "UTF-8"
    },
    "en_AS": {
      "name": "English (American Samoa)",
      "charset": "UTF-8"
    },
    "en_AU": {
      "name": "English (Australia)",
      "charset": "UTF-8"
    },
    "en_BE": {
      "name": "English (Belgium)",
      "charset": "UTF-8"
    },
    "en_BZ": {
      "name": "English (Belize)",
      "charset": "UTF-8"
    },
    "en_BW": {
      "name": "English (Botswana)",
      "charset": "UTF-8"
    },
    "en_CA": {
      "name": "English (Canada)",
      "charset": "UTF-8"
    },
    "en_GU": {
      "name": "English (Guam)",
      "charset": "UTF-8"
    },
    "en_HK": {
      "name": "English (Hong Kong SAR China)",
      "charset": "UTF-8"
    },
    "en_IN": {
      "name": "English (India)",
      "charset": "UTF-8"
    },
    "en_IE": {
      "name": "English (Ireland)",
      "charset": "UTF-8"
    },
    "en_IL": {
      "name": "English (Israel)",
      "charset": "UTF-8"
    },
    "en_JM": {
      "name": "English (Jamaica)",
      "charset": "UTF-8"
    },
    "en_MT": {
      "name": "English (Malta)",
      "charset": "UTF-8"
    },
    "en_MH": {
      "name": "English (Marshall Islands)",
      "charset": "UTF-8"
    },
    "en_MU": {
      "name": "English (Mauritius)",
      "charset": "UTF-8"
    },
    "en_NA": {
      "name": "English (Namibia)",
      "charset": "UTF-8"
    },
    "en_NZ": {
      "name": "English (New Zealand)",
      "charset": "UTF-8"
    },
    "en_MP": {
      "name": "English (Northern Mariana Islands)",
      "charset": "UTF-8"
    },
    "en_PK": {
      "name": "English (Pakistan)",
      "charset": "UTF-8"
    },
    "en_PH": {
      "name": "English (Philippines)",
      "charset": "UTF-8"
    },
    "en_SG": {
      "name": "English (Singapore)",
      "charset": "UTF-8"
    },
    "en_ZA": {
      "name": "English (South Africa)",
      "charset": "UTF-8"
    },
    "en_TT": {
      "name": "English (Trinidad and Tobago)",
      "charset": "UTF-8"
    },
    "en_UM": {
      "name": "English (U.S. Minor Outlying Islands)",
      "charset": "UTF-8"
    },
    "en_VI": {
      "name": "English (U.S. Virgin Islands)",
      "charset": "UTF-8"
    },
    "en_GB": {
      "name": "English (United Kingdom)",
      "charset": "UTF-8"
    },
    "en_US": {
      "name": "English (United States)",
      "charset": "UTF-8"
    },
    "en_ZW": {
      "name": "English (Zimbabwe)",
      "charset": "UTF-8"
    },
    "en": {
      "name": "English",
      "charset": "UTF-8"
    },
    "eo": {
      "name": "Esperanto",
      "charset": "UTF-8"
    },
    "et_EE": {
      "name": "Estonian (Estonia)",
      "charset": "ISO-8859-1"
    },
    "et": {
      "name": "Estonian",
      "charset": "ISO-8859-1"
    },
    "ee_GH": {
      "name": "Ewe (Ghana)",
      "charset": "ISO-8859-1"
    },
    "ee_TG": {
      "name": "Ewe (Togo)",
      "charset": "ISO-8859-1"
    },
    "ee": {
      "name": "Ewe",
      "charset": "ISO-8859-1"
    },
    "fo_FO": {
      "name": "Faroese (Faroe Islands)",
      "charset": "UTF-8"
    },
    "fo": {
      "name": "Faroese",
      "charset": "UTF-8"
    },
    "fil_PH": {
      "name": "Filipino (Philippines)",
      "charset": "UTF-8"
    },
    "fil": {
      "name": "Filipino",
      "charset": "UTF-8"
    },
    "fi_FI": {
      "name": "Finnish (Finland)",
      "charset": "UTF-8"
    },
    "fi": {
      "name": "Finnish",
      "charset": "UTF-8"
    },
    "fr_BE": {
      "name": "French (Belgium)",
      "charset": "UTF-8"
    },
    "fr_BJ": {
      "name": "French (Benin)",
      "charset": "UTF-8"
    },
    "fr_BF": {
      "name": "French (Burkina Faso)",
      "charset": "UTF-8"
    },
    "fr_BI": {
      "name": "French (Burundi)",
      "charset": "UTF-8"
    },
    "fr_CM": {
      "name": "French (Cameroon)",
      "charset": "UTF-8"
    },
    "fr_CA": {
      "name": "French (Canada)",
      "charset": "UTF-8"
    },
    "fr_CF": {
      "name": "French (Central African Republic)",
      "charset": "UTF-8"
    },
    "fr_TD": {
      "name": "French (Chad)",
      "charset": "UTF-8"
    },
    "fr_KM": {
      "name": "French (Comoros)",
      "charset": "UTF-8"
    },
    "fr_CG": {
      "name": "French (Congo - Brazzaville)",
      "charset": "UTF-8"
    },
    "fr_CD": {
      "name": "French (Congo - Kinshasa)",
      "charset": "UTF-8"
    },
    "fr_CI": {
      "name": "French (Côte d’Ivoire)",
      "charset": "UTF-8"
    },
    "fr_DJ": {
      "name": "French (Djibouti)",
      "charset": "UTF-8"
    },
    "fr_GQ": {
      "name": "French (Equatorial Guinea)",
      "charset": "UTF-8"
    },
    "fr_FR": {
      "name": "French (France)",
      "charset": "UTF-8"
    },
    "fr_GA": {
      "name": "French (Gabon)",
      "charset": "UTF-8"
    },
    "fr_GP": {
      "name": "French (Guadeloupe)",
      "charset": "UTF-8"
    },
    "fr_GN": {
      "name": "French (Guinea)",
      "charset": "UTF-8"
    },
    "fr_LU": {
      "name": "French (Luxembourg)",
      "charset": "UTF-8"
    },
    "fr_MG": {
      "name": "French (Madagascar)",
      "charset": "UTF-8"
    },
    "fr_ML": {
      "name": "French (Mali)",
      "charset": "UTF-8"
    },
    "fr_MQ": {
      "name": "French (Martinique)",
      "charset": "UTF-8"
    },
    "fr_MC": {
      "name": "French (Monaco)",
      "charset": "UTF-8"
    },
    "fr_NE": {
      "name": "French (Niger)",
      "charset": "UTF-8"
    },
    "fr_RW": {
      "name": "French (Rwanda)",
      "charset": "UTF-8"
    },
    "fr_RE": {
      "name": "French (Réunion)",
      "charset": "UTF-8"
    },
    "fr_BL": {
      "name": "French (Saint Barthélemy)",
      "charset": "UTF-8"
    },
    "fr_MF": {
      "name": "French (Saint Martin)",
      "charset": "UTF-8"
    },
    "fr_SN": {
      "name": "French (Senegal)",
      "charset": "UTF-8"
    },
    "fr_CH": {
      "name": "French (Switzerland)",
      "charset": "UTF-8"
    },
    "fr_TG": {
      "name": "French (Togo)",
      "charset": "UTF-8"
    },
    "fr": {
      "name": "French",
      "charset": "UTF-8"
    },
    "ff_SN": {
      "name": "Fulah (Senegal)",
      "charset": "UTF-8"
    },
    "ff": {
      "name": "Fulah",
      "charset": "UTF-8"
    },
    "gl_ES": {
      "name": "Galician (Spain)",
      "charset": "ISO-8859-1"
    },
    "gl": {
      "name": "Galician",
      "charset": "ISO-8859-1"
    },
    "lg_UG": {
      "name": "Ganda (Uganda)",
      "charset": "UTF-8"
    },
    "lg": {
      "name": "Ganda",
      "charset": "UTF-8"
    },
    "ka_GE": {
      "name": "Georgian (Georgia)",
      "charset": "UTF-8"
    },
    "ka": {
      "name": "Georgian",
      "charset": "UTF-8"
    },
    "de_AT": {
      "name": "German (Austria)",
      "charset": "ISO-8859-1"
    },
    "de_BE": {
      "name": "German (Belgium)",
      "charset": "ISO-8859-1"
    },
    "de_DE": {
      "name": "German (Germany)",
      "charset": "ISO-8859-1"
    },
    "de_LI": {
      "name": "German (Liechtenstein)",
      "charset": "ISO-8859-1"
    },
    "de_LU": {
      "name": "German (Luxembourg)",
      "charset": "ISO-8859-1"
    },
    "de_CH": {
      "name": "German (Switzerland)",
      "charset": "ISO-8859-1"
    },
    "de": {
      "name": "German",
      "charset": "ISO-8859-1"
    },
    "el_CY": {
      "name": "Greek (Cyprus)",
      "charset": "UTF-8"
    },
    "el_GR": {
      "name": "Greek (Greece)",
      "charset": "UTF-8"
    },
    "el": {
      "name": "Greek",
      "charset": "UTF-8"
    },
    "gu_IN": {
      "name": "Gujarati (India)",
      "charset": "UTF-8"
    },
    "gu": {
      "name": "Gujarati",
      "charset": "UTF-8"
    },
    "guz_KE": {
      "name": "Gusii (Kenya)",
      "charset": "UTF-8"
    },
    "guz": {
      "name": "Gusii",
      "charset": "UTF-8"
    },
    "ha_Latn": {
      "name": "Hausa (Latin)",
      "charset": "UTF-8"
    },
    "ha_Latn_GH": {
      "name": "Hausa (Latin, Ghana)",
      "charset": "UTF-8"
    },
    "ha_Latn_NE": {
      "name": "Hausa (Latin, Niger)",
      "charset": "UTF-8"
    },
    "ha_Latn_NG": {
      "name": "Hausa (Latin, Nigeria)",
      "charset": "UTF-8"
    },
    "ha": {
      "name": "Hausa",
      "charset": "UTF-8"
    },
    "haw_US": {
      "name": "Hawaiian (United States)",
      "charset": "UTF-8"
    },
    "haw": {
      "name": "Hawaiian",
      "charset": "UTF-8"
    },
    "he_IL": {
      "name": "Hebrew (Israel)",
      "charset": "ISO-8859-8"
    },
    "he": {
      "name": "Hebrew",
      "charset": "ISO-8859-8"
    },
    "hi_IN": {
      "name": "Hindi (India)",
      "charset": "UTF-8"
    },
    "hi": {
      "name": "Hindi",
      "charset": "UTF-8"
    },
    "hu_HU": {
      "name": "Hungarian (Hungary)",
      "charset": "ISO-8859-2"
    },
    "hu": {
      "name": "Hungarian",
      "charset": "ISO-8859-2"
    },
    "is_IS": {
      "name": "Icelandic (Iceland)",
      "charset": "ISO-8859-1"
    },
    "is": {
      "name": "Icelandic",
      "charset": "ISO-8859-1"
    },
    "ig_NG": {
      "name": "Igbo (Nigeria)",
      "charset": "UTF-8"
    },
    "ig": {
      "name": "Igbo",
      "charset": "UTF-8"
    },
    "id_ID": {
      "name": "Indonesian (Indonesia)",
      "charset": "ISO-8859-1"
    },
    "id": {
      "name": "Indonesian",
      "charset": "ISO-8859-1"
    },
    "ga_IE": {
      "name": "Irish (Ireland)",
      "charset": "ISO-8859-1"
    },
    "ga": {
      "name": "Irish",
      "charset": "ISO-8859-1"
    },
    "it_IT": {
      "name": "Italian (Italy)",
      "charset": "ISO-8859-1"
    },
    "it_CH": {
      "name": "Italian (Switzerland)",
      "charset": "ISO-8859-1"
    },
    "it": {
      "name": "Italian",
      "charset": "ISO-8859-1"
    },
    "ja_JP": {
      "name": "Japanese (Japan)",
      "charset": "UTF-8"
    },
    "ja": {
      "name": "Japanese",
      "charset": "UTF-8"
    },
    "kea_CV": {
      "name": "Kabuverdianu (Cape Verde)",
      "charset": "UTF-8"
    },
    "kea": {
      "name": "Kabuverdianu",
      "charset": "UTF-8"
    },
    "kab_DZ": {
      "name": "Kabyle (Algeria)",
      "charset": "UTF-8"
    },
    "kab": {
      "name": "Kabyle",
      "charset": "UTF-8"
    },
    "kl_GL": {
      "name": "Kalaallisut (Greenland)",
      "charset": "ISO-8859-1"
    },
    "kl": {
      "name": "Kalaallisut",
      "charset": "ISO-8859-1"
    },
    "kln_KE": {
      "name": "Kalenjin (Kenya)",
      "charset": "UTF-8"
    },
    "kln": {
      "name": "Kalenjin",
      "charset": "UTF-8"
    },
    "kam_KE": {
      "name": "Kamba (Kenya)",
      "charset": "UTF-8"
    },
    "kam": {
      "name": "Kamba",
      "charset": "UTF-8"
    },
    "kn_IN": {
      "name": "Kannada (India)",
      "charset": "UTF-8"
    },
    "kn": {
      "name": "Kannada",
      "charset": "UTF-8"
    },
    "kk_Cyrl": {
      "name": "Kazakh (Cyrillic)",
      "charset": "UTF-8"
    },
    "kk_Cyrl_KZ": {
      "name": "Kazakh (Cyrillic, Kazakhstan)",
      "charset": "UTF-8"
    },
    "kk": {
      "name": "Kazakh",
      "charset": "UTF-8"
    },
    "km_KH": {
      "name": "Khmer (Cambodia)",
      "charset": "UTF-8"
    },
    "km": {
      "name": "Khmer",
      "charset": "UTF-8"
    },
    "ki_KE": {
      "name": "Kikuyu (Kenya)",
      "charset": "UTF-8"
    },
    "ki": {
      "name": "Kikuyu",
      "charset": "UTF-8"
    },
    "rw_RW": {
      "name": "Kinyarwanda (Rwanda)",
      "charset": "UTF-8"
    },
    "rw": {
      "name": "Kinyarwanda",
      "charset": "UTF-8"
    },
    "kok_IN": {
      "name": "Konkani (India)",
      "charset": "UTF-8"
    },
    "kok": {
      "name": "Konkani",
      "charset": "UTF-8"
    },
    "ko_KR": {
      "name": "Korean (South Korea)",
      "charset": "UTF-8"
    },
    "ko": {
      "name": "Korean",
      "charset": "UTF-8"
    },
    "khq_ML": {
      "name": "Koyra Chiini (Mali)",
      "charset": "UTF-8"
    },
    "khq": {
      "name": "Koyra Chiini",
      "charset": "UTF-8"
    },
    "ses_ML": {
      "name": "Koyraboro Senni (Mali)",
      "charset": "UTF-8"
    },
    "ses": {
      "name": "Koyraboro Senni",
      "charset": "UTF-8"
    },
    "lag_TZ": {
      "name": "Langi (Tanzania)",
      "charset": "UTF-8"
    },
    "lag": {
      "name": "Langi",
      "charset": "UTF-8"
    },
    "lv_LV": {
      "name": "Latvian (Latvia)",
      "charset": "UTF-8"
    },
    "lv": {
      "name": "Latvian",
      "charset": "UTF-8"
    },
    "lt_LT": {
      "name": "Lithuanian (Lithuania)",
      "charset": "ISO-8859-13"
    },
    "lt": {
      "name": "Lithuanian",
      "charset": "ISO-8859-13"
    },
    "luo_KE": {
      "name": "Luo (Kenya)",
      "charset": "UTF-8"
    },
    "luo": {
      "name": "Luo",
      "charset": "UTF-8"
    },
    "luy_KE": {
      "name": "Luyia (Kenya)",
      "charset": "UTF-8"
    },
    "luy": {
      "name": "Luyia",
      "charset": "UTF-8"
    },
    "mk_MK": {
      "name": "Macedonian (Macedonia)",
      "charset": "ISO-8859-5"
    },
    "mk": {
      "name": "Macedonian",
      "charset": "ISO-8859-5"
    },
    "jmc_TZ": {
      "name": "Machame (Tanzania)",
      "charset": "UTF-8"
    },
    "jmc": {
      "name": "Machame",
      "charset": "UTF-8"
    },
    "kde_TZ": {
      "name": "Makonde (Tanzania)",
      "charset": "UTF-8"
    },
    "kde": {
      "name": "Makonde",
      "charset": "UTF-8"
    },
    "mg_MG": {
      "name": "Malagasy (Madagascar)",
      "charset": "ISO-8859-15"
    },
    "mg": {
      "name": "Malagasy",
      "charset": "ISO-8859-15"
    },
    "ms_BN": {
      "name": "Malay (Brunei)",
      "charset": "UTF-8"
    },
    "ms_MY": {
      "name": "Malay (Malaysia)",
      "charset": "UTF-8"
    },
    "ms": {
      "name": "Malay",
      "charset": "UTF-8"
    },
    "ml_IN": {
      "name": "Malayalam (India)",
      "charset": "UTF-8"
    },
    "ml": {
      "name": "Malayalam",
      "charset": "UTF-8"
    },
    "mt_MT": {
      "name": "Maltese (Malta)",
      "charset": "UTF-8"
    },
    "mt": {
      "name": "Maltese",
      "charset": "ISO-8859-3"
    },
    "gv_GB": {
      "name": "Manx (United Kingdom)",
      "charset": "ISO-8859-1"
    },
    "gv": {
      "name": "Manx",
      "charset": "ISO-8859-1"
    },
    "mr_IN": {
      "name": "Marathi (India)",
      "charset": "UTF-8"
    },
    "mr": {
      "name": "Marathi",
      "charset": "UTF-8"
    },
    "mas_KE": {
      "name": "Masai (Kenya)",
      "charset": "UTF-8"
    },
    "mas_TZ": {
      "name": "Masai (Tanzania)",
      "charset": "UTF-8"
    },
    "mas": {
      "name": "Masai",
      "charset": "UTF-8"
    },
    "mer_KE": {
      "name": "Meru (Kenya)",
      "charset": "UTF-8"
    },
    "mer": {
      "name": "Meru",
      "charset": "UTF-8"
    },
    "mfe_MU": {
      "name": "Morisyen (Mauritius)",
      "charset": "UTF-8"
    },
    "mfe": {
      "name": "Morisyen",
      "charset": "UTF-8"
    },
    "naq_NA": {
      "name": "Nama (Namibia)",
      "charset": "UTF-8"
    },
    "naq": {
      "name": "Nama",
      "charset": "UTF-8"
    },
    "ne_IN": {
      "name": "Nepali (India)",
      "charset": "UTF-8"
    },
    "ne_NP": {
      "name": "Nepali (Nepal)",
      "charset": "UTF-8"
    },
    "ne": {
      "name": "Nepali",
      "charset": "UTF-8"
    },
    "nd_ZW": {
      "name": "North Ndebele (Zimbabwe)",
      "charset": "UTF-8"
    },
    "nd": {
      "name": "North Ndebele",
      "charset": "UTF-8"
    },
    "nb_NO": {
      "name": "Norwegian Bokmål (Norway)",
      "charset": "ISO-8859-1"
    },
    "nb": {
      "name": "Norwegian Bokmål",
      "charset": "ISO-8859-1"
    },
    "nn_NO": {
      "name": "Norwegian Nynorsk (Norway)",
      "charset": "ISO-8859-1"
    },
    "nn": {
      "name": "Norwegian Nynorsk",
      "charset": "ISO-8859-1"
    },
    "nyn_UG": {
      "name": "Nyankole (Uganda)",
      "charset": "UTF-8"
    },
    "nyn": {
      "name": "Nyankole",
      "charset": "UTF-8"
    },
    "or_IN": {
      "name": "Oriya (India)",
      "charset": "UTF-8"
    },
    "or": {
      "name": "Oriya",
      "charset": "UTF-8"
    },
    "om_ET": {
      "name": "Oromo (Ethiopia)",
      "charset": "UTF-8"
    },
    "om_KE": {
      "name": "Oromo (Kenya)",
      "charset": "UTF-8"
    },
    "om": {
      "name": "Oromo",
      "charset": "UTF-8"
    },
    "ps_AF": {
      "name": "Pashto (Afghanistan)",
      "charset": "UTF-8"
    },
    "ps": {
      "name": "Pashto",
      "charset": "UTF-8"
    },
    "fa_AF": {
      "name": "Persian (Afghanistan)",
      "charset": "UTF-8"
    },
    "fa_IR": {
      "name": "Persian (Iran)",
      "charset": "UTF-8"
    },
    "fa": {
      "name": "Persian",
      "charset": "UTF-8"
    },
    "pl_PL": {
      "name": "Polish (Poland)",
      "charset": "ISO-8859-2"
    },
    "pl": {
      "name": "Polish",
      "charset": "ISO-8859-2"
    },
    "pt_BR": {
      "name": "Portuguese (Brazil)",
      "charset": "ISO-8859-1"
    },
    "pt_GW": {
      "name": "Portuguese (Guinea-Bissau)",
      "charset": "ISO-8859-1"
    },
    "pt_MZ": {
      "name": "Portuguese (Mozambique)",
      "charset": "ISO-8859-1"
    },
    "pt_PT": {
      "name": "Portuguese (Portugal)",
      "charset": "ISO-8859-1"
    },
    "pt": {
      "name": "Portuguese",
      "charset": "ISO-8859-1"
    },
    "pa_Arab": {
      "name": "Punjabi (Arabic)",
      "charset": "UTF-8"
    },
    "pa_Arab_PK": {
      "name": "Punjabi (Arabic, Pakistan)",
      "charset": "UTF-8"
    },
    "pa_Guru": {
      "name": "Punjabi (Gurmukhi)",
      "charset": "UTF-8"
    },
    "pa_Guru_IN": {
      "name": "Punjabi (Gurmukhi, India)",
      "charset": "UTF-8"
    },
    "pa": {
      "name": "Punjabi",
      "charset": "UTF-8"
    },
    "ro_MD": {
      "name": "Romanian (Moldova)",
      "charset": "UTF-8"
    },
    "ro_RO": {
      "name": "Romanian (Romania)",
      "charset": "UTF-8"
    },
    "ro": {
      "name": "Romanian",
      "charset": "UTF-8"
    },
    "rm_CH": {
      "name": "Romansh (Switzerland)",
      "charset": "UTF-8"
    },
    "rm": {
      "name": "Romansh",
      "charset": "UTF-8"
    },
    "rof_TZ": {
      "name": "Rombo (Tanzania)",
      "charset": "UTF-8"
    },
    "rof": {
      "name": "Rombo",
      "charset": "UTF-8"
    },
    "ru_MD": {
      "name": "Russian (Moldova)",
      "charset": "UTF-8"
    },
    "ru_RU": {
      "name": "Russian (Russia)",
      "charset": "UTF-8"
    },
    "ru_UA": {
      "name": "Russian (Ukraine)",
      "charset": "UTF-8"
    },
    "ru": {
      "name": "Russian",
      "charset": "UTF-8"
    },
    "rwk_TZ": {
      "name": "Rwa (Tanzania)",
      "charset": "UTF-8"
    },
    "rwk": {
      "name": "Rwa",
      "charset": "UTF-8"
    },
    "saq_KE": {
      "name": "Samburu (Kenya)",
      "charset": "UTF-8"
    },
    "saq": {
      "name": "Samburu",
      "charset": "UTF-8"
    },
    "sg_CF": {
      "name": "Sango (Central African Republic)",
      "charset": "UTF-8"
    },
    "sg": {
      "name": "Sango",
      "charset": "UTF-8"
    },
    "seh_MZ": {
      "name": "Sena (Mozambique)",
      "charset": "UTF-8"
    },
    "seh": {
      "name": "Sena",
      "charset": "UTF-8"
    },
    "sr_Cyrl": {
      "name": "Serbian (Cyrillic)",
      "charset": "UTF-8"
    },
    "sr_Cyrl_BA": {
      "name": "Serbian (Cyrillic, Bosnia and Herzegovina)",
      "charset": "UTF-8"
    },
    "sr_Cyrl_ME": {
      "name": "Serbian (Cyrillic, Montenegro)",
      "charset": "UTF-8"
    },
    "sr_Cyrl_RS": {
      "name": "Serbian (Cyrillic, Serbia)",
      "charset": "UTF-8"
    },
    "sr_Latn": {
      "name": "Serbian (Latin)",
      "charset": "UTF-8"
    },
    "sr_Latn_BA": {
      "name": "Serbian (Latin, Bosnia and Herzegovina)",
      "charset": "UTF-8"
    },
    "sr_Latn_ME": {
      "name": "Serbian (Latin, Montenegro)",
      "charset": "UTF-8"
    },
    "sr_Latn_RS": {
      "name": "Serbian (Latin, Serbia)",
      "charset": "UTF-8"
    },
    "sr": {
      "name": "Serbian",
      "charset": "UTF-8"
    },
    "sn_ZW": {
      "name": "Shona (Zimbabwe)",
      "charset": "UTF-8"
    },
    "sn": {
      "name": "Shona",
      "charset": "UTF-8"
    },
    "ii_CN": {
      "name": "Sichuan Yi (China)",
      "charset": "UTF-8"
    },
    "ii": {
      "name": "Sichuan Yi",
      "charset": "UTF-8"
    },
    "si_LK": {
      "name": "Sinhala (Sri Lanka)",
      "charset": "UTF-8"
    },
    "si": {
      "name": "Sinhala",
      "charset": "UTF-8"
    },
    "sk_SK": {
      "name": "Slovak (Slovakia)",
      "charset": "ISO-8859-2"
    },
    "sk": {
      "name": "Slovak",
      "charset": "ISO-8859-2"
    },
    "sl_SI": {
      "name": "Slovenian (Slovenia)",
      "charset": "ISO-8859-2"
    },
    "sl": {
      "name": "Slovenian",
      "charset": "ISO-8859-2"
    },
    "xog_UG": {
      "name": "Soga (Uganda)",
      "charset": "UTF-8"
    },
    "xog": {
      "name": "Soga",
      "charset": "UTF-8"
    },
    "so_DJ": {
      "name": "Somali (Djibouti)",
      "charset": "UTF-8"
    },
    "so_ET": {
      "name": "Somali (Ethiopia)",
      "charset": "UTF-8"
    },
    "so_KE": {
      "name": "Somali (Kenya)",
      "charset": "UTF-8"
    },
    "so_SO": {
      "name": "Somali (Somalia)",
      "charset": "UTF-8"
    },
    "so": {
      "name": "Somali",
      "charset": "UTF-8"
    },
    "es_AR": {
      "name": "Spanish (Argentina)",
      "charset": "UTF-8"
    },
    "es_BO": {
      "name": "Spanish (Bolivia)",
      "charset": "UTF-8"
    },
    "es_CL": {
      "name": "Spanish (Chile)",
      "charset": "UTF-8"
    },
    "es_CO": {
      "name": "Spanish (Colombia)",
      "charset": "UTF-8"
    },
    "es_CR": {
      "name": "Spanish (Costa Rica)",
      "charset": "UTF-8"
    },
    "es_DO": {
      "name": "Spanish (Dominican Republic)",
      "charset": "UTF-8"
    },
    "es_EC": {
      "name": "Spanish (Ecuador)",
      "charset": "UTF-8"
    },
    "es_SV": {
      "name": "Spanish (El Salvador)",
      "charset": "UTF-8"
    },
    "es_GQ": {
      "name": "Spanish (Equatorial Guinea)",
      "charset": "UTF-8"
    },
    "es_GT": {
      "name": "Spanish (Guatemala)",
      "charset": "UTF-8"
    },
    "es_HN": {
      "name": "Spanish (Honduras)",
      "charset": "UTF-8"
    },
    "es_419": {
      "name": "Spanish (Latin America)",
      "charset": "UTF-8"
    },
    "es_MX": {
      "name": "Spanish (Mexico)",
      "charset": "UTF-8"
    },
    "es_NI": {
      "name": "Spanish (Nicaragua)",
      "charset": "UTF-8"
    },
    "es_PA": {
      "name": "Spanish (Panama)",
      "charset": "UTF-8"
    },
    "es_PY": {
      "name": "Spanish (Paraguay)",
      "charset": "UTF-8"
    },
    "es_PE": {
      "name": "Spanish (Peru)",
      "charset": "UTF-8"
    },
    "es_PR": {
      "name": "Spanish (Puerto Rico)",
      "charset": "UTF-8"
    },
    "es_ES": {
      "name": "Spanish (Spain)",
      "charset": "UTF-8"
    },
    "es_US": {
      "name": "Spanish (United States)",
      "charset": "UTF-8"
    },
    "es_UY": {
      "name": "Spanish (Uruguay)",
      "charset": "UTF-8"
    },
    "es_VE": {
      "name": "Spanish (Venezuela)",
      "charset": "UTF-8"
    },
    "es": {
      "name": "Spanish",
      "charset": "UTF-8"
    },
    "sw_KE": {
      "name": "Swahili (Kenya)",
      "charset": "UTF-8"
    },
    "sw_TZ": {
      "name": "Swahili (Tanzania)",
      "charset": "UTF-8"
    },
    "sw": {
      "name": "Swahili",
      "charset": "UTF-8"
    },
    "sv_FI": {
      "name": "Swedish (Finland)",
      "charset": "UTF-8"
    },
    "sv_SE": {
      "name": "Swedish (Sweden)",
      "charset": "UTF-8"
    },
    "sv": {
      "name": "Swedish",
      "charset": "UTF-8"
    },
    "gsw_CH": {
      "name": "Swiss German (Switzerland)",
      "charset": "UTF-8"
    },
    "gsw": {
      "name": "Swiss German",
      "charset": "UTF-8"
    },
    "shi_Latn": {
      "name": "Tachelhit (Latin)",
      "charset": "UTF-8"
    },
    "shi_Latn_MA": {
      "name": "Tachelhit (Latin, Morocco)",
      "charset": "UTF-8"
    },
    "shi_Tfng": {
      "name": "Tachelhit (Tifinagh)",
      "charset": "UTF-8"
    },
    "shi_Tfng_MA": {
      "name": "Tachelhit (Tifinagh, Morocco)",
      "charset": "UTF-8"
    },
    "shi": {
      "name": "Tachelhit",
      "charset": "UTF-8"
    },
    "dav_KE": {
      "name": "Taita (Kenya)",
      "charset": "UTF-8"
    },
    "dav": {
      "name": "Taita",
      "charset": "UTF-8"
    },
    "ta_IN": {
      "name": "Tamil (India)",
      "charset": "UTF-8"
    },
    "ta_LK": {
      "name": "Tamil (Sri Lanka)",
      "charset": "UTF-8"
    },
    "ta": {
      "name": "Tamil",
      "charset": "UTF-8"
    },
    "te_IN": {
      "name": "Telugu (India)",
      "charset": "UTF-8"
    },
    "te": {
      "name": "Telugu",
      "charset": "UTF-8"
    },
    "teo_KE": {
      "name": "Teso (Kenya)",
      "charset": "UTF-8"
    },
    "teo_UG": {
      "name": "Teso (Uganda)",
      "charset": "UTF-8"
    },
    "teo": {
      "name": "Teso",
      "charset": "UTF-8"
    },
    "th_TH": {
      "name": "Thai (Thailand)",
      "charset": "TIS-620"
    },
    "th": {
      "name": "Thai",
      "charset": "TIS-620"
    },
    "bo_CN": {
      "name": "Tibetan (China)",
      "charset": "UTF-8"
    },
    "bo_IN": {
      "name": "Tibetan (India)",
      "charset": "UTF-8"
    },
    "bo": {
      "name": "Tibetan",
      "charset": "UTF-8"
    },
    "ti_ER": {
      "name": "Tigrinya (Eritrea)",
      "charset": "UTF-8"
    },
    "ti_ET": {
      "name": "Tigrinya (Ethiopia)",
      "charset": "UTF-8"
    },
    "ti": {
      "name": "Tigrinya",
      "charset": "UTF-8"
    },
    "to_TO": {
      "name": "Tonga (Tonga)",
      "charset": "UTF-8"
    },
    "to": {
      "name": "Tonga",
      "charset": "UTF-8"
    },
    "tr_TR": {
      "name": "Turkish (Turkey)",
      "charset": "ISO-8859-9"
    },
    "tr": {
      "name": "Turkish",
      "charset": "ISO-8859-9"
    },
    "uk_UA": {
      "name": "Ukrainian (Ukraine)",
      "charset": "KOI8-U"
    },
    "uk": {
      "name": "Ukrainian",
      "charset": "KOI8-U"
    },
    "ur_IN": {
      "name": "Urdu (India)",
      "charset": "UTF-8"
    },
    "ur_PK": {
      "name": "Urdu (Pakistan)",
      "charset": "UTF-8"
    },
    "ur": {
      "name": "Urdu",
      "charset": "UTF-8"
    },
    "uz_Arab": {
      "name": "Uzbek (Arabic)",
      "charset": "UTF-8"
    },
    "uz_Arab_AF": {
      "name": "Uzbek (Arabic, Afghanistan)",
      "charset": "UTF-8"
    },
    "uz_Cyrl": {
      "name": "Uzbek (Cyrillic)",
      "charset": "UTF-8"
    },
    "uz_Cyrl_UZ": {
      "name": "Uzbek (Cyrillic, Uzbekistan)",
      "charset": "UTF-8"
    },
    "uz_Latn": {
      "name": "Uzbek (Latin)",
      "charset": "UTF-8"
    },
    "uz_Latn_UZ": {
      "name": "Uzbek (Latin, Uzbekistan)",
      "charset": "UTF-8"
    },
    "uz": {
      "name": "Uzbek",
      "charset": "UTF-8"
    },
    "vi_VN": {
      "name": "Vietnamese (Vietnam)",
      "charset": "UTF-8"
    },
    "vi": {
      "name": "Vietnamese",
      "charset": "UTF-8"
    },
    "vun_TZ": {
      "name": "Vunjo (Tanzania)",
      "charset": "UTF-8"
    },
    "vun": {
      "name": "Vunjo",
      "charset": "UTF-8"
    },
    "cy_GB": {
      "name": "Welsh (United Kingdom)",
      "charset": "UTF-8"
    },
    "cy": {
      "name": "Welsh",
      "charset": "UTF-8"
    },
    "yo_NG": {
      "name": "Yoruba (Nigeria)",
      "charset": "UTF-8"
    },
    "yo": {
      "name": "Yoruba",
      "charset": "UTF-8"
    },
    "zu_ZA": {
      "name": "Zulu (South Africa)",
      "charset": "ISO-8859-1"
    },
    "zu": {
      "name": "Zulu",
      "charset": "ISO-8859-1"
    }
  }]
})(_ref => {
  let {
    value,
    options,
    setState
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__.MultiSelectControl, {
    value: value,
    options: options,
    onChange: value => setState({
      value
    })
  });
});
function Edit(_ref2) {
  let {
    clientId,
    attributes,
    setAttributes,
    className
  } = _ref2;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const otherLocaleOptions = function () {
    if (attributes.other_locales_show == true) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "locale-picker"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ph en",
        checked: attributes.block_locale_ph_en,
        onChange: () => setAttributes({
          block_locale_ph_en: !attributes.block_locale_ph_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "mx en",
        checked: attributes.block_locale_mx_en,
        onChange: () => setAttributes({
          block_locale_mx_en: !attributes.block_locale_mx_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "mx es",
        checked: attributes.block_locale_mx_es,
        onChange: () => setAttributes({
          block_locale_mx_es: !attributes.block_locale_mx_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "es en",
        checked: attributes.block_locale_es_en,
        onChange: () => setAttributes({
          block_locale_es_en: !attributes.block_locale_es_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "es es",
        checked: attributes.block_locale_es_es,
        onChange: () => setAttributes({
          block_locale_es_es: !attributes.block_locale_es_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "sg en",
        checked: attributes.block_locale_sg_en,
        onChange: () => setAttributes({
          block_locale_sg_en: !attributes.block_locale_sg_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "it en",
        checked: attributes.block_locale_it_en,
        onChange: () => setAttributes({
          block_locale_it_en: !attributes.block_locale_it_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch en",
        checked: attributes.block_locale_ch_en,
        onChange: () => setAttributes({
          block_locale_ch_en: !attributes.block_locale_ch_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch fr",
        checked: attributes.block_locale_ch_fr,
        onChange: () => setAttributes({
          block_locale_ch_fr: !attributes.block_locale_ch_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch de",
        checked: attributes.block_locale_ch_de,
        onChange: () => setAttributes({
          block_locale_ch_de: !attributes.block_locale_ch_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "nl en",
        checked: attributes.block_locale_nl_en,
        onChange: () => setAttributes({
          block_locale_nl_en: !attributes.block_locale_nl_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "nl nl",
        checked: attributes.block_locale_nl_nl,
        onChange: () => setAttributes({
          block_locale_nl_nl: !attributes.block_locale_nl_nl
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "se en",
        checked: attributes.block_locale_se_en,
        onChange: () => setAttributes({
          block_locale_se_en: !attributes.block_locale_se_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be en",
        checked: attributes.block_locale_be_en,
        onChange: () => setAttributes({
          block_locale_be_en: !attributes.block_locale_be_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be fr",
        checked: attributes.block_locale_be_fr,
        onChange: () => setAttributes({
          block_locale_be_fr: !attributes.block_locale_be_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "id en",
        checked: attributes.block_locale_id_en,
        onChange: () => setAttributes({
          block_locale_id_en: !attributes.block_locale_id_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cl es",
        checked: attributes.block_locale_cl_es,
        onChange: () => setAttributes({
          block_locale_cl_es: !attributes.block_locale_cl_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cl en",
        checked: attributes.block_locale_cl_en,
        onChange: () => setAttributes({
          block_locale_cl_en: !attributes.block_locale_cl_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "za en",
        checked: attributes.block_locale_za_en,
        onChange: () => setAttributes({
          block_locale_za_en: !attributes.block_locale_za_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ie en",
        checked: attributes.block_locale_ie_en,
        onChange: () => setAttributes({
          block_locale_ie_en: !attributes.block_locale_ie_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "no es",
        checked: attributes.block_locale_no_es,
        onChange: () => setAttributes({
          block_locale_no_es: !attributes.block_locale_no_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "hk en",
        checked: attributes.block_locale_hk_en,
        onChange: () => setAttributes({
          block_locale_hk_en: !attributes.block_locale_hk_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "fi en",
        checked: attributes.block_locale_fi_en,
        onChange: () => setAttributes({
          block_locale_fi_en: !attributes.block_locale_fi_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "at en",
        checked: attributes.block_locale_at_en,
        onChange: () => setAttributes({
          block_locale_at_en: !attributes.block_locale_at_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "jp en",
        checked: attributes.block_locale_jp_en,
        onChange: () => setAttributes({
          block_locale_jp_en: !attributes.block_locale_jp_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "gr en",
        checked: attributes.block_locale_gr_en,
        onChange: () => setAttributes({
          block_locale_gr_en: !attributes.block_locale_gr_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "pt en",
        checked: attributes.block_locale_pt_en,
        onChange: () => setAttributes({
          block_locale_pt_en: !attributes.block_locale_pt_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "dk en",
        checked: attributes.block_locale_dk_en,
        onChange: () => setAttributes({
          block_locale_dk_en: !attributes.block_locale_dk_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cz en",
        checked: attributes.block_locale_cz_en,
        onChange: () => setAttributes({
          block_locale_cz_en: !attributes.block_locale_cz_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "il en",
        checked: attributes.block_locale_il_en,
        onChange: () => setAttributes({
          block_locale_il_en: !attributes.block_locale_il_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "fr fr",
        checked: attributes.block_locale_fr_fr,
        onChange: () => setAttributes({
          block_locale_fr_fr: !attributes.block_locale_fr_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "at de",
        checked: attributes.block_locale_at_de,
        onChange: () => setAttributes({
          block_locale_at_de: !attributes.block_locale_at_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be de",
        checked: attributes.block_locale_be_de,
        onChange: () => setAttributes({
          block_locale_be_de: !attributes.block_locale_be_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be nl",
        checked: attributes.block_locale_be_nl,
        onChange: () => setAttributes({
          block_locale_be_nl: !attributes.block_locale_be_nl
        })
      }));
    }
  };
  const northAmericaCountryOnly = function () {
    // if ( attributes.other_locales_show == true ) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "locale-picker"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      className: "toggle-control-ai",
      label: "ai",
      checked: attributes.block_locale_ph_en,
      onChange: () => setAttributes({
        block_locale_ph_en: !attributes.block_locale_ph_en
      })
    }));
    // }
  };

  const activeLocales = function () {
    let localeList = [];
    let localesState = '';
    if (attributes.is_default_block) {
      localesState = 'Locales excluded:';
    } else {
      localesState = 'Locales included:';
    }
    if (attributes.block_locale_us_en) {
      localeList.push(" us/en, ");
    }
    if (attributes.block_locale_ca_en) {
      localeList.push(" ca/en, ");
    }
    if (attributes.block_locale_ca_fr) {
      localeList.push(" ca/fr, ");
    }
    if (attributes.block_locale_au_en) {
      localeList.push(" au/en, ");
    }
    if (attributes.block_locale_gb_en) {
      localeList.push(" gb/en, ");
    }
    if (attributes.block_locale_nz_en) {
      localeList.push(" nz/en, ");
    }
    if (attributes.block_locale_de_de) {
      localeList.push(" de/de, ");
    }
    if (attributes.block_locale_fr_fr) {
      localeList.push(" fr/fr, ");
    }
    if (attributes.block_locale_fr_en) {
      localeList.push(" fr/en, ");
    }
    if (attributes.block_locale_ph_en) {
      localeList.push(" ph/en, ");
    }
    if (attributes.block_locale_mx_en) {
      localeList.push(" mx/en, ");
    }
    if (attributes.block_locale_mx_es) {
      localeList.push(" mx/es, ");
    }
    if (attributes.block_locale_es_en) {
      localeList.push(" es/en, ");
    }
    if (attributes.block_locale_es_es) {
      localeList.push(" es/es, ");
    }
    if (attributes.block_locale_sg_en) {
      localeList.push(" sg/en, ");
    }
    if (attributes.block_locale_it_en) {
      localeList.push(" it/en, ");
    }
    if (attributes.block_locale_ch_en) {
      localeList.push(" ch/en, ");
    }
    if (attributes.block_locale_ch_fr) {
      localeList.push(" ch/fr, ");
    }
    if (attributes.block_locale_ch_de) {
      localeList.push(" ch/de, ");
    }
    if (attributes.block_locale_nl_en) {
      localeList.push(" nl/en, ");
    }
    if (attributes.block_locale_nl_nl) {
      localeList.push(" nl/nl, ");
    }
    if (attributes.block_locale_se_en) {
      localeList.push(" se/en, ");
    }
    if (attributes.block_locale_be_en) {
      localeList.push(" be/en, ");
    }
    if (attributes.block_locale_be_fr) {
      localeList.push(" be/fr, ");
    }
    if (attributes.block_locale_id_en) {
      localeList.push(" id/en, ");
    }
    if (attributes.block_locale_cl_es) {
      localeList.push(" cl/es, ");
    }
    if (attributes.block_locale_cl_en) {
      localeList.push(" cl/en, ");
    }
    if (attributes.block_locale_za_en) {
      localeList.push(" za/en, ");
    }
    if (attributes.block_locale_ie_en) {
      localeList.push(" ie/en, ");
    }
    if (attributes.block_locale_no_es) {
      localeList.push(" no/es, ");
    }
    if (attributes.block_locale_hk_en) {
      localeList.push(" hk/en, ");
    }
    if (attributes.block_locale_fi_en) {
      localeList.push(" fi/en, ");
    }
    if (attributes.block_locale_at_en) {
      localeList.push(" at/en, ");
    }
    if (attributes.block_locale_jp_en) {
      localeList.push(" jp/en, ");
    }
    if (attributes.block_locale_gr_en) {
      localeList.push(" gr/en, ");
    }
    if (attributes.block_locale_pt_en) {
      localeList.push(" pt/en, ");
    }
    if (attributes.block_locale_dk_en) {
      localeList.push(" dk/en, ");
    }
    if (attributes.block_locale_cz_en) {
      localeList.push(" cz/en, ");
    }
    if (attributes.block_locale_il_en) {
      localeList.push(" il/en, ");
    }
    if (attributes.block_locale_at_de) {
      localeList.push(" at/de, ");
    }
    if (attributes.block_locale_be_de) {
      localeList.push(" be/de, ");
    }
    if (attributes.block_locale_be_nl) {
      localeList.push(" be/nl, ");
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "locales-state"
    }, " ", localesState, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, localeList), " ");
  };
  const blockState = function () {
    let uiState = '';
    if (attributes.ui_state) {
      uiState = 'ui-minify';
    } else {
      uiState = '';
    }
    return uiState;
  };

  // Block contents constructor.
  let blockContents = [];
  setTimeout(function () {
    let blockId = 'block-' + clientId;
    var blockList = document.getElementById(blockId).querySelectorAll(".block-editor-block-list__layout > div");
    Array.from(blockList).forEach((element, index) => {
      var blockDataTitle = element.getAttribute('data-title');
      blockContents.push(blockDataTitle);
      document.querySelector('.list-' + clientId).innerHTML = blockContents.toString().replaceAll(",", ", ");
    });
  }, 2000);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbl-header-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "h3-style"
  }, "Localization Wrapper")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbl-url-pattern-selector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Select your website\u2019s URL localization pattern"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "URL Pattern",
    value: attributes.block_color,
    options: [{
      label: 'Language & Country (joined): EG www.your-website.com/en_US/',
      value: 'block-background-red-medium'
    }, {
      label: 'Language only: EG www.your-website.com/en/',
      value: 'block-background-blue-medium'
    }, {
      label: 'Country only: EG www.your-website.com/us/',
      value: 'block-background-blue-medium'
    }, {
      label: 'Country THEN language: EG www.your-website.com/us/en',
      value: 'block-background-blue-medium'
    }]
    // onChange={( value ) => setAttributes({ block_color: value })}
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbl-type-selector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Is this a \u2018universal\u2019 block?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "If \u2018yes\u2019, wrapped blocks will display on every locale EXCLUDING the locales you choose."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "If \u2018no\u2019, wrapped blocks wlll ONLY display on the locales you choose."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "'Universal' block?"
    // checked={ attributes.progress_circle_show }
    // onChange={() => setAttributes({ progress_circle_show: !attributes.progress_circle_show })}
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbl-locale-selector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Locale selector"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Select the locales that you wish to include / exclude ( depending on your above selection ) wrapped block on."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col " + blockState()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyMultiSelectControl, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbl-block-selector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Block selector"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Choose the blocks that you wish to be localized, here."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col " + blockState()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks
  // templateLock="all"
  , null))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('gbl-block/localization-wrapper', {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklocalization_wrapper"] = self["webpackChunklocalization_wrapper"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map