(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UFnY:function(t,e,o){"use strict";o.r(e),o.d(e,"PublicModule",(function(){return E}));var s=o("fXoL"),n=o("ofXK");let r;o("XNiG"),o("quSY"),o("LRne"),o("vkgz"),o("7o/Q"),o("pLZG"),o("lJxs"),o("IzEk");try{r="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(x){r=!1}let i=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(n.l)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!r)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(s.B,8))},t.\u0275prov=Object(s.Gb)({factory:function(){return new t(Object(s.Qb)(s.B,8))},token:t,providedIn:"root"}),t})();o("HDdC"),"undefined"!=typeof Element&&Element;let a=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,s=(o&&o.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),s){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");const e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(i),s.Qb(n.c))},t.\u0275prov=Object(s.Gb)({factory:function(){return new t(Object(s.Qb)(i),Object(s.Qb)(n.c))},token:t,providedIn:"root"}),t})(),c=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)}}),t})();const l=new s.N("9.2.4");o("jhN1"),o("JX91"),o("R1ws");const h=new s.N("9.2.4"),d=new s.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let u,m=(()=>{class t{constructor(t,e,o){this._hasDoneGlobalChecks=!1,this._document=o,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=e,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_getDocument(){const t=this._document||document;return"object"==typeof t&&t?t:null}_getWindow(){const t=this._getDocument(),e=(null==t?void 0:t.defaultView)||window;return"object"==typeof e&&e?e:null}_checksAreEnabled(){return Object(s.U)()&&!this._isTestEnv()}_isTestEnv(){const t=this._getWindow();return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){const t=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),e=this._getDocument();t&&e&&!e.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){const t=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,e=this._getDocument();if(t||!e||!e.body||"function"!=typeof getComputedStyle)return;const o=e.createElement("div");o.classList.add("mat-theme-loaded-marker"),e.body.appendChild(o);const s=getComputedStyle(o);s&&"none"!==s.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),e.body.removeChild(o)}_checkCdkVersionMatch(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&h.full!==l.full&&console.warn("The Angular Material version ("+h.full+") does not match the Angular CDK version ("+l.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)(s.Qb(a),s.Qb(d,8),s.Qb(n.c,8))},imports:[[c],c]}),t})();function b(t,e){return class extends t{constructor(...t){super(...t),this.color=e}get color(){return this._color}set color(t){const o=t||e;o!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove("mat-"+this._color),o&&this._elementRef.nativeElement.classList.add("mat-"+o),this._color=o)}}}try{u="undefined"!=typeof Intl}catch(x){u=!1}const p=["*",[["mat-toolbar-row"]]],f=["*","mat-toolbar-row"];class w{constructor(t){this._elementRef=t}}const g=b(w);let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Fb({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),t})(),y=(()=>{class t extends g{constructor(t,e,o){super(t),this._platform=e,this._document=o}ngAfterViewInit(){Object(s.U)()&&this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length&&Array.from(this._elementRef.nativeElement.childNodes).filter(t=>!(t.classList&&t.classList.contains("mat-toolbar-row"))).filter(t=>t.nodeType!==(this._document?this._document.COMMENT_NODE:8)).some(t=>!(!t.textContent||!t.textContent.trim()))&&function(){throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.")}()}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(s.l),s.Kb(i),s.Kb(n.c))},t.\u0275cmp=s.Eb({type:t,selectors:[["mat-toolbar"]],contentQueries:function(t,e,o){var n;1&t&&s.Db(o,_,!0),2&t&&s.ac(n=s.Vb())&&(e._toolbarRows=n)},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,e){2&t&&s.Cb("mat-toolbar-multiple-rows",e._toolbarRows.length>0)("mat-toolbar-single-row",0===e._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[s.xb],ngContentSelectors:f,decls:2,vars:0,template:function(t,e){1&t&&(s.Yb(p),s.Xb(0),s.Xb(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[m],m]}),t})();var v=o("tyNb");let C=(()=>{class t{constructor(){this.getTimer=()=>"Alfred Nico"}ngOnInit(){console.log("value : ",this.getTimer())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-layout"]],decls:5,vars:0,template:function(t,e){1&t&&(s.Nb(0,"main"),s.Nb(1,"mat-toolbar"),s.Nb(2,"span"),s.ec(3,"Application bancaire"),s.Mb(),s.Mb(),s.Lb(4,"router-outlet"),s.Mb())},directives:[y,v.b],styles:["mat-toolbar[_ngcontent-%COMP%] {\n      background: white;\n    }"]}),t})(),I=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[n.b,k]}),t})(),E=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[v.a.forChild([{path:"",component:C}]),I]]}),t})()}}]);