(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{21:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading-screen",class:{hide:e.allDone&&!e.preventReload}},[r("div",{staticClass:"factor-logo-area"},[r("transition",{attrs:{appear:""}},["production"==e.nodeEnv?r("factor-spinner",{attrs:{show:!0}}):r("factor-logo")],1)],1),e._v(" "),"production"==e.nodeEnv?r("div",{},[e._m(0)]):r("div",{staticClass:"loading-area"},[e.hasErrors&&!e.errorDescription?r("div",{staticClass:"error-item"},[r("h3",{staticClass:"hasErrors"},[e._v("An error occured, please look at Factor terminal.")])]):e.hasErrors&&e.errorDescription?r("div",{staticClass:"error-item"},[r("h3",{staticClass:"hasErrors"},[e._v("An error occured, see output below or in your terminal.")]),e._v(" "),r("div",{staticClass:"errorStack"},[r("p",{staticClass:"hasErrors"},[e._v(e._s(e.errorDescription))]),e._v(" "),e.errorStack?r("p",{staticClass:"pre"},[e._v(e._s(e.errorStack))]):e._e()]),e._v(" "),e._m(1)]):e.preventReload?r("div",{staticClass:"reload-prevented error-item"},[r("h3",{staticClass:"hasErrors"},[e._v("Failed to show Factor app after "+e._s(e.maxReloadCount)+" reloads")]),e._v(" "),r("p",[e._v("\n        Your Factor app could not be shown even though the webpack build appears to have\n        finished.\n      ")]),e._v(" "),r("p",[e._v("\n        Try to reload the page manually, if this problem persists try to restart your\n        Factor dev server.\n      ")])]):[r("transition",{attrs:{appear:""}},[r("div",{staticClass:"row progress-bar-wrap",class:e.build},[r("div",{staticClass:"progress-title"},[e._v(e._s(e.building))]),e._v(" "),r("div",{staticClass:"progress-bar-container"},[r("div",{staticClass:"progress-bar",style:{width:e.progress+"%"}},[r("div",{staticClass:"barber"})])]),e._v(" "),r("div",{staticClass:"progress-message"},[e._v(e._s(e.progressText))])])])]],2)])};n._withStripped=!0;var s=r(114),o=r.n(s),i=function(e,t){return t=t||{},new Promise((function(r,n){var s=new XMLHttpRequest,o=[],i=[],a={},u=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return i},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){o.push(t=t.toLowerCase()),i.push([t,r]),a[t]=a[t]?a[t]+","+r:r})),r(u())},s.onerror=n,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(c,t.headers[c]);s.send(t.body||null)}))},a=r(109),u=r(110),c=r(111),l=r(112),d=r(113);function h(e,t,r,n,s,o,i){try{var a=e[o](i),u=a.value}catch(c){return void r(c)}a.done?t(u):Promise.resolve(u).then(n,s)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function i(e){h(o,n,s,i,a,"next",e)}function a(e){h(o,n,s,i,a,"throw",e)}i(void 0)}))}}var v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f={components:{factorLogo:function(){return r.e(1).then(r.bind(null,256))},factorSpinner:function(){return r.e(7).then(r.bind(null,258))}},mixins:[a.a,u.a,c.a,l.a],data:function(){return{error:!1,stack:!1,allDone:!1,hasErrors:!1,isFinished:!1,maxReloadCount:5,preventReload:!1,manualReload:!1,baseURL:window.$BASE_URL,nodeEnv:window.$NODE_ENV,progress:0,message:"",build:""}},computed:{progressText:function(){var e=this.progress?"".concat(Math.round(this.progress),"%"):"";return"".concat(this.cap(this.message)," ").concat(e)},building:function(){return"bundle"==this.build?"Building Application":"Setting Up Environment"}},beforeMount:function(){this.canReload()||(this.preventReload=!0)},mounted:function(){!this.preventReload&&this.baseURL&&(document.title="development"==this.nodeEnv?"Building App":"Under Maintenance",this.onData(window.$STATE),this.sseConnect("".concat(this.baseURL,"_loading/sse")),this.setTimeout())},methods:{cap:function(e){return e?e.replace(/\b\w/g,(function(e){return e.toUpperCase()})):""},onSseData:function(e){this._reloading||(this.setTimeout(),this.onData(e))},fetchData:function(){var e=this;return p(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._reloading){t.next=2;break}return t.abrupt("return");case 2:return e.clearTimeout(),t.prev=3,t.next=6,i("".concat(e.baseURL,"_loading/json")).then((function(e){return e.json()}));case 6:r=t.sent,e.onData(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.logError(t.t0);case 13:e.setTimeout();case 14:case"end":return t.stop()}}),t,null,[[3,10]])})))()},clearTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this._fetchTimeout&&clearTimeout(this._fetchTimeout)})),setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this._reloading||(this.clearTimeout(),this._fetchTimeout=setTimeout((function(){return e.fetchData()}),1e3))})),onData:function(e){if(e&&!this._reloading){if(e.settings&&(window.$STATE.settings=e.settings),e.redirect&&!this.$route.path.includes(e.redirect))return this.$router.replace({path:e.redirect}),delete window.$STATE.redirect,void Object(d.a)({redirected:!0});var t=e.error,r=e.progress,n=e.message,s=e.hasErrors,o=e.allDone,i=e.build;if(t){var a=t.description,u=t.stack;return this.errorDescription=a,this.errorStack=u,void(this.hasErrors=!0)}s||!o||this.allDone||this.reload(),this.allDone=o,this.hasErrors=s,this.progress=r,this.message=n,this.build=i}},canReload:function(){this.reloadCount=Number.parseInt(this.retrieveItem("reloadCount"))||0;var e=Number.parseInt(this.retrieveItem("lastReloadTime"))||0;this.loadingTime=(new Date).getTime();var t=this.reloadCount<this.maxReloadCount,r=e&&this.loadingTime>1e3+e;return!(!t||r)||(this.removeItem("reloadCount"),this.removeItem("lastReloadTime"),this.reloadCount=0,t)},updateReloadItems:function(){this.storeItem("reloadCount",1+this.reloadCount),this.storeItem("lastReloadTime",this.loadingTime)},reload:function(){var e=this;return p(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._reloading){t.next=2;break}return t.abrupt("return");case 2:return e._reloading=!0,e.clearTimeout(),e.sseClose(),e.clearConsole(),t.next=8,v(500);case 8:e.updateReloadItems(),window.location.reload(!0);case 10:case"end":return t.stop()}}),t)})))()}}},m=(r(241),r(10)),g=Object(m.a)(f,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"under-maintenance"},[t("h3",{staticClass:"title"},[this._v("Under Maintenance")]),this._v(" "),t("div",{staticClass:"sub-title"},[this._v("We'll be right back.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("span",{staticClass:"hasErrors"},[this._v("Note:")]),this._v(" A manual restart of the Factor dev server\n        may be required\n      ")])}],!1,null,null,null);g.options.__file="app/loading.vue";t.default=g.exports},241:function(e,t,r){"use strict";var n=r(64);r.n(n).a},64:function(e,t,r){}}]);