(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{39:function(n,e,t){n.exports=t(73)},73:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(31),o=t.n(i),c=t(15),u=t(1),p=t(11),l=t(8),s=t(2);function x(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: white;\n  font-size: 16px;\n  margin: 0 20px;\n"]);return x=function(){return n},n}function d(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #141414;\n  padding: 20px 20px;\n  z-index: 10;\n"]);return d=function(){return n},n}var b=s.b.div(d()),f=Object(s.b)(p.c)(x());var m=function(){return a.a.createElement(b,null,a.a.createElement(f,{exact:!0,to:"/",activeStyle:{textDecoration:"underline",fontWeight:600}},"Home"),a.a.createElement(f,{to:"/about",activeStyle:{textDecoration:"underline",fontWeight:600}},"About"))};function v(){var n=Object(u.a)(["\n  &:first-child {\n    font-size: 20px;\n  }\n  &:not(first-child) {\n    margin-top: 10px;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  max-width: 50%;\n  margin: 0 auto;\n  margin-top: 100px;\n  padding: 20px;\n  border-radius: 5px;\n  background-color: white;\n  font-weight: 300;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n"]);return g=function(){return n},n}var h=s.b.div(g()),E=s.b.div(v());var j=function(){return a.a.createElement(h,null,a.a.createElement(E,null,"Do It \ub178\ub9c8\ub4dc\ucf54\ub354 \ubb34\ube44 \uc6f9\ud398\uc774\uc9c0"),a.a.createElement(E,null,"\u2212 \ub178\ub9c8\ub4dc\ucf54\ub354&\uae40\ud615\ud0dc, 2020"))},O=t(12),w=t.n(O);function y(){var n=Object(u.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: grey;\n"]);return y=function(){return n},n}function k(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n"]);return k=function(){return n},n}var z=s.b.div(k()),_=s.b.span(y());var I=function(){return a.a.createElement(z,null,a.a.createElement(_,null,"Loading..."))};function A(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 20px;\n"]);return A=function(){return n},n}function S(){var n=Object(u.a)(["\n  margin-right: 10px;\n"]);return S=function(){return n},n}function P(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 10px;\n  font-size: 14px;\n"]);return P=function(){return n},n}function D(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 10px;\n  font-size: 14px;\n"]);return D=function(){return n},n}function N(){var n=Object(u.a)(["\n  color: #2c2c2c;\n  font-size: 24px;\n  margin-bottom: 5px;\n"]);return N=function(){return n},n}function J(){var n=Object(u.a)([""]);return J=function(){return n},n}function L(){var n=Object(u.a)(["\n  min-width: 200px;\n  max-width: 250px;\n  min-height: 300px;\n  max-height: 350px;\n  width: 100%;\n  margin-right: 30px;\n  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n"]);return L=function(){return n},n}function M(){var n=Object(u.a)(["\n  max-width: 70%;\n  min-width: 400px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px;\n  padding: 20px;\n  border-radius: 5px;\n  background-color: white;\n  font-weight: 300;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  display: flex;\n"]);return M=function(){return n},n}var W=s.b.div(M()),B=s.b.img(L()),F=s.b.div(J()),H=s.b.div(N()),R=s.b.div(D()),U=s.b.div(P()),q=s.b.span(S()),C=s.b.div(A());var G=function(n){var e=n.location,t=n.match,i=n.history,o=n.API,u=Object(r.useState)(e.state),p=Object(c.a)(u,2),l=p[0],s=p[1];if(Object(r.useEffect)((function(){!function(){var n,e;w.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!isNaN(Number(t.params.id))){r.next=4;break}i.replace("/error"),r.next=15;break;case 4:if(void 0!==l){r.next=15;break}return r.prev=5,r.next=8,w.a.awrap(o.get("/movie_details.json?movie_id=".concat(t.params.id)));case 8:null===(n=r.sent).data.data.movie.title?i.replace("/error"):(e=n.data.data.movie,s({title:e.title,year:e.year,description:e.description_full,poster:e.medium_cover_image,genres:e.genres})),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(5),i.push("/error");case 15:case"end":return r.stop()}}),null,null,[[5,12]])}()}),[t,i,o,l,s]),void 0===l)return a.a.createElement(I,null);var x=l.title,d=l.year,b=l.description,f=l.poster,m=l.genres;return a.a.createElement(W,null,a.a.createElement(B,{src:f}),a.a.createElement(F,null,a.a.createElement(H,null,x),a.a.createElement(R,null,d),a.a.createElement(U,null,m.map((function(n,e){return a.a.createElement(q,{key:e},n)}))),a.a.createElement(C,null,b)))};function K(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 20px;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin-right: 10px;\n"]);return Q=function(){return n},n}function T(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 10px;\n  font-size: 14px;\n"]);return T=function(){return n},n}function V(){var n=Object(u.a)(["\n  color: #adaeb9;\n  margin-top: 10px;\n  font-size: 14px;\n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  color: #2c2c2c;\n  font-size: 24px;\n  margin-bottom: 5px;\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)([""]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  position: relative;\n  top: -50px;\n  width: 100%;\n  max-width: 150px;\n  max-height: 200px;\n  margin-right: 30px;\n  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 45%;\n  min-width: 450px;\n  margin-bottom: 70px;\n  padding: 20px;\n  border-radius: 5px;\n  background-color: white;\n  font-weight: 300;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  display: flex;\n  text-decoration: none;\n"]);return $=function(){return n},n}var nn=Object(s.b)(p.b)($()),en=s.b.img(Z()),tn=s.b.div(Y()),rn=s.b.div(X()),an=s.b.div(V()),on=s.b.div(T()),cn=s.b.span(Q()),un=s.b.div(K());var pn=function(n){var e=n.id,t=n.title,r=n.year,i=n.description,o=n.genres,c=n.poster;return a.a.createElement(nn,{to:{pathname:"/detail/".concat(e),state:{title:t,year:r,description:i,poster:c,genres:o}}},a.a.createElement(en,{src:c}),a.a.createElement(tn,null,a.a.createElement(rn,null,t),a.a.createElement(an,null,r),a.a.createElement(on,null,o.map((function(n,e){return a.a.createElement(cn,{key:e},n)}))),a.a.createElement(un,null,i.length>180?"".concat(i.slice(0,180),"..."):i)))};function ln(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 50px;\n  padding-top: 70px;\n  width: 80%;\n"]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n"]);return sn=function(){return n},n}var xn=s.b.div(sn()),dn=s.b.div(ln());var bn=function(n){var e=n.movies,t=n.setMovies,i=n.API,o=n.history;return Object(r.useEffect)((function(){!function(){var n;w.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.awrap(i.get("/list_movies.json?sort_by=year"));case 3:n=e.sent,t(n.data.data.movies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.push("/error");case 10:case"end":return e.stop()}}),null,null,[[0,7]])}()}),[t,i,o]),0===e.length?a.a.createElement(I,null):a.a.createElement(xn,null,a.a.createElement(dn,null,e.map((function(n){return a.a.createElement(pn,{key:n.id,id:n.id,title:n.title,year:n.year,description:n.description_full,genres:n.genres,poster:n.medium_cover_image})}))))};function fn(){var n=Object(u.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: grey;\n"]);return fn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n"]);return mn=function(){return n},n}var vn=s.b.div(mn()),gn=s.b.span(fn());var hn=function(n){var e=n.location,t=n.history;return"/error"!==e.pathname&&t.push("/error"),a.a.createElement(vn,null,a.a.createElement(gn,null,"Something wrong..."))},En=t(22),jn=t.n(En),On=t(75);function wn(){var n=Object(u.a)(["\n  body {\n    margin: 0;\n    padding-top: 60px;\n    background-color: #eff3f7;\n  }\n"]);return wn=function(){return n},n}var yn=Object(s.a)(wn()),kn=jn.a.create({baseURL:"https://yts.lt/api/v2",adapter:Object(On.a)(jn.a.defaults.adapter,{threshold:6e4})});var zn=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],i=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(yn,null),a.a.createElement(p.a,{basename:"/sample"},a.a.createElement(m,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/about",component:j}),a.a.createElement(l.a,{path:"/detail/:id",render:function(n){return a.a.createElement(G,Object.assign({},n,{API:kn}))}}),a.a.createElement(l.a,{exact:!0,path:"/",render:function(n){return a.a.createElement(bn,Object.assign({},n,{movies:t,setMovies:i,API:kn}))}}),a.a.createElement(l.a,{path:"/",component:hn}))))};o.a.render(a.a.createElement(zn,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ccd75e91.chunk.js.map