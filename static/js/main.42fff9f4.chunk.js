(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{20:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a,r=c(13),n=c.n(r),s=c(6),o=c(0),l=c(2);!function(e){e.Home="home",e.People="people"}(a||(a={}));c(20);var j,d,b=c(3),u=c(12),i=c(14),h=c(15),m=c(10),O=c.n(m),p=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=c(11),f=c(5),N=c.n(f);!function(e){e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e.MotherName="motherName",e.FatherName="fatherName"}(j||(j={})),function(e){e.Asc="asc",e.Desc="desc"}(d||(d={}));c(24),c(25),c(26);var _=c(1),v=function(e){var t=e.name,c=e.slug,a=e.sex,r=Object(s.c)(),n=Object(b.a)(r,1)[0];return Object(_.jsx)("a",{href:"#/people/".concat(c,"?").concat(n),className:N()("PersonName",{PersonName__male:"m"===a},{PersonName__female:"f"===a}),children:t})},P=function(e){var t=e.person,c=e.personSelected,a=t.mother,r=t.father;return Object(_.jsxs)("tr",{className:N()({"PersonRow--selected":t.slug===c}),children:[Object(_.jsx)("td",{children:Object(_.jsx)(v,{name:t.name,slug:t.slug,sex:t.sex})}),Object(_.jsx)("td",{children:t.sex}),Object(_.jsx)("td",{children:t.born}),Object(_.jsx)("td",{children:t.died}),Object(_.jsx)("td",{children:a?Object(_.jsx)(v,{name:a.name,slug:a.slug,sex:a.sex}):Object(_.jsx)("b",{children:"name"})}),Object(_.jsx)("td",{children:r?Object(_.jsx)(v,{name:r.name,slug:r.slug,sex:r.sex}):Object(_.jsx)("b",{children:"name"})})]})},S=function(e){var t=e.people,c=e.personSelected,a=e.searchParams,r=e.setSearchParams,n=Object(o.useState)(a.get("sortBy")||""),s=Object(b.a)(n,2),l=s[0],u=s[1],i=Object(o.useState)(a.get("sortOrder")||""),h=Object(b.a)(i,2),m=h[0],O=h[1],p=Object(o.useMemo)((function(){return function(e,t,c){return""===t?Object(x.a)(e):Object(x.a)(e).sort((function(e,a){switch(t){case j.Name:case j.Sex:return c===d.Asc?e[t].localeCompare(a[t]):a[t].localeCompare(e[t]);case j.Born:case j.Died:return c===d.Asc?e[t]-a[t]:a[t]-e[t];case j.MotherName:case j.FatherName:var r=e[t],n=a[t];return null===r&&null===n?0:null===r?c===d.Asc?1:-1:null===n?c===d.Asc?-1:1:c===d.Asc?r.localeCompare(n):n.localeCompare(r);default:return 0}}))}(t,l,m)}),[l,t,m]),f=function(e){l!==e?(u(e),O(d.Asc),a.set("sortOrder",d.Asc)):m===d.Desc?(O(d.Asc),a.set("sortOrder",d.Asc)):(O(d.Desc),a.set("sortOrder",d.Desc)),a.set("sortBy",e),r(a)};return Object(_.jsxs)("table",{className:"table is-bordered",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.Name},{"PeopleTable__header--sorted-desc":l===j.Name&&m===d.Desc}),onClick:function(){return f(j.Name)},children:"Name"}),Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.Sex},{"PeopleTable__header--sorted-desc":l===j.Sex&&m===d.Desc}),onClick:function(){return f(j.Sex)},children:"Sex"}),Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.Born},{"PeopleTable__header--sorted-desc":l===j.Born&&m===d.Desc}),onClick:function(){return f(j.Born)},children:"Born"}),Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.Died},{"PeopleTable__header--sorted-desc":l===j.Died&&m===d.Desc}),onClick:function(){return f(j.Died)},children:"Died"}),Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.MotherName},{"PeopleTable__header--sorted-desc":l===j.MotherName&&m===d.Desc}),onClick:function(){return f(j.MotherName)},children:"Mother's name"}),Object(_.jsx)("th",{className:N()("PeopleTable__header",{"PeopleTable__header--sorted":l===j.FatherName},{"PeopleTable__header--sorted-desc":l===j.FatherName&&m===d.Desc}),onClick:function(){return f(j.FatherName)},children:"Father's name"})]})}),Object(_.jsx)("tbody",{children:p.map((function(e){return Object(_.jsx)(P,{person:e,personSelected:c},e.slug)}))})]})},g=(c(28),function(){return Object(_.jsx)("div",{className:"Loader",children:Object(_.jsx)("div",{className:"Loader__content"})})}),T=function(e,t){var c=t.toLowerCase();return e.filter((function(e){var t,a;return e.name.toLowerCase().includes(c)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))||(null===(a=e.fatherName)||void 0===a?void 0:a.toLowerCase().includes(c))}))},C=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(o.useState)([]),n=Object(b.a)(r,2),j=n[0],d=n[1],h=Object(o.useState)(!0),m=Object(b.a)(h,2),O=m[0],x=m[1],f=Object(s.c)({}),N=Object(b.a)(f,2),v=N[0],P=N[1],C=Object(o.useState)(v.get("query")||""),D=Object(b.a)(C,2),A=D[0],k=D[1],w=Object(o.useState)(A),y=Object(b.a)(w,2),B=y[0],F=y[1],M=Object(l.h)().personSelected,L=void 0===M?"":M,H=Object(o.useCallback)(Object(i.debounce)((function(e){F(e),v.set("query",e),P(v)}),500),[v,L]);return Object(o.useEffect)((function(){p().then((function(e){return function(e){return e.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||null,father:e.find((function(e){return e.name===t.fatherName}))||null})}))}(e)})).then((function(e){var t=T(e,B);a(e),d(t),x(!1)}))}),[]),Object(o.useEffect)((function(){var e=T(c,B);d(e)}),[B]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"title",children:"People table"}),Object(_.jsx)("div",{className:"container",children:O?Object(_.jsx)(g,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",{type:"text",className:"input",placeholder:"Search",value:A,onChange:function(e){k(e.target.value),H(e.target.value)}}),Object(_.jsx)(S,{people:j,personSelected:L,searchParams:v,setSearchParams:P})]})})]})},D=function(){return Object(_.jsx)("h1",{className:"title",children:"Page not found"})},A=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("header",{children:Object(_.jsxs)("nav",{className:"navbar",children:[Object(_.jsx)(s.b,{to:"/".concat(a.Home),className:"navbar-item",children:"Home"}),Object(_.jsx)(s.b,{to:"/".concat(a.People),className:"navbar-item",children:"People"})]})}),Object(_.jsxs)(l.d,{children:[Object(_.jsx)(l.b,{path:"/",element:Object(_.jsx)("h1",{className:"title",children:"Home page"})}),Object(_.jsx)(l.b,{path:a.Home,element:Object(_.jsx)(l.a,{to:"/",replace:!0})}),Object(_.jsx)(l.b,{path:"".concat(a.People,"/:personSelected"),element:Object(_.jsx)(C,{})}),Object(_.jsx)(l.b,{path:a.People,element:Object(_.jsx)(C,{})}),Object(_.jsx)(l.b,{path:"*",element:Object(_.jsx)(D,{})})]})]})};n.a.render(Object(_.jsx)(s.a,{children:Object(_.jsx)(A,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.42fff9f4.chunk.js.map