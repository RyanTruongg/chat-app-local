(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[4],{100:function(e,t,a){"use strict";a(0);var s=a(2),c={small:{width:"28px",height:"28px"},medium:{width:"40px",height:"40px"},large:{width:"60px",height:"60px"}};t.a=function(e){var t=e.imgSrc,a=void 0===t?"https://i.pravatar.cc/300":t,i=e.size,r=void 0===i?"medium":i;return Object(s.jsx)("div",{className:"avatar round",style:c[r],children:Object(s.jsx)("img",{className:"round",style:{padding:"1px"},src:a,alt:""})})}},101:function(e,t,a){"use strict";var s=a(25),c=a(37),i=(a(0),a(2)),r=["iconName","variant","type","size","color","className"];t.a=function(e){var t=e.iconName,a=e.variant,n=e.type,o=e.size,l=e.color,d=e.className,u=Object(c.a)(e,r),j=["btn"];return null===d||void 0===d||d.split(" ").forEach((function(e){return j.push(e)})),"clear"===a&&j.push("btn--nobg"),"large"===o&&j.push("btn--large"),Object(i.jsx)("button",Object(s.a)(Object(s.a)({},u),{},{type:n,className:j.join(" "),children:Object(i.jsx)("span",{style:{color:l},className:"material-icons-round",children:t})}))}},110:function(e,t,a){"use strict";a.r(t);var s=a(24),c=a(0),i=a.p+"static/media/search.ffb58015.svg",r=a(100),n=a(101),o=a(18),l=a(2);function d(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",placeholder:"Search messenger",value:a,onChange:function(e){return r(e.target.value)}}),!a&&Object(l.jsx)("img",{src:i,alt:""})]})}var u=function(e){var t=e.providerData,a=Object(o.c)(),s=(t||{}).photoURL;return Object(l.jsxs)("header",{className:"sidebar-header",children:[Object(l.jsxs)("div",{className:"sidebar-top",children:[Object(l.jsxs)("div",{className:"sidebar-top-left",children:[Object(l.jsx)(r.a,{imgSrc:s}),Object(l.jsx)("span",{children:"Chats"})]}),Object(l.jsxs)("div",{className:"sidebar-top-right",children:[Object(l.jsx)(n.a,{iconName:"more_horiz"}),Object(l.jsx)(n.a,{iconName:"add"}),Object(l.jsx)(n.a,{iconName:"logout",onClick:a.signout})]})]}),Object(l.jsx)("div",{className:"sidebar-bottom",children:Object(l.jsx)(d,{})})]})},j=a(25),b=a(37),h=a(20),v=function(e){var t=e.username,a=void 0===t?"Thanh Nhut":t,s=e.photoURL,c=e.lastMsg,i=void 0===c?"Lorem ipsum dolor,adfadf asdfasfafasfsafasfasdfs Tui laf":c,n=e.to;return Object(l.jsxs)(h.b,{to:n,className:"chatbox-card",children:[Object(l.jsx)(r.a,{imgSrc:s,size:"large"}),Object(l.jsxs)("div",{className:"chatbox-card__info",children:[Object(l.jsx)("span",{style:{display:"block",fontWeight:"600"},children:a}),Object(l.jsx)("span",{children:i})]})]})},p=["userID"],m=function(e){var t=e.listData;return Object(l.jsx)("div",{className:"chatbox-list",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.userID,a=Object(b.a)(e,p);return Object(l.jsx)(v,Object(j.a)(Object(j.a)({},a),{},{to:"/home/t/"+t}),t)}))})},O=a(26);a.e(8).then(a.t.bind(null,105,7));var x=function(){var e,t,a=Object(c.useState)([]),i=Object(s.a)(a,2),r=i[0],d=i[1],j=Object(o.c)();return Object(c.useEffect)((function(){return"loged"===j.loginState&&O.a.on("users",(function(e){var t;console.log(e),console.log(null===(t=j.user)||void 0===t?void 0:t.uid),e=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.userID)!==(null===(t=j.user)||void 0===t?void 0:t.uid)})),d(e)})),function(){O.a.off("users")}}),[j.loginState,null===(e=j.user)||void 0===e?void 0:e.uid]),Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(u,{providerData:null===(t=j.user)||void 0===t?void 0:t.providerData[0]}),Object(l.jsx)(m,{listData:r}),Object(l.jsx)(n.a,{size:"large",variant:"clear",className:"m-logout",iconName:"logout",onClick:j.signout})]})};t.default=x}}]);