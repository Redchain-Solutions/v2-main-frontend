(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[53],{1192:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(7),o=a(8),c=a(9),l=a(10),i=a(0),s=a.n(i),d=a(3),m=a(4),u=a(11),p=a(60),f=a(27),h=a.n(f),b=(a(47),a(12)),v=a.n(b),E=a(58),O=a(5),w=a.n(O),y=a(38),N=a(28),g=a(65),j=a(66),P=a(259),C=s.a.forwardRef((function(e,t){var a=e.flip,r=e.placement,n=e.containerPadding,o=e.popperConfig,c=void 0===o?{}:o,l=e.transition,u=Object(y.a)(),p=u[0],f=u[1],b=Object(y.a)(),v=b[0],E=b[1],O=Object(N.a)(f,t),w=Object(P.a)(e.container),C=Object(P.a)(e.target),T=Object(i.useState)(!e.show),x=T[0],k=T[1],S=c.modifiers,_=void 0===S?{}:S,M=Object(g.a)(C,p,Object(d.a)({},c,{placement:r||"bottom",enableEvents:e.show,modifiers:Object(d.a)({},_,{preventOverflow:Object(d.a)({padding:n||5},_.preventOverflow),arrow:Object(d.a)({},_.arrow,{enabled:!!v,element:v}),flip:Object(d.a)({enabled:!!a},_.preventOverflow)})})),B=M.styles,A=M.arrowStyles,H=Object(m.a)(M,["styles","arrowStyles"]);e.show?x&&k(!1):e.transition||x||k(!0);var R=e.show||l&&!x;if(Object(j.a)(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!R)return null;var D=e.children(Object(d.a)({},H,{show:e.show,props:{style:B,ref:O},arrowProps:{style:A,ref:E}}));if(l){var U=e.onExit,q=e.onExiting,F=e.onEnter,J=e.onEntering,L=e.onEntered;D=s.a.createElement(l,{in:e.show,appear:!0,onExit:U,onExiting:q,onExited:function(){k(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:F,onEntering:J,onEntered:L},D)}return w?h.a.createPortal(D,w):null}));C.displayName="Overlay",C.propTypes={show:w.a.bool,placement:w.a.oneOf(E.default.placements),target:w.a.any,container:w.a.any,flip:w.a.bool,children:w.a.func.isRequired,containerPadding:w.a.number,popperConfig:w.a.object,rootClose:w.a.bool,rootCloseEvent:w.a.oneOf(["click","mousedown"]),rootCloseDisabled:w.a.bool,onHide:function(e){var t=w.a.func;e.rootClose&&(t=t.isRequired);for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];return t.apply(void 0,[e].concat(r))},transition:w.a.elementType,onEnter:w.a.func,onEntering:w.a.func,onEntered:w.a.func,onExit:w.a.func,onExiting:w.a.func,onExited:w.a.func},C.defaultProps={containerPadding:5};var T=C,x=a(142),k={transition:x.a,rootClose:!1,show:!1,placement:"top"};function S(e){var t=e.children,a=e.transition,r=Object(m.a)(e,["children","transition"]);return a=!0===a?x.a:a||null,s.a.createElement(T,Object(d.a)({},r,{transition:a}),(function(e){var r=e.props,n=e.arrowProps,o=e.show,c=Object(m.a)(e,["props","arrowProps","show"]);return function(e,t){var a=e.ref,r=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(f.findDOMNode)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(f.findDOMNode)(e))})}(r,n),"function"===typeof t?t(Object(d.a)({},c,{},r,{show:o,arrowProps:n})):s.a.cloneElement(t,Object(d.a)({},c,{},r,{arrowProps:n,className:v()(t.props.className,!a&&o&&"show"),style:Object(d.a)({},t.props.style,{},r.style)}))}))}S.defaultProps=k;var _=S,M=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){return this.props.children},t}(s.a.Component),B=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}},A=function(e){function t(t,a){var r;return(r=e.call(this,t,a)||this).getTarget=function(){return h.a.findDOMNode(r.trigger.current)},r.handleShow=function(){clearTimeout(r._timeout),r._hoverState="show";var e=B(r.props.delay);e.show?r._timeout=setTimeout((function(){"show"===r._hoverState&&r.show()}),e.show):r.show()},r.handleHide=function(){clearTimeout(r._timeout),r._hoverState="hide";var e=B(r.props.delay);e.hide?r._timeout=setTimeout((function(){"hide"===r._hoverState&&r.hide()}),e.hide):r.hide()},r.handleFocus=function(e){var t=r.getChildProps().onFocus;r.handleShow(e),t&&t(e)},r.handleBlur=function(e){var t=r.getChildProps().onBlur;r.handleHide(e),t&&t(e)},r.handleClick=function(e){var t=r.getChildProps().onClick;r.state.show?r.hide():r.show(),t&&t(e)},r.handleMouseOver=function(e){r.handleMouseOverOut(r.handleShow,e,"fromElement")},r.handleMouseOut=function(e){return r.handleMouseOverOut(r.handleHide,e,"toElement")},r.trigger=s.a.createRef(),r.state={show:!!t.defaultShow},r.ariaModifier={enabled:!0,order:900,fn:function(e){var t=e.instance.popper,a=r.getTarget();if(!r.state.show||!a)return e;var n=t.getAttribute("role")||"";return t.id&&"tooltip"===n.toLowerCase()&&a.setAttribute("aria-describedby",t.id),e}},r}Object(u.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){clearTimeout(this._timeout)},a.getChildProps=function(){return s.a.Children.only(this.props.children).props},a.handleMouseOverOut=function(e,t,a){var r=t.currentTarget,n=t.relatedTarget||t.nativeEvent[a];n&&n===r||Object(p.a)(r,n)||e(t)},a.hide=function(){this.setState({show:!1})},a.show=function(){this.setState({show:!0})},a.render=function(){var e=this.props,t=e.trigger,a=e.overlay,r=e.children,n=e.popperConfig,o=void 0===n?{}:n,c=Object(m.a)(e,["trigger","overlay","children","popperConfig"]);delete c.delay,delete c.defaultShow;var l=s.a.Children.only(r),u={},p=null==t?[]:[].concat(t);return-1!==p.indexOf("click")&&(u.onClick=this.handleClick),-1!==p.indexOf("focus")&&(u.onFocus=this.handleShow,u.onBlur=this.handleHide),-1!==p.indexOf("hover")&&(u.onMouseOver=this.handleMouseOver,u.onMouseOut=this.handleMouseOut),s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{ref:this.trigger},Object(i.cloneElement)(l,u)),s.a.createElement(_,Object(d.a)({},c,{popperConfig:Object(d.a)({},o,{modifiers:Object(d.a)({},o.modifiers,{ariaModifier:this.ariaModifier})}),show:this.state.show,onHide:this.handleHide,target:this.getTarget}),a))},t}(s.a.Component);A.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};var H=A,R=(a(79),a(15)),D=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,n=e.className,o=e.style,c=e.children,l=e.arrowProps,i=(e.scheduleUpdate,e.outOfBoundaries,Object(m.a)(e,["bsPrefix","placement","className","style","children","arrowProps","scheduleUpdate","outOfBoundaries"]));return a=Object(R.b)(a,"tooltip"),s.a.createElement("div",Object(d.a)({ref:t,style:o,role:"tooltip","x-placement":r,className:v()(n,a,"bs-tooltip-"+r)},i),s.a.createElement("div",Object(d.a)({className:"arrow"},l)),s.a.createElement("div",{className:a+"-inner"},c))}));D.defaultProps={placement:"right"},D.displayName="Tooltip";var U=D,q=a(72),F=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=Object(m.a)(e,["bsPrefix","className"]),o=Object(R.b)(a,"btn-toolbar");return s.a.createElement("div",Object(d.a)({},n,{ref:t,className:v()(r,o)}))}));F.displayName="ButtonToolbar",F.defaultProps={role:"toolbar"};var J=F,L=s.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,o=e.className,c=e.children,l=Object(m.a)(e,["as","bsPrefix","className","children"]);return n=Object(R.b)(n,"popover-header"),s.a.createElement(r,Object(d.a)({ref:t},l,{className:v()(n,o)}),c)})),I=s.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,o=e.className,c=e.children,l=Object(m.a)(e,["as","bsPrefix","className","children"]);return n=Object(R.b)(n,"popover-body"),s.a.createElement(r,Object(d.a)({ref:t},l,{className:v()(o,n)}),c)})),W=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,n=e.className,o=e.style,c=e.children,l=e.content,i=e.arrowProps,u=(e.scheduleUpdate,e.outOfBoundaries,Object(m.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","scheduleUpdate","outOfBoundaries"])),p=Object(R.b)(a,"popover");return s.a.createElement("div",Object(d.a)({ref:t,role:"tooltip",style:o,"x-placement":r,className:v()(n,p,"bs-popover-"+r)},u),s.a.createElement("div",Object(d.a)({className:"arrow"},i)),l?s.a.createElement(I,null,c):c)}));W.defaultProps={placement:"right"},W.Title=L,W.Content=I;var z=W;a.d(t,"Tooltips",(function(){return G}));var G=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"}," Tooltips "),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Tooltips")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Basic tooltip"),s.a.createElement("p",{className:"card-description"},"Basic tooltip demo that appears on hover"),s.a.createElement("p",null,"Hover the below button for interactive demo"),s.a.createElement(H,{overlay:s.a.createElement(U,{id:"tooltip-disabled"},"Basic Tooltip")},s.a.createElement("span",{className:"d-inline-block"},s.a.createElement(q.a,{variant:"primary",style:{pointerEvents:"none"}},"Hover me")))),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Tooltip positions"),s.a.createElement("p",{className:"card-description"},"Add attribute ",s.a.createElement("code",null,"placement={position}")," to the element"),s.a.createElement("div",{className:"tooltip-demo"},s.a.createElement(J,null,["top","right","bottom","left"].map((function(e){return s.a.createElement(H,{key:e,placement:e,overlay:s.a.createElement(U,{id:"tooltip-".concat(e)},"Tooltip on ",s.a.createElement("strong",null,e),".")},s.a.createElement(q.a,{variant:"primary"},"Tooltip on ",e))}))))),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Tooltip Colors"),s.a.createElement("p",{className:"card-description"},"Add attribute ",s.a.createElement("code",null,"className={`tooltip-{color}`}")," to the element"),s.a.createElement("div",{className:"tooltip-demo"},s.a.createElement(J,null,["success","info","warning","primary","danger"].map((function(e){return s.a.createElement(H,{overlay:s.a.createElement(U,{className:"tooltip-".concat(e),id:"tooltip-".concat(e)},"Tooltip on ",s.a.createElement("strong",null,e),".")},s.a.createElement(q.a,{variant:"".concat(e),className:"mr-2 mb-2"},"Tooltip ",e))}))))))),s.a.createElement("div",{className:"col-md-6 stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Basic popover"),s.a.createElement("p",{className:"card-description"},"Basic popover demo that appears on click"),s.a.createElement("p",null,"Click the below button for interactive demo"),s.a.createElement(H,{trigger:"click",placement:"right",overlay:s.a.createElement(z,{id:"popover-basic"},s.a.createElement(z.Title,{as:"h3"},"Popover title"),s.a.createElement(z.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},s.a.createElement(q.a,{variant:"primary"},"Click me"))),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Popover positions"),s.a.createElement("p",{className:"card-description"},"Add attribute ",s.a.createElement("code",null,'placement="{position}"')," to the element"),s.a.createElement("div",{className:"popover-demo"},s.a.createElement(J,null,["top","right","bottom","left"].map((function(e){return s.a.createElement(H,{trigger:"click",key:e,placement:e,overlay:s.a.createElement(z,{id:"popover-positioned-".concat(e)},s.a.createElement(z.Title,{as:"h3"},"Popover ".concat(e)),s.a.createElement(z.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},s.a.createElement(q.a,{variant:"primary"},"Popover on ",e))}))))),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Popover Colors"),s.a.createElement("p",{className:"card-description"},"Add attribute ",s.a.createElement("code",null,'placement="{position}"')," to the element"),s.a.createElement("div",{className:"popover-demo"},s.a.createElement(J,null,["success","info","warning","primary","danger"].map((function(e){return s.a.createElement(H,{trigger:"click",overlay:s.a.createElement(z,{id:"popover-color-".concat(e),className:"popover-".concat(e)},s.a.createElement(z.Title,{as:"h3"},"Popover ".concat(e)),s.a.createElement(z.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},s.a.createElement(q.a,{className:"mr-2 mb-2",variant:"".concat(e)},"Popover on ",e))})))))))))}}]),t}(i.Component);t.default=G},142:function(e,t,a){"use strict";var r,n=a(3),o=a(4),c=a(12),l=a.n(c),i=a(54),s=a(0),d=a.n(s),m=a(29),u=a(55),p=((r={})[m.b]="show",r[m.a]="show",r),f=d.a.forwardRef((function(e,t){var a=e.className,r=e.children,c=Object(o.a)(e,["className","children"]),f=Object(s.useCallback)((function(e){Object(u.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return d.a.createElement(m.e,Object(n.a)({ref:t,addEndListener:i.a},c,{onEnter:f}),(function(e,t){return d.a.cloneElement(r,Object(n.a)({},t,{className:l()("fade",a,r.props.className,p[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f},259:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(35),n=a(0),o=function(e){if("undefined"!==typeof document)return null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&e.current&&(e=e.current),e&&e.nodeType?e:null)};function c(e,t){var a=Object(n.useState)((function(){return o(e)})),r=a[0],c=a[1];if(!r){var l=o(e);l&&c(l)}return Object(n.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(n.useEffect)((function(){var t=o(e);t!==r&&c(t)}),[e,r]),r}}}]);
//# sourceMappingURL=53.6d41cbbf.chunk.js.map