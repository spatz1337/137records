(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{6365:function(e,t,n){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},t="Expected a function",o=NaN,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=l||d||Function("return this")(),m=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return u.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=r.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):a.test(e)?o:+e}var g=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(t);return b(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),function(e,n,o){var i,a,r,s,c,l,d=0,u=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,s=e.apply(o,n)}function w(e){var t=e-l;return void 0===l||t>=n||t<0||m&&e-d>=r}function x(){var e,t=v();if(w(t))return k(t);c=setTimeout(x,(e=n-(t-l),m?p(e,r-(t-d)):e))}function k(e){return c=void 0,g&&i?y(e):(i=a=void 0,s)}function j(){var e,t=v(),o=w(t);if(i=arguments,a=this,l=t,o){if(void 0===c)return d=e=l,c=setTimeout(x,n),u?y(e):s;if(m)return c=setTimeout(x,n),y(l)}return void 0===c&&(c=setTimeout(x,n)),s}return n=h(n)||0,b(o)&&(u=!!o.leading,r=(m="maxWait"in o)?f(h(o.maxWait)||0,n):r,g="trailing"in o?!!o.trailing:g),j.cancel=function(){void 0!==c&&clearTimeout(c),d=0,i=l=a=c=void 0},j.flush=function(){return void 0===c?s:k(v())},j}(e,n,{leading:i,maxWait:n,trailing:a})},y=NaN,w=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,j=/^0o[0-7]+$/i,N=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,_=O||E||Function("return this")(),C=Object.prototype.toString,z=Math.max,T=Math.min,S=function(){return _.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==C.call(t))return y;if(A(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=A(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var o=k.test(e);return o||j.test(e)?N(e.slice(2),o?2:8):x.test(e)?y:+e}var q=function(e,t,n){var o,i,a,r,s,c,l=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=o,a=i;return o=i=void 0,l=t,r=e.apply(a,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-l>=a}function v(){var e,n=S();if(p(n))return b(n);s=setTimeout(v,(e=t-(n-c),u?T(e,a-(n-l)):e))}function b(e){return s=void 0,m&&o?f(e):(o=i=void 0,r)}function h(){var e,n=S(),a=p(n);if(o=arguments,i=this,c=n,a){if(void 0===s)return l=e=c,s=setTimeout(v,t),d?f(e):r;if(u)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),r}return t=L(t)||0,A(n)&&(d=!!n.leading,a=(u="maxWait"in n)?z(L(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=i=s=void 0},h.flush=function(){return void 0===s?r:b(S())},h},M=function(){};function D(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1)if((o=t[n]).dataset&&o.dataset.aos||o.children&&e(o.children))return!0;return!1}(t.concat(n)))return M()})}function H(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var P={isSupported:function(){return!!H()},ready:function(e,t){var n=window.document,o=new(H())(D);M=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},$=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,R=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Y=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,B=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function U(){return navigator.userAgent||navigator.vendor||window.opera||""}var Z=new(function(){function e(){$(this,e)}return W(e,[{key:"phone",value:function(){var e=U();return!(!I.test(e)&&!R.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=U();return!(!Y.test(e)&&!B.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),K=function(e,t){var n=void 0;return Z.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},G=function(e){return e.forEach(function(e,t){var n,o,i,a,r,s;return n=window.pageYOffset,o=e.options,i=e.position,a=e.node,e.data,r=function(){var t;e.animated&&((t=o.animatedClassNames)&&t.forEach(function(e){return a.classList.remove(e)}),K("aos:out",a),e.options.id&&K("aos:in:"+e.options.id,a),e.animated=!1)},void(o.mirror&&n>=i.out&&!o.once?r():n>=i.in?e.animated||((s=o.animatedClassNames)&&s.forEach(function(e){return a.classList.add(e)}),K("aos:in",a),e.options.id&&K("aos:in:"+e.options.id,a),e.animated=!0):e.animated&&!o.once&&r())})},J=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Q=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},V=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},X=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},en=function(){return document.all&&!window.atob},eo=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=X,t=et,e.forEach(function(e,n){var o,i,a,r,s,c=Q(e.node,"mirror",t.mirror),l=Q(e.node,"once",t.once),d=Q(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=Q(e,"anchor"),a=Q(e,"anchor-placement"),r=Number(Q(e,"offset",a?0:t)),s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var c=J(s).top-o;switch(a||n){case"top-bottom":break;case"center-bottom":c+=s.offsetHeight/2;break;case"bottom-bottom":c+=s.offsetHeight;break;case"top-center":c+=o/2;break;case"center-center":c+=o/2+s.offsetHeight/2;break;case"bottom-center":c+=o/2+s.offsetHeight;break;case"top-top":c+=o;break;case"bottom-top":c+=o+s.offsetHeight;break;case"center-top":c+=o+s.offsetHeight/2}return c+r}(e.node,t.offset,t.anchorPlacement),out:c&&(o=e.node,i=t.offset,window.innerHeight,a=Q(o,"anchor"),r=Q(o,"offset",i),s=o,a&&document.querySelectorAll(a)&&(s=document.querySelectorAll(a)[0]),J(s).top+s.offsetHeight-r)},e.options={once:l,mirror:c,animatedClassNames:m,id:d}}),G(X=e),window.addEventListener("scroll",g(function(){G(X,et.once)},et.throttleDelay)))},ei=function(){if(X=V(),er(et.disable)||en())return ea();eo()},ea=function(){X.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},er=function(e){return!0===e||"mobile"===e&&Z.mobile()||"phone"===e&&Z.phone()||"tablet"===e&&Z.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=F(et,e),X=V(),et.disableMutationObserver||P.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||P.ready("[data-aos]",ei),er(et.disable)||en()?ea():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){eo(!0)}):window.addEventListener("load",function(){eo(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&eo(!0),window.addEventListener("resize",q(eo,et.debounceDelay,!0)),window.addEventListener("orientationchange",q(eo,et.debounceDelay,!0)),X)},refresh:eo,refreshHard:ei}}()},550:function(e,t,n){Promise.resolve().then(n.bind(n,3403))},3403:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(7437),i=n(2265),a=n(6365),r=n.n(a);n(7002);var s=n(6726);function c(){return(0,o.jsx)("footer",{children:(0,o.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[(0,o.jsxs)("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[(0,o.jsxs)("div",{className:"sm:col-span-12 lg:col-span-3",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)(s.Z,{})}),(0,o.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,o.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Terms"})," \xb7 ",(0,o.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Privacy Policy"})]})]}),(0,o.jsx)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2"}),(0,o.jsx)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2"}),(0,o.jsx)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3"}),(0,o.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,o.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Hizmetlerimiz"}),(0,o.jsxs)("ul",{className:"text-sm",children:[(0,o.jsx)("li",{className:"mb-2",children:(0,o.jsx)("a",{href:"#services",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Spotify"})}),(0,o.jsx)("li",{className:"mb-2",children:(0,o.jsx)("a",{href:"#services",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Apple Music"})})]})]})]}),(0,o.jsx)("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:(0,o.jsx)("div",{className:"text-sm text-gray-600 mr-4",children:"\xa9 137records.com. T\xfcm hakları."})})]})})}function l(e){let{children:t}=e;return(0,i.useEffect)(()=>{r().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("main",{className:"grow",children:t}),(0,o.jsx)(c,{})]})}},6726:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(7437),i=n(1396),a=n.n(i);function r(){return(0,o.jsx)(a(),{href:"/",className:"block font-bold text-lg","aria-label":"137records",children:"137records"})}},7002:function(){},622:function(e,t,n){"use strict";var o=n(2265),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)}},function(e){e.O(0,[250,464,971,938,744],function(){return e(e.s=550)}),_N_E=e.O()}]);