(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c(25),s=(c(34),c(35),c(2)),r=c(13),j=c.n(r),l=(c(36),c(23)),i=c(4),o=c(0);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(37);var h=c(3),d=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person,c=e.slugPerson,a=t.name,s=t.sex,r=t.born,l=t.died,i=t.motherName,o=t.fatherName,b=t.mother,d=t.slug,O=t.father;return Object(h.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===d}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(n.b,{to:"/people/".concat(d),className:j()({"has-text-danger":"f"===s}),children:a})}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:l}),Object(h.jsxs)("td",{children:[!i&&"-",i&&b&&Object(h.jsx)(n.b,{to:"/people/".concat(b.slug),className:"has-text-danger",children:b.name}),i&&!b&&i]}),Object(h.jsxs)("td",{children:[!o&&"-",o&&O&&Object(h.jsx)(n.b,{to:"/people/".concat(O.slug),children:O.name}),o&&!O&&o]})]})},u=function(e){var t=e.people,c=Object(s.q)().slug||"";return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(O,{person:e,slugPerson:c},e.name)}))})]})},x=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(!1),s=Object(i.a)(a,2),r=s[0],j=s[1],O=Object(o.useState)(!1),x=Object(i.a)(O,2),m=x[0],p=x[1];Object(o.useEffect)((function(){p(!1),j(!0),b().then(n).catch((function(){return p(!0)})).finally((function(){return j(!1)}))}),[]);var f=Object(o.useMemo)((function(){return c.map((function(e){var t=c.find((function(t){return t.name===e.motherName}))||null,n=c.find((function(t){return t.name===e.fatherName}))||null;return Object(l.a)(Object(l.a)({},e),{},{mother:t,father:n})}))}),[c]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"box table-container",children:[r&&!m&&Object(h.jsx)(d,{}),m&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!r&&!m&&c.length<1&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!r&&!m&&c.length>0&&Object(h.jsx)(u,{people:f})]})})]})},m=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},p=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(n.c,{to:"/",className:m,children:"Home"}),Object(h.jsx)(n.c,{to:"/people",className:m,children:"People"})]})})}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(s.d,{children:Object(h.jsxs)(s.b,{path:"/",children:[Object(h.jsx)(s.b,{index:!0,element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(s.b,{path:"home",element:Object(h.jsx)(s.a,{to:"/",replace:!0})}),Object(h.jsx)(s.b,{path:"people/",element:Object(h.jsx)(x,{}),children:Object(h.jsx)(s.b,{path:":slug",element:Object(h.jsx)(x,{})})}),Object(h.jsx)(s.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(h.jsx)(n.a,{children:Object(h.jsx)(p,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.b0a04e0a.chunk.js.map