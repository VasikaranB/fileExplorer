(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}})();function R(){}function ve(t){return t()}function $e(){return Object.create(null)}function K(t){t.forEach(ve)}function ye(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ae;function we(t,e){return ae||(ae=document.createElement("a")),ae.href=e,t===ae.href}function Ye(t){return Object.keys(t).length===0}const Ze=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Ze;function h(t,e){t.appendChild(e)}function y(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function xe(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function _(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function S(){return H(" ")}function Ke(){return H("")}function D(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function d(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function de(t,e,r){e in t?t[e]=typeof t[e]=="boolean"&&r===""?!0:r:d(t,e,r)}function et(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function ue(t,e,r){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e){l.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function Le(t){const e=t.querySelector(":checked");return e&&e.__value}function tt(t,e,{bubbles:r=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,r,n,e),l}function Ue(t){const e={};for(const r of t)e[r.name]=r.value;return e}let te;function ee(t){te=t}function Ee(){if(!te)throw new Error("Function called outside component initialization");return te}function rt(t){Ee().$$.on_mount.push(t)}function nt(t){Ee().$$.on_destroy.push(t)}function lt(){const t=Ee();return(e,r,{cancelable:n=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=tt(e,r,{cancelable:n});return l.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const Q=[],ze=[];let X=[];const Me=[],ot=Promise.resolve();let ke=!1;function it(){ke||(ke=!0,ot.then(j))}function re(t){X.push(t)}const be=new Set;let J=0;function j(){if(J!==0)return;const t=te;do{try{for(;J<Q.length;){const e=Q[J];J++,ee(e),ft(e.$$)}}catch(e){throw Q.length=0,J=0,e}for(ee(null),Q.length=0,J=0;ze.length;)ze.pop()();for(let e=0;e<X.length;e+=1){const r=X[e];be.has(r)||(be.add(r),r())}X.length=0}while(Q.length);for(;Me.length;)Me.pop()();ke=!1,be.clear(),ee(t)}function ft(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}function st(t){const e=[],r=[];X.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),X=e}const pe=new Set;let V;function We(){V={r:0,c:[],p:V}}function Ve(){V.r||K(V.c),V=V.p}function B(t,e){t&&t.i&&(pe.delete(t),t.i(e))}function ne(t,e,r,n){if(t&&t.o){if(pe.has(t))return;pe.add(t),V.c.push(()=>{pe.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}const ct=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ct];function at(t){t&&t.c()}function Ge(t,e,r,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,r),n||re(()=>{const s=t.$$.on_mount.map(ve).filter(ye);t.$$.on_destroy?t.$$.on_destroy.push(...s):K(s),t.$$.on_mount=[]}),o.forEach(re)}function Je(t,e){const r=t.$$;r.fragment!==null&&(st(r.after_update),K(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(Q.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,r,n,l,o,s,u=[-1]){const i=te;ee(t);const f=t.$$={fragment:null,ctx:[],props:o,update:R,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:$e(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};s&&s(f.root);let c=!1;if(f.ctx=r?r(t,e.props||{},(a,g,...b)=>{const E=b.length?b[0]:g;return f.ctx&&l(f.ctx[a],f.ctx[a]=E)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](E),c&&dt(t,a)),g}):[],f.update(),c=!0,K(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const a=et(e.target);f.fragment&&f.fragment.l(a),a.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&B(t.$$.fragment),Ge(t,e.target,e.anchor,e.customElement),j()}ee(i)}let Ce;typeof HTMLElement=="function"&&(Ce=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(ve).filter(ye);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,r){this[t]=r}disconnectedCallback(){K(this.$$.on_disconnect)}$destroy(){Je(this,1),this.$destroy=R}$on(t,e){if(!ye(e))return R;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const n=r.indexOf(e);n!==-1&&r.splice(n,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function Te(t,e,r){const n=t.slice();return n[6]=e[r],n}function ut(t){let e,r,n,l;return{c(){e=_("span"),r=S(),n=_("img"),d(e,"class","file"),d(n,"class","fileimage"),d(n,"alt","img"),we(n.src,l="file.png")||d(n,"src",l)},m(o,s){y(o,e,s),y(o,r,s),y(o,n,s)},p:R,d(o){o&&k(e),o&&k(r),o&&k(n)}}}function pt(t){let e,r,n,l,o,s,u;function i(){return t[4](t[6])}function f(...c){return t[5](t[6],...c)}return{c(){var c;e=_("span"),n=S(),l=_("img"),d(e,"class",r=((c=t[6])==null?void 0:c.open)==!0?"folder-arrow-close":"folder-arrow-open"),d(l,"class","folderimage"),d(l,"alt","img"),we(l.src,o="folder.png")||d(l,"src",o)},m(c,a){y(c,e,a),y(c,n,a),y(c,l,a),s||(u=[D(e,"click",Ne(i)),D(e,"keydown",Ne(f))],s=!0)},p(c,a){var g;t=c,a&1&&r!==(r=((g=t[6])==null?void 0:g.open)==!0?"folder-arrow-close":"folder-arrow-open")&&d(e,"class",r)},d(c){c&&k(e),c&&k(n),c&&k(l),s=!1,K(u)}}}function qe(t){let e,r;return e=new Xe({props:{folder:t[6]}}),{c(){at(e.$$.fragment)},m(n,l){Ge(e,n,l),r=!0},p(n,l){const o={};l&1&&(o.folder=n[6]),e.$set(o)},i(n){r||(B(e.$$.fragment,n),r=!0)},o(n){ne(e.$$.fragment,n),r=!1},d(n){Je(e,n)}}}function Ie(t){var E,T,U;let e,r,n,l=t[6].name+"",o,s,u,i,f;function c(m,C){var A;return(A=m[6])!=null&&A.children?pt:ut}let a=c(t),g=a(t),b=((E=t[6])==null?void 0:E.open)&&((T=t[6])==null?void 0:T.children)&&((U=t[6])==null?void 0:U.children.length)>0&&qe(t);return{c(){e=_("div"),g.c(),r=S(),n=_("span"),o=H(l),s=S(),u=_("div"),b&&b.c(),i=S(),d(n,"class","folder-label"),d(e,"class","folder"),d(u,"class","child")},m(m,C){y(m,e,C),g.m(e,null),h(e,r),h(e,n),h(n,o),y(m,s,C),y(m,u,C),b&&b.m(u,null),h(u,i),f=!0},p(m,C){var A,W,L;a===(a=c(m))&&g?g.p(m,C):(g.d(1),g=a(m),g&&(g.c(),g.m(e,r))),(!f||C&1)&&l!==(l=m[6].name+"")&&me(o,l),(A=m[6])!=null&&A.open&&((W=m[6])!=null&&W.children)&&((L=m[6])==null?void 0:L.children.length)>0?b?(b.p(m,C),C&1&&B(b,1)):(b=qe(m),b.c(),B(b,1),b.m(u,i)):b&&(We(),ne(b,1,1,()=>{b=null}),Ve())},i(m){f||(B(b),f=!0)},o(m){ne(b),f=!1},d(m){m&&k(e),g.d(),m&&k(s),m&&k(u),b&&b.d()}}}function mt(t){var u;let e,r,n,l=(u=t[0])==null?void 0:u.children,o=[];for(let i=0;i<l.length;i+=1)o[i]=Ie(Te(t,l,i));const s=i=>ne(o[i],1,1,()=>{o[i]=null});return{c(){e=_("div");for(let i=0;i<o.length;i+=1)o[i].c();this.c=R,d(e,"class",r=t[1]?"dark":"")},m(i,f){y(i,e,f);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);n=!0},p(i,[f]){var c;if(f&13){l=(c=i[0])==null?void 0:c.children;let a;for(a=0;a<l.length;a+=1){const g=Te(i,l,a);o[a]?(o[a].p(g,f),B(o[a],1)):(o[a]=Ie(g),o[a].c(),B(o[a],1),o[a].m(e,null))}for(We(),a=l.length;a<o.length;a+=1)s(a);Ve()}(!n||f&2&&r!==(r=i[1]?"dark":""))&&d(e,"class",r)},i(i){if(!n){for(let f=0;f<l.length;f+=1)B(o[f]);n=!0}},o(i){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)ne(o[f]);n=!1},d(i){i&&k(e),xe(o,i)}}}function ht(t,e,r){let{folder:n={children:[]}}=e,{darkmode:l=!1}=e;function o(f){f.open=!f.open,r(0,n={...n})}function s(f,c){(f.key==="Enter"||f.key===" ")&&(o(c),f.preventDefault())}const u=f=>o(f),i=(f,c)=>s(c,f);return t.$$set=f=>{"folder"in f&&r(0,n=f.folder),"darkmode"in f&&r(1,l=f.darkmode)},[n,l,o,s,u,i]}class Xe extends Ce{constructor(e){super();const r=document.createElement("style");r.textContent=".fileimage{height:1.5rem;width:1.5rem}.folderimage{height:1rem;width:1rem}.folder{display:flex;align-items:center;margin-bottom:0.25rem}.folder-arrow-open{width:0.5rem;height:0.5rem;border-top:2px solid #000;border-right:2px solid #000;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-arrow-close{width:0.5rem;height:0.5rem;border-bottom:2px solid #0004ff;border-right:2px solid #0004ff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-label{margin-left:1rem;font-size:1rem}.file{margin-left:0.8rem}.child{margin-left:2rem}.dark .folder-label{color:#fff}.dark .file{color:#fff}.dark .child{color:#fff}.dark .folder-arrow-open{width:10px;height:10px;border-top:2px solid #fff;border-right:2px solid #fff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.dark .folder-arrow-close{width:10px;height:10px;border-bottom:2px solid #c8fc0f;border-right:2px solid #c8fc0f;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}",this.shadowRoot.appendChild(r),Qe(this,{target:this.shadowRoot,props:Ue(this.attributes),customElement:!0},ht,mt,He,{folder:0,darkmode:1},null),e&&(e.target&&y(e.target,this,e.anchor),e.props&&(this.$set(e.props),j()))}static get observedAttributes(){return["folder","darkmode"]}get folder(){return this.$$.ctx[0]}set folder(e){this.$$set({folder:e}),j()}get darkmode(){return this.$$.ctx[1]}set darkmode(e){this.$$set({darkmode:e}),j()}}customElements.define("file-list",Xe);function Pe(t,e,r){const n=t.slice();return n[20]=e[r],n}function Re(t,e,r){const n=t.slice();return n[0]=e[r],n}function De(t){var o;let e,r=((o=t[0])==null?void 0:o.name)+"",n,l;return{c(){var s;e=_("option"),n=H(r),e.__value=l=(s=t[0])==null?void 0:s.name,e.value=e.__value},m(s,u){y(s,e,u),h(e,n)},p(s,u){var i,f;u&512&&r!==(r=((i=s[0])==null?void 0:i.name)+"")&&me(n,r),u&512&&l!==(l=(f=s[0])==null?void 0:f.name)&&(e.__value=l,e.value=e.__value)},d(s){s&&k(e)}}}function je(t){let e,r=t[8],n=[];for(let l=0;l<r.length;l+=1)n[l]=Be(Pe(t,r,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ke()},m(l,o){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(l,o);y(l,e,o)},p(l,o){if(o&256){r=l[8];let s;for(s=0;s<r.length;s+=1){const u=Pe(l,r,s);n[s]?n[s].p(u,o):(n[s]=Be(u),n[s].c(),n[s].m(e.parentNode,e))}for(;s<n.length;s+=1)n[s].d(1);n.length=r.length}},d(l){xe(n,l),l&&k(e)}}}function Be(t){var o;let e,r=((o=t[20])==null?void 0:o.name)+"",n,l;return{c(){var s;e=_("option"),n=H(r),e.__value=l=(s=t[20])==null?void 0:s.name,e.value=e.__value},m(s,u){y(s,e,u),h(e,n)},p(s,u){var i,f;u&256&&r!==(r=((i=s[20])==null?void 0:i.name)+"")&&me(n,r),u&256&&l!==(l=(f=s[20])==null?void 0:f.name)&&(e.__value=l,e.value=e.__value)},d(s){s&&k(e)}}}function _t(t){let e,r,n,l;return{c(){e=_("img"),n=S(),l=_("div"),l.textContent="No folder/file to show",d(e,"class","fileimage"),d(e,"alt","img"),we(e.src,r="nofile.png")||d(e,"src",r),d(l,"class","folderstr")},m(o,s){y(o,e,s),y(o,n,s),y(o,l,s)},p:R,d(o){o&&k(e),o&&k(n),o&&k(l)}}}function gt(t){let e,r=t[7]?"Collapse All":"Expand All",n,l,o,s,u;return{c(){e=_("div"),n=H(r),l=S(),o=_("file-list"),d(e,"class","collapse"),de(o,"folder",t[0]),de(o,"darkmode",t[1])},m(i,f){y(i,e,f),h(e,n),y(i,l,f),y(i,o,f),s||(u=D(e,"click",t[10]),s=!0)},p(i,f){f&128&&r!==(r=i[7]?"Collapse All":"Expand All")&&me(n,r),f&1&&de(o,"folder",i[0]),f&2&&de(o,"darkmode",i[1])},d(i){i&&k(e),i&&k(l),i&&k(o),s=!1,u()}}}function bt(t){let e,r,n,l,o,s,u,i,f,c,a,g,b,E,T,U,m,C,A,W,L,q,v,w,I,$,z,Y,le,oe,he,ie,_e,P,fe,Fe,se,ge,Se,G=t[9],O=[];for(let p=0;p<G.length;p+=1)O[p]=De(Re(t,G,p));let N=t[3]=="file"&&je(t);function Oe(p,F){var x,Z;return(x=p[0])!=null&&x.children&&((Z=p[0])==null?void 0:Z.children.length)>0?gt:_t}let ce=Oe(t),M=ce(t);return{c(){e=_("div"),r=_("div"),n=_("label"),n.textContent="Folder/File Name:",l=S(),o=_("input"),s=S(),u=_("div"),i=_("label"),i.textContent="Type:",f=S(),c=_("select"),a=_("option"),a.textContent="Folder",g=_("option"),g.textContent="File",b=S(),E=_("div"),T=_("label"),T.textContent="Folder:",U=S(),m=_("select"),C=_("option"),C.textContent="Root level";for(let p=0;p<O.length;p+=1)O[p].c();A=Ke(),N&&N.c(),W=S(),L=_("div"),q=_("button"),v=H("Save"),w=S(),I=_("button"),I.textContent="Cancel",$=S(),z=_("div"),Y=H("Folder/File name aleady exists"),he=S(),ie=_("div"),_e=S(),P=_("div"),fe=_("h1"),fe.textContent="File Explorer",Fe=S(),M.c(),this.c=R,d(n,"for","name"),d(o,"type","text"),d(o,"id","name"),d(o,"name","name"),d(o,"placeholder","Enter name..."),d(r,"class","form-group"),d(i,"for","type"),a.__value="folder",a.value=a.__value,g.__value="file",g.value=g.__value,d(c,"id","type"),d(c,"name","type"),t[3]===void 0&&re(()=>t[15].call(c)),d(u,"class","form-group"),d(T,"for","folder"),C.__value="root",C.value=C.__value,d(m,"id","folder"),d(m,"name","folder"),t[4]===void 0&&re(()=>t[16].call(m)),d(E,"id","folder-select"),d(E,"class","form-group"),d(q,"class","btn btn-save"),q.disabled=t[6],d(I,"class","btn btn-cancel"),d(L,"class","btn-group"),d(z,"class",le=t[5]===!0?"error":"d-none"),d(e,"class",oe=t[1]===!0?"container dark":"container"),d(ie,"class","fs"),d(fe,"class","folderstr"),d(P,"class",se=t[1]===!0?"container dark":"container")},m(p,F){y(p,e,F),h(e,r),h(r,n),h(r,l),h(r,o),Ae(o,t[2]),h(e,s),h(e,u),h(u,i),h(u,f),h(u,c),h(c,a),h(c,g),ue(c,t[3],!0),h(e,b),h(e,E),h(E,T),h(E,U),h(E,m),h(m,C);for(let x=0;x<O.length;x+=1)O[x]&&O[x].m(m,null);h(m,A),N&&N.m(m,null),ue(m,t[4],!0),h(e,W),h(e,L),h(L,q),h(q,v),h(L,w),h(L,I),h(e,$),h(e,z),h(z,Y),y(p,he,F),y(p,ie,F),y(p,_e,F),y(p,P,F),h(P,fe),h(P,Fe),M.m(P,null),ge||(Se=[D(o,"input",t[14]),D(c,"change",t[15]),D(m,"change",t[16]),D(q,"click",t[11]),D(I,"click",t[12])],ge=!0)},p(p,[F]){if(F&4&&o.value!==p[2]&&Ae(o,p[2]),F&8&&ue(c,p[3]),F&512){G=p[9];let x;for(x=0;x<G.length;x+=1){const Z=Re(p,G,x);O[x]?O[x].p(Z,F):(O[x]=De(Z),O[x].c(),O[x].m(m,A))}for(;x<O.length;x+=1)O[x].d(1);O.length=G.length}p[3]=="file"?N?N.p(p,F):(N=je(p),N.c(),N.m(m,null)):N&&(N.d(1),N=null),F&784&&ue(m,p[4]),F&64&&(q.disabled=p[6]),F&32&&le!==(le=p[5]===!0?"error":"d-none")&&d(z,"class",le),F&2&&oe!==(oe=p[1]===!0?"container dark":"container")&&d(e,"class",oe),ce===(ce=Oe(p))&&M?M.p(p,F):(M.d(1),M=ce(p),M&&(M.c(),M.m(P,null))),F&2&&se!==(se=p[1]===!0?"container dark":"container")&&d(P,"class",se)},i:R,o:R,d(p){p&&k(e),xe(O,p),N&&N.d(),p&&k(he),p&&k(ie),p&&k(_e),p&&k(P),M.d(),ge=!1,K(Se)}}}function yt(t,e,r){let n,l,o;const s=lt();let{darkmode:u=!1}=e,{folder:i={name:"root",type:"folder",children:[{name:"Folder 1",type:"folder",open:!1,children:[{name:"Subfolder 1.1",type:"folder",open:!1,children:[{name:"File 1.1.1",type:"file"},{name:"File 1.1.2",type:"file"}]},{name:"Subfolder 1.2",type:"folder",open:!1,children:[{name:"File 1.2.1",type:"file"},{name:"File 1.2.2",type:"file"}]}]},{name:"Folder 2",type:"folder",open:!1,children:[{name:"File 2.1",type:"file"},{name:"File 2.2",type:"file"}]}]}}=e,f="",c="folder",a="root",g=!1,b=!0,E=!1;function T(){r(7,E=!E),i.children.forEach(v=>{v.type=="folder"&&(v.open=E),v.children.forEach(w=>{w.type=="folder"&&(w.open=E)})}),r(0,i={...i})}function U(v,w){const I=i.children.findIndex($=>$.name===v&&$.type==="folder");I!==-1?i.children[I].children.find($=>$.name===w.name&&$.type===w.type)?m():i.children[I].children.push(w):i==null||i.children.forEach($=>{$.type=="folder"&&$.children.forEach(z=>{z.type==="folder"&&z.name===v&&(z.children.find(Y=>Y.name===w.name&&Y.type===w.type)?m():z.children.push(w))})}),v=="root"&&(i.children.find($=>$.name===w.name&&$.type===w.type)?m():i.children.push(w)),r(0,i={...i})}function m(){r(5,g=!0),setTimeout(()=>{r(5,g=!1)},2e3)}function C(){if(f!=""&&c!=""&&a!=""){const v=a,w={name:f,type:c,open:!1};c=="folder"&&(w.children=[]),U(v,w),s("save",{name:f,type:c,parentFolder:a}),r(2,f=""),r(3,c="folder"),r(4,a="root")}}function A(){r(2,f=""),r(3,c="folder"),r(4,a="root"),s("cancel")}rt(()=>{}),nt(()=>{});function W(){f=this.value,r(2,f)}function L(){c=Le(this),r(3,c)}function q(){a=Le(this),r(4,a),r(8,o),r(13,l),r(0,i),r(9,n),r(0,i)}return t.$$set=v=>{"darkmode"in v&&r(1,u=v.darkmode),"folder"in v&&r(0,i=v.folder)},t.$$.update=()=>{t.$$.dirty&1&&r(9,n=i==null?void 0:i.children.filter(v=>v.type=="folder")),t.$$.dirty&1&&r(13,l=i==null?void 0:i.children.map(v=>{if(v.type=="folder")return v.children.filter(w=>w.type==="folder")})),t.$$.dirty&8192&&r(8,o=l.flat()),t.$$.dirty&28&&r(6,b=f==""||c==""||a=="")},[i,u,f,c,a,g,b,E,o,n,T,C,A,l,W,L,q]}class kt extends Ce{constructor(e){super();const r=document.createElement("style");r.textContent=`.collapse{display:flex;font-size:0.9rem;justify-content:flex-end;color:#0066cc;cursor:pointer}.fileimage{margin:auto;height:5rem;width:5rem}div{font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif}.d-none{display:none}.error{color:red}.fs{min-height:1rem}.folderstr{display:flex;justify-content:center}.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #ccc;border-radius:4px;background-color:#fff}.form-group{margin-bottom:20px;display:flex;flex-direction:column}.form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem}.form-group input,.form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem}.form-group input:focus,.form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.form-group select{cursor:pointer}.btn-group{display:flex;justify-content:flex-end}.btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.btn-save:disabled{border:1px solid #999999;background-color:#f2f2f2;color:#333;pointer-events:none}.btn-save{background-color:#0085ff;color:#fff}.btn-save:hover{background-color:#0066cc}.btn-cancel{background-color:#f2f2f2;color:#333}.btn-cancel:hover{background-color:#e6e6e6}.dark.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #333;border-radius:4px;background-color:#1e1e1e}.dark .folderstr{color:#fff;background-color:#1e1e1e}.dark .form-group{margin-bottom:20px;display:flex;flex-direction:column}.dark .form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem;color:#fff}.dark .form-group input,.dark .form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem;background-color:#333;color:#fff}.dark .form-group input:focus,.dark .form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.dark .form-group select{cursor:pointer}.dark .btn-group{display:flex;justify-content:flex-end}.dark .btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.dark .btn-save{background-color:#0085ff;color:#fff}.dark .btn-save:hover{background-color:#0066cc}.dark .btn-cancel{background-color:#f2f2f2;color:#333}.dark .btn-cancel:hover{background-color:#e6e6e6}.dark .collapse{color:#00cccc}`,this.shadowRoot.appendChild(r),Qe(this,{target:this.shadowRoot,props:Ue(this.attributes),customElement:!0},yt,bt,He,{darkmode:1,folder:0},null),e&&(e.target&&y(e.target,this,e.anchor),e.props&&(this.$set(e.props),j()))}static get observedAttributes(){return["darkmode","folder"]}get darkmode(){return this.$$.ctx[1]}set darkmode(e){this.$$set({darkmode:e}),j()}get folder(){return this.$$.ctx[0]}set folder(e){this.$$set({folder:e}),j()}}customElements.define("add-file",kt);
