(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"banner":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png","footer":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png","banner1":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-left.png","banner2":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-center.png","banner3":"https://www.\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49.com/img/hero_banner/banner-right.png","logo6":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png","logo5":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png","logo4":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png","logo3":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png","logo2":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png","logo1":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png","Call1":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png","Call2":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png","Call3":"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png","ktb":"https://yt3.ggpht.com/-8r9PiJCUzcE/AAAAAAAAAAI/AAAAAAAAAAA/xVrMJhDUpgU/s68-c-k-no-mo-rj-c0xffffff/photo.jpg"}')},,,,,,,,,,,,,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=Object(c.a)(),o=t(18),m=t.n(o),s=t(1),i=t(2),u=t(4),b=t(3),g=t(5),v=(t(26),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 img-1"}),l.a.createElement("div",{className:"col-4 img-2"},l.a.createElement("div",{className:"img-4"})),l.a.createElement("div",{className:"col-4 img-3"}))}}]),a}(n.Component)),h=(t(27),t(10),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.detail,t=e.condition;return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("h2",{className:"text-danger"},"\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e42\u0e20\u0e04",l.a.createElement("br",null),'\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 "\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49"')),l.a.createElement("div",null,l.a.createElement("span",{className:"",dangerouslySetInnerHTML:{__html:a}})),l.a.createElement("div",null,l.a.createElement("div",{className:"col-12 mt-4 font-weight-bold"},"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23"),l.a.createElement("div",{className:"mt-2"},l.a.createElement("span",{className:"",dangerouslySetInnerHTML:{__html:t}}))))}}]),a}(n.Component)),d=t(11),E=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"get",value:function(e,a){return fetch("".concat(e).concat(a),{method:"GET"}).then((function(e){return 200===e.status?e.json():e.status}))}}]),e}(),p=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getData",value:function(){return E.get("https://panjs.com/ywc.json","")}}]),e}(),f=function(){function e(a){Object(s.a)(this,e),this.navbarItems=void 0,this.navbarItems=e.format(a)}return Object(i.a)(e,null,[{key:"apply",value:function(a){return new e(a)}},{key:"format",value:function(e){return e&&e.navbarItems?e.navbarItems.map((function(e){return{label:e.label,href:e.href}})):[]}}]),e}(),N=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getNavbar",value:function(){return p.getData().then((function(e){return f.apply(e)}))}}]),e}(),w=(t(28),function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(u.a)(this,Object(b.a)(a).call(this,e))).state={navbarItems:[]};var n=N.getNavbar();return null!==n&&n.then((function(e){t.setState({navbarItems:e.navbarItems})})),t.renderNav=t.renderNav.bind(Object(d.a)(t)),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("ul",{className:"fix-box"},this.renderNav(this.state.navbarItems)))}},{key:"renderNav",value:function(e){return e.map((function(e,a){return l.a.createElement("li",{key:a,className:"fix-li"},l.a.createElement("a",{href:e.href,className:"fix-li-2"},e.label))}))}}]),a}(n.Component)),j=(t(29),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.duration;return l.a.createElement("div",{className:"container-fluid box-register"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"text"},"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48")),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"time"},e)),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card-announce"},l.a.createElement("p",{className:"announce "},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 \u0e40\u0e1f\u0e2a 2",l.a.createElement("br",null),"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 24 \u0e15.\u0e04.62 \u0e27\u0e31\u0e19\u0e25\u0e30 2 \u0e23\u0e2d\u0e1a \u0e40\u0e27\u0e25\u0e32 6.00 \u0e41\u0e25\u0e30 18.00 \u0e19.",l.a.createElement("br",null),"(\u0e08\u0e33\u0e01\u0e31\u0e14\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e2d\u0e1a\u0e25\u0e30 5 \u0e41\u0e2a\u0e19\u0e04\u0e19 \u0e23\u0e27\u0e21 1 \u0e25\u0e49\u0e32\u0e19\u0e04\u0e19\u0e15\u0e48\u0e2d\u0e27\u0e31\u0e19)"))))}}]),a}(n.Component)),O=(t(30),t(7)),x=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"mt-5"},l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("div",{className:"nav mx-auto"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("img",{src:O.footer,alt:"footer"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",null,l.a.createElement("span",{className:"text-danger"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19")),l.a.createElement("div",null,l.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19",l.a.createElement("br",null),'"\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07" \u0e41\u0e25\u0e30 "\u0e16\u0e38\u0e07\u0e40\u0e07\u0e34\u0e19"',l.a.createElement("br",null),"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49 Call Center by Krungthai",l.a.createElement("br",null),"\u0e42\u0e17\u0e23. 0 2111 1144"))),l.a.createElement("div",{className:"col"},l.a.createElement("div",null,l.a.createElement("span",{className:"text-danger"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e32\u0e23")),l.a.createElement("div",null,l.a.createElement("p",null,"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e41\u0e25\u0e30\u0e27\u0e34\u0e18\u0e35\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2f",l.a.createElement("br",null),"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e42\u0e17\u0e23. 0 2270 6400 \u0e01\u0e14 7"))),l.a.createElement("div",{className:"col"},l.a.createElement("div",null,l.a.createElement("span",{className:"text-danger"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49")),l.a.createElement("div",null,l.a.createElement("p",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e17\u0e17\u0e17.",l.a.createElement("br",null),"\u0e42\u0e17\u0e23 1672"))))),l.a.createElement("nav",{className:"navbar foot-nav-bg"},l.a.createElement("ul",{className:"nav col-sm-12"},l.a.createElement("li",{className:"col-sm-3 col-md-3 col-lg-3 nav-item"},l.a.createElement("span",{className:"navbar-text text-white"},"Copyright \xa9 2003-2019")),l.a.createElement("li",{className:"col-sm-3 col-md-3 col-lg-3 nav-item"},l.a.createElement("span",{className:"navbar-text text-white"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23")),l.a.createElement("li",{className:"col-sm-3 col-md-3 col-lg-3 nav-item"},l.a.createElement("span",{className:"navbar-text text-white"},"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14")),l.a.createElement("li",{className:"col-sm-3 col-md-3 col-lg-3 nav-item"},l.a.createElement("span",{className:"navbar-text text-white"},"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23")))))}}]),a}(n.Component),y=(t(31),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-lg-4 col-12 text-center ig"},l.a.createElement("img",{src:O.Call3,alt:"Call3"})),l.a.createElement("div",{className:"col-lg-4 col-12 text-center ig"},l.a.createElement("img",{src:O.Call2,alt:"Call2"})),l.a.createElement("div",{className:"col-lg-4 col-12 text-center ig"},l.a.createElement("img",{src:O.Call1,alt:"Call1"}))),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo1,alt:"mof"})),l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo2,alt:"fpo"})),l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo3,alt:"cgd"})),l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo4,alt:"krungthai"})),l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo5,alt:"mots"})),l.a.createElement("div",{className:"col-lg-2 col-sm-4 col-4 text-center"},l.a.createElement("img",{className:"logo-image",src:O.logo6,alt:"ttt"}))))}}]),a}(n.Component)),A=(t(32),function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(u.a)(this,Object(b.a)(a).call(this,e))).state={num:1,pageInfo:{navbarItems:[],duration:"",detail:"",condition:""},Navbar:[]};var n=N.getNavbar();return null!==n&&n.then((function(e){t.setState({Navbar:e.navbarItems})})),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.Navbar),l.a.createElement("div",{className:"font"},l.a.createElement(w,null),l.a.createElement(v,null),l.a.createElement(j,{duration:this.state.pageInfo.duration}),l.a.createElement(h,{detail:this.state.pageInfo.detail,condition:this.state.pageInfo.condition}),l.a.createElement(y,null),l.a.createElement(x,null))}},{key:"componentDidMount",value:function(){var e=this;p.getData().then((function(a){e.setState({pageInfo:a})}))}}]),a}(n.Component)),k=t(41);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);m.a.render(l.a.createElement(k.b,{history:r},l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/",component:A}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[21,1,2]]]);
//# sourceMappingURL=main.d6808274.chunk.js.map