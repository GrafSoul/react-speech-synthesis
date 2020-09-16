(this["webpackJsonpreact-speech-synthesis"]=this["webpackJsonpreact-speech-synthesis"]||[]).push([[0],{10:function(e,t,a){e.exports={header:"Header_header__1hOxH",headerWrap:"Header_headerWrap__2k0N3"}},13:function(e,t,a){e.exports={footer:"Footer_footer__qyoAG"}},14:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),l=(a(19),a(8)),s=a(24),u=a(25),i=a(26),m=a(27),p=a(28),d=a(29),f=a(30),h=a(31),b=a(32),E=a(33),_=a(3),y=a.n(_),g=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(null),a=Object(n.useRef)([]),c=Object(n.useRef)([]),o=Object(n.useRef)(null),_=Object(n.useRef)(null),g=Object(n.useRef)(null),v=Object(n.useRef)(0),x=Object(n.useState)(""),N=Object(l.a)(x,2),S=N[0],R=N[1],j=Object(n.useState)(1),k=Object(l.a)(j,2),O=k[0],T=k[1],w=Object(n.useState)(1),C=Object(l.a)(w,2),W=C[0],I=C[1],B=Object(n.useState)(1),G=Object(l.a)(B,2),H=G[0],M=G[1],A=Object(n.useState)(!0),P=Object(l.a)(A,2),L=P[0],V=P[1],U=Object(n.useState)(!0),D=Object(l.a)(U,2),F=D[0],J=D[1],K=new SpeechSynthesisUtterance,Q=speechSynthesis.getVoices();void 0!==window.SpeechSynthesisUtterance||Q?e.current=!0:e.current=!1,Object(n.useEffect)((function(){$(t.current,speechSynthesis.getVoices())}),[t]);var $=function(e,t){e.innerHTML=t.map((function(e){var t=document.createElement("option");return t.value=e.lang,t.textContent=e.name+(e.default?" (default)":""),t.setAttribute("data-voice-uri",e.voiceURI),t})).map((function(e){return e.outerHTML})).join("")},q=function(){g.current.innerHTML="",v.current=0,_.current.innerHTML="",a.current=[],c.current=[],_.current.innerHTML="",speechSynthesis.cancel(),V(!0),J(!0)},X=function(e,t){e=String(e),t=Number(t)>>>0;var a=e.slice(0,t+1).search(/\S+$/),n=e.slice(t).search(/\s/);return n<0?e.slice(a):e.slice(a,n+t)},Z=function(e){for(var t=0;t<e.length;t++){var a='<span id="word_span_'+t+'">'+e[t]+"</span>&nbsp;";_.current.innerHTML+=a}};return r.a.createElement(r.a.Fragment,null,e.current?r.a.createElement(s.a,{className:y.a.content},r.a.createElement("div",{className:F?null:y.a.curtainBlocked,onClick:q}),r.a.createElement("div",{className:y.a.contentWrap},r.a.createElement(u.a,{className:y.a.jumbotron},r.a.createElement(i.a,{action:"",method:"get"},r.a.createElement(m.a,{className:y.a.info},"Simple app for speech synthesis using React.js and Speech Synthesis API ",r.a.createElement("br",null),"In the text field, write the text that you want to play with your computer's voice"),r.a.createElement(p.a,{className:y.a.formGroup},r.a.createElement("div",{ref:_,className:F?null:y.a.panelText}),r.a.createElement("div",{className:F?null:y.a.textareaBlocked},r.a.createElement("div",{ref:g,className:F?null:y.a.currentWord})),r.a.createElement(d.a,{disabled:!F,type:"textarea",id:"text",ref:o,className:y.a.inputText,value:S,onChange:function(e){return function(e){R(e.target.value),""===S&&J(!0),q()}(e)},onClick:q})),r.a.createElement(p.a,{className:y.a.formGroup},r.a.createElement(f.a,{for:"voice"},"Voice:"),r.a.createElement("select",{className:"form-control",id:"voice",ref:t,onChange:q})),r.a.createElement(h.a,{form:!0,className:y.a.formGroup},r.a.createElement(b.a,{md:4},r.a.createElement(p.a,{className:y.a.rangeInput},r.a.createElement(f.a,{for:"rate"},"Rate: ",r.a.createElement("b",null,O)),r.a.createElement(d.a,{type:"range",id:"rate",min:"0.1",max:"2",value:O,step:"0.1",onChange:function(e){return function(e){T(e.target.value),q()}(e)}}))),r.a.createElement(b.a,{md:4},r.a.createElement(p.a,{className:y.a.rangeInput},r.a.createElement(f.a,{for:"pitch"},"Pitch: ",r.a.createElement("b",null,W)),r.a.createElement(d.a,{type:"range",id:"pitch",min:"0.1",max:"2",value:W,step:"0.1",onChange:function(e){return function(e){I(e.target.value),q()}(e)}}))),r.a.createElement(b.a,{md:4},r.a.createElement(p.a,{className:y.a.rangeInput},r.a.createElement(f.a,{for:"pitch"},"Volume: ",r.a.createElement("b",null,H)),r.a.createElement(d.a,{type:"range",id:"volume",min:"0.1",max:"2",value:H,step:"0.1",onChange:function(e){return function(e){M(e.target.value),q()}(e)}})))),r.a.createElement(p.a,{className:y.a.buttonGroup},F?r.a.createElement(E.a,{disabled:!S,type:"button",id:"button-speak",color:"success",className:y.a.button,onClick:function(){var e=S.split(" ");a.current=e,c.current=e,Z(e);var n=t.current.options[t.current.selectedIndex],r=speechSynthesis.getVoices().filter((function(e){return e.voiceURI===n.getAttribute("data-voice-uri")})).pop();K.text=S,K.voice=r,K.lang=r.lang,K.rate=O,K.pitch=W,K.volume=H,K.onboundary=function(e){var t=X(S,e.charIndex);g.current.innerHTML=t;try{var a=document.getElementById("word_span_"+v.current);a.style.color="blue",a.style.backgroundColor="#e4e4e4",a.style.padding="0 3px",a.style.display="inline-block",a.style.margin="0 -3px"}catch(e){}v.current++},K.onend=function(){q()},speechSynthesis.speak(K),V(!1),J(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"):r.a.createElement(E.a,{type:"button",id:"button-continue",color:"info",className:y.a.button,onClick:function(){speechSynthesis.resume(),V(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"),r.a.createElement(E.a,{disabled:!!L,type:"button",id:"button-pause",color:"info",className:y.a.button,onClick:function(){speechSynthesis.pause(),V(!0)}},r.a.createElement("i",{className:"fas fa-pause"})," Pause"),r.a.createElement(E.a,{disabled:!S,type:"button",id:"button-stop",color:"danger",className:y.a.button,onClick:q},r.a.createElement("i",{className:"fas fa-stop"})," Stop"),r.a.createElement(E.a,{disabled:!S,type:"button",id:"button-clear",color:"danger",className:y.a.button,onClick:function(){R(""),q()}},r.a.createElement("i",{className:"fas fa-trash-alt"})," ","Clear")))))):r.a.createElement(s.a,null,r.a.createElement(h.a,null,r.a.createElement("p",{className:y.a.unsupported},"Speech Synthesis API Not Supported!"))))},v=a(10),x=a.n(v),N=function(){return r.a.createElement("header",{className:x.a.header},r.a.createElement("div",{className:x.a.headerWrap},r.a.createElement("h1",null,"READ.OK | Speech Synthesis API")))},S=a(13),R=a.n(S),j=function(){return r.a.createElement("footer",{className:R.a.footer},r.a.createElement("p",null,"\xa9 2020 | READ.OK | Created by Dmitriy Zatulovskiy |"," ",r.a.createElement("a",{href:"https://github.com/GrafSoul/react-speech-synthesis",target:"_blank",rel:"noopener noreferrer"},"GitHub")))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(g,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={content:"TextReader_content__13bKa",contentWrap:"TextReader_contentWrap__3Oe6O",curtainBlocked:"TextReader_curtainBlocked__-6CW3",jumbotron:"TextReader_jumbotron__1Qtbg",info:"TextReader_info__M8cP8",formGroup:"TextReader_formGroup__W58Pc",inputText:"TextReader_inputText__-9i7C",rangeInput:"TextReader_rangeInput__10w88",button:"TextReader_button__1m_0l",buttonGroup:"TextReader_buttonGroup__2e7cw",textareaBlocked:"TextReader_textareaBlocked__nJXWW",panelText:"TextReader_panelText__2PdQ4",currentWord:"TextReader_currentWord__BBlWQ"}}},[[14,1,2]]]);
//# sourceMappingURL=main.afcb9574.chunk.js.map