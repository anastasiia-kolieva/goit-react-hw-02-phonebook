(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter_title:"Filter_filter_title__3R8-N",filter_input:"Filter_filter_input__BObgt"}},12:function(t,e,n){t.exports={li:"ContactList_li__1pZYU",button:"ContactList_button__1JUa4"}},2:function(t,e,n){t.exports={form:"ContactForm_form__5-8ET",label:"ContactForm_label__3oSmt",submit_button:"ContactForm_submit_button__1lGAP"}},21:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(13),i=n.n(o),l=(n(21),n(9)),s=n(15),u=n(5),b=n(6),h=n(8),m=n(7),j=n(4),d=n(2),f=n.n(d),p=n(14),O=n.n(p),C=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handelSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.validateForm()&&(t.props.onSubmitData({id:O.a.generate(),name:a,number:c}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,c=t.props.onCheckUnique;return n&&a?c(n):(alert("Some field is empty!"),!1)},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handelSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name"," ",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number"," ",Object(a.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:f.a.submit_button,children:"Add contact"})]})}}]),n}(c.Component),_=n(11),v=n.n(_),x=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:v.a.filter_title,children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter contact name",className:v.a.filter_input,value:e,onChange:n})]})},g=n(12),y=n.n(g),F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsxs)("li",{className:y.a.li,children:[t.name,": ",t.number,Object(a.jsx)("button",{className:y.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},S={width:"500px",margin:"0 auto",paddingTop:"30px"},k={textAlign:"center",color:"#6B5EAC"},N=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handelDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.contactFormSubmithandler=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.handelCheckUniqueContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist!"),!n},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(a.jsxs)("div",{style:Object(l.a)({},S),children:[Object(a.jsx)("h1",{style:Object(l.a)({},k),children:"Phonebook"}),Object(a.jsx)(C,{onSubmitData:this.contactFormSubmithandler,onCheckUnique:this.handelCheckUniqueContact}),Object(a.jsx)("h2",{style:Object(l.a)({},k),children:"Contacts"}),Object(a.jsx)(x,{value:t,onChange:this.changeFilter}),Object(a.jsx)(F,{contacts:e,onDeleteContact:this.handelDeleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.56f1e4f0.chunk.js.map