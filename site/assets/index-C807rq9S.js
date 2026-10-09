(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const bh="180",fr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o_=0,Du=1,a_=2,Of=1,Ff=2,Ri=3,ki=0,nn=1,qn=2,es=0,pr=1,Lu=2,Iu=3,Nu=4,l_=5,As=100,c_=101,h_=102,u_=103,d_=104,f_=200,p_=201,m_=202,__=203,dc=204,fc=205,g_=206,x_=207,v_=208,y_=209,M_=210,S_=211,T_=212,E_=213,b_=214,pc=0,mc=1,_c=2,Er=3,gc=4,xc=5,vc=6,yc=7,wh=0,w_=1,A_=2,ts=0,R_=1,C_=2,P_=3,Bf=4,D_=5,L_=6,I_=7,Uu="attached",N_="detached",kf=300,br=301,wr=302,Mc=303,Sc=304,tl=306,di=1e3,$i=1001,Fa=1002,sn=1003,zf=1004,no=1005,Sn=1006,wa=1007,Ii=1008,fi=1009,Vf=1010,Hf=1011,_o=1012,Ah=1013,Us=1014,Kn=1015,Ho=1016,Rh=1017,Ch=1018,go=1020,Gf=35902,Wf=35899,Xf=1021,qf=1022,Un=1023,xo=1026,vo=1027,Ph=1028,Dh=1029,Yf=1030,Lh=1031,Ih=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Tc=35840,Ec=35841,bc=35842,wc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37808,Dc=37809,Lc=37810,Ic=37811,Nc=37812,Uc=37813,Oc=37814,Fc=37815,Bc=37816,kc=37817,zc=37818,Vc=37819,Hc=37820,Gc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,jc=36284,Kc=36285,$c=36286,yo=2300,Mo=2301,pl=2302,Ou=2400,Fu=2401,Bu=2402,U_=2500,O_=0,jf=1,Zc=2,F_=3200,B_=3201,Nh=0,k_=1,Di="",It="srgb",rn="srgb-linear",Ba="linear",ct="srgb",Ws=7680,ku=519,z_=512,V_=513,H_=514,Kf=515,G_=516,W_=517,X_=518,q_=519,Jc=35044,zu="300 es",ci=2e3,ka=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const oo=Math.PI/180,Ar=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Uh(s,e){return(s%e+e)%e}function Y_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function j_(s,e,t){return s!==e?(t-s)/(e-s):0}function ao(s,e,t){return(1-t)*s+t*e}function K_(s,e,t,n){return ao(s,e,1-Math.exp(-t*n))}function $_(s,e=1){return e-Math.abs(Uh(s,e*2)-e)}function Z_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function J_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Q_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function eg(s,e){return s+Math.random()*(e-s)}function tg(s){return s*(.5-Math.random())}function ng(s){s!==void 0&&(Vu=s);let e=Vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ig(s){return s*oo}function sg(s){return s*Ar}function rg(s){return(s&s-1)===0&&s!==0}function og(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ag(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:oo,RAD2DEG:Ar,generateUUID:$n,clamp:Xe,euclideanModulo:Uh,mapLinear:Y_,inverseLerp:j_,lerp:ao,damp:K_,pingpong:$_,smoothstep:Z_,smootherstep:J_,randInt:Q_,randFloat:eg,randFloatSpread:tg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:ag,setQuaternionFromProperEuler:lg,normalize:rt,denormalize:Yn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),b=Math.atan2(T,p*v);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const x=a*v;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new C,Hu=new pi;class We{constructor(e,t,n,i,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],T=i[2],b=i[5],A=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*m+a*M+l*b,r[6]=o*p+a*x+l*A,r[1]=c*_+h*v+u*T,r[4]=c*m+h*M+u*b,r[7]=c*p+h*x+u*A,r[2]=d*_+f*v+g*T,r[5]=d*m+f*M+g*b,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new We;function $f(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function So(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cg(){const s=So("canvas");return s.style.display="block",s}const Gu={};function To(s){s in Gu||(Gu[s]=!0,console.warn(s))}function hg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){const s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return To("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return To("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const Qe=ug();function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class dg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=So("canvas")),Xs.width=e.width,Xs.height=e.height;const i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gl(i[o].image)):r.push(gl(i[o]))}else r=gl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function gl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pg=0;const xl=new C;class Bt extends zs{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=$i,i=$i,r=Sn,o=Ii,a=Un,l=fi,c=Bt.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=$n(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=kf;Bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,T=(p+1)/2,b=(h+d)/4,A=(u+_)/4,R=(g+m)/4;return M>x&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=A/n):x>T?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=R/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends zs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Oh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),$o.subVectors(this.max,Xr),qs.subVectors(e.a,Xr),Ys.subVectors(e.b,Xr),js.subVectors(e.c,Xr),Hi.subVectors(Ys,qs),Gi.subVectors(js,Ys),ds.subVectors(qs,js);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-ds.z,ds.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,ds.z,0,-ds.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-ds.y,ds.x,0];return!vl(t,qs,Ys,js,$o)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,qs,Ys,js,$o))?!1:(Zo.crossVectors(Hi,Gi),t=[Zo.x,Zo.y,Zo.z],vl(t,qs,Ys,js,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new C,new C,new C,new C,new C,new C,new C,new C],kn=new C,Ko=new xt,qs=new C,Ys=new C,js=new C,Hi=new C,Gi=new C,ds=new C,Xr=new C,$o=new C,Zo=new C,fs=new C;function vl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fs.fromArray(s,r);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gg=new xt,qr=new C,yl=new C;class _i{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(yl)),this.expandByPoint(qr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new C,Ml=new C,Jo=new C,Wi=new C,Sl=new C,Qo=new C,Tl=new C;class kr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ml.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=Wi.dot(this.direction),l=-Wi.dot(Jo),c=Wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ml).addScaledVector(Jo,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){Sl.subVectors(t,e),Qo.subVectors(n,e),Tl.crossVectors(Sl,Qo);let o=this.direction.dot(Tl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(Wi,Qo));if(l<0)return null;const c=a*this.direction.dot(Sl.cross(Wi));if(c<0||l+c>o)return null;const h=-a*Wi.dot(Tl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,vg)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Xi.crossVectors(n,gn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Xi.crossVectors(n,gn)),Xi.normalize(),ea.crossVectors(gn,Xi),i[0]=Xi.x,i[4]=ea.x,i[8]=gn.x,i[1]=Xi.y,i[5]=ea.y,i[9]=gn.y,i[2]=Xi.z,i[6]=ea.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],T=n[15],b=i[0],A=i[4],R=i[8],y=i[12],S=i[1],D=i[5],I=i[9],B=i[13],k=i[2],O=i[6],V=i[10],X=i[14],H=i[3],te=i[7],re=i[11],de=i[15];return r[0]=o*b+a*S+l*k+c*H,r[4]=o*A+a*D+l*O+c*te,r[8]=o*R+a*I+l*V+c*re,r[12]=o*y+a*B+l*X+c*de,r[1]=h*b+u*S+d*k+f*H,r[5]=h*A+u*D+d*O+f*te,r[9]=h*R+u*I+d*V+f*re,r[13]=h*y+u*B+d*X+f*de,r[2]=g*b+_*S+m*k+p*H,r[6]=g*A+_*D+m*O+p*te,r[10]=g*R+_*I+m*V+p*re,r[14]=g*y+_*B+m*X+p*de,r[3]=v*b+M*S+x*k+T*H,r[7]=v*A+M*D+x*O+T*te,r[11]=v*R+M*I+x*V+T*re,r[15]=v*y+M*B+x*X+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,b=t*v+n*M+i*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=M*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,M=l*h,x=l*u,T=n.x,b=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+x)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+M)*A,i[9]=(m-v)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ks.set(i[0],i[1],i[2]).length();const o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const c=1/r,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ci,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ka)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ci,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ci)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ka)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new C,zn=new ze,xg=new C(0,0,0),vg=new C(1,1,1),Xi=new C,ea=new C,gn=new C,qu=new ze,Yu=new pi;class Qn{constructor(e=0,t=0,n=0,i=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yg=0;const ju=new C,$s=new pi,Ti=new ze,ta=new C,Yr=new C,Mg=new C,Sg=new pi,Ku=new C(1,0,0),$u=new C(0,1,0),Zu=new C(0,0,1),Ju={type:"added"},Tg={type:"removed"},Zs={type:"childadded",child:null},El={type:"childremoved",child:null};class vt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new C,t=new Qn,n=new pi,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Yr,ta,this.up):Ti.lookAt(ta,Yr,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(Ti),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tg),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new C(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new C,Ei=new C,bl=new C,bi=new C,Js=new C,Qs=new C,Qu=new C,wl=new C,Al=new C,Rl=new C,Cl=new nt,Pl=new nt,Dl=new nt;class jn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vn.subVectors(i,t),Ei.subVectors(n,t),bl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(Ei),l=Vn.dot(bl),c=Ei.dot(Ei),h=Ei.dot(bl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Cl.setScalar(0),Pl.setScalar(0),Dl.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Pl,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),Ei.subVectors(e,t),Vn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Vn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Js.subVectors(i,n),Qs.subVectors(r,n),wl.subVectors(e,n);const l=Js.dot(wl),c=Qs.dot(wl);if(l<=0&&c<=0)return t.copy(n);Al.subVectors(e,i);const h=Js.dot(Al),u=Qs.dot(Al);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Js,o);Rl.subVectors(e,r);const f=Js.dot(Rl),g=Qs.dot(Rl);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Qu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Uh(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ll(o,r,e+1/3),this.g=Ll(o,r,e),this.b=Ll(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Qe.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=It){Qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(na);const n=ao(qi.h,na.h,t),i=ao(qi.s,na.s,t),r=ao(qi.l,na.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ie;Ie.NAMES=Jf;let Eg=0;class Zn extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=pr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class On extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new C,ia=new Me;let bg=0;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Qf extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ep extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wg=0;const Ln=new ze,Il=new vt,er=new C,xn=new xt,jr=new xt,Ot=new C;class Vt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($f(e)?ep:Qf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(xn.min,jr.min),xn.expandByPoint(Ot),Ot.addVectors(xn.max,jr.max),xn.expandByPoint(Ot)):(xn.expandByPoint(jr.min),xn.expandByPoint(jr.max))}xn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),Ot.add(er)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new C,l[R]=new C;const c=new C,h=new C,u=new C,d=new Me,f=new Me,g=new Me,_=new C,m=new C;function p(R,y,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[R].add(_),a[y].add(_),a[S].add(_),l[R].add(m),l[y].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,y=v.length;R<y;++R){const S=v[R],D=S.start,I=S.count;for(let B=D,k=D+I;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new C,x=new C,T=new C,b=new C;function A(R){T.fromBufferAttribute(i,R),b.copy(T);const y=a[R];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(b,y);const D=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,D)}for(let R=0,y=v.length;R<y;++R){const S=v[R],D=S.start,I=S.count;for(let B=D,k=D+I;B<k;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ed=new ze,ps=new kr,sa=new _i,td=new C,ra=new C,oa=new C,aa=new C,Nl=new C,la=new C,nd=new C,ca=new C;class Re extends vt{constructor(e=new Vt,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Nl.fromBufferAttribute(u,e),o?la.addScaledVector(Nl,h):la.addScaledVector(Nl.sub(t),h))}t.add(la)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(sa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(sa,td)===null||ps.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),ps.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=M;x<T;x+=3){const b=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);i=ha(this,p,e,n,c,h,u,b,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=ha(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=M;x<T;x+=3){const b=x,A=x+1,R=x+2;i=ha(this,p,e,n,c,h,u,b,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;i=ha(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ag(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ki,a),l===null)return null;ca.copy(a),ca.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:s}}function ha(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ra),s.getVertexPosition(l,oa),s.getVertexPosition(c,aa);const h=Ag(s,e,t,n,ra,oa,aa,nd);if(h){const u=new C;jn.getBarycoord(nd,ra,oa,aa,u),i&&(h.uv=jn.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};jn.getNormal(ra,oa,aa,d.normal),h.face=d,h.barycoord=u}return h}class Ft extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(_,m,p,v,M,x,T,b,A,R,y){const S=x/A,D=T/R,I=x/2,B=T/2,k=b/2,O=A+1,V=R+1;let X=0,H=0;const te=new C;for(let re=0;re<V;re++){const de=re*D-B;for(let we=0;we<O;we++){const Ze=we*S-I;te[_]=Ze*v,te[m]=de*M,te[p]=k,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=b>0?1:-1,h.push(te.x,te.y,te.z),u.push(we/A),u.push(1-re/R),X+=1}}for(let re=0;re<R;re++)for(let de=0;de<A;de++){const we=d+de+O*re,Ze=d+de+O*(re+1),Ve=d+(de+1)+O*(re+1),Oe=d+(de+1)+O*re;l.push(we,Ze,Oe),l.push(Ze,Ve,Oe),H+=6}a.addGroup(f,H,y),f+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=Rr(s[t]);for(const i in n)e[i]=n[i]}return e}function Rg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Cg={clone:Rr,merge:Qt};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class np extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new C,id=new Me,sd=new Me;class tn extends np{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Lg extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(tr,nr,e,t);i.layers=this.layers,this.add(i);const r=new tn(tr,nr,e,t);r.layers=this.layers,this.add(r);const o=new tn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new tn(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new tn(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new tn(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ip extends Bt{constructor(e=[],t=br,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ig extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ip(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ft(5,5,5),r=new rs({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:es});r.uniforms.tEquirect.value=t;const o=new Re(i,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Sn),new Lg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Tn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ug{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new C;class kh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rd=new C,od=new nt,ad=new nt,Og=new C,ld=new ze,ua=new C,Ol=new _i,cd=new ze,Fl=new kr;class Fg extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(i),e.ray.intersectsSphere(Ol)!==!1&&(cd.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(cd),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===N_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;od.fromBufferAttribute(i.attributes.skinIndex,e),ad.fromBufferAttribute(i.attributes.skinWeight,e),rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ad.getComponent(r);if(o!==0){const a=od.getComponent(r);ld.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Og.copy(rd).applyMatrix4(ld),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rp extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class op extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=sn,h=sn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new ze,Bg=new ze;class zh{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Bg;hd.multiplyMatrices(a,t[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new op(t,e,e,Un,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qc extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new ze,ud=new ze,da=[],dd=new xt,kg=new ze,Kr=new Re,$r=new _i;class ap extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),dd.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(dd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),$r.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ir),ud.multiplyMatrices(n,ir),Kr.matrixWorld=ud,Kr.raycast(e,da);for(let o=0,a=da.length;o<a;o++){const l=da[o];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new op(new Float32Array(i*this.count),i,this.count,Ph,Kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bl=new C,zg=new C,Vg=new We;class Ki{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bl.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vg.getNormalMatrix(e),i=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new _i,Hg=new Me(.5,.5),fa=new C;class Vh{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,r=new Ki,o=new Ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],M=r[13],x=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,p-g,T-v).normalize(),i[1].setComponents(c+o,f+h,p+g,T+v).normalize(),i[2].setComponents(c+a,f+u,p+_,T+M).normalize(),i[3].setComponents(c-a,f-u,p-_,T-M).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,T-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-x).normalize(),t===ci)i[5].setComponents(c+l,f+d,p+m,T+x).normalize();else if(t===ka)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=Hg.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new C,Va=new C,fd=new ze,Zr=new kr,pa=new _i,kl=new C,pd=new C;class Hh extends vt{constructor(e=new Vt,t=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)za.fromBufferAttribute(t,i-1),Va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=za.distanceTo(Va);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;fd.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),M=ma(this,e,Zr,l,p,v,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ma(this,e,Zr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=ma(this,e,Zr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ma(this,e,Zr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ma(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(za.fromBufferAttribute(a,i),Va.fromBufferAttribute(a,r),t.distanceSqToSegment(za,Va,kl,pd)>n)return;kl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(kl);if(!(c<e.near||c>e.far))return{distance:c,point:pd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const md=new C,_d=new C;class Gg extends Hh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)md.fromBufferAttribute(t,i),_d.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+md.distanceTo(_d);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wg extends Hh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cp extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gd=new ze,eh=new kr,_a=new _i,ga=new C;class Xg extends vt{constructor(e=new Vt,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;gd.copy(i).invert(),eh.copy(e.ray).applyMatrix4(gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ga.fromBufferAttribute(u,m),xd(ga,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ga.fromBufferAttribute(u,g),xd(ga,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xd(s,e,t,n,i,r,o){const a=eh.distanceSqToPoint(s);if(a<t){const l=new C;eh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hp extends Bt{constructor(e,t,n=Us,i,r,o,a=sn,l=sn,c,h=xo,u=1){if(h!==xo&&h!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class up extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gh extends Vt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,_=i+1,m=new C,p=new C;for(let v=0;v<=g;v++){let M=0,x=0,T=0,b=0;if(v<=n){const y=v/n,S=y*Math.PI/2;x=-h-e*Math.cos(S),T=e*Math.sin(S),b=-e*Math.cos(S),M=y*u}else if(v<=n+r){const y=(v-n)/r;x=-h+y*t,T=e,b=0,M=u+y*d}else{const y=(v-n-r)/n,S=y*Math.PI/2;x=h+e*Math.sin(S),T=e*Math.cos(S),b=e*Math.sin(S),M=u+d+y*u}const A=Math.max(0,Math.min(1,M/f));let R=0;v===0?R=.5/i:v===g&&(R=-.5/i);for(let y=0;y<=i;y++){const S=y/i,D=S*Math.PI*2,I=Math.sin(D),B=Math.cos(D);p.x=-T*B,p.y=x,p.z=T*I,a.push(p.x,p.y,p.z),m.set(-T*B,b,T*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+R,A)}if(v>0){const y=(v-1)*_;for(let S=0;S<i;S++){const D=y+S,I=y+S+1,B=v*_+S,k=v*_+S+1;o.push(D,I,B),o.push(I,k,B)}}}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class vn extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const x=new C,T=new C;let b=0;const A=(t-e)/n;for(let R=0;R<=r;R++){const y=[],S=R/r,D=S*(t-e)+e;for(let I=0;I<=i;I++){const B=I/i,k=B*l+a,O=Math.sin(k),V=Math.cos(k);T.x=D*O,T.y=-S*n+m,T.z=D*V,u.push(T.x,T.y,T.z),x.set(O,A,V).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-S),y.push(g++)}_.push(y)}for(let R=0;R<i;R++)for(let y=0;y<r;y++){const S=_[y][R],D=_[y+1][R],I=_[y+1][R+1],B=_[y][R+1];(e>0||y!==0)&&(h.push(S,D,B),b+=3),(t>0||y!==r-1)&&(h.push(D,I,B),b+=3)}c.addGroup(p,b,0),p+=b}function M(x){const T=g,b=new Me,A=new C;let R=0;const y=x===!0?e:t,S=x===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let I=0;I<=i;I++){const k=I/i*l+a,O=Math.cos(k),V=Math.sin(k);A.x=y*V,A.y=m*S,A.z=y*O,u.push(A.x,A.y,A.z),d.push(0,S,0),b.x=O*.5+.5,b.y=V*.5*S+.5,f.push(b.x,b.y),g++}for(let I=0;I<i;I++){const B=T+I,k=D+I;x===!0?h.push(k,k+1,B):h.push(k+1,k,B),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wh extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new C,x=new C,T=new C;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],x),f(t[b+2],T),l(M,x,T,v)}function l(v,M,x,T){const b=T+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const y=v.clone().lerp(x,R/b),S=M.clone().lerp(x,R/b),D=b-R;for(let I=0;I<=D;I++)I===0&&R===b?A[R][I]=y:A[R][I]=y.clone().lerp(S,I/D)}for(let R=0;R<b;R++)for(let y=0;y<2*(b-R)-1;y++){const S=Math.floor(y/2);y%2===0?(d(A[R][S+1]),d(A[R+1][S]),d(A[R][S])):(d(A[R][S+1]),d(A[R+1][S+1]),d(A[R+1][S]))}}function c(v){const M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const v=new C;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(x,1-T)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],T=o[v+4],b=Math.max(M,x,T),A=Math.min(M,x,T);b>.9&&A<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){const x=v*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const v=new C,M=new C,x=new C,T=new C,b=new Me,A=new Me,R=new Me;for(let y=0,S=0;y<r.length;y+=9,S+=6){v.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),b.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),T.copy(v).add(M).add(x).divideScalar(3);const D=m(T);_(b,S+0,v,D),_(A,S+2,M,D),_(R,S+4,x,D)}}function _(v,M,x,T){T<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.vertices,e.indices,e.radius,e.details)}}class qg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],r=[],o=[],a=new C,l=new ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Xh(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const xa=new C,zl=new Xh,Vl=new Xh,Hl=new Xh;class dp extends qg{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(xa.subVectors(i[0],i[1]).add(i[0]),c=xa);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(xa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(zl.calc(l),Vl.calc(l),Hl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class qh extends Wh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qh(e.radius,e.detail)}}class Go extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,x=v+c*(p+1),T=v+1+c*(p+1),b=v+1+c*p;f.push(M,x,b),f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yh extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new C,g=new Me;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,M=v,x=v+n+1,T=v+n+2,b=v+1;a.push(M,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cr extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const b=T/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=h[p][v+1],x=h[p][v],T=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&f.push(M,x,b),(p!==n-1||l<Math.PI)&&f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nl extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mt extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yg extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jg extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function va(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function fp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Wo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jg extends Wo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fu:r=e,a=2*t-n;break;case Bu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fu:o=e,l=2*n-t;break;case Bu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[c+T]+M*o[l+T]+x*o[u+T];return r}}class Qg extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class e0 extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new e0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$g(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Mo;class zr extends ei{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=yo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class pp extends ei{constructor(e,t,n,i){super(e,t,n,i)}}pp.prototype.ValueTypeName="color";class Pr extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Pr.prototype.ValueTypeName="number";class t0 extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Dr extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}}Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends ei{constructor(e,t,n){super(e,t,n)}}Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=yo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Lr.prototype.ValueTypeName="vector";class n0{constructor(e="",t=-1,n=[],i=U_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(s0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Zg(l);l=vd(l,1,h),c=vd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];fp(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Pr(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Lr,f+".position",d,"pos",i),n(Dr,f+".quaternion",d,"rot",i),n(Lr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function i0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return pp;case"quaternion":return Dr;case"bool":case"boolean":return zr;case"string":return Vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function s0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i0(s.type);if(s.times===void 0){const t=[],n=[];fp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const o0=new r0;class Hr{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class a0 extends Error{constructor(e,t){super(e),this.response=t}}class mp extends Hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=wi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,A=h.length;b<A;b++){const R=h[b];R.onProgress&&R.onProgress(T)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new a0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ni.add(`file:${e}`,c);const h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const sr=new WeakMap;class l0 extends Hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=sr.get(o);u===void 0&&(u=[],sr.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=So("img");function l(){h(),t&&t(this);const u=sr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ni.remove(`image:${e}`);const d=sr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class _p extends Hr{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new l0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class il extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class c0 extends il{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gl=new ze,yd=new C,Md=new C;class jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class h0 extends jh{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class u0 extends il{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new h0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sd=new ze,Jr=new C,Wl=new C;class d0 extends jh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),i.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,n.coordinateSystem,n.reversedDepth)}}class Kh extends il{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new d0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $h extends np{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class f0 extends jh{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sl extends il{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xl=new WeakMap;class p0 extends Hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Xl.has(o)===!0)i&&i(Xl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Xl.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class m0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Zh="\\[\\]\\.:\\/",g0=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",x0="[^"+Zh.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",Jh),y0=/(WCOD+)?/.source.replace("WCOD",x0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),T0=new RegExp("^"+v0+y0+M0+S0+"$"),E0=["material","materials","bones","map"];class b0{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){const t=T0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=b0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Td=new ze;class w0{constructor(e,t,n=0,i=1/0){this.ray=new kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(Ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)th(e[i],this,n,t);return n.sort(Ed),n}}function Ed(s,e){return s.distance-e.distance}function th(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)th(r[o],e,t,!0)}}class bd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class A0 extends zs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wd(s,e,t,n){const i=R0(n);switch(t){case Xf:return s*e;case Ph:return s*e/i.components*i.byteLength;case Dh:return s*e/i.components*i.byteLength;case Yf:return s*e*2/i.components*i.byteLength;case Lh:return s*e*2/i.components*i.byteLength;case qf:return s*e*3/i.components*i.byteLength;case Un:return s*e*4/i.components*i.byteLength;case Ih:return s*e*4/i.components*i.byteLength;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:case wc:return Math.max(s,16)*Math.max(e,8)/4;case Tc:case bc:return Math.max(s,8)*Math.max(e,8)/2;case Ac:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yc:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R0(s){switch(s){case fi:case Vf:return{byteLength:1,components:1};case _o:case Hf:case Ho:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Us:case Ah:case Kn:return{byteLength:4,components:1};case Gf:case Wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);function gp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function C0(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Kv=`#define NORMAL
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
}`,$v=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,Jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:P0,alphahash_pars_fragment:D0,alphamap_fragment:L0,alphamap_pars_fragment:I0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:O0,aomap_pars_fragment:F0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:j0,color_fragment:K0,color_pars_fragment:$0,color_pars_vertex:Z0,color_vertex:J0,common:Q0,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:hx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:fx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:_x,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:yx,lights_pars_begin:Mx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ex,lights_phong_fragment:bx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:Dx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ux,map_fragment:Ox,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Hx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:jx,normal_pars_fragment:Kx,normal_pars_vertex:$x,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:_v,skinning_vertex:gv,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:yv,tonemapping_fragment:Mv,tonemapping_pars_fragment:Sv,transmission_fragment:Tv,transmission_pars_fragment:Ev,uv_pars_fragment:bv,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Dv,backgroundCube_frag:Lv,cube_vert:Iv,cube_frag:Nv,depth_vert:Uv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Bv,equirect_vert:kv,equirect_frag:zv,linedashed_vert:Vv,linedashed_frag:Hv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:jv,meshnormal_vert:Kv,meshnormal_frag:$v,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},ae={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ai={basic:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Qt([ae.points,ae.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Qt([ae.common,ae.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Qt([ae.sprite,ae.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Qt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Qt([ae.lights,ae.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ai.physical={uniforms:Qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ya={r:0,b:0,g:0},_s=new Qn,cy=new ze;function hy(s,e,t,n,i,r,o){const a=new Ie(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const T=g(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===tl)?(h===void 0&&(h=new Re(new Ft(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Rr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(_s)),h.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ct,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Re(new Go(2,2),new rs({name:"BackgroundMaterial",uniforms:Rr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(ya,tp(s)),n.buffers.color.setClear(ya.r,ya.g,ya.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:v}}function uy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,D,I,B,k){let O=!1;const V=u(B,I,D);r!==V&&(r=V,c(r.object)),O=f(S,B,I,k),O&&g(S,B,I,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(S,D,I,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,D,I){const B=I.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let O=k[D.id];O===void 0&&(O={},k[D.id]=O);let V=O[B];return V===void 0&&(V=d(l()),O[B]=V),V}function d(S){const D=[],I=[],B=[];for(let k=0;k<t;k++)D[k]=0,I[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,I,B){const k=r.attributes,O=D.attributes;let V=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){const re=k[H];let de=O[H];if(de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function g(S,D,I,B){const k={},O=D.attributes;let V=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){let re=O[H];re===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),k[H]=de,V++}r.attributes=k,r.attributesNum=V,r.index=B}function _(){const S=r.newAttributes;for(let D=0,I=S.length;D<I;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const I=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;I[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),k[S]!==D&&(s.vertexAttribDivisor(S,D),k[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let I=0,B=D.length;I<B;I++)D[I]!==S[I]&&(s.disableVertexAttribArray(I),D[I]=0)}function M(S,D,I,B,k,O,V){V===!0?s.vertexAttribIPointer(S,D,I,k,O):s.vertexAttribPointer(S,D,I,B,k,O)}function x(S,D,I,B){_();const k=B.attributes,O=I.getAttributes(),V=D.defaultAttributeValues;for(const X in O){const H=O[X];if(H.location>=0){let te=k[X];if(te===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const re=te.normalized,de=te.itemSize,we=e.get(te);if(we===void 0)continue;const Ze=we.buffer,Ve=we.type,Oe=we.bytesPerElement,q=Ve===s.INT||Ve===s.UNSIGNED_INT||te.gpuType===Ah;if(te.isInterleavedBufferAttribute){const $=te.data,fe=$.stride,Ce=te.offset;if($.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)p(H.location+ve,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ve=0;ve<H.locationSize;ve++)M(H.location+ve,de/H.locationSize,Ve,re,fe*Oe,(Ce+de/H.locationSize*ve)*Oe,q)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)p(H.location+$,te.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let $=0;$<H.locationSize;$++)M(H.location+$,de/H.locationSize,Ve,re,de*Oe,de/H.locationSize*$*Oe,q)}}else if(V!==void 0){const re=V[X];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}v()}function T(){R();for(const S in n){const D=n[S];for(const I in D){const B=D[I];for(const k in B)h(B[k].object),delete B[k];delete D[I]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const I in D){const B=D[I];for(const k in B)h(B[k].object),delete B[k];delete D[I]}delete n[S.id]}function A(S){for(const D in n){const I=n[D];if(I[S.id]===void 0)continue;const B=I[S.id];for(const k in B)h(B[k].object),delete B[k];delete I[S.id]}}function R(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dy(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Un&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function py(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ki,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,M=v*4;let x=p.clippingState||null;l.value=x,x=h(g,d,M,f);for(let T=0;T!==M;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function my(s){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=br:a===Sc&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===Sc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ig(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const hr=4,Ad=[.125,.215,.35,.446,.526,.582],Rs=20,ql=new $h,Rd=new Ie;let Yl=null,jl=0,Kl=0,$l=!1;const Es=(1+Math.sqrt(5))/2,rr=1/Es,Cd=[new C(-Es,rr,0),new C(Es,rr,0),new C(-rr,0,Es),new C(rr,0,Es),new C(0,Es,-rr),new C(0,Es,rr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],_y=new C;class nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=_y}=r;Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,jl,Kl),this._renderer.xr.enabled=$l,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ho,format:Un,colorSpace:rn,depthBuffer:!1},i=Pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(r)),this._blurMaterial=xy(r,e,t)}return i}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,i,r){const l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Rd),u.toneMapping=ts,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new On({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Re(new Ft,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Rd),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const T=this._cubeSize;Ma(i,x*T,M>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===br||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cd[(i-r-1)%Cd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Re(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let v=0;for(let A=0;A<Rs;++A){const R=A/_,y=Math.exp(-R*R/2);p.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],T=3*x*(i>M-hr?i-M+hr:0),b=4*(this._cubeSize-x);Ma(t,T,b,3*x,2*x),l.setRenderTarget(t),l.render(u,ql)}}function gy(s){const e=[],t=[],n=[];let i=s;const r=s-hr+1+Ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-hr?l=Ad[o-s+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,R=b>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(y,_*g*b),M.set(d,m*g*b);const S=[b,b,b,b,b,b];x.set(S,p*g*b)}const T=new Vt;T.setAttribute("position",new Kt(v,_)),T.setAttribute("uv",new Kt(M,m)),T.setAttribute("faceIndex",new Kt(x,p)),e.push(T),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pd(s,e,t){const n=new Os(s,e,t);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xy(s,e,t){const n=new Float32Array(Rs),i=new C(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Dd(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ld(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function vy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mc||l===Sc,h=l===br||l===wr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nh(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new nh(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function yy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function My(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){const T=v[M+0],b=v[M+1],A=v[M+2];d.push(T,b,b,A,A,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const T=M+0,b=M+1,A=M+2;d.push(T,b,b,A,A,T)}}else return;const m=new($f(d)?ep:Qf)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sy(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ty(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ey(s,e,t){const n=new WeakMap,i=new nt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*b*4*u),R=new Zf(A,T,b,u);R.type=Kn,R.needsUpdate=!0;const y=x*4;for(let D=0;D<u;D++){const I=p[D],B=v[D],k=M[D],O=T*b*4*D;for(let V=0;V<I.count;V++){const X=V*y;g===!0&&(i.fromBufferAttribute(I,V),A[O+X+0]=i.x,A[O+X+1]=i.y,A[O+X+2]=i.z,A[O+X+3]=0),_===!0&&(i.fromBufferAttribute(B,V),A[O+X+4]=i.x,A[O+X+5]=i.y,A[O+X+6]=i.z,A[O+X+7]=0),m===!0&&(i.fromBufferAttribute(k,V),A[O+X+8]=i.x,A[O+X+9]=i.y,A[O+X+10]=i.z,A[O+X+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Me(T,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function by(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const xp=new Bt,Id=new hp(1,1),vp=new Zf,yp=new _g,Mp=new ip,Nd=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function Gr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Nd[i];if(r===void 0&&(r=new Float32Array(i),Nd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rl(s,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Py(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Bd.set(n),s.uniformMatrix2fv(this.addr,!1,Bd),Ut(t,n)}}function Dy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Fd.set(n),s.uniformMatrix3fv(this.addr,!1,Fd),Ut(t,n)}}function Ly(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Od.set(n),s.uniformMatrix4fv(this.addr,!1,Od),Ut(t,n)}}function Iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function Oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function Fy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function By(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function Vy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Id.compareFunction=Kf,r=Id):r=xp,t.setTexture2D(e||r,i)}function Hy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yp,i)}function Gy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mp,i)}function Wy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vp,i)}function Xy(s){switch(s){case 5126:return wy;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Dy;case 35676:return Ly;case 5124:case 35670:return Iy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(s,e){s.uniform1fv(this.addr,e)}function Yy(s,e){const t=Gr(e,this.size,2);s.uniform2fv(this.addr,t)}function jy(s,e){const t=Gr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ky(s,e){const t=Gr(e,this.size,4);s.uniform4fv(this.addr,t)}function $y(s,e){const t=Gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zy(s,e){const t=Gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jy(s,e){const t=Gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qy(s,e){s.uniform1iv(this.addr,e)}function eM(s,e){s.uniform2iv(this.addr,e)}function tM(s,e){s.uniform3iv(this.addr,e)}function nM(s,e){s.uniform4iv(this.addr,e)}function iM(s,e){s.uniform1uiv(this.addr,e)}function sM(s,e){s.uniform2uiv(this.addr,e)}function rM(s,e){s.uniform3uiv(this.addr,e)}function oM(s,e){s.uniform4uiv(this.addr,e)}function aM(s,e,t){const n=this.cache,i=e.length,r=rl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xp,r[o])}function lM(s,e,t){const n=this.cache,i=e.length,r=rl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yp,r[o])}function cM(s,e,t){const n=this.cache,i=e.length,r=rl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Mp,r[o])}function hM(s,e,t){const n=this.cache,i=e.length,r=rl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vp,r[o])}function uM(s){switch(s){case 5126:return qy;case 35664:return Yy;case 35665:return jy;case 35666:return Ky;case 35674:return $y;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}class dM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}}class fM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function kd(s,e){s.seq.push(e),s.map[e.id]=e}function mM(s,e,t){const n=s.name,i=n.length;for(Zl.lastIndex=0;;){const r=Zl.exec(n),o=Zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kd(t,c===void 0?new dM(a,s,e):new fM(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new pM(a),kd(t,u)),t=u}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);mM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const _M=37297;let gM=0;function xM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Vd=new We;function vM(s){Qe._getMatrix(Vd,Qe.workingColorSpace,s);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Ba:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xM(s.getShaderSource(e),a)}else return r}function yM(s,e){const t=vM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MM(s,e){let t;switch(e){case R_:t="Linear";break;case C_:t="Reinhard";break;case P_:t="Cineon";break;case Bf:t="ACESFilmic";break;case L_:t="AgX";break;case I_:t="Neutral";break;case D_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sa=new C;function SM(){Qe.getLuminanceCoefficients(Sa);const s=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function EM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function io(s){return s!==""}function Gd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(s){return s.replace(wM,RM)}const AM=new Map;function RM(s,e){let t=qe[e];if(t===void 0){const n=AM.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ih(t)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(s){return s.replace(CM,PM)}function PM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function LM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function NM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function OM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DM(t),c=LM(t),h=IM(t),u=NM(t),d=UM(t),f=TM(t),g=EM(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),p.length>0&&(p+=`
`)):(m=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?qe.tonemapping_pars_fragment:"",t.toneMapping!==ts?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,yM("linearToOutputTexel",t.outputColorSpace),SM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=ih(o),o=Gd(o,t),o=Wd(o,t),a=ih(a),a=Gd(a,t),a=Wd(a,t),o=Xd(o),a=Xd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,T=zd(i,i.VERTEX_SHADER,M),b=zd(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(b)||"",O=I.trim(),V=B.trim(),X=k.trim();let H=!0,te=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,b);else{const re=Hd(i,T,"vertex"),de=Hd(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+re+`
`+de)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||X==="")&&(te=!1);te&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(T),i.deleteShader(b),R=new Da(i,_),y=bM(i,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,_M)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let FM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kM(e),t.set(e,n)),n}}class kM{constructor(e){this.id=FM++,this.code=e,this.usedTimes=0}}function zM(s,e,t,n,i,r,o){const a=new Fh,l=new BM,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,D,I,B){const k=I.fog,O=B.geometry,V=y.isMeshStandardMaterial?I.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=X&&X.mapping===tl?X.image.height:null,te=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,de=re!==void 0?re.length:0;let we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let Ze,Ve,Oe,q;if(te){const it=ai[te];Ze=it.vertexShader,Ve=it.fragmentShader}else Ze=y.vertexShader,Ve=y.fragmentShader,l.update(y),Oe=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const $=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,He=!!y.map,Rt=!!y.matcap,L=!!X,st=!!y.aoMap,Fe=!!y.lightMap,_e=!!y.bumpMap,ce=!!y.normalMap,tt=!!y.displacementMap,pe=!!y.emissiveMap,Ne=!!y.metalnessMap,Be=!!y.roughnessMap,Ke=y.anisotropy>0,P=y.clearcoat>0,E=y.dispersion>0,z=y.iridescence>0,j=y.sheen>0,Z=y.transmission>0,Y=Ke&&!!y.anisotropyMap,be=P&&!!y.clearcoatMap,se=P&&!!y.clearcoatNormalMap,Se=P&&!!y.clearcoatRoughnessMap,Te=z&&!!y.iridescenceMap,ne=z&&!!y.iridescenceThicknessMap,ue=j&&!!y.sheenColorMap,Le=j&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,le=!!y.specularColorMap,Ge=!!y.specularIntensityMap,N=Z&&!!y.transmissionMap,ie=Z&&!!y.thicknessMap,oe=!!y.gradientMap,ge=!!y.alphaMap,J=y.alphaTest>0,K=!!y.alphaHash,ye=!!y.extensions;let ke=ts;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=s.toneMapping);const pt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:Ve,defines:y.defines,customVertexShaderID:Oe,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rn,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:Rt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:H,aoMap:st,lightMap:Fe,bumpMap:_e,normalMap:ce,displacementMap:d&&tt,emissiveMap:pe,normalMapObjectSpace:ce&&y.normalMapType===k_,normalMapTangentSpace:ce&&y.normalMapType===Nh,metalnessMap:Ne,roughnessMap:Be,anisotropy:Ke,anisotropyMap:Y,clearcoat:P,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:E,iridescence:z,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:ue,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:le,specularIntensityMap:Ge,transmission:Z,transmissionMap:N,thicknessMap:ie,gradientMap:oe,opaque:y.transparent===!1&&y.blending===pr&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:J,alphaHash:K,combine:y.combine,mapUv:He&&_(y.map.channel),aoMapUv:st&&_(y.aoMap.channel),lightMapUv:Fe&&_(y.lightMap.channel),bumpMapUv:_e&&_(y.bumpMap.channel),normalMapUv:ce&&_(y.normalMap.channel),displacementMapUv:tt&&_(y.displacementMap.channel),emissiveMapUv:pe&&_(y.emissiveMap.channel),metalnessMapUv:Ne&&_(y.metalnessMap.channel),roughnessMapUv:Be&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:be&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:le&&_(y.specularColorMap.channel),specularIntensityMapUv:Ge&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||Ke),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(He||ge),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const S=g[y.type];let D;if(S){const I=ai[S];D=Cg.clone(I.uniforms)}else D=y.uniforms;return D}function T(y,S){let D;for(let I=0,B=h.length;I<B;I++){const k=h[I];if(k.cacheKey===S){D=k,++D.usedTimes;break}}return D===void 0&&(D=new OM(s,S,y,r),h.push(D)),D}function b(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function VM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function HM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||HM),n.length>1&&n.sort(d||Yd),i.length>1&&i.sort(d||Yd)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function GM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new jd,s.set(n,[o])):i>=r.length?(o=new jd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function WM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function XM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qM=0;function YM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jM(s){const e=new WM,t=XM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new ze,o=new ze;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,T=0,b=0,A=0;c.sort(YM);for(let y=0,S=c.length;y<S;y++){const D=c[y],I=D.color,B=D.intensity,k=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*B,u+=I.g*B,d+=I.b*B;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],B);A++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=V,f++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(I).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const X=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,X.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=X.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=O,x++}_++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(I).multiplyScalar(B),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(B),V.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=A,n.version=qM++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Kd(s){const e=new jM(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Kd(s),e.set(i,[a])):r>=o.length?(a=new Kd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function JM(s,e,t){let n=new Vh;const i=new Me,r=new Me,o=new nt,a=new jg({depthPacking:B_}),l=new Kg,c={},h=t.maxTextureSize,u={[ki]:nn,[nn]:ki,[qn]:qn},d=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:$M,fragmentShader:ZM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let p=this.type;this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),I=s.state;I.setBlending(es),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Ri&&this.type===Ri,k=p===Ri&&this.type!==Ri;for(let O=0,V=b.length;O<V;O++){const X=b[O],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||B===!0||k===!0){const de=this.type!==Ri?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new Os(i.x,i.y,de),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let de=0;de<re;de++){const we=H.getViewport(de);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),I.viewport(o),H.updateMatrices(X,de),n=H.getFrustum(),x(A,R,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ri&&v(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,S,D)};function v(b,A){const R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Os(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,R,f,_,null)}function M(b,A,R,y){let S=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=S.uuid,B=A.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let O=k[B];O===void 0&&(O=S.clone(),k[B]=O,A.addEventListener("dispose",T)),S=O}if(S.visible=A.visible,S.wireframe=A.wireframe,y===Ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=s.properties.get(S);I.light=R}return S}function x(b,A,R,y,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ri)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=e.update(b),k=b.material;if(Array.isArray(k)){const O=B.groups;for(let V=0,X=O.length;V<X;V++){const H=O[V],te=k[H.materialIndex];if(te&&te.visible){const re=M(b,te,y,S);b.onBeforeShadow(s,b,A,R,B,re,H),s.renderBufferDirect(R,null,B,re,b,H),b.onAfterShadow(s,b,A,R,B,re,H)}}}else if(k.visible){const O=M(b,k,y,S);b.onBeforeShadow(s,b,A,R,B,O,null),s.renderBufferDirect(R,null,B,O,b,null),b.onAfterShadow(s,b,A,R,B,O,null)}}const I=b.children;for(let B=0,k=I.length;B<k;B++)x(I[B],A,R,y,S)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const y=c[R],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const QM={[pc]:mc,[_c]:vc,[gc]:yc,[Er]:xc,[mc]:pc,[vc]:_c,[yc]:gc,[xc]:Er};function eS(s,e){function t(){let N=!1;const ie=new nt;let oe=null;const ge=new nt(0,0,0,0);return{setMask:function(J){oe!==J&&!N&&(s.colorMask(J,J,J,J),oe=J)},setLocked:function(J){N=J},setClear:function(J,K,ye,ke,pt){pt===!0&&(J*=ke,K*=ke,ye*=ke),ie.set(J,K,ye,ke),ge.equals(ie)===!1&&(s.clearColor(J,K,ye,ke),ge.copy(ie))},reset:function(){N=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,ie=!1,oe=null,ge=null,J=null;return{setReversed:function(K){if(ie!==K){const ye=e.get("EXT_clip_control");K?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ie=K;const ke=J;J=null,this.setClear(ke)}},getReversed:function(){return ie},setTest:function(K){K?$(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(K){oe!==K&&!N&&(s.depthMask(K),oe=K)},setFunc:function(K){if(ie&&(K=QM[K]),ge!==K){switch(K){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case _c:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case gc:s.depthFunc(s.EQUAL);break;case xc:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=K}},setLocked:function(K){N=K},setClear:function(K){J!==K&&(ie&&(K=1-K),s.clearDepth(K),J=K)},reset:function(){N=!1,oe=null,ge=null,J=null,ie=!1}}}function i(){let N=!1,ie=null,oe=null,ge=null,J=null,K=null,ye=null,ke=null,pt=null;return{setTest:function(it){N||(it?$(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(it){ie!==it&&!N&&(s.stencilMask(it),ie=it)},setFunc:function(it,yi,ii){(oe!==it||ge!==yi||J!==ii)&&(s.stencilFunc(it,yi,ii),oe=it,ge=yi,J=ii)},setOp:function(it,yi,ii){(K!==it||ye!==yi||ke!==ii)&&(s.stencilOp(it,yi,ii),K=it,ye=yi,ke=ii)},setLocked:function(it){N=it},setClear:function(it){pt!==it&&(s.clearStencil(it),pt=it)},reset:function(){N=!1,ie=null,oe=null,ge=null,J=null,K=null,ye=null,ke=null,pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,T=null,b=null,A=new Ie(0,0,0),R=0,y=!1,S=null,D=null,I=null,B=null,k=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=X>=2);let te=null,re={};const de=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Ze=new nt().fromArray(de),Ve=new nt().fromArray(we);function Oe(N,ie,oe,ge){const J=new Uint8Array(4),K=s.createTexture();s.bindTexture(N,K),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<oe;ye++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ie+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return K}const q={};q[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(s.DEPTH_TEST),o.setFunc(Er),_e(!1),ce(Du),$(s.CULL_FACE),st(es);function $(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function fe(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ce(N,ie){return u[N]!==ie?(s.bindFramebuffer(N,ie),u[N]=ie,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ie),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function ve(N,ie){let oe=f,ge=!1;if(N){oe=d.get(ie),oe===void 0&&(oe=[],d.set(ie,oe));const J=N.textures;if(oe.length!==J.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ye=J.length;K<ye;K++)oe[K]=s.COLOR_ATTACHMENT0+K;oe.length=J.length,ge=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,ge=!0);ge&&s.drawBuffers(oe)}function He(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Rt={[As]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[h_]:s.FUNC_REVERSE_SUBTRACT};Rt[u_]=s.MIN,Rt[d_]=s.MAX;const L={[f_]:s.ZERO,[p_]:s.ONE,[m_]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[M_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[g_]:s.DST_ALPHA,[__]:s.ONE_MINUS_SRC_COLOR,[fc]:s.ONE_MINUS_SRC_ALPHA,[y_]:s.ONE_MINUS_DST_COLOR,[x_]:s.ONE_MINUS_DST_ALPHA,[S_]:s.CONSTANT_COLOR,[T_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[b_]:s.ONE_MINUS_CONSTANT_ALPHA};function st(N,ie,oe,ge,J,K,ye,ke,pt,it){if(N===es){_===!0&&(fe(s.BLEND),_=!1);return}if(_===!1&&($(s.BLEND),_=!0),N!==l_){if(N!==m||it!==y){if((p!==As||x!==As)&&(s.blendEquation(s.FUNC_ADD),p=As,x=As),it)switch(N){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lu:s.blendFunc(s.ONE,s.ONE);break;case Iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Iu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,T=null,b=null,A.set(0,0,0),R=0,m=N,y=it}return}J=J||ie,K=K||oe,ye=ye||ge,(ie!==p||J!==x)&&(s.blendEquationSeparate(Rt[ie],Rt[J]),p=ie,x=J),(oe!==v||ge!==M||K!==T||ye!==b)&&(s.blendFuncSeparate(L[oe],L[ge],L[K],L[ye]),v=oe,M=ge,T=K,b=ye),(ke.equals(A)===!1||pt!==R)&&(s.blendColor(ke.r,ke.g,ke.b,pt),A.copy(ke),R=pt),m=N,y=!1}function Fe(N,ie){N.side===qn?fe(s.CULL_FACE):$(s.CULL_FACE);let oe=N.side===nn;ie&&(oe=!oe),_e(oe),N.blending===pr&&N.transparent===!1?st(es):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function ce(N){N!==o_?($(s.CULL_FACE),N!==D&&(N===Du?s.cullFace(s.BACK):N===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),D=N}function tt(N){N!==I&&(V&&s.lineWidth(N),I=N)}function pe(N,ie,oe){N?($(s.POLYGON_OFFSET_FILL),(B!==ie||k!==oe)&&(s.polygonOffset(ie,oe),B=ie,k=oe)):fe(s.POLYGON_OFFSET_FILL)}function Ne(N){N?$(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Be(N){N===void 0&&(N=s.TEXTURE0+O-1),te!==N&&(s.activeTexture(N),te=N)}function Ke(N,ie,oe){oe===void 0&&(te===null?oe=s.TEXTURE0+O-1:oe=te);let ge=re[oe];ge===void 0&&(ge={type:void 0,texture:void 0},re[oe]=ge),(ge.type!==N||ge.texture!==ie)&&(te!==oe&&(s.activeTexture(oe),te=oe),s.bindTexture(N,ie||q[N]),ge.type=N,ge.texture=ie)}function P(){const N=re[te];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(N){Ze.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function Le(N){Ve.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ve.copy(N))}function Ee(N,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let ge=oe.get(N);ge===void 0&&(ge=s.getUniformBlockIndex(ie,N.name),oe.set(N,ge))}function le(N,ie){const ge=c.get(ie).get(N);l.get(ie)!==ge&&(s.uniformBlockBinding(ie,ge,N.__bindingPointIndex),l.set(ie,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,re={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,T=null,b=null,A=new Ie(0,0,0),R=0,y=!1,S=null,D=null,I=null,B=null,k=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:fe,bindFramebuffer:Ce,drawBuffers:ve,useProgram:He,setBlending:st,setMaterial:Fe,setFlipSided:_e,setCullFace:ce,setLineWidth:tt,setPolygonOffset:pe,setScissorTest:Ne,activeTexture:Be,bindTexture:Ke,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:Te,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:se,texStorage3D:Se,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:ue,viewport:Le,reset:Ge}}function tS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):So("canvas")}function _(P,E,z){let j=1;const Z=Ke(P);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(j*Z.width),be=Math.floor(j*Z.height);u===void 0&&(u=g(Y,be));const se=E?g(Y,be):u;return se.width=Y,se.height=be,se.getContext("2d").drawImage(P,0,0,Y,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+be+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,E,z,j,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=E;if(E===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),E===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),E===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),E===s.RGBA){const be=Z?Ba:Qe.getTransfer(j);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=be===ct?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(P,E){let z;return P?E===null||E===Us||E===go?z=s.DEPTH24_STENCIL8:E===Kn?z=s.DEPTH32F_STENCIL8:E===_o&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Us||E===go?z=s.DEPTH_COMPONENT24:E===Kn?z=s.DEPTH_COMPONENT32F:E===_o&&(z=s.DEPTH_COMPONENT16),z}function T(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){const E=P.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),S(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const z=P.source,j=d.get(z);if(j){const Z=j[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(P),Object.keys(j).length===0&&d.delete(z)}n.remove(P)}function y(P){const E=n.get(P);s.deleteTexture(E.__webglTexture);const z=P.source,j=d.get(z);delete j[E.__cacheKey],o.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Z=0;Z<E.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let j=0,Z=z.length;j<Z;j++){const Y=n.get(z[j]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(P)}let D=0;function I(){D=0}function B(){const P=D;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function k(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function O(P,E){const z=n.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,P,E);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function V(P,E){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){q(z,P,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function X(P,E){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){q(z,P,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function H(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const te={[di]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},re={[sn]:s.NEAREST,[zf]:s.NEAREST_MIPMAP_NEAREST,[no]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},de={[z_]:s.NEVER,[q_]:s.ALWAYS,[V_]:s.LESS,[Kf]:s.LEQUAL,[H_]:s.EQUAL,[X_]:s.GEQUAL,[G_]:s.GREATER,[W_]:s.NOTEQUAL};function we(P,E){if(E.type===Kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===wa||E.magFilter===no||E.magFilter===Ii||E.minFilter===Sn||E.minFilter===wa||E.minFilter===no||E.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,te[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,te[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,te[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==no&&E.minFilter!==Ii||E.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));const j=E.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const Y=k(E);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Y].usedTimes++;const be=Z[P.__cacheKey];be!==void 0&&(Z[P.__cacheKey].usedTimes--,be.usedTimes===0&&y(E)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return z}function Ve(P,E,z){return Math.floor(Math.floor(P/z)/E)}function Oe(P,E,z,j){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,z,j,E.data);else{Y.sort((ne,ue)=>ne.start-ue.start);let be=0;for(let ne=1;ne<Y.length;ne++){const ue=Y[be],Le=Y[ne],Ee=ue.start+ue.count,le=Ve(Le.start,E.width,4),Ge=Ve(ue.start,E.width,4);Le.start<=Ee+1&&le===Ge&&Ve(Le.start+Le.count-1,E.width,4)===le?ue.count=Math.max(ue.count,Le.start+Le.count-ue.start):(++be,Y[be]=Le)}Y.length=be+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Se=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ne=0,ue=Y.length;ne<ue;ne++){const Le=Y[ne],Ee=Math.floor(Le.start/4),le=Math.ceil(Le.count/4),Ge=Ee%E.width,N=Math.floor(Ee/E.width),ie=le,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ge,N,ie,oe,z,j,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function q(P,E,z){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);const Z=Ze(P,E),Y=E.source;t.bindTexture(j,P.__webglTexture,s.TEXTURE0+z);const be=n.get(Y);if(Y.version!==be.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const se=Qe.getPrimaries(Qe.workingColorSpace),Se=E.colorSpace===Di?null:Qe.getPrimaries(E.colorSpace),Te=E.colorSpace===Di||se===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=_(E.image,!1,i.maxTextureSize);ne=Be(E,ne);const ue=r.convert(E.format,E.colorSpace),Le=r.convert(E.type);let Ee=M(E.internalFormat,ue,Le,E.colorSpace,E.isVideoTexture);we(j,E);let le;const Ge=E.mipmaps,N=E.isVideoTexture!==!0,ie=be.__version===void 0||Z===!0,oe=Y.dataReady,ge=T(E,ne);if(E.isDepthTexture)Ee=x(E.format===vo,E.type),ie&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ue,Le,null));else if(E.isDataTexture)if(Ge.length>0){N&&ie&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Ge[0].width,Ge[0].height);for(let J=0,K=Ge.length;J<K;J++)le=Ge[J],N?oe&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(s.TEXTURE_2D,J,Ee,le.width,le.height,0,ue,Le,le.data);E.generateMipmaps=!1}else N?(ie&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,ne.width,ne.height),oe&&Oe(E,ne,ue,Le)):t.texImage2D(s.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ue,Le,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,Ge[0].width,Ge[0].height,ne.depth);for(let J=0,K=Ge.length;J<K;J++)if(le=Ge[J],E.format!==Un)if(ue!==null)if(N){if(oe)if(E.layerUpdates.size>0){const ye=wd(le.width,le.height,E.format,E.type);for(const ke of E.layerUpdates){const pt=le.data.subarray(ke*ye/le.data.BYTES_PER_ELEMENT,(ke+1)*ye/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ke,le.width,le.height,1,ue,pt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,ne.depth,ue,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ee,le.width,le.height,ne.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,ne.depth,ue,Le,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Ee,le.width,le.height,ne.depth,0,ue,Le,le.data)}else{N&&ie&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Ge[0].width,Ge[0].height);for(let J=0,K=Ge.length;J<K;J++)le=Ge[J],E.format!==Un?ue!==null?N?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(s.TEXTURE_2D,J,Ee,le.width,le.height,0,ue,Le,le.data)}else if(E.isDataArrayTexture)if(N){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,ne.width,ne.height,ne.depth),oe)if(E.layerUpdates.size>0){const J=wd(ne.width,ne.height,E.format,E.type);for(const K of E.layerUpdates){const ye=ne.data.subarray(K*J/ne.data.BYTES_PER_ELEMENT,(K+1)*J/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,ue,Le,ye)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(E.isData3DTexture)N?(ie&&t.texStorage3D(s.TEXTURE_3D,ge,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(E.isFramebufferTexture){if(ie)if(N)t.texStorage2D(s.TEXTURE_2D,ge,Ee,ne.width,ne.height);else{let J=ne.width,K=ne.height;for(let ye=0;ye<ge;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ee,J,K,0,ue,Le,null),J>>=1,K>>=1}}else if(Ge.length>0){if(N&&ie){const J=Ke(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ee,J.width,J.height)}for(let J=0,K=Ge.length;J<K;J++)le=Ge[J],N?oe&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ue,Le,le):t.texImage2D(s.TEXTURE_2D,J,Ee,ue,Le,le);E.generateMipmaps=!1}else if(N){if(ie){const J=Ke(ne);t.texStorage2D(s.TEXTURE_2D,ge,Ee,J.width,J.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Le,ne)}else t.texImage2D(s.TEXTURE_2D,0,Ee,ue,Le,ne);m(E)&&p(j),be.__version=Y.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $(P,E,z){if(E.image.length!==6)return;const j=Ze(P,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||j===!0){t.activeTexture(s.TEXTURE0+z);const be=Qe.getPrimaries(Qe.workingColorSpace),se=E.colorSpace===Di?null:Qe.getPrimaries(E.colorSpace),Se=E.colorSpace===Di||be===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Te&&!ne?ue[K]=_(E.image[K],!0,i.maxCubemapSize):ue[K]=ne?E.image[K].image:E.image[K],ue[K]=Be(E,ue[K]);const Le=ue[0],Ee=r.convert(E.format,E.colorSpace),le=r.convert(E.type),Ge=M(E.internalFormat,Ee,le,E.colorSpace),N=E.isVideoTexture!==!0,ie=Y.__version===void 0||j===!0,oe=Z.dataReady;let ge=T(E,Le);we(s.TEXTURE_CUBE_MAP,E);let J;if(Te){N&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,Le.width,Le.height);for(let K=0;K<6;K++){J=ue[K].mipmaps;for(let ye=0;ye<J.length;ye++){const ke=J[ye];E.format!==Un?Ee!==null?N?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ke.width,ke.height,Ee,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ke.width,ke.height,Ee,le,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Ge,ke.width,ke.height,0,Ee,le,ke.data)}}}else{if(J=E.mipmaps,N&&ie){J.length>0&&ge++;const K=Ke(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(ne){N?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Ee,le,ue[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ue[K].width,ue[K].height,0,Ee,le,ue[K].data);for(let ye=0;ye<J.length;ye++){const pt=J[ye].image[K].image;N?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,pt.width,pt.height,Ee,le,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Ge,pt.width,pt.height,0,Ee,le,pt.data)}}else{N?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,le,ue[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Ee,le,ue[K]);for(let ye=0;ye<J.length;ye++){const ke=J[ye];N?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ee,le,ke.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Ge,Ee,le,ke.image[K])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,z,j,Z,Y){const be=r.convert(z.format,z.colorSpace),se=r.convert(z.type),Se=M(z.internalFormat,be,se,z.colorSpace),Te=n.get(E),ne=n.get(z);if(ne.__renderTarget=E,!Te.__hasExternalTextures){const ue=Math.max(1,E.width>>Y),Le=Math.max(1,E.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Se,ue,Le,E.depth,0,be,se,null):t.texImage2D(Z,Y,Se,ue,Le,0,be,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,ne.__webglTexture,0,tt(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,ne.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(P,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const j=E.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=x(E.stencilBuffer,Z),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=tt(E);pe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Y,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Y,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Y,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,P)}else{const j=E.textures;for(let Z=0;Z<j.length;Z++){const Y=j[Z],be=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),Se=M(Y.internalFormat,be,se,Y.colorSpace),Te=tt(E);z&&pe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Se,E.width,E.height):pe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,Se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Se,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const Z=j.__webglTexture,Y=tt(E);if(E.depthTexture.format===xo)pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===vo)pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function He(P){const E=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=j}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?ve(E.__webglFramebuffer[0],P):ve(E.__webglFramebuffer,P)}else if(z){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=s.createRenderbuffer(),Ce(E.__webglDepthbuffer[j],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ce(E.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(P,E,z){const j=n.get(P);E!==void 0&&fe(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&He(P)}function L(P){const E=P.texture,z=n.get(P),j=n.get(E);P.addEventListener("dispose",A);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let Se=0;Se<E.mipmaps.length;Se++)z.__webglFramebuffer[se][Se]=s.createFramebuffer()}else z.__webglFramebuffer[se]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)z.__webglFramebuffer[se]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(be)for(let se=0,Se=Z.length;se<Se;se++){const Te=n.get(Z[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&pe(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const Se=Z[se];z.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Te=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),ue=M(Se.internalFormat,Te,ne,Se.colorSpace,P.isXRRenderTarget===!0),Le=tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ue,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,z.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),we(s.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(z.__webglFramebuffer[se][Se],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se);else fe(z.__webglFramebuffer[se],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,Se=Z.length;se<Se;se++){const Te=Z[se],ne=n.get(Te);let ue=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),we(ue,Te),fe(z.__webglFramebuffer,P,Te,s.COLOR_ATTACHMENT0+se,ue,0),m(Te)&&p(ue)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),we(se,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(z.__webglFramebuffer[Se],P,E,s.COLOR_ATTACHMENT0,se,Se);else fe(z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,se,0);m(E)&&p(se),t.unbindTexture()}P.depthBuffer&&He(P)}function st(P){const E=P.textures;for(let z=0,j=E.length;z<j;z++){const Z=E[z];if(m(Z)){const Y=v(P),be=n.get(Z).__webglTexture;t.bindTexture(Y,be),p(Y),t.unbindTexture()}}}const Fe=[],_e=[];function ce(P){if(P.samples>0){if(pe(P)===!1){const E=P.textures,z=P.width,j=P.height;let Z=s.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(P),se=E.length>1;if(se)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Se=P.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const ne=n.get(E[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,Z,s.NEAREST),l===!0&&(Fe.length=0,_e.length=0,Fe.push(s.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(Y),_e.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const ne=n.get(E[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function tt(P){return Math.min(i.maxSamples,P.samples)}function pe(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ne(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Be(P,E){const z=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==rn&&z!==Di&&(Qe.getTransfer(z)===ct?(j!==Un||Z!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Rt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=pe}function nS(s,e){function t(n,i=Di){let r;const o=Qe.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Rh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vf)return s.BYTE;if(n===Hf)return s.SHORT;if(n===_o)return s.UNSIGNED_SHORT;if(n===Ah)return s.INT;if(n===Us)return s.UNSIGNED_INT;if(n===Kn)return s.FLOAT;if(n===Ho)return s.HALF_FLOAT;if(n===Xf)return s.ALPHA;if(n===qf)return s.RGB;if(n===Un)return s.RGBA;if(n===xo)return s.DEPTH_COMPONENT;if(n===vo)return s.DEPTH_STENCIL;if(n===Ph)return s.RED;if(n===Dh)return s.RED_INTEGER;if(n===Yf)return s.RG;if(n===Lh)return s.RG_INTEGER;if(n===Ih)return s.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ec||n===bc||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Dc||n===Lc||n===Ic||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Xc||n===qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wc)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===jc||n===Kc||n===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sS=`
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

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new up(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rs({vertexShader:iS,fragmentShader:sS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oS extends zs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new rS,p={},v=t.getContextAttributes();let M=null,x=null;const T=[],b=[],A=new Me;let R=null;const y=new tn;y.viewport=new nt;const S=new tn;S.viewport=new nt;const D=[y,S],I=new m0;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=T[q];return $===void 0&&($=new Ul,T[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=T[q];return $===void 0&&($=new Ul,T[q]=$),$.getGripSpace()},this.getHand=function(q){let $=T[q];return $===void 0&&($=new Ul,T[q]=$),$.getHandSpace()};function O(q){const $=b.indexOf(q.inputSource);if($===-1)return;const fe=T[$];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let q=0;q<T.length;q++){const $=b[q];$!==null&&(b[q]=null,T[q].disconnect($))}B=null,k=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(M),f=null,d=null,u=null,i=null,x=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?vo:xo,Ce=v.stencil?go:Us);const He={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Os(d.textureWidth,d.textureHeight,{format:Un,type:fi,depthTexture:new hp(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Os(f.framebufferWidth,f.framebufferHeight,{format:Un,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let $=0;$<q.removed.length;$++){const fe=q.removed[$],Ce=b.indexOf(fe);Ce>=0&&(b[Ce]=null,T[Ce].disconnect(fe))}for(let $=0;$<q.added.length;$++){const fe=q.added[$];let Ce=b.indexOf(fe);if(Ce===-1){for(let He=0;He<T.length;He++)if(He>=b.length){b.push(fe),Ce=He;break}else if(b[He]===null){b[He]=fe,Ce=He;break}if(Ce===-1)break}const ve=T[Ce];ve&&ve.connect(fe)}}const H=new C,te=new C;function re(q,$,fe){H.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);const Ce=H.distanceTo(te),ve=$.projectionMatrix.elements,He=fe.projectionMatrix.elements,Rt=ve[14]/(ve[10]-1),L=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],_e=(ve[8]-1)/ve[0],ce=(He[8]+1)/He[0],tt=Rt*_e,pe=Rt*ce,Ne=Ce/(-_e+ce),Be=Ne*-_e;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(Ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ke=Rt+Ne,P=L+Ne,E=tt-Be,z=pe+(Ce-Be),j=st*L/P*Ke,Z=Fe*L/P*Ke;q.projectionMatrix.makePerspective(E,z,j,Z,Ke,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function de(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let $=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=S.near=y.near=$,I.far=S.far=y.far=fe,(B!==I.near||k!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,k=I.far),I.layers.mask=q.layers.mask|6,y.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ce=q.parent,ve=I.cameras;de(I,Ce);for(let He=0;He<ve.length;He++)de(ve[He],Ce);ve.length===2?re(I,y,S):I.projectionMatrix.copy(y.projectionMatrix),we(q,I,Ce)};function we(q,$,fe){fe===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ar*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return p[q]};let Ze=null;function Ve(q,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let L=0;L<fe.length;L++){const st=fe[L];let Fe=null;if(f!==null)Fe=f.getViewport(st);else{const ce=u.getViewSubImage(d,st);Fe=ce.viewport,L===0&&(e.setRenderTargetTextures(x,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(x))}let _e=D[L];_e===void 0&&(_e=new tn,_e.layers.enable(L),_e.viewport=new nt,D[L]=_e),_e.matrix.fromArray(st.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(st.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),L===0&&(I.matrix.copy(_e.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(_e)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(fe[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<fe.length;L++){const st=fe[L].camera;if(st){let Fe=p[st];Fe||(Fe=new up,p[st]=Fe);const _e=u.getCameraImage(st);Fe.sourceTexture=_e}}}}for(let fe=0;fe<T.length;fe++){const Ce=b[fe],ve=T[fe];Ce!==null&&ve!==void 0&&ve.update(Ce,$,c||o)}Ze&&Ze(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Oe=new gp;Oe.setAnimationLoop(Ve),this.setAnimationLoop=function(q){Ze=q},this.dispose=function(){}}}const gs=new Qn,aS=new ze;function lS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tp(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,gs.copy(x),gs.x*=-1,gs.y*=-1,gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(gs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cS(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(v,T);const b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){const M=u();v.__bindingPointIndex=M;const x=s.createBuffer(),T=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=i[v.id],x=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,A=x.length;b<A;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,S=R.length;y<S;y++){const D=R[y];if(f(D,b,y,T)===!0){const I=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let O=0;O<B.length;O++){const V=B[O],X=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,I+k,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,M,x,T){const b=v.value,A=M+"_"+x;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{const R=T[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(v){const M=v.uniforms;let x=0;const T=16;for(let A=0,R=M.length;A<R;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,D=y.length;S<D;S++){const I=y[S],B=Array.isArray(I.value)?I.value:[I.value];for(let k=0,O=B.length;k<O;k++){const V=B[k],X=_(V),H=x%T,te=H%X.boundary,re=H+te;x+=te,re!==0&&T-re<X.storage&&(x+=T-re),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=X.storage}}}const b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class hS{constructor(e={}){const{canvas:t=cg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=It;let b=0,A=0,R=null,y=-1,S=null;const D=new nt,I=new nt;let B=null;const k=new Ie(0);let O=0,V=t.width,X=t.height,H=1,te=null,re=null;const de=new nt(0,0,V,X),we=new nt(0,0,V,X);let Ze=!1;const Ve=new Vh;let Oe=!1,q=!1;const $=new ze,fe=new C,Ce=new nt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Rt(){return R===null?H:1}let L=n;function st(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",J,!1),L===null){const U="webgl2";if(L=st(U,w),L===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,_e,ce,tt,pe,Ne,Be,Ke,P,E,z,j,Z,Y,be,se,Se,Te,ne,ue,Le,Ee,le,Ge;function N(){Fe=new yy(L),Fe.init(),Ee=new nS(L,Fe),_e=new fy(L,Fe,e,Ee),ce=new eS(L,Fe),_e.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),tt=new Ty(L),pe=new VM,Ne=new tS(L,Fe,ce,pe,_e,Ee,tt),Be=new my(x),Ke=new vy(x),P=new C0(L),le=new uy(L,P),E=new My(L,P,tt,le),z=new by(L,E,P,tt),ne=new Ey(L,_e,Ne),se=new py(pe),j=new zM(x,Be,Ke,Fe,_e,le,se),Z=new lS(x,pe),Y=new GM,be=new KM(Fe),Te=new hy(x,Be,Ke,ce,z,f,l),Se=new JM(x,z,_e),Ge=new cS(L,tt,_e,ce),ue=new dy(L,Fe,tt),Le=new Sy(L,Fe,tt),tt.programs=j.programs,x.capabilities=_e,x.extensions=Fe,x.properties=pe,x.renderLists=Y,x.shadowMap=Se,x.state=ce,x.info=tt}N();const ie=new oS(x,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(V,X,!1))},this.getSize=function(w){return w.set(V,X)},this.setSize=function(w,U,G=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,X=U,t.width=Math.floor(w*H),t.height=Math.floor(U*H),G===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(V*H,X*H).floor()},this.setDrawingBufferSize=function(w,U,G){V=w,X=U,H=G,t.width=Math.floor(w*G),t.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,U,G,W){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,U,G,W),ce.viewport(D.copy(de).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(we)},this.setScissor=function(w,U,G,W){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,U,G,W),ce.scissor(I.copy(we).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){ce.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let F=!1;if(R!==null){const ee=R.texture.format;F=ee===Ih||ee===Lh||ee===Dh}if(F){const ee=R.texture.type,he=ee===fi||ee===Us||ee===_o||ee===go||ee===Rh||ee===Ch,xe=Te.getClearColor(),me=Te.getClearAlpha(),De=xe.r,Ue=xe.g,Ae=xe.b;he?(g[0]=De,g[1]=Ue,g[2]=Ae,g[3]=me,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=Ae,_[3]=me,L.clearBufferiv(L.COLOR,0,_))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Te.dispose(),Y.dispose(),be.dispose(),pe.dispose(),Be.dispose(),Ke.dispose(),z.dispose(),le.dispose(),Ge.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ii),ie.removeEventListener("sessionend",bu),hs.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=tt.autoReset,U=Se.enabled,G=Se.autoUpdate,W=Se.needsUpdate,F=Se.type;N(),tt.autoReset=w,Se.enabled=U,Se.autoUpdate=G,Se.needsUpdate=W,Se.type=F}function J(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const U=w.target;U.removeEventListener("dispose",K),ye(U)}function ye(w){ke(w),pe.remove(w)}function ke(w){const U=pe.get(w).programs;U!==void 0&&(U.forEach(function(G){j.releaseProgram(G)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,F,ee){U===null&&(U=ve);const he=F.isMesh&&F.matrixWorld.determinant()<0,xe=e_(w,U,G,W,F);ce.setMaterial(W,he);let me=G.index,De=1;if(W.wireframe===!0){if(me=E.getWireframeAttribute(G),me===void 0)return;De=2}const Ue=G.drawRange,Ae=G.attributes.position;let $e=Ue.start*De,lt=(Ue.start+Ue.count)*De;ee!==null&&($e=Math.max($e,ee.start*De),lt=Math.min(lt,(ee.start+ee.count)*De)),me!==null?($e=Math.max($e,0),lt=Math.min(lt,me.count)):Ae!=null&&($e=Math.max($e,0),lt=Math.min(lt,Ae.count));const wt=lt-$e;if(wt<0||wt===1/0)return;le.setup(F,W,xe,G,me);let gt,ut=ue;if(me!==null&&(gt=P.get(me),ut=Le,ut.setIndex(gt)),F.isMesh)W.wireframe===!0?(ce.setLineWidth(W.wireframeLinewidth*Rt()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(F.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),ce.setLineWidth(Pe*Rt()),F.isLineSegments?ut.setMode(L.LINES):F.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else F.isPoints?ut.setMode(L.POINTS):F.isSprite&&ut.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,Mt=F._multiDrawCounts,et=F._multiDrawCount,mn=me?P.get(me).bytesPerElement:1,Gs=pe.get(W).currentProgram.getUniforms();for(let _n=0;_n<et;_n++)Gs.setValue(L,"_gl_DrawID",_n),ut.render(Pe[_n]/mn,Mt[_n])}else if(F.isInstancedMesh)ut.renderInstances($e,wt,F.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,Pe);ut.renderInstances($e,wt,Mt)}else ut.render($e,wt)};function pt(w,U,G){w.transparent===!0&&w.side===qn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,jo(w,U,G),w.side=ki,w.needsUpdate=!0,jo(w,U,G),w.side=qn):jo(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),p=be.get(G),p.init(U),M.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const xe=ee[he];pt(xe,G,F),W.add(xe)}else pt(ee,G,F),W.add(ee)}),p=M.pop(),W},this.compileAsync=function(w,U,G=null){const W=this.compile(w,U,G);return new Promise(F=>{function ee(){if(W.forEach(function(he){pe.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){F(w);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let it=null;function yi(w){it&&it(w)}function ii(){hs.stop()}function bu(){hs.start()}const hs=new gp;hs.setAnimationLoop(yi),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(w){it=w,ie.setAnimationLoop(w),w===null?hs.stop():hs.start()},ie.addEventListener("sessionstart",ii),ie.addEventListener("sessionend",bu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),p=be.get(w,M.length),p.init(U),M.push(p),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix($,ci,U.reversedDepth),q=this.localClippingEnabled,Oe=se.init(this.clippingPlanes,q),m=Y.get(w,v.length),m.init(),v.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&dl(ee,U,-1/0,x.sortObjects)}dl(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,re),He=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,He&&Te.addToRenderList(m,w),this.info.render.frame++,Oe===!0&&se.beginShadows();const G=p.state.shadowsArray;Se.render(G,w,U),Oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let he=0,xe=ee.length;he<xe;he++){const me=ee[he];Au(W,F,w,me)}He&&Te.render(w);for(let he=0,xe=ee.length;he<xe;he++){const me=ee[he];wu(m,w,me,me.viewport)}}else F.length>0&&Au(W,F,w,U),He&&Te.render(w),wu(m,w,U);R!==null&&A===0&&(Ne.updateMultisampleRenderTarget(R),Ne.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),le.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Oe===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function dl(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){W&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const he=z.update(w),xe=w.material;xe.visible&&m.push(w,he,xe,G,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const he=z.update(w),xe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(xe)){const me=he.groups;for(let De=0,Ue=me.length;De<Ue;De++){const Ae=me[De],$e=xe[Ae.materialIndex];$e&&$e.visible&&m.push(w,he,$e,G,Ce.z,Ae)}}else xe.visible&&m.push(w,he,xe,G,Ce.z,null)}}const ee=w.children;for(let he=0,xe=ee.length;he<xe;he++)dl(ee[he],U,G,W)}function wu(w,U,G,W){const F=w.opaque,ee=w.transmissive,he=w.transparent;p.setupLightsView(G),Oe===!0&&se.setGlobalState(x.clippingPlanes,G),W&&ce.viewport(D.copy(W)),F.length>0&&Yo(F,U,G),ee.length>0&&Yo(ee,U,G),he.length>0&&Yo(he,U,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Au(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Os(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ho:fi,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ee=p.state.transmissionRenderTarget[W.id],he=W.viewport||D;ee.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const xe=x.getRenderTarget(),me=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(k),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),He&&Te.render(G);const Ue=x.toneMapping;x.toneMapping=ts;const Ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Oe===!0&&se.setGlobalState(x.clippingPlanes,W),Yo(w,G,W),Ne.updateMultisampleRenderTarget(ee),Ne.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let lt=0,wt=U.length;lt<wt;lt++){const gt=U[lt],ut=gt.object,Pe=gt.geometry,Mt=gt.material,et=gt.group;if(Mt.side===qn&&ut.layers.test(W.layers)){const mn=Mt.side;Mt.side=nn,Mt.needsUpdate=!0,Ru(ut,G,W,Pe,Mt,et),Mt.side=mn,Mt.needsUpdate=!0,$e=!0}}$e===!0&&(Ne.updateMultisampleRenderTarget(ee),Ne.updateRenderTargetMipmap(ee))}x.setRenderTarget(xe,me,De),x.setClearColor(k,O),Ae!==void 0&&(W.viewport=Ae),x.toneMapping=Ue}function Yo(w,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=w.length;F<ee;F++){const he=w[F],xe=he.object,me=he.geometry,De=he.group;let Ue=he.material;Ue.allowOverride===!0&&W!==null&&(Ue=W),xe.layers.test(G.layers)&&Ru(xe,U,G,me,Ue,De)}}function Ru(w,U,G,W,F,ee){w.onBeforeRender(x,U,G,W,F,ee),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,U,G,W,w,ee),F.transparent===!0&&F.side===qn&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,x.renderBufferDirect(G,U,W,F,w,ee),F.side=ki,F.needsUpdate=!0,x.renderBufferDirect(G,U,W,F,w,ee),F.side=qn):x.renderBufferDirect(G,U,W,F,w,ee),w.onAfterRender(x,U,G,W,F,ee)}function jo(w,U,G){U.isScene!==!0&&(U=ve);const W=pe.get(w),F=p.state.lights,ee=p.state.shadowsArray,he=F.state.version,xe=j.getParameters(w,F.state,ee,U,G),me=j.getProgramCacheKey(xe);let De=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?Ke:Be).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",K),De=new Map,W.programs=De);let Ue=De.get(me);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===he)return Pu(w,xe),Ue}else xe.uniforms=j.getUniforms(w),w.onBeforeCompile(xe,x),Ue=j.acquireProgram(xe,me),De.set(me,Ue),W.uniforms=xe.uniforms;const Ae=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Pu(w,xe),W.needsLights=n_(w),W.lightsStateVersion=he,W.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function Cu(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Da.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Pu(w,U){const G=pe.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function e_(w,U,G,W,F){U.isScene!==!0&&(U=ve),Ne.resetTextureUnits();const ee=U.fog,he=W.isMeshStandardMaterial?U.environment:null,xe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rn,me=(W.isMeshStandardMaterial?Ke:Be).get(W.envMap||he),De=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let wt=ts;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=x.toneMapping);const gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=gt!==void 0?gt.length:0,Pe=pe.get(W),Mt=p.state.lights;if(Oe===!0&&(q===!0||w!==S)){const Zt=w===S&&W.id===y;se.setState(W,w,Zt)}let et=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Mt.state.version||Pe.outputColorSpace!==xe||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==me||W.fog===!0&&Pe.fog!==ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ae||Pe.morphNormals!==$e||Pe.morphColors!==lt||Pe.toneMapping!==wt||Pe.morphTargetsCount!==ut)&&(et=!0):(et=!0,Pe.__version=W.version);let mn=Pe.currentProgram;et===!0&&(mn=jo(W,U,F));let Gs=!1,_n=!1,Wr=!1;const St=mn.getUniforms(),Pn=Pe.uniforms;if(ce.useProgram(mn.program)&&(Gs=!0,_n=!0,Wr=!0),W.id!==y&&(y=W.id,_n=!0),Gs||S!==w){ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",w.projectionMatrix),St.setValue(L,"viewMatrix",w.matrixWorldInverse);const an=St.map.cameraPosition;an!==void 0&&an.setValue(L,fe.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,_n=!0,Wr=!0)}if(F.isSkinnedMesh){St.setOptional(L,F,"bindMatrix"),St.setOptional(L,F,"bindMatrixInverse");const Zt=F.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),St.setValue(L,"boneTexture",Zt.boneTexture,Ne))}F.isBatchedMesh&&(St.setOptional(L,F,"batchingTexture"),St.setValue(L,"batchingTexture",F._matricesTexture,Ne),St.setOptional(L,F,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",F._indirectTexture,Ne),St.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",F._colorsTexture,Ne));const Dn=G.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ne.update(F,G,mn),(_n||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,St.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pn.envMap.value=me,Pn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Pn.envMapIntensity.value=U.environmentIntensity),_n&&(St.setValue(L,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&t_(Pn,Wr),ee&&W.fog===!0&&Z.refreshFogUniforms(Pn,ee),Z.refreshMaterialUniforms(Pn,W,H,X,p.state.transmissionRenderTarget[w.id]),Da.upload(L,Cu(Pe),Pn,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Da.upload(L,Cu(Pe),Pn,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(L,"center",F.center),St.setValue(L,"modelViewMatrix",F.modelViewMatrix),St.setValue(L,"normalMatrix",F.normalMatrix),St.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let an=0,fl=Zt.length;an<fl;an++){const us=Zt[an];Ge.update(us,mn),Ge.bind(us,mn)}}return mn}function t_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function n_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,G){const W=pe.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),pe.get(w.texture).__webglTexture=U,pe.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const G=pe.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const i_=L.createFramebuffer();this.setRenderTarget=function(w,U=0,G=0){R=w,b=U,A=G;let W=!0,F=null,ee=!1,he=!1;if(w){const me=pe.get(w);if(me.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)Ne.setupRenderTarget(w);else if(me.__hasExternalTextures)Ne.rebindTextures(w,pe.get(w.texture).__webglTexture,pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ae=w.depthTexture;if(me.__boundDepthTexture!==Ae){if(Ae!==null&&pe.has(Ae)&&(w.width!==Ae.image.width||w.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Ue=pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?F=Ue[U][G]:F=Ue[U],ee=!0):w.samples>0&&Ne.useMultisampledRTT(w)===!1?F=pe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[G]:F=Ue,D.copy(w.viewport),I.copy(w.scissor),B=w.scissorTest}else D.copy(de).multiplyScalar(H).floor(),I.copy(we).multiplyScalar(H).floor(),B=Ze;if(G!==0&&(F=i_),ce.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&ce.drawBuffers(w,F),ce.viewport(D),ce.scissor(I),ce.setScissorTest(B),ee){const me=pe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,G)}else if(he){const me=U;for(let De=0;De<w.textures.length;De++){const Ue=pe.get(w.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Ue.__webglTexture,G,me)}}else if(w!==null&&G!==0){const me=pe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(w,U,G,W,F,ee,he,xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){ce.bindFramebuffer(L.FRAMEBUFFER,me);try{const De=w.textures[xe],Ue=De.format,Ae=De.type;if(!_e.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(U,G,W,F,Ee.convert(Ue),Ee.convert(Ae),ee))}finally{const De=R!==null?pe.get(R).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,W,F,ee,he,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me)if(U>=0&&U<=w.width-W&&G>=0&&G<=w.height-F){ce.bindFramebuffer(L.FRAMEBUFFER,me);const De=w.textures[xe],Ue=De.format,Ae=De.type;if(!_e.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(U,G,W,F,Ee.convert(Ue),Ee.convert(Ae),0);const lt=R!==null?pe.get(R).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,lt);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hg(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer($e),L.deleteSync(wt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,G=0){const W=Math.pow(2,-G),F=Math.floor(w.image.width*W),ee=Math.floor(w.image.height*W),he=U!==null?U.x:0,xe=U!==null?U.y:0;Ne.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,he,xe,F,ee),ce.unbindTexture()};const s_=L.createFramebuffer(),r_=L.createFramebuffer();this.copyTextureToTexture=function(w,U,G=null,W=null,F=0,ee=null){ee===null&&(F!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let he,xe,me,De,Ue,Ae,$e,lt,wt;const gt=w.isCompressedTexture?w.mipmaps[ee]:w.image;if(G!==null)he=G.max.x-G.min.x,xe=G.max.y-G.min.y,me=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,Ue=G.min.y,Ae=G.isBox3?G.min.z:0;else{const Dn=Math.pow(2,-F);he=Math.floor(gt.width*Dn),xe=Math.floor(gt.height*Dn),w.isDataArrayTexture?me=gt.depth:w.isData3DTexture?me=Math.floor(gt.depth*Dn):me=1,De=0,Ue=0,Ae=0}W!==null?($e=W.x,lt=W.y,wt=W.z):($e=0,lt=0,wt=0);const ut=Ee.convert(U.format),Pe=Ee.convert(U.type);let Mt;U.isData3DTexture?(Ne.setTexture3D(U,0),Mt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),Mt=L.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),Mt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gs=L.getParameter(L.UNPACK_SKIP_PIXELS),_n=L.getParameter(L.UNPACK_SKIP_ROWS),Wr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const St=w.isDataArrayTexture||w.isData3DTexture,Pn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Dn=pe.get(w),Zt=pe.get(U),an=pe.get(Dn.__renderTarget),fl=pe.get(Zt.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,fl.__webglFramebuffer);for(let us=0;us<me;us++)St&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(w).__webglTexture,F,Ae+us),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(U).__webglTexture,ee,wt+us)),L.blitFramebuffer(De,Ue,he,xe,$e,lt,he,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||pe.has(w)){const Dn=pe.get(w),Zt=pe.get(U);ce.bindFramebuffer(L.READ_FRAMEBUFFER,s_),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,r_);for(let an=0;an<me;an++)St?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dn.__webglTexture,F,Ae+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dn.__webglTexture,F),Pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,ee,wt+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,ee),F!==0?L.blitFramebuffer(De,Ue,he,xe,$e,lt,he,xe,L.COLOR_BUFFER_BIT,L.NEAREST):Pn?L.copyTexSubImage3D(Mt,ee,$e,lt,wt+an,De,Ue,he,xe):L.copyTexSubImage2D(Mt,ee,$e,lt,De,Ue,he,xe);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Pn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Mt,ee,$e,lt,wt,he,xe,me,ut,Pe,gt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,ee,$e,lt,wt,he,xe,me,ut,gt.data):L.texSubImage3D(Mt,ee,$e,lt,wt,he,xe,me,ut,Pe,gt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,$e,lt,he,xe,ut,Pe,gt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,$e,lt,gt.width,gt.height,ut,gt.data):L.texSubImage2D(L.TEXTURE_2D,ee,$e,lt,he,xe,ut,Pe,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gs),L.pixelStorei(L.UNPACK_SKIP_ROWS,_n),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wr),ee===0&&U.generateMipmaps&&L.generateMipmap(Mt),ce.unbindTexture()},this.initRenderTarget=function(w){pe.get(w).__webglFramebuffer===void 0&&Ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,ce.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function $d(s,e){if(e===O_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zc||e===jf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Zc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Sp extends Hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=lo.extractUrlBase(e);o=lo.resolveURL(c,this.path)}else o=lo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new mp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tp){try{o[je.KHR_BINARY_GLTF]=new PS(e)}catch(u){i&&i(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new GS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new fS;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new DS(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new LS;break;case je.KHR_MESH_QUANTIZATION:o[u]=new IS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function uS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dS{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Kh(h),c.distance=u;break;case"spot":c=new u0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class fS{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class pS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class mS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class xS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class vS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class yS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}}class MS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class SS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class TS{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ES{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class bS{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class wS{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class AS{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class RS{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class CS{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new ze,m=new C,p=new pi,v=new C(1,1,1),M=new ap(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const T=l[x];M.instanceColor=new Qc(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);vt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Tp="glTF",Qr=12,Zd={JSON:1313821514,BIN:5130562};class PS{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qr,r=new DataView(e,Qr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Zd.JSON){const c=new Uint8Array(e,Qr+o,a);this.content=n.decode(c)}else if(l===Zd.BIN){const c=Qr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=sh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=_r[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,rn,d)})})}}class LS{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class IS{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Ep extends Wo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,M=p-d+u;for(let x=0;x!==a;x++){const T=o[_+x+a],b=o[_+x+l]*h,A=o[g+x+a],R=o[g+x]*h;r[x]=v*T+M*b+m*A+p*R}return r}}const NS=new pi;class US extends Ep{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return NS.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:sn,9729:Sn,9984:zf,9985:wa,9986:no,9987:Ii},Qd={33071:$i,33648:Fa,10497:di},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},OS={CUBICSPLINE:void 0,LINEAR:Mo,STEP:yo},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),s.DefaultMaterial}function xs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function kS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zS(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ec(t.attributes):e=s.indices+":"+ec(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ec(s.targets[n]);return e}function ec(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function rh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HS=new ze;class GS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new _p(this.options.manager):this.textureLoader=new p0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xs(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(lo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Jl[i.type],a=_r[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Jl[i.type],c=_r[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(v);M||(_=new c(a,p*f,i.count*f/h),M=new Ug(_,f/h),t.cache.add(v,M)),m=new kh(M,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Kt(_,l,g);if(i.sparse!==void 0){const p=Jl.SCALAR,v=_r[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new v(o[1],M,i.sparse.count*p),b=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,R=T.length;A<R;A++){const y=T[A];if(m.setX(y,b[A*l]),l>=2&&m.setY(y,b[A*l+1]),l>=3&&m.setZ(y,b[A*l+2]),l>=4&&m.setW(y,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Jd[d.magFilter]||Sn,h.minFilter=Jd[d.minFilter]||Ii,h.wrapS=Qd[d.wrapS]||di,h.wrapT=Qd[d.wrapT]||di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==Sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Bt(_);m.needsUpdate=!0,d(m)}),t.load(lo.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ri(u,o),u.userData.mimeType=o.mimeType||VS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cp,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lp,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],rn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,It)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qn);const h=r.alphaMode||Ql.OPAQUE;if(h===Ql.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ql.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==On){const u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&o!==On&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&xs(i,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ef(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=zS(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ef(new Vt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?FS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=c[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Fg(_,v):new Re(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=$d(p.geometry,jf):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=$d(p.geometry,Zc));else if(m.mode===Nn.LINES)p=new Gg(_,v);else if(m.mode===Nn.LINE_STRIP)p=new Hh(_,v);else if(m.mode===Nn.LINE_LOOP)p=new Wg(_,v);else if(m.mode===Nn.POINTS)p=new Xg(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ri(p,r),m.extensions&&xs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xs(i,u[0],r),u[0];const d=new Tn;r.extensions&&xs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(An.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $h(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,x=d.length;M<x;M++){const T=d[M],b=f[M],A=g[M],R=_[M],y=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const S=n._createAnimationTracks(T,b,A,R,y);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const v=new n0(r,void 0,p);return ri(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,HS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new rp:c.length>1?h=new Tn:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ri(h,r),r.extensions&&xs(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Tn;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&xs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Zn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ji[r.path]){case ji.weights:c=Pr;break;case ji.rotation:c=Dr;break;case ji.translation:case ji.scale:c=Lr;break;default:n.itemSize===1?c=Pr:c=Lr;break}const h=i.interpolation!==void 0?OS[i.interpolation]:Mo,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ji[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Dr?US:Ep;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WS(s,e,t){const n=e.attributes,i=new xt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=rh(_r[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=rh(_r[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new _i;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ef(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=sh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ri(s,e),WS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?BS(s,e.targets,t):s})}const tf={type:"change"},eu={type:"start"},bp={type:"end"},Ta=new kr,nf=new Ki,XS=Math.cos(70*An.DEG2RAD),Lt=new C,ln=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tc=1e-6;class qS extends A0{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new pi,this._lastTargetPosition=new C,this._quat=new pi().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bd,this._sphericalDelta=new bd,this._scale=1,this._panOffset=new C,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new C,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jS.bind(this),this._onPointerDown=YS.bind(this),this._onPointerUp=KS.bind(this),this._onContextMenu=nT.bind(this),this._onMouseWheel=JS.bind(this),this._onKeyDown=QS.bind(this),this._onTouchStart=eT.bind(this),this._onTouchMove=tT.bind(this),this._onMouseDown=$S.bind(this),this._onMouseMove=ZS.bind(this),this._interceptControlDown=iT.bind(this),this._interceptControlUp=sT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tf),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ta.origin.copy(this.object.position),Ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ta.direction))<XS?this.object.lookAt(this.target):(nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ta.intersectPlane(nf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tc||this._lastTargetPosition.distanceToSquared(this.target)>tc?(this.dispatchEvent(tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Lt.copy(i).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function YS(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function jS(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function KS(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bp),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $S(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ht.DOLLY;break;case fr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}break;case fr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(eu)}function ZS(s){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function JS(s){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(s.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bp))}function QS(s){this.enabled!==!1&&this._handleKeyDown(s)}function eT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ht.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ht.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(eu)}function tT(s){switch(this._trackPointer(s),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ht.NONE}}function nT(s){this.enabled!==!1&&s.preventDefault()}function iT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class rT extends sp{constructor(){super();const e=new Ft;e.deleteAttribute("uv");const t=new mt({side:nn}),n=new mt,i=new Kh(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ap(e,n,6),a=new vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Re(e,or(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Re(e,or(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Re(e,or(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Re(e,or(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Re(e,or(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Re(e,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function or(s){return new Yg({color:0,emissive:16777215,emissiveIntensity:s})}function Yt(s){return`./${s.replace(/^\/+/,"")}`}const Q=Object.freeze({assetUrl:Yt("island_color_v10_pondcolorfix.glb?v=1"),player:Object.freeze({totalHeight:2.8,radius:.48,speed:4.8,maxDeltaSeconds:.1,maxSubstepDistance:.08,colliderSkin:.025,groundRayHeight:60,maxGroundDistance:120}),character:Object.freeze({assetUrl:Yt("character_static_v01.glb?v=1"),expectedHeight:1.7,heightTolerance:.08,visualScale:3.3,yawOffset:0}),camera:Object.freeze({offset:Object.freeze({x:15,y:18,z:15}),lookHeight:2.5,followSharpness:6.5,lookSharpness:9,minZoomScale:.48,maxZoomScale:11.5,overviewBlendStart:2.2,zoomWheelFactor:1.16,nearFogDensity:.0032,overviewFogDensity:45e-5,fov:43,near:.05,far:1e3}),opening:Object.freeze({duration:5.8,overviewHeightFactor:.58,overviewDistanceFactor:.76,cameraFov:43,introFadeDuration:.38,cloudDuration:.9,descendAt:.1,overviewDuration:1.4,descendDuration:1.8,boatAt:1.05,boatDuration:3,settleDuration:.9,boatStartOffset:Object.freeze({x:-14,y:0,z:18}),boatEndOffset:Object.freeze({x:-6.4,y:0,z:1.2}),boatClearance:.18,captionAt:4.05,settleAt:4.7}),interaction:Object.freeze({fallbackRadius:2,clickDragTolerance:9,nearStationClickRadiusPx:18,overviewStationClickRadiusPx:46}),stationRoots:Object.freeze({BLD_01_CSU:"TRG_01",BLD_02_Tsinghua:"TRG_02",BLD_03_ByteDance:"TRG_03",BLD_04_Football:"TRG_04",BLD_05_Volleyball:"TRG_05",BLD_06_Photo:"TRG_06"}),required:Object.freeze({nav:"NAV_Walkable",spawn:"SPAWN_Dock",triggers:Object.freeze(["TRG_01","TRG_02","TRG_03","TRG_04","TRG_05","TRG_06"]),colliders:Object.freeze(["COL_BLD_01_CSU","COL_BLD_02_Tsinghua","COL_BLD_03_ByteDance","COL_BLD_04_Football","COL_BLD_05_Volleyball","COL_BLD_06_Photo","COL_BridgeRail_N","COL_BridgeRail_S","COL_SCN_Bench","COL_SCN_DrinkCart","COL_SCN_GazeboPost_01","COL_SCN_GazeboPost_02","COL_SCN_GazeboPost_03","COL_SCN_GazeboPost_04","COL_SCN_Lighthouse","COL_SCN_PicnicTable","COL_SCN_PondEdgeCluster","COL_SCN_Swing","COL_SCN_UmbrellaPole","COL_VEG_Tree_01","COL_VEG_Tree_02","COL_VEG_Tree_03","COL_VEG_Tree_04","COL_VEG_Tree_05","COL_VEG_Tree_06","COL_VEG_Tree_07","COL_VEG_Tree_08","COL_VEG_Tree_09","COL_VEG_Tree_10","COL_VEG_Tree_11","COL_VEG_Tree_12"])}),stationNames:Object.freeze({TRG_01:"中南大学",TRG_02:"清华大学",TRG_03:"字节跳动",TRG_04:"足球场",TRG_05:"排球场",TRG_06:"照相馆"})});function Ci(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eo={duration:.5,overwrite:!1,delay:0},tu,Gt,yt,Fn=1e8,ft=1/Fn,oh=Math.PI*2,oT=oh/4,aT=0,Ap=Math.sqrt,lT=Math.cos,cT=Math.sin,zt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},nu=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},hn=function(e){return e!==!1},iu=function(){return typeof window<"u"},Ea=function(e){return At(e)||zt(e)},Rp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,hT=/random\([^)]+\)/g,uT=/,\s*/g,sf=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pp=/[+-]=-?[.\d]+/,dT=/[^,'"\[\]\s]+/gi,fT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Et,oi,ah,su,Rn={},Ha={},Dp,Lp=function(e){return(Ha=Ir(e,Rn))&&pn},ru=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bo=function(e,t){return!t&&console.warn(e)},Ip=function(e,t){return e&&(Rn[e]=t)&&Ha&&(Ha[e]=t)||Rn},wo=function(){return 0},pT={suppressEvents:!0,isStart:!0,kill:!1},La={suppressEvents:!0,kill:!1},mT={suppressEvents:!0},ou={},ns=[],lh={},Np,yn={},ic={},rf=30,Ia=[],au="",lu=function(e){var t=e[0],n,i;if(mi(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ia.length;i--&&!Ia[i].targetTest(t););n=Ia[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new nm(e[i],n)))||e.splice(i,1);return e},Ds=function(e){return e._gsap||lu(Bn(e))[0]._gsap},Up=function(e,t,n){return(n=e[t])&&At(n)?e[t]():nu(n)&&e.getAttribute&&e.getAttribute(t)||n},un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},gr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_T=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ga=function(){var e=ns.length,t=ns.slice(0),n,i;for(lh={},ns.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cu=function(e){return!!(e._initted||e._startAt||e.add)},Op=function(e,t,n,i){ns.length&&!Gt&&Ga(),e.render(t,n,!!(Gt&&t<0&&cu(e))),ns.length&&!Gt&&Ga()},Fp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dT).length<2?t:zt(e)?e.trim():e},Bp=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ir=function(e,t){for(var n in t)e[n]=t[n];return e},of=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Wa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},co=function(e){var t=e.parent||Et,n=e.keyframes?gT($t(e.keyframes)):Cn;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},kp=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ol=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ch=function(e,t,n,i){return e._startAt&&(Gt?e._startAt.revert(La):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yT=function s(e){return!e||e._ts&&s(e.parent)},af=function(e){return e._repeat?Nr(e._tTime,e=e.duration()+e._rDelay)*e:0},Nr=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},Xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},al=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),al(e),n._dirty||Ls(n,e)),e},zp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xa(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},li=function(e,t,n,i){return t.parent&&os(t),t._start=Tt((zi(n)?n:n||e!==Et?In(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kp(e,t,"_first","_last",e._sort?"_start":0),hh(t)||(e._recent=t),i||zp(e,t),e._ts<0&&ll(e,e._tTime),e},Vp=function(e,t){return(Rn.ScrollTrigger||ru("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},Hp=function(e,t,n,i,r){if(uu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Np!==Mn.frame)return ns.push(e),e._lazy=[r,i],1},MT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ST=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&MT(e)&&!(!e._initted&&hh(e))||(e._ts<0||e._dp._ts<0)&&!hh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Xo(0,e._tDur,t),h=Nr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Nr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Gt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Hp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ch(e,t,n,!0),e._onUpdate&&!n&&En(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&os(e,1),!n&&!Gt&&(En(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ur=function(e,t,n,i){var r=e._repeat,o=Tt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Tt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&ll(e,e._tTime=e._tDur*a),e.parent&&al(e),n||Ls(e.parent,e),e},lf=function(e){return e instanceof cn?Ls(e):Ur(e,e._dur)},ET={_start:0,endTime:wo,totalDuration:wo},In=function s(e,t,n){var i=e.labels,r=e._recent||ET,o=e.duration()>=Fn?r.endTime(!1):e._dur,a,l,c;return zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ho=function(e,t,n){var i=zi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;o.immediateRender=hn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Dt(t[0],o,t[r+1])},cs=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!zt(e)||!(t=fT.exec(e))?"":t[1]},bT=function(e,t,n){return cs(n,function(i){return Xo(e,t,i)})},uh=[].slice,Gp=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==oi},wT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return zt(i)&&!t||Gp(i,1)?(r=n).push.apply(r,Bn(i)):n.push(i)})||n},Bn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):zt(e)&&!n&&(ah||!Or())?uh.call((t||su).querySelectorAll(e),0):$t(e)?wT(e,n):Gp(e)?uh.call(e,0):e?[e]:[]},dh=function(e){return e=Bn(e)[0]||bo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?bo("Invalid scope")||su.createElement("div"):e)}},Wp=function(e){return e.sort(function(){return .5-Math.random()})},Xp=function(e){if(At(e))return e;var t=mi(e)?e:{each:e},n=Is(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return zt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,v,M,x,T,b,A,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Fn])[1],!y){for(A=-Fn;A<(A=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,v=y===Fn?0:l?_*u/y-.5:i/y|0,A=0,R=Fn,b=0;b<_;b++)M=b%y-p,x=v-(b/y|0),m[b]=T=c?Math.abs(c==="y"?x:M):Ap(M*M+x*x),T>A&&(A=T),T<R&&(R=T);i==="random"&&Wp(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=jt(t.amount||t.each)||0,n=n&&_<0?kT(n):n}return _=(m[d]-m.min)/m.max||0,Tt(m.b+(n?n(_):_)*m.v)+m.u}},fh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:jt(n))}},qp=function(e,t){var n=$t(e),i,r;return!n&&mi(e)&&(i=n=e.radius||Fn,e.values?(e=Bn(e.values),(r=!zi(e[0]))&&(i*=i)):e=fh(e.increment)),cs(t,n?At(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Fn,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,r||h===o||zi(o)?h:h+jt(o)}:fh(e))},Yp=function(e,t,n,i){return cs($t(e)?!t:n===!0?!!(n=0):!i,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},RT=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},CT=function(e,t,n){return Kp(e,t,0,1,n)},jp=function(e,t,n){return cs(n,function(i){return e[~~t(i)]})},PT=function s(e,t,n){var i=t-e;return $t(e)?jp(e,s(0,e.length),t):cs(n,function(r){return(i+(r-e)%i)%i+e})},DT=function s(e,t,n){var i=t-e,r=i*2;return $t(e)?jp(e,s(0,e.length-1),t):cs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ao=function(e){return e.replace(hT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(uT);return Yp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Kp=function(e,t,n,i,r){var o=t-e,a=i-n;return cs(r,function(l){return n+((l-e)/o*a||0)})},LT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=zt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=Ir($t(e)?[]:{},e));if(!h){for(l in t)hu.call(a,e,l,"get",t[l]);r=function(g){return pu(g,a)||(o?e.p:e)}}}return cs(n,r)},cf=function(e,t,n){var i=e.labels,r=Fn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},En=function(e,t,n){var i=e.vars,r=i[t],o=yt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ns.length&&Ga(),a&&(yt=a),h=l?r.apply(c,l):r.call(c),yt=o,h},so=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&En(e,"onInterrupt"),e},dr,$p=[],Zp=function(e){if(e)if(e=!e.name&&e.default||e,iu()||e.headless){var t=e.name,n=At(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:wo,render:pu,add:hu,kill:KT,modifier:jT,rawVars:0},o={targetTest:0,get:0,getSetter:fu,aliases:{},register:0};if(Or(),e!==i){if(yn[t])return;Cn(i,Cn(Wa(e,r),o)),Ir(i.prototype,Ir(r,Wa(e,o))),yn[i.prop=t]=i,e.targetTest&&(Ia.push(i),ou[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ip(t,i),e.register&&e.register(pn,i,dn)}else $p.push(e)},dt=255,ro={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},sc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},Jp=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&dt,e&dt]:0:ro.black,r,o,a,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ro[e])i=ro[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&dt,i&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(sf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=sc(l+1/3,r,o),i[1]=sc(l,r,o),i[2]=sc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(sf)||ro.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/dt,o=i[1]/dt,a=i[2]/dt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qp=function(e){var t=[],n=[],i=-1;return e.split(is).forEach(function(r){var o=r.match(ur)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hf=function(e,t,n){var i="",r=(e+i).match(is),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=Jp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Qp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(is,"1").split(ur),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(is),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},is=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ro)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),IT=/hsl[a]?\(/,em=function(e){var t=e.join(" "),n;if(is.lastIndex=0,is.test(t))return n=IT.test(t),e[1]=hf(e[1],n),e[0]=hf(e[0],n,Qp(e[1])),!0},Ro,Mn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,g=function _(m){var p=s()-i,v=m===!0,M,x,T,b;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,M=T-o,(M>0||v)&&(b=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=M+(M>=r?4:r-M),x=1),v||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](T,d,b,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Dp&&(!ah&&iu()&&(oi=ah=window,su=oi.document||{},Rn.gsap=pn,(oi.gsapVersions||(oi.gsapVersions=[])).push(pn.version),Lp(Ha||oi.GreenSockGlobals||!oi.gsap&&oi||{}),$p.forEach(Zp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Ro=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ro=0,c=wo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,v){var M=p?function(x,T,b,A){m(x,T,b,A),u.remove(M)}:m;return u.remove(m),a[v?"unshift":"push"](M),Or(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Or=function(){return!Ro&&Mn.wake()},Je={},NT=/^[\d.\-M][\d.\-,\s]/,UT=/["']/g,OT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(UT,"").trim():+c,i=l.substr(a+1).trim();return t},FT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BT=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OT(t[1])]:FT(e).split(",").map(Fp)):Je._CE&&NT.test(e)?Je._CE("",e):n},kT=function(e){return function(t){return 1-e(1-t)}},Is=function(e,t){return e&&(At(e)?e:Je[e]||BT(e))||t},Vs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return un(e,function(a){Je[a]=Rn[a]=r,Je[o=a.toLowerCase()]=n;for(var l in r)Je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[a+"."+l]=r[l]}),r},tm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/oh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*cT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:tm(a);return r=oh/r,l.config=function(c,h){return s(e,c,h)},l},oc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:tm(n);return i.config=function(r){return s(e,r)},i};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Vs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;Vs("Elastic",rc("in"),rc("out"),rc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Vs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Vs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Vs("Circ",function(s){return-(Ap(1-s*s)-1)});Vs("Sine",function(s){return s===1?1:-lT(s*oT)+1});Vs("Back",oc("in"),oc("out"),oc());Je.SteppedEase=Je.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ft;return function(a){return((i*Xo(0,o,a)|0)+r)*n}}};Eo.ease=Je["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return au+=s+","+s+"Params,"});var nm=function(e,t){this.id=aT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Up,this.set=t?t.getSetter:fu},Co=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ur(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Ro||Mn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ll(this,n),!r._dp||r.parent||zp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Op(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+af(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+af(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Nr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),al(this),vT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&li(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mT);var i=Gt;return Gt=n,cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Gt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(In(this,n),hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i)),this._dur||(this._zTime=-ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ft)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=At(n)?n:Bp,l=function(){var h=i.then;i.then=null,r&&r(),At(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){so(this)},s})();Cn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var cn=(function(s){wp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hn(n.sortChildren),Et&&li(n.parent||Et,Ci(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Vp(Ci(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ho(0,arguments,this),this},t.from=function(i,r,o){return ho(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ho(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,co(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Dt(i,r,In(this,o),1),this},t.call=function(i,r,o){return li(this,Dt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Dt(i,o,In(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,co(o).immediateRender=hn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,co(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Tt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,v,M,x,T,b,A;if(this!==Et&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Tt(h%m),h===l?(_=this._repeat,d=c):(T=Tt(h/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Nr(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),b&&_&1&&(d=c-d,A=1),_!==T&&!this._lock){var R=b&&T&1,y=R===(b&&_&1);if(_<T&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(A?0:Tt(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=TT(this,Tt(a),Tt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(En(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=-ft);break}}f=g}else{f=this._last;for(var S=i<0?i:d;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,o||Gt&&cu(f)),d!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=S?-ft:ft);break}}f=g}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-ft)._zTime=d>=a?1:-1,this._ts))return this._start=x,al(this),this.render(i,r,o);this._onUpdate&&!r&&En(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&os(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(En(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(zi(r)||(r=In(this,r,i)),!(i instanceof Co)){if($t(i))return i.forEach(function(a){return o.add(a,r)}),this;if(zt(i))return this.addLabel(i,r);if(At(i))i=Dt.delayedCall(0,i);else return this}return this!==i?li(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Dt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return zt(i)?this.removeLabel(i):At(i)?this.killTweensOf(i):(i.parent===this&&ol(this,i),i===this._recent&&(this._recent=this._last),Ls(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=In(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Dt.delayedCall(0,r||wo,o);return a.data="isPause",this._hasPause=1,li(this,a,In(this,i))},t.removePause=function(i){var r=this._first;for(i=In(this,i);r;)r._start===i&&r.data==="isPause"&&os(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Zi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Bn(i),l=this._first,c=zi(r),h;l;)l instanceof Dt?_T(l._targets,a)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=In(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Dt.to(o,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ft,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ur(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Cn({startAt:{time:In(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cf(this,In(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cf(this,In(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Tt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ls(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ls(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Fn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,li(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Tt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ur(o,o===Et&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Et._ts&&(Op(Et,Xa(i,Et)),Np=Mn.frame),Mn.frame>=rf){rf+=wn.autoSleep||120;var r=Et._first;if((!r||!r._ts)&&wn.autoSleep&&Mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Mn.sleep()}}},e})(Co);Cn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zT=function(e,t,n,i,r,o,a){var l=new dn(this._pt,e,t,0,1,lm,null,r),c=0,h=0,u,d,f,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ao(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(nc)||[];u=nc.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?gr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=nc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pp.test(i)||p)&&(l.e=0),this._pt=l,l},hu=function(e,t,n,i,r,o,a,l,c,h){At(i)&&(i=i(r||0,e,o));var u=e[t],d=n!=="get"?n:At(u)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=At(u)?c?XT:om:du,g;if(zt(i)&&(~i.indexOf("random(")&&(i=Ao(i)),i.charAt(1)==="="&&(g=gr(d,i)+(jt(d)||0),(g||g===0)&&(i=g))),!h||d!==i||ph)return!isNaN(d*i)&&i!==""?(g=new dn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?YT:am,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&ru(t,i),zT.call(this,e,t,d,i,f,l||wn.stringFilter,c))},VT=function(e,t,n,i,r){if(At(e)&&(e=uo(e,r,t,n,i)),!mi(e)||e.style&&e.nodeType||$t(e)||Rp(e))return zt(e)?uo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=uo(e[a],r,t,n,i);return o},im=function(e,t,n,i,r,o){var a,l,c,h;if(yn[e]&&(a=new yn[e]).init(r,a.rawVars?t[e]:VT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new dn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==dr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Zi,ph,uu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!tu,x=e.timeline,T=i.easeReverse||u,b,A,R,y,S,D,I,B,k,O,V,X,H;if(x&&(!d||!r)&&(r="none"),e._ease=Is(r,Eo.ease),e._rEase=T&&(Is(T)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||d&&!i.stagger){if(B=m[0]?Ds(m[0]).harness:0,X=B&&i[B.prop],b=Wa(i,ou),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?La:pT),_._lazy=0),o){if(os(e._startAt=Dt.set(m,Cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return En(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!f)&&e._startAt.revert(La),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),R=Cn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&hn(l),immediateRender:a,stagger:0,parent:p},b),X&&(R[B.prop]=X),os(e._startAt=Dt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(La):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&hn(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],I=S._gsap||lu(m)[A]._gsap,e._ptLookup[A]=O={},lh[I.id]&&ns.length&&Ga(),V=v===m?A:v.indexOf(S),B&&(k=new B).init(S,X||b,e,V,v)!==!1&&(e._pt=y=new dn(e._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(te){O[te]=y}),k.priority&&(D=1)),!B||X)for(R in b)yn[R]&&(k=im(R,b,e,V,S,v))?k.priority&&(D=1):O[R]=y=hu.call(e,S,R,"get",b[R],V,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),M&&e._pt&&(Zi=e,Et.killTweensOf(S,O,e.globalTime(t)),H=!e.parent,Zi=0),e._pt&&l&&(lh[I.id]=1)}D&&cm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&x.render(Fn,!0,!0)},HT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ph=1,e.vars[t]="+=0",uu(e,a),ph=0,l?bo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ct(n)+jt(u.e)),u.b&&(u.b=h.s+jt(u.b))},GT=function(e,t){var n=e[0]?Ds(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ir({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},WT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if($t(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},uo=function(e,t,n,i,r){return At(e)?e.call(t,n,i,r):zt(e)&&~e.indexOf("random(")?Ao(e):e},sm=au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rm={};un(sm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return rm[s]=1});var Dt=(function(s){wp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:co(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Et,v=($t(n)||Rp(n)?zi(n[0]):"length"in i)?[n]:Bn(n),M,x,T,b,A,R,y,S;if(a._targets=v.length?lu(v):bo("GSAP target "+n+" not found. https://gsap.com",!wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ea(c)||Ea(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(M=a.timeline=new cn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),M.kill(),M.parent=M._dp=Ci(a),M._start=0,d||Ea(c)||Ea(h)){if(b=v.length,y=d&&Xp(d),mi(d))for(A in d)~sm.indexOf(A)&&(S||(S={}),S[A]=d[A]);for(x=0;x<b;x++)T=Wa(i,rm),T.stagger=0,D&&(T.easeReverse=D),S&&Ir(T,S),R=v[x],T.duration=+uo(c,Ci(a),x,R,v),T.delay=(+uo(h,Ci(a),x,R,v)||0)-a._delay,!d&&b===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(R,T,y?y(x,R,v):0),M._ease=Je.none;M.duration()?c=h=0:a.timeline=0}else if(g){co(Cn(M.vars.defaults,{ease:"none"})),M._ease=Is(g.ease||i.ease||"none");var I=0,B,k,O;if($t(g))g.forEach(function(V){return M.to(v,V,">")}),M.duration();else{T={};for(A in g)A==="ease"||A==="easeEach"||WT(A,g[A],T,g.easeEach);for(A in T)for(B=T[A].sort(function(V,X){return V.t-X.t}),I=0,x=0;x<B.length;x++)k=B[x],O={ease:k.e,duration:(k.t-(x?B[x-1].t:0))/100*c},O[A]=k.v,M.to(v,O,I),I+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!tu&&(Zi=Ci(a),Et.killTweensOf(v),Zi=0),li(p,Ci(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Tt(p._time)&&hn(u)&&yT(Ci(a))&&p.data!=="nested")&&(a._tTime=-ft,a.render(Math.max(0,-h)||0)),m&&Vp(Ci(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ft&&!h?l:i<ft?0:i,d,f,g,_,m,p,v,M;if(!c)ST(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=Tt(u%_),u===l?(g=this._repeat,d=c):(m=Tt(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Nr(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Tt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Hp(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=d<a;if(x!==this._inv){var T=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!r&&!m&&(En(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ch(this,i,r,o),En(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ch(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&os(this,1),!r&&!(h&&!a)&&(u||a||p)&&(En(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Ro||Mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||uu(this,c),h=this._ease(c/this._dur),HT(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(ll(this,0),this.parent||kp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?so(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Zi&&Zi.vars.overwrite!==!0)._first||so(this),this.parent&&o!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Bn(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!r||r==="all")&&xT(a,l))return r==="all"&&(this._pt=0),so(this);for(u=this._op=this._op||[],r!=="all"&&(zt(r)&&(_={},un(r,function(v){return _[v]=1}),r=_),r=GT(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,g=d,f={}):(f=u[p]=u[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ol(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&so(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ho(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ho(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Et.killTweensOf(i,r,o)},e})(Co);Cn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(s){Dt[s]=function(){var e=new cn,t=uh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var du=function(e,t,n){return e[t]=n},om=function(e,t,n){return e[t](n)},XT=function(e,t,n,i){return e[t](i.fp,n)},qT=function(e,t,n){return e.setAttribute(t,n)},fu=function(e,t){return At(e[t])?om:nu(e[t])&&e.setAttribute?qT:du},am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},pu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},KT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ol(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$T=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},cm=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},dn=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||am,this.d=l||this,this.set=c||du,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$T,this.m=n,this.mt=r,this.tween=i},s})();un(au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return ou[s]=1});Rn.TweenMax=Rn.TweenLite=Dt;Rn.TimelineLite=Rn.TimelineMax=cn;Et=new cn({sortChildren:!1,defaults:Eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=em;var Ns=[],Na={},ZT=[],uf=0,JT=0,ac=function(e){return(Na[e]||ZT).map(function(t){return t()})},mh=function(){var e=Date.now(),t=[];e-uf>2&&(ac("matchMediaInit"),Ns.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=oi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ac("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),uf=e,ac("matchMedia"))},hm=(function(){function s(t,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=JT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){At(n)&&(r=i,i=n,n=At);var o=this,a=function(){var c=yt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=dh(r)),yt=o,u=i.apply(o,arguments),At(u)&&o._r.push(u),yt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===At?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ns.length;o--;)Ns[o].id===this.id&&Ns.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),QT=(function(){function s(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){mi(n)||(n={matches:n});var o=new hm(0,r||this.scope),a=o.conditions={},l,c,h;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=oi.matchMedia(n[c]),l&&(Ns.indexOf(o)<0&&Ns.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(mh):l.addEventListener("change",mh)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Zp(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return Et.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=Bn(e)[0]);var r=Ds(e||{}).get,o=n?Bp:Fp;return n==="native"&&(n=""),e&&(t?o((yn[t]&&yn[t].get||r)(e,t,n,i)):function(a,l,c){return o((yn[a]&&yn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var i=e.map(function(h){return pn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=yn[t],a=Ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;dr._pt=0,u.init(e,n?h+n:h,dr,0,[e]),u.render(1,u),dr._pt&&pu(1,dr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=pn.to(e,Cn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Is(e.ease,Eo.ease)),of(Eo,e||{})},config:function(e){return of(wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!yn[a]&&!Rn[a]&&bo(t+" effect requires "+a+" plugin.")}),ic[t]=function(a,l,c){return n(Bn(a),Cn(l||{},r),c)},o&&(cn.prototype[t]=function(a,l,c){return this.add(ic[t](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=Is(t)},parseEase:function(e,t){return arguments.length?Is(e,t):Je},getById:function(e){return Et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,r;for(n.smoothChildTiming=hn(e.smoothChildTiming),Et.remove(n),n._dp=0,n._time=n._tTime=Et._time,i=Et._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&li(n,i,i._start-i._delay),i=r;return li(Et,n,0),n},context:function(e,t){return e?new hm(e,t):yt},matchMedia:function(e){return new QT(e)},matchMediaRefresh:function(){return Ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||mh()},addEventListener:function(e,t){var n=Na[e]||(Na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PT,wrapYoyo:DT,distribute:Xp,random:Yp,snap:qp,normalize:CT,getUnit:jt,clamp:bT,splitColor:Jp,toArray:Bn,selector:dh,mapRange:Kp,pipe:AT,unitize:RT,interpolate:LT,shuffle:Wp},install:Lp,effects:ic,ticker:Mn,updateRoot:cn.updateRoot,plugins:yn,globalTimeline:Et,core:{PropTween:dn,globals:Ip,Tween:Dt,Timeline:cn,Animation:Co,getCache:Ds,_removeLinkedListItem:ol,reverting:function(){return Gt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return tu=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return qa[s]=Dt[s]});Mn.add(cn.updateRoot);dr=qa.to({},{duration:0});var eE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tE=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=eE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},lc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(zt(r)&&(l={},un(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}tE(a,r)}}}},pn=qa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Gt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lc("roundProps",fh),lc("modifiers"),lc("snap",qp))||qa;Dt.version=cn.version=pn.version="3.15.0";Dp=1;iu()&&Or();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;var df,Ji,xr,mu,Ps,ff,_u,nE=function(){return typeof window<"u"},Vi={},bs=180/Math.PI,vr=Math.PI/180,ar=Math.atan2,pf=1e8,gu=/([A-Z])/g,iE=/(left|right|width|margin|padding|x)/i,sE=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cE=function(e,t,n){return e.style[t]=n},hE=function(e,t,n){return e.style.setProperty(t,n)},uE=function(e,t,n){return e._gsap[t]=n},dE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fE=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},pE=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},bt="transform",fn=bt+"Origin",mE=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Vi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Pi(i,a)}):this.tfm[e]=o.x?o[e]:Pi(i,e),e===fn&&(this.tfm.zOrigin=o.zOrigin);else return hi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fn,t,"")),e=bt}(r||t)&&this.props.push(e,t,r[e])},fm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_E=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=_u(),(!r||!r.isStart)&&!n[bt]&&(fm(n),i.zOrigin&&n[fn]&&(n[fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pm=function(e,t){var n={target:e,props:[],revert:_E,save:mE};return e._gsap||pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},mm,gh=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},bn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Fr(t)||t,1)||""},mf="O,Moz,ms,Ms,Webkit".split(","),Fr=function(e,t,n){var i=t||Ps,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mf[o]+e in r););return o<0?null:(o===3?"ms":o>=0?mf[o]:"")+e},xh=function(){nE()&&window.document&&(df=window,Ji=df.document,xr=Ji.documentElement,Ps=gh("div")||{style:{}},gh("div"),bt=Fr(bt),fn=bt+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mm=!!Fr("perspective"),_u=pn.core.reverting,mu=1)},_f=function(e){var t=e.ownerSVGElement,n=gh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),xr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),xr.removeChild(n),r},gf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_m=function(e){var t,n;try{t=e.getBBox()}catch{t=_f(e),n=1}return t&&(t.width||t.height)||n||(t=_f(e)),t&&!t.width&&!t.x&&!t.y?{x:+gf(e,["x","cx","x1"])||0,y:+gf(e,["y","cy","y1"])||0,width:0,height:0}:t},gm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_m(e))},as=function(e,t){if(t){var n=e.style,i;t in Vi&&t!==fn&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gu,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,r,o){var a=new dn(e._pt,t,n,0,1,o?dm:um);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},xf={deg:1,rad:1,turn:1},gE={grid:1,flex:1},ls=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ps.style,l=iE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||xf[i]||xf[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&gm(e),(f||o==="%")&&(Vi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Ct(f?r/g*u:r/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Mn.time&&!m.uncache)return Ct(r/m.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,g=e[h],v?e.style[t]=v:as(e,t)}else(f||o==="%")&&!gE[bn(_,"display")]&&(a.position=bn(e,"position")),_===e&&(a.position="static"),_.appendChild(Ps),g=Ps[h],_.removeChild(Ps),a.position="absolute";return l&&f&&(m=Ds(_),m.time=Mn.time,m.width=_[h]),Ct(d?g*r/u:g&&r?u/g*r:0)},Pi=function(e,t,n,i){var r;return mu||xh(),t in hi&&t!=="transform"&&(t=hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(r=Do(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ja(bn(e,fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ya[t]&&Ya[t](e,t,n)||bn(e,t)||Up(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ls(e,t,r,n)+n:r},xE=function(e,t,n,i){if(!n||n==="none"){var r=Fr(t,e,1),o=r&&bn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=bn(e,"borderTopColor"))}var a=new dn(this._pt,e.style,t,0,1,lm),l=0,c=0,h,u,d,f,g,_,m,p,v,M,x,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=bn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=bn(e,t)||i,_?e.style[t]=_:as(e,t)),h=[n,i],em(h),n=h[0],i=h[1],d=n.match(ur)||[],T=i.match(ur)||[],T.length){for(;u=ur.exec(i);)m=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=gr(f,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=ur.lastIndex-M.length,M||(M=M||wn.units[t]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(f=ls(e,t,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?dm:um;return Pp.test(i)&&(a.e=0),this._pt=a,a},vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vf[n]||n,t[1]=vf[i]||i,t.join(" ")},yE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Vi[a]&&(l=1,a=a==="transformOrigin"?fn:bt),as(n,a);l&&(as(n,bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Do(n,1),o.uncache=1,fm(i)))}},Ya={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new dn(e._pt,t,n,0,0,yE);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Po=[1,0,0,1,0,0],xm={},vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yf=function(e){var t=bn(e,bt);return vm(t)?Po:t.substr(7).match(Cp).map(Ct)},xu=function(e,t){var n=e._gsap||Ds(e),i=e.style,r=yf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Po:r):(r===Po&&!e.offsetParent&&e!==xr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,xr.appendChild(e)),r=yf(e),l?i.display=l:as(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):xr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},vh=function(e,t,n,i,r,o){var a=e._gsap,l=r||xu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],M=t.split(" "),x=parseFloat(M[0])||0,T=parseFloat(M[1])||0,b,A,R,y;n?l!==Po&&(A=f*m-g*_)&&(R=x*(m/A)+T*(-_/A)+(_*v-m*p)/A,y=x*(-g/A)+T*(f/A)-(f*v-g*p)/A,x=R,T=y):(b=_m(e),x=b.x+(~M[0].indexOf("%")?x/100*b.width:x),T=b.y+(~(M[1]||M[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(p=x-c,v=T-h,a.xOffset=u+(p*f+v*_)-p,a.yOffset=d+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[fn]="0px 0px",o&&(Qi(o,a,"xOrigin",c,x),Qi(o,a,"yOrigin",h,T),Qi(o,a,"xOffset",u,a.xOffset),Qi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},Do=function(e,t){var n=e._gsap||new nm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=bn(e,fn)||"0",h,u,d,f,g,_,m,p,v,M,x,T,b,A,R,y,S,D,I,B,k,O,V,X,H,te,re,de,we,Ze,Ve,Oe;return h=u=d=_=m=p=v=M=x=0,f=g=1,n.svg=!!(e.getCTM&&gm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),A=xu(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),vh(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,b=n.yOrigin||0,A!==Po&&(D=A[0],I=A[1],B=A[2],k=A[3],h=O=A[4],u=V=A[5],A.length===6?(f=Math.sqrt(D*D+I*I),g=Math.sqrt(k*k+B*B),_=D||I?ar(I,D)*bs:0,v=B||k?ar(B,k)*bs+_:0,v&&(g*=Math.abs(Math.cos(v*vr))),n.svg&&(h-=T-(T*D+b*B),u-=b-(T*I+b*k))):(Oe=A[6],Ze=A[7],re=A[8],de=A[9],we=A[10],Ve=A[11],h=A[12],u=A[13],d=A[14],R=ar(Oe,we),m=R*bs,R&&(y=Math.cos(-R),S=Math.sin(-R),X=O*y+re*S,H=V*y+de*S,te=Oe*y+we*S,re=O*-S+re*y,de=V*-S+de*y,we=Oe*-S+we*y,Ve=Ze*-S+Ve*y,O=X,V=H,Oe=te),R=ar(-B,we),p=R*bs,R&&(y=Math.cos(-R),S=Math.sin(-R),X=D*y-re*S,H=I*y-de*S,te=B*y-we*S,Ve=k*S+Ve*y,D=X,I=H,B=te),R=ar(I,D),_=R*bs,R&&(y=Math.cos(R),S=Math.sin(R),X=D*y+I*S,H=O*y+V*S,I=I*y-D*S,V=V*y-O*S,D=X,O=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ct(Math.sqrt(D*D+I*I+B*B)),g=Ct(Math.sqrt(V*V+Oe*Oe)),R=ar(O,V),v=Math.abs(R)>2e-4?R*bs:0,x=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vm(bn(e,bt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ct(f),n.scaleY=Ct(g),n.rotation=Ct(_)+a,n.rotationX=Ct(m)+a,n.rotationY=Ct(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[fn]=ja(c)),n.xOffset=n.yOffset=0,n.force3D=wn.force3D,n.renderTransform=n.svg?SE:mm?ym:ME,n.uncache=0,n},ja=function(e){return(e=e.split(" "))[0]+" "+e[1]},cc=function(e,t,n){var i=jt(t);return Ct(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},ME=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ym(e,t)},vs="0deg",eo="0px",ys=") ",ym=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==vs||h!==vs)){var b=parseFloat(h)*vr,A=Math.sin(b),R=Math.cos(b),y;b=parseFloat(u)*vr,y=Math.cos(b),o=cc(v,o,A*y*-M),a=cc(v,a,-Math.sin(b)*-M),l=cc(v,l,R*y*-M+M)}m!==eo&&(x+="perspective("+m+ys),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(T||o!==eo||a!==eo||l!==eo)&&(x+=l!==eo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ys),c!==vs&&(x+="rotate("+c+ys),h!==vs&&(x+="rotateY("+h+ys),u!==vs&&(x+="rotateX("+u+ys),(d!==vs||f!==vs)&&(x+="skew("+d+", "+f+ys),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ys),v.style[bt]=x||"translate(0, 0)"},SE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),T,b,A,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=vr,c*=vr,T=Math.cos(l)*u,b=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=vr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),A*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),T*=y,b*=y)),T=Ct(T),b=Ct(b),A=Ct(A),R=Ct(R)):(T=u,R=d,b=A=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=ls(f,"x",o,"px"),x=ls(f,"y",a,"px")),(g||_||m||p)&&(M=Ct(M+g-(g*T+_*A)+m),x=Ct(x+_-(g*b+_*R)+p)),(i||r)&&(y=f.getBBox(),M=Ct(M+i/100*y.width),x=Ct(x+r/100*y.height)),y="matrix("+T+","+b+","+A+","+R+","+M+","+x+")",f.setAttribute("transform",y),v&&(f.style[bt]=y)},TE=function(e,t,n,i,r){var o=360,a=zt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?bs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*pf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*pf)%o-~~(c/o)*o)),e._pt=d=new dn(e._pt,t,n,i,c,rE),d.e=h,d.u="deg",e._props.push(n),d},Mf=function(e,t){for(var n in t)e[n]=t[n];return e},EE=function(e,t,n){var i=Mf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[bt]=t,a=Do(n,1),as(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],o[bt]=t,a=Do(n,1),o[bt]=c);for(l in Vi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=jt(c),g=jt(h),u=f!==g?ls(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new dn(e._pt,a,l,u,d-u,_h),e._pt.u=g||0,e._props.push(l));Mf(a,i)};un("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ya[e>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return Pi(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var Mm={name:"css",register:xh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,v,M,x,T,b,A,R,y;mu||xh(),this.styles=this.styles||pm(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(yn[_]&&im(_,t,n,i,e,r)))){if(f=typeof h,g=Ya[_],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ao(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",is.lastIndex=0,is.test(c)||(m=jt(c),p=jt(h),p?m!==p&&(c=ls(e,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],zt(c)&&~c.indexOf("random(")&&(c=Ao(c)),jt(c+"")||c==="auto"||(c+=wn.units[_]||jt(Pi(e,_))||""),(c+"").charAt(1)==="="&&(c=Pi(e,_))):c=Pi(e,_),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in hi&&(_==="autoAlpha"&&(d===1&&Pi(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),Qi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=hi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Vi,M){if(this.styles.save(_),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=bn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=h,h=bn(e,"perspective"),S?e.style.perspective=S:as(e,"perspective")}u=parseFloat(h)}if(x||(T=e._gsap,T.renderTransform&&!t.parseTransform||Do(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,x=this._pt=new dn(this._pt,a,bt,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new dn(this._pt,T,"scaleY",T.scaleY,(v?gr(T.scaleY,v+u):u)-T.scaleY||0,_h),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(fn,0,a[fn]),h=vE(h),T.svg?vh(e,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Qi(this,T,"zOrigin",T.zOrigin,p),Qi(this,a,_,ja(c),ja(h)));continue}else if(_==="svgOrigin"){vh(e,h,1,b,0,this);continue}else if(_ in xm){TE(this,T,_,d,v?gr(d,v+h):h);continue}else if(_==="smoothOrigin"){Qi(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){EE(this,h,e);continue}}else _ in a||(_=Fr(_)||_);if(M||(u||u===0)&&(d||d===0)&&!sE.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),p=jt(h)||(_ in wn.units?wn.units[_]:m),m!==p&&(d=ls(e,_,c,p)),this._pt=new dn(this._pt,M?T:a,_,d,(v?gr(d,v+u):u)-d,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?lE:_h),this._pt.u=p||0,M&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=aE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=oE);else if(_ in a)xE.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,r);else if(_!=="parseTransform"){ru(_,h);continue}M||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}A&&cm(this)},render:function(e,t){if(t.tween._time||!_u())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pi,aliases:hi,getSetter:function(e,t,n){var i=hi[t];return i&&i.indexOf(",")<0&&(t=i),t in Vi&&t!==fn&&(e._gsap.x||Pi(e,"x"))?n&&ff===n?t==="scale"?dE:uE:(ff=n||{})&&(t==="scale"?fE:pE):e.style&&!nu(e.style[t])?cE:~t.indexOf("-")?hE:fu(e,t)},core:{_removeProperty:as,_getMatrix:xu}};pn.utils.checkPrefix=Fr;pn.core.getStyleSaver=pm;(function(s,e,t,n){var i=un(s+","+e+","+t,function(r){Vi[r]=1});un(e,function(r){wn.units[r]="deg",xm[r]=1}),hi[i[13]]=s+","+e,un(n,function(r){var o=r.split(":");hi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){wn.units[s]="px"});pn.registerPlugin(Mm);var yh=pn.registerPlugin(Mm)||pn;yh.core.Tween;function bE(s=document){const e=s.querySelector("#intro-clouds"),t=s.querySelector("#intro-cloud-left"),n=s.querySelector("#intro-cloud-right");if(!e||!t||!n)throw new Error("开场云层 DOM 不完整");return{layer:e,left:t,right:n}}function Sf(s){s?.layer&&(s.layer.style.pointerEvents="none",s.layer.hidden=!0)}function wE({camera:s,player:e,island:t,spawnObject:n,orbitControls:i,boatObject:r,clouds:o,introOverlay:a,introContent:l,activeSkipButton:c,arrivalCaption:h,cameraTarget:u,config:d,onStateChange:f=()=>{},onEnterWalking:g,onError:_,clearInput:m}){if(!s||!e||!t||!n||!i||!r||!u)throw new Error("相机、人物、岛屿、出生点、控制器或小船尚未初始化");if(!a||!l||!c||!h||!o)throw new Error("开场动画 DOM 元素不完整");let p="ready",v=null,M=!1,x=!1;const T=window.matchMedia("(prefers-reduced-motion: reduce)"),b=new C;n.getWorldPosition(b);const A=t.getObjectByName("ISLAND_Grass_Main")||t,R=new xt().setFromObject(A),y=R.getCenter(new C),S=R.getSize(new C),D=Math.max(S.x,S.z),I=t.getObjectByName("ISLAND_Sea_Surface"),B=I?new xt().setFromObject(I).max.y+d.boatClearance:b.y-.35,k=b.clone().add(new C(d.boatStartOffset.x,d.boatStartOffset.y,d.boatStartOffset.z)),O=b.clone().add(new C(d.boatEndOffset.x,d.boatEndOffset.y,d.boatEndOffset.z));k.y=B,O.y=B;const V=new dp([k,k.clone().lerp(O,.42).add(new C(-2.2,0,-1.1)),k.clone().lerp(O,.76).add(new C(.8,0,.5)),O],!1,"catmullrom",.45),X=new C(y.x+D*d.overviewDistanceFactor*.44,R.max.y+D*d.overviewHeightFactor,y.z+D*d.overviewDistanceFactor*.62),H=b.clone().add(new C(D*.2,D*.31,D*.24)),te=b.clone().add(new C(d.walkingCameraOffset.x*1.7,d.walkingCameraOffset.y*1.65,d.walkingCameraOffset.z*1.7)),re=b.clone().add(d.walkingCameraOffset),de=b.clone().add(new C(0,d.walkingLookHeight,0)),we=y.clone(),Ze={value:0},Ve=new C;function Oe(_e){p=_e,f(_e)}function q(){s.lookAt(we)}function $(_e,ce=!0){V.getPointAt(_e,r.position),V.getTangentAt(Math.min(.999,_e),Ve),r.rotation.y=Math.atan2(Ve.x,Ve.z);const tt=1-An.smoothstep(_e,.82,1);r.position.y+=ce?Math.sin(_e*Math.PI*9)*.045*tt:0,r.rotation.z=ce?Math.sin(_e*Math.PI*7)*.025*tt:0,r.rotation.x=ce?Math.sin(_e*Math.PI*6)*.012*tt:0}function fe(){i.enabled=!1,m(),e.position.copy(b),e.visible=!1,s.fov=d.cameraFov,s.updateProjectionMatrix(),s.position.copy(X),u.copy(y),we.copy(y),$(0,!1),r.visible=!0,q()}function Ce(){a.hidden=!0,c.hidden=!0,h.hidden=!0,Sf(o)}function ve(){x||M||(x=!0,Oe("walking"),g())}function He(){i.enabled=!1,m(),$(1,!1),e.position.copy(b),e.visible=!0,s.position.copy(re),u.copy(de),we.copy(de),q(),Ce()}function Rt(){if(!M){if(p!=="ready"||v){_("动画重复启动",new Error(`当前开场状态为 ${p}`));return}if(T.matches){L();return}try{Oe("introPlaying"),c.hidden=!1,m(),i.enabled=!1,v=yh.timeline({paused:!0,defaults:{overwrite:"auto"},onComplete:()=>{He(),ve()}}),v.to(l,{autoAlpha:0,y:-14,duration:d.introFadeDuration,ease:"power2.inOut"},0),v.to(o.left,{xPercent:-118,yPercent:-26,opacity:0,duration:d.cloudDuration,ease:"power2.inOut"},0),v.to(o.right,{xPercent:118,yPercent:-26,opacity:0,duration:d.cloudDuration,ease:"power2.inOut"},0),v.call(()=>Sf(o),[],d.cloudDuration),v.to(s.position,{x:H.x,y:H.y,z:H.z,duration:d.descendDuration,ease:"power2.inOut",onUpdate:q},d.descendAt),v.to(we,{x:b.x,y:b.y+2.5,z:b.z,duration:d.overviewDuration,ease:"power2.inOut",onUpdate:q},d.descendAt),v.to(Ze,{value:1,duration:d.boatDuration,ease:"power2.inOut",onUpdate:()=>{$(Ze.value),we.copy(r.position).lerp(b,.45),we.y+=1.2,q()}},d.boatAt),v.to(s.position,{x:te.x,y:te.y,z:te.z,duration:d.boatDuration,ease:"power1.inOut",onUpdate:q},d.boatAt),v.call(()=>{Oe("arriving"),h.hidden=!1,yh.set(h,{autoAlpha:0,y:10})},[],d.captionAt),v.to(h,{autoAlpha:1,y:0,duration:.35},d.captionAt),v.call(()=>{e.visible=!0,e.position.copy(b)},[],d.settleAt),v.to(s.position,{x:re.x,y:re.y,z:re.z,duration:d.settleDuration,ease:"power2.inOut",onUpdate:q},d.settleAt),v.to(we,{x:de.x,y:de.y,z:de.z,duration:d.settleDuration,ease:"power2.inOut",onUpdate:q},d.settleAt),v.to(h,{autoAlpha:0,duration:.35},d.duration-.35),v.play(0)}catch(_e){_("GSAP 时间线创建",_e)}}}function L(){if(!(M||x))try{v?.kill(),v=null,He(),ve()}catch(_e){_("跳过开场动画",_e)}}function st(){m(),!(!v||!["introPlaying","arriving"].includes(p))&&v.paused(document.hidden)}function Fe(){M||(M=!0,v?.kill(),v=null,document.removeEventListener("visibilitychange",st))}return document.addEventListener("visibilitychange",st),fe(),{play:Rt,skip:L,dispose:Fe,get state(){return p}}}const AE=/(boat|ship|vessel|小船|船)/i;function RE(s){const e=[];for(let t=s;t;t=t.parent)e.unshift(t.name||t.type);return e.join(" / ")}function CE(s){const e=[];s.traverse(n=>{const i=`${n.name} ${JSON.stringify(n.userData??{})}`;if(!AE.test(i))return;const r=new C;new xt().setFromObject(n).getSize(r),e.push({object:n,name:n.name,path:RE(n),size:r.toArray()})});const t=e.filter(({object:n})=>!e.some(({object:i})=>i!==n&&n.parent===i));return console.table(t.map(({name:n,path:i,size:r})=>({name:n,path:i,size:r.map(o=>o.toFixed(2)).join(" × ")}))),t}function PE(){const s=new Tn;s.name="INTRO_StylizedYacht",s.userData.temporary_intro_boat=!0,s.userData.asset_role="GENERATED_STYLIZED_YACHT";const e=new mt({color:16314591,roughness:.5,metalness:0}),t=new mt({color:14644827,roughness:.58,metalness:0}),n=new mt({color:14262620,roughness:.7,metalness:0}),i=new mt({color:7648708,roughness:.18,metalness:.05,transparent:!0,opacity:.82}),r=new mt({color:5850170,roughness:.62,metalness:0}),o=new Vt;o.setAttribute("position",new at([-.76,.34,-1.3,.76,.34,-1.3,-.9,.34,.52,.9,.34,.52,0,.25,1.82,-.48,-.22,-1.14,.48,-.22,-1.14,-.56,-.2,.48,.56,-.2,.48,0,-.1,1.56],3)),o.setIndex([0,2,7,0,7,5,2,4,9,2,9,7,1,6,8,1,8,3,3,8,9,3,9,4,5,7,9,5,9,6,6,9,8,0,5,6,0,6,1]),o.computeVertexNormals();const a=new Re(o,e);a.name="INTRO_Yacht_Hull",a.castShadow=!0,a.receiveShadow=!0,s.add(a);const l=new Re(new Ft(1.58,.16,1.78),t);l.name="INTRO_Yacht_Accent",l.position.set(0,.31,-.32),l.castShadow=!0,s.add(l);const c=new Re(new Ft(1.42,.12,1.72),n);c.name="INTRO_Yacht_Deck",c.position.set(0,.46,-.28),c.castShadow=!0,s.add(c);const h=new Re(new Ft(1.1,.55,.92),e);h.name="INTRO_Yacht_Cabin",h.position.set(0,.78,-.34),h.castShadow=!0,s.add(h);const u=new Re(new Ft(.88,.3,.055),i);u.name="INTRO_Yacht_Windshield",u.position.set(0,.83,.15),u.rotation.x=-.16,s.add(u);const d=new Re(new Ft(1.34,.11,1.02),t);d.name="INTRO_Yacht_Roof",d.position.set(0,1.1,-.34),d.castShadow=!0,s.add(d);const f=new Re(new Ft(1.02,.2,.32),n);f.name="INTRO_Yacht_RearSeat",f.position.set(0,.63,-1.02),f.castShadow=!0,s.add(f);const g=new Re(new nl(.17,.035,8,20),r);g.name="INTRO_Yacht_SteeringWheel",g.position.set(-.28,.77,.21),g.rotation.x=Math.PI/2.4,s.add(g);for(const _ of[-.66,.66])for(const m of[.55,1.12]){const p=new Re(new vn(.022,.022,.38,8),r);p.name="INTRO_Yacht_RailPost",p.position.set(_*(m>1?.56:1),.58,m),s.add(p)}return s.scale.setScalar(1.08),s}function DE(s){s?.userData?.temporary_intro_boat&&(s.removeFromParent(),s.traverse(e=>{e.geometry?.dispose?.(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose?.()):e.material?.dispose?.()}))}function Ai(s){return s.castShadow=!0,s.receiveShadow=!0,s}function LE(s){if(!s?.isMesh)throw new Error("ROAD_Dock 不存在或不是 Mesh。");s.updateWorldMatrix(!0,!1);const e=new xt().setFromObject(s),t=e.getCenter(new C),n=e.getSize(new C),i=n.x>n.z,r=Math.min(n.x,n.z),o=Math.max(n.x,n.z),a=Math.max(6.8,r*1.55),l=Math.max(14.5,o*1.3),c=new Tn;c.name="ENV_StylizedDock_v02",c.userData.generated_environment_detail=!0,c.userData.source_object=s.name,c.position.set(t.x,e.max.y+.006,t.z),i&&(c.rotation.y=Math.PI/2);const h=new mt({color:15051360,roughness:.76,metalness:0}),u=new mt({color:13073725,roughness:.8,metalness:0}),d=new mt({color:8933421,roughness:.84,metalness:0}),f=new mt({color:15782812,roughness:.92,metalness:0}),g=new mt({color:16770470,emissive:16758874,emissiveIntensity:.75,roughness:.4}),_=Ai(new Re(new Ft(a+.2,.22,l+.2),d));_.name="ENV_Dock_Understructure",_.position.y=-.105,c.add(_);const m=16,p=.055,v=l/m,M=new Ft(a,.055,v-p);for(let k=0;k<m;k+=1){const O=Ai(new Re(M,k%3===1?u:h));O.name=`ENV_Dock_Plank_${String(k+1).padStart(2,"0")}`,O.position.set(0,.028,-l*.5+v*(k+.5)),c.add(O)}const x=new Ft(.24,.34,l+.35);for(const k of[-a*.5-.04,a*.5+.04]){const O=Ai(new Re(x,d));O.name="ENV_Dock_SideBeam",O.position.set(k,-.06,0),c.add(O)}const T=new vn(.15,.19,1.45,10),b=new Cr(.19,12,8),A=[-l*.42,-l*.12,l*.18,l*.43];for(const k of[-1,1])for(const O of A){if(k<0&&O>l*.05)continue;const V=Ai(new Re(T,d));V.name="ENV_Dock_Post",V.position.set(k*(a*.5+.08),.64,O),c.add(V);const X=Ai(new Re(b,u));X.name="ENV_Dock_PostCap",X.position.set(V.position.x,1.37,O),c.add(X)}const R=new vn(.055,.055,l*.84,8),y=Ai(new Re(R,u));y.name="ENV_Dock_Railing_Right",y.rotation.x=Math.PI/2,y.position.set(a*.5+.08,1.15,0),c.add(y);const S=Ai(new Re(new vn(.055,.055,l*.38,8),u));S.name="ENV_Dock_Railing_Left",S.rotation.x=Math.PI/2,S.position.set(-a*.5-.08,1.15,-l*.24),c.add(S);const D=new vn(.19,.24,.48,10);for(const k of[l*.2,l*.39]){const O=Ai(new Re(D,d));O.name="ENV_Dock_Bollard",O.position.set(-a*.5+.46,.28,k),c.add(O)}const I=new vn(.055,.07,2.05,10);for(const k of[-a*.34,a*.34]){const O=Ai(new Re(I,d));O.name="ENV_Dock_LampPost",O.position.set(k,1.03,-l*.36),c.add(O);const V=new Re(new Cr(.22,14,10),g);V.name="ENV_Dock_Lamp",V.position.set(k,2.08,-l*.36),c.add(V)}const B=new vn(.035,.035,1.25,8);for(const k of[l*.26,l*.26+.5]){const O=new Re(B,u);O.name="ENV_Dock_LadderRail",O.position.set(a*.5+.22,-.36,k),c.add(O)}for(let k=0;k<3;k+=1){const O=new Re(new vn(.028,.028,.5,8),f);O.name="ENV_Dock_LadderRung",O.rotation.x=Math.PI/2,O.position.set(a*.5+.22,.02-k*.28,l*.26+.25),c.add(O)}return c.userData.visual_width=a,c.userData.visual_length=l,c}function IE(s){if(!s?.userData?.generated_environment_detail)return;s.removeFromParent();const e=new Set,t=new Set;s.traverse(n=>{n.geometry&&e.add(n.geometry),Array.isArray(n.material)?n.material.forEach(i=>t.add(i)):n.material&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose())}function to(s,e,t){const n=new Re(s,e);return n.name=t,n.castShadow=!0,n.receiveShadow=!0,n}function Tf(s,e,t,n){const i=new dp(s,!1,"centripetal",.5),r=20,o=[],a=[];for(let h=0;h<=r;h+=1){const u=h/r,d=i.getPointAt(u),f=i.getTangentAt(u).setY(0).normalize(),g=new C(-f.z,0,f.x).multiplyScalar(e*.5);if(o.push(d.x+g.x,d.y,d.z+g.z),o.push(d.x-g.x,d.y,d.z-g.z),h===r)continue;const _=h*2;a.push(_,_+1,_+2,_+1,_+3,_+2)}const l=new Vt;l.setAttribute("position",new at(o,3)),l.setIndex(a),l.computeVertexNormals();const c=new Re(l,t);return c.name=n,c.receiveShadow=!0,c}function NE(s,e){if(!s?.isMesh||!s.geometry?.index)return null;s.updateWorldMatrix(!0,!1);const t=new xt().setFromObject(e),n=t.getCenter(new C),i=s.geometry,r=i.clone(),o=r.getAttribute("position"),a=r.index,l=[],c=new C;for(let h=0;h<a.count;h+=3){let u=!1;for(let d=0;d<3;d+=1)c.fromBufferAttribute(o,a.getX(h+d)).applyMatrix4(s.matrixWorld),c.x>t.min.x-2&&c.x<t.max.x+2&&c.z>t.min.z-4.2&&c.z<n.z&&(u=!0);u||l.push(a.getX(h),a.getX(h+1),a.getX(h+2))}return r.setIndex(l),r.computeBoundingSphere(),s.geometry=r,s.userData.environment_trimmed_pond_road=!0,{sourceGeometry:i,generatedGeometry:r}}function Ef(s,e){const t=s.geometry,n=t.getAttribute("position"),i=t.index,r=new C,o=new C;let a=1/0;for(let l=0;l<i.count;l+=1){r.fromBufferAttribute(n,i.getX(l)).applyMatrix4(s.matrixWorld);const c=r.distanceToSquared(e);c>=a||(a=c,o.copy(r))}return o}function UE({sourceDeck:s,sourceNorthRail:e,sourceSouthRail:t,pondWater:n,pondBasin:i,mainRoute:r,northCollider:o,southCollider:a}){if(!s?.isMesh||!n?.isMesh||!i?.isMesh)throw new Error("无法生成跨池塘木桥：缺少桥面、池塘水面或池塘外缘。");s.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!0,!1);const l=new xt().setFromObject(s),c=new xt().setFromObject(n),h=new xt().setFromObject(i),u=l.getCenter(new C);c.getCenter(new C);const d=l.getSize(new C),f=d.x>=d.z,g=Math.max(d.x,d.z),_=f?h.max.x-h.min.x:h.max.z-h.min.z,m=Math.max(g,_-2),p=Math.min(d.x,d.z),v=h.getCenter(new C),M=new C(v.x,l.max.y,v.z),x=M.clone().sub(u);s.visible=!1,e&&(e.visible=!1),t&&(t.visible=!1);for(const Be of[o,a])Be&&(Be.position.x+=x.x,Be.position.z+=x.z,f?Be.scale.x*=m/g:Be.scale.z*=m/g,Be.updateWorldMatrix(!0,!1));const T=new Tn;T.name="ENV_StylizedBridge_v01",T.userData.generated_environment_detail=!0,T.userData.source_object=s.name,T.userData.pond_object=n.name,T.userData.world_shift=x.toArray(),T.position.copy(M),f||(T.rotation.y=Math.PI/2);const b=NE(r,i),A=new mt({color:14986599,roughness:.72,metalness:0}),R=new mt({color:13204286,roughness:.78,metalness:0}),y=new mt({color:8409135,roughness:.84,metalness:0}),S=new mt({color:7492160,roughness:.48,metalness:.2}),D=r?.material?.clone?.()??new mt({color:15916989,roughness:.88,metalness:0});D.name="ENV_BridgeConnector_Road",D.polygonOffset=!0,D.polygonOffsetFactor=-1,D.polygonOffsetUnits=-1;const I=m*.5,B=new C(M.x-I+.15,M.y+.09,M.z),k=new C(M.x+I-.15,M.y+.09,M.z),O=Ef(r,B),V=Ef(r,k),X=O.clone().sub(M),H=V.clone().sub(M),te=B.clone().sub(M),re=k.clone().sub(M),de=new C(h.min.x+.65,M.y+.08,h.min.z-.75),we=new C(h.max.x-.65,M.y+.08,h.min.z-.75),Ze=de.sub(M),Ve=we.sub(M);for(const Be of[X,H,te,re,Ze,Ve])Be.y=.12;const Oe=Tf([X,Ze,te],2,D,"ROAD_BridgeConnector_West"),q=Tf([re,Ve,H],2,D,"ROAD_BridgeConnector_East");Oe.renderOrder=3,q.renderOrder=3,T.add(Oe,q);const $=new Ft(m+.25,.22,.24);for(const Be of[-p*.32,p*.32]){const Ke=to($,y,"ENV_Bridge_UnderBeam");Ke.position.set(0,-.08,Be),T.add(Ke)}const fe=Math.max(18,Math.round(m/.82)),Ce=m/fe,ve=new Ft(Ce-.045,.12,p);for(let Be=0;Be<fe;Be+=1){const Ke=to(ve,Be%4===1?R:A,`ENV_Bridge_Plank_${String(Be+1).padStart(2,"0")}`);Ke.position.set(-m*.5+Ce*(Be+.5),.02,0),Ke.rotation.y=(Be%3-1)*.0025,T.add(Ke)}const He=p*.5-.09,Rt=8,L=new vn(.09,.105,1.22,10),st=new Cr(.12,12,8);for(const Be of[-1,1]){for(let Ke=0;Ke<Rt;Ke+=1){const P=An.lerp(-m*.47,m*.47,Ke/(Rt-1)),E=to(L,y,"ENV_Bridge_RailPost");E.position.set(P,.64,Be*He),T.add(E);const z=to(st,R,"ENV_Bridge_RailCap");z.position.set(P,1.26,Be*He),T.add(z)}for(const Ke of[.72,1.14]){const P=to(new vn(.052,.052,m*.94,10),R,"ENV_Bridge_RailBeam");P.rotation.z=Math.PI/2,P.position.set(0,Ke,Be*He),T.add(P)}}const Fe=new vn(.026,.026,.018,8);for(let Be=1;Be<fe;Be+=4){const Ke=-m*.5+Ce*(Be+.5);for(const P of[-p*.39,p*.39]){const E=new Re(Fe,S);E.name="ENV_Bridge_Fastener",E.position.set(Ke,.091,P),T.add(E)}}const _e=new On({color:4576931,wireframe:!0,transparent:!0,opacity:.48,depthTest:!1}),ce=new Re(new Ft(m,.02,p-.28),_e);ce.name="NAV_Bridge_Walkable_WebFix",ce.userData.interface_role="NAV_WALKABLE",ce.userData.generated_environment_detail=!0,ce.position.y=.09,ce.visible=!1,ce.renderOrder=20,T.add(ce);const tt=_e.clone(),pe=new Re(Oe.geometry,tt);pe.name="NAV_BridgeConnector_West",pe.userData.interface_role="NAV_WALKABLE",pe.visible=!1,pe.position.y=.025;const Ne=new Re(q.geometry,tt);return Ne.name="NAV_BridgeConnector_East",Ne.userData.interface_role="NAV_WALKABLE",Ne.visible=!1,Ne.position.y=.025,T.add(pe,Ne),T.userData.bridge_length=m,T.userData.bridge_width=p,{group:T,navSurface:ce,connectorNavSurfaces:[pe,Ne],shift:x,mainRoute:r,routeTrim:b}}function OE(s){const e=s?.group;if(!e?.userData?.generated_environment_detail)return;e.removeFromParent();const t=new Set,n=new Set;e.traverse(i=>{i.geometry&&t.add(i.geometry),Array.isArray(i.material)?i.material.forEach(r=>n.add(r)):i.material&&n.add(i.material)}),t.forEach(i=>i.dispose()),n.forEach(i=>i.dispose()),s.routeTrim&&s.mainRoute&&(s.mainRoute.geometry=s.routeTrim.sourceGeometry,s.routeTrim.generatedGeometry.dispose(),delete s.mainRoute.userData.environment_trimmed_pond_road)}const FE=Object.freeze({grass:[Yt("textures/environment/grass-soft.svg"),[9,6]],sand:[Yt("textures/environment/sand-soft.svg"),[10,6]],soil:[Yt("textures/environment/soil-bands.svg"),[5,2]],wood:[Yt("textures/environment/wood-soft.svg"),[3,3]],leaf:[Yt("textures/environment/leaf-soft.svg"),[3,3]],stone:[Yt("textures/environment/stone-soft.svg"),[3,3]],plaster:[Yt("textures/environment/plaster-soft.svg"),[3,4]],waterNormal:[Yt("textures/environment/water-normal.svg"),[5,5]]});async function BE(s){const e=new _p,t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=await Promise.all(Object.entries(FE).map(async([i,[r,o]])=>{const a=await e.loadAsync(r);return a.name=`ENV_Texture_${i}`,a.wrapS=di,a.wrapT=di,a.repeat.set(o[0],o[1]),a.anisotropy=t,a.colorSpace=i==="waterNormal"?Di:It,a.needsUpdate=!0,[i,a]}));return Object.fromEntries(n)}function bf(s,e="planar"){if(s.geometry.getAttribute("uv"))return;const t=s.geometry.clone();t.computeBoundingBox();const n=t.boundingBox,i=t.getAttribute("position"),r=new Float32Array(i.count*2),o=Math.max(.001,n.max.x-n.min.x),a=Math.max(.001,n.max.y-n.min.y),l=Math.max(.001,n.max.z-n.min.z),c=(n.min.x+n.max.x)*.5,h=(n.min.z+n.max.z)*.5;for(let u=0;u<i.count;u+=1){const d=i.getX(u),f=i.getY(u),g=i.getZ(u);e==="cylindrical"?(r[u*2]=Math.atan2(g-h,d-c)/(Math.PI*2)+.5,r[u*2+1]=(f-n.min.y)/a):(r[u*2]=(d-n.min.x)/o,r[u*2+1]=(g-n.min.z)/l)}t.setAttribute("uv",new Kt(r,2)),s.geometry=t,s.userData.generated_environment_uv=e}function kE(s,e){const t=s.name||"",n=e?.name||"";return t==="ISLAND_Grass_Main"||t==="ISLAND_Pond_Basin"?"grass":t==="ISLAND_Sand_Beach"?"sand":t==="ISLAND_Body_Sides"&&n==="ENV_v01_IslandSoil"?"soil":/^(SCN_|VEG_)/.test(t)&&/(Wood|WoodDark|Trunk)/.test(n)?"wood":/^(SCN_|VEG_)/.test(t)&&/Leaf/.test(n)?"leaf":/^SCN_/.test(t)&&/Stone/.test(n)?"stone":/^SCN_/.test(t)&&/Soil/.test(n)?"soil":/^SCN_Lighthouse_(Tower|Base)/.test(t)?t.endsWith("Base")?"stone":"plaster":/^SCN_(DrinkCart_Body|Umbrella_Canopy)/.test(t)?"plaster":null}function zE(s,e){const t=new Map,n=new Set,i=new Set;let r=0;s.traverse(o=>{if(!o.isMesh||!/^(ISLAND_|SCN_|VEG_)/.test(o.name||""))return;o.name.startsWith("ISLAND_")&&bf(o,o.name==="ISLAND_Body_Sides"?"cylindrical":"planar");const a=Array.isArray(o.material)?o.material:[o.material];let l=!1;const c=a.map(h=>{const u=kE(o,h);if(!u)return h;const d=`${h.uuid}:${u}`;if(!t.has(d)){const f=h.clone();f.name=`${h.name}_Detailed`,f.map=e[u],f.roughness=An.clamp((f.roughness??.8)-.04,.22,.96),f.dithering=!0,f.needsUpdate=!0,t.set(d,f),n.add(f)}return l=!0,t.get(d)});l&&(o.material=Array.isArray(o.material)?c:c[0],r+=1)});for(const o of["ISLAND_Pond_Water","ISLAND_Sea_Surface"]){const a=s.getObjectByName(o);if(!a?.isMesh)continue;bf(a,"planar");const l=a.material.clone(),c=e.waterNormal.clone();c.name=`ENV_Texture_waterNormal_${o}`,c.wrapS=di,c.wrapT=di,c.repeat.set(o.includes("Pond")?5:80,o.includes("Pond")?5:60),c.needsUpdate=!0,l.name=`${a.material.name}_Detailed`,l.normalMap=c,l.normalScale=new Me(.055,.055),l.roughness=o.includes("Pond")?.28:.34,l.envMapIntensity=.72,l.dithering=!0,l.needsUpdate=!0,a.material=l,n.add(l),i.add(c),r+=1}return{generatedMaterials:n,generatedTextures:i,texturedMeshCount:r}}function VE(s,e){const t=s.getObjectByName("SCN_Lighthouse_Tower"),n=s.getObjectByName("SCN_Lighthouse_Lantern");if(!t?.isMesh||!n?.isMesh)return 0;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!1);const i=new xt().setFromObject(t),r=i.getCenter(new C),o=i.getSize(new C),a=Math.max(o.x,o.z)*.5+.035,l=new mt({color:15300695,roughness:.58,metalness:0}),c=new mt({color:6135204,emissive:1456188,emissiveIntensity:.18,roughness:.22,metalness:.05});let h=0;for(const M of[.25,.62]){const x=new Re(new nl(a,.055,8,48),l);x.name="ENV_Lighthouse_AccentRing",x.rotation.x=Math.PI/2,x.position.set(r.x,i.min.y+o.y*M,r.z),x.castShadow=!0,e.add(x),h+=1}const u=new Go(Math.max(.24,o.x*.22),Math.max(.38,o.y*.12)),d=i.min.y+o.y*.48,f=[[0,o.z*.5+.012,0],[0,-o.z*.5-.012,Math.PI],[o.x*.5+.012,0,Math.PI/2],[-o.x*.5-.012,0,-Math.PI/2]];for(const[M,x,T]of f){const b=new Re(u,c);b.name="ENV_Lighthouse_Window",b.position.set(r.x+M,d,r.z+x),b.rotation.y=T,e.add(b),h+=1}const _=new xt().setFromObject(n).getCenter(new C),m=new On({color:16767377,transparent:!0,opacity:.74}),p=new Re(new Cr(Math.max(.13,a*.16),14,10),m);p.name="ENV_Lighthouse_LanternGlow",p.position.copy(_),e.add(p);const v=new Kh(16761964,1.25,Math.max(10,o.y*2.4),2);return v.name="ENV_Lighthouse_WarmLight",v.position.copy(_),e.add(v),h+2}function HE(s,e){const t=s.getObjectByName("ISLAND_Grass_Main");if(!t?.isMesh)return 0;const n=new xt().setFromObject(t),i=n.getCenter(new C),r=n.getSize(new C),o=[new mt({color:14206634,roughness:.94}),new mt({color:12174003,roughness:.92}),new mt({color:15062973,roughness:.95})],a=new qh(1,1),l=[.18,.63,1.08,1.48,2.02,2.43,2.88,3.32,3.76,4.22,4.72,5.16,5.67,6.04];for(let c=0;c<l.length;c+=1){const h=l[c],u=new Re(a,o[c%o.length]);u.name=`ENV_CoastPebble_${String(c+1).padStart(2,"0")}`,u.position.set(i.x+Math.cos(h)*r.x*(.425+c%3*.009),n.max.y+.075,i.z+Math.sin(h)*r.z*(.425+(c+1)%3*.009));const d=.16+c%4*.045;u.scale.set(d*1.35,d*.58,d),u.rotation.set(0,h*1.7,(c%3-1)*.11),u.castShadow=!0,u.receiveShadow=!0,e.add(u)}return l.length}async function GE(s,e){const t=await BE(e),n=new Tn;n.name="ENV_WebDetailLayer_v01",n.userData.generated_environment_detail=!0;const{generatedMaterials:i,generatedTextures:r,texturedMeshCount:o}=zE(s,t),a=s.getObjectByName("ISLAND_Sea_Surface"),l=a?.scale.clone()??null;a?.isMesh&&(a.scale.x*=12,a.scale.z*=12,a.frustumCulled=!1,a.updateWorldMatrix(!0,!1));const c=VE(s,n),h=HE(s,n);return{group:n,textures:t,generatedMaterials:i,generatedTextures:r,texturedMeshCount:o,lighthouseDetailCount:c,coastPebbleCount:h,seaSurface:a,originalSeaScale:l}}function WE(s){if(!s)return;s.group?.removeFromParent();const e=new Set,t=new Set(s.generatedMaterials??[]);s.group?.traverse(n=>{n.geometry&&e.add(n.geometry),Array.isArray(n.material)?n.material.forEach(i=>t.add(i)):n.material&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),s.generatedTextures?.forEach(n=>n.dispose()),Object.values(s.textures??{}).forEach(n=>n.dispose()),s.seaSurface&&s.originalSeaScale&&(s.seaSurface.scale.copy(s.originalSeaScale),s.seaSurface.frustumCulled=!0)}const Hn=Yt("stations/01-csu/images"),Gn=Yt("stations/02-tsinghua/images"),lr=Yt("stations/03-bytedance/images"),Ms=Yt("stations/04-football/images"),Ss=Yt("stations/05-volleyball/images"),qt=Yt("stations/06-photo/images"),Sm=Object.freeze({TRG_01:`
    <div class="station-story station-story-csu">
      <header class="station-hero">
        <img src="${Hn}/01-岳麓山顶日出.jpg" alt="岳麓山顶看到的长沙日出" />
        <div class="station-hero-shade"></div>
        <div class="station-hero-copy">
          <p class="station-kicker">第一站 · 湖南长沙</p>
          <h2>中南大学</h2>
          <p class="station-lead">欢迎来到第一站——中南大学。</p>
          <p>我的本科四年在湖南长沙、岳麓山脚下展开。这里有清晨的日出、沾着水泥灰的实习服，也有相机、公众号和送给同学们的毕业礼物。</p>
        </div>
      </header>

      <div class="station-tags" aria-label="页面标签">
        <span>湖南长沙</span><span>岳麓山</span><span>土木工程</span><span>摄影与内容创作</span>
      </div>

      <section class="story-section">
        <div class="story-heading"><span>01</span><h3>岳麓山脚下的大学生活</h3></div>
        <p>学校离岳麓山很近，我们最常见的团建活动不是聚餐，也不是桌游，而是爬岳麓山。</p>
        <p>大一时，我就熟练掌握了一条 40 分钟登顶路线。后来再上山，已经从“努力登顶”变成了“熟练带路”。偶尔也会为了等一场日出早早出发，看太阳从长沙的楼宇之间慢慢升起来。</p>
        <a class="story-image story-image-wide" href="${Hn}/01-岳麓山顶日出.jpg" target="_blank" rel="noopener">
          <img src="${Hn}/01-岳麓山顶日出.jpg" alt="岳麓山顶日出" />
          <span><strong>岳麓山顶，等待长沙醒来</strong><small>为了这一刻，早起和爬山都变得值得。点击查看原图</small></span>
        </a>
      </section>

      <section class="story-section">
        <div class="story-heading"><span>02</span><h3>非常“土”与“木”的专业</h3></div>
        <p>我的专业是土木工程。四年里，我拌过水泥、开过叉车，也凿过石头——确实非常之“土”和“木”。</p>
        <p>地质实习时，我们蹲在路边和山脚辨认岩石、观察地层；材料实习里，要亲手把水泥、砂石和水混合到合适的状态；到了生产实习现场，又第一次坐上叉车驾驶位。土木工程对我来说，从来不只是图纸和公式，也是这些真正沾过灰、动过手的现场。</p>
        <div class="story-gallery story-gallery-three">
          <a class="story-image" href="${Hn}/02-地质实习.jpeg" target="_blank" rel="noopener"><img src="${Hn}/02-地质实习.jpeg" alt="地质实习" /><span><strong>地质实习</strong><small>蹲下来研究一块石头，试着从纹理里读懂地质历史。</small></span></a>
          <a class="story-image" href="${Hn}/03-生产实习开叉车.jpeg" target="_blank" rel="noopener"><img src="${Hn}/03-生产实习开叉车.jpeg" alt="生产实习开叉车" /><span><strong>生产实习</strong><small>第一次开叉车，看起来很稳，实际每一步都格外谨慎。</small></span></a>
          <a class="story-image" href="${Hn}/04-材料实习拌水泥.jpg" target="_blank" rel="noopener"><img src="${Hn}/04-材料实习拌水泥.jpg" alt="材料实习拌水泥" /><span><strong>材料实习</strong><small>拌水泥也会有闪闪发光的时候——至少镜头里是这样。</small></span></a>
        </div>
      </section>

      <section class="story-section">
        <div class="story-heading"><span>03</span><h3>在土木之外，继续折腾影像</h3></div>
        <p>我一直很喜欢摄影和宣传类工作。本科期间，我尝试运营班级公众号和视频号，从选题、拍摄到排版、剪辑，基本都摸索过一点。</p>
        <div class="story-stats" aria-label="内容创作数据">
          <div><strong>250+</strong><span>粉丝</span></div>
          <div><strong>40+</strong><span>图文与视频</span></div>
          <div><strong>4000+</strong><span>单篇最高浏览</span></div>
        </div>
        <p>那几年，我还多次认真打开 Photoshop、C4D、After Effects 和 Maya，然后在复杂的软件界面里逐渐迷失。虽然没能成为成熟的设计师或动画师，但这些“学了又没完全学会”的经历，让我越来越习惯用画面表达。</p>
        <p>毕业前，我把课程名称、校园地标、同学照片和共同记忆做成了一套小卡片送给大家，给四年大学生活留下一份能握在手里的结尾。</p>
        <a class="story-image story-image-wide" href="${Hn}/05-毕业手作纪念卡.jpg" target="_blank" rel="noopener">
          <img src="${Hn}/05-毕业手作纪念卡.jpg" alt="毕业手作纪念卡" />
          <span><strong>送给同学们的毕业限定纪念卡</strong><small>点击查看原图</small></span>
        </a>
      </section>

      <footer class="story-ending">
        <p>总而言之，这是平平无奇、但也有滋有味的四年。</p>
        <p>我学着与水泥、岩石和图纸打交道，也一直没有放下相机、影像和表达。回头看，本科并没有一条特别明确的主线，却在一次次尝试里慢慢拼出了今天的我。</p>
        <div class="next-stop"><span>沿着小路继续向前</span><strong>下一站：清华大学 →</strong></div>
      </footer>
    </div>
  `,TRG_02:`
    <div class="station-story station-story-thu">
      <header class="station-hero station-hero-lab">
        <img src="${Gn}/01-实验室板凳工位.jpg" alt="实验室里的板凳工位" />
        <div class="station-hero-shade"></div>
        <div class="lab-grid-overlay" aria-hidden="true"></div>
        <div class="station-hero-copy">
          <p class="station-kicker">RESEARCH LOG · 第二站 · 北京海淀</p>
          <h2>清华大学</h2>
          <p class="station-lead">从实验室向下研究，也向更远的地方探索。</p>
          <p>能来到这里继续深造，至今想来都有一点机缘巧合：谢谢当年在官网上随机选中的 YX 老师，也谢谢老师或许正好打了个盹，把我放进了预推免面试名单。</p>
          <p>于是，本科和水泥、岩石打完交道之后，我又继续走进了泥土、地下结构与力学的世界。</p>
        </div>
      </header>

      <div class="station-tags station-tags-cool" aria-label="页面标签">
        <span>北京海淀</span><span>地下结构</span><span>力学研究</span><span>社会实践</span>
      </div>

      <section class="story-section story-section-lab">
        <div class="story-heading"><span>01</span><h3>研究对象更深了，打交道的还是土</h3></div>
        <p>在清华，我继续研究土与地下结构之间的相互作用，方向更偏向力学。</p>
        <p>听起来像是在研究庞大的地下工程，日常却常常从很具体的事情开始：拌泥巴、处理试样、布置传感器、检查数据，以及和离心机反复 battle。一个接头、一根线、一个传感器的位置，都可能影响最终结果。</p>
        <div class="lab-asymmetric-grid">
          <a class="story-image lab-main-image" href="${Gn}/01-实验室板凳工位.jpg" target="_blank" rel="noopener">
            <img src="${Gn}/01-实验室板凳工位.jpg" alt="实验室板凳工位" />
            <span><strong>我的实验室工位：一张小板凳</strong><small>仪器旁、线缆间，找个地方坐下慢慢解决问题。点击查看原图</small></span>
          </a>
          <a class="story-image lab-detail-image" href="${Gn}/04-离心机传感器接线.jpg" target="_blank" rel="noopener">
            <img src="${Gn}/04-离心机传感器接线.jpg" alt="离心机传感器接线细节" />
            <span><strong>公式很宏大，接线很具体</strong><small>点击查看原图</small></span>
          </a>
        </div>
      </section>

      <section class="story-section story-section-travel">
        <div class="story-heading"><span>02</span><h3>从实验室出发，去更远的地方</h3></div>
        <p>读研之后，我好像才真正开始探索祖国的大好河山。</p>
        <p>去乌兰察布看过漫天星星，在山西天镇爬过土长城遗址，也在海南三亚体验过一天三顿清补凉的快乐。比起节假日里走马观花地打卡，我更喜欢带着一个小课题，和一群原本陌生的朋友，在一个地方慢慢待下来：做调研、观察、记录，也逐渐熟悉彼此。</p>
        <p>对一个偏内向的人来说，这种有明确主题、又能慢慢融入的同行方式，好像才是更适合我的充电方式。</p>
        <a class="story-image story-image-atmosphere" href="${Gn}/02-乌兰察布星空.jpeg" target="_blank" rel="noopener">
          <img src="${Gn}/02-乌兰察布星空.jpeg" alt="乌兰察布星空" />
          <span><strong>白天做实践，晚上看银河</strong><small>乌兰察布 · 点击查看原图</small></span>
        </a>
        <div class="travel-pair">
          <a class="story-image" href="${Gn}/03-山西天镇土长城.jpg" target="_blank" rel="noopener"><img src="${Gn}/03-山西天镇土长城.jpg" alt="山西天镇土长城" /><span><strong>山西天镇 · 土长城</strong><small>有些历史不是隔着展柜看的，而是一步一步走进去的。</small></span></a>
          <a class="story-image" href="${Gn}/05-海南三亚社会实践.jpeg" target="_blank" rel="noopener"><img src="${Gn}/05-海南三亚社会实践.jpeg" alt="海南三亚社会实践" /><span><strong>海南三亚 · 社会实践</strong><small>调研要认真，清补凉也不能错过。</small></span></a>
        </div>
      </section>

      <section class="story-section story-section-balance">
        <div class="story-heading"><span>03</span><h3>一边向下钻研，一边向外探索</h3></div>
        <div class="balance-statement">
          <div><small>向下研究</small><strong>泥土 · 结构<br />传感器 · 数据</strong></div>
          <span>×</span>
          <div><small>向外探索</small><strong>星空 · 古城墙<br />城市 · 具体的人</strong></div>
        </div>
        <p>实验室研究和社会实践看起来是两件完全不同的事：一边是泥土、结构、传感器和数据；另一边是星空、古城墙、城市与具体的人。</p>
        <p>但它们其实都需要放慢一点，走近一点，再从真实细节里理解问题。在清华的这段经历，让我不只是在一个研究方向上继续深入，也开始用更多方式认识外面的世界。</p>
      </section>

      <footer class="story-ending story-ending-thu">
        <p>我的研究生生活，大概可以概括为：<strong>在实验室里向下研究，在社会实践中向外探索。</strong></p>
        <p>平时拌泥巴、接线路、和离心机 battle；偶尔背上行李，去一个陌生的地方，和一群陌生的人慢慢熟悉，再带着新的故事回来。</p>
        <div class="next-stop"><span>离开校园，沿着小桥继续向前</span><strong>下一站：字节跳动 →</strong></div>
      </footer>
    </div>
  `,TRG_03:`
    <div class="station-story station-story-byte">
      <header class="byte-hero">
        <div class="byte-window-bar"><span></span><span></span><span></span><code>landing://intern/v0.1</code></div>
        <div class="byte-hero-grid">
          <div class="byte-intro">
            <p class="station-kicker">第三站 · 北京海淀</p>
            <p class="byte-version">VERSION 0.1</p>
            <h2>FDE 实习生</h2>
            <p class="station-lead">从学校一路向前，第三站来到字节跳动。</p>
            <p>初来乍到，FDE 对我来说还是一个完全陌生的岗位。新的工作方式、新的业务场景，以及一连串需要重新认识的缩写，都在等待解锁。</p>
            <p>好在遇到的同学们都非常 nice。于是，我一边熟悉岗位，一边认真完成自己的新人 Landing。</p>
          </div>
          <div class="byte-status-card" aria-label="新人 Landing 状态">
            <p><span>岗位状态</span><strong>初来乍到</strong></p>
            <p><span>当前任务</span><strong>努力 Landing</strong></p>
            <p><span>学习进度</span><strong>持续加载中</strong></p>
            <p><span>队友体验</span><strong>大家都非常 nice</strong></p>
            <div class="byte-progress"><i></i></div>
          </div>
        </div>
      </header>

      <div class="station-tags station-tags-byte" aria-label="页面标签">
        <span>北京海淀</span><span>FDE</span><span>新人 Landing</span><span>食堂探索</span>
      </div>

      <section class="story-section byte-work-section">
        <div class="story-heading"><span>01</span><h3>FDE 实习生 v0.1</h3></div>
        <p>从校园里的研究问题走进真实业务现场，对我来说是一次不小的切换。</p>
        <p>以前更多是在实验室里和泥土、结构、传感器打交道；现在要学习如何理解需求、拆解问题，并尝试让技术变成真正可用的解决方案。</p>
        <p>一切都还很新，很多东西需要边做边学。偶尔会被新的名词和流程绕晕，但也在同学们的帮助下，一点点把陌生的地图点亮。</p>
        <div class="byte-console" aria-label="当前进度">
          <code><span>&gt;</span> loading role_context...</code>
          <code><span>&gt;</span> mapping new_workflow...</code>
          <code class="is-active"><span>&gt;</span> landing in progress <i></i></code>
        </div>
      </section>

      <section class="story-section byte-food-section">
        <div class="story-heading"><span>02</span><h3>饭很好吃，饭很好吃，饭很好吃</h3></div>
        <p>来字节小半个月，目前最稳定、最确定，也最想重复三遍的感受就是：<strong>饭很好吃。饭很好吃。饭很好吃。</strong></p>
        <p>早餐负责启动，午餐负责续航，晚餐负责给一天画上圆满句号。工作地图还在慢慢探索，食堂地图已经开始认真点亮了。</p>
        <div class="byte-food-grid">
          <a class="story-image" href="${lr}/01-食堂早餐.jpg" target="_blank" rel="noopener"><img src="${lr}/01-食堂早餐.jpg" alt="食堂早餐" /><span><strong>早餐 · 启动</strong><small>启动今日 Landing：早餐先把能量条充满。</small></span></a>
          <a class="story-image" href="${lr}/02-食堂午餐.jpg" target="_blank" rel="noopener"><img src="${lr}/02-食堂午餐.jpg" alt="食堂午餐" /><span><strong>午餐 · 续航</strong><small>给下午补充算力：不一定每道菜都叫得出名字，但都愿意试试。</small></span></a>
          <a class="story-image byte-dinner" href="${lr}/03-榴莲披萨晚餐.jpg" target="_blank" rel="noopener"><img src="${lr}/03-榴莲披萨晚餐.jpg" alt="榴莲披萨晚餐" /><span><strong>晚餐 · 成功 Landing</strong><small>宇宙无敌最爱的晚餐——榴莲披萨。FDE 还在慢慢认识，披萨已经成功 Landing。</small></span></a>
        </div>
      </section>

      <section class="story-section byte-future-section">
        <div class="story-heading"><span>03</span><h3>先把陌生地图一点点走熟</h3></div>
        <p>这段经历才刚刚开始，所以暂时还没有特别宏大的总结。</p>
        <p>现在的我还在认识岗位、熟悉团队、理解业务，也在适应从校园到工作的节奏变化。陌生意味着每天都能接触新的东西，也意味着这张地图上还有很多尚未点亮的区域。</p>
        <p>希望下一次更新这一站时，除了早餐、午餐和榴莲披萨，也能放进更多真正值得记录的项目和成长。</p>
        <div class="future-slot"><span>+</span><div><strong>下一次版本更新</strong><small>为未来的项目与成长预留</small></div></div>
      </section>

      <footer class="story-ending story-ending-byte">
        <p><strong>初来乍到，一切都还在加载。</strong></p>
        <p>认真工作，好好吃饭，继续 Landing。</p>
        <div class="next-stop"><span>暂时离开工位，顺着小路活动一下</span><strong>下一站：足球场 →</strong></div>
      </footer>
    </div>
  `,TRG_04:`
    <div class="station-story station-story-football">
      <header class="station-hero football-hero">
        <img src="${Ms}/01-半决赛扑点胜利.jpg" alt="半决赛扑点胜利后与队友庆祝" />
        <div class="station-hero-shade"></div>
        <div class="station-hero-copy football-hero-copy">
          <p class="station-kicker">第四站 · GOALKEEPER</p>
          <h2>足球场</h2>
          <p class="station-lead">一次略显草率的转行，意外变成了一段延续至今的足球经历。</p>
          <p>最初其实想加入篮球队，奈何院系女生太少，根本凑不出一支队伍，于是临时转行加入足球队。又因为保留着高中打篮球时用手接球的习惯，我被顺理成章地安排到了守门员位置。</p>
        </div>
      </header>

      <div class="station-tags station-tags-football" aria-label="页面标签">
        <span>从篮球到足球</span><span>守门员</span><span>校队</span><span>半决赛扑点</span><span>首高银牌</span>
      </div>

      <section class="story-section football-origin-section">
        <div class="story-heading"><span>01</span><h3>从临时门将到读懂比赛</h3></div>
        <p>本科刚站上球门线时，我对足球战术、站位和门将技术几乎一无所知。唯一的优势，大概就是不太怕球，也确实愿意扑出去。</p>
        <p>读研之后，又在各种机缘巧合下加入校队，开始更系统地学习技术、战术与位置感。守门员不只是“站在门前用手接球”，还要观察进攻、判断传球线路、提醒队友，并在合适时机出击。</p>
        <p>位置没有变，但我理解比赛的方式变了。脚下技术和位置感也已经颇有进步——确信。</p>
        <div class="football-timeline" aria-label="足球成长时间轴">
          <div><span>01</span><strong>篮球</strong><small>最初想加入篮球队</small></div><i>→</i>
          <div><span>02</span><strong>足球</strong><small>临时转行凑一支队伍</small></div><i>→</i>
          <div><span>03</span><strong>守门员</strong><small>因为习惯用手接球</small></div><i>→</i>
          <div><span>04</span><strong>校队</strong><small>开始真正读懂比赛</small></div>
        </div>
      </section>

      <section class="story-section football-highlight-section">
        <div class="story-heading"><span>02</span><h3>从扑点高光到全国赛体验</h3></div>
        <p>半决赛进入点球环节时，站上球门线，周围的声音好像突然远了一点。最后成功扑出点球，帮助球队赢下比赛。比起扑点本身，我更记得队友冲过来，把我直接举起来庆祝的瞬间。</p>
        <p>后来，我又跟随球队前往广西参加全国赛，解锁了一张为期两周的“体育生体验卡”：训练、比赛、恢复、复盘，生活几乎完全围绕足球运转。</p>
        <div class="football-highlight-grid">
          <a class="story-image football-main-photo" href="${Ms}/01-半决赛扑点胜利.jpg" target="_blank" rel="noopener"><img src="${Ms}/01-半决赛扑点胜利.jpg" alt="半决赛扑点胜利" /><span><strong>扑点成功，然后被队友抬走</strong><small>平时一个人守门，赢球时被一群人接住。</small></span></a>
          <a class="story-image football-side-photo" href="${Ms}/02-广西全国赛合影.jpg" target="_blank" rel="noopener"><img src="${Ms}/02-广西全国赛合影.jpg" alt="广西全国赛合影" /><span><strong>广西全国赛</strong><small>短暂离开实验室，把日程切换成训练与比赛。</small></span></a>
        </div>
      </section>

      <section class="story-section football-medal-section">
        <div class="story-heading"><span>03</span><h3>首高银牌与毕业前愿望</h3></div>
        <p>2025 年，我们在首都高校赛中获得银牌。这枚银牌记录的不只是一场比赛结果，也记录了训练、扑救、失误、复盘，以及一群人不断磨合后一起站上领奖位置的过程。</p>
        <div class="football-medal-grid">
          <a class="story-image" href="${Ms}/03-2025首高银牌.jpg" target="_blank" rel="noopener"><img src="${Ms}/03-2025首高银牌.jpg" alt="2025年首都高校赛银牌合影" /><span><strong>2025 · 首高银牌</strong><small>开心是真的，想再往前一步也是真的。</small></span></a>
          <aside class="football-wish-card"><small>NEXT MATCH</small><strong>毕业前愿望</strong><p>希望能在毕业前的首都高校赛中挑战并战胜北体大，和队友一起拿到更好的结果。</p><span>仍在努力解锁中</span></aside>
        </div>
      </section>

      <footer class="story-ending story-ending-football">
        <p>从篮球场边临时转行，到站上足球门线；从只知道把球扑出去，到慢慢理解站位、战术和比赛。</p>
        <p>我与足球的开始颇有偶然性，但一路坚持下来，好像也渐渐变成了一件很确定的事。<strong>位置还是守门员，能守住的东西比以前更多了。</strong></p>
        <div class="next-stop"><span>离开球门，沿着草坪继续向前</span><strong>下一站：排球场 →</strong></div>
      </footer>
    </div>
  `,TRG_05:`
    <div class="station-story station-story-volleyball">
      <header class="station-hero volleyball-hero">
        <img src="${Ss}/01-2025初雪球.jpg" alt="初雪夜晚在雪地打排球" />
        <div class="station-hero-shade"></div>
        <div class="station-hero-copy volleyball-hero-copy">
          <p class="station-kicker">第五站 · 排龄两年半</p>
          <h2>排球场</h2>
          <p class="station-lead">有些热爱，就是从莫名其妙开始，然后一发不可收拾。</p>
          <p>研究生入学时，我莫名其妙地被拉进了院系排球队。本来只是想跟着大家随便打打，没想到从早到晚、从夏天到冬天，只要有人、有球、有一块空地，就可以继续。</p>
        </div>
      </header>

      <div class="station-tags station-tags-volleyball" aria-label="页面标签">
        <span>排龄两年半</span><span>四季不停球</span><span>左手技能</span><span>多位置选手</span><span>马杯铜牌</span>
      </div>

      <section class="story-section volleyball-seasons-section">
        <div class="story-heading"><span>01</span><h3>四季不停球</h3></div>
        <p>排球有一种很特别的吸引力：一个人很难让球一直留在空中，只有接球、传球和进攻连接起来，一个回合才能继续。</p>
        <p>热情起来之后，时间和天气逐渐失去阻拦作用。无论实验、课程和生活节奏怎么变化，只要走上球场，注意力就会重新回到眼前这一球。</p>
        <div class="volleyball-badges" aria-label="四季排球成就">
          <div><span>端</span><strong>端午球</strong><small>ACHIEVED</small></div>
          <div><span>秋</span><strong>中秋球</strong><small>ACHIEVED</small></div>
          <div><span>庆</span><strong>国庆球</strong><small>ACHIEVED</small></div>
          <div class="is-snow"><span>雪</span><strong>初雪球</strong><small>ACHIEVED</small></div>
        </div>
        <a class="story-image story-image-wide volleyball-snow-photo" href="${Ss}/01-2025初雪球.jpg" target="_blank" rel="noopener"><img src="${Ss}/01-2025初雪球.jpg" alt="初雪限定雪地垫球" /><span><strong>初雪限定：雪地垫球</strong><small>天气很冷，地面很滑，但没有人觉得这不是一个适合打球的夜晚。</small></span></a>
      </section>

      <section class="story-section volleyball-recovery-section">
        <div class="story-heading"><span>02</span><h3>右手休息，左手开始加班</h3></div>
        <p>右手骨折后，正常训练不得不暂停。但在恢复和安全允许的范围内，我开始尝试开发左手技能：左手抛球、左手控球、左手对墙练习，把熟悉的动作换一侧重新拆开。</p>
        <p class="recovery-note"><strong>恢复始终是第一位。</strong>这不是带伤硬练；只是右手暂时不能打，并不意味着关于排球的所有事情都要停下来。</p>
        <div class="volleyball-skill-grid">
          <a class="story-image" href="${Ss}/02-右手骨折后左手练球.jpg" target="_blank" rel="noopener"><img src="${Ss}/02-右手骨折后左手练球.jpg" alt="右手骨折恢复期间使用左手练球" /><span><strong>右手休息，左手开始加班</strong><small>换了一侧之后，一切又回到了新手模式。</small></span></a>
          <div class="volleyball-skill-tree">
            <div class="skill-branch is-paused"><span>右手</span><strong>恢复中</strong><small>暂停正常训练</small></div>
            <i></i>
            <div class="skill-branch is-loading"><span>左手</span><strong>技能加载</strong><small>抛球 → 控球 → 对墙练习</small></div>
            <div class="safety-rule"><strong>安全规则</strong><p>遵循恢复节奏，不以疼痛换进度。</p></div>
          </div>
        </div>
      </section>

      <section class="story-section volleyball-medal-section">
        <div class="story-heading"><span>03</span><h3>多位置成长与马杯铜牌</h3></div>
        <p>两年半里，我陆续尝试主攻、副攻、接应和自由人。不同位置像是理解同一场比赛的不同视角：尝试得越多，越能理解队友为什么出现在那里，也越知道自己这一球该怎样处理。</p>
        <div class="volleyball-positions" aria-label="排球位置能力">
          <div><strong>主攻</strong><span>勉强能看</span></div>
          <div><strong>副攻</strong><span>勉强能看</span></div>
          <div><strong>接应</strong><span>勉强能看</span></div>
          <div><strong>自由人</strong><span>勉强能看</span></div>
          <div class="needs-work"><strong>二传</strong><span>重点待提升</span></div>
        </div>
        <p>从临时加入院系排球队，到一起训练、磨合和参加比赛，这段经历最终在马约翰杯收获了一枚铜牌。排球最吸引我的，从来不只是赢下一分，而是六个人一起想办法让球不落地。</p>
        <a class="story-image story-image-wide volleyball-bronze-photo" href="${Ss}/03-马约翰杯铜牌合影.jpg" target="_blank" rel="noopener"><img src="${Ss}/03-马约翰杯铜牌合影.jpg" alt="马约翰杯铜牌合影" /><span><strong>马约翰杯：铜牌达成</strong><small>奖牌是铜色的，回忆的含金量很高。</small></span></a>
      </section>

      <footer class="story-ending story-ending-volleyball">
        <p>排球是研究生阶段最意外，也最持续的一份热爱。</p>
        <p>它陪我从夏天打到冬天，从右手练到左手，也让我尝试了球场上几乎所有位置。只要球还在空中，我就还是会下意识地想办法把它接起来。</p>
        <p><strong>有些热爱，就是从莫名其妙开始，然后一发不可收拾。</strong></p>
        <div class="next-stop"><span>沿着小路走向最后一栋亮着灯的小屋</span><strong>下一站：照相馆 →</strong></div>
      </footer>
    </div>
  `,TRG_06:`
    <div class="station-story station-story-photo">
      <header class="photo-hero">
        <p class="station-kicker">第六站 · 照相馆</p>
        <div class="photo-shutter-count"><strong>近 10 万</strong><span>次快门</span></div>
        <h2>把想留下来的画面，认真留下来。</h2>
        <p>2022 年购入第一台索尼小微单后，我开始拍人像、风光、人文与城市，也让第一台“小飞机”从空中观察世界。它飞行里程不长、已经撞过两次树，但依旧坚挺。</p>
        <p>这里不讲太多故事，直接上图。</p>
      </header>

      <div class="station-tags station-tags-photo" aria-label="页面标签">
        <span>近10万次快门</span><span>人像</span><span>风光</span><span>城市</span><span>航拍</span>
      </div>

      <section class="story-section photo-section photo-portrait-section">
        <div class="story-heading"><span>01</span><h3>人像：把重要阶段留下来</h3></div>
        <p>人像摄影里，我尤其喜欢拍毕业照。比起所有人整齐站成一排，我更喜欢让被拍摄的人在校园里走一走、聊一聊，找到更自然的眼神和动作。校门、草坪、路牌、教学楼和每天经过的小路，都可以成为毕业故事的一部分。</p>
        <blockquote>最好的毕业照，不只是证明来过，也应该让人想起当时怎样笑过。</blockquote>
        <div class="photo-portrait-grid">
          <a class="photo-work" href="${qt}/01-毕业双人组照.jpg" data-photo-gallery data-photo-title="把两个人的校园故事放进同一组照片"><img src="${qt}/01-毕业双人组照.jpg" alt="毕业双人组照" /><span>毕业双人组照</span></a>
          <a class="photo-work is-portrait" href="${qt}/06-清华园毕业人像.jpg" data-photo-gallery data-photo-title="沿着熟悉的校园，再走一遍"><img src="${qt}/06-清华园毕业人像.jpg" alt="清华园毕业人像" /><span>清华园毕业人像</span></a>
        </div>
      </section>

      <section id="photo-gallery-top" class="story-section photo-section photo-world-section">
        <div class="story-heading"><span>02</span><h3>风光与城市：寻找尺度与秩序</h3></div>
        <p>拍风光时，我喜欢寻找尺度感：人站在山里会变得很小，村庄散落在山坡之间，银河又把视线从地面拉向更远的地方。城市摄影则像是在一段已经开始运行的画面里寻找秩序，等待电车、人群、建筑和光线短暂对齐。</p>
        <p>除了地面视角，我也开始让“小飞机”升高一点，从空中重新理解山、路、建筑与生活的关系。它目前已经撞树两次，仍然坚挺；接下来的安全目标是，不解锁第三次。</p>
        <div class="photo-masonry">
          <a class="photo-work is-tall" href="${qt}/02-山谷与航拍组图.jpg" data-photo-gallery data-photo-title="换一个高度，看见山里的层次"><img src="${qt}/02-山谷与航拍组图.jpg" alt="山谷与航拍组图" /><span>山谷与航拍</span></a>
          <a class="photo-work" href="${qt}/03-银河组照.jpg" data-photo-gallery data-photo-title="把相机对准头顶的夜晚"><img src="${qt}/03-银河组照.jpg" alt="银河组照" /><span>银河组照</span></a>
          <a class="photo-work is-tall" href="${qt}/04-城市电车与街景.jpg" data-photo-gallery data-photo-title="沿着轨道看一座城市"><img src="${qt}/04-城市电车与街景.jpg" alt="城市电车与街景" /><span>城市电车与街景</span></a>
          <a class="photo-work is-wide" href="${qt}/07-隔窗群山.jpeg" data-photo-gallery data-photo-title="路过群山时，刚好有一束光"><img src="${qt}/07-隔窗群山.jpeg" alt="隔窗群山" /><span>隔窗群山</span></a>
          <a class="photo-work" href="${qt}/08-城市夜景组图.jpeg" data-photo-gallery data-photo-title="天黑以后，城市换了一种表达方式"><img src="${qt}/08-城市夜景组图.jpeg" alt="城市夜景组图" /><span>城市夜景组图</span></a>
        </div>
      </section>

      <section class="story-section photo-section photo-experiment-section">
        <div class="story-heading"><span>03</span><h3>影像实验与下一段旅程</h3></div>
        <p>摄影不一定每次都要拍得清楚。我也会尝试转动相机、延长曝光或主动制造运动，让熟悉的植物、光线和颜色脱离具体形状。结果不一定稳定，但这种不确定性本身很好玩。</p>
        <div class="photo-experiment-grid">
          <a class="photo-work" href="${qt}/05-绿色旋转实验.jpg" data-photo-gallery data-photo-title="当植物变成一阵绿色的风"><img src="${qt}/05-绿色旋转实验.jpg" alt="绿色旋转影像实验" /><span>当植物变成一阵绿色的风</span></a>
          <aside class="photo-tour-ticket">
            <small>PLANNED · 路线规划中</small>
            <strong>2027 年 5 月<br />毕业照全国巡拍</strong>
            <p>欢迎有毕业照拍摄需求的朋友随时来找我！目前已计划前往上海、浙江、合肥、长沙等地，更多目的地也在持续解锁中，期待在下一站与你相遇。</p>
          </aside>
        </div>
      </section>

      <footer class="photo-ending">
        <p>从中南大学到清华大学，从实验室到字节跳动，再从足球场、排球场走进最后的照相馆——这座岛上的每一栋小楼，装着的都是我走过的一小段路。</p>
        <p>小岛的故事暂时讲到这里，但新的经历还会继续发生，照片也会继续增加。<strong>谢谢你登岛，也谢谢你愿意走完这一程。</strong></p>
        <div id="photo-contact" class="photo-contact">
          <span>CONTACT / 微信</span>
          <strong>Lin_JQ__May</strong>
          <button type="button" data-copy-contact="Lin_JQ__May">复制微信号</button>
        </div>
        <div class="photo-ending-actions">
          <button type="button" data-station-action="close">再逛一圈</button>
          <button type="button" data-station-action="dock">返回码头</button>
          <button type="button" data-station-action="gallery-top">查看全部作品</button>
        </div>
      </footer>
    </div>
  `});function XE(s,e){return Sm[s]??`
    <div class="station-placeholder">
      <p class="eyebrow">ISLAND STOP</p>
      <h2>${e}</h2>
      <p class="pending-copy">内容待补充</p>
    </div>
  `}function qE(s){return!!Sm[s]}const xi=document.querySelector("#scene"),Tm=document.querySelector("#loading"),Em=document.querySelector("#loading-title"),Mh=document.querySelector("#loading-detail"),vu=document.querySelector("#fatal"),bm=document.querySelector("#fatal-message"),yr=document.querySelector("#interaction-prompt"),YE=document.querySelector("#prompt-text"),Fs=document.querySelector("#station-panel"),wm=document.querySelector("#station-title"),Lo=document.querySelector("#station-content"),Ka=Fs.querySelector(".station-story-panel"),ss=document.querySelector("#photo-lightbox"),$a=document.querySelector("#photo-lightbox-image"),Am=document.querySelector("#photo-lightbox-caption"),yu=document.querySelector("#photo-lightbox-close"),Rm=document.querySelector("#photo-lightbox-prev"),Cm=document.querySelector("#photo-lightbox-next"),Pm=document.querySelector("#station-close");document.querySelector("#mode-toggle");const Mu=document.querySelector("#mode-badge"),jE=document.querySelector("#return-dock"),KE=document.querySelector("#asset-status"),hc=document.querySelector("#debug-toggle"),$E=document.querySelector("#debug-body"),ZE=document.querySelector("#debug-chevron"),wf=document.querySelector("#show-nav"),Af=document.querySelector("#show-col"),Rf=document.querySelector("#show-trg"),Su=document.querySelector("#intro-overlay"),Dm=document.querySelector("#intro-content"),Br=document.querySelector("#intro-start"),qo=document.querySelector("#intro-skip"),cl=document.querySelector("#intro-skip-active"),fo=document.querySelector("#intro-status"),Lm=document.querySelector("#arrival-caption"),Io=document.querySelector("#welcome-panel"),Tu=document.querySelector("#welcome-start"),Im=document.querySelector("#fatal-title"),Nm=document.querySelector("#fatal-model-url"),Ua=document.querySelector("#fatal-copy"),Eu=document.querySelector("#fatal-skip"),Hs=document.querySelector("#mobile-controls"),Bs=document.querySelector("#joystick-base"),hl=document.querySelector("#joystick-knob"),JE={canvas:xi,introOverlay:Su,introContent:Dm,introStart:Br,introSkip:qo,introSkipActive:cl,introStatus:fo,arrivalCaption:Lm,welcomePanel:Io,welcomeStart:Tu,fatal:vu,fatalMessage:bm,fatalTitle:Im,fatalModelUrl:Nm,fatalCopy:Ua,fatalSkip:Eu,mobileControls:Hs,joystickBase:Bs,joystickKnob:hl,stationPanel:Fs,stationTitle:wm,stationContent:Lo,stationStoryPanel:Ka,photoLightbox:ss,photoLightboxImage:$a,photoLightboxCaption:Am,photoLightboxClose:yu,photoLightboxPrev:Rm,photoLightboxNext:Cm},Cf=Object.entries(JE).filter(([,s])=>!s).map(([s])=>s);if(Cf.length)throw new Error(`关键 DOM 元素缺失：${Cf.join(", ")}`);const Ht=new sp;Ht.background=new Ie(11459034);Ht.fog=new Bh(11459034,.0032);const on=new hS({canvas:xi,antialias:!0,alpha:!1,powerPreference:"high-performance"});on.setPixelRatio(Math.min(Math.max(window.devicePixelRatio,1.25),2));on.outputColorSpace=It;on.toneMapping=Bf;on.toneMappingExposure=.92;on.shadowMap.enabled=!0;on.shadowMap.type=Ff;const Um=new nh(on),Om=new rT,Fm=Um.fromScene(Om,.04);Ht.environment=Fm.texture;Om.dispose();Um.dispose();const kt=new tn(Q.camera.fov,1,Q.camera.near,Q.camera.far);kt.position.set(Q.camera.offset.x,Q.camera.offset.y,Q.camera.offset.z);const QE=new c0(16775144,6713724,1.1);Ht.add(QE);const ti=new sl(16774367,2.55);ti.position.set(-35,55,25);ti.castShadow=!0;const Sh=Math.min(4096,on.capabilities.maxTextureSize);ti.shadow.mapSize.set(Sh,Sh);ti.shadow.camera.left=-105;ti.shadow.camera.right=105;ti.shadow.camera.top=75;ti.shadow.camera.bottom=-75;ti.shadow.bias=-15e-5;ti.shadow.normalBias=.035;ti.shadow.radius=3;Ht.add(ti);const Bm=new sl(12574957,.42);Bm.position.set(48,28,-42);Ht.add(Bm);const km=new sl(16764840,.34);km.position.set(18,24,52);Ht.add(km);const ni=new qS(kt,on.domElement);ni.enabled=!1;ni.enableDamping=!0;ni.maxPolarAngle=Math.PI*.48;ni.minDistance=7;ni.maxDistance=320;const eb=new _0,po=new w0,tb=new C(0,-1,0),Wn=new Set,Fi=new C,Pf=new C,Df=new C,ba=new C,Lf=new C,Za=new C,Ts=new C,If=new C,si=new C,uc=new C,Li=new C,Nf=new Me,No=new Me,zm=new Me,ui=new Map;let en=null,Oa=null,Ja=[],Bi=null,Uo=[],ks=[],Cs=null,Ye=null,Vm=null,mo=[],Th=[],Mr=null,ws=null,Qa=null,Xn=null,Oo=null,Jn=null,Eh="",Fo=0,Hm="walking",Bo=null,ko=null,Sr=0,Ui=1,Tr=[],zo=0,_t="loading";function nb(){const s=new Tn;s.name="PlayerRoot";const e=Q.player.totalHeight-Q.player.radius*2,t=new Gh(Q.player.radius,e,8,16),n=new mt({color:15899251,roughness:.72,metalness:0}),i=new Re(t,n);return i.name="PlayerCollisionCapsule",i.position.y=Q.player.totalHeight*.5,i.visible=!1,i.userData.collision_proxy=!0,s.add(i),Ht.add(s),s}async function ib(s){const e=new Sp;Em.textContent="正在载入人物";const n=(await e.loadAsync(Q.character.assetUrl,c=>{if(c.total>0){const h=Math.round(c.loaded/c.total*100);Mh.textContent=`载入人物 ${h}%`,fo.textContent=`正在准备人物… ${h}%`}})).scene;n.name="Character_Static_v01",n.rotation.y=Q.character.yawOffset,n.updateMatrixWorld(!0);const r=new xt().setFromObject(n).getSize(new C);if(!Number.isFinite(r.y)||r.y<=0)throw new Error("人物模型包围盒无效。");if(Math.abs(r.y-Q.character.expectedHeight)>Q.character.heightTolerance)throw new Error(`人物高度 ${r.y.toFixed(3)}m 与预期 ${Q.character.expectedHeight.toFixed(3)}m 不一致。`);n.scale.setScalar(Q.character.visualScale),n.updateMatrixWorld(!0);const o=new xt().setFromObject(n),a=o.getSize(new C),l=o.getCenter(new C);return n.position.set(-l.x,-o.min.y,-l.z),n.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!0)}),s.add(n),n.updateMatrixWorld(!0),Vm=n,{visual:n,height:a.y}}function sb(s){const e=new Map;return s.traverse(t=>{t.name&&!e.has(t.name)&&e.set(t.name,t)}),e}function rb(s){const e=sb(s),t=[],n=e.get(Q.required.nav),i=e.get(Q.required.spawn),r=Q.required.triggers.map(l=>e.get(l)),o=Q.required.colliders.map(l=>e.get(l)),a=[...e.entries()].filter(([l,c])=>l.startsWith("COL_")&&c.isMesh).map(([,l])=>l);n?n.isMesh?n.userData.interface_role!=="NAV_WALKABLE"&&t.push(`${Q.required.nav} 的 interface_role 不正确`):t.push(`${Q.required.nav} 必须是 Mesh，当前为 ${n.type}`):t.push(`缺少通行网格：${Q.required.nav}`),i?i.userData.interface_role!=="PLAYER_SPAWN"&&t.push(`${Q.required.spawn} 的 interface_role 不正确`):t.push(`缺少出生点：${Q.required.spawn}`);for(let l=0;l<r.length;l+=1)r[l]?r[l].userData.interface_role!=="INTERACTION_TRIGGER"&&t.push(`${Q.required.triggers[l]} 的 interface_role 不正确`):t.push(`缺少触发点：${Q.required.triggers[l]}`);for(let l=0;l<o.length;l+=1)o[l]?o[l].isMesh?o[l].userData.interface_role!=="COLLIDER"&&t.push(`${Q.required.colliders[l]} 的 interface_role 不正确`):t.push(`${Q.required.colliders[l]} 必须是 Mesh`):t.push(`缺少碰撞网格：${Q.required.colliders[l]}`);for(const l of a)l.userData.interface_role!=="COLLIDER"&&t.push(`${l.name} 的 interface_role 不正确`);if(t.length)throw new Error(t.join(`
`));return{index:e,nav:n,spawn:i,triggers:r,colliders:a}}function ob(s){mo=[],Th=[];for(const[e,t]of Object.entries(Q.stationRoots)){const n=s.get(e);if(!n)throw new Error(`缺少可点击站点根对象：${e}`);const i=new xt().setFromObject(n);Th.push({rootName:e,triggerName:t,center:i.getCenter(new C)}),n.traverse(o=>{o.isMesh&&(o.userData.station_trigger=t,mo.push(o))});const r=s.get(`COL_${e}`);r?.isMesh&&(r.userData.station_trigger=t,mo.push(r))}xi.dataset.clickableStations=String(Object.keys(Q.stationRoots).length)}function Uf(s){const e=Math.min(8,on.capabilities.getMaxAnisotropy());s.traverse(t=>{if(!t.isMesh)return;const n=t.name||"";if(/^(NAV_|COL_|TRG_|SPAWN_)/.test(n))return;const i=/water|sea|ocean|pond/i.test(n),r=/grass|sand|side|terrain/i.test(n);t.castShadow=!i&&!r,t.receiveShadow=!i;const o=Array.isArray(t.material)?t.material:[t.material];for(const a of o)if(a){if(a.dithering=!0,"envMapIntensity"in a){const l=a.metalness>.12||a.transmission>0;a.envMapIntensity=l?.82:.42}for(const l of["map","normalMap","roughnessMap","metalnessMap","aoMap","emissiveMap"]){const c=a[l];c?.isTexture&&(c.anisotropy=e)}a.needsUpdate=!0}})}function ab(s){if(!mo.length)return null;const e=on.domElement.getBoundingClientRect();Nf.set((s.clientX-e.left)/e.width*2-1,-((s.clientY-e.top)/e.height)*2+1),po.setFromCamera(Nf,kt);const t=po.intersectObjects(mo,!1)[0];if(t){const a=t.object.userData.station_trigger;return ks.find(l=>l.name===a)??null}const n=An.smoothstep(Ui,Q.camera.overviewBlendStart,Q.camera.maxZoomScale),i=An.lerp(Q.interaction.nearStationClickRadiusPx,Q.interaction.overviewStationClickRadiusPx,n);let r=null,o=i;for(const a of Th){if(Li.copy(a.center).project(kt),Li.z<-1||Li.z>1)continue;const l=e.left+(Li.x*.5+.5)*e.width,c=e.top+(-Li.y*.5+.5)*e.height,h=Math.hypot(s.clientX-l,s.clientY-c);h>=o||(o=h,r=ks.find(u=>u.name===a.triggerName)??null)}return r}function lb(s){const e=new On({color:4576931,wireframe:!0,transparent:!0,opacity:.48,depthTest:!1});s.nav.material=e,s.nav.visible=!1,s.nav.renderOrder=20,Xn?.navSurface&&(Xn.navSurface.visible=!1,Xn.navSurface.renderOrder=20);const t=new On({color:16735590,wireframe:!0,transparent:!0,opacity:.72,depthTest:!1});for(const i of s.colliders)i.material=t,i.visible=!1,i.renderOrder=21;Cs=new Tn,Cs.name="DEBUG_TriggerRanges";const n=new On({color:16762967,transparent:!0,opacity:.82,side:qn,depthTest:!1});for(const i of ks){const r=new Yh(i.radius-.055,i.radius,64),o=new Re(r,n);o.rotation.x=-Math.PI/2,o.position.copy(i.position),o.position.y+=.07,o.renderOrder=22,Cs.add(o)}Cs.visible=!1,Ht.add(Cs)}function Gm(s,e){if(!Ja.length)return null;po.set(new C(s,Q.player.groundRayHeight,e),tb),po.far=Q.player.maxGroundDistance;const t=po.intersectObjects(Ja,!1);return t.length?t[0]:null}function cb(s,e){const t=s.y+Q.player.colliderSkin;if(s.y+Q.player.totalHeight-Q.player.colliderSkin<=e.min.y||t>=e.max.y)return!1;const i=An.clamp(s.x,e.min.x,e.max.x),r=An.clamp(s.z,e.min.z,e.max.z),o=s.x-i,a=s.z-r,l=Q.player.radius+Q.player.colliderSkin;return o*o+a*a<l*l}function hb(s){const e=Gm(s.x,s.z);if(!e)return null;uc.set(s.x,e.point.y,s.z);for(const t of Uo)if(cb(uc,t.box))return null;return uc.clone()}function ub(s,e){if(!Ye)return!1;const t=[[s,e],[s,0],[0,e]];for(const[n,i]of t){if(Math.abs(n)+Math.abs(i)<1e-9)continue;Li.copy(Ye.position),Li.x+=n,Li.z+=i;const r=hb(Li);if(r)return Ye.position.copy(r),!0}return!1}function db(s){if(_t!=="walking"||!Ye)return;const e=Number(Wn.has("KeyD")||Wn.has("ArrowRight"))-Number(Wn.has("KeyA")||Wn.has("ArrowLeft"))+No.x,t=Number(Wn.has("KeyW")||Wn.has("ArrowUp"))-Number(Wn.has("KeyS")||Wn.has("ArrowDown"))-No.y;if(!e&&!t)return;kt.getWorldDirection(Ts),Ts.y=0,Ts.lengthSq()<1e-8&&Ts.set(0,0,-1),Ts.normalize(),If.crossVectors(Ts,kt.up).normalize(),si.copy(Ts).multiplyScalar(t).addScaledVector(If,e),si.lengthSq()>1&&si.normalize();const n=Q.player.speed*Math.min(s,Q.player.maxDeltaSeconds);si.multiplyScalar(n);const i=Math.max(1,Math.ceil(si.length()/Q.player.maxSubstepDistance)),r=si.x/i,o=si.z/i;let a=!1;for(let l=0;l<i;l+=1)a=ub(r,o)||a;a&&si.lengthSq()>1e-8&&(Ye.rotation.y=Math.atan2(si.x,si.z))}function fb(s){if(!Ye||["loading","ready","introPlaying","arriving","error"].includes(_t))return;const e=1-Math.exp(-Q.camera.followSharpness*s),t=1-Math.exp(-Q.camera.lookSharpness*s),n=An.smoothstep(Ui,Q.camera.overviewBlendStart,Q.camera.maxZoomScale);Ht.fog.density=An.lerp(Q.camera.nearFogDensity,Q.camera.overviewFogDensity,n),ba.copy(Ye.position).lerp(Za,n),Pf.set(ba.x+Q.camera.offset.x*Ui,ba.y+Q.camera.offset.y*Ui,ba.z+Q.camera.offset.z*Ui),Lf.set(Ye.position.x,Ye.position.y+Q.camera.lookHeight,Ye.position.z),Df.copy(Lf).lerp(Za,n),kt.position.lerp(Pf,e),Fi.lerp(Df,t),kt.lookAt(Fi)}function pb(){if(Fo>0){Fo-=1,Mr=null,yr.hidden=!0;return}if(!Ye||_t!=="walking"){Mr=null,yr.hidden=!0;return}let s=null,e=1/0;for(const t of ks){const n=Ye.position.x-t.position.x,i=Ye.position.z-t.position.z,r=Math.hypot(n,i);r<=t.radius&&r<e&&(s=t,e=r)}Mr=s,yr.hidden=!s,s&&(YE.textContent=`查看「${Q.stationNames[s.name]}」`)}function vi(){Wn.clear(),No.set(0,0),Bo=null,hl.style.transform="translate3d(0, 0, 0)"}function Wm(s){!s||_t!=="walking"||(Hm=_t,vi(),ni.enabled=!1,_t="panel",Hs.hidden=!0,wm.textContent=Q.stationNames[s.name],Lo.innerHTML=XE(s.name,Q.stationNames[s.name]),Ka.classList.toggle("has-story",qE(s.name)),Ka.scrollTop=0,Fs.hidden=!1,yr.hidden=!0,Pm.focus())}function Vo(){_t==="panel"&&(ul(),vi(),Fs.hidden=!0,_t=Hm==="observing"?"observing":"walking",ni.enabled=_t==="observing",Hs.hidden=_t!=="walking",xi.focus?.())}function Xm(){const s=Tr[zo];s&&($a.src=s.href,$a.alt=s.title,Am.textContent=`${zo+1} / ${Tr.length} · ${s.title}`)}function mb(s){const e=[...Lo.querySelectorAll("[data-photo-gallery]")];Tr=e.map(t=>({href:t.href,title:t.dataset.photoTitle||t.querySelector("img")?.alt||"摄影作品"})),zo=Math.max(0,e.indexOf(s)),Xm(),ss.hidden=!1,yu.focus()}function ul(){ss.hidden=!0,$a.removeAttribute("src")}function el(s){Tr.length&&(zo=(zo+s+Tr.length)%Tr.length,Xm())}function qm(){vi(),yr.hidden=!0,Mr=null,Fo=1,ni.enabled=!1,document.body.classList.remove("intro-active"),_t="panel",Hs.hidden=!0,Io.hidden=!1,Tu.focus()}function _b(){Io.hidden||(vi(),Io.hidden=!0,_t="walking",Hs.hidden=!1,Mu.textContent="自由探索",Fo=1,xi.focus?.())}function Ym(){!Bi||!Ye||["error","loading","ready","introPlaying","arriving"].includes(_t)||(vi(),Fs.hidden=!0,Io.hidden=!0,ni.enabled=!1,Bi.getWorldPosition(Ye.position),Fi.copy(Ye.position).add(new C(0,Q.camera.lookHeight,0)),kt.position.set(Ye.position.x+Q.camera.offset.x,Ye.position.y+Q.camera.offset.y,Ye.position.z+Q.camera.offset.z),kt.lookAt(Fi),_t="walking",Hs.hidden=!1,Fo=1,Mu.textContent="自由探索")}function jm(s,e){const t=e instanceof Error?e:new Error(String(e));console.error(`[${s}]`,t),Jn?.dispose(),Jn=null,vi(),_t="error",Tm.hidden=!0,yr.hidden=!0,cl.hidden=!0,vu.hidden=!1,Im.textContent=`开场失败：${s}`,Eh=[`阶段：${s}`,`错误：${t.message}`,`模型：${Q.assetUrl}`,t.stack?`
${t.stack}`:""].filter(Boolean).join(`
`),bm.textContent=Eh,Nm.textContent=Q.assetUrl,Eu.hidden=!(en&&Bi&&Ye)}function gb(){if(!(!en||!Bi||!Ye)){if(vu.hidden=!0,Jn&&Jn.state!=="walking"){Jn.skip();return}vi(),ni.enabled=!1,Bi.getWorldPosition(Ye.position),Ye.visible=!0,Fi.copy(Ye.position).add(new C(0,Q.camera.lookHeight,0)),kt.position.copy(Ye.position).add(new C(Q.camera.offset.x,Q.camera.offset.y,Q.camera.offset.z)),kt.lookAt(Fi),Su.hidden=!0,document.querySelector("#intro-clouds").hidden=!0,qm()}}function xb(){const s=[`✓ ${Q.required.nav}`,`✓ ${Uo.length} 个 COL_ 碰撞体`,`✓ ${ks.length} 个 TRG_ 触发点`,`✓ ${Q.required.spawn}`,"✓ glTF 原始尺度 / Y-up",Vm?"✓ 静态卡通人物（胶囊仅用于碰撞）":"— 人物尚未载入",Qa?"✓ 加宽卡通码头与细节组件":"— 码头细节尚未载入",Xn?"✓ 木桥已跨越池塘并补齐通行面":"— 跨池塘木桥尚未载入",Oo?`✓ 环境细化（${Oo.texturedMeshCount} 个贴图对象 / 灯塔与岸边细节）`:"— 环境细化层尚未载入",`✓ 精细渲染（${on.getPixelRatio().toFixed(2)}× / ${Sh}px 阴影）`];KE.innerHTML=s.map(e=>`<p>${e}</p>`).join(""),console.table({NAV:Oa.name,COL:Uo.map(e=>e.name).join(", "),TRG:ks.map(e=>e.name).join(", "),SPAWN:Bi.name})}async function vb(){en=(await new Sp().loadAsync(Q.assetUrl,a=>{if(a.total>0){const l=Math.round(a.loaded/a.total*100);Mh.textContent=`载入模型 ${l}%`,fo.textContent=`正在准备小岛… ${l}%`}})).scene,en.name="ISLAND_GRAY_V01_ROOT",Ht.add(en),en.updateMatrixWorld(!0),Uf(en),Oo=await GE(en,on),Ht.add(Oo.group);const t=en.getObjectByName("ISLAND_Grass_Main")||en;new xt().setFromObject(t).getCenter(Za),Za.y+=Q.camera.lookHeight,Qa=LE(en.getObjectByName("ROAD_Dock")),Ht.add(Qa),Em.textContent="正在校验场景接口",Mh.textContent="必须找到完整 NAV / COL / TRG / SPAWN";const n=rb(en);Oa=n.nav,Bi=n.spawn,Xn=UE({sourceDeck:n.index.get("ROAD_Bridge_02_03"),sourceNorthRail:n.index.get("ROAD_BridgeRail_N"),sourceSouthRail:n.index.get("ROAD_BridgeRail_S"),pondWater:n.index.get("ISLAND_Pond_Water"),pondBasin:n.index.get("ISLAND_Pond_Basin"),mainRoute:n.index.get("ROAD_MainRoute"),northCollider:n.index.get("COL_BridgeRail_N"),southCollider:n.index.get("COL_BridgeRail_S")}),Ht.add(Xn.group),Xn.group.updateMatrixWorld(!0),Ja=[Oa,Xn.navSurface,...Xn.connectorNavSurfaces],Uf(Xn.group),en.updateMatrixWorld(!0),Uo=n.colliders.map(a=>({name:a.name,object:a,box:new xt().setFromObject(a)})),ks=n.triggers.map(a=>{const l=new C;a.getWorldPosition(l);const c=Number(a.userData.trigger_radius_m);return{name:a.name,object:a,position:l,radius:Number.isFinite(c)?c:Q.interaction.fallbackRadius}}),ob(n.index);for(const a of n.colliders)a.visible=!1;Oa.visible=!1,lb(n),Ye=nb(),Bi.getWorldPosition(Ye.position);const i=Gm(Ye.position.x,Ye.position.z);if(!i)throw new Error("SPAWN_Dock 下方没有有效的 NAV_Walkable 落脚面。");if(Math.abs(i.point.y-Ye.position.y)>.25)throw new Error(`SPAWN_Dock 与通行面高度不一致：${Ye.position.y.toFixed(3)}m / ${i.point.y.toFixed(3)}m`);await ib(Ye),Fi.copy(Ye.position).add(new C(0,Q.camera.lookHeight,0)),kt.position.set(Ye.position.x+Q.camera.offset.x,Ye.position.y+Q.camera.offset.y,Ye.position.z+Q.camera.offset.z),kt.lookAt(Fi),xb();const r=CE(en);r.length===1?(ws=r[0].object,Ht.attach(ws),ws.userData.intro_boat_source="glb"):(ws=PE(),Ht.add(ws)),fo.textContent="",fo.hidden=!0;const o=bE();Jn=wE({camera:kt,player:Ye,island:en,spawnObject:Bi,orbitControls:ni,boatObject:ws,clouds:o,introOverlay:Su,introContent:Dm,activeSkipButton:cl,arrivalCaption:Lm,cameraTarget:Fi,config:{...Q.opening,walkingCameraOffset:new C(Q.camera.offset.x,Q.camera.offset.y,Q.camera.offset.z),walkingLookHeight:Q.camera.lookHeight},clearInput:vi,onStateChange:a=>{_t=a,Hs.hidden=a!=="walking"},onEnterWalking:qm,onError:jm}),_t="ready",Br.disabled=!1,qo.disabled=!1,Br.textContent="登岛看看",Mu.textContent="准备登岛",Tm.hidden=!0}function Km(){const s=window.innerWidth,e=window.innerHeight;on.setSize(s,e,!1),kt.aspect=s/Math.max(1,e),kt.updateProjectionMatrix()}function $m(){requestAnimationFrame($m);const s=Math.min(eb.getDelta(),Q.player.maxDeltaSeconds);db(s),fb(s),pb(),on.render(Ht,kt)}function Zm(s){if(s.pointerId!==Bo)return;const e=Bs.getBoundingClientRect(),t=e.width*.32,n=s.clientX-(e.left+e.width*.5),i=s.clientY-(e.top+e.height*.5),r=Math.hypot(n,i),o=r>t?t/r:1,a=n*o,l=i*o;No.set(a/t,l/t),hl.style.transform=`translate3d(${a}px, ${l}px, 0)`}Bs.addEventListener("pointerdown",s=>{_t==="walking"&&(s.preventDefault(),Bo=s.pointerId,Bs.setPointerCapture?.(s.pointerId),Zm(s))});Bs.addEventListener("pointermove",Zm);const Jm=s=>{s.pointerId===Bo&&(No.set(0,0),Bo=null,hl.style.transform="translate3d(0, 0, 0)")};Bs.addEventListener("pointerup",Jm);Bs.addEventListener("pointercancel",Jm);xi.addEventListener("pointerdown",s=>{if(!(_t!=="walking"||s.button!==0)){if(s.pointerType==="touch"&&(ui.set(s.pointerId,new Me(s.clientX,s.clientY)),ui.size>=2)){const[e,t]=[...ui.values()];Sr=e.distanceTo(t),ko=null,s.preventDefault();return}ko=s.pointerId,zm.set(s.clientX,s.clientY)}});xi.addEventListener("pointermove",s=>{if(s.pointerType!=="touch"||!ui.has(s.pointerId)||(ui.get(s.pointerId).set(s.clientX,s.clientY),ui.size<2))return;const[e,t]=[...ui.values()],n=e.distanceTo(t);Sr>0&&n>0&&(Ui=An.clamp(Ui*(Sr/n),Q.camera.minZoomScale,Q.camera.maxZoomScale)),Sr=n,s.preventDefault()});xi.addEventListener("pointerup",s=>{if(s.pointerType==="touch"&&(ui.delete(s.pointerId),ui.size<2&&(Sr=0)),s.pointerId!==ko||_t!=="walking"||(ko=null,zm.distanceTo(new Me(s.clientX,s.clientY))>Q.interaction.clickDragTolerance))return;const e=ab(s);e&&Wm(e)});xi.addEventListener("pointercancel",s=>{ui.delete(s.pointerId),Sr=0,ko=null});xi.addEventListener("wheel",s=>{if(_t!=="walking")return;s.preventDefault();const e=s.deltaY>0?Q.camera.zoomWheelFactor:1/Q.camera.zoomWheelFactor;Ui=An.clamp(Ui*e,Q.camera.minZoomScale,Q.camera.maxZoomScale)},{passive:!1});const yb=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);window.addEventListener("keydown",s=>{yb.has(s.code)&&(s.preventDefault(),_t==="walking"&&Wn.add(s.code)),s.code==="KeyE"&&!s.repeat&&_t==="walking"&&Mr&&(s.preventDefault(),Wm(Mr)),s.code==="Escape"&&(ss.hidden?_t==="panel"&&Vo():ul()),!ss.hidden&&s.code==="ArrowLeft"&&el(-1),!ss.hidden&&s.code==="ArrowRight"&&el(1)});window.addEventListener("keyup",s=>Wn.delete(s.code));window.addEventListener("blur",vi);document.addEventListener("visibilitychange",()=>{document.hidden&&vi()});window.addEventListener("resize",Km);Pm.addEventListener("click",Vo);Fs.addEventListener("click",s=>{s.target===Fs&&Vo()});Lo.addEventListener("click",async s=>{const e=s.target.closest("[data-photo-gallery]");if(e){s.preventDefault(),mb(e);return}const t=s.target.closest("[data-copy-contact]");if(t){try{await navigator.clipboard.writeText(t.dataset.copyContact),t.textContent="已复制微信号"}catch(i){console.error("复制微信号失败",i),t.textContent="微信号：Lin_JQ__May"}return}const n=s.target.closest("[data-station-action]");if(n&&(n.dataset.stationAction==="close"&&Vo(),n.dataset.stationAction==="dock"&&(Vo(),Ym()),n.dataset.stationAction==="gallery-top")){const i=Lo.querySelector("#photo-gallery-top");Ka.scrollTo({top:i?.offsetTop??0,behavior:"smooth"})}});yu.addEventListener("click",ul);Rm.addEventListener("click",()=>el(-1));Cm.addEventListener("click",()=>el(1));ss.addEventListener("click",s=>{s.target===ss&&ul()});jE.addEventListener("click",Ym);Br.addEventListener("click",()=>{_t!=="ready"||!Jn||(Br.disabled=!0,qo.disabled=!0,Jn.play())});const Qm=()=>{!Jn||!["ready","introPlaying","arriving"].includes(_t)||(Br.disabled=!0,qo.disabled=!0,Jn.skip())};qo.addEventListener("click",Qm);cl.addEventListener("click",Qm);Tu.addEventListener("click",_b);Ua.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Eh),Ua.textContent="已复制"}catch(s){console.error("复制错误详情失败",s),Ua.textContent="复制失败"}});Eu.addEventListener("click",gb);hc.addEventListener("click",()=>{const s=hc.getAttribute("aria-expanded")==="true";hc.setAttribute("aria-expanded",String(!s)),$E.hidden=s,ZE.textContent=s?"＋":"－"});wf.addEventListener("change",()=>{for(const s of Ja)s.visible=wf.checked});Af.addEventListener("change",()=>{for(const s of Uo)s.object.visible=Af.checked});Rf.addEventListener("change",()=>{Cs&&(Cs.visible=Rf.checked)});window.addEventListener("beforeunload",()=>{Jn?.dispose(),DE(ws),IE(Qa),OE(Xn),WE(Oo),Fm.dispose()},{once:!0});Km();$m();vb().catch(s=>jm("GLB 加载或接口校验",s));
