var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function u(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f;function d(t){f=t}function p(t){(function(){if(!f)throw new Error("Function called outside component initialization");return f})().$$.on_mount.push(t)}const h=[],g=[],m=[],$=[],v=Promise.resolve();let b=!1;function y(t){m.push(t)}const w=new Set;let _=0;function k(){const t=f;do{for(;_<h.length;){const t=h[_];_++,d(t),x(t.$$)}for(d(null),h.length=0,_=0;g.length;)g.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;$.length;)$.pop()();b=!1,w.clear(),d(t)}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const N=new Set;function E(t,n){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(r,c,a,l,u,p,h,g=[-1]){const m=f;d(r);const $=r.$$={fragment:null,ctx:null,props:p,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:c.target||m.$$.root};h&&h($.root);let v=!1;if($.ctx=a?a(r,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),v&&E(r,t)),n})):[],$.update(),v=!0,o($.before_update),$.fragment=!!l&&l($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();c.intro&&((b=r.$$.fragment)&&b.i&&(N.delete(b),b.i(w))),function(t,e,r,c){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(e,r),c||y((()=>{const e=a.map(n).filter(i);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(y)}(r,c.target,c.anchor,c.customElement),k()}var b,w;d(m)}function z(n){let e,o,i,r,f,d,p,h=n[0]?"Notifiche abilitate!":"Notifiche disabilitate!";return{c(){e=a("main"),o=a("div"),o.innerHTML="<span>Richiedi notifiche</span>",i=l(" "),r=a("div"),f=l(h),u(o,"class","btn-notification svelte-1tzqt9c"),u(r,"class","status-permission svelte-1tzqt9c"),u(r,"permission",n[0]),u(e,"class","svelte-1tzqt9c")},m(t,s){var a,l,u,h;!function(t,n,e){t.insertBefore(n,e||null)}(t,e,s),c(e,o),c(e,i),c(e,r),c(r,f),d||(a=o,l="click",u=n[1],a.addEventListener(l,u,h),p=()=>a.removeEventListener(l,u,h),d=!0)},p(t,[n]){1&n&&h!==(h=t[0]?"Notifiche abilitate!":"Notifiche disabilitate!")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(f,h),1&n&&u(r,"permission",t[0])},i:t,o:t,d(t){t&&s(e),d=!1,p()}}}function A(t){for(var n=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(n),o=new Uint8Array(e.length),i=0;i<e.length;++i)o[i]=e.charCodeAt(i);return o}function q(t,n,e){let o=null,i=!1;return p((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then((function(t){t.installing?console.log("Service worker installing"):t.waiting?console.log("Service worker installed"):t.active&&console.log("Service worker active")})).catch((function(t){console.log("Registration failed with "+t)})),navigator.serviceWorker.ready.then((t=>{o=t,console.log(o)}))})),[i,function(){"Notification"in window||alert("This browser does not support desktop notification"),Notification.requestPermission().then((function(t){if(e(0,i="granted"===t),i){var n={userVisibleOnly:!0,applicationServerKey:A("BFaNs8n5JYn2ozrR2z1-FfuNXSvCBQxyUPvR1Z1uNQS0c8ZLS2qJhDAH_U9IiFkECR5WOGBP4aw9scgHZazDvNg")};o.pushManager.subscribe(n).then((function(t){console.log(t)}),(function(t){console.log(t)}))}}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,q,z,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map