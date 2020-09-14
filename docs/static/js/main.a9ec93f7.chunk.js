(this["webpackJsonpreact-speech-synthesis"]=this["webpackJsonpreact-speech-synthesis"]||[]).push([[0],{12:function(e,t,a){e.exports={footer:"Footer_footer__sLWel"}},13:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),s=(a(18),a(9)),l=a(23),u=a(24),i=a(25),m=a(26),p=a(27),f=a(28),h=a(29),d=a(30),b=a(31),E=a(32),_=a(6),y=a.n(_),g=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(null),a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],_=c[1],g=Object(n.useState)(1),S=Object(s.a)(g,2),v=S[0],x=S[1],N=Object(n.useState)(1),j=Object(s.a)(N,2),O=j[0],R=j[1],w=Object(n.useState)(!0),T=Object(s.a)(w,2),k=T[0],I=T[1],C=Object(n.useState)(!0),G=Object(s.a)(C,2),A=G[0],P=G[1],W=new SpeechSynthesisUtterance,F=speechSynthesis.getVoices();void 0!==window.SpeechSynthesisUtterance||F?e.current=!0:e.current=!1,Object(n.useEffect)((function(){M(t.current,speechSynthesis.getVoices())}),[t]),Object(n.useEffect)((function(){""===o&&P(!0)}),[o]);var M=function(e,t){e.innerHTML=t.map((function(e){var t=document.createElement("option");return t.value=e.lang,t.textContent=e.name+(e.default?" (default)":""),t.setAttribute("data-voice-uri",e.voiceURI),t})).map((function(e){return e.outerHTML})).join("")};return r.a.createElement(r.a.Fragment,null,e.current?r.a.createElement(l.a,{className:y.a.content},r.a.createElement("div",{className:y.a.contentWrap},r.a.createElement("h1",{className:y.a.title},"READ.OK | Speech Synthesis API"),r.a.createElement(u.a,{className:y.a.jumbotron},r.a.createElement(i.a,{action:"",method:"get"},r.a.createElement(m.a,{className:y.a.info},"Simple app for speech synthesis using 'React.js' and Speech Synthesis API ",r.a.createElement("br",null),"In the text field, write the text that you want to play with your computer's voice"),r.a.createElement(p.a,{className:y.a.formGroup},r.a.createElement(f.a,{type:"textarea",id:"text",className:y.a.inputText,value:o,onChange:function(e){return _(e.target.value)}})),r.a.createElement(p.a,{className:y.a.formGroup},r.a.createElement(h.a,{for:"voice"},"Voice:"),r.a.createElement("select",{className:"form-control",id:"voice",ref:t})),r.a.createElement(d.a,{form:!0,className:y.a.formGroup},r.a.createElement(b.a,{md:6},r.a.createElement(p.a,{className:y.a.rangeInput},r.a.createElement(h.a,{for:"rate"},"Rate: ",r.a.createElement("b",null,v)),r.a.createElement(f.a,{type:"range",id:"rate",min:"0.1",max:"2",value:v,step:"0.1",onChange:function(e){return x(e.target.value)}}))),r.a.createElement(b.a,{md:6},r.a.createElement(p.a,{className:y.a.rangeInput},r.a.createElement(h.a,{for:"pitch"},"Pitch: ",r.a.createElement("b",null,O)),r.a.createElement(f.a,{type:"range",id:"pitch",min:"0.1",max:"2",value:O,step:"0.1",onChange:function(e){return R(e.target.value)}})))),r.a.createElement(p.a,{className:y.a.buttonGroup},A?r.a.createElement(E.a,{disabled:!o,type:"button",id:"button-speak",color:"success",className:y.a.button,onClick:function(){var e=t.current.options[t.current.selectedIndex],a=speechSynthesis.getVoices().filter((function(t){return t.voiceURI===e.getAttribute("data-voice-uri")})).pop();W.text=o,W.voice=a,W.lang=a.lang,W.rate=v,W.pitch=O,speechSynthesis.speak(W),I(!1),P(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"):r.a.createElement(E.a,{type:"button",id:"button-continue",color:"info",className:y.a.button,onClick:function(){speechSynthesis.resume(),I(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"),r.a.createElement(E.a,{disabled:!!k,type:"button",id:"button-pause",color:"info",className:y.a.button,onClick:function(){speechSynthesis.pause(),I(!0)}},r.a.createElement("i",{className:"fas fa-pause"})," Pause"),r.a.createElement(E.a,{disabled:!o,type:"button",id:"button-stop",color:"danger",className:y.a.button,onClick:function(){speechSynthesis.cancel(),I(!1),P(!0)}},r.a.createElement("i",{className:"fas fa-stop"})," Stop")))))):r.a.createElement(l.a,null,r.a.createElement(d.a,null,r.a.createElement("p",{className:y.a.unsupported},"Speech Synthesis API Not Supported!"))))},S=a(12),v=a.n(S),x=function(){return r.a.createElement("footer",{className:v.a.footer},r.a.createElement("p",null,"\xa9 2020 | READ.OK | Created by Dmitriy Zatulovskiy |"," ",r.a.createElement("a",{href:"https://github.com/GrafSoul/react-speech-synthesis",target:"_blank",rel:"noopener noreferrer"},"GitHub")))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={content:"TextReader_content__13bKa",contentWrap:"TextReader_contentWrap__3Oe6O",jumbotron:"TextReader_jumbotron__1Qtbg",title:"TextReader_title__Fw4j_",info:"TextReader_info__M8cP8",formGroup:"TextReader_formGroup__W58Pc",inputText:"TextReader_inputText__-9i7C",rangeInput:"TextReader_rangeInput__10w88",button:"TextReader_button__1m_0l",buttonGroup:"TextReader_buttonGroup__2e7cw"}}},[[13,1,2]]]);
//# sourceMappingURL=main.a9ec93f7.chunk.js.map