(this["webpackJsonpmy-mini-app"]=this["webpackJsonpmy-mini-app"]||[]).push([[0],{169:function(e,t,n){e.exports=n(276)},249:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);n(170),n(197),n(199),n(200),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239);var a=n(0),c=n.n(a),l=n(64),u=n.n(l),o=n(27),r=n.n(o),s=n(65),i=n.n(s),f=n(94),p=n(24),m=n(99),b=n.n(m),d=n(98),v=n.n(d),E=(n(248),n(96)),h=n.n(E),S=n(66),g=n.n(S),j=n(97),y=n.n(j),O=n(38),k=n.n(O),D=(n(249),n(95)),w=n.n(D),P=function(e){var t=e.id,n=e.left,l=e.question,u=e.retry,o=e.updateInfo,r=e.debugSetAttemptsZero,s=["\u0434\u0430","\u043d\u0435\u0442","\u0445\u0437"],i=Object(a.useState)(null),f=Object(p.a)(i,2),m=f[0],b=f[1],d=Object(a.useState)(!1),v=Object(p.a)(d,2),E=v[0],S=v[1],j=Object(a.useRef)(null);return Object(a.useEffect)((function(){null!=l&&(j.current.play(),o())}),[l]),Object(a.useEffect)((function(){if(null==m){var e=Math.floor(Math.random()*s.length);b(s[e])}}),[m,s]),c.a.createElement(h.a,{id:t},c.a.createElement(y.a,{title:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c "+n+". "+l},c.a.createElement(k.a,{className:"video-container"},c.a.createElement("video",{ref:j,width:"100%",height:"auto",preload:"auto",onEnded:function(){return S(!0)}},c.a.createElement("source",{src:w.a,type:"video/webm"})),null!=m&&E&&c.a.createElement(k.a,{className:"overlay"},m)),null!=l&&c.a.createElement(k.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:function(){b(null),S(!1),u()}},"\u0415\u0449\u0435 \u0420\u0430\u0437")),c.a.createElement(k.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:function(){return r()}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0438"))))},A=n(39),x=function(e){var t=e.question,n=e.setQuestion,l=e.setPopout,u=Object(a.useState)(!0),o=Object(p.a)(u,2),r=o[0],s=o[1];return c.a.createElement(A.c,{v:"center",h:"center"},c.a.createElement(A.b,{style:{background:"#232323"}},c.a.createElement(A.d,{top:"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441 \u0448\u0430\u0440\u0443",placeholder:"\u042f \u043f\u0438\u0434\u043e\u0440?",value:t,onChange:function(e){return t=e.target.value},status:r?"valid":"error",bottom:r?"":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441"}),c.a.createElement(A.a,{type:"submit",onClick:function(){s(null!=t),null!=t&&(n(t),l(null))}},"\u0413\u043e\u0442\u043e\u0432\u043e")))},K=function(){var e=Object(a.useState)(10),t=Object(p.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(null),o=Object(p.a)(u,2),s=o[0],m=o[1],d=Object(a.useState)(null),E=Object(p.a)(d,2),h=E[0],S=E[1],g=Object(a.useState)(c.a.createElement(v.a,{size:"large"})),j=Object(p.a)(g,2),y=j[0],O=j[1];return Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.sendPromise("VKWebAppStorageGet",{keys:["count","lastDate"]});case 2:t=e.sent,O(null),n={count:0},console.log(t.keys),console.log(n),t.keys.map((function(e){switch(e.key){case"count":n.count=Number(e.value);break;case"lastDate":n.lastDate=Date(e.value)}})),console.log(n),m(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){var e=null==s?10:10-s.count;l(e),null!=s&&e<=0&&alert("Please Pay")}),[s]),Object(a.useEffect)((function(){null==h&&null!=s&&s.count<10&&O(c.a.createElement(x,{question:h,setQuestion:S,setPopout:O}))}),[h,s]),c.a.createElement(b.a,{activePanel:"home",popout:y},c.a.createElement(P,{id:"home",question:h,left:n,retry:function(){S(null)},updateInfo:function(){var e={count:s.count+1,lastDate:new Date};r.a.sendPromise("VKWebAppStorageSet",{key:"count",value:String(e.count)}).then(r.a.sendPromise("VKWebAppStorageSet",{key:"lastDate",value:String(e.lastDate)})).then((function(t){m(e)}))},debugSetAttemptsZero:function(){var e={count:0,lastDate:new Date};r.a.sendPromise("VKWebAppStorageSet",{key:"count",value:String(e.count)}).then(r.a.sendPromise("VKWebAppStorageSet",{key:"lastDate",value:String(e.lastDate)})).then((function(t){m(e)}))}}))};r.a.send("VKWebAppInit"),u.a.render(c.a.createElement(K,null),document.getElementById("root"))},95:function(e,t,n){e.exports=n.p+"static/media/ballDraft.597a87d4.webm"}},[[169,1,2]]]);
//# sourceMappingURL=main.82d4e46c.chunk.js.map