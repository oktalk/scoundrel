(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/shield.38cbb988.svg"},,,,function(e,t,n){e.exports=n.p+"static/media/potion.0e5932ac.svg"},function(e,t,n){e.exports=n.p+"static/media/dragon.1f7e75f4.svg"},function(e,t,n){e.exports=n.p+"static/media/knot.8cc3051c.svg"},function(e,t,n){e.exports=n.p+"static/media/queen.8d18cf80.svg"},function(e,t,n){e.exports=n.p+"static/media/king.c071393d.svg"},function(e,t,n){e.exports=n.p+"static/media/ace.1e3ef202.svg"},,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),o=n.n(r),i=(n(23),n(16)),u=n(1),l=n(2),c=n(4),p=n(3),m=n(5),d=n(9),b=n.n(d),h=(n(24),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).renderCenterPips=function(){var e=[];if([11,12,13,14,21].includes(n.props.number))e=s.a.createElement("h1",{key:n.props.suit+n.props.number},n.face(n.props.number));else for(var t=n.centerPipsStyle(),a=0;a<n.props.number;a++)e.push(s.a.createElement("div",{key:n.props.suit+n.props.number+a,className:"pip "+n.props.suit,style:t[a]}));return e},n.cardLabel=function(){switch(n.props.suit){case"hearts":return"Potion";case"diamonds":return"Shield";default:return"Demon"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"suitColor",value:function(){switch(this.props.suit){case"hearts":case"diamonds":return"red";default:return"black"}}},{key:"centerPipsStyle",value:function(){switch(this.props.number){case 14:return[{left:"50%",top:"50%"}];case 2:return[{left:"50%",top:"20%"},{left:"50%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 3:return[{left:"50%",top:"50%"},{left:"50%",top:"20%"},{left:"50%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 4:return[{left:"33%",top:"20%"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"20%"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 5:return[{left:"50%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"20%"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 6:return[{left:"33%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"50%"},{left:"67%",top:"20%"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 7:return[{left:"33%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"50%"},{left:"67%",top:"20%"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"50%",top:"35%"}];case 8:return[{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 9:return[{left:"50%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];case 10:return[{left:"50%",top:"35%"},{left:"50%",top:"65%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"33%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",transform:"translate(-50%, -50%) rotate(180deg)"},{left:"67%",top:"80%",transform:"translate(-50%, -50%) rotate(180deg)"}];default:return[]}}},{key:"face",value:function(e){switch(e){case 11:return"J";case 12:return"Q";case 13:return"K";case 14:return"A";case 21:return"I";default:return e}}},{key:"render",value:function(){var e={backgroundImage:"url("+this.props.centerPip+")"};return s.a.createElement("div",{className:"card "+this.suitColor(),onClick:this.props.onClick},this.props.hasShieldRank&&s.a.createElement("p",{className:"card-rank"},"rank: ",s.a.createElement("span",{className:"text-black"},this.props.shieldRank)),s.a.createElement("div",{className:"corner top left"},s.a.createElement("h1",null,("clubs"===this.props.suit||"spades"===this.props.suit||"jack"===this.props.suit||"joker"===this.props.suit?"-":"")+this.props.number),s.a.createElement("div",{className:"pip "+this.props.suit},s.a.createElement("p",null))),s.a.createElement("div",{className:"pips center-pip",style:e}),s.a.createElement("div",{className:"card-label"},this.cardLabel()))}}]),t}(a.Component)),f=n(10),g=n.n(f),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).onClick=function(){if(!n.props.potionDrank){var e=n.props.number<11?n.props.number:11,t=n.props.hp+e;t=t>21?21:t,n.props.updatePlayer({hp:t,potionDrank:n.props.potionLimit})}n.props.handleClick({suit:n.props.suit,number:n.props.number})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h,Object.assign({},this.props,{centerPip:g.a,suit:this.props.suit,number:this.props.number,onClick:this.onClick}))}}]),t}(a.Component),v=n(11),E=n.n(v),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).onClick=function(){var e=n.props.hp,t=n.props.shield,a=n.props.shieldRank,s=n.props.xp+n.props.number,r="";0===n.props.shield?e=n.props.hp-n.props.number:n.props.shield<n.props.number&&(e=n.props.hp-Math.abs(n.props.shield-n.props.number)),n.props.shield>0&&0===n.props.shieldRank?a=n.props.breakableShield?n.props.number:0:n.props.shieldRank>=n.props.number?a=n.props.number:(t=0,a=0),e<0&&(r="Game over",t=0,a=0,s=n.props.xp),n.props.updatePlayer({hp:e,shield:t,shieldRank:a,xp:s,gameState:r}),n.props.handleClick({suit:n.props.suit,number:n.props.number})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h,Object.assign({},this.props,{centerPip:E.a,suit:this.props.suit,number:this.props.number,onClick:this.onClick}))}}]),t}(a.Component),j=n(6),C=n.n(j),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).onClick=function(){var e=n.props.number<11?n.props.number:11;n.props.updatePlayer({shield:e,shieldRank:0}),n.props.handleClick({suit:n.props.suit,number:n.props.number})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h,Object.assign({},this.props,{centerPip:C.a,suit:this.props.suit,number:this.props.number,onClick:this.onClick}))}}]),t}(a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(a.Fragment,null,this.props.room.map(function(t){switch(t.suit){case"hearts":return s.a.createElement(k,Object.assign({},t,{key:t.suit+t.number,hp:e.props.hp,potionLimit:e.props.potionLimit,potionDrank:e.props.potionDrank,updatePlayer:e.props.updatePlayer,handleClick:e.props.handleClick}));case"diamonds":return s.a.createElement(w,Object.assign({},t,{key:t.suit+t.number,hp:e.props.hp,potionDrank:e.props.potionDrank,updatePlayer:e.props.updatePlayer,handleClick:e.props.handleClick}));default:return s.a.createElement(y,Object.assign({},t,{xp:e.props.xp,shield:e.props.shield,shieldRank:e.props.shieldRank,key:t.suit+t.number,hp:e.props.hp,breakableShield:e.props.breakableShield,updatePlayer:e.props.updatePlayer,handleClick:e.props.handleClick}))}}))}}]),t}(a.Component),O=(n(25),function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Player-shield"},s.a.createElement(h,{hasShieldRank:this.props.shieldRank>0,shieldRank:this.props.shieldRank,centerPip:C.a,suit:"diamonds",number:this.props.shield}))}}]),t}(a.Component)),P=n(12),S=n.n(P),R=n(13),x=n.n(R),A=n(14),D=n.n(A),H=n(15),L=n.n(H),M=(n(26),{standard:[{suit:"joker",number:21},{suit:"jack",number:21},{suit:"spades",number:2},{suit:"spades",number:3},{suit:"spades",number:4},{suit:"spades",number:5},{suit:"spades",number:6},{suit:"spades",number:7},{suit:"spades",number:8},{suit:"spades",number:9},{suit:"spades",number:10},{suit:"spades",number:11},{suit:"spades",number:12},{suit:"spades",number:13},{suit:"spades",number:14},{suit:"hearts",number:2},{suit:"hearts",number:3},{suit:"hearts",number:4},{suit:"hearts",number:5},{suit:"hearts",number:6},{suit:"hearts",number:7},{suit:"hearts",number:8},{suit:"hearts",number:9},{suit:"hearts",number:10},{suit:"hearts",number:11},{suit:"diamonds",number:2},{suit:"diamonds",number:3},{suit:"diamonds",number:4},{suit:"diamonds",number:5},{suit:"diamonds",number:6},{suit:"diamonds",number:7},{suit:"diamonds",number:8},{suit:"diamonds",number:9},{suit:"diamonds",number:10},{suit:"diamonds",number:11},{suit:"clubs",number:2},{suit:"clubs",number:3},{suit:"clubs",number:4},{suit:"clubs",number:5},{suit:"clubs",number:6},{suit:"clubs",number:7},{suit:"clubs",number:8},{suit:"clubs",number:9},{suit:"clubs",number:10},{suit:"clubs",number:11},{suit:"clubs",number:12},{suit:"clubs",number:13},{suit:"clubs",number:14}],nohearts:[{suit:"joker",number:21},{suit:"jack",number:21},{suit:"spades",number:2},{suit:"spades",number:3},{suit:"spades",number:4},{suit:"spades",number:5},{suit:"spades",number:6},{suit:"spades",number:7},{suit:"spades",number:8},{suit:"spades",number:9},{suit:"spades",number:10},{suit:"spades",number:11},{suit:"spades",number:12},{suit:"spades",number:13},{suit:"spades",number:14},{suit:"diamonds",number:2},{suit:"diamonds",number:3},{suit:"diamonds",number:4},{suit:"diamonds",number:5},{suit:"diamonds",number:6},{suit:"diamonds",number:7},{suit:"diamonds",number:8},{suit:"diamonds",number:9},{suit:"diamonds",number:10},{suit:"diamonds",number:11},{suit:"clubs",number:2},{suit:"clubs",number:3},{suit:"clubs",number:4},{suit:"clubs",number:5},{suit:"clubs",number:6},{suit:"clubs",number:7},{suit:"clubs",number:8},{suit:"clubs",number:9},{suit:"clubs",number:10},{suit:"clubs",number:11},{suit:"clubs",number:12},{suit:"clubs",number:13},{suit:"clubs",number:14}],noshields:[{suit:"joker",number:21},{suit:"jack",number:21},{suit:"spades",number:2},{suit:"spades",number:3},{suit:"spades",number:4},{suit:"spades",number:5},{suit:"spades",number:6},{suit:"spades",number:7},{suit:"spades",number:8},{suit:"spades",number:9},{suit:"spades",number:10},{suit:"spades",number:11},{suit:"spades",number:12},{suit:"spades",number:13},{suit:"spades",number:14},{suit:"hearts",number:2},{suit:"hearts",number:3},{suit:"hearts",number:4},{suit:"hearts",number:5},{suit:"hearts",number:6},{suit:"hearts",number:7},{suit:"hearts",number:8},{suit:"hearts",number:9},{suit:"hearts",number:10},{suit:"hearts",number:11},{suit:"clubs",number:2},{suit:"clubs",number:3},{suit:"clubs",number:4},{suit:"clubs",number:5},{suit:"clubs",number:6},{suit:"clubs",number:7},{suit:"clubs",number:8},{suit:"clubs",number:9},{suit:"clubs",number:10},{suit:"clubs",number:11},{suit:"clubs",number:12},{suit:"clubs",number:13},{suit:"clubs",number:14}]}),Y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={dungeon:[],dungeonType:"nohearts",regenerate:0,room:[],hp:21,xp:0,shield:0,shieldRank:0,potionDrank:!1,potionLimit:!0,breakableShield:!0,progress:52,retreat:!1,isRoomComplete:!1,modal:!1,gameState:"",gameVariant:""},n.shuffle=function(e,t){for(var a=e.concat(t),s=a.length;s>0;){var r=Math.floor(Math.random()*s),o=a[--s];a[s]=a[r],a[r]=o}var i=a.splice(-4,a.length);n.setState(function(e){return{dungeon:a,hp:e.hp+n.state.regenerate,room:i,progress:a.length,potionDrank:!1,isRoomComplete:!1,gameState:0===i.length?"You won!":n.state.gameState}})},n.deal=function(e){var t=e.splice(-4,e.length);n.setState(function(a){return{dungeon:e,room:t,hp:a.hp+n.state.regenerate,potionDrank:!1,progress:e.length,roomComplete:!1,retreat:!0,isRoomComplete:!1,gameState:0===e.length?"You won!":""}})},n.run=function(){n.shuffle(n.state.dungeon,n.state.room),n.setState({retreat:!n.state.retreat})},n.nextRoom=function(){n.shuffle(n.state.dungeon,n.state.room),n.setState({retreat:n.state.breakableShield})},n.resetDungeon=function(e,t){var a;"nohearts"===t?a="Heal 3 after each room":"noshields"===t?a="Unbreakable shield":"potions"===t&&(a="No potion limit"),n.shuffle(e,[]),n.setState({dungeonSize:e.length,regenerate:"nohearts"===t?3:0,potionLimit:"potions"!==t,breakableShield:"noshields"!==t,hp:21,xp:0,shield:"noshields"===t?7:0,shieldRank:0,retreat:"noshields"!==t,gameVariant:a})},n.updatePlayer=function(e){n.setState(function(t){return Object(i.a)({},t,e)})},n.handleClick=function(e){var t=n.state.room.filter(function(t){return t.suit!==e.suit||t.number!==e.number});n.setState({room:t,isRoomComplete:t.length<=1,retreat:!1},function(){0===t.length&&n.deal(n.state.dungeon)})},n.renderRoom=function(){return n.state.hp>0&&n.state.room.length>0?s.a.createElement(a.Fragment,null,n.state.gameVariant,s.a.createElement("div",{className:"progress-bar"},s.a.createElement("span",{className:"progress-bar-rating",style:{width:(n.state.dungeonSize-n.state.progress)/n.state.dungeonSize*100+"%"}},Math.ceil((48-n.state.progress)/48*100)+"% Complete")),"Progress: ",n.state.progress,n.state.progress>0&&s.a.createElement("p",{className:"App-intro"},s.a.createElement("button",{className:"button lined thin",onClick:n.nextRoom,disabled:!n.state.isRoomComplete},"Next Room"),s.a.createElement("button",{className:"button lined thin",onClick:n.run,disabled:!n.state.retreat},"Run")),s.a.createElement("div",{className:"App-stats"},s.a.createElement("p",{className:"text-white"},"HP: ",n.state.hp," \u2022 Shield: ",n.state.shield,"/",n.state.shieldRank),s.a.createElement("small",null,"XP: ",n.state.xp," \u2022 Potions sickness: ",n.state.potionDrank&&"1")),s.a.createElement("div",{className:"App-room is-clearfix"},s.a.createElement(N,Object.assign({},n.state,{gainXP:n.gainXP,updatePlayer:n.updatePlayer,handleClick:n.handleClick})))):s.a.createElement("div",null,s.a.createElement("h1",{className:"is-size-3"},n.state.gameState),s.a.createElement("br",null),s.a.createElement("p",null,s.a.createElement("button",{className:"button lined thin",onClick:n.toggleModal},"How To Play")),s.a.createElement("img",{src:S.a,className:"knot"}),s.a.createElement("p",{className:"mb3"},s.a.createElement("button",{className:"button lined thin",onClick:function(){return n.resetDungeon(M.standard)}},"Standard Dungeon")),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column"},s.a.createElement("img",{src:x.a,width:"150",className:"img-responsive"}),s.a.createElement("button",{className:"button lined thin",onClick:function(){return n.resetDungeon(M.standard,"potions")}},"Play As Queen of Hearts"),s.a.createElement("p",null,"There is no limit to how many potions you can use in a room. However, you still cannot have more than 21 HP.")),s.a.createElement("div",{className:"column"},s.a.createElement("img",{src:D.a,width:"150",className:"img-responsive"}),s.a.createElement("button",{className:"button lined thin",onClick:function(){return n.resetDungeon(M.noshields,"noshields")}},"Play As King of Hearts"),s.a.createElement("p",null,"You start with a shield. Your shield does not have a rank and cannot break. Unfortunately, you cannot run from a room.")),s.a.createElement("div",{className:"column"},s.a.createElement("img",{src:L.a,width:"150",className:"img-responsive"}),s.a.createElement("button",{className:"button lined thin",onClick:function(){return n.resetDungeon(M.nohearts,"nohearts")}},"Play As Ace of Hearts"),s.a.createElement("p",null,"After every room you heal 3 points, but potions have been removed.")))))},n.renderShield=function(){if(n.state.hp>0&&n.state.room.length>0)return s.a.createElement("div",{className:"App-shield"},n.state.shield>0&&s.a.createElement(O,{shield:n.state.shield,shieldRank:n.state.shieldRank}))},n.toggleModal=function(){n.setState({modal:!n.state.modal})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App mb3"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"},"rapscallion")),this.renderRoom(),this.renderShield(),this.state.modal&&s.a.createElement("div",{className:b()("modal",{"is-active":this.state.modal})},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title"},"Instructions:"),s.a.createElement("button",{className:"delete","aria-label":"close",onClick:this.toggleModal})),s.a.createElement("section",{className:"modal-card-body"},s.a.createElement("p",null,"Your enemies are ",s.a.createElement("strong",null,"Spades")," and ",s.a.createElement("strong",null,"Clubs"),". They will subtract their face value from your ",s.a.createElement("strong",null,"HP"),". You can regain ",s.a.createElement("strong",null,"HP")," by taking a ",s.a.createElement("strong",null,"potion"),". Cards in the suit of ",s.a.createElement("strong",null,"Heart")," are potions and will add to your ",s.a.createElement("strong",null,"HP")," up to 21. You may only have one ",s.a.createElement("strong",null,"potion")," in a room. To help fight enemies equip a ",s.a.createElement("strong",null,"shield"),". The ",s.a.createElement("strong",null,"Diamond")," cards are shields. Equipping a ",s.a.createElement("strong",null,"shield")," and attacking an enemy will set a new rank on your ",s.a.createElement("strong",null,"shield"),". Attacking an enemy with a higher face value than your ",s.a.createElement("strong",null,"shield")," rank will break your shield. ")),s.a.createElement("footer",{className:"modal-card-foot"},s.a.createElement("button",{className:"button",onClick:this.toggleModal},"Close")))))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rapscallion",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rapscallion","/service-worker.js");T?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):z(e)})}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.44b4b951.chunk.js.map