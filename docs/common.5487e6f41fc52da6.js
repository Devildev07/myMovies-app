"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9629:(y,f,a)=>{a.d(f,{c:()=>r});var g=a(5349),c=a(967),d=a(9203);const r=(o,s)=>{let e,t;const u=(i,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,w);E&&s(E)?E!==e&&(n(),l(E,p)):n()},l=(i,w)=>{e=i,t||(t=e);const p=e;(0,g.w)(()=>p.classList.add("ion-activated")),w()},n=(i=!1)=>{if(!e)return;const w=e;(0,g.w)(()=>w.classList.remove("ion-activated")),i&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>u(i.currentX,i.currentY,c.a),onMove:i=>u(i.currentX,i.currentY,c.b),onEnd:()=>{n(!0),(0,c.h)(),t=void 0}})}},4874:(y,f,a)=>{a.d(f,{g:()=>c});var g=a(6225);const c=()=>{if(void 0!==g.w)return g.w.Capacitor}},5149:(y,f,a)=>{a.d(f,{g:()=>g});const g=(s,e,t,u,l)=>d(s[1],e[1],t[1],u[1],l).map(n=>c(s[0],e[0],t[0],u[0],n)),c=(s,e,t,u,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+u*l))-s*Math.pow(l-1,3),d=(s,e,t,u,l)=>o((u-=l)-3*(t-=l)+3*(e-=l)-(s-=l),3*t-6*e+3*s,3*e-3*s,s).filter(i=>i>=0&&i<=1),o=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const l=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===l)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-l),-Math.sqrt(-l)];const i=Math.pow(n/2,2)+Math.pow(l/3,3);if(0===i)return[Math.pow(n/2,.5)-e/3];if(i>0)return[Math.pow(-n/2+Math.sqrt(i),1/3)-Math.pow(n/2+Math.sqrt(i),1/3)-e/3];const w=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5085:(y,f,a)=>{a.d(f,{i:()=>g});const g=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,f,a)=>{a.r(f),a.d(f,{startFocusVisible:()=>r});const g="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,u=o||document.body,l=M=>{s.forEach(h=>h.classList.remove(g)),M.forEach(h=>h.classList.add(g)),s=M},n=()=>{e=!1,l([])},i=M=>{e=d.includes(M.key),e||l([])},w=M=>{if(e&&void 0!==M.composedPath){const h=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(h)}},p=()=>{t.activeElement===u&&l([])};return t.addEventListener("keydown",i),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",i),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:l}}},9988:(y,f,a)=>{a.d(f,{c:()=>c});var g=a(839);const c=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||d(e),n=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,i=(0,g.h)(e);t=!0===e.legacy||!l&&!n&&null!==i}return t}}},d=s=>!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(y,f,a)=>{a.d(f,{I:()=>c,a:()=>e,b:()=>t,c:()=>s,d:()=>l,h:()=>u});var g=a(4874),c=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(c||{});const r={getEngine(){const n=window.TapticEngine;if(n)return n;const i=(0,g.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,g.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();i.impact({style:w})},notification(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();i.notification({type:w})},selection(){const n=this.isCapacitor()?c.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},e=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},u=()=>{o()&&r.selectionEnd()},l=n=>{o()&&r.impact(n)}},2874:(y,f,a)=>{a.d(f,{I:()=>s,a:()=>l,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>u,i:()=>t,p:()=>p,r:()=>M,s:()=>i});var g=a(5861),c=a(839),d=a(6710);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,t=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,g.Z)(function*(m){return t(m)?(yield new Promise(_=>(0,c.c)(m,_)),m.getScrollElement()):m});return function(_){return h.apply(this,arguments)}}(),l=h=>h.querySelector(s)||h.querySelector(e),n=h=>h.closest(e),i=(h,m)=>t(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(h,m,_,O)=>t(h)?h.scrollByPoint(m,_,O):Promise.resolve(h.scrollBy({top:_,left:m,behavior:O>0?"smooth":"auto"})),p=h=>(0,d.b)(h,o),E=h=>{if(t(h)){const _=h.scrollY;return h.scrollY=!1,_}return h.style.setProperty("overflow","hidden"),!0},M=(h,m)=>{t(h)?h.scrollY=m:h.style.removeProperty("overflow")}},5307:(y,f,a)=>{a.d(f,{a:()=>g,b:()=>w,c:()=>e,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>d,i:()=>c,j:()=>O,k:()=>C,l:()=>t,m:()=>n,n:()=>M,o:()=>l,p:()=>o,q:()=>r,r:()=>_,s:()=>v,t:()=>i,u:()=>h,v:()=>m,w:()=>u});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,f,a)=>{a.d(f,{c:()=>r,g:()=>o});var g=a(6225),c=a(839),d=a(6710);const r=(e,t,u)=>{let l,n;void 0!==g.w&&"MutationObserver"in g.w&&(l=new MutationObserver(E=>{for(const M of E)for(const h of M.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===t)return u(),void(0,c.r)(()=>i(h))}),l.observe(e,{childList:!0}));const i=E=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{u();for(const m of h)for(const _ of m.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&p()}),n.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),p()}}},o=(e,t,u)=>{const l=null==e?0:e.toString().length,n=s(l,t);if(void 0===u)return n;try{return u(l,t)}catch(i){return(0,d.a)("Exception in provided `counterFormatter`.",i),n}},s=(e,t)=>`${e} / ${t}`},7484:(y,f,a)=>{a.d(f,{K:()=>r,a:()=>d});var g=a(4874),c=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(c||{}),d=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(d||{});const r={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(y,f,a)=>{a.r(f),a.d(f,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var g=a(7484);a(4874),a(6225);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},u=!1;const l=()=>{e={},t={},u=!1},n=v=>{if(g.K.getEngine())i(v);else{if(!v.visualViewport)return;t=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?w(v):h(v)&&p(v)}}},i=v=>{v.addEventListener("keyboardDidShow",L=>w(v,L)),v.addEventListener("keyboardDidHide",()=>p(v))},w=(v,L)=>{m(v,L),u=!0},p=v=>{_(v),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=v=>u&&!h(v),h=v=>u&&t.height===v.innerHeight,m=(v,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(D)},_=v=>{const L=new CustomEvent(o);v.dispatchEvent(L)},O=v=>{e=Object.assign({},t),t=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},3459:(y,f,a)=>{a.d(f,{c:()=>s});var g=a(5861),c=a(6225),d=a(7484);const r=e=>{if(void 0===c.d||e===d.a.None||void 0===e)return null;const t=c.d.querySelector("ion-app");return null!=t?t:c.d.body},o=e=>{const t=r(e);return null===t?0:t.clientHeight},s=function(){var e=(0,g.Z)(function*(t){let u,l,n,i;const w=function(){var m=(0,g.Z)(function*(){const _=yield d.K.getResizeMode(),O=void 0===_?void 0:_.mode;u=()=>{void 0===i&&(i=o(O)),n=!0,p(n,O)},l=()=>{n=!1,p(n,O)},null==c.w||c.w.addEventListener("keyboardWillShow",u),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),p=(m,_)=>{t&&t(m,E(_))},E=m=>{if(0===i||i===o(m))return;const _=r(m);return null!==_?new Promise(O=>{const v=new ResizeObserver(()=>{_.clientHeight===i&&(v.disconnect(),O())});v.observe(_)}):void 0};return yield w(),{init:w,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",u),null==c.w||c.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>n}});return function(u){return e.apply(this,arguments)}}()},3830:(y,f,a)=>{a.d(f,{c:()=>c});var g=a(5861);const c=()=>{let d;return{lock:function(){var o=(0,g.Z)(function*(){const s=d;let e;return d=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return o.apply(this,arguments)}}()}}},5857:(y,f,a)=>{a.d(f,{c:()=>d});var g=a(6225),c=a(839);const d=(r,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==r.label||null===s()),l=()=>{const i=o();if(void 0===i)return;if(!t())return void i.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===i.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),p.disconnect(),e=void 0)},{threshold:.01,root:r});p.observe(i)}else i.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,c.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,f,a)=>{a.d(f,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,r,o)=>{const s=d*r/o-d+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,r,o)=>{const s=r/o,e=d*s-d+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})}}},8663:(y,f,a)=>{a.r(f),a.d(f,{createSwipeBackGesture:()=>o});var g=a(839),c=a(5085),d=a(9203);a(619);const o=(s,e,t,u,l)=>{const n=s.ownerDocument.defaultView;let i=(0,c.i)(s);const p=_=>i?-_.deltaX:_.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:_=>(i=(0,c.i)(s),(_=>{const{startX:C}=_;return i?C>=n.innerWidth-50:C<=50})(_)&&e()),onStart:t,onMove:_=>{const C=p(_)/n.innerWidth;u(C)},onEnd:_=>{const O=p(_),C=n.innerWidth,v=O/C,L=(_=>i?-_.velocityX:_.velocityX)(_),D=L>=0&&(L>.2||O>C/2),b=(D?1-v:v)*C;let T=0;if(b>5){const A=b/Math.abs(L);T=Math.min(A,540)}l(D,v<=0?.01:(0,g.l)(0,v,.9999),T)}})}},5564:(y,f,a)=>{a.d(f,{w:()=>g});const g=(r,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(c(t,o))});return e.observe(r,{childList:!0,subtree:!0}),e},c=(r,o)=>{let s;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=d(e.addedNodes[t],o)||s}),s},d=(r,o)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(t=>t.value===s.value)}},8970:(y,f,a)=>{a.d(f,{m:()=>d});var g=a(6814),c=a(5879);let d=(()=>{var r;class o{}return(r=o).\u0275fac=function(e){return new(e||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[g.ez]}),o})()}}]);