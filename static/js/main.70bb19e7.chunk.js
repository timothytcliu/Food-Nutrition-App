(this["webpackJsonpnutrition-frontend"]=this["webpackJsonpnutrition-frontend"]||[]).push([[0],{93:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(1),a=n.n(r),i=n(43),j=n.n(i),s=n(25),l=n.n(s),d=n(44),u=n(12),h=n(105),o=n(106),b=n(104),O=n(94),x=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)(h.a,{isOpen:a,toggle:function(){return i((function(e){return!e}))},size:"lg",children:[Object(c.jsx)(o.a,{caret:!0,outline:!0,color:"secondary",children:e.selectedNutrient}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O.a,{header:!0,children:"Select a nutrient "}),e.nutrients.map((function(t){return Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{onClick:e.handleEvents,children:t})},t)}))]})]})},g=n(95),p=n(96),f=n(48),m=n(97),v=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(g.a,{children:[Object(c.jsx)(p.a,{addonType:"prepend",children:Object(c.jsx)(f.a,{children:"Minimum nutritional value"})}),Object(c.jsx)(m.a,{type:"text",value:e.minValue,onChange:e.handleMinValueChange,placeholder:"0"})]}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(p.a,{addonType:"prepend",children:Object(c.jsx)(f.a,{children:"Maximum nutritional value"})}),Object(c.jsx)(m.a,{type:"text",value:e.maxValue,onChange:e.handleMaxValueChange,placeholder:"0"})]})]})},y=n(98),S=function(e){return e.foodData?e.foodData.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{style:{color:"blue"},children:e.name}),Object(c.jsxs)("h5",{children:["Weight: ",e.weight," | Measure: ",e.measure," | ndbno:"," ",e.ndbno]}),Object(c.jsxs)(y.a,{responsive:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Nutrient Name"}),Object(c.jsx)("th",{children:"Value"}),Object(c.jsx)("th",{children:"gm"}),Object(c.jsx)("th",{children:"Nutrient ID"})]})}),Object(c.jsx)("tbody",{children:e.nutrients.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.nutrient}),Object(c.jsxs)("td",{children:[e.value," ",e.unit]}),Object(c.jsx)("td",{children:e.gm}),Object(c.jsx)("td",{children:e.nutrient_id})]},e.nutrient_id)}))})]})]},e.ndbno)})):null},C=n(99),w=n(100),V=n(101),k=n(102),M=n(103),N=n(45),E=n(49),T=n.n(E);var A=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),j=Object(u.a)(i,2),s=j[0],h=j[1],o=Object(r.useState)(["Alcohol, ethyl (g)","Protein (g)","Total lipid (fat) (g)","Carbohydrate, by difference (g)","Sugars, total (g)","Ash (g)","Energy (kcal)","Fiber, total dietary (g)"]),b=Object(u.a)(o,1)[0],O=Object(r.useState)("Select a nutrient"),g=Object(u.a)(O,2),p=g[0],f=g[1],m=Object(r.useState)(null),y=Object(u.a)(m,2),E=y[0],A=y[1],D=Object(r.useState)("0"),F=Object(u.a)(D,2),P=F[0],R=F[1],I=Object(r.useState)("716"),J=Object(u.a)(I,2),_=J[0],z=J[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)("h1",{children:Object(c.jsx)(w.a,{children:"Food Nutrition Sorting App"})}),Object(c.jsxs)(V.a,{children:[Object(c.jsx)("h3",{children:"Search for the foods you want by nutritional values you need!"}),Object(c.jsx)("br",{}),Object(c.jsxs)(k.a,{children:[Object(c.jsx)(M.a,{children:Object(c.jsx)(x,{selectedNutrient:p,nutrients:b,handleEvents:function(e){f(e.currentTarget.textContent),function(e){A(b.indexOf(e.currentTarget.textContent))}(e)}})}),Object(c.jsx)(M.a,{children:Object(c.jsx)(v,{minValue:P,handleMinValueChange:function(e){R(e.target.value)},maxValue:_,handleMaxValueChange:function(e){z(e.target.value)}})}),Object(c.jsx)(M.a,{children:Object(c.jsx)(N.a,{color:"primary",onClick:function(){var e=new URLSearchParams({nutrient:E,min:P,max:_});(function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat("https://blooming-lowlands-24685.herokuapp.com/foods?").concat(e));case 3:n=t.sent,a(n.data),h(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()},children:"SEARCH"})})]}),Object(c.jsx)("br",{}),Object(c.jsx)(k.a,{children:Object(c.jsx)(M.a,{children:Object(c.jsx)("div",{children:!s&&n.length>0&&Object(c.jsx)("h5",{children:Object(c.jsxs)(w.a,{children:["Results: ",n.length]})})})})})]}),Object(c.jsx)("div",{children:!s&&Object(c.jsx)(S,{foodData:n})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:s&&Object(c.jsx)("h5",{style:{color:"red"},children:":( Sorry, your search yielded no results. Please try again."})})]})})};n(92);j.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.70bb19e7.chunk.js.map