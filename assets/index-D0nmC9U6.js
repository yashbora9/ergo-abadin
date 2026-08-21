(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function kn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},as={duration:.5,overwrite:!1,delay:0},Al,we,oe,hn=1e8,te=1/hn,Eo=Math.PI*2,Qf=Eo/4,td=0,ah=Math.sqrt,ed=Math.cos,nd=Math.sin,Te=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},Kn=function(t){return typeof t=="number"},Cl=function(t){return typeof t>"u"},Rn=function(t){return typeof t=="object"},Ve=function(t){return t!==!1},Rl=function(){return typeof window<"u"},Cs=function(t){return me(t)||Te(t)},oh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,id=/random\([^)]+\)/g,rd=/,\s*/g,vc=/(?:-?\.?\d|\.)+/gi,lh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ia=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ch=/[+-]=-?[.\d]+/,sd=/[^,'"\[\]\s]+/gi,ad=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Tn,To,Pl,sn={},fa={},uh,hh=function(t){return(fa=yr(t,sn))&&qe},Dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},os=function(t,e){return!e&&console.warn(t)},fh=function(t,e){return t&&(sn[t]=e)&&fa&&(fa[t]=e)||sn},ls=function(){return 0},od={suppressEvents:!0,isStart:!0,kill:!1},ia={suppressEvents:!0,kill:!1},ld={suppressEvents:!0},Ll={},di=[],bo={},dh,Je={},Na={},xc=30,ra=[],Ul="",Il=function(t){var e=t[0],n,i;if(Rn(e)||me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ra.length;i--&&!ra[i].targetTest(e););n=ra[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Nh(t[i],n)))||t.splice(i,1);return t},Fi=function(t){return t._gsap||Il(fn(t))[0]._gsap},ph=function(t,e,n){return(n=t[e])&&me(n)?t[e]():Cl(n)&&t.getAttribute&&t.getAttribute(e)||n},He=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},dr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cd=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=di.length,e=di.slice(0),n,i;for(bo={},di.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nl=function(t){return!!(t._initted||t._startAt||t.add)},mh=function(t,e,n,i){di.length&&!we&&da(),t.render(e,n,!!(we&&e<0&&Nl(t))),di.length&&!we&&da()},_h=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sd).length<2?e:Te(t)?t.trim():t},gh=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ud=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},yr=function(t,e){for(var n in e)t[n]=e[n];return t},Mc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Rn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Jr=function(t){var e=t.parent||ue,n=t.keyframes?ud(De(t.keyframes)):an;if(Ve(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hd=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ta=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},_i=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Oi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},fd=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},wo=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(ia):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},dd=function r(t){return!t||t._ts&&r(t.parent)},yc=function(t){return t._repeat?Sr(t._tTime,t=t.duration()+t._rDelay)*t:0},Sr=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ba=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},wa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ba(t),n._dirty||Oi(n,t)),t},xh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ma(t.rawTime(),e),(!e._dur||Ms(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Oi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},wn=function(t,e,n,i){return e.parent&&_i(e),e._start=ce((Kn(n)?n:n||t!==ue?un(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vh(t,e,"_first","_last",t._sort?"_start":0),Ao(e)||(t._recent=e),i||xh(t,e),t._ts<0&&wa(t,t._tTime),t},Mh=function(t,e){return(sn.ScrollTrigger||Dl("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},yh=function(t,e,n,i,s){if(Ol(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dh!==Qe.frame)return di.push(t),t._lazy=[s,i],1},pd=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ao=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},md=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&pd(t)&&!(!t._initted&&Ao(t))||(t._ts<0||t._dp._ts<0)&&!Ao(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Ms(0,t._tDur,e),u=Sr(l,o),t._yoyo&&u&1&&(a=1-a),u!==Sr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||we||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&yh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&wo(t,e,n,!0),t._onUpdate&&!n&&tn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&_i(t,1),!n&&!we&&(tn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_d=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Er=function(t,e,n,i){var s=t._repeat,a=ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&wa(t,t._tTime=t._tDur*o),t.parent&&ba(t),n||Oi(t.parent,t),t},Sc=function(t){return t instanceof Be?Oi(t):Er(t,t._dur)},gd={_start:0,endTime:ls,totalDuration:ls},un=function r(t,e,n){var i=t.labels,s=t._recent||gd,a=t.duration()>=hn?s.endTime(!1):t._dur,o,l,c;return Te(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(De(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},jr=function(t,e,n){var i=Kn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ve(l.vars.inherit)&&l.parent;a.immediateRender=Ve(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ve(e[0],a,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},Ms=function(t,e,n){return n<t?t:n>e?e:n},Pe=function(t,e){return!Te(t)||!(e=ad.exec(t))?"":e[1]},vd=function(t,e,n){return Mi(n,function(i){return Ms(t,e,i)})},Co=[].slice,Sh=function(t,e){return t&&Rn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Rn(t[0]))&&!t.nodeType&&t!==Tn},xd=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Te(i)&&!e||Sh(i,1)?(s=n).push.apply(s,fn(i)):n.push(i)})||n},fn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Te(t)&&!n&&(To||!Tr())?Co.call((e||Pl).querySelectorAll(t),0):De(t)?xd(t,n):Sh(t)?Co.call(t,0):t?[t]:[]},Ro=function(t){return t=fn(t)[0]||os("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fn(e,n.querySelectorAll?n:n===t?os("Invalid scope")||Pl.createElement("div"):t)}},Eh=function(t){return t.sort(function(){return .5-Math.random()})},Th=function(t){if(me(t))return t;var e=Rn(t)?t:{each:t},n=Bi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Te(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,m=a[_],p,E,M,v,A,C,b,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,hn])[1],!x){for(b=-hn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:i%x,E=x===hn?0:l?_*h/x-.5:i/x|0,b=0,R=hn,C=0;C<_;C++)M=C%x-p,v=E-(C/x|0),m[C]=A=c?Math.abs(c==="y"?v:M):ah(M*M+v*v),A>b&&(b=A),A<R&&(R=A);i==="random"&&Eh(m),m.max=b-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pe(e.amount||e.each)||0,n=n&&_<0?Ld(n):n}return _=(m[f]-m.min)/m.max||0,ce(m.b+(n?n(_):_)*m.v)+m.u}},Po=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Kn(n)?0:Pe(n))}},bh=function(t,e){var n=De(t),i,s;return!n&&Rn(t)&&(i=n=t.radius||hn,t.values?(t=fn(t.values),(s=!Kn(t[0]))&&(i*=i)):t=Po(t.increment)),Mi(e,n?me(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=hn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Kn(a)?u:u+Pe(a)}:Po(t))},wh=function(t,e,n,i){return Mi(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Md=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},yd=function(t,e){return function(n){return t(parseFloat(n))+(e||Pe(n))}},Sd=function(t,e,n){return Ch(t,e,0,1,n)},Ah=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},Ed=function r(t,e,n){var i=e-t;return De(t)?Ah(t,r(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},Td=function r(t,e,n){var i=e-t,s=i*2;return De(t)?Ah(t,r(0,t.length-1),e):Mi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},cs=function(t){return t.replace(id,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(rd);return wh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ch=function(t,e,n,i,s){var a=e-t,o=i-n;return Mi(s,function(l){return n+((l-t)/a*o||0)})},bd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Te(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=yr(De(t)?[]:{},t));if(!u){for(l in e)Fl.call(o,t,l,"get",e[l]);s=function(g){return kl(g,o)||(a?t.p:t)}}}return Mi(n,s)},Ec=function(t,e,n){var i=t.labels,s=hn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},tn=function(t,e,n){var i=t.vars,s=i[e],a=oe,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&di.length&&da(),o&&(oe=o),u=l?s.apply(c,l):s.call(c),oe=a,u},Yr=function(t){return _i(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&tn(t,"onInterrupt"),t},cr,Rh=[],Ph=function(t){if(t)if(t=!t.name&&t.default||t,Rl()||t.headless){var e=t.name,n=me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ls,render:kl,add:Fl,kill:Hd,modifier:Vd,rawVars:0},a={targetTest:0,get:0,getSetter:zl,aliases:{},register:0};if(Tr(),t!==i){if(Je[e])return;an(i,an(pa(t,s),a)),yr(i.prototype,yr(s,pa(t,a))),Je[i.prop=e]=i,t.targetTest&&(ra.push(i),Ll[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}fh(e,i),t.register&&t.register(qe,i,Ge)}else Rh.push(t)},Qt=255,Zr={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},Fa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},Dh=function(t,e,n){var i=t?Kn(t)?[t>>16,t>>8&Qt,t&Qt]:0:Zr.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])i=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(vc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Fa(l+1/3,s,a),i[1]=Fa(l,s,a),i[2]=Fa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(lh),n&&i.length<4&&(i[3]=1),i}else i=t.match(vc)||Zr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Qt,a=i[1]/Qt,o=i[2]/Qt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lh=function(t){var e=[],n=[],i=-1;return t.split(pi).forEach(function(s){var a=s.match(lr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Tc=function(t,e,n){var i="",s=(t+i).match(pi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Dh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Lh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(pi,"1").split(lr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},pi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),wd=/hsl[a]?\(/,Uh=function(t){var e=t.join(" "),n;if(pi.lastIndex=0,pi.test(e))return n=wd.test(e),t[1]=Tc(t[1],n),t[0]=Tc(t[0],n,Lh(t[1])),!0},us,Qe=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,E=m===!0,M,v,A,C;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,M=A-a,(M>0||E)&&(C=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=M+(M>=s?4:s-M),v=1),E||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](A,f,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){uh&&(!To&&Rl()&&(Tn=To=window,Pl=Tn.document||{},sn.gsap=qe,(Tn.gsapVersions||(Tn.gsapVersions=[])).push(qe.version),hh(fa||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),Rh.forEach(Ph)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},us=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),us=0,c=ls},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,E){var M=p?function(v,A,C,b){m(v,A,C,b),h.remove(M)}:m;return h.remove(m),o[E?"unshift":"push"](M),Tr(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),Tr=function(){return!us&&Qe.wake()},Vt={},Ad=/^[\d.\-M][\d.\-,\s]/,Cd=/["']/g,Rd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Cd,"").trim():+c,i=l.substr(o+1).trim();return e},Pd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Dd=function(t){var e=(t+"").split("("),n=Vt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Rd(e[1])]:Pd(t).split(",").map(_h)):Vt._CE&&Ad.test(t)?Vt._CE("",t):n},Ld=function(t){return function(e){return 1-t(1-e)}},Bi=function(t,e){return t&&(me(t)?t:Vt[t]||Dd(t))||e},Hi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return He(t,function(o){Vt[o]=sn[o]=s,Vt[a=o.toLowerCase()]=n;for(var l in s)Vt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Vt[o+"."+l]=s[l]}),s},Ih=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Oa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Eo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*nd((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ih(o);return s=Eo/s,l.config=function(c,u){return r(t,c,u)},l},Ba=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ih(n);return i.config=function(s){return r(t,s)},i};He("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Hi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;Hi("Elastic",Oa("in"),Oa("out"),Oa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Hi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Hi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Hi("Circ",function(r){return-(ah(1-r*r)-1)});Hi("Sine",function(r){return r===1?1:-ed(r*Qf)+1});Hi("Back",Ba("in"),Ba("out"),Ba());Vt.SteppedEase=Vt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-te;return function(o){return((i*Ms(0,a,o)|0)+s)*n}}};as.ease=Vt["quad.out"];He("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ul+=r+","+r+"Params,"});var Nh=function(t,e){this.id=td++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ph,this.set=e?e.getSetter:zl},hs=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Er(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),us||Qe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wa(this,n),!s._dp||s.parent||xh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Ms(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ba(this),fd(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ve(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ld);var i=we;return we=n,Nl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(un(this,n),Ve(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ve(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=me(n)?n:gh,l=function(){var u=i.then;i.then=null,s&&s(),me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Yr(this)},r})();an(hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Be=(function(r){sh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ve(n.sortChildren),ue&&wn(n.parent||ue,kn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Mh(kn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return jr(0,arguments,this),this},e.from=function(i,s,a){return jr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return jr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ve(i,s,un(this,a),1),this},e.call=function(i,s,a){return wn(this,ve.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ve(i,a,un(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Jr(a).immediateRender=Ve(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Jr(o).immediateRender=Ve(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ce(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,E,M,v,A,C,b;if(this!==ue&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,M=this._ts,p=!M,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=ce(u%m),u===l?(_=this._repeat,f=c):(A=ce(u/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Sr(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),C&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var R=C&&A&1,x=R===(C&&_&1);if(_<A&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(b?0:ce(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=_d(this,ce(o),ce(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(tn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-te);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,a||we&&Nl(d)),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=y?-te:te);break}}d=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-te)._zTime=f>=o?1:-1,this._ts))return this._start=v,ba(this),this.render(i,s,a);this._onUpdate&&!s&&tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_i(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(tn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Kn(s)||(s=un(this,s,i)),!(i instanceof hs)){if(De(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Te(i))return this.addLabel(i,s);if(me(i))i=ve.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ve?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Te(i)?this.removeLabel(i):me(i)?this.killTweensOf(i):(i.parent===this&&Ta(this,i),i===this._recent&&(this._recent=this._last),Oi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(Qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=un(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ve.delayedCall(0,s||ls,a);return o.data="isPause",this._hasPause=1,wn(this,o,un(this,i))},e.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&_i(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ci!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=fn(i),l=this._first,c=Kn(s),u;l;)l instanceof ve?cd(l._targets,o)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=un(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=ve.to(a,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Er(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,an({startAt:{time:un(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ec(this,un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ec(this,un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Oi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Oi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=hn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ce(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Er(a,a===ue&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ue._ts&&(mh(ue,ma(i,ue)),dh=Qe.frame),Qe.frame>=xc){xc+=nn.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&nn.autoSleep&&Qe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qe.sleep()}}},t})(hs);an(Be.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ud=function(t,e,n,i,s,a,o){var l=new Ge(this._pt,t,e,0,1,Vh,null,s),c=0,u=0,h,f,d,g,_,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=cs(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),f=n.match(Ia)||[];h=Ia.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?dr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ia.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ch.test(i)||p)&&(l.e=0),this._pt=l,l},Fl=function(t,e,n,i,s,a,o,l,c,u){me(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:me(h)?c?t[e.indexOf("set")||!me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=me(h)?c?Bd:zh:Bl,g;if(Te(i)&&(~i.indexOf("random(")&&(i=cs(i)),i.charAt(1)==="="&&(g=dr(f,i)+(Pe(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Do)return!isNaN(f*i)&&i!==""?(g=new Ge(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?kd:kh,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Dl(e,i),Ud.call(this,t,e,f,i,d,l||nn.stringFilter,c))},Id=function(t,e,n,i,s){if(me(t)&&(t=Qr(t,s,e,n,i)),!Rn(t)||t.style&&t.nodeType||De(t)||oh(t))return Te(t)?Qr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Qr(t[o],s,e,n,i);return a},Fh=function(t,e,n,i,s,a){var o,l,c,u;if(Je[t]&&(o=new Je[t]).init(s,o.rawVars?e[t]:Id(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ge(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==cr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ci,Do,Ol=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,E=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Al,v=t.timeline,A=i.easeReverse||h,C,b,R,x,y,P,H,F,k,W,G,Y,V;if(v&&(!f||!s)&&(s="none"),t._ease=Bi(s,as.ease),t._rEase=A&&(Bi(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(F=m[0]?Fi(m[0]).harness:0,Y=F&&i[F.prop],C=pa(i,Ll),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?ia:od),_._lazy=0),a){if(_i(t._startAt=ve.set(m,an({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ve(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!o&&!d)&&t._startAt.revert(ia),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),R=an({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ve(l),immediateRender:o,stagger:0,parent:p},C),Y&&(R[F.prop]=Y),_i(t._startAt=ve.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(ia):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ve(l)||l&&!g,b=0;b<m.length;b++){if(y=m[b],H=y._gsap||Il(m)[b]._gsap,t._ptLookup[b]=W={},bo[H.id]&&di.length&&da(),G=E===m?b:E.indexOf(y),F&&(k=new F).init(y,Y||C,t,G,E)!==!1&&(t._pt=x=new Ge(t._pt,y,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(rt){W[rt]=x}),k.priority&&(P=1)),!F||Y)for(R in C)Je[R]&&(k=Fh(R,C,t,G,y,E))?k.priority&&(P=1):W[R]=x=Fl.call(t,y,R,"get",C[R],G,E,0,i.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),M&&t._pt&&(ci=t,ue.killTweensOf(y,W,t.globalTime(e)),V=!t.parent,ci=0),t._pt&&l&&(bo[H.id]=1)}P&&Hh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,f&&e<=0&&v.render(hn,!0,!0)},Nd=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Do=1,t.vars[e]="+=0",Ol(t,o),Do=0,l?os(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=_e(n)+Pe(h.e)),h.b&&(h.b=u.s+Pe(h.b))},Fd=function(t,e){var n=t[0]?Fi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=yr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Od=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Qr=function(t,e,n,i,s){return me(t)?t.call(e,n,i,s):Te(t)&&~t.indexOf("random(")?cs(t):t},Oh=Ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Bh={};He(Oh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Bh[r]=1});var ve=(function(r){sh(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Jr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||ue,E=(De(n)||oh(n)?Kn(n[0]):"length"in i)?[n]:fn(n),M,v,A,C,b,R,x,y;if(o._targets=E.length?Il(E):os("GSAP target "+n+" not found. https://gsap.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Cs(c)||Cs(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Be({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:E}),M.kill(),M.parent=M._dp=kn(o),M._start=0,f||Cs(c)||Cs(u)){if(C=E.length,x=f&&Th(f),Rn(f))for(b in f)~Oh.indexOf(b)&&(y||(y={}),y[b]=f[b]);for(v=0;v<C;v++)A=pa(i,Bh),A.stagger=0,P&&(A.easeReverse=P),y&&yr(A,y),R=E[v],A.duration=+Qr(c,kn(o),v,R,E),A.delay=(+Qr(u,kn(o),v,R,E)||0)-o._delay,!f&&C===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(R,A,x?x(v,R,E):0),M._ease=Vt.none;M.duration()?c=u=0:o.timeline=0}else if(g){Jr(an(M.vars.defaults,{ease:"none"})),M._ease=Bi(g.ease||i.ease||"none");var H=0,F,k,W;if(De(g))g.forEach(function(G){return M.to(E,G,">")}),M.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||Od(b,g[b],A,g.easeEach);for(b in A)for(F=A[b].sort(function(G,Y){return G.t-Y.t}),H=0,v=0;v<F.length;v++)k=F[v],W={ease:k.e,duration:(k.t-(v?F[v-1].t:0))/100*c},W[b]=k.v,M.to(E,W,H),H+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!Al&&(ci=kn(o),ue.killTweensOf(E),ci=0),wn(p,kn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===ce(p._time)&&Ve(h)&&dd(kn(o))&&p.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-u)||0)),m&&Mh(kn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-te&&!u?l:i<te?0:i,f,d,g,_,m,p,E,M;if(!c)md(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=ce(h%_),h===l?(g=this._repeat,f=c):(m=ce(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Sr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(ce(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(yh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=f<o;if(v!==this._inv){var A=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(f/c);if(this._from&&(this.ratio=E=1-E),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(tn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&wo(this,i,s,a),tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&wo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!s&&!(u&&!o)&&(h||o||p)&&(tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){us||Qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ol(this,c),u=this._ease(c/this._dur),Nd(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(wa(this,0),this.parent||vh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!we),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ci&&ci.vars.overwrite!==!0)._first||Yr(this),this.parent&&a!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&hd(o,l))return s==="all"&&(this._pt=0),Yr(this);for(h=this._op=this._op||[],s!=="all"&&(Te(s)&&(_={},He(s,function(E){return _[E]=1}),s=_),s=Fd(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ta(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Yr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return jr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return jr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ue.killTweensOf(i,s,a)},t})(hs);an(ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});He("staggerTo,staggerFrom,staggerFromTo",function(r){ve[r]=function(){var t=new Be,e=Co.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Bl=function(t,e,n){return t[e]=n},zh=function(t,e,n){return t[e](n)},Bd=function(t,e,n,i){return t[e](i.fp,n)},zd=function(t,e,n){return t.setAttribute(e,n)},zl=function(t,e){return me(t[e])?zh:Cl(t[e])&&t.setAttribute?zd:Bl},kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vd=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Hd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ta(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Gd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Hh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ge=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||kh,this.d=l||this,this.set=c||Bl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Gd,this.m=n,this.mt=s,this.tween=i},r})();He(Ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ll[r]=1});sn.TweenMax=sn.TweenLite=ve;sn.TimelineLite=sn.TimelineMax=Be;ue=new Be({sortChildren:!1,defaults:as,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Uh;var zi=[],sa={},Wd=[],bc=0,Xd=0,za=function(t){return(sa[t]||Wd).map(function(e){return e()})},Lo=function(){var t=Date.now(),e=[];t-bc>2&&(za("matchMediaInit"),zi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Tn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),za("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bc=t,za("matchMedia"))},Gh=(function(){function r(e,n){this.selector=n&&Ro(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xd++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){me(n)&&(s=i,i=n,n=me);var a=this,o=function(){var c=oe,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ro(s)),oe=a,h=i.apply(a,arguments),me(h)&&a._r.push(h),oe=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===me?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Be?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ve)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=zi.length;a--;)zi[a].id===this.id&&zi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),qd=(function(){function r(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Rn(n)||(n={matches:n});var a=new Gh(0,s||this.scope),o=a.conditions={},l,c,u;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Tn.matchMedia(n[c]),l&&(zi.indexOf(a)<0&&zi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lo):l.addEventListener("change",Lo)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),_a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ph(i)})},timeline:function(t){return new Be(t)},getTweensOf:function(t,e){return ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){Te(t)&&(t=fn(t)[0]);var s=Fi(t||{}).get,a=n?gh:_h;return n==="native"&&(n=""),t&&(e?a((Je[e]&&Je[e].get||s)(t,e,n,i)):function(o,l,c){return a((Je[o]&&Je[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=fn(t),t.length>1){var i=t.map(function(u){return qe.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Je[e],o=Fi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;cr._pt=0,h.init(t,n?u+n:u,cr,0,[t]),h.render(1,h),cr._pt&&kl(1,cr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=qe.to(t,an((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bi(t.ease,as.ease)),Mc(as,t||{})},config:function(t){return Mc(nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Je[o]&&!sn[o]&&os(e+" effect requires "+o+" plugin.")}),Na[e]=function(o,l,c){return n(fn(o),an(l||{},s),c)},a&&(Be.prototype[e]=function(o,l,c){return this.add(Na[e](o,Rn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Vt[t]=Bi(e)},parseEase:function(t,e){return arguments.length?Bi(t,e):Vt},getById:function(t){return ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Be(t),i,s;for(n.smoothChildTiming=Ve(t.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,i=ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ve&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(ue,n,0),n},context:function(t,e){return t?new Gh(t,e):oe},matchMedia:function(t){return new qd(t)},matchMediaRefresh:function(){return zi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Lo()},addEventListener:function(t,e){var n=sa[t]||(sa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=sa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ed,wrapYoyo:Td,distribute:Th,random:wh,snap:bh,normalize:Sd,getUnit:Pe,clamp:vd,splitColor:Dh,toArray:fn,selector:Ro,mapRange:Ch,pipe:Md,unitize:yd,interpolate:bd,shuffle:Eh},install:hh,effects:Na,ticker:Qe,updateRoot:Be.updateRoot,plugins:Je,globalTimeline:ue,core:{PropTween:Ge,globals:fh,Tween:ve,Timeline:Be,Animation:hs,getCache:Fi,_removeLinkedListItem:Ta,reverting:function(){return we},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Al=t}}};He("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _a[r]=ve[r]});Qe.add(Be.updateRoot);cr=_a.to({},{duration:0});var Yd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zd=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Yd(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ka=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Te(s)&&(l={},He(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Zd(o,s)}}}},qe=_a.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ka("roundProps",Po),ka("modifiers"),ka("snap",bh))||_a;ve.version=Be.version=qe.version="3.15.0";uh=1;Rl()&&Tr();Vt.Power0;Vt.Power1;Vt.Power2;Vt.Power3;Vt.Power4;Vt.Linear;Vt.Quad;Vt.Cubic;Vt.Quart;Vt.Quint;Vt.Strong;Vt.Elastic;Vt.Back;Vt.SteppedEase;Vt.Bounce;Vt.Sine;Vt.Expo;Vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wc,ui,pr,Vl,Ni,Ac,Hl,$d=function(){return typeof window<"u"},Jn={},Pi=180/Math.PI,mr=Math.PI/180,qi=Math.atan2,Cc=1e8,Gl=/([A-Z])/g,Kd=/(left|right|width|margin|padding|x)/i,Jd=/[\s,\(]\S/,An={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Qd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},tp=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ep=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Wh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Xh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},np=function(t,e,n){return t.style[e]=n},ip=function(t,e,n){return t.style.setProperty(e,n)},rp=function(t,e,n){return t._gsap[e]=n},sp=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ap=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},op=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},he="transform",We=he+"Origin",lp=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Jn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=An[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vn(i,o)}):this.tfm[t]=a.x?a[t]:Vn(i,t),t===We&&(this.tfm.zOrigin=a.zOrigin);else return An.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(he)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(We,e,"")),t=he}(s||e)&&this.props.push(t,e,s[t])},qh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cp=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Gl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hl(),(!s||!s.isStart)&&!n[he]&&(qh(n),i.zOrigin&&n[We]&&(n[We]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Yh=function(t,e){var n={target:t,props:[],revert:cp,save:lp};return t._gsap||qe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Zh,Io=function(t,e){var n=ui.createElementNS?ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ui.createElement(t);return n&&n.style?n:ui.createElement(t)},en=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Gl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,br(e)||e,1)||""},Rc="O,Moz,ms,Ms,Webkit".split(","),br=function(t,e,n){var i=e||Ni,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Rc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Rc[a]:"")+t},No=function(){$d()&&window.document&&(wc=window,ui=wc.document,pr=ui.documentElement,Ni=Io("div")||{style:{}},Io("div"),he=br(he),We=he+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zh=!!br("perspective"),Hl=qe.core.reverting,Vl=1)},Pc=function(t){var e=t.ownerSVGElement,n=Io("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),pr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),pr.removeChild(n),s},Dc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$h=function(t){var e,n;try{e=t.getBBox()}catch{e=Pc(t),n=1}return e&&(e.width||e.height)||n||(e=Pc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Dc(t,["x","cx","x1"])||0,y:+Dc(t,["y","cy","y1"])||0,width:0,height:0}:e},Kh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$h(t))},gi=function(t,e){if(e){var n=t.style,i;e in Jn&&e!==We&&(e=he),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Gl,"-$1").toLowerCase())):n.removeAttribute(e)}},hi=function(t,e,n,i,s,a){var o=new Ge(t._pt,e,n,0,1,a?Xh:Wh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Lc={deg:1,rad:1,turn:1},up={grid:1,flex:1},vi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ni.style,l=Kd.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Lc[i]||Lc[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Kh(t),(d||a==="%")&&(Jn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],_e(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ui||!_.appendChild)&&(_=ui.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Qe.time&&!m.uncache)return _e(s/m.width*h);if(d&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,g=t[u],E?t.style[e]=E:gi(t,e)}else(d||a==="%")&&!up[en(_,"display")]&&(o.position=en(t,"position")),_===t&&(o.position="static"),_.appendChild(Ni),g=Ni[u],_.removeChild(Ni),o.position="absolute";return l&&d&&(m=Fi(_),m.time=Qe.time,m.width=_[u]),_e(f?g*s/h:g&&s?h/g*s:0)},Vn=function(t,e,n,i){var s;return Vl||No(),e in An&&e!=="transform"&&(e=An[e],~e.indexOf(",")&&(e=e.split(",")[0])),Jn[e]&&e!=="transform"?(s=ds(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:va(en(t,We))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ga[e]&&ga[e](t,e,n)||en(t,e)||ph(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vi(t,e,s,n)+n:s},hp=function(t,e,n,i){if(!n||n==="none"){var s=br(e,t,1),a=s&&en(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=en(t,"borderTopColor"))}var o=new Ge(this._pt,t.style,e,0,1,Vh),l=0,c=0,u,h,f,d,g,_,m,p,E,M,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=en(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=en(t,e)||i,_?t.style[e]=_:gi(t,e)),u=[n,i],Uh(u),n=u[0],i=u[1],f=n.match(lr)||[],A=i.match(lr)||[],A.length){for(;h=lr.exec(i);)m=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=dr(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=lr.lastIndex-M.length,M||(M=M||nn.units[e]||v,l===i.length&&(i+=M,o.e+=M)),v!==M&&(d=vi(t,e,_,M)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Xh:Wh;return ch.test(i)&&(o.e=0),this._pt=o,o},Uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fp=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Uc[n]||n,e[1]=Uc[i]||i,e.join(" ")},dp=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Jn[o]&&(l=1,o=o==="transformOrigin"?We:he),gi(n,o);l&&(gi(n,he),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ds(n,1),a.uncache=1,qh(i)))}},ga={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ge(t._pt,e,n,0,0,dp);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},fs=[1,0,0,1,0,0],Jh={},jh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ic=function(t){var e=en(t,he);return jh(e)?fs:e.substr(7).match(lh).map(_e)},Wl=function(t,e){var n=t._gsap||Fi(t),i=t.style,s=Ic(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fs:s):(s===fs&&!t.offsetParent&&t!==pr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,pr.appendChild(t)),s=Ic(t),l?i.display=l:gi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):pr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fo=function(t,e,n,i,s,a){var o=t._gsap,l=s||Wl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],M=e.split(" "),v=parseFloat(M[0])||0,A=parseFloat(M[1])||0,C,b,R,x;n?l!==fs&&(b=d*m-g*_)&&(R=v*(m/b)+A*(-_/b)+(_*E-m*p)/b,x=v*(-g/b)+A*(d/b)-(d*E-g*p)/b,v=R,A=x):(C=$h(t),v=C.x+(~M[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(M[1]||M[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&o.smooth?(p=v-c,E=A-u,o.xOffset=h+(p*d+E*_)-p,o.yOffset=f+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[We]="0px 0px",a&&(hi(a,o,"xOrigin",c,v),hi(a,o,"yOrigin",u,A),hi(a,o,"xOffset",h,o.xOffset),hi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ds=function(t,e){var n=t._gsap||new Nh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=en(t,We)||"0",u,h,f,d,g,_,m,p,E,M,v,A,C,b,R,x,y,P,H,F,k,W,G,Y,V,rt,ot,vt,Dt,Xt,q,Q;return u=h=f=_=m=p=E=M=v=0,d=g=1,n.svg=!!(t.getCTM&&Kh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[he]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[he]!=="none"?l[he]:"")),i.scale=i.rotate=i.translate="none"),b=Wl(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Fo(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==fs&&(P=b[0],H=b[1],F=b[2],k=b[3],u=W=b[4],h=G=b[5],b.length===6?(d=Math.sqrt(P*P+H*H),g=Math.sqrt(k*k+F*F),_=P||H?qi(H,P)*Pi:0,E=F||k?qi(F,k)*Pi+_:0,E&&(g*=Math.abs(Math.cos(E*mr))),n.svg&&(u-=A-(A*P+C*F),h-=C-(A*H+C*k))):(Q=b[6],Xt=b[7],ot=b[8],vt=b[9],Dt=b[10],q=b[11],u=b[12],h=b[13],f=b[14],R=qi(Q,Dt),m=R*Pi,R&&(x=Math.cos(-R),y=Math.sin(-R),Y=W*x+ot*y,V=G*x+vt*y,rt=Q*x+Dt*y,ot=W*-y+ot*x,vt=G*-y+vt*x,Dt=Q*-y+Dt*x,q=Xt*-y+q*x,W=Y,G=V,Q=rt),R=qi(-F,Dt),p=R*Pi,R&&(x=Math.cos(-R),y=Math.sin(-R),Y=P*x-ot*y,V=H*x-vt*y,rt=F*x-Dt*y,q=k*y+q*x,P=Y,H=V,F=rt),R=qi(H,P),_=R*Pi,R&&(x=Math.cos(R),y=Math.sin(R),Y=P*x+H*y,V=W*x+G*y,H=H*x-P*y,G=G*x-W*y,P=Y,W=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=_e(Math.sqrt(P*P+H*H+F*F)),g=_e(Math.sqrt(G*G+Q*Q)),R=qi(W,G),E=Math.abs(R)>2e-4?R*Pi:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!jh(en(t,he)),Y&&t.setAttribute("transform",Y))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=_e(d),n.scaleY=_e(g),n.rotation=_e(_)+o,n.rotationX=_e(m)+o,n.rotationY=_e(p)+o,n.skewX=E+o,n.skewY=M+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[We]=va(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?mp:Zh?Qh:pp,n.uncache=0,n},va=function(t){return(t=t.split(" "))[0]+" "+t[1]},Va=function(t,e,n){var i=Pe(e);return _e(parseFloat(e)+parseFloat(vi(t,"x",n+"px",i)))+i},pp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Qh(t,e)},Si="0deg",kr="0px",Ei=") ",Qh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,M=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==Si||u!==Si)){var C=parseFloat(u)*mr,b=Math.sin(C),R=Math.cos(C),x;C=parseFloat(h)*mr,x=Math.cos(C),a=Va(E,a,b*x*-M),o=Va(E,o,-Math.sin(C)*-M),l=Va(E,l,R*x*-M+M)}m!==kr&&(v+="perspective("+m+Ei),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==kr||o!==kr||l!==kr)&&(v+=l!==kr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(v+="rotate("+c+Ei),u!==Si&&(v+="rotateY("+u+Ei),h!==Si&&(v+="rotateX("+h+Ei),(f!==Si||d!==Si)&&(v+="skew("+f+", "+d+Ei),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ei),E.style[he]=v||"translate(0, 0)"},mp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,M=parseFloat(a),v=parseFloat(o),A,C,b,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=mr,c*=mr,A=Math.cos(l)*h,C=Math.sin(l)*h,b=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=mr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,C*=x)),A=_e(A),C=_e(C),b=_e(b),R=_e(R)):(A=h,R=f,C=b=0),(M&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=vi(d,"x",a,"px"),v=vi(d,"y",o,"px")),(g||_||m||p)&&(M=_e(M+g-(g*A+_*b)+m),v=_e(v+_-(g*C+_*R)+p)),(i||s)&&(x=d.getBBox(),M=_e(M+i/100*x.width),v=_e(v+s/100*x.height)),x="matrix("+A+","+C+","+b+","+R+","+M+","+v+")",d.setAttribute("transform",x),E&&(d.style[he]=x)},_p=function(t,e,n,i,s){var a=360,o=Te(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Pi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Cc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Cc)%a-~~(c/a)*a)),t._pt=f=new Ge(t._pt,e,n,i,c,jd),f.e=u,f.u="deg",t._props.push(n),f},Nc=function(t,e){for(var n in e)t[n]=e[n];return t},gp=function(t,e,n){var i=Nc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[he]=e,o=ds(n,1),gi(n,he),n.setAttribute("transform",c)):(c=getComputedStyle(n)[he],a[he]=e,o=ds(n,1),a[he]=c);for(l in Jn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Pe(c),g=Pe(u),h=d!==g?vi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Ge(t._pt,o,l,h,f-h,Uo),t._pt.u=g||0,t._props.push(l));Nc(o,i)};He("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ga[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Vn(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var tf={name:"css",register:No,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,E,M,v,A,C,b,R,x;Vl||No(),this.styles=this.styles||Yh(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Je[_]&&Fh(_,e,n,i,t,s)))){if(d=typeof u,g=ga[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=cs(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",pi.lastIndex=0,pi.test(c)||(m=Pe(c),p=Pe(u),p?m!==p&&(c=vi(t,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Te(c)&&~c.indexOf("random(")&&(c=cs(c)),Pe(c+"")||c==="auto"||(c+=nn.units[_]||Pe(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),f=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in An&&(_==="autoAlpha"&&(f===1&&Vn(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),hi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=An[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Jn,M){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=en(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=u,u=en(t,"perspective"),y?t.style.perspective=y:gi(t,"perspective")}h=parseFloat(u)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ds(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Ge(this._pt,o,he,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Ge(this._pt,A,"scaleY",A.scaleY,(E?dr(A.scaleY,E+h):h)-A.scaleY||0,Uo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(We,0,o[We]),u=fp(u),A.svg?Fo(t,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&hi(this,A,"zOrigin",A.zOrigin,p),hi(this,o,_,va(c),va(u)));continue}else if(_==="svgOrigin"){Fo(t,u,1,C,0,this);continue}else if(_ in Jh){_p(this,A,_,f,E?dr(f,E+u):u);continue}else if(_==="smoothOrigin"){hi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){gp(this,u,t);continue}}else _ in o||(_=br(_)||_);if(M||(h||h===0)&&(f||f===0)&&!Jd.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=Pe(u)||(_ in nn.units?nn.units[_]:m),m!==p&&(f=vi(t,_,c,p)),this._pt=new Ge(this._pt,M?A:o,_,f,(E?dr(f,E+h):h)-f,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?ep:Uo),this._pt.u=p||0,M&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=tp):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Qd);else if(_ in o)hp.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Dl(_,u);continue}M||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}b&&Hh(this)},render:function(t,e){if(e.tween._time||!Hl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:An,getSetter:function(t,e,n){var i=An[e];return i&&i.indexOf(",")<0&&(e=i),e in Jn&&e!==We&&(t._gsap.x||Vn(t,"x"))?n&&Ac===n?e==="scale"?sp:rp:(Ac=n||{})&&(e==="scale"?ap:op):t.style&&!Cl(t.style[e])?np:~e.indexOf("-")?ip:zl(t,e)},core:{_removeProperty:gi,_getMatrix:Wl}};qe.utils.checkPrefix=br;qe.core.getStyleSaver=Yh;(function(r,t,e,n){var i=He(r+","+t+","+e,function(s){Jn[s]=1});He(t,function(s){nn.units[s]="deg",Jh[s]=1}),An[i[13]]=r+","+t,He(n,function(s){var a=s.split(":");An[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");He("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){nn.units[r]="px"});qe.registerPlugin(tf);var Yt=qe.registerPlugin(tf)||qe;Yt.core.Tween;const vp=()=>"./",Ze=r=>`${vp()}${r}`,Xl=[{id:"open",label:"Welcome"},{id:"meet",label:"Introduction"},{id:"vision",label:"Vision"},{id:"why",label:"Why ERGO"},{id:"here",label:"Why here"},{id:"intro",label:"ERGO"},{id:"vgrg",label:"VG & RG"},{id:"earn",label:"Earn"},{id:"fragen",label:"Fragen"}],qn=[{id:"open",section:"open",kicker:"ERGO  ·  Abedin",title:"Journey to being Independent",line:"Why ERGO. Why now.",photos:[{src:Ze("photos/ergo/hq.jpg"),w:4.6,h:2.7,x:2.9,y:.7,z:-1,ry:-.14}],cam:{x:-.4,y:.3,z:8.6,tx:1.4,ty:.22,tz:0},trail:!1},{id:"meet-1",section:"meet",kicker:"01  ·  Introduction",title:"Who is Abedin.",line:"",photos:[{src:Ze("photos/abedin/portrait.jpg"),w:4.35,h:2.9,x:2.65,y:.75,z:-.9,ry:-.12},{src:Ze("photos/abedin/boat.jpg"),w:2.15,h:1.53,x:4.55,y:-.55,z:.5,ry:-.1}],cam:{x:-.45,y:.2,z:8.4,tx:1.55,ty:.2,tz:0},trail:!0},{id:"vision-1",section:"vision",kicker:"02  ·  The Vision",title:"Vision for Bangladesh",line:"Clean it up. Make it like Singapore.",facts:[{v:"Bhairab",k:"Wealthy. Very dirty."},{v:"Inside",k:"AC · elevators"},{v:"Outside",k:"Dirty streets"},{v:"Plan",k:"City first, then expand"}],photos:[{src:Ze("photos/abedin/before.jpg"),w:3.2,h:2.34,x:2.05,y:.95,z:-.75,ry:.1},{src:Ze("photos/abedin/city.jpg"),w:2.2,h:2.94,x:4.35,y:.35,z:-.15,ry:-.12}],cam:{x:-.35,y:.22,z:8.5,tx:2.35,ty:.35,tz:0},trail:!1},{id:"why-1",section:"why",kicker:"03  ·  Why ERGO",title:"Why I chose ERGO",line:"Fairness is the core reason.",facts:[{v:"10+ years",k:"Restaurant chef"}],photos:[{src:Ze("photos/ergo/sign.jpg"),w:3.35,h:3.35,x:3.25,y:.4,z:-.45,ry:-.1}],cam:{x:-.45,y:.2,z:8.3,tx:1.7,ty:.22,tz:0},trail:!0},{id:"why-2",section:"why",kicker:"03  ·  Why ERGO",title:`The salary
stays flat.`,line:"Even if the boss earns millions.",cards:[{label:"Restaurant",sub:"Work more. Pay stays the same.",kicker:"Before",x:3.05,y:.45,z:.2,ry:.08},{label:"ERGO",sub:"More work. More pay.",kicker:"After",x:5.35,y:.45,z:.2,ry:-.1}],cam:{x:-.15,y:.28,z:8.3,tx:3.3,ty:.28,tz:0},trail:!1},{id:"why-3",section:"why",kicker:"03  ·  Why ERGO",title:"More work. More pay.",line:"Self-accountability. Income follows effort.",facts:[{v:"Effort",k:"Sets the income"},{v:"You",k:"Own the result"}],cam:{x:0,y:.25,z:8.4,tx:.3,ty:.15,tz:0},trail:!1},{id:"here-1",section:"here",kicker:"04  ·  Why I am here",title:"Why I am here.",line:"Solve problems for restaurant workers.",facts:[{v:"90%",k:"Do not work commercially"}],cam:{x:-.15,y:.22,z:8.4,tx:.4,ty:.12,tz:0},trail:!0},{id:"here-2",section:"here",kicker:"04  ·  Why I am here",title:`Ten years.
One goal.`,line:"Open restaurants. Then the reach ran out.",cards:[{label:"5 restaurants",sub:"Would only serve family.",kicker:"The plan",x:3.15,y:.45,z:.15,ry:.08},{label:"Too small",sub:"Not enough reach.",kicker:"The limit",x:5.35,y:.45,z:.15,ry:-.1}],cam:{x:-.2,y:.28,z:8.4,tx:3.3,ty:.28,tz:0},trail:!1},{id:"here-3",section:"here",kicker:"04  ·  Why I am here",title:"A bigger reach.",line:"Help the Bangladeshi community in Germany.",facts:[{v:"Independent",k:"Financially. Families secure."},{v:"50%",k:"Community in 5 years"}],cam:{x:-.1,y:.22,z:8.5,tx:.35,ty:.12,tz:0},trail:!1},{id:"intro-1",section:"intro",kicker:"05  ·  ERGO",title:"A century of capital.",line:"Multi-billion group. Munich Re at the core.",facts:[{v:"100+",k:"Years of capital"},{v:"Munich Re",k:"Behind the group"}],photos:[{src:Ze("photos/ergo/hq.jpg"),w:4.55,h:2.7,x:2.9,y:.9,z:-.8,ry:-.1}],cam:{x:-.55,y:.18,z:7.9,tx:1.5,ty:.4,tz:-.4},trail:!0},{id:"intro-2",section:"intro",kicker:"05  ·  ERGO",title:"The magic triangle.",line:"Every great investment needs all three.",cards:[{label:"Security",sub:"Capital that holds.",kicker:"01  Sicherheit",x:2.2,y:1.1,z:.05,ry:.06},{label:"Returns",sub:"Growth you can keep.",kicker:"02  Gewinne",x:4.9,y:1.25,z:.3,ry:0},{label:"Flexibility",sub:"You stay in control.",kicker:"03  Flexibilität",x:7.6,y:1.05,z:.05,ry:-.06}],cam:{x:.7,y:.5,z:12.4,tx:4.9,ty:.7,tz:0},trail:!1},{id:"intro-3",section:"intro",kicker:"05  ·  ERGO",title:"A product that adapts.",line:"The client chooses what matters most.",photos:[{src:Ze("photos/ergo/office.jpg"),w:4.4,h:2.48,x:2.95,y:.9,z:-.75,ry:-.1}],cam:{x:-.4,y:.2,z:8.1,tx:1.5,ty:.35,tz:0},trail:!1},{id:"vgrg-1",section:"vgrg",kicker:"06  ·  VG & RG",title:"Two paths. One career.",line:"Help clients. Build a team.",cards:[{label:"VG",sub:"Protect people’s wealth.",kicker:"Clients",x:3.35,y:.9,z:.15,ry:.08},{label:"RG",sub:"Build a team that lasts.",kicker:"People",x:5.35,y:.9,z:.15,ry:-.1}],cam:{x:-.2,y:.32,z:9.2,tx:3.4,ty:.45,tz:0},trail:!0},{id:"vgrg-2",section:"vgrg",kicker:"06  ·  VG",title:"Protect people’s wealth.",line:"The client conversation. Security, returns, flexibility.",photos:[{src:Ze("photos/ergo/hq.jpg"),w:4.35,h:2.58,x:2.95,y:.9,z:-.8,ry:-.1}],cam:{x:-.4,y:.18,z:8.2,tx:1.5,ty:.32,tz:0},trail:!1},{id:"vgrg-3",section:"vgrg",kicker:"06  ·  RG",title:"Build a team that lasts.",line:"The people path. Partners who want more.",photos:[{src:Ze("photos/ergo/office.jpg"),w:4.3,h:2.42,x:2.95,y:.95,z:-.75,ry:-.12}],cam:{x:-.35,y:.2,z:8.3,tx:1.5,ty:.32,tz:0},trail:!1},{id:"earn-1",section:"earn",kicker:"07  ·  How partners earn",title:"First: your own work.",line:"Paid for the clients you serve.",cards:[{label:"Produktion",sub:"Your own client work.",kicker:"Income 01",x:3.25,y:.45,z:.2,ry:-.08}],cam:{x:-.45,y:.22,z:8.4,tx:1.7,ty:.2,tz:0},trail:!0},{id:"earn-2",section:"earn",kicker:"07  ·  How partners earn",title:"Then: the people you lead.",line:"Leadership multiplies what you already do well.",cards:[{label:"Führung",sub:"Paid for the people you lead.",kicker:"Income 02",x:3.15,y:.45,z:.15,ry:.08},{label:"System",sub:"A structure that scales.",kicker:"Income 02",x:5.2,y:.45,z:.15,ry:-.1}],cam:{x:-.4,y:.28,z:8.8,tx:3.1,ty:.28,tz:0},trail:!1},{id:"earn-3",section:"earn",kicker:"07  ·  How partners earn",title:"Training. System. Support.",line:"Nobody is left alone with the craft.",facts:[{v:"Tue + Thu",k:"19:00–21:00"},{v:"Sales",k:"Recruiting · Lead"}],photos:[{src:Ze("photos/ergo/office.jpg"),w:4.4,h:2.48,x:2.9,y:.85,z:-.7,ry:-.1}],cam:{x:-.4,y:.18,z:8.2,tx:1.45,ty:.28,tz:0},trail:!1},{id:"fragen-1",section:"fragen",kicker:"08  ·  Fragen",title:"Your turn. Ask anything.",line:"No script from here. Just honesty.",photos:[{src:Ze("photos/ergo/hq.jpg"),w:3.6,h:2.15,x:3.2,y:.7,z:-.4,ry:-.1}],cam:{x:-.45,y:.18,z:8.1,tx:1.5,ty:.22,tz:0},trail:!0},{id:"fragen-2",section:"fragen",kicker:"08  ·  Fragen",title:"Shall we start together?",line:"The next step is yours.",photos:[{src:Ze("photos/ergo/office.jpg"),w:4.2,h:2.36,x:3.05,y:.75,z:-.5,ry:-.08}],cam:{x:-.35,y:.2,z:8.4,tx:1.5,ty:.22,tz:0},trail:!1}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="170",xp=0,Fc=1,Mp=2,ef=1,yp=2,zn=3,xi=0,Xe=1,Hn=2,Yn=0,_r=1,wr=2,Oc=3,Bc=4,Sp=5,Ui=100,Ep=101,Tp=102,bp=103,wp=104,Ap=200,Cp=201,Rp=202,Pp=203,Oo=204,Bo=205,Dp=206,Lp=207,Up=208,Ip=209,Np=210,Fp=211,Op=212,Bp=213,zp=214,zo=0,ko=1,Vo=2,Ar=3,Ho=4,Go=5,Wo=6,Xo=7,nf=0,kp=1,Vp=2,mi=0,Hp=1,Gp=2,Wp=3,rf=4,Xp=5,qp=6,Yp=7,sf=300,Cr=301,Rr=302,qo=303,Yo=304,Aa=306,Zo=1e3,Gn=1001,$o=1002,yn=1003,Zp=1004,Rs=1005,Cn=1006,Ha=1007,fi=1008,jn=1009,af=1010,of=1011,ps=1012,Yl=1013,ki=1014,Wn=1015,Zn=1016,Zl=1017,$l=1018,Pr=1020,lf=35902,cf=1021,uf=1022,Mn=1023,hf=1024,ff=1025,gr=1026,Dr=1027,df=1028,Kl=1029,pf=1030,Jl=1031,jl=1033,aa=33776,oa=33777,la=33778,ca=33779,Ko=35840,Jo=35841,jo=35842,Qo=35843,tl=36196,el=37492,nl=37496,il=37808,rl=37809,sl=37810,al=37811,ol=37812,ll=37813,cl=37814,ul=37815,hl=37816,fl=37817,dl=37818,pl=37819,ml=37820,_l=37821,ua=36492,gl=36494,vl=36495,mf=36283,xl=36284,Ml=36285,yl=36286,$p=3200,Kp=3201,_f=0,Jp=1,oi="",Ne="srgb",Nr="srgb-linear",Ca="linear",Jt="srgb",Yi=7680,zc=519,jp=512,Qp=513,tm=514,gf=515,em=516,nm=517,im=518,rm=519,kc=35044,Vc="300 es",Xn=2e3,xa=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const ts=Math.PI/180,ms=180/Math.PI;function Gi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function be(r,t,e){return Math.max(t,Math.min(e,r))}function Ql(r,t){return(r%t+t)%t}function sm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function am(r,t,e){return r!==t?(e-r)/(t-r):0}function es(r,t,e){return(1-e)*r+e*t}function om(r,t,e,n){return es(r,t,1-Math.exp(-e*n))}function lm(r,t=1){return t-Math.abs(Ql(r,t*2)-t)}function cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function um(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function hm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function fm(r,t){return r+Math.random()*(t-r)}function dm(r){return r*(.5-Math.random())}function pm(r){r!==void 0&&(Hc=r);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(r){return r*ts}function _m(r){return r*ms}function gm(r){return(r&r-1)===0&&r!==0}function vm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mm(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function or(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gc={DEG2RAD:ts,RAD2DEG:ms,generateUUID:Gi,clamp:be,euclideanModulo:Ql,mapLinear:sm,inverseLerp:am,lerp:es,damp:om,pingpong:lm,smoothstep:cm,smootherstep:um,randInt:hm,randFloat:fm,randFloatSpread:dm,seededRandom:pm,degToRad:mm,radToDeg:_m,isPowerOfTwo:gm,ceilPowerOfTwo:vm,floorPowerOfTwo:xm,setQuaternionFromProperEuler:Mm,normalize:Ue,denormalize:or};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],M=i[4],v=i[7],A=i[2],C=i[5],b=i[8];return s[0]=a*_+o*E+l*A,s[3]=a*m+o*M+l*C,s[6]=a*p+o*v+l*b,s[1]=c*_+u*E+h*A,s[4]=c*m+u*M+h*C,s[7]=c*p+u*v+h*b,s[2]=f*_+d*E+g*A,s[5]=f*m+d*M+g*C,s[8]=f*p+d*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Ot;function vf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ym(){const r=_s("canvas");return r.style.display="block",r}const Wc={};function $r(r){r in Wc||(Wc[r]=!0,console.warn(r))}function Sm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Em(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Ca:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function $n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],Zc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Nr]:{primaries:Xc,whitePoint:Yc,transfer:Ca,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Xc,whitePoint:Yc,transfer:Jt,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Zi;class bm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=_s("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wm=0;class xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wa(i[a].image)):s.push(Wa(i[a]))}else s=Wa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Am=0;class Le extends Fr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Gn,i=Gn,s=Cn,a=fi,o=Mn,l=jn,c=Le.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Gi(),this.name="",this.source=new xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=sf;Le.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,A=(p+1)/2,C=(u+f)/4,b=(h+_)/4,R=(g+m)/4;return M>v&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=C/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=R/s),this.set(n,i,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Cm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mf extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rm extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),C=Math.atan2(A,p*E);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const v=o*E;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new L,Kc=new ys;class Ss{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),Ds.subVectors(this.max,Vr),$i.subVectors(t.a,Vr),Ki.subVectors(t.b,Vr),Ji.subVectors(t.c,Vr),ei.subVectors(Ki,$i),ni.subVectors(Ji,Ki),Ti.subVectors($i,Ji);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ti.z,Ti.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ti.z,0,-Ti.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ti.y,Ti.x,0];return!qa(e,$i,Ki,Ji,Ds)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,$i,Ki,Ji,Ds))?!1:(Ls.crossVectors(ei,ni),e=[Ls.x,Ls.y,Ls.z],qa(e,$i,Ki,Ji,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,Ps=new Ss,$i=new L,Ki=new L,Ji=new L,ei=new L,ni=new L,Ti=new L,Vr=new L,Ds=new L,Ls=new L,bi=new L;function qa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pm=new Ss,Hr=new L,Ya=new L;class Es{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(Ya)),this.expandByPoint(Hr.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new L,Za=new L,Us=new L,ii=new L,$a=new L,Is=new L,Ka=new L;class Ra{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Za.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Za);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=ii.dot(this.direction),l=-ii.dot(Us),c=ii.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Za).addScaledVector(Us,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,s){$a.subVectors(e,t),Is.subVectors(n,t),Ka.crossVectors($a,Is);let a=this.direction.dot(Ka),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(ii,Is));if(l<0)return null;const c=o*this.direction.dot($a.cross(ii));if(c<0||l+c>a)return null;const u=-o*ii.dot(Ka);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dm,t,Lm)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ri.crossVectors(n,$e),ri.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ri.crossVectors(n,$e)),ri.normalize(),Ns.crossVectors($e,ri),i[0]=ri.x,i[4]=Ns.x,i[8]=$e.x,i[1]=ri.y,i[5]=Ns.y,i[9]=$e.y,i[2]=ri.z,i[6]=Ns.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],M=n[7],v=n[11],A=n[15],C=i[0],b=i[4],R=i[8],x=i[12],y=i[1],P=i[5],H=i[9],F=i[13],k=i[2],W=i[6],G=i[10],Y=i[14],V=i[3],rt=i[7],ot=i[11],vt=i[15];return s[0]=a*C+o*y+l*k+c*V,s[4]=a*b+o*P+l*W+c*rt,s[8]=a*R+o*H+l*G+c*ot,s[12]=a*x+o*F+l*Y+c*vt,s[1]=u*C+h*y+f*k+d*V,s[5]=u*b+h*P+f*W+d*rt,s[9]=u*R+h*H+f*G+d*ot,s[13]=u*x+h*F+f*Y+d*vt,s[2]=g*C+_*y+m*k+p*V,s[6]=g*b+_*P+m*W+p*rt,s[10]=g*R+_*H+m*G+p*ot,s[14]=g*x+_*F+m*Y+p*vt,s[3]=E*C+M*y+v*k+A*V,s[7]=E*b+M*P+v*W+A*rt,s[11]=E*R+M*H+v*G+A*ot,s[15]=E*x+M*F+v*Y+A*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,M=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,v=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,A=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,C=e*E+n*M+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=E*b,t[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*b,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*b,t[4]=M*b,t[5]=(u*m*s-g*f*s+g*i*d-e*m*d-u*i*p+e*f*p)*b,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*b,t[12]=A*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,E=l*c,M=l*u,v=l*h,A=n.x,C=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+v)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(f+p))*C,i[6]=(m+E)*C,i[7]=0,i[8]=(g+M)*b,i[9]=(m-E)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/s,u=1/a,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Xn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===Xn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xa)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Xn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(o===Xn)g=(a+s)*h,_=-2*h;else if(o===xa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new L,gn=new ee,Dm=new L(0,0,0),Lm=new L(1,1,1),ri=new L,Ns=new L,$e=new L,Jc=new ee,jc=new ys;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Um=0;const Qc=new L,Qi=new ys,Fn=new ee,Fs=new L,Gr=new L,Im=new L,Nm=new ys,tu=new L(1,0,0),eu=new L(0,1,0),nu=new L(0,0,1),iu={type:"added"},Fm={type:"removed"},tr={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Ee extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new L,e=new Pn,n=new ys,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ot}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gr,Fs,this.up):Fn.lookAt(Fs,Gr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fm),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,Im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new L(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new L,On=new L,ja=new L,Bn=new L,er=new L,nr=new L,ru=new L,Qa=new L,to=new L,eo=new L,no=new jt,io=new jt,ro=new jt;class xn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),On.subVectors(n,e),ja.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(On),l=vn.dot(ja),c=On.dot(On),u=On.dot(ja),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return no.setScalar(0),io.setScalar(0),ro.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(no,s.x),a.addScaledVector(io,s.y),a.addScaledVector(ro,s.z),a}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),On.subVectors(t,e),vn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),vn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;er.subVectors(i,n),nr.subVectors(s,n),Qa.subVectors(t,n);const l=er.dot(Qa),c=nr.dot(Qa);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,i);const u=er.dot(to),h=nr.dot(to);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(er,a);eo.subVectors(t,s);const d=er.dot(eo),g=nr.dot(eo);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(nr,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ru.subVectors(s,i),o=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(ru,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Os={h:0,s:0,l:0};function so(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Ql(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=so(a,s,t+1/3),this.g=so(a,s,t),this.b=so(a,s,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Wt.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ne){Wt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Os);const n=es(si.h,Os.h,e),i=es(si.s,Os.s,e),s=es(si.l,Os.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new kt;kt.NAMES=yf;let Om=0;class Wi extends Fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Gi(),this.name="",this.blending=_r,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xr extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,Bs=new dt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=or(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=or(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=or(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),t}}class Sf extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ef extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bm=0;const cn=new ee,ao=new Ee,ir=new L,Ke=new Ss,Wr=new Ss,ye=new L;class on extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vf(t)?Ef:Sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ke.min,Wr.min),Ke.expandByPoint(ye),ye.addVectors(Ke.max,Wr.max),Ke.expandByPoint(ye)):(Ke.expandByPoint(Wr.min),Ke.expandByPoint(Wr.max))}Ke.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),ye.add(ir)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;const c=new L,u=new L,h=new L,f=new dt,d=new dt,g=new dt,_=new L,m=new L;function p(R,x,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(_),o[x].add(_),o[y].add(_),l[R].add(m),l[x].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,x=E.length;R<x;++R){const y=E[R],P=y.start,H=y.count;for(let F=P,k=P+H;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new L,v=new L,A=new L,C=new L;function b(R){A.fromBufferAttribute(i,R),C.copy(A);const x=o[R];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(C,x);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,x=E.length;R<x;++R){const y=E[R],P=y.start,H=y.count;for(let F=P,k=P+H;F<k;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new ee,wi=new Ra,zs=new Es,au=new L,ks=new L,Vs=new L,Hs=new L,oo=new L,Gs=new L,ou=new L,Ws=new L;class ze extends Ee{constructor(t=new on,e=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(oo.fromBufferAttribute(h,t),a?Gs.addScaledVector(oo,u):Gs.addScaledVector(oo.sub(e),u))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(zs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(zs,au)===null||wi.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(su.copy(s).invert(),wi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=M;v<A;v+=3){const C=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);i=Xs(this,p,t,n,c,u,h,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=Xs(this,a,t,n,c,u,h,E,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=M;v<A;v+=3){const C=v,b=v+1,R=v+2;i=Xs(this,p,t,n,c,u,h,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,M=m+1,v=m+2;i=Xs(this,a,t,n,c,u,h,E,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zm(r,t,e,n,i,s,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===xi,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:r}}function Xs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ks),r.getVertexPosition(l,Vs),r.getVertexPosition(c,Hs);const u=zm(r,t,e,n,ks,Vs,Hs,ou);if(u){const h=new L;xn.getBarycoord(ou,ks,Vs,Hs,h),i&&(u.uv=xn.getInterpolatedAttribute(i,o,l,c,h,new dt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,h,new dt)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};xn.getNormal(ks,Vs,Hs,f.normal),u.face=f,u.barycoord=h}return u}class Ts extends on{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function g(_,m,p,E,M,v,A,C,b,R,x){const y=v/b,P=A/R,H=v/2,F=A/2,k=C/2,W=b+1,G=R+1;let Y=0,V=0;const rt=new L;for(let ot=0;ot<G;ot++){const vt=ot*P-F;for(let Dt=0;Dt<W;Dt++){const Xt=Dt*y-H;rt[_]=Xt*E,rt[m]=vt*M,rt[p]=k,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Dt/b),h.push(1-ot/R),Y+=1}}for(let ot=0;ot<R;ot++)for(let vt=0;vt<b;vt++){const Dt=f+vt+W*ot,Xt=f+vt+W*(ot+1),q=f+(vt+1)+W*(ot+1),Q=f+(vt+1)+W*ot;l.push(Dt,Xt,Q),l.push(Xt,q,Q),V+=6}o.addGroup(d,V,x),d+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=Lr(r[e]);for(const i in n)t[i]=n[i]}return t}function km(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Tf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Ma={clone:Lr,merge:Ie};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bf extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new L,lu=new dt,cu=new dt;class je extends bf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class Gm extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(rr,sr,t,e);i.layers=this.layers,this.add(i);const s=new je(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new je(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new je(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new je(rr,sr,t,e);l.layers=this.layers,this.add(l);const c=new je(rr,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wf extends Le{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wm extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ts(5,5,5),s=new ke({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Yn});s.uniforms.tEquirect.value=e;const a=new ze(i,s),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=Cn),new Gm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const lo=new L,Xm=new L,qm=new Ot;class Di{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lo.subVectors(n,e).cross(Xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qm.getNormalMatrix(t),i=this.coplanarPoint(lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Es,qs=new L;class ec{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+a,f+u,m+g,v+E).normalize(),n[3].setComponents(l-a,f-u,m-g,v-E).normalize(),n[4].setComponents(l-o,f-h,m-_,v-M).normalize(),e===Xn)n[5].setComponents(l+o,f+h,m+_,v+M).normalize();else if(e===xa)n[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qs.x=i.normal.x>0?t.max.x:t.min.x,qs.y=i.normal.y>0?t.max.y:t.min.y,qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Af(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ym(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ur extends on{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let M=0;M<c;M++){const v=M*h-s;g.push(v,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const M=E+c*p,v=E+c*(p+1),A=E+1+c*(p+1),C=E+1+c*p;d.push(M,v,C),d.push(v,A,C)}this.setIndex(d),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Zm,alphahash_pars_fragment:$m,alphamap_fragment:Km,alphamap_pars_fragment:Jm,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:t_,aomap_pars_fragment:e_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:a_,iridescence_fragment:o_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:f_,color_fragment:d_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:__,common:g_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:x_,displacementmap_pars_vertex:M_,displacementmap_vertex:y_,emissivemap_fragment:S_,emissivemap_pars_fragment:E_,colorspace_fragment:T_,colorspace_pars_fragment:b_,envmap_fragment:w_,envmap_common_pars_fragment:A_,envmap_pars_fragment:C_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:k_,envmap_vertex:P_,fog_vertex:D_,fog_pars_vertex:L_,fog_fragment:U_,fog_pars_fragment:I_,gradientmap_pars_fragment:N_,lightmap_pars_fragment:F_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:B_,lights_pars_begin:z_,lights_toon_fragment:V_,lights_toon_pars_fragment:H_,lights_phong_fragment:G_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:Y_,lights_fragment_maps:Z_,lights_fragment_end:$_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Q_,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:rg,metalnessmap_pars_fragment:sg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:ug,normal_fragment_begin:hg,normal_fragment_maps:fg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:Mg,opaque_fragment:yg,packing:Sg,premultiplied_alpha_fragment:Eg,project_vertex:Tg,dithering_fragment:bg,dithering_pars_fragment:wg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ug,skinning_pars_vertex:Ig,skinning_vertex:Ng,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Vg,transmission_pars_fragment:Hg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Kg,cube_vert:Jg,cube_frag:jg,depth_vert:Qg,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:r0,linedashed_vert:s0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:u0,meshmatcap_vert:h0,meshmatcap_frag:f0,meshnormal_vert:d0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:_0,meshphysical_vert:g0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:M0,points_vert:y0,points_frag:S0,shadow_vert:E0,shadow_frag:T0,sprite_vert:b0,sprite_frag:w0},at={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},bn={basic:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ie([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ie([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ie([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ie([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ie([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ie([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ie([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ie([at.lights,at.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};bn.physical={uniforms:Ie([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ys={r:0,b:0,g:0},Ci=new Pn,A0=new ee;function C0(r,t,e,n,i,s,a){const o=new kt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const v=g(E);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Aa)?(u===void 0&&(u=new ze(new Ts(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Lr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Ci)),u.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Jt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ze(new Ur(2,2),new ke({name:"BackgroundMaterial",uniforms:Lr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Ys,Tf(r)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m}}function R0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,P,H,F,k){let W=!1;const G=h(F,H,P);s!==G&&(s=G,c(s.object)),W=d(y,F,H,k),W&&g(y,F,H,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,P,H,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,P,H){const F=H.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let W=k[P.id];W===void 0&&(W={},k[P.id]=W);let G=W[F];return G===void 0&&(G=f(l()),W[F]=G),G}function f(y){const P=[],H=[],F=[];for(let k=0;k<e;k++)P[k]=0,H[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,P,H,F){const k=s.attributes,W=P.attributes;let G=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){const ot=k[V];let vt=W[V];if(vt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(y,P,H,F){const k={},W=P.attributes;let G=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){let ot=W[V];ot===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));const vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),k[V]=vt,G++}s.attributes=k,s.attributesNum=G,s.index=F}function _(){const y=s.newAttributes;for(let P=0,H=y.length;P<H;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const H=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;H[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),k[y]!==P&&(r.vertexAttribDivisor(y,P),k[y]=P)}function E(){const y=s.newAttributes,P=s.enabledAttributes;for(let H=0,F=P.length;H<F;H++)P[H]!==y[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function M(y,P,H,F,k,W,G){G===!0?r.vertexAttribIPointer(y,P,H,k,W):r.vertexAttribPointer(y,P,H,F,k,W)}function v(y,P,H,F){_();const k=F.attributes,W=H.getAttributes(),G=P.defaultAttributeValues;for(const Y in W){const V=W[Y];if(V.location>=0){let rt=k[Y];if(rt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ot=rt.normalized,vt=rt.itemSize,Dt=t.get(rt);if(Dt===void 0)continue;const Xt=Dt.buffer,q=Dt.type,Q=Dt.bytesPerElement,xt=q===r.INT||q===r.UNSIGNED_INT||rt.gpuType===Yl;if(rt.isInterleavedBufferAttribute){const lt=rt.data,Z=lt.stride,nt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let st=0;st<V.locationSize;st++)p(V.location+st,lt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let st=0;st<V.locationSize;st++)M(V.location+st,vt/V.locationSize,q,ot,Z*Q,(nt+vt/V.locationSize*st)*Q,xt)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let lt=0;lt<V.locationSize;lt++)M(V.location+lt,vt/V.locationSize,q,ot,vt*Q,vt/V.locationSize*lt*Q,xt)}}else if(G!==void 0){const ot=G[Y];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(V.location,ot);break;case 3:r.vertexAttrib3fv(V.location,ot);break;case 4:r.vertexAttrib4fv(V.location,ot);break;default:r.vertexAttrib1fv(V.location,ot)}}}}E()}function A(){R();for(const y in n){const P=n[y];for(const H in P){const F=P[H];for(const k in F)u(F[k].object),delete F[k];delete P[H]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const H in P){const F=P[H];for(const k in F)u(F[k].object),delete F[k];delete P[H]}delete n[y.id]}function b(y){for(const P in n){const H=n[P];if(H[y.id]===void 0)continue;const F=H[y.id];for(const k in F)u(F[k].object),delete F[k];delete H[y.id]}}function R(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function P0(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==Mn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==jn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!R)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function L0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Di,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,M=E*4;let v=p.clippingState||null;l.value=v,v=u(g,f,M,d);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function U0(r){let t=new WeakMap;function e(a,o){return o===qo?a.mapping=Cr:o===Yo&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Yo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class nc extends bf{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,uu=[.125,.215,.35,.446,.526,.582],Ii=20,co=new nc,hu=new kt;let uo=null,ho=0,fo=0,po=!1;const Li=(1+Math.sqrt(5))/2,ar=1/Li,fu=[new L(-Li,ar,0),new L(Li,ar,0),new L(-ar,0,Li),new L(ar,0,Li),new L(0,Li,-ar),new L(0,Li,ar),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class du{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,ho,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Zn,format:Mn,colorSpace:Nr,depthBuffer:!1},i=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=N0(s,t,e)}return i}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,i){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hu),u.toneMapping=mi,u.autoClear=!1;const d=new xr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new ze(new Ts,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(hu),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Zs(i,E*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cr||t.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fu[(i-s-1)%fu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let E=0;for(let b=0;b<Ii;++b){const R=b/_,x=Math.exp(-R*R/2);p.push(x),b===0?E+=x:b<m&&(E+=2*x)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[i],A=3*v*(i>M-ur?i-M+ur:0),C=4*(this._cubeSize-v);Zs(e,A,C,3*v,2*v),l.setRenderTarget(e),l.render(h,co)}}function I0(r){const t=[],e=[],n=[];let i=r;const s=r-ur+1+uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ur?l=uu[a-r+ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,R=C>2?0:-1,x=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];E.set(x,_*g*C),M.set(f,m*g*C);const y=[C,C,C,C,C,C];v.set(y,p*g*C)}const A=new on;A.setAttribute("position",new dn(E,_)),A.setAttribute("uv",new dn(M,m)),A.setAttribute("faceIndex",new dn(v,p)),t.push(A),i>ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(r,t,e){const n=new Sn(r,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function N0(r,t,e){const n=new Float32Array(Ii),i=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function mu(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function _u(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qo||l===Yo,u=l===Cr||l===Rr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new du(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new du(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function O0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function B0(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let M=0,v=E.length;M<v;M+=3){const A=E[M+0],C=E[M+1],b=E[M+2];f.push(A,C,C,b,b,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const A=M+0,C=M+1,b=M+2;f.push(A,C,C,b,b,A)}}else return;const m=new(vf(f)?Ef:Sf)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function z0(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function k0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V0(r,t,e){const n=new WeakMap,i=new jt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*C*4*h),R=new Mf(b,A,C,h);R.type=Wn,R.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const H=p[P],F=E[P],k=M[P],W=A*C*4*P;for(let G=0;G<H.count;G++){const Y=G*x;g===!0&&(i.fromBufferAttribute(H,G),b[W+Y+0]=i.x,b[W+Y+1]=i.y,b[W+Y+2]=i.z,b[W+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,G),b[W+Y+4]=i.x,b[W+Y+5]=i.y,b[W+Y+6]=i.z,b[W+Y+7]=0),m===!0&&(i.fromBufferAttribute(k,G),b[W+Y+8]=i.x,b[W+Y+9]=i.y,b[W+Y+10]=i.z,b[W+Y+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new dt(A,C)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function H0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Cf extends Le{constructor(t,e,n,i,s,a,o,l,c,u=gr){if(u!==gr&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gr&&(n=ki),n===void 0&&u===Dr&&(n=Pr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rf=new Le,gu=new Cf(1,1),Pf=new Mf,Df=new Rm,Lf=new wf,vu=[],xu=[],Mu=new Float32Array(16),yu=new Float32Array(9),Su=new Float32Array(4);function Or(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vu[i];if(s===void 0&&(s=new Float32Array(i),vu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pa(r,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function G0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function Y0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Su.set(n),r.uniformMatrix2fv(this.addr,!1,Su),Me(e,n)}}function Z0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;yu.set(n),r.uniformMatrix3fv(this.addr,!1,yu),Me(e,n)}}function $0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Mu.set(n),r.uniformMatrix4fv(this.addr,!1,Mu),Me(e,n)}}function K0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function J0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function Q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function tv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ev(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function iv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function rv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gu.compareFunction=gf,s=gu):s=Rf,e.setTexture2D(t||s,i)}function sv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Df,i)}function av(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lf,i)}function ov(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pf,i)}function lv(r){switch(r){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return j0;case 35669:case 35673:return Q0;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(r,t){r.uniform1fv(this.addr,t)}function uv(r,t){const e=Or(t,this.size,2);r.uniform2fv(this.addr,e)}function hv(r,t){const e=Or(t,this.size,3);r.uniform3fv(this.addr,e)}function fv(r,t){const e=Or(t,this.size,4);r.uniform4fv(this.addr,e)}function dv(r,t){const e=Or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function pv(r,t){const e=Or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function mv(r,t){const e=Or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _v(r,t){r.uniform1iv(this.addr,t)}function gv(r,t){r.uniform2iv(this.addr,t)}function vv(r,t){r.uniform3iv(this.addr,t)}function xv(r,t){r.uniform4iv(this.addr,t)}function Mv(r,t){r.uniform1uiv(this.addr,t)}function yv(r,t){r.uniform2uiv(this.addr,t)}function Sv(r,t){r.uniform3uiv(this.addr,t)}function Ev(r,t){r.uniform4uiv(this.addr,t)}function Tv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Rf,s[a])}function bv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Df,s[a])}function wv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Lf,s[a])}function Av(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Pf,s[a])}function Cv(r){switch(r){case 5126:return cv;case 35664:return uv;case 35665:return hv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return _v;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return Mv;case 36294:return yv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Av}}class Rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}}class Pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}}class Dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Eu(r,t){r.seq.push(t),r.map[t.id]=t}function Lv(r,t,e){const n=r.name,i=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Eu(e,c===void 0?new Rv(o,r,t):new Pv(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new Dv(o),Eu(e,h)),e=h}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Lv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Uv=37297;let Iv=0;function Nv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bu=new Ot;function Fv(r){Wt._getMatrix(bu,Wt.workingColorSpace,r);const t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(r)){case Ca:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function wu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Nv(r.getShaderSource(t),a)}else return i}function Ov(r,t){const e=Fv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bv(r,t){let e;switch(t){case Hp:e="Linear";break;case Gp:e="Reinhard";break;case Wp:e="Cineon";break;case rf:e="ACESFilmic";break;case qp:e="AgX";break;case Yp:e="Neutral";break;case Xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new L;function zv(){Wt.getLuminanceCoefficients($s);const r=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Vv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Kr(r){return r!==""}function Au(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(r){return r.replace(Gv,Xv)}const Wv=new Map;function Xv(r,t){let e=zt[t];if(e===void 0){const n=Wv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sl(e)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(r){return r.replace(qv,Yv)}function Yv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function $v(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cr:case Rr:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Jv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nf:t="ENVMAP_BLENDING_MULTIPLY";break;case kp:t="ENVMAP_BLENDING_MIX";break;case Vp:t="ENVMAP_BLENDING_ADD";break}return t}function jv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qv(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zv(e),c=$v(e),u=Kv(e),h=Jv(e),f=jv(e),d=kv(e),g=Vv(s),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?zt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Sl(a),a=Au(a,e),a=Cu(a,e),o=Sl(o),o=Au(o,e),o=Cu(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+a,v=E+p+o,A=Tu(i,i.VERTEX_SHADER,M),C=Tu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(C).trim();let W=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,C);else{const Y=wu(i,A,"vertex"),V=wu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Y+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||k==="")&&(G=!1);G&&(P.diagnostics={runnable:W,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(C),R=new ha(i,_),x=Hv(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Uv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let tx=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nx(t),e.set(t,n)),n}}class nx{constructor(t){this.id=tx++,this.code=t,this.usedTimes=0}}function ix(r,t,e,n,i,s,a){const o=new tc,l=new ex,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,H,F){const k=H.fog,W=F.geometry,G=x.isMeshStandardMaterial?H.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),V=Y&&Y.mapping===Aa?Y.image.height:null,rt=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=ot!==void 0?ot.length:0;let Dt=0;W.morphAttributes.position!==void 0&&(Dt=1),W.morphAttributes.normal!==void 0&&(Dt=2),W.morphAttributes.color!==void 0&&(Dt=3);let Xt,q,Q,xt;if(rt){const Kt=bn[rt];Xt=Kt.vertexShader,q=Kt.fragmentShader}else Xt=x.vertexShader,q=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),xt=l.getFragmentShaderID(x);const lt=r.getRenderTarget(),Z=r.state.buffers.depth.getReversed(),nt=F.isInstancedMesh===!0,st=F.isBatchedMesh===!0,bt=!!x.map,tt=!!x.matcap,Ut=!!Y,D=!!x.aoMap,de=!!x.lightMap,Rt=!!x.bumpMap,At=!!x.normalMap,wt=!!x.displacementMap,re=!!x.emissiveMap,Ct=!!x.metalnessMap,w=!!x.roughnessMap,S=x.anisotropy>0,O=x.clearcoat>0,K=x.dispersion>0,j=x.iridescence>0,$=x.sheen>0,Et=x.transmission>0,ut=S&&!!x.anisotropyMap,mt=O&&!!x.clearcoatMap,Gt=O&&!!x.clearcoatNormalMap,et=O&&!!x.clearcoatRoughnessMap,_t=j&&!!x.iridescenceMap,Pt=j&&!!x.iridescenceThicknessMap,Lt=$&&!!x.sheenColorMap,gt=$&&!!x.sheenRoughnessMap,Ht=!!x.specularMap,Bt=!!x.specularColorMap,ne=!!x.specularIntensityMap,U=Et&&!!x.transmissionMap,ct=Et&&!!x.thicknessMap,X=!!x.gradientMap,J=!!x.alphaMap,pt=x.alphaTest>0,ht=!!x.alphaHash,Nt=!!x.extensions;let pe=mi;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Ae={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:q,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:st,batchingColor:st&&F._colorsTexture!==null,instancing:nt,instancingColor:nt&&F.instanceColor!==null,instancingMorph:nt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Nr,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:tt,envMap:Ut,envMapMode:Ut&&Y.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:de,bumpMap:Rt,normalMap:At,displacementMap:f&&wt,emissiveMap:re,normalMapObjectSpace:At&&x.normalMapType===Jp,normalMapTangentSpace:At&&x.normalMapType===_f,metalnessMap:Ct,roughnessMap:w,anisotropy:S,anisotropyMap:ut,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:et,dispersion:K,iridescence:j,iridescenceMap:_t,iridescenceThicknessMap:Pt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Ht,specularColorMap:Bt,specularIntensityMap:ne,transmission:Et,transmissionMap:U,thicknessMap:ct,gradientMap:X,opaque:x.transparent===!1&&x.blending===_r&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:ht,combine:x.combine,mapUv:bt&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:de&&_(x.lightMap.channel),bumpMapUv:Rt&&_(x.bumpMap.channel),normalMapUv:At&&_(x.normalMap.channel),displacementMapUv:wt&&_(x.displacementMap.channel),emissiveMapUv:re&&_(x.emissiveMap.channel),metalnessMapUv:Ct&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:ut&&_(x.anisotropyMap.channel),clearcoatMapUv:mt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(x.sheenRoughnessMap.channel),specularMapUv:Ht&&_(x.specularMap.channel),specularColorMapUv:Bt&&_(x.specularColorMap.channel),specularIntensityMapUv:ne&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ct&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(At||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(bt||J),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:re&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&x.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(E(y,x),M(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function E(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const y=g[x.type];let P;if(y){const H=bn[y];P=Ma.clone(H.uniforms)}else P=x.uniforms;return P}function A(x,y){let P;for(let H=0,F=u.length;H<F;H++){const k=u[H];if(k.cacheKey===y){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Qv(r,y,x,s),u.push(P)),P}function C(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function rx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function sx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Du(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||sx),n.length>1&&n.sort(f||Du),i.length>1&&i.sort(f||Du)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function ax(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Lu,r.set(n,[a])):i>=s.length?(a=new Lu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function ox(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new kt};break;case"SpotLight":e={position:new L,direction:new L,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function lx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let cx=0;function ux(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hx(r){const t=new ox,e=lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new ee,a=new ee;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,M=0,v=0,A=0,C=0,b=0;c.sort(ux);for(let x=0,y=c.length;x<y;x++){const P=c[x],H=P.color,F=P.intensity,k=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*F,h+=H.g*F,f+=H.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);b++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(F),G.distance=k,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(H).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=b,n.version=cx++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Uu(r){const t=new hx(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Uu(r),t.set(i,[o])):s>=a.length?(o=new Uu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class dx extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class px extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gx(r,t,e){let n=new ec;const i=new dt,s=new dt,a=new jt,o=new dx({depthPacking:Kp}),l=new px,c={},u=e.maxTextureSize,h={[xi]:Xe,[Xe]:xi,[Hn]:Hn},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:mx,fragmentShader:_x}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const x=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=p!==zn&&this.type===zn,k=p===zn&&this.type!==zn;for(let W=0,G=C.length;W<G;W++){const Y=C[W],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const rt=V.getFrameExtents();if(i.multiply(rt),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||F===!0||k===!0){const vt=this.type!==zn?{minFilter:yn,magFilter:yn}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(i.x,i.y,vt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ot=V.getViewportCount();for(let vt=0;vt<ot;vt++){const Dt=V.getViewport(vt);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),H.viewport(a),V.updateMatrices(Y,vt),n=V.getFrustum(),v(b,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&E(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,y,P)};function E(C,b){const R=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(b,null,R,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(b,null,R,d,_,null)}function M(C,b,R,x){let y=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=y.uuid,F=b.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let W=k[F];W===void 0&&(W=y.clone(),k[F]=W,b.addEventListener("dispose",A)),y=W}if(y.visible=b.visible,y.wireframe=b.wireframe,x===zn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=r.properties.get(y);H.light=R}return y}function v(C,b,R,x,y){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=t.update(C),k=C.material;if(Array.isArray(k)){const W=F.groups;for(let G=0,Y=W.length;G<Y;G++){const V=W[G],rt=k[V.materialIndex];if(rt&&rt.visible){const ot=M(C,rt,x,y);C.onBeforeShadow(r,C,b,R,F,ot,V),r.renderBufferDirect(R,null,F,ot,C,V),C.onAfterShadow(r,C,b,R,F,ot,V)}}}else if(k.visible){const W=M(C,k,x,y);C.onBeforeShadow(r,C,b,R,F,W,null),r.renderBufferDirect(R,null,F,W,C,null),C.onAfterShadow(r,C,b,R,F,W,null)}}const H=C.children;for(let F=0,k=H.length;F<k;F++)v(H[F],b,R,x,y)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const x=c[R],y=C.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const vx={[zo]:ko,[Vo]:Wo,[Ho]:Xo,[Ar]:Go,[ko]:zo,[Wo]:Vo,[Xo]:Ho,[Go]:Ar};function xx(r,t){function e(){let U=!1;const ct=new jt;let X=null;const J=new jt(0,0,0,0);return{setMask:function(pt){X!==pt&&!U&&(r.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){U=pt},setClear:function(pt,ht,Nt,pe,Ae){Ae===!0&&(pt*=pe,ht*=pe,Nt*=pe),ct.set(pt,ht,Nt,pe),J.equals(ct)===!1&&(r.clearColor(pt,ht,Nt,pe),J.copy(ct))},reset:function(){U=!1,X=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,X=null,J=null,pt=null;return{setReversed:function(ht){if(ct!==ht){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const pe=pt;pt=null,this.setClear(pe)}ct=ht},getReversed:function(){return ct},setTest:function(ht){ht?lt(r.DEPTH_TEST):Z(r.DEPTH_TEST)},setMask:function(ht){X!==ht&&!U&&(r.depthMask(ht),X=ht)},setFunc:function(ht){if(ct&&(ht=vx[ht]),J!==ht){switch(ht){case zo:r.depthFunc(r.NEVER);break;case ko:r.depthFunc(r.ALWAYS);break;case Vo:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Ho:r.depthFunc(r.EQUAL);break;case Go:r.depthFunc(r.GEQUAL);break;case Wo:r.depthFunc(r.GREATER);break;case Xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ht}},setLocked:function(ht){U=ht},setClear:function(ht){pt!==ht&&(ct&&(ht=1-ht),r.clearDepth(ht),pt=ht)},reset:function(){U=!1,X=null,J=null,pt=null,ct=!1}}}function i(){let U=!1,ct=null,X=null,J=null,pt=null,ht=null,Nt=null,pe=null,Ae=null;return{setTest:function(Kt){U||(Kt?lt(r.STENCIL_TEST):Z(r.STENCIL_TEST))},setMask:function(Kt){ct!==Kt&&!U&&(r.stencilMask(Kt),ct=Kt)},setFunc:function(Kt,pn,Ln){(X!==Kt||J!==pn||pt!==Ln)&&(r.stencilFunc(Kt,pn,Ln),X=Kt,J=pn,pt=Ln)},setOp:function(Kt,pn,Ln){(ht!==Kt||Nt!==pn||pe!==Ln)&&(r.stencilOp(Kt,pn,Ln),ht=Kt,Nt=pn,pe=Ln)},setLocked:function(Kt){U=Kt},setClear:function(Kt){Ae!==Kt&&(r.clearStencil(Kt),Ae=Kt)},reset:function(){U=!1,ct=null,X=null,J=null,pt=null,ht=null,Nt=null,pe=null,Ae=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,M=null,v=null,A=null,C=null,b=new kt(0,0,0),R=0,x=!1,y=null,P=null,H=null,F=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Y>=2);let rt=null,ot={};const vt=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),Xt=new jt().fromArray(vt),q=new jt().fromArray(Dt);function Q(U,ct,X,J){const pt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(U,ht),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<X;Nt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(ct+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return ht}const xt={};xt[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(r.DEPTH_TEST),a.setFunc(Ar),Rt(!1),At(Fc),lt(r.CULL_FACE),D(Yn);function lt(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function Z(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function nt(U,ct){return h[U]!==ct?(r.bindFramebuffer(U,ct),h[U]=ct,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ct),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function st(U,ct){let X=d,J=!1;if(U){X=f.get(ct),X===void 0&&(X=[],f.set(ct,X));const pt=U.textures;if(X.length!==pt.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Nt=pt.length;ht<Nt;ht++)X[ht]=r.COLOR_ATTACHMENT0+ht;X.length=pt.length,J=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,J=!0);J&&r.drawBuffers(X)}function bt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const tt={[Ui]:r.FUNC_ADD,[Ep]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};tt[bp]=r.MIN,tt[wp]=r.MAX;const Ut={[Ap]:r.ZERO,[Cp]:r.ONE,[Rp]:r.SRC_COLOR,[Oo]:r.SRC_ALPHA,[Np]:r.SRC_ALPHA_SATURATE,[Up]:r.DST_COLOR,[Dp]:r.DST_ALPHA,[Pp]:r.ONE_MINUS_SRC_COLOR,[Bo]:r.ONE_MINUS_SRC_ALPHA,[Ip]:r.ONE_MINUS_DST_COLOR,[Lp]:r.ONE_MINUS_DST_ALPHA,[Fp]:r.CONSTANT_COLOR,[Op]:r.ONE_MINUS_CONSTANT_COLOR,[Bp]:r.CONSTANT_ALPHA,[zp]:r.ONE_MINUS_CONSTANT_ALPHA};function D(U,ct,X,J,pt,ht,Nt,pe,Ae,Kt){if(U===Yn){_===!0&&(Z(r.BLEND),_=!1);return}if(_===!1&&(lt(r.BLEND),_=!0),U!==Sp){if(U!==m||Kt!==x){if((p!==Ui||v!==Ui)&&(r.blendEquation(r.FUNC_ADD),p=Ui,v=Ui),Kt)switch(U){case _r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.ONE,r.ONE);break;case Oc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,M=null,A=null,C=null,b.set(0,0,0),R=0,m=U,x=Kt}return}pt=pt||ct,ht=ht||X,Nt=Nt||J,(ct!==p||pt!==v)&&(r.blendEquationSeparate(tt[ct],tt[pt]),p=ct,v=pt),(X!==E||J!==M||ht!==A||Nt!==C)&&(r.blendFuncSeparate(Ut[X],Ut[J],Ut[ht],Ut[Nt]),E=X,M=J,A=ht,C=Nt),(pe.equals(b)===!1||Ae!==R)&&(r.blendColor(pe.r,pe.g,pe.b,Ae),b.copy(pe),R=Ae),m=U,x=!1}function de(U,ct){U.side===Hn?Z(r.CULL_FACE):lt(r.CULL_FACE);let X=U.side===Xe;ct&&(X=!X),Rt(X),U.blending===_r&&U.transparent===!1?D(Yn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Z(r.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function At(U){U!==xp?(lt(r.CULL_FACE),U!==P&&(U===Fc?r.cullFace(r.BACK):U===Mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Z(r.CULL_FACE),P=U}function wt(U){U!==H&&(G&&r.lineWidth(U),H=U)}function re(U,ct,X){U?(lt(r.POLYGON_OFFSET_FILL),(F!==ct||k!==X)&&(r.polygonOffset(ct,X),F=ct,k=X)):Z(r.POLYGON_OFFSET_FILL)}function Ct(U){U?lt(r.SCISSOR_TEST):Z(r.SCISSOR_TEST)}function w(U){U===void 0&&(U=r.TEXTURE0+W-1),rt!==U&&(r.activeTexture(U),rt=U)}function S(U,ct,X){X===void 0&&(rt===null?X=r.TEXTURE0+W-1:X=rt);let J=ot[X];J===void 0&&(J={type:void 0,texture:void 0},ot[X]=J),(J.type!==U||J.texture!==ct)&&(rt!==X&&(r.activeTexture(X),rt=X),r.bindTexture(U,ct||xt[U]),J.type=U,J.texture=ct)}function O(){const U=ot[rt];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Xt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function gt(U){q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Ht(U,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let J=X.get(U);J===void 0&&(J=r.getUniformBlockIndex(ct,U.name),X.set(U,J))}function Bt(U,ct){const J=c.get(ct).get(U);l.get(ct)!==J&&(r.uniformBlockBinding(ct,J,U.__bindingPointIndex),l.set(ct,J))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},rt=null,ot={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,M=null,v=null,A=null,C=null,b=new kt(0,0,0),R=0,x=!1,y=null,P=null,H=null,F=null,k=null,Xt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:Z,bindFramebuffer:nt,drawBuffers:st,useProgram:bt,setBlending:D,setMaterial:de,setFlipSided:Rt,setCullFace:At,setLineWidth:wt,setPolygonOffset:re,setScissorTest:Ct,activeTexture:w,bindTexture:S,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:et,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Lt,viewport:gt,reset:ne}}function Iu(r,t,e,n){const i=Mx(n);switch(e){case cf:return r*t;case hf:return r*t;case ff:return r*t*2;case df:return r*t/i.components*i.byteLength;case Kl:return r*t/i.components*i.byteLength;case pf:return r*t*2/i.components*i.byteLength;case Jl:return r*t*2/i.components*i.byteLength;case uf:return r*t*3/i.components*i.byteLength;case Mn:return r*t*4/i.components*i.byteLength;case jl:return r*t*4/i.components*i.byteLength;case aa:case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Qo:return Math.max(r,16)*Math.max(t,8)/4;case Ko:case jo:return Math.max(r,8)*Math.max(t,8)/2;case tl:case el:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ua:case gl:case vl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case mf:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ml:case yl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mx(r){switch(r){case jn:case af:return{byteLength:1,components:1};case ps:case of:case Zn:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case ki:case Yl:case Wn:return{byteLength:4,components:1};case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function yx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return d?new OffscreenCanvas(w,S):_s("canvas")}function _(w,S,O){let K=1;const j=Ct(w);if((j.width>O||j.height>O)&&(K=O/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(K*j.width),Et=Math.floor(K*j.height);h===void 0&&(h=g($,Et));const ut=S?g($,Et):h;return ut.width=$,ut.height=Et,ut.getContext("2d").drawImage(w,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Et+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(w,S,O,K,j=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===r.RED&&(O===r.FLOAT&&($=r.R32F),O===r.HALF_FLOAT&&($=r.R16F),O===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.R8UI),O===r.UNSIGNED_SHORT&&($=r.R16UI),O===r.UNSIGNED_INT&&($=r.R32UI),O===r.BYTE&&($=r.R8I),O===r.SHORT&&($=r.R16I),O===r.INT&&($=r.R32I)),S===r.RG&&(O===r.FLOAT&&($=r.RG32F),O===r.HALF_FLOAT&&($=r.RG16F),O===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RG8UI),O===r.UNSIGNED_SHORT&&($=r.RG16UI),O===r.UNSIGNED_INT&&($=r.RG32UI),O===r.BYTE&&($=r.RG8I),O===r.SHORT&&($=r.RG16I),O===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGB8UI),O===r.UNSIGNED_SHORT&&($=r.RGB16UI),O===r.UNSIGNED_INT&&($=r.RGB32UI),O===r.BYTE&&($=r.RGB8I),O===r.SHORT&&($=r.RGB16I),O===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGBA8UI),O===r.UNSIGNED_SHORT&&($=r.RGBA16UI),O===r.UNSIGNED_INT&&($=r.RGBA32UI),O===r.BYTE&&($=r.RGBA8I),O===r.SHORT&&($=r.RGBA16I),O===r.INT&&($=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),S===r.RGBA){const Et=j?Ca:Wt.getTransfer(K);O===r.FLOAT&&($=r.RGBA32F),O===r.HALF_FLOAT&&($=r.RGBA16F),O===r.UNSIGNED_BYTE&&($=Et===Jt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(w,S){let O;return w?S===null||S===ki||S===Pr?O=r.DEPTH24_STENCIL8:S===Wn?O=r.DEPTH32F_STENCIL8:S===ps&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Pr?O=r.DEPTH_COMPONENT24:S===Wn?O=r.DEPTH_COMPONENT32F:S===ps&&(O=r.DEPTH_COMPONENT16),O}function A(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==yn&&w.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=w.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&u.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),y(S)}function R(w){const S=n.get(w);if(S.__webglInit===void 0)return;const O=w.source,K=f.get(O);if(K){const j=K[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(w),Object.keys(K).length===0&&f.delete(O)}n.remove(w)}function x(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const O=w.source,K=f.get(O);delete K[S.__cacheKey],a.memory.textures--}function y(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let j=0;j<S.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[K][j]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,j=O.length;K<j;K++){const $=n.get(O[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(w)}let P=0;function H(){P=0}function F(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function k(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function W(w,S){const O=n.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,S);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function G(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function Y(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,S);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function V(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Q(O,w,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const rt={[Zo]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},ot={[yn]:r.NEAREST,[Zp]:r.NEAREST_MIPMAP_NEAREST,[Rs]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},vt={[jp]:r.NEVER,[rm]:r.ALWAYS,[Qp]:r.LESS,[gf]:r.LEQUAL,[tm]:r.EQUAL,[im]:r.GEQUAL,[em]:r.GREATER,[nm]:r.NOTEQUAL};function Dt(w,S){if(S.type===Wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===Ha||S.magFilter===Rs||S.magFilter===fi||S.minFilter===Cn||S.minFilter===Ha||S.minFilter===Rs||S.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,rt[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,rt[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,rt[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ot[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==Rs&&S.minFilter!==fi||S.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const K=S.source;let j=f.get(K);j===void 0&&(j={},f.set(K,j));const $=k(S);if($!==w.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[$].usedTimes++;const Et=j[w.__cacheKey];Et!==void 0&&(j[w.__cacheKey].usedTimes--,Et.usedTimes===0&&x(S)),w.__cacheKey=$,w.__webglTexture=j[$].texture}return O}function q(w,S,O){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const j=Xt(w,S),$=S.source;e.bindTexture(K,w.__webglTexture,r.TEXTURE0+O);const Et=n.get($);if($.version!==Et.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const ut=Wt.getPrimaries(Wt.workingColorSpace),mt=S.colorSpace===oi?null:Wt.getPrimaries(S.colorSpace),Gt=S.colorSpace===oi||ut===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=_(S.image,!1,i.maxTextureSize);et=re(S,et);const _t=s.convert(S.format,S.colorSpace),Pt=s.convert(S.type);let Lt=M(S.internalFormat,_t,Pt,S.colorSpace,S.isVideoTexture);Dt(K,S);let gt;const Ht=S.mipmaps,Bt=S.isVideoTexture!==!0,ne=Et.__version===void 0||j===!0,U=$.dataReady,ct=A(S,et);if(S.isDepthTexture)Lt=v(S.format===Dr,S.type),ne&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Pt,null));else if(S.isDataTexture)if(Ht.length>0){Bt&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)gt=Ht[X],Bt?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,gt.width,gt.height,_t,Pt,gt.data):e.texImage2D(r.TEXTURE_2D,X,Lt,gt.width,gt.height,0,_t,Pt,gt.data);S.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,et.width,et.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,_t,Pt,et.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Pt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,Ht[0].width,Ht[0].height,et.depth);for(let X=0,J=Ht.length;X<J;X++)if(gt=Ht[X],S.format!==Mn)if(_t!==null)if(Bt){if(U)if(S.layerUpdates.size>0){const pt=Iu(gt.width,gt.height,S.format,S.type);for(const ht of S.layerUpdates){const Nt=gt.data.subarray(ht*pt/gt.data.BYTES_PER_ELEMENT,(ht+1)*pt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ht,gt.width,gt.height,1,_t,Nt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,_t,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Lt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,_t,Pt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Lt,gt.width,gt.height,et.depth,0,_t,Pt,gt.data)}else{Bt&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)gt=Ht[X],S.format!==Mn?_t!==null?Bt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,gt.width,gt.height,_t,Pt,gt.data):e.texImage2D(r.TEXTURE_2D,X,Lt,gt.width,gt.height,0,_t,Pt,gt.data)}else if(S.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,et.width,et.height,et.depth),U)if(S.layerUpdates.size>0){const X=Iu(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const pt=et.data.subarray(J*X/et.data.BYTES_PER_ELEMENT,(J+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,_t,Pt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,Pt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,_t,Pt,et.data);else if(S.isData3DTexture)Bt?(ne&&e.texStorage3D(r.TEXTURE_3D,ct,Lt,et.width,et.height,et.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,Pt,et.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,_t,Pt,et.data);else if(S.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(r.TEXTURE_2D,ct,Lt,et.width,et.height);else{let X=et.width,J=et.height;for(let pt=0;pt<ct;pt++)e.texImage2D(r.TEXTURE_2D,pt,Lt,X,J,0,_t,Pt,null),X>>=1,J>>=1}}else if(Ht.length>0){if(Bt&&ne){const X=Ct(Ht[0]);e.texStorage2D(r.TEXTURE_2D,ct,Lt,X.width,X.height)}for(let X=0,J=Ht.length;X<J;X++)gt=Ht[X],Bt?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,_t,Pt,gt):e.texImage2D(r.TEXTURE_2D,X,Lt,_t,Pt,gt);S.generateMipmaps=!1}else if(Bt){if(ne){const X=Ct(et);e.texStorage2D(r.TEXTURE_2D,ct,Lt,X.width,X.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Pt,et)}else e.texImage2D(r.TEXTURE_2D,0,Lt,_t,Pt,et);m(S)&&p(K),Et.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,O){if(S.image.length!==6)return;const K=Xt(w,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const $=n.get(j);if(j.version!==$.__version||K===!0){e.activeTexture(r.TEXTURE0+O);const Et=Wt.getPrimaries(Wt.workingColorSpace),ut=S.colorSpace===oi?null:Wt.getPrimaries(S.colorSpace),mt=S.colorSpace===oi||Et===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Gt&&!et?_t[J]=_(S.image[J],!0,i.maxCubemapSize):_t[J]=et?S.image[J].image:S.image[J],_t[J]=re(S,_t[J]);const Pt=_t[0],Lt=s.convert(S.format,S.colorSpace),gt=s.convert(S.type),Ht=M(S.internalFormat,Lt,gt,S.colorSpace),Bt=S.isVideoTexture!==!0,ne=$.__version===void 0||K===!0,U=j.dataReady;let ct=A(S,Pt);Dt(r.TEXTURE_CUBE_MAP,S);let X;if(Gt){Bt&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ht,Pt.width,Pt.height);for(let J=0;J<6;J++){X=_t[J].mipmaps;for(let pt=0;pt<X.length;pt++){const ht=X[pt];S.format!==Mn?Lt!==null?Bt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Ht,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ht.width,ht.height,Lt,gt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Ht,ht.width,ht.height,0,Lt,gt,ht.data)}}}else{if(X=S.mipmaps,Bt&&ne){X.length>0&&ct++;const J=Ct(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(et){Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Lt,gt,_t[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,_t[J].width,_t[J].height,0,Lt,gt,_t[J].data);for(let pt=0;pt<X.length;pt++){const Nt=X[pt].image[J].image;Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt.width,Nt.height,Lt,gt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Ht,Nt.width,Nt.height,0,Lt,gt,Nt.data)}}else{Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,gt,_t[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Lt,gt,_t[J]);for(let pt=0;pt<X.length;pt++){const ht=X[pt];Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Lt,gt,ht.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Ht,Lt,gt,ht.image[J])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),$.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xt(w,S,O,K,j,$){const Et=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),mt=M(O.internalFormat,Et,ut,O.colorSpace),Gt=n.get(S),et=n.get(O);if(et.__renderTarget=S,!Gt.__hasExternalTextures){const _t=Math.max(1,S.width>>$),Pt=Math.max(1,S.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,$,mt,_t,Pt,S.depth,0,Et,ut,null):e.texImage2D(j,$,mt,_t,Pt,0,Et,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),At(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,et.__webglTexture,0,Rt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,et.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(w,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const K=S.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=v(S.stencilBuffer,j),Et=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=Rt(S);At(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,$,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,w)}else{const K=S.textures;for(let j=0;j<K.length;j++){const $=K[j],Et=s.convert($.format,$.colorSpace),ut=s.convert($.type),mt=M($.internalFormat,Et,ut,$.colorSpace),Gt=Rt(S);O&&At(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,mt,S.width,S.height):At(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,mt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,mt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Z(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const j=K.__webglTexture,$=Rt(S);if(S.depthTexture.format===gr)At(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===Dr)At(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function nt(w){const S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=K}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),lt(S.__webglDepthbuffer[K],w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),lt(S.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(w,S,O){const K=n.get(w);S!==void 0&&xt(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&nt(w)}function bt(w){const S=w.texture,O=n.get(w),K=n.get(S);w.addEventListener("dispose",b);const j=w.textures,$=w.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let mt=0;mt<S.mipmaps.length;mt++)O.__webglFramebuffer[ut][mt]=r.createFramebuffer()}else O.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)O.__webglFramebuffer[ut]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ut=0,mt=j.length;ut<mt;ut++){const Gt=n.get(j[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&At(w)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){const mt=j[ut];O.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Gt=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),_t=M(mt.internalFormat,Gt,et,mt.colorSpace,w.isXRRenderTarget===!0),Pt=Rt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,_t,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)xt(O.__webglFramebuffer[ut][mt],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else xt(O.__webglFramebuffer[ut],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,mt=j.length;ut<mt;ut++){const Gt=j[ut],et=n.get(Gt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),Dt(r.TEXTURE_2D,Gt),xt(O.__webglFramebuffer,w,Gt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),m(Gt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),Dt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)xt(O.__webglFramebuffer[mt],w,S,r.COLOR_ATTACHMENT0,ut,mt);else xt(O.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}w.depthBuffer&&nt(w)}function tt(w){const S=w.textures;for(let O=0,K=S.length;O<K;O++){const j=S[O];if(m(j)){const $=E(w),Et=n.get(j).__webglTexture;e.bindTexture($,Et),p($),e.unbindTexture()}}}const Ut=[],D=[];function de(w){if(w.samples>0){if(At(w)===!1){const S=w.textures,O=w.width,K=w.height;let j=r.COLOR_BUFFER_BIT;const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(w),ut=S.length>1;if(ut)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const Gt=n.get(S[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,j,r.NEAREST),l===!0&&(Ut.length=0,D.length=0,Ut.push(r.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ut.push($),D.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const Gt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Rt(w){return Math.min(i.maxSamples,w.samples)}function At(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function re(w,S){const O=w.colorSpace,K=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Nr&&O!==oi&&(Wt.getTransfer(O)===Jt?(K!==Mn||j!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=At}function Sx(r,t){function e(n,i=oi){let s;const a=Wt.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===Zl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return r.BYTE;if(n===of)return r.SHORT;if(n===ps)return r.UNSIGNED_SHORT;if(n===Yl)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===cf)return r.ALPHA;if(n===uf)return r.RGB;if(n===Mn)return r.RGBA;if(n===hf)return r.LUMINANCE;if(n===ff)return r.LUMINANCE_ALPHA;if(n===gr)return r.DEPTH_COMPONENT;if(n===Dr)return r.DEPTH_STENCIL;if(n===df)return r.RED;if(n===Kl)return r.RED_INTEGER;if(n===pf)return r.RG;if(n===Jl)return r.RG_INTEGER;if(n===jl)return r.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Jo||n===jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===el||n===nl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===el)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===_l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===il)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===gl||n===vl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ua)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===xl||n===Ml||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Ex extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hr extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:bx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends Fr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Ax,m=e.getContextAttributes();let p=null,E=null;const M=[],v=[],A=new dt;let C=null;const b=new je;b.viewport=new jt;const R=new je;R.viewport=new jt;const x=[b,R],y=new Ex;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=M[q];return Q===void 0&&(Q=new _o,M[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=M[q];return Q===void 0&&(Q=new _o,M[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=M[q];return Q===void 0&&(Q=new _o,M[q]=Q),Q.getHandSpace()};function F(q){const Q=v.indexOf(q.inputSource);if(Q===-1)return;const xt=M[Q];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",W);for(let q=0;q<M.length;q++){const Q=v[q];Q!==null&&(v[q]=null,M[q].disconnect(Q))}P=null,H=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Sn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Dr:gr,xt=m.stencil?Pr:ki);const Z={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Sn(f.textureWidth,f.textureHeight,{format:Mn,type:jn,depthTexture:new Cf(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(q){for(let Q=0;Q<q.removed.length;Q++){const xt=q.removed[Q],lt=v.indexOf(xt);lt>=0&&(v[lt]=null,M[lt].disconnect(xt))}for(let Q=0;Q<q.added.length;Q++){const xt=q.added[Q];let lt=v.indexOf(xt);if(lt===-1){for(let nt=0;nt<M.length;nt++)if(nt>=v.length){v.push(xt),lt=nt;break}else if(v[nt]===null){v[nt]=xt,lt=nt;break}if(lt===-1)break}const Z=M[lt];Z&&Z.connect(xt)}}const G=new L,Y=new L;function V(q,Q,xt){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const lt=G.distanceTo(Y),Z=Q.projectionMatrix.elements,nt=xt.projectionMatrix.elements,st=Z[14]/(Z[10]-1),bt=Z[14]/(Z[10]+1),tt=(Z[9]+1)/Z[5],Ut=(Z[9]-1)/Z[5],D=(Z[8]-1)/Z[0],de=(nt[8]+1)/nt[0],Rt=st*D,At=st*de,wt=lt/(-D+de),re=wt*-D;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Z[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ct=st+wt,w=bt+wt,S=Rt-re,O=At+(lt-re),K=tt*bt/w*Ct,j=Ut*bt/w*Ct;q.projectionMatrix.makePerspective(S,O,K,j,Ct,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,xt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),y.near=R.near=b.near=Q,y.far=R.far=b.far=xt,(P!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,H=y.far),b.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,y.layers.mask=b.layers.mask|R.layers.mask;const lt=q.parent,Z=y.cameras;rt(y,lt);for(let nt=0;nt<Z.length;nt++)rt(Z[nt],lt);Z.length===2?V(y,b,R):y.projectionMatrix.copy(b.projectionMatrix),ot(q,y,lt)};function ot(q,Q,xt){xt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let vt=null;function Dt(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let lt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let nt=0;nt<xt.length;nt++){const st=xt[nt];let bt=null;if(d!==null)bt=d.getViewport(st);else{const Ut=h.getViewSubImage(f,st);bt=Ut.viewport,nt===0&&(t.setRenderTargetTextures(E,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(E))}let tt=x[nt];tt===void 0&&(tt=new je,tt.layers.enable(nt),tt.viewport=new jt,x[nt]=tt),tt.matrix.fromArray(st.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(st.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(bt.x,bt.y,bt.width,bt.height),nt===0&&(y.matrix.copy(tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(tt)}const Z=i.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const nt=h.getDepthInformation(xt[0]);nt&&nt.isValid&&nt.texture&&_.init(t,nt,i.renderState)}}for(let xt=0;xt<M.length;xt++){const lt=v[xt],Z=M[xt];lt!==null&&Z!==void 0&&Z.update(lt,Q,c||a)}vt&&vt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Xt=new Af;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const Ri=new Pn,Rx=new ee;function Px(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(Ri)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=i[E.id];v===void 0&&(g(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(E,A);const C=t.render.frame;s[E.id]!==C&&(f(E),s[E.id]=C)}function u(E){const M=h();E.__bindingPointIndex=M;const v=r.createBuffer(),A=E.__size,C=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],v=E.uniforms,A=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let C=0,b=v.length;C<b;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,y=R.length;x<y;x++){const P=R[x];if(d(P,C,x,A)===!0){const H=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let W=0;W<F.length;W++){const G=F[W],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,H+k,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,M,v,A){const C=E.value,b=M+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(E){const M=E.uniforms;let v=0;const A=16;for(let b=0,R=M.length;b<R;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,P=x.length;y<P;y++){const H=x[y],F=Array.isArray(H.value)?H.value:[H.value];for(let k=0,W=F.length;k<W;k++){const G=F[k],Y=_(G),V=v%A,rt=V%Y.boundary,ot=V+rt;v+=rt,ot!==0&&A-ot<Y.storage&&(v+=A-ot),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=Y.storage}}}const C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Lx{constructor(t={}){const{canvas:e=ym(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let A=!1,C=0,b=0,R=null,x=-1,y=null;const P=new jt,H=new jt;let F=null;const k=new kt(0);let W=0,G=e.width,Y=e.height,V=1,rt=null,ot=null;const vt=new jt(0,0,G,Y),Dt=new jt(0,0,G,Y);let Xt=!1;const q=new ec;let Q=!1,xt=!1;const lt=new ee,Z=new ee,nt=new L,st=new jt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ut(){return R===null?V:1}let D=n;function de(T,I){return e.getContext(T,I)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ql}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const I="webgl2";if(D=de(I,T),D===null)throw de(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Rt,At,wt,re,Ct,w,S,O,K,j,$,Et,ut,mt,Gt,et,_t,Pt,Lt,gt,Ht,Bt,ne,U;function ct(){Rt=new O0(D),Rt.init(),Bt=new Sx(D,Rt),At=new D0(D,Rt,t,Bt),wt=new xx(D,Rt),At.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),re=new k0(D),Ct=new rx,w=new yx(D,Rt,wt,Ct,At,Bt,re),S=new U0(v),O=new F0(v),K=new Ym(D),ne=new R0(D,K),j=new B0(D,K,re,ne),$=new H0(D,j,K,re),Lt=new V0(D,At,w),et=new L0(Ct),Et=new ix(v,S,O,Rt,At,ne,et),ut=new Px(v,Ct),mt=new ax,Gt=new fx(Rt),Pt=new C0(v,S,O,wt,$,d,l),_t=new gx(v,$,At),U=new Dx(D,re,At,wt),gt=new P0(D,Rt,re),Ht=new z0(D,Rt,re),re.programs=Et.programs,v.capabilities=At,v.extensions=Rt,v.properties=Ct,v.renderLists=mt,v.shadowMap=_t,v.state=wt,v.info=re}ct();const X=new Cx(v,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,I,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=I,e.width=Math.floor(T*V),e.height=Math.floor(I*V),B===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(T,I,B){G=T,Y=I,V=B,e.width=Math.floor(T*B),e.height=Math.floor(I*B),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,I,B,z){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,I,B,z),wt.viewport(P.copy(vt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,I,B,z){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,I,B,z),wt.scissor(H.copy(Dt).multiplyScalar(V).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(T){wt.setScissorTest(Xt=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,I=!0,B=!0){let z=0;if(T){let N=!1;if(R!==null){const it=R.texture.format;N=it===jl||it===Jl||it===Kl}if(N){const it=R.texture.type,ft=it===jn||it===ki||it===ps||it===Pr||it===Zl||it===$l,Mt=Pt.getClearColor(),yt=Pt.getClearAlpha(),It=Mt.r,Ft=Mt.g,St=Mt.b;ft?(g[0]=It,g[1]=Ft,g[2]=St,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=St,_[3]=yt,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Gt.dispose(),Ct.dispose(),S.dispose(),O.dispose(),$.dispose(),ne.dispose(),U.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",uc),X.removeEventListener("sessionend",hc),yi.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=re.autoReset,I=_t.enabled,B=_t.autoUpdate,z=_t.needsUpdate,N=_t.type;ct(),re.autoReset=T,_t.enabled=I,_t.autoUpdate=B,_t.needsUpdate=z,_t.type=N}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const I=T.target;I.removeEventListener("dispose",Nt),pe(I)}function pe(T){Ae(T),Ct.remove(T)}function Ae(T){const I=Ct.get(T).programs;I!==void 0&&(I.forEach(function(B){Et.releaseProgram(B)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,B,z,N,it){I===null&&(I=bt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Kf(T,I,B,z,N);wt.setMaterial(z,ft);let yt=B.index,It=1;if(z.wireframe===!0){if(yt=j.getWireframeAttribute(B),yt===void 0)return;It=2}const Ft=B.drawRange,St=B.attributes.position;let qt=Ft.start*It,ie=(Ft.start+Ft.count)*It;it!==null&&(qt=Math.max(qt,it.start*It),ie=Math.min(ie,(it.start+it.count)*It)),yt!==null?(qt=Math.max(qt,0),ie=Math.min(ie,yt.count)):St!=null&&(qt=Math.max(qt,0),ie=Math.min(ie,St.count));const se=ie-qt;if(se<0||se===1/0)return;ne.setup(N,z,Mt,B,yt);let Oe,Zt=gt;if(yt!==null&&(Oe=K.get(yt),Zt=Ht,Zt.setIndex(Oe)),N.isMesh)z.wireframe===!0?(wt.setLineWidth(z.wireframeLinewidth*Ut()),Zt.setMode(D.LINES)):Zt.setMode(D.TRIANGLES);else if(N.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),wt.setLineWidth(Tt*Ut()),N.isLineSegments?Zt.setMode(D.LINES):N.isLineLoop?Zt.setMode(D.LINE_LOOP):Zt.setMode(D.LINE_STRIP)}else N.isPoints?Zt.setMode(D.POINTS):N.isSprite&&Zt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,Un=N._multiDrawCounts,$t=N._multiDrawCount,mn=yt?K.get(yt).bytesPerElement:1,Xi=Ct.get(z).currentProgram.getUniforms();for(let Ye=0;Ye<$t;Ye++)Xi.setValue(D,"_gl_DrawID",Ye),Zt.render(Tt[Ye]/mn,Un[Ye])}else if(N.isInstancedMesh)Zt.renderInstances(qt,se,N.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Un=Math.min(B.instanceCount,Tt);Zt.renderInstances(qt,se,Un)}else Zt.render(qt,se)};function Kt(T,I,B){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=Xe,T.needsUpdate=!0,As(T,I,B),T.side=xi,T.needsUpdate=!0,As(T,I,B),T.side=Hn):As(T,I,B)}this.compile=function(T,I,B=null){B===null&&(B=T),p=Gt.get(B),p.init(I),M.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const Mt=it[ft];Kt(Mt,B,N),z.add(Mt)}else Kt(it,B,N),z.add(it)}),M.pop(),p=null,z},this.compileAsync=function(T,I,B=null){const z=this.compile(T,I,B);return new Promise(N=>{function it(){if(z.forEach(function(ft){Ct.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){N(T);return}setTimeout(it,10)}Rt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let pn=null;function Ln(T){pn&&pn(T)}function uc(){yi.stop()}function hc(){yi.start()}const yi=new Af;yi.setAnimationLoop(Ln),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(T){pn=T,X.setAnimationLoop(T),T===null?yi.stop():yi.start()},X.addEventListener("sessionstart",uc),X.addEventListener("sessionend",hc),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,R),p=Gt.get(T,M.length),p.init(I),M.push(p),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Z),xt=this.localClippingEnabled,Q=et.init(this.clippingPlanes,xt),m=mt.get(T,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Ua(it,I,-1/0,v.sortObjects)}Ua(T,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,ot),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&Pt.addToRenderList(m,T),this.info.render.frame++,Q===!0&&et.beginShadows();const B=p.state.shadowsArray;_t.render(B,T,I),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){const it=I.cameras;if(N.length>0)for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];dc(z,N,T,yt)}tt&&Pt.render(T);for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];fc(m,T,yt,yt.viewport)}}else N.length>0&&dc(z,N,T,I),tt&&Pt.render(T),fc(m,T,I);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,I),ne.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ua(T,I,B,z){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){z&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const ft=$.update(T),Mt=T.material;Mt.visible&&m.push(T,ft,Mt,B,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const ft=$.update(T),Mt=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),st.copy(ft.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(Mt)){const yt=ft.groups;for(let It=0,Ft=yt.length;It<Ft;It++){const St=yt[It],qt=Mt[St.materialIndex];qt&&qt.visible&&m.push(T,ft,qt,B,st.z,St)}}else Mt.visible&&m.push(T,ft,Mt,B,st.z,null)}}const it=T.children;for(let ft=0,Mt=it.length;ft<Mt;ft++)Ua(it[ft],I,B,z)}function fc(T,I,B,z){const N=T.opaque,it=T.transmissive,ft=T.transparent;p.setupLightsView(B),Q===!0&&et.setGlobalState(v.clippingPlanes,B),z&&wt.viewport(P.copy(z)),N.length>0&&ws(N,I,B),it.length>0&&ws(it,I,B),ft.length>0&&ws(ft,I,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function dc(T,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Sn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Zn:jn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const it=p.state.transmissionRenderTarget[z.id],ft=z.viewport||P;it.setSize(ft.z,ft.w);const Mt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Pt.render(B);const yt=v.toneMapping;v.toneMapping=mi;const It=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Q===!0&&et.setGlobalState(v.clippingPlanes,z),ws(T,B,z),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,qt=I.length;St<qt;St++){const ie=I[St],se=ie.object,Oe=ie.geometry,Zt=ie.material,Tt=ie.group;if(Zt.side===Hn&&se.layers.test(z.layers)){const Un=Zt.side;Zt.side=Xe,Zt.needsUpdate=!0,pc(se,B,z,Oe,Zt,Tt),Zt.side=Un,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}v.setRenderTarget(Mt),v.setClearColor(k,W),It!==void 0&&(z.viewport=It),v.toneMapping=yt}function ws(T,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let N=0,it=T.length;N<it;N++){const ft=T[N],Mt=ft.object,yt=ft.geometry,It=z===null?ft.material:z,Ft=ft.group;Mt.layers.test(B.layers)&&pc(Mt,I,B,yt,It,Ft)}}function pc(T,I,B,z,N,it){T.onBeforeRender(v,I,B,z,N,it),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,I,B,z,T,it),N.transparent===!0&&N.side===Hn&&N.forceSinglePass===!1?(N.side=Xe,N.needsUpdate=!0,v.renderBufferDirect(B,I,z,N,T,it),N.side=xi,N.needsUpdate=!0,v.renderBufferDirect(B,I,z,N,T,it),N.side=Hn):v.renderBufferDirect(B,I,z,N,T,it),T.onAfterRender(v,I,B,z,N,it)}function As(T,I,B){I.isScene!==!0&&(I=bt);const z=Ct.get(T),N=p.state.lights,it=p.state.shadowsArray,ft=N.state.version,Mt=Et.getParameters(T,N.state,it,I,B),yt=Et.getProgramCacheKey(Mt);let It=z.programs;z.environment=T.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(T.isMeshStandardMaterial?O:S).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Nt),It=new Map,z.programs=It);let Ft=It.get(yt);if(Ft!==void 0){if(z.currentProgram===Ft&&z.lightsStateVersion===ft)return _c(T,Mt),Ft}else Mt.uniforms=Et.getUniforms(T),T.onBeforeCompile(Mt,v),Ft=Et.acquireProgram(Mt,yt),It.set(yt,Ft),z.uniforms=Mt.uniforms;const St=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(St.clippingPlanes=et.uniform),_c(T,Mt),z.needsLights=jf(T),z.lightsStateVersion=ft,z.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ft,z.uniformsList=null,Ft}function mc(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function _c(T,I){const B=Ct.get(T);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Kf(T,I,B,z,N){I.isScene!==!0&&(I=bt),w.resetTextureUnits();const it=I.fog,ft=z.isMeshStandardMaterial?I.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nr,yt=(z.isMeshStandardMaterial?O:S).get(z.envMap||ft),It=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,ie=!!B.morphAttributes.color;let se=mi;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(se=v.toneMapping);const Oe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Oe!==void 0?Oe.length:0,Tt=Ct.get(z),Un=p.state.lights;if(Q===!0&&(xt===!0||T!==y)){const ln=T===y&&z.id===x;et.setState(z,T,ln)}let $t=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Un.state.version||Tt.outputColorSpace!==Mt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==yt||z.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==It||Tt.vertexTangents!==Ft||Tt.morphTargets!==St||Tt.morphNormals!==qt||Tt.morphColors!==ie||Tt.toneMapping!==se||Tt.morphTargetsCount!==Zt)&&($t=!0):($t=!0,Tt.__version=z.version);let mn=Tt.currentProgram;$t===!0&&(mn=As(z,I,N));let Xi=!1,Ye=!1,Br=!1;const ae=mn.getUniforms(),En=Tt.uniforms;if(wt.useProgram(mn.program)&&(Xi=!0,Ye=!0,Br=!0),z.id!==x&&(x=z.id,Ye=!0),Xi||y!==T){wt.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),Em(lt),Tm(lt),ae.setValue(D,"projectionMatrix",lt)):ae.setValue(D,"projectionMatrix",T.projectionMatrix),ae.setValue(D,"viewMatrix",T.matrixWorldInverse);const Qn=ae.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,nt.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ae.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Ye=!0,Br=!0)}if(N.isSkinnedMesh){ae.setOptional(D,N,"bindMatrix"),ae.setOptional(D,N,"bindMatrixInverse");const ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ae.setValue(D,"boneTexture",ln.boneTexture,w))}N.isBatchedMesh&&(ae.setOptional(D,N,"batchingTexture"),ae.setValue(D,"batchingTexture",N._matricesTexture,w),ae.setOptional(D,N,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",N._indirectTexture,w),ae.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",N._colorsTexture,w));const zr=B.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Lt.update(N,B,mn),(Ye||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,ae.setValue(D,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(En.envMap.value=yt,En.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(En.envMapIntensity.value=I.environmentIntensity),Ye&&(ae.setValue(D,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Jf(En,Br),it&&z.fog===!0&&ut.refreshFogUniforms(En,it),ut.refreshMaterialUniforms(En,z,V,Y,p.state.transmissionRenderTarget[T.id]),ha.upload(D,mc(Tt),En,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ha.upload(D,mc(Tt),En,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ae.setValue(D,"center",N.center),ae.setValue(D,"modelViewMatrix",N.modelViewMatrix),ae.setValue(D,"normalMatrix",N.normalMatrix),ae.setValue(D,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ln=z.uniformsGroups;for(let Qn=0,ti=ln.length;Qn<ti;Qn++){const gc=ln[Qn];U.update(gc,mn),U.bind(gc,mn)}}return mn}function Jf(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function jf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,I,B){Ct.get(T.texture).__webglTexture=I,Ct.get(T.depthTexture).__webglTexture=B;const z=Ct.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const B=Ct.get(T);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,B=0){R=T,C=I,b=B;let z=!0,N=null,it=!1,ft=!1;if(T){const yt=Ct.get(T);if(yt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(yt.__hasExternalTextures)w.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const St=T.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(T.width!==St.image.width||T.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ft=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[I])?N=Ft[I][B]:N=Ft[I],it=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?N=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[B]:N=Ft,P.copy(T.viewport),H.copy(T.scissor),F=T.scissorTest}else P.copy(vt).multiplyScalar(V).floor(),H.copy(Dt).multiplyScalar(V).floor(),F=Xt;if(wt.bindFramebuffer(D.FRAMEBUFFER,N)&&z&&wt.drawBuffers(T,N),wt.viewport(P),wt.scissor(H),wt.setScissorTest(F),it){const yt=Ct.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,B)}else if(ft){const yt=Ct.get(T.texture),It=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,It)}x=-1},this.readRenderTargetPixels=function(T,I,B,z,N,it,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){wt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const yt=T.texture,It=yt.format,Ft=yt.type;if(!At.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-z&&B>=0&&B<=T.height-N&&D.readPixels(I,B,z,N,Bt.convert(It),Bt.convert(Ft),it)}finally{const yt=R!==null?Ct.get(R).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,I,B,z,N,it,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=T.texture,It=yt.format,Ft=yt.type;if(!At.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-z&&B>=0&&B<=T.height-N){wt.bindFramebuffer(D.FRAMEBUFFER,Mt);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(I,B,z,N,Bt.convert(It),Bt.convert(Ft),0);const qt=R!==null?Ct.get(R).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,qt);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sm(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(St),D.deleteSync(ie),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,B=0){T.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(T.image.width*z),it=Math.floor(T.image.height*z),ft=I!==null?I.x:0,Mt=I!==null?I.y:0;w.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,ft,Mt,N,it),wt.unbindTexture()},this.copyTextureToTexture=function(T,I,B=null,z=null,N=0){T.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],I=arguments[2],N=arguments[3]||0,B=null);let it,ft,Mt,yt,It,Ft,St,qt,ie;const se=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(it=B.max.x-B.min.x,ft=B.max.y-B.min.y,Mt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,It=B.min.y,Ft=B.isBox3?B.min.z:0):(it=se.width,ft=se.height,Mt=se.depth||1,yt=0,It=0,Ft=0),z!==null?(St=z.x,qt=z.y,ie=z.z):(St=0,qt=0,ie=0);const Oe=Bt.convert(I.format),Zt=Bt.convert(I.type);let Tt;I.isData3DTexture?(w.setTexture3D(I,0),Tt=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Tt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Un=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xi=D.getParameter(D.UNPACK_SKIP_ROWS),Ye=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);const Br=T.isDataArrayTexture||T.isData3DTexture,ae=I.isDataArrayTexture||I.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const En=Ct.get(T),zr=Ct.get(I),ln=Ct.get(En.__renderTarget),Qn=Ct.get(zr.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<Mt;ti++)Br&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,N,Ft+ti),T.isDepthTexture?(ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(I).__webglTexture,N,ie+ti),D.blitFramebuffer(yt,It,it,ft,St,qt,it,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):ae?D.copyTexSubImage3D(Tt,N,St,qt,ie+ti,yt,It,it,ft):D.copyTexSubImage2D(Tt,N,St,qt,ie+ti,yt,It,it,ft);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Tt,N,St,qt,ie,it,ft,Mt,Oe,Zt,se.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,N,St,qt,ie,it,ft,Mt,Oe,se.data):D.texSubImage3D(Tt,N,St,qt,ie,it,ft,Mt,Oe,Zt,se):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,St,qt,it,ft,Oe,Zt,se.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,St,qt,se.width,se.height,Oe,se.data):D.texSubImage2D(D.TEXTURE_2D,N,St,qt,it,ft,Oe,Zt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,Un),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye),N===0&&I.generateMipmaps&&D.generateMipmap(Tt),wt.unbindTexture()},this.copyTextureToTexture3D=function(T,I,B=null,z=null,N=0){return T.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,T=arguments[2],I=arguments[3],N=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,I,B,z,N)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),wt.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,wt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ux extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uf extends Wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new L,Sa=new L,Nu=new ee,Xr=new Ra,Ks=new Es,go=new L,Fu=new L;class Ix extends Ee{constructor(t=new on,e=new Uf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ya.fromBufferAttribute(e,i-1),Sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Sa);t.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Nu.copy(i).invert(),Xr.copy(t.ray).applyMatrix4(Nu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),M=Js(this,t,Xr,l,p,E);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Js(this,t,Xr,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Js(this,t,Xr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Js(this,t,Xr,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Js(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Sa.fromBufferAttribute(a,s),e.distanceSqToSegment(ya,Sa,go,Fu)>n)return;go.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(go);if(!(l<t.near||l>t.far))return{distance:l,point:Fu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class If extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ou=new ee,El=new Ra,js=new Es,Qs=new L;class Nx extends Ee{constructor(t=new on,e=new If){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;Ou.copy(i).invert(),El.copy(t.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Qs.fromBufferAttribute(h,m),Bu(Qs,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Qs.fromBufferAttribute(h,g),Bu(Qs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bu(r,t,e,n,i,s,a){const o=El.distanceSqToPoint(r);if(o<e){const l=new L;El.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fx extends Le{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new dt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],a=[],o=new L,l=new ee;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(be(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sc extends Dn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ox extends sc{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const ta=new L,vo=new ac,xo=new ac,Mo=new ac;class Bx extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ta.subVectors(i[0],i[1]).add(i[0]),c=ta);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ta.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),xo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Mo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),xo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Mo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(vo.calc(l),xo.calc(l),Mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zu(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function zx(r,t){const e=1-r;return e*e*t}function kx(r,t){return 2*(1-r)*r*t}function Vx(r,t){return r*r*t}function ns(r,t,e,n){return zx(r,t)+kx(r,e)+Vx(r,n)}function Hx(r,t){const e=1-r;return e*e*e*t}function Gx(r,t){const e=1-r;return 3*e*e*r*t}function Wx(r,t){return 3*(1-r)*r*r*t}function Xx(r,t){return r*r*r*t}function is(r,t,e,n,i){return Hx(r,t)+Gx(r,e)+Wx(r,n)+Xx(r,i)}class Nf extends Dn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(is(t,i.x,s.x,a.x,o.x),is(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qx extends Dn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(is(t,i.x,s.x,a.x,o.x),is(t,i.y,s.y,a.y,o.y),is(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ff extends Dn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yx extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Dn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ns(t,i.x,s.x,a.x),ns(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zx extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ns(t,i.x,s.x,a.x),ns(t,i.y,s.y,a.y),ns(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(zu(o,l.x,c.x,u.x,h.x),zu(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var ku=Object.freeze({__proto__:null,ArcCurve:Ox,CatmullRomCurve3:Bx,CubicBezierCurve:Nf,CubicBezierCurve3:qx,EllipseCurve:sc,LineCurve:Ff,LineCurve3:Yx,QuadraticBezierCurve:Of,QuadraticBezierCurve3:Zx,SplineCurve:Bf});class $x extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ku[i.type]().fromJSON(i))}return this}}class Vu extends $x{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ff(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Of(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Nf(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new sc(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zf extends Vu{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Vu().fromJSON(i))}return this}}const Kx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=kf(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=eM(r,t,s,e)),r.length>80*e){o=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return gs(s,a,e,o,l,d,0),a}};function kf(r,t,e,n,i){let s,a;if(i===fM(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Hu(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Hu(s,r[s],r[s+1],a);return a&&Da(a,a.next)&&(xs(a),a=a.next),a}function Vi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Da(e,e.next)||fe(e.prev,e,e.next)===0)){if(xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gs(r,t,e,n,i,s,a){if(!r)return;!a&&s&&aM(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?jx(r,n,i,s):Jx(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),xs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Qx(Vi(r),t,e),gs(r,t,e,n,i,s,2)):a===2&&tM(r,t,e,n,i,s):gs(Vi(r),t,e,n,i,s,1);break}}}function Jx(r){const t=r.prev,e=r,n=r.next;if(fe(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&fr(i,o,s,l,a,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jx(r,t,e,n){const i=r.prev,s=r,a=r.next;if(fe(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Tl(d,g,t,e,n),E=Tl(_,m,t,e,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=p&&v&&v.z<=E;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&fr(o,u,l,h,c,f,M.x,M.y)&&fe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&fr(o,u,l,h,c,f,v.x,v.y)&&fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&fr(o,u,l,h,c,f,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&fr(o,u,l,h,c,f,v.x,v.y)&&fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Da(i,s)&&Vf(i,n,n.next,s)&&vs(i,s)&&vs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),xs(n),xs(n.next),n=r=s),n=n.next}while(n!==r);return Vi(n)}function tM(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cM(a,o)){let l=Hf(a,o);a=Vi(a,a.next),l=Vi(l,l.next),gs(a,t,e,n,i,s,0),gs(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function eM(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=kf(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(lM(c));for(i.sort(nM),s=0;s<i.length;s++)e=iM(i[s],e);return e}function nM(r,t){return r.x-t.x}function iM(r,t){const e=rM(r,t);if(!e)return t;const n=Hf(e,r);return Vi(n,n.next),Vi(e,e.next)}function rM(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&fr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),vs(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&sM(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function sM(r,t){return fe(r.prev,r,t.prev)<0&&fe(t.next,r,r.next)<0}function aM(r,t,e,n){let i=r;do i.z===0&&(i.z=Tl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,oM(i)}function oM(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function Tl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function lM(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function fr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function cM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!uM(r,t)&&(vs(r,t)&&vs(t,r)&&hM(r,t)&&(fe(r.prev,r,t.prev)||fe(r,t.prev,t))||Da(r,t)&&fe(r.prev,r,r.next)>0&&fe(t.prev,t,t.next)>0)}function fe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Da(r,t){return r.x===t.x&&r.y===t.y}function Vf(r,t,e,n){const i=na(fe(r,t,e)),s=na(fe(r,t,n)),a=na(fe(e,n,r)),o=na(fe(e,n,t));return!!(i!==s&&a!==o||i===0&&ea(r,e,t)||s===0&&ea(r,n,t)||a===0&&ea(e,r,n)||o===0&&ea(e,t,n))}function ea(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function na(r){return r>0?1:r<0?-1:0}function uM(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Vf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function vs(r,t){return fe(r.prev,r,r.next)<0?fe(r,t,r.next)>=0&&fe(r,r.prev,t)>=0:fe(r,t,r.prev)<0||fe(r,r.next,t)<0}function hM(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Hf(r,t){const e=new bl(r.i,r.x,r.y),n=new bl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Hu(r,t,e,n){const i=new bl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fM(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class rs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return rs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Gu(t),Wu(n,t);let a=t.length;e.forEach(Gu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Wu(n,e[l]);const o=Kx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Gu(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Wu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ea extends on{constructor(t=new zf([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new rn(i,3)),this.setAttribute("normal",new rn(s,3)),this.setAttribute("uv",new rn(a,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;rs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];rs.isClockWise(E)===!0&&(g[m]=E.reverse())}const _=rs.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=_.length;m<p;m++){const E=_[m],M=E[0]+h,v=E[1]+h,A=E[2]+h;n.push(M,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return dM(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new Ea(n,t.curveSegments)}}function dM(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class pM extends Wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Xu={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mM{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const _M=new mM;class oc{constructor(t){this.manager=t!==void 0?t:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}oc.DEFAULT_MATERIAL_NAME="__DEFAULT";class gM extends oc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Xu.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=_s("img");function l(){u(),Xu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class vM extends oc{constructor(t){super(t)}load(t,e,n,i){const s=new Le,a=new gM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class lc extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const yo=new ee,qu=new L,Yu=new L;class Gf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zu=new ee,qr=new L,So=new L;class xM extends Gf{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qr.setFromMatrixPosition(t.matrixWorld),n.position.copy(qr),So.copy(n.position),So.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(So),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}class $u extends lc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class MM extends Gf{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ku extends lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yM extends lc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class SM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ju();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ju(){return performance.now()}const ju=new ee;class EM{constructor(t,e,n=0,i=1/0){this.ray=new Ra(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(Qu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)wl(t[i],this,n,e);return n.sort(Qu),n}}function Qu(r,t){return r.distance-t.distance}function wl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)wl(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);const Wf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const TM=new nc(-1,1,1,-1,0,1);class bM extends on{constructor(){super(),this.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rn([0,2,0,0,2,0],2))}}const wM=new bM;class Xf{constructor(t){this._mesh=new ze(wM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,TM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class AM extends bs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ma.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xf(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends bs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class CM extends bs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class RM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new AM(Wf),this.copyPass.material.blending=Yn,this.clock=new SM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(a instanceof th?n=!0:a instanceof CM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PM extends bs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const DM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ir extends bs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,a,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Sn(s,a,{type:Zn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Sn(s,a,{type:Zn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=DM;this.highPassUniforms=Ma.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new dt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wf;this.copyUniforms=Ma.clone(u.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new kt,this.oldClearAlpha=1,this.basic=new xr,this.fsQuad=new Xf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ir.BlurDirectionX=new dt(1,0);Ir.BlurDirectionY=new dt(0,1);const ss=21670,eh=329483,LM=13218954;function nh(r,t,e){const n=new zf,i=-r/2,s=-t/2,a=Math.min(e,r*.12,t*.12);return n.moveTo(i+a,s),n.lineTo(i+r-a,s),n.quadraticCurveTo(i+r,s,i+r,s+a),n.lineTo(i+r,s+t-a),n.quadraticCurveTo(i+r,s+t,i+r-a,s+t),n.lineTo(i+a,s+t),n.quadraticCurveTo(i,s+t,i,s+t-a),n.lineTo(i,s+a),n.quadraticCurveTo(i,s,i+a,s),n}function UM(r,t,e,n){const i=n.image,s=(i==null?void 0:i.width)||1,a=(i==null?void 0:i.height)||1,o=s/a,l=t/e;let c=1,u=1,h=0,f=0;o>l?(c=l/o,h=(1-c)/2):(u=o/l,f=(1-u)/2,l<.95&&(f=Math.min(f*.28,.06)));const d=r.getAttribute("position"),g=r.getAttribute("uv");for(let _=0;_<d.count;_++){const m=(d.getX(_)+t/2)/t,p=(d.getY(_)+e/2)/e;g.setXY(_,h+m*c,f+p*u)}g.needsUpdate=!0}function qf(r,t,e){const n=new hr,i=Math.min(t,e)*.045,s=new Ea(nh(t,e,i),12);UM(s,t,e,r);const a=t+.055,o=e+.055,l=new Ea(nh(a,o,i+.018),12),c=new ze(l,new pM({color:661028,emissive:ss,emissiveIntensity:.62,metalness:.35,roughness:.38}));c.position.z=-.012,n.add(c);const u=new xr({map:r,transparent:!0,opacity:0,toneMapped:!1}),h=new ze(s,u);h.position.z=.01,n.add(h);const f=new ze(new Ur(t*1.12,e*1.12),new xr({color:ss,transparent:!0,opacity:0,depthWrite:!1,blending:wr}));f.position.z=-.05,n.add(f);const d=new ze(new Ur(t*1.08,e*1.08),new xr({color:0,transparent:!0,opacity:0,depthWrite:!1}));return d.position.z=-.09,n.add(d),n.userData.mat=u,n.userData.shadow=d,n.userData.frame=c,n.userData.glow=f,n}function IM({label:r,sub:t="",kicker:e=""}){const o=document.createElement("canvas");o.width=1024,o.height=1328;const l=o.getContext("2d");l.fillStyle="#0a1420",l.fillRect(0,0,1024,1328);const c=l.createLinearGradient(0,0,1024,1328);c.addColorStop(0,"rgba(0,84,166,0.78)"),c.addColorStop(.5,"rgba(10,24,42,0.4)"),c.addColorStop(1,"rgba(8,16,28,0.2)"),l.fillStyle=c,l.fillRect(0,0,1024,1328),l.strokeStyle="rgba(200, 226, 248, 0.85)",l.lineWidth=7,l.strokeRect(40,40,944,1248);const u=96;let h=150;l.textBaseline="top",e&&(l.fillStyle="rgba(176, 214, 244, 0.95)",l.font="700 34px Manrope, system-ui, sans-serif",l.letterSpacing="6px",l.fillText(String(e).toUpperCase(),u,h),l.letterSpacing="0px",h+=78),l.fillStyle="#ffffff";const f=String(r).length>11?84:108;l.font=`700 ${f}px Syne, sans-serif`,ih(l,String(r),1024-u*2).forEach(_=>{l.fillText(_,u,h),h+=f+14}),h+=28,l.strokeStyle="rgba(142, 192, 239, 0.55)",l.lineWidth=3,l.beginPath(),l.moveTo(u,h),l.lineTo(u+160,h),l.stroke(),h+=44,t&&(l.fillStyle="rgba(232, 240, 248, 0.92)",l.font="600 48px Manrope, system-ui, sans-serif",ih(l,t,1024-u*2).forEach(m=>{l.fillText(m,u,h),h+=64}));const g=new Fx(o);return g.colorSpace=Ne,g.anisotropy=8,qf(g,2.2,2.85)}function ih(r,t,e){const n=t.split(" "),i=[];let s="";return n.forEach(a=>{const o=s?`${s} ${a}`:a;r.measureText(o).width>e&&s?(i.push(s),s=a):s=o}),s&&i.push(s),i.slice(0,3)}function NM(r){const t=new Lx({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setClearColor(eh,1),t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.outputColorSpace=Ne,t.toneMapping=rf,t.toneMappingExposure=1.22;const e=new Ux;e.fog=new rc(eh,16,40);const n=new je(38,1,.1,80);n.position.set(0,.3,8.6);const i=new L(0,.15,0);e.add(new yM(10204364,.38));const s=new Ku(16777215,1.12);s.position.set(4.5,6,8),e.add(s);const a=new Ku(ss,1.5);a.position.set(-6,2,-4),e.add(a);const o=new $u(ss,9,28,2);o.position.set(0,1.2,4),e.add(o);const l=new $u(1718886,4.4,18,2);l.position.set(0,-3,2),e.add(l);let u=window.matchMedia("(max-width: 720px)").matches;const h=u?260:820,f=new Float32Array(h*3),d=new Float32Array(h);for(let Z=0;Z<h;Z++)f[Z*3]=(Math.random()-.5)*28,f[Z*3+1]=(Math.random()-.5)*14,f[Z*3+2]=(Math.random()-.5)*22-2,d[Z]=.04+Math.random()*.08;const g=new on;g.setAttribute("position",new dn(f,3));const _=new If({color:12047600,size:u?.028:.022,transparent:!0,opacity:.55,depthWrite:!1,blending:wr,sizeAttenuation:!0}),m=new Nx(g,_);e.add(m);function p(Z){const nt=new on,st=90,bt=new Float32Array(st*3);nt.setAttribute("position",new dn(bt,3));const tt=new Uf({color:Z,transparent:!0,opacity:0,blending:wr,depthWrite:!1}),Ut=new Ix(nt,tt);return e.add(Ut),{geo:nt,mat:tt,pos:bt,n:st,line:Ut}}const E=p(ss),M=p(LM),v=new vM,A=new Map;function C(Z){if(A.has(Z))return A.get(Z);const nt=new Promise((st,bt)=>{v.load(Z,tt=>{tt.colorSpace=Ne,tt.anisotropy=t.capabilities.getMaxAnisotropy(),tt.minFilter=fi,tt.generateMipmaps=!0,tt.wrapS=Gn,tt.wrapT=Gn,st(tt)},void 0,bt)});return A.set(Z,nt),nt}const b=[];let R=null,x=null,y=!u&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function P(Z,nt){if(!y){R=null;return}R=new RM(t),R.addPass(new PM(e,n)),x=new Ir(new dt(Z,nt),.28,.42,.86),R.addPass(x)}async function H(Z){const nt=new Set;Z.forEach(st=>(st.photos||[]).forEach(bt=>nt.add(bt.src))),await Promise.all([...nt].map(C));for(const st of Z){const bt=new hr;bt.visible=!1;for(const tt of st.photos||[]){const Ut=await A.get(tt.src),D=qf(Ut,tt.w,tt.h);D.position.set(tt.x,tt.y,tt.z),D.rotation.y=tt.ry||0,D.userData.rest={x:tt.x,y:tt.y,z:tt.z,ry:tt.ry||0},D.userData.phase=Math.random()*Math.PI*2,bt.add(D)}for(const tt of st.cards||[]){const Ut=IM(tt);Ut.position.set(tt.x,tt.y,tt.z),Ut.userData.rest={x:tt.x,y:tt.y,z:tt.z,ry:tt.ry||0},Ut.userData.phase=Math.random()*Math.PI*2,Ut.rotation.y=tt.ry||0,bt.add(Ut)}e.add(bt),b.push(bt)}}let F=-1,k=null;const W=new dt(0,0);let G=!1;const Y=new EM;function V(Z){Yt.killTweensOf(Z.position),Yt.killTweensOf(Z.scale),Yt.killTweensOf(Z.rotation),Z.userData.mat&&Yt.killTweensOf(Z.userData.mat),Z.userData.shadow&&Yt.killTweensOf(Z.userData.shadow.material),Z.userData.glow&&Yt.killTweensOf(Z.userData.glow.material),Z.userData.frame&&Yt.killTweensOf(Z.userData.frame.material)}function rt(Z,nt,st=0){Z.visible=!0,Z.children.forEach((tt,Ut)=>{V(tt);const D=tt.userData.rest||{x:0,y:0,z:0},de=tt.userData.mat,Rt=tt.userData.shadow,At=tt.userData.glow;nt?(tt.position.set(D.x*1.18,D.y-.35,D.z-1.2),tt.scale.set(.86,.86,.86),de&&(de.opacity=0),Rt&&(Rt.material.opacity=0),At&&(At.material.opacity=0),Yt.to(tt.position,{x:D.x,y:D.y,z:D.z,duration:1.35,delay:st+Ut*.08,ease:"power3.out"}),Yt.to(tt.scale,{x:1,y:1,z:1,duration:1.35,delay:st+Ut*.08,ease:"power3.out"}),de&&Yt.to(de,{opacity:1,duration:.9,delay:st+Ut*.08,ease:"power2.out"}),Rt&&Yt.to(Rt.material,{opacity:.28,duration:.9,delay:st+.2}),At&&Yt.to(At.material,{opacity:.16,duration:1.1,delay:st+.15})):(Yt.to(tt.position,{z:D.z-.8,y:D.y+.15,duration:.7,ease:"power2.in"}),de&&Yt.to(de,{opacity:0,duration:.55,ease:"power2.in"}),Rt&&Yt.to(Rt.material,{opacity:0,duration:.4}),At&&Yt.to(At.material,{opacity:0,duration:.4}),Yt.to(tt.scale,{x:.94,y:.94,z:.94,duration:.7,ease:"power2.in",onComplete:()=>{F!==b.indexOf(Z)&&(Z.visible=!1)}}))})}function ot(Z,nt,st,bt){for(let tt=0;tt<Z.n;tt++){const Ut=tt/(Z.n-1),D=Ut*Ut*(3-2*Ut);Z.pos[tt*3]=nt.x+(st.x-nt.x)*D+Math.sin(Ut*8)*bt,Z.pos[tt*3+1]=nt.y+(st.y-nt.y)*D+Math.sin(Ut*5)*bt*.55,Z.pos[tt*3+2]=nt.z+(st.z-nt.z)*D}Z.geo.attributes.position.needsUpdate=!0,Z.mat.opacity=.85,Yt.to(Z.mat,{opacity:0,duration:1.4,ease:"power2.out",delay:.15})}function vt(Z,nt){ot(E,Z,nt,.15),ot(M,Z,nt,.22)}function Dt(Z,{reduced:nt=!1}={}){if(Z===F)return;const st=F;k=null,st>=0&&rt(b[st],!1),F=Z;const bt=b[Z];bt&&rt(bt,!0,nt?0:.25)}function Xt(Z,nt){W.x=Z,W.y=nt,G=!0}function q(Z){u=Z<720,y=!u&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;const nt=u?.4:Z<1100?.82:1;b.forEach(st=>{st.scale.setScalar(nt),st.position.set(0,u?1.28:0,0)})}function Q(Z,nt){n.aspect=Z/nt,n.fov=Z<720?46:38,n.updateProjectionMatrix(),t.setSize(Z,nt,!1),q(Z),y?R?(R.setSize(Z,nt),x==null||x.setSize(Z,nt)):P(Z,nt):R=null}function xt(Z){const nt=b[F];nt&&nt.children.forEach(st=>{const bt=!Z||st===Z;st.userData.mat&&Yt.to(st.userData.mat,{opacity:bt?1:.32,duration:.35}),st.userData.frame&&Yt.to(st.userData.frame.material,{emissiveIntensity:bt?.62:.12,duration:.35}),st.userData.glow&&Yt.to(st.userData.glow.material,{opacity:bt?.16:.04,duration:.35})})}function lt(Z,nt){var de;if(!nt){m.rotation.y=Z*.012;const Rt=g.attributes.position.array;for(let At=0;At<h;At++)Rt[At*3+1]+=Math.sin(Z*d[At]+At)*.0012;g.attributes.position.needsUpdate=!0}const st=b[F];st&&st.children.forEach(Rt=>{const At=Rt.userData.rest;if(!At)return;const wt=Rt.userData.phase||0;nt||(Rt.position.y=At.y+Math.sin(Z*.7+wt)*.06,Rt.rotation.y=At.ry+Math.sin(Z*.35+wt)*.03)}),Y.setFromCamera(W,n);const bt=st?Y.intersectObjects(st.children,!0):[],tt=bt.length&&bt[0].object.parent&&bt[0].object.parent.userData.mat?bt[0].object.parent:null;k!==tt&&(k&&Yt.to(k.scale,{x:1,y:1,z:1,duration:.45,ease:"power2.out"}),k=tt,xt(k),k&&Yt.to(k.scale,{x:1.045,y:1.045,z:1.045,duration:.45,ease:"power2.out"})),k&&(k.rotation.x=Gc.lerp(k.rotation.x,W.y*.12,.08),k.rotation.y=Gc.lerp(k.rotation.y,(((de=k.userData.rest)==null?void 0:de.ry)||0)+W.x*.18,.08));const Ut=G?W.x:0,D=G?W.y:0;n.lookAt(i.x+Ut*.12,i.y+D*.06,i.z),R&&y&&!nt?R.render():t.render(e,n)}return P(window.innerWidth||1280,window.innerHeight||720),{renderer:t,scene:e,camera:n,look:i,buildSlides:H,setSlide:Dt,setPointer:Xt,resize:Q,tick:lt,burstTrail:vt}}function FM({total:r,onGo:t,getIndex:e,onSection:n}){let i=!1,s=0,a=null;function o(d=950){i=!0,window.setTimeout(()=>{i=!1},d)}function l(d){if(i)return;const g=e()+d;g<0||g>=r||(o(),t(g))}function c(d){if(d.preventDefault(),s+=d.deltaY,Math.abs(s)<55)return;const g=s>0?1:-1;s=0,l(g)}function u(d){var g,_,m;["ArrowRight","ArrowDown","PageDown"," "].includes(d.key)?(d.preventDefault(),l(1)):["ArrowLeft","ArrowUp","PageUp"].includes(d.key)?(d.preventDefault(),l(-1)):d.key==="Home"?(d.preventDefault(),i||(o(),t(0))):d.key==="End"?(d.preventDefault(),i||(o(),t(r-1))):d.key==="f"||d.key==="F"?document.fullscreenElement?(m=document.exitFullscreen)==null||m.call(document):(_=(g=document.documentElement).requestFullscreen)==null||_.call(g):/^[1-9]$/.test(d.key)&&n&&(d.preventDefault(),n(Number(d.key)-1))}function h(d){a=d.touches[0].clientY}function f(d){if(a==null)return;const g=a-d.changedTouches[0].clientY;a=null,!(Math.abs(g)<40)&&l(g>0?1:-1)}return window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("keydown",u),window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchend",f,{passive:!0}),{go:l,jump:d=>{i||(o(),t(d))}}}const Mr=window.matchMedia("(prefers-reduced-motion: reduce)").matches,OM=document.querySelector("#gl"),Fe=NM(OM),le={kicker:document.querySelector("#kicker"),title:document.querySelector("#title"),line:document.querySelector("#line"),facts:document.querySelector("#facts"),meta:document.querySelector("#sectionLabel"),count:document.querySelector("#count"),fill:document.querySelector("#fill"),ticks:document.querySelector("#ticks"),loader:document.querySelector("#loader"),hint:document.querySelector("#hint"),prev:document.querySelector("#prev"),next:document.querySelector("#next")};Xl.forEach(r=>{const t=document.createElement("button");t.type="button",t.textContent=r.label,t.dataset.section=r.id,t.addEventListener("click",()=>{const e=qn.findIndex(n=>n.section===r.id);e>=0&&La.jump(e)}),le.ticks.appendChild(t)});let li=0;const Se={x:.15,y:.2,z:0};function BM(r){le.facts.replaceChildren(),(r.facts||[]).forEach(t=>{const e=document.createElement("div");e.className="fact";const n=document.createElement("b");n.textContent=t.v;const i=document.createElement("span");i.textContent=t.k,e.append(n,i),le.facts.appendChild(e)})}function zM(r,t=!1){const e=Mr||t?.01:.55,n=Yt.timeline();t||n.to([le.kicker,le.title,le.line,le.facts],{opacity:0,y:12,duration:.28,ease:"power2.in"}),n.add(()=>{le.kicker.textContent=r.kicker,le.title.textContent=r.title,le.line.textContent=r.line,BM(r);const i=Xl.find(s=>s.id===r.section);le.meta.textContent=i?i.label:"",le.count.textContent=`${String(li+1).padStart(2,"0")}  /  ${String(qn.length).padStart(2,"0")}`,document.querySelectorAll(".ticks button").forEach(s=>{s.classList.toggle("active",s.dataset.section===r.section)}),le.fill.style.width=`${(li+1)/qn.length*100}%`,le.prev.disabled=li===0,le.next.disabled=li===qn.length-1}),n.fromTo([le.kicker,le.title,le.line,le.facts],{opacity:0,y:18},{opacity:1,y:0,duration:e,stagger:.05,ease:"power3.out"}),li>0&&le.hint.classList.add("gone")}function Yf(r){const t=window.innerWidth<720,e=r.cam;return t?{pos:{x:e.x*.12,y:e.y+.12,z:Math.min(e.z+.5,9.3)},look:{x:Math.min(e.tx*.3,1.05),y:e.ty+.22,z:e.tz}}:{pos:{x:e.x,y:e.y,z:e.z},look:{x:e.tx,y:e.ty,z:e.tz}}}function kM(r,t){const e=Mr?.01:1.55,n=Fe.camera.position.clone(),i=Yf(r),s=i.pos;t&&!Mr&&Fe.burstTrail(n,s);const a={x:(n.x+s.x)/2+(s.z-n.z)*.07,y:(n.y+s.y)/2+.32,z:(n.z+s.z)/2-.15};if(Yt.killTweensOf(Fe.camera.position),Yt.killTweensOf(Se),Mr){Fe.camera.position.set(s.x,s.y,s.z),Se.x=i.look.x,Se.y=i.look.y,Se.z=i.look.z,Fe.look.set(Se.x,Se.y,Se.z);return}Yt.to(Fe.camera.position,{keyframes:[{x:a.x,y:a.y,z:a.z,duration:e*.42},{x:s.x,y:s.y,z:s.z,duration:e*.58}],ease:"power2.inOut"}),Yt.to(Se,{x:i.look.x,y:i.look.y,z:i.look.z,duration:e,ease:"power3.inOut",onUpdate:()=>Fe.look.set(Se.x,Se.y,Se.z)})}function Zf(r,{first:t=!1}={}){li=r;const e=qn[r];zM(e,t),kM(e,e.trail&&!t),Fe.setSlide(r,{reduced:Mr})}const La=FM({total:qn.length,getIndex:()=>li,onGo:r=>Zf(r),onSection:r=>{const t=Xl[r];if(!t)return;const e=qn.findIndex(n=>n.section===t.id);e>=0&&La.jump(e)}});le.prev.addEventListener("click",()=>La.go(-1));le.next.addEventListener("click",()=>La.go(1));window.addEventListener("mousemove",r=>{const t=r.clientX/window.innerWidth*2-1,e=-(r.clientY/window.innerHeight)*2+1;Fe.setPointer(t,e)});function cc(){Fe.resize(window.innerWidth,window.innerHeight);const r=qn[li];if(!r)return;const t=Yf(r);Yt.killTweensOf(Fe.camera.position),Yt.killTweensOf(Se),Fe.camera.position.set(t.pos.x,t.pos.y,t.pos.z),Se.x=t.look.x,Se.y=t.look.y,Se.z=t.look.z,Fe.look.set(Se.x,Se.y,Se.z)}window.addEventListener("resize",cc);cc();const rh={t:0};function $f(){rh.t+=.016,Fe.tick(rh.t,Mr),requestAnimationFrame($f)}async function VM(){try{await document.fonts.ready}catch{}await Fe.buildSlides(qn),cc(),Zf(0,{first:!0}),$f(),requestAnimationFrame(()=>le.loader.classList.add("hide"))}VM();
