(function(){"use strict";let a;const l=new Array(128).fill(void 0);l.push(void 0,null,!0,!1);function w(e){return l[e]}let g=l.length;function M(e){e<132||(l[e]=g,g=e)}function p(e){const t=w(e);return M(e),t}const U=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&U.decode();let y=null;function h(){return(y===null||y.byteLength===0)&&(y=new Uint8Array(a.memory.buffer)),y}function m(e,t){return e=e>>>0,U.decode(h().subarray(e,e+t))}function u(e){g===l.length&&l.push(l.length+1);const t=g;return g=l[t],l[t]=e,t}let v=null;function c(){return(v===null||v.byteLength===0)&&(v=new Int32Array(a.memory.buffer)),v}let f=0;const E=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},S=typeof E.encodeInto=="function"?function(e,t){return E.encodeInto(e,t)}:function(e,t){const n=E.encode(e);return t.set(n),{read:e.length,written:n.length}};function k(e,t,n){if(n===void 0){const _=E.encode(e),A=t(_.length,1)>>>0;return h().subarray(A,A+_.length).set(_),f=_.length,A}let r=e.length,o=t(r,1)>>>0;const i=h();let s=0;for(;s<r;s++){const _=e.charCodeAt(s);if(_>127)break;i[o+s]=_}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3,1)>>>0;const _=h().subarray(o+s,o+r),A=S(e,_);s+=A.written}return f=s,o}function I(){try{const n=a.__wbindgen_add_to_stack_pointer(-16);a.init_rs(n);var e=c()[n/4+0],t=c()[n/4+1];if(t)throw p(e)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function R(e,t){const n=t(e.length*1,1)>>>0;return h().set(e,n/1),f=e.length,n}function q(e){try{const o=a.__wbindgen_add_to_stack_pointer(-16),i=R(e,a.__wbindgen_malloc),s=f;a.load_epub(o,i,s);var t=c()[o/4+0],n=c()[o/4+1],r=c()[o/4+2];if(r)throw p(n);return W.__wrap(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function C(e){let t,n;try{const i=a.__wbindgen_add_to_stack_pointer(-16),s=k(e,a.__wbindgen_malloc,a.__wbindgen_realloc),_=f;a.guess_mime_type(i,s,_);var r=c()[i/4+0],o=c()[i/4+1];return t=r,n=o,m(r,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,n,1)}}class W{static __wrap(t){t=t>>>0;const n=Object.create(W.prototype);return n.__wbg_ptr=t,n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();a.__wbg_epubctxt_free(t)}metadata(){let t,n;try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.epubctxt_metadata(i,this.__wbg_ptr);var r=c()[i/4+0],o=c()[i/4+1];return t=r,n=o,m(r,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,n,1)}}read_file(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16),s=k(t,a.__wbindgen_malloc,a.__wbindgen_realloc),_=f;a.epubctxt_read_file(i,this.__wbg_ptr,s,_);var n=c()[i/4+0],r=c()[i/4+1],o=c()[i/4+2];if(o)throw p(r);return p(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}}async function O(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function j(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(t){p(t)},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(m(t,n));return u(r)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return u(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=w(n).stack,o=k(r,a.__wbindgen_malloc,a.__wbindgen_realloc),i=f;c()[t/4+1]=i,c()[t/4+0]=o},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){let r,o;try{r=t,o=n,console.error(m(t,n))}finally{a.__wbindgen_free(r,o,1)}},e.wbg.__wbg_buffer_a448f833075b71ba=function(t){const n=w(t).buffer;return u(n)},e.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=function(t,n,r){const o=new Uint8Array(w(t),n>>>0,r>>>0);return u(o)},e.wbg.__wbg_new_8f67e318f15d7254=function(t){const n=new Uint8Array(w(t));return u(n)},e.wbg.__wbindgen_throw=function(t,n){throw new Error(m(t,n))},e.wbg.__wbindgen_memory=function(){const t=a.memory;return u(t)},e}function B(e,t){return a=e.exports,L.__wbindgen_wasm_module=t,v=null,y=null,a}async function L(e){if(a!==void 0)return a;typeof e>"u"&&(e=new URL(""+new URL("assets/rs_utils_bg-Yam_3-gy.wasm",self.location.href).href,self.location.href));const t=j();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await O(await e,t);return B(n,r)}let d=self,T,x,D=new BroadcastChannel("install-channel"),P=new BroadcastChannel("log-channel"),b=(...e)=>P.postMessage(e.map(t=>t.toString()).join("	"));d.addEventListener("install",async e=>{b("Installed"),await Promise.all([d.skipWaiting(),L()]),I(),b("Initialized"),D.postMessage("installed")}),d.addEventListener("activate",async e=>{b("Activated"),await d.clients.claim(),b("Claimed")}),d.addEventListener("fetch",e=>{if(!T||!x)return;let n=x+"bene-reader/epub-content/";if(e.request.url.startsWith(n)){let r=e.request.url.slice(n.length),o=T.read_file(r),i=C(e.request.url);e.respondWith(new Response(o,{status:200,headers:{"Content-Type":i}})),b("Handling request for",e.request.url,"with guessed type",i)}else b("Ignoring request for",e.request.url)}),d.addEventListener("message",async e=>{let t=e.data;if(t.type=="new-epub"){let{data:n,scope:r,url:o}=t.data;T=q(n),x=r;let i=JSON.parse(T.metadata()),s=await d.clients.matchAll();for(let _ of s)_.postMessage({type:"loaded-epub",data:{metadata:i,url:o}})}})})();