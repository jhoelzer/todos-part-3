(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{userId:1,id:1,title:"Asinus asinorum sinum currus",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},15:function(e,t,a){},18:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),c=a.n(l),r=a(29),s=(a(15),a(5)),i=a(6),d=a(8),m=a(7),u=a(9),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.completed,n=e.toggleCompleted,l=e.deleteOne;return o.a.createElement("li",{className:a?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",onClick:n,defaultChecked:a}),o.a.createElement("label",null,t),o.a.createElement("button",{className:"destroy",onClick:l})))}}]),t}(n.Component),f=a(10),h=a(30),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:f},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Todos"),o.a.createElement("input",{className:"new-todo",placeholder:"What needs doing?",onKeyDown:this.props.addTodo,autoFocus:!0})),o.a.createElement("section",{className:"main"},o.a.createElement("ul",{className:"todo-list"},t.map(function(t){return o.a.createElement(p,{key:t.id,title:t.title,completed:t.completed,toggleCompleted:e.props.toggleCompleted(t.id),deleteOne:e.props.deleteOne(t.id)})}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,this.props.completed)," items(s) left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(h.a,{exact:!0,to:"/",activeClassName:"selected"},"All")),o.a.createElement("li",null,o.a.createElement(h.a,{exact:!0,to:"/active",activeClassName:"selected"},"Active")),o.a.createElement("li",null,o.a.createElement(h.a,{exact:!0,to:"/completed",activeClassName:"selected"},"Completed"))),o.a.createElement("button",{className:"clear-completed",onClick:this.deleteAll},"Clear Completed")))}}]),t}(n.Component),v=a(31),g=a(28),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:f},a.toggleCompleted=function(e){return function(t){var n=a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t});a.setState({todos:n})}},a.addTodo=function(e){var t=a.state.todos,n=Math.floor(5e8*Math.random());if(13===e.keyCode){var o=t.slice(0),l={userId:1,id:n,title:e.target.value,completed:!1};o.push(l),a.setState({todos:o}),e.target.value=""}},a.deleteOne=function(e){return function(t){var n=a.state.todos.filter(function(t){return t.id!==e});a.setState({todos:n})}},a.deleteAll=function(e){var t=a.state.todos.filter(function(e){return!0!==e.completed});a.setState({todos:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.todos,t={toggleCompleted:this.toggleCompleted,addTodo:this.addTodo,deleteOne:this.deleteOne,deleteAll:this.deleteAll,completed:e.filter(function(e){return!e.completed}).length};return o.a.createElement("section",{className:"todoapp"},o.a.createElement(v.a,null,o.a.createElement(g.a,{path:"/",render:function(a){return o.a.createElement(E,Object.assign({},a,t,{todos:e}))}}),o.a.createElement(g.a,{path:"/active",render:function(a){return o.a.createElement(E,Object.assign({},a,t,{todos:e.filter(function(e){return!e.completed})}))}}),o.a.createElement(g.a,{path:"/completed",render:function(a){return o.a.createElement(E,Object.assign({},a,t,{todos:e.filter(function(e){return e.completed})}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(function(){return o.a.createElement(r.a,{basename:"/todos-part-3"},o.a.createElement(b,null))},null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.e2c8a0c9.chunk.js.map