(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[65],{1137:function(e,a,t){"use strict";t.r(a),t.d(a,"ClipboardPage",(function(){return p}));var r=t(6),c=t(7),l=t(8),s=t(9),i=t(10),m=t(0),n=t.n(m),d=t(627),o=t.n(d),p=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).state={copied:Boolean,clipboardText1:"Hello!",clipboardText2:"Hello!",clipboardText3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",clipboardText4:"dolor sit amet"},t}return Object(i.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"page-header"},n.a.createElement("h3",{className:"page-title"},"Clipboard"),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Clipboard")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 grid-margin"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"clipboard on text input"),n.a.createElement("p",{className:"card-description"},"Copy from text input"),n.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.clipboardText1,onChange:function(a){return e.setState({clipboardText1:a.target.value})}}),n.a.createElement("div",{className:"mt-3"},n.a.createElement(o.a,{className:"btn btn-inverse-primary","data-clipboard-text":this.state.clipboardText1}," Copy ")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Clipboard on textarea"),n.a.createElement("p",{className:"card-description"},"Cut/copy from textarea"),n.a.createElement("textarea",{className:"form-control",rows:"3",defaultValue:this.state.clipboardText2,onChange:function(a){return e.setState({clipboardText2:a.target.value})}}),n.a.createElement("div",{className:"mt-3"},n.a.createElement(o.a,{className:"btn btn-inverse-primary","data-clipboard-text":this.state.clipboardText2}," Copy "))))))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Clipboard on paragraph"),n.a.createElement("p",{className:"card-description"},"Copy paragraph"),n.a.createElement("div",{className:"card card-inverse-primary"},n.a.createElement("div",{className:"card-body"},this.state.clipboardText3)),n.a.createElement("div",{className:"mt-3"},n.a.createElement(o.a,{className:"btn btn-inverse-primary","data-clipboard-text":this.state.clipboardText3}," Copy ")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Copy portion from paragraph"),n.a.createElement("p",{className:"card-description"},"Copy the highlighted text from this paragraph"),n.a.createElement("div",{className:"card card-inverse-primary"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"mb-0"},"Lorem ipsum ",n.a.createElement("span",{className:"bg-info text-white"},this.state.clipboardText4),", consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),n.a.createElement("div",{className:"mt-3"},n.a.createElement(o.a,{className:"btn btn-inverse-primary","data-clipboard-text":this.state.clipboardText4}," Copy ")))))))))}}]),a}(m.Component);a.default=p}}]);
//# sourceMappingURL=65.1955c16b.chunk.js.map