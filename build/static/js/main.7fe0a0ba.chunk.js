(this.webpackJsonpmploid=this.webpackJsonpmploid||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n.n(r),i=n(9),s=n.n(i),l=(n(72),n(73),n(37)),o=n(24),d=n(57),u=n(56),h=n(54),j=n.n(h),b={getEmployeeData:function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")}},p=n(15),g=n(142),m=n(154),f=n(145),O=n(146),v=n(141),x=n(144),y=n(136),P=n(150),S=n(140),w=n(153),C=n(143);function A(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function N(e,t){return"desc"===e?function(e,n){return A(e,n,t)}:function(e,n){return-A(e,n,t)}}function D(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var I=[{id:"photo",numeric:!1,disablePadding:!0,label:""},{id:"id",numeric:!1,disablePadding:!0,label:"ID"},{id:"first",numeric:!1,disablePadding:!1,label:"First Name"},{id:"last",numeric:!1,disablePadding:!1,label:"Last Name"},{id:"email",numeric:!1,disablePadding:!1,label:"Email"},{id:"phone",numeric:!1,disablePadding:!1,label:"Phone"},{id:"location",numeric:!1,disablePadding:!1,label:"Location"}];function L(e){var t=e.classes,n=e.order,r=e.orderBy,c=e.onRequestSort;return Object(a.jsx)(y.a,{children:Object(a.jsx)(S.a,{children:I.map((function(e){return Object(a.jsx)(v.a,{align:"center",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&n,children:Object(a.jsxs)(w.a,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(i=e.id,function(e){c(e,i)}),children:[e.label,r===e.id?Object(a.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))})})}var k=Object(g.a)((function(e){return Object(m.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));function B(e){var t=k(),n=c.a.useState("asc"),r=Object(p.a)(n,2),i=r[0],s=r[1],l=c.a.useState("last"),o=Object(p.a)(l,2),d=o[0],u=o[1],h=c.a.useState(0),j=Object(p.a)(h,2),b=j[0],g=j[1],m=c.a.useState(25),y=Object(p.a)(m,2),w=y[0],A=y[1],I=e.rows,B=w-Math.min(w,I.length-b*w);return Object(a.jsx)("div",{className:t.root,children:Object(a.jsxs)(C.a,{className:t.paper,children:[Object(a.jsx)(x.a,{children:Object(a.jsxs)(f.a,{className:t.table,"aria-labelledby":"tableTitle",size:"small","aria-label":"enhanced table",children:[Object(a.jsx)(L,{classes:t,order:i,orderBy:d,onRequestSort:function(e,t){s(d===t&&"asc"===i?"desc":"asc"),u(t)},rowCount:I.length}),Object(a.jsxs)(O.a,{children:[D(I,N(i,d)).slice(b*w,b*w+w).map((function(e){return Object(a.jsxs)(S.a,{hover:!0,tabIndex:-1,children:[Object(a.jsx)(v.a,{align:"center",children:Object(a.jsx)("img",{src:"".concat(e.photo),alt:"".concat(e.first," ").concat(e.last),width:"50",height:"50"})}),Object(a.jsx)(v.a,{align:"center",children:e.id}),Object(a.jsx)(v.a,{align:"center",children:e.first}),Object(a.jsx)(v.a,{align:"center",children:e.last}),Object(a.jsx)(v.a,{align:"center",children:e.email}),Object(a.jsx)(v.a,{align:"center",children:e.phone}),Object(a.jsx)(v.a,{align:"center",children:e.location})]},e.id)})),B>0&&Object(a.jsx)(S.a,{style:{height:35*B},children:Object(a.jsx)(v.a,{colSpan:6})})]})]})}),Object(a.jsx)(P.a,{rowsPerPageOptions:[25,50,100],component:"div",count:I.length,rowsPerPage:w,page:b,onChangePage:function(e,t){g(t)},onChangeRowsPerPage:function(e){A(parseInt(e.target.value,10)),g(0)}})]})})}var E=n(152);n(94);function F(e){return Object(a.jsx)("div",{className:"search-bar",children:Object(a.jsx)(E.a,{onSubmit:function(e){e.preventDefault()},onChange:e.handleInputChange,id:"outlined-search",label:"Search Last Name",type:"search",variant:"outlined"})})}var M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employeeArray:[],currentSearchArray:[]},e.handleInputChange=function(t){t.preventDefault();var n=t.target.value.toLowerCase();e.setState({currentSearchArray:e.state.employeeArray.filter((function(e){return e.last.toLowerCase().includes(n)}))})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getEmployeeData().then((function(t){var n=t.data.results.map((function(e){return{id:e.id.value,first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,location:"".concat(e.location.city,", ").concat(e.location.state),photo:e.picture.thumbnail}}));e.setState({employeeArray:n,currentSearchArray:n})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(F,{handleInputChange:this.handleInputChange}),Object(a.jsx)(B,{rows:this.state.currentSearchArray})]})}}]),n}(r.Component);n(95);var R=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("h1",{children:"mPloid Employee Directory App"})})};var T=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(R,{})}),Object(a.jsx)(M,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),q()}},[[96,1,2]]]);
//# sourceMappingURL=main.7fe0a0ba.chunk.js.map