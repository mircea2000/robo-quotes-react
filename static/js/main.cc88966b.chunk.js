(this.webpackJsonproboQuotes=this.webpackJsonproboQuotes||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),s=a.n(o),l=(a(18),a(2)),c=a(3),i=a(5),u=a(4),m=a(6),h=(a(19),a(20),a(21),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.handleClick=function(){return console.log("clicked")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,this.props.monster.author),r.a.createElement("div",{className:"imgHolder"},r.a.createElement("img",{alt:"Quote",src:"https://robohash.org/".concat(this.props.monster.id,"?set=set3")})),r.a.createElement("p",null,this.props.monster.en.substring(0,60)),r.a.createElement("button",{onClick:this.showModal,className:"cardBtn"},"READ MORE"),r.a.createElement(d,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("h2",null,this.props.monster.author),r.a.createElement("p",null,this.props.monster.en)),r.a.createElement("span",{className:null!=this.props.monster.rating?"":"notRated"},null!=this.props.monster.rating?this.props.monster.rating:"Not Rated"))}}]),t}(r.a.Component)),d=function(e){var t=e.handleClose,a=e.show,n=e.children,o=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:o},r.a.createElement("section",{className:"modal-main"},n,r.a.createElement("button",{className:"closeBtn",onClick:t},"Close")))},p=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"totalQuotes"},0!==e.total?r.a.createElement("span",null,e.total):"No"," Quotes Found ",""!==e.search?"For: ":"Total",r.a.createElement("span",null,""!==e.search?e.search:"")),r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})}))))},E=(a(22),a(8)),f=a(9),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"Made with ",r.a.createElement("span",null,r.a.createElement(E.a,{icon:f.b}))," by ",r.a.createElement("em",null,"Mirch~Pirch")," in Phoenix, AZ using ",r.a.createElement("em",null,"React.Js"))}}]),t}(r.a.Component);a(28);a(7).b.add(f.a);var v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"gotoTop",ref:this.myRef},r.a.createElement(E.a,{icon:"angle-up"})))}}]),t}(r.a.Component),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://programming-quotes-api.herokuapp.com/quotes").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.monsters,n=t.searchField,o=a.filter((function(e){return e.author.toLowerCase().includes(n.toLowerCase())||e.en.toLowerCase().includes(n.toLowerCase())}));return this.state.monsters.length>0?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},"Robo ",r.a.createElement("span",null,"QUOTES")),r.a.createElement("input",{type:"search",placeholder:"Search For Quote",onChange:function(t){return e.setState({searchField:t.target.value})}}))),r.a.createElement(p,{monsters:o,total:o.length,search:n}),r.a.createElement(v,null),r.a.createElement(b,null)):r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:"https://samherbert.net/svg-loaders/svg-loaders/audio.svg",alt:""}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.cc88966b.chunk.js.map