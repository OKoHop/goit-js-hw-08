!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(T,t),d?b(e):a}function E(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=g();if(E(e))return A(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function A(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function L(){var e=g(),n=E(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(T,t),b(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=O(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),L.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},L.flush=function(){return void 0===f?a:A(g())},L}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var S={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textArea:document.querySelector(".feedback-form textarea"),LOCALSTORAGE_KEY:"feedback-form-state"},E={};function T(e){E[e.target.name]=e.target.value,localStorage.setItem(S.LOCALSTORAGE_KEY,JSON.stringify(E))}S.form.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(S.LOCALSTORAGE_KEY);console.log(JSON.parse(t)),e.currentTarget.reset(),localStorage.removeItem(S.LOCALSTORAGE_KEY),console.log("DONE!")})),S.input.addEventListener("input",e(t)(T,500)),S.textArea.addEventListener("input",e(t)(T,500)),function(e){var t=localStorage.getItem(S.LOCALSTORAGE_KEY);if(t){var n=JSON.parse(t);S.input.value=n.email,S.textArea.value=n.message}}()}();
//# sourceMappingURL=03-feedback.65398157.js.map
