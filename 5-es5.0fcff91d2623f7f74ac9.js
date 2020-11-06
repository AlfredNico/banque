function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var o,n=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UFnY:function(t,e,o){"use strict";o.r(e),o.d(e,"PublicModule",(function(){return M}));var n,r=o("fXoL"),i=o("ofXK");o("XNiG"),o("quSY"),o("LRne"),o("vkgz"),o("7o/Q"),o("pLZG"),o("lJxs"),o("IzEk");try{n="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(P){n=!1}var s,a=((s=function t(e){_classCallCheck(this,t),this._platformId=e,this.isBrowser=this._platformId?Object(i.l)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!n)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}).\u0275fac=function(t){return new(t||s)(r.Qb(r.B,8))},s.\u0275prov=Object(r.Gb)({factory:function(){return new s(Object(r.Qb)(r.B,8))},token:s,providedIn:"root"}),s);o("HDdC"),"undefined"!=typeof Element&&Element;var c,l,u=((l=function(){function t(e,o){_classCallCheck(this,t),this._platform=e,this._document=o}return _createClass(t,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);var e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,n=(o&&o.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),n){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");var e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}]),t}()).\u0275fac=function(t){return new(t||l)(r.Qb(a),r.Qb(i.c))},l.\u0275prov=Object(r.Gb)({factory:function(){return new l(Object(r.Qb)(a),Object(r.Qb)(i.c))},token:l,providedIn:"root"}),l),h=((c=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:c}),c.\u0275inj=r.Hb({factory:function(t){return new(t||c)}}),c),f=new r.N("9.2.4");o("jhN1"),o("JX91"),o("R1ws");var d,p=new r.N("9.2.4"),b=new r.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),m=((d=function(){function t(e,o,n){_classCallCheck(this,t),this._hasDoneGlobalChecks=!1,this._document=n,e._applyBodyHighContrastModeCssClasses(),this._sanityChecks=o,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return _createClass(t,[{key:"_getDocument",value:function(){var t=this._document||document;return"object"==typeof t&&t?t:null}},{key:"_getWindow",value:function(){var t=this._getDocument(),e=(null==t?void 0:t.defaultView)||window;return"object"==typeof e&&e?e:null}},{key:"_checksAreEnabled",value:function(){return Object(r.U)()&&!this._isTestEnv()}},{key:"_isTestEnv",value:function(){var t=this._getWindow();return t&&(t.__karma__||t.jasmine)}},{key:"_checkDoctypeIsDefined",value:function(){var t=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),e=this._getDocument();t&&e&&!e.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}},{key:"_checkThemeIsPresent",value:function(){var t=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,e=this._getDocument();if(!t&&e&&e.body&&"function"==typeof getComputedStyle){var o=e.createElement("div");o.classList.add("mat-theme-loaded-marker"),e.body.appendChild(o);var n=getComputedStyle(o);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),e.body.removeChild(o)}}},{key:"_checkCdkVersionMatch",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&p.full!==f.full&&console.warn("The Angular Material version ("+p.full+") does not match the Angular CDK version ("+f.full+").\nPlease ensure the versions of these two packages exactly match.")}}]),t}()).\u0275mod=r.Ib({type:d}),d.\u0275inj=r.Hb({factory:function(t){return new(t||d)(r.Qb(u),r.Qb(b,8),r.Qb(i.c,8))},imports:[[h],h]}),d);try{"undefined"!=typeof Intl}catch(P){!1}var _,y,w,g,v,k,C,E=["*",[["mat-toolbar-row"]]],I=["*","mat-toolbar-row"],x=function(t){_inherits(o,t);var e=_createSuper(o);function o(){var t;_classCallCheck(this,o);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).color=_,t}return _createClass(o,[{key:"color",get:function(){return this._color},set:function(t){var e=t||_;e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove("mat-"+this._color),e&&this._elementRef.nativeElement.classList.add("mat-"+e),this._color=e)}}]),o}((function t(e){_classCallCheck(this,t),this._elementRef=e})),O=((v=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||v)},v.\u0275dir=r.Fb({type:v,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),v),R=((g=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,n,r){var i;return _classCallCheck(this,o),(i=e.call(this,t))._platform=n,i._document=r,i}return _createClass(o,[{key:"ngAfterViewInit",value:function(){var t=this;Object(r.U)()&&this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe((function(){return t._checkToolbarMixedModes()})))}},{key:"_checkToolbarMixedModes",value:function(){var t=this;this._toolbarRows.length&&Array.from(this._elementRef.nativeElement.childNodes).filter((function(t){return!(t.classList&&t.classList.contains("mat-toolbar-row"))})).filter((function(e){return e.nodeType!==(t._document?t._document.COMMENT_NODE:8)})).some((function(t){return!(!t.textContent||!t.textContent.trim())}))&&function(){throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.")}()}}]),o}(x)).\u0275fac=function(t){return new(t||g)(r.Kb(r.l),r.Kb(a),r.Kb(i.c))},g.\u0275cmp=r.Eb({type:g,selectors:[["mat-toolbar"]],contentQueries:function(t,e,o){var n;1&t&&r.Db(o,O,!0),2&t&&r.ac(n=r.Vb())&&(e._toolbarRows=n)},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,e){2&t&&r.Cb("mat-toolbar-multiple-rows",e._toolbarRows.length>0)("mat-toolbar-single-row",0===e._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[r.xb],ngContentSelectors:I,decls:2,vars:0,template:function(t,e){1&t&&(r.Yb(E),r.Xb(0),r.Xb(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],encapsulation:2,changeDetection:0}),g),A=((w=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:w}),w.\u0275inj=r.Hb({factory:function(t){return new(t||w)},imports:[[m],m]}),w),T=((y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=r.Eb({type:y,selectors:[["app-layout"]],decls:3,vars:0,template:function(t,e){1&t&&(r.Nb(0,"mat-toolbar"),r.Nb(1,"span"),r.ec(2,"Application bancaire"),r.Mb(),r.Mb())},directives:[R],encapsulation:2}),y),D=o("tyNb"),j=((C=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:C}),C.\u0275inj=r.Hb({factory:function(t){return new(t||C)},imports:[i.b,A]}),C),M=((k=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:k}),k.\u0275inj=r.Hb({factory:function(t){return new(t||k)},imports:[[D.a.forChild([{path:"",component:T}]),j]]}),k)}}]);