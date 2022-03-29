(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{20:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a,n=c(13),r=c.n(n),s=c(6),l=c(1),o=c(2);!function(e){e.Home="home",e.People="people"}(a||(a={}));c(20);var j,i,d=c(3),b=c(12),u=c(14),m=c(15),h=c(10),p=c.n(h),O=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=(c(24),c(25),c(0)),f=function(){return Object(x.jsx)("div",{className:"Loader",children:Object(x.jsx)("div",{className:"Loader__content"})})},N=c(11),_=c(5),v=c.n(_);!function(e){e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e.MotherName="motherName",e.FatherName="fatherName"}(j||(j={})),function(e){e.Asc="asc",e.Desc="desc"}(i||(i={}));c(27),c(28),c(29);var P=function(e){var t=e.name,c=e.slug,a=e.sex,n=Object(s.c)(),r=Object(d.a)(n,1)[0];return Object(x.jsx)("a",{href:"#/people/".concat(c,"?").concat(r),className:v()("PersonName",{PersonName__male:"m"===a},{PersonName__female:"f"===a}),children:t})},S=function(e){var t=e.person,c=e.personSelected,a=t.mother,n=t.father;return Object(x.jsxs)("tr",{className:v()({"PersonRow--selected":t.slug===c}),children:[Object(x.jsx)("td",{children:Object(x.jsx)(P,{name:t.name,slug:t.slug,sex:t.sex})}),Object(x.jsx)("td",{children:t.sex}),Object(x.jsx)("td",{children:t.born}),Object(x.jsx)("td",{children:t.died}),Object(x.jsx)("td",{children:a?Object(x.jsx)(P,{name:a.name,slug:a.slug,sex:a.sex}):Object(x.jsx)("b",{children:"name"})}),Object(x.jsx)("td",{children:n?Object(x.jsx)(P,{name:n.name,slug:n.slug,sex:n.sex}):Object(x.jsx)("b",{children:"name"})})]})},g=function(e){var t=e.people,c=e.personSelected,a=e.searchParams,n=e.setSearchParams,r=Object(l.useState)(a.get("sortBy")||""),s=Object(d.a)(r,2),o=s[0],b=s[1],u=Object(l.useState)(a.get("sortOrder")||""),m=Object(d.a)(u,2),h=m[0],p=m[1],O=Object(l.useMemo)((function(){return function(e,t,c){return""===t?Object(N.a)(e):Object(N.a)(e).sort((function(e,a){switch(t){case j.Name:case j.Sex:return c===i.Asc?e[t].localeCompare(a[t]):a[t].localeCompare(e[t]);case j.Born:case j.Died:return c===i.Asc?e[t]-a[t]:a[t]-e[t];case j.MotherName:case j.FatherName:var n=e[t],r=a[t];return null===n&&null===r?0:null===n?c===i.Asc?1:-1:null===r?c===i.Asc?-1:1:c===i.Asc?n.localeCompare(r):r.localeCompare(n);default:return 0}}))}(t,o,h)}),[o,t,h]),f=function(e){o!==e?(b(e),p(i.Asc),a.set("sortOrder",i.Asc)):h===i.Desc?(p(i.Asc),a.set("sortOrder",i.Asc)):(p(i.Desc),a.set("sortOrder",i.Desc)),a.set("sortBy",e),n(a)};return Object(x.jsxs)("table",{className:"table is-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.Name},{"PeopleTable__header--sorted-desc":o===j.Name&&h===i.Desc}),onClick:function(){return f(j.Name)},children:"Name"}),Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.Sex},{"PeopleTable__header--sorted-desc":o===j.Sex&&h===i.Desc}),onClick:function(){return f(j.Sex)},children:"Sex"}),Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.Born},{"PeopleTable__header--sorted-desc":o===j.Born&&h===i.Desc}),onClick:function(){return f(j.Born)},children:"Born"}),Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.Died},{"PeopleTable__header--sorted-desc":o===j.Died&&h===i.Desc}),onClick:function(){return f(j.Died)},children:"Died"}),Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.MotherName},{"PeopleTable__header--sorted-desc":o===j.MotherName&&h===i.Desc}),onClick:function(){return f(j.MotherName)},children:"Mother's name"}),Object(x.jsx)("th",{className:v()("PeopleTable__header",{"PeopleTable__header--sorted":o===j.FatherName},{"PeopleTable__header--sorted-desc":o===j.FatherName&&h===i.Desc}),onClick:function(){return f(j.FatherName)},children:"Father's name"})]})}),Object(x.jsx)("tbody",{children:O.map((function(e){return Object(x.jsx)(S,{person:e,personSelected:c},e.slug)}))})]})},T=(c(30),function(e){var t=e.people,c=Object(l.useMemo)((function(){return t.filter((function(e){return"f"===e.sex}))}),[t]),a=Object(l.useMemo)((function(){return t.filter((function(e){return"m"===e.sex}))}),[t]);return Object(x.jsxs)("form",{action:"/",className:"NewPerson",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsx)("label",{htmlFor:"name",className:"label",children:"Name:"}),Object(x.jsx)("input",{type:"text",className:"input",id:"name",placeholder:"Enter name",required:!0}),Object(x.jsx)("p",{className:"label",children:"Sex:"}),Object(x.jsxs)("div",{className:"sex-container",children:[Object(x.jsxs)("label",{htmlFor:"male",className:"radio",children:[Object(x.jsx)("input",{type:"radio",id:"male",name:"sex",defaultChecked:!0}),"Male"]}),Object(x.jsxs)("label",{htmlFor:"female",className:"radio",children:[Object(x.jsx)("input",{type:"radio",id:"female",name:"sex"}),"Female"]})]}),Object(x.jsx)("label",{htmlFor:"mother",className:"label",children:"Mother:"}),Object(x.jsx)("select",{name:"mother",id:"mother",className:"select",children:c.map((function(e){return Object(x.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(x.jsx)("label",{htmlFor:"father",className:"label",children:"Father:"}),Object(x.jsx)("select",{name:"father",id:"father",className:"select",children:a.map((function(e){return Object(x.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(x.jsx)("button",{type:"submit",className:"button",children:"Add person"})]})}),C=function(e,t){var c=t.toLowerCase();return e.filter((function(e){var t,a;return e.name.toLowerCase().includes(c)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))||(null===(a=e.fatherName)||void 0===a?void 0:a.toLowerCase().includes(c))}))},D=function(e){var t=e.edit,c=Object(l.useState)([]),a=Object(d.a)(c,2),n=a[0],r=a[1],j=Object(l.useState)([]),i=Object(d.a)(j,2),m=i[0],h=i[1],p=Object(l.useState)(!0),N=Object(d.a)(p,2),_=N[0],v=N[1],P=Object(s.c)({}),S=Object(d.a)(P,2),D=S[0],F=S[1],w=Object(l.useState)(D.get("query")||""),y=Object(d.a)(w,2),A=y[0],M=y[1],k=Object(l.useState)(A),B=Object(d.a)(k,2),L=B[0],H=B[1],E=Object(o.h)().personSelected,q=void 0===E?"":E,J=Object(l.useMemo)((function(){return t?Object(x.jsx)(T,{people:n}):Object(x.jsx)("a",{href:"#/people/new?".concat(D),className:"button add-button",children:"Add person"})}),[t,D]),I=Object(l.useCallback)(Object(u.debounce)((function(e){H(e),D.set("query",e),F(D)}),500),[t,D,q]);return Object(l.useEffect)((function(){O().then((function(e){return function(e){return e.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||null,father:e.find((function(e){return e.name===t.fatherName}))||null})}))}(e)})).then((function(e){var t=C(e,L);r(e),h(t),v(!1)}))}),[]),Object(l.useEffect)((function(){var e=C(n,L);h(e)}),[L]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"title",children:"People table"}),Object(x.jsx)("div",{className:"container",children:_?Object(x.jsx)(f,{}):Object(x.jsxs)(x.Fragment,{children:[J,Object(x.jsx)("input",{type:"text",className:"input",placeholder:"Search",value:A,onChange:function(e){M(e.target.value),I(e.target.value)}}),Object(x.jsx)(g,{people:m,personSelected:q,searchParams:D,setSearchParams:F})]})})]})},F=function(){return Object(x.jsx)("h1",{className:"title",children:"Page not found"})},w=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("nav",{className:"navbar",children:[Object(x.jsx)(s.b,{to:"/".concat(a.Home),className:"navbar-item",children:"Home"}),Object(x.jsx)(s.b,{to:"/".concat(a.People),className:"navbar-item",children:"People"})]})}),Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/",element:Object(x.jsx)("h1",{className:"title",children:"Home page"})}),Object(x.jsx)(o.b,{path:a.Home,element:Object(x.jsx)(o.a,{to:"/",replace:!0})}),Object(x.jsx)(o.b,{path:"".concat(a.People,"/new"),element:Object(x.jsx)(D,{edit:!0})}),Object(x.jsx)(o.b,{path:"".concat(a.People,"/:personSelected"),element:Object(x.jsx)(D,{edit:!1})}),Object(x.jsx)(o.b,{path:a.People,element:Object(x.jsx)(D,{edit:!1})}),Object(x.jsx)(o.b,{path:"*",element:Object(x.jsx)(F,{})})]})]})};r.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2e40a06a.chunk.js.map