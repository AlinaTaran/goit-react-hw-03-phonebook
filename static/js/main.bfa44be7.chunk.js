(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(8),s=n.n(o),i=n(11),u=n(3),l=n(4),b=n(6),j=n(5),h=n(19),m=n(9),d=n(2),f=n.n(d),O=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.setState({name:" ",number:" "})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:f.a.input,name:"name",value:this.state.name,type:"text",onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:f.a.input,name:"number",type:"tel",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{className:f.a.button,type:"submit",children:[" ","Add to contact"]})]})}}]),n}(c.Component),p=n(10),v=n.n(p),x=function(t){var e=t.contacts,n=t.deleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.id,r=t.number;return Object(a.jsxs)("li",{children:[e,": ",r,Object(a.jsx)("button",{className:v.a.button,onClick:function(){return n(c)},children:"Delete"})]},c)}))})},C=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contact by name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:n})]})},g=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase()))return alert("".concat(e," is already in contacts!"));var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:t,onChange:this.changeFilter}),Object(a.jsx)(x,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={text:"ContactForm_text__2dqG_"}}},[[17,1,2]]]);
//# sourceMappingURL=main.bfa44be7.chunk.js.map