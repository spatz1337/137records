window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme28"]=window.wsb["Theme28"]||window.radpack("@widget/LAYOUT/bs-layout28-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-264535\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-264537\",\"targetId\":\"logo-text-264538\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-264546\",\"targetId\":\"logo-text-264547\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":2,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"montserrat\",\"roboto\",\"\"],\"colors\":[\"#000000\"],\"locale\":\"tr-TR\",\"language\":\"tr\",\"resellerId\":1,\"internalLinks\":{\"1eca0214-dc73-40fb-8e80-11456a67cd9d\":{\"pageId\":\"872892f5-52b5-4635-9420-f40e48b6c992\",\"widgetId\":\"7866355f-10e4-421e-a361-e15453e7069d\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"17f01c6b-f479-4e48-89c8-1475c607a2f1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"17f01c6b-f479-4e48-89c8-1475c607a2f1\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"872892f5-52b5-4635-9420-f40e48b6c992\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"872892f5-52b5-4635-9420-f40e48b6c992\",\"name\":\"Ana Sayfa\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#000000\",\"meta\":{\"primary\":\"rgb(0, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"primary\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":600,\"weights\":[600,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme28\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-264548\",\"label\":\"Daha fazlas\u0131\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-264543\",\"widgetId\":\"e026d952-76a2-4eda-a6c6-2fff0a9a6a3e\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"tr-TR\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"e026d952-76a2-4eda-a6c6-2fff0a9a6a3e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{\"HeadingAlpha\":{\"byType\":{\"HeroTagline\":{\"value\":{\"typography\":\"HeadingEpsilon\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"},\"fullWidth\":false}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:l,logoImageId:i,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(l);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(f)}function f(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let l=0,i=a.concat(n).findIndex((e=>{if(l+e>m)return e;l+=e}));i<0&&(i=a.length);const o=a.slice(0,i);let r,c,s=a.slice(i);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(I(b,0,o.length,M),I(t,0,o.length,R),I(y,0,o.length,R),I(b,o.length,o.length+s.length,R),I(t,o.length,o.length+s.length,M),I(y,o.length,o.length+s.length,R),I(b,o.length+s.length,t.length,R),I(t,o.length+s.length,t.length,R),I(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function w(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function I(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),l=k(t);return Math.abs(n-l)>Math.abs(n-a-(l+a))}if(w(),window.ResizeObserver){const e=new window.ResizeObserver(w);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",w,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",w,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-264533264542-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-264543\",\"splitNavId\":\"n-264533264541-navId-1\"}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-264551\",\"targetId\":\"dynamic-tagline-264552\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":4}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-264553\",\"targetId\":\"dynamic-tagline-264554\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":4}"));
window.wsb['context-bs-2']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"montserrat\",\"roboto\",\"\"],\"colors\":[\"#000000\"],\"fontScale\":\"medium\",\"locale\":\"tr-TR\",\"language\":\"tr\",\"resellerId\":1,\"internalLinks\":{\"1eca0214-dc73-40fb-8e80-11456a67cd9d\":{\"pageId\":\"872892f5-52b5-4635-9420-f40e48b6c992\",\"widgetId\":\"7866355f-10e4-421e-a361-e15453e7069d\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"17f01c6b-f479-4e48-89c8-1475c607a2f1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"17f01c6b-f479-4e48-89c8-1475c607a2f1\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"872892f5-52b5-4635-9420-f40e48b6c992\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"872892f5-52b5-4635-9420-f40e48b6c992\",\"name\":\"Ana Sayfa\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#000000\",\"meta\":{\"primary\":\"rgb(0, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"primary\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":600,\"weights\":[600,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme28\"}");
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/CONTACT/bs-contact5-contact-form',props:JSON.parse("{\"formTitle\":\"Bize ula\u015F\u0131n!\",\"formFields\":[{\"type\":\"SINGLE_LINE\",\"label\":\"Ad\",\"required\":false,\"keyName\":\"name\"},{\"type\":\"EMAIL\",\"label\":\"E-posta\",\"validation\":\"email\",\"required\":true,\"replyTo\":true,\"keyName\":\"email\"},{\"type\":\"MULTI_LINE\",\"label\":\"Mesaj\",\"required\":false,\"keyName\":\"message\"},{\"type\":\"ATTACHMENT\",\"label\":\"Ekler\",\"required\":false,\"attachmentsEnabled\":true},{\"type\":\"SUBMIT\",\"label\":\"G\u00F6nder\",\"required\":false}],\"blankInfo\":false,\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"showMap\":false,\"recaptchaEnabled\":true,\"recaptchaType\":\"V3\",\"domainName\":\"137records.com\",\"formSuccessMessage\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"9lf6l\\\",\\\"text\\\":\\\"Sorunuz i\u00E7in te\u015Fekk\u00FCr ederiz! Size 48 saat i\u00E7inde d\u00F6n\u00FC\u015F yapaca\u011F\u0131z.\\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"formEnabled\":true,\"websiteId\":\"f34e05b5-b398-45c1-a442-d7610285e380\",\"pageId\":\"872892f5-52b5-4635-9420-f40e48b6c992\",\"accountId\":\"3fb47887-03e8-11ef-8327-008cfaff3e86\",\"staticContent\":{\"today\":\"Bug\u00FCn\",\"submitButtonLoadingLabel\":\"adl\u0131 e-posta g\u00F6nderiliyor\",\"contactFormResponseErrorMessage\":\"Mesaj\u0131n\u0131z g\u00F6nderilirken bir hata olu\u015Ftu; l\u00FCtfen daha sonra tekrar deneyin\",\"phoneValidationErrorMessage\":\"L\u00FCtfen ge\u00E7erli bir telefon numaras\u0131 girin.\",\"defaultCancelButtonLabel\":\"\u0130ptal\",\"byAppointment\":\"Randevu ile\",\"defaultSubmitButtonLabel\":\"G\u00F6nder\",\"unsupportedFileType\":\"Desteklenmeyen dosya t\u00FCr\u00FC\",\"maxFileCountLimit\":\"Yaln\u0131zca {0} dosyaya izin verilir\",\"closed\":\"Kapal\u0131\",\"attachments\":\"Ekler\",\"termsOfSerivce\":\"Hizmet Ko\u015Fullar\u0131\",\"attachFiles\":\"Dosya Ekle\",\"recaptchaDisclosure\":\"Bu site, reCAPTCHA ile korunur; Google {privacyPolicy} ve {termsOfSerivce} ge\u00E7erlidir.\",\"emailValidationErrorMessage\":\"L\u00FCtfen ge\u00E7erli bir e-posta adresi girin.\",\"mapCTA\":\"Bilgi edinin\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"L\u00FCtfen bu zorunlu alan\u0131 doldurun\",\"openToday\":\"Bug\u00FCn a\u00E7\u0131k\",\"couldNotAttach\":\"A\u015Fa\u011F\u0131daki dosyalar eklenemedi\",\"totalFileSizeLimit\":\"Toplam dosya boyutu {0} s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor\",\"privacyPolicy\":\"Gizlilik Politikas\u0131\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"Dosya {0} s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor\",\"emailMaxCountValidationErrorMessage\":\"E-posta adresiniz \u00E7ok uzun\"},\"emailOptInEnabled\":false,\"emailOptInMessage\":\"G\u00FCncellemeler, promosyonlar ve daha fazlas\u0131 i\u00E7in e-posta listemize kay\u0131t olun.\",\"emailConfirmationMessage\":\"Size bir do\u011Frulama e-postas\u0131 g\u00F6nderdik, adresinizi do\u011Frulamak i\u00E7in l\u00FCtfen ba\u011Flant\u0131y\u0131 t\u0131klay\u0131n.\",\"widgetId\":\"7866355f-10e4-421e-a361-e15453e7069d\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"tr-TR\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"7866355f-10e4-421e-a361-e15453e7069d\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact5\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/CONTACT/bs-contact5-contact-form"},false);
Core.utils.renderBootstrap({elId:'bs-3',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"137 Records\",\"reamazeBrandId\":\"f34e05b5-b398-45c1-a442-d7610285e380\",\"welcomeMessage\":\"Merhaba! Size nas\u0131l yard\u0131mc\u0131 olabilece\u011Fimizi belirtirseniz, size k\u0131sa s\u00FCrede d\u00F6n\u00FC\u015F yapabiliriz.\",\"formSuccessMessage\":\"Mesaj\u0131n\u0131z i\u00E7in te\u015Fekk\u00FCrler. Size en k\u0131sa s\u00FCrede geri d\u00F6n\u00FC\u015F yapaca\u011F\u0131z.\",\"emailOptInMessage\":\"E-posta g\u00FCncellemeleri, duyurular ve daha fazlas\u0131 i\u00E7in kaydolun.\",\"emailOptInEnabled\":false,\"domainName\":\"137records.com\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"\u0130sim\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobil\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"E-posta\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"Size nas\u0131l yard\u0131mc\u0131 olabiliriz?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"G\u00F6nder\"}],\"accountId\":\"3fb47887-03e8-11ef-8327-008cfaff3e86\",\"websiteId\":\"f34e05b5-b398-45c1-a442-d7610285e380\",\"id\":\"1f550096-8794-4ead-86db-32a098b7b8cb\",\"staticContent\":{\"submitButtonLoadingLabel\":\"adl\u0131 e-posta g\u00F6nderiliyor\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Mesaj\u0131n\u0131z g\u00F6nderilirken bir hata olu\u015Ftu; l\u00FCtfen daha sonra tekrar deneyin\",\"infoStartDesc\":\"Web sitenizdeki mesajlara, k\u0131sa mesajlara ve Facebook Messenger mesajlar\u0131na daha ak\u0131ll\u0131 ve h\u0131zl\u0131ca yan\u0131t verin. Anl\u0131k bildirimler al\u0131n, her yerden mesaj yan\u0131tlay\u0131n. \u00DCstelik t\u00FCm\u00FCn\u00FC telefonunuzla ger\u00E7ekle\u015Ftirebilirsiniz.\",\"infoStartTag\":\"Yeni\",\"phoneValidationErrorMessage\":\"L\u00FCtfen ge\u00E7erli bir telefon numaras\u0131 girin.\",\"defaultCancelButtonLabel\":\"\u0130ptal\",\"contactsLinkInfoMessaging\":\"Web sitesi mesajlar\u0131ndan bilgilerine ula\u015Ft\u0131\u011F\u0131n\u0131z ki\u015Filer, Ba\u011Flant\u0131larda yer al\u0131r.\",\"defaultSubmitButtonLabel\":\"G\u00F6nder\",\"endOfChat\":\"sohbet sonu\",\"infoConnectedDesc\":\"Conversations mobil uygulamas\u0131na ba\u011Fland\u0131n\u0131z ve \u015Fu anda t\u00FCm web sitesi mesajlar\u0131n\u0131 bu uygulamadan al\u0131yorsunuz.\",\"infoRecommendedTag\":\"\u00D6nerilenler\",\"infoStartLink\":\"Ba\u015Flay\u0131n\",\"phoneUsOnlyValidationErrorMessage\":\"L\u00FCtfen ge\u00E7erli bir ABD cep telefonu numaras\u0131 girin\",\"infoIncludedTag\":\"Dahil\",\"infoPublishRequiredDesc\":\"Bu \u00F6zelli\u011Fin etkinle\u015Ftirildi\u011Fi ilk a\u015Famay\u0131 tamamlamak i\u00E7in yay\u0131nlama i\u015Flemi gerekiyor.\",\"infoPendingLoginDesc\":\"Conversations uygulamas\u0131n\u0131 indirmeniz i\u00E7in size bir k\u0131sa mesaj g\u00F6nderildi. Kurulumu tamamlamak i\u00E7in l\u00FCtfen uygulamay\u0131 indirin ve kurun.\",\"termsOfSerivce\":\"Hizmet Ko\u015Fullar\u0131\",\"infoUnavailableDesc\":\"\u015Eu anda bu \u00F6zelli\u011Fin yaln\u0131zca bir web sitesinde \u00E7al\u0131\u015Fmas\u0131na izin veriyoruz. Bu \u00F6zelli\u011Fi bu web sitesinde kullanabilmek i\u00E7in l\u00FCtfen \u00F6zelli\u011Fin \u015Fu anda etkin oldu\u011Fu siteyle ba\u011Flant\u0131s\u0131n\u0131 kesin.\",\"recaptchaDisclosure\":\"Bu site, reCAPTCHA ile korunur; Google {privacyPolicy} ve {termsOfSerivce} ge\u00E7erlidir.\",\"emailValidationErrorMessage\":\"L\u00FCtfen ge\u00E7erli bir e-posta adresi girin.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Konu\u015Fmalar\",\"requiredValidationErrorMessage\":\"L\u00FCtfen bu zorunlu alan\u0131 doldurun\",\"infoUnavailableTag\":\"Kullan\u0131lam\u0131yor\",\"contactsLinkText\":\"Ki\u015Filerimi y\u00F6net\",\"privacyPolicy\":\"Gizlilik Politikas\u0131\",\"infoPublishRequiredLink\":\"\u015Eimdi Yay\u0131nla\",\"infoPendingLoginLink\":\"Ba\u011Flant\u0131y\u0131 Yeniden G\u00F6nder\",\"infoConnectedTitle\":\"Conversations Mobil Uygulamas\u0131\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"Telefon numaran\u0131z\u0131 g\u00F6ndererek, bizden k\u0131sa mesaj almay\u0131 kabul etmi\u015F olursunuz. Mesaj/veri \u00FCcretleri uygulanabilir.\",\"emailMaxCountValidationErrorMessage\":\"E-posta adresiniz \u00E7ok uzun\",\"infoConnectedTag\":\"Ba\u011Fland\u0131\"},\"emailConfirmationMessage\":\"Size bir do\u011Frulama e-postas\u0131 g\u00F6nderdik, adresinizi do\u011Frulamak i\u00E7in l\u00FCtfen ba\u011Flant\u0131y\u0131 t\u0131klay\u0131n.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#000000\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"1f550096-8794-4ead-86db-32a098b7b8cb\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"tr-TR\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1f550096-8794-4ead-86db-32a098b7b8cb\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"25cd3fff-68a7-404f-9217-b4735e0e13af\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-264532').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about7","wam_site_businessCategory":"distributionservices","wam_site_theme":"layout28","wam_site_locale":"tr-TR","wam_site_fontPack":"montserrat","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"businessPlus","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);