(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[42],{105:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},1167:function(e,a,t){"use strict";t.r(a),t.d(a,"Login",(function(){return u}));var r=t(6),l=t(7),n=t(8),s=t(9),c=t(10),i=t(0),o=t.n(i),m=t(2),d=t(196),u=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center auth px-0"},o.a.createElement("div",{className:"row w-100 mx-0"},o.a.createElement("div",{className:"col-lg-4 mx-auto"},o.a.createElement("div",{className:"card text-left py-5 px-4 px-sm-5"},o.a.createElement("div",{className:"brand-logo"},o.a.createElement("img",{src:t(78),alt:"logo"})),o.a.createElement("h4",null,"Hello! let's get started"),o.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),o.a.createElement(d.a,{className:"pt-3"},o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"email",placeholder:"Username",size:"lg",className:"h-auto"})),o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto"})),o.a.createElement("div",{className:"mt-3"},o.a.createElement(m.b,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",to:"/dashboard"},"SIGN IN")),o.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-muted"},"Forgot password?")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},o.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),o.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",o.a.createElement(m.b,{to:"/user-pages/register",className:"text-primary"},"Create"))))))))}}]),a}(i.Component);a.default=u},118:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(12),s=t.n(n),c=t(0),i=t.n(c),o=t(5),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,c=e.className,o=e.type,m=Object(l.a)(e,["as","className","type"]);return i.a.createElement(n,Object(r.a)({},m,{ref:a,className:s()(c,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"},a.a=u},124:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,n.default)(r)};var r,l=t(125),n=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},125:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,n,s){var c=l||"<<anonymous>>",i=s||r;if(null==t[r])return a?new Error("Required "+n+" `"+i+"` was not specified in `"+c+"`."):null;for(var o=arguments.length,m=Array(o>6?o-6:0),d=6;d<o;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,r,c,n,i].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},130:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(12),s=t.n(n),c=t(0),i=t.n(c),o=t(15),m=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,d=void 0===c?"div":c,u=Object(l.a)(e,["bsPrefix","className","as"]),f=Object(o.b)(t,"col"),b=[],p=[];return m.forEach((function(e){var a,t,r,l=u[e];if(delete u[e],null!=l&&"object"===typeof l){var n=l.span;a=void 0===n||n,t=l.offset,r=l.order}else a=l;var s="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+f+s:""+f+s+"-"+a),null!=r&&p.push("order"+s+"-"+r),null!=t&&p.push("offset"+s+"-"+t)})),b.length||b.push(f),i.a.createElement(d,Object(r.a)({},u,{ref:a,className:s.a.apply(void 0,[n].concat(b,p))}))}));d.displayName="Col",a.a=d},133:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(12),s=t.n(n),c=t(0),i=t.n(c),o=(t(47),t(118)),m=t(105),d=t(15),u=i.a.forwardRef((function(e,a){var t,n,o=e.bsPrefix,u=e.type,f=e.size,b=e.id,p=e.className,v=e.isValid,N=e.isInvalid,h=e.plaintext,x=e.readOnly,y=e.as,O=void 0===y?"input":y,j=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(c.useContext)(m.a).controlId;if(o=Object(d.b)(o,"form-control"),h)(n={})[o+"-plaintext"]=!0,t=n;else if("file"===u){var w;(w={})[o+"-file"]=!0,t=w}else{var P;(P={})[o]=!0,P[o+"-"+f]=f,t=P}return i.a.createElement(O,Object(r.a)({},j,{type:u,ref:a,readOnly:x,id:b||E,className:s()(p,t,v&&"is-valid",N&&"is-invalid")}))}));u.displayName="FormControl",u.Feedback=o.a,a.a=u},196:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(12),s=t.n(n),c=t(0),i=t.n(c),o=(t(124),t(118)),m=t(105),d=t(15),u=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,f=e.isValid,b=e.isInvalid,p=e.isStatic,v=e.as,N=void 0===v?"input":v,h=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(c.useContext)(m.a),y=x.controlId;return n=x.custom?Object(d.b)(o,"custom-control-input"):Object(d.b)(n,"form-check-input"),i.a.createElement(N,Object(r.a)({},h,{ref:a,id:t||y,className:s()(u,n,f&&"is-valid",b&&"is-invalid",p&&"position-static")}))}));u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var f=u,b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,u=e.htmlFor,f=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(c.useContext)(m.a),p=b.controlId;return t=b.custom?Object(d.b)(n,"custom-control-label"):Object(d.b)(t,"form-check-label"),i.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:u||p,className:s()(o,t)}))}));b.displayName="FormCheckLabel";var p=b,v=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,b=e.inline,v=e.disabled,N=e.isValid,h=e.isInvalid,x=e.feedback,y=e.className,O=e.style,j=e.title,E=e.type,w=e.label,P=e.children,g=e.custom,k=e.as,C=void 0===k?"input":k,I=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===E||g;n=F?Object(d.b)(u,"custom-control"):Object(d.b)(n,"form-check");var R=Object(c.useContext)(m.a).controlId,V=Object(c.useMemo)((function(){return{controlId:t||R,custom:F}}),[R,F,t]),L=null!=w&&!1!==w&&!P,S=i.a.createElement(f,Object(r.a)({},I,{type:"switch"===E?"checkbox":E,ref:a,isValid:N,isInvalid:h,isStatic:!L,disabled:v,as:C}));return i.a.createElement(m.a.Provider,{value:V},i.a.createElement("div",{style:O,className:s()(y,n,F&&"custom-"+E,b&&n+"-inline")},P||i.a.createElement(i.a.Fragment,null,S,L&&i.a.createElement(p,{title:j},w),(N||h)&&i.a.createElement(o.a,{type:N?"valid":"invalid"},x))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=p;var N=v,h=t(133),x=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,u=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(d.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return i.a.createElement(m.a.Provider,{value:v},i.a.createElement(b,Object(r.a)({},p,{ref:a,className:s()(n,t)}),o))}));x.displayName="FormGroup";var y=x,O=(t(47),t(130)),j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,o=e.srOnly,u=e.className,f=e.htmlFor,b=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(c.useContext)(m.a).controlId;t=Object(d.b)(t,"form-label");var v=s()(u,t,o&&"sr-only",n&&"col-form-label");return f=f||p,n?i.a.createElement(O.a,Object(r.a)({as:"label",className:v,htmlFor:f},b)):i.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:f},b))}));j.displayName="FormLabel",j.defaultProps={column:!1,srOnly:!1};var E=j,w=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,o=void 0===c?"small":c,m=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.b)(t,"form-text"),i.a.createElement(o,Object(r.a)({},u,{ref:a,className:s()(n,t,m&&"text-muted")}))}));w.displayName="FormText";var P=w,g=i.a.forwardRef((function(e,a){return i.a.createElement(N,Object(r.a)({},e,{ref:a,type:"switch"}))}));g.displayName="Switch",g.Input=N.Input,g.Label=N.Label;var k=g,C=t(39),I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,c=e.className,o=e.validated,m=e.as,u=void 0===m?"form":m,f=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.b)(t,"form"),i.a.createElement(u,Object(r.a)({},f,{ref:a,className:s()(c,o&&"was-validated",n&&t+"-inline")}))}));I.displayName="Form",I.defaultProps={inline:!1},I.Row=Object(C.a)("form-row"),I.Group=y,I.Control=h.a,I.Check=N,I.Switch=k,I.Label=E,I.Text=P;a.a=I}}]);
//# sourceMappingURL=42.1afd6fac.chunk.js.map