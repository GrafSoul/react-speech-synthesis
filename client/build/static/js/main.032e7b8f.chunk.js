(this["webpackJsonpreact-speech-synthesis"]=this["webpackJsonpreact-speech-synthesis"]||[]).push([[0],{10:function(e,t,a){e.exports={header:"Header_header__1hOxH",headerWrap:"Header_headerWrap__2k0N3"}},13:function(e,t,a){e.exports={footer:"Footer_footer__qyoAG"}},14:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),l=(a(19),a(7)),s=a(24),u=a(25),i=a(26),m=a(27),p=a(28),d=a(29),f=a(30),b=a(31),h=a(32),E=a(33),_=a(3),g=a.n(_),y=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(null),a=Object(n.useRef)([]),c=Object(n.useRef)([]),o=Object(n.useRef)(null),_=Object(n.useRef)(null),y=Object(n.useRef)(null),v=Object(n.useRef)(0),x=Object(n.useState)(""),N=Object(l.a)(x,2),k=N[0],R=N[1],S=Object(n.useState)(1),j=Object(l.a)(S,2),O=j[0],T=j[1],w=Object(n.useState)(1),C=Object(l.a)(w,2),W=C[0],I=C[1],G=Object(n.useState)(1),B=Object(l.a)(G,2),H=B[0],A=B[1],M=Object(n.useState)(!0),P=Object(l.a)(M,2),L=P[0],U=P[1],V=Object(n.useState)(!0),Q=Object(l.a)(V,2),D=Q[0],F=Q[1],J=Object(n.useState)(!1),K=Object(l.a)(J,2),X=K[0],$=K[1],q=Object(n.useState)(!1),Z=Object(l.a)(q,2),z=Z[0],Y=Z[1],ee=new SpeechSynthesisUtterance,te=speechSynthesis.getVoices(),ae=Object(n.useRef)(null);Object(n.useEffect)((function(){ae.current=new webkitSpeechRecognition,ae.current.continuous=!0,ae.current.interimResults=!0}),[ae]),void 0!==window.SpeechSynthesisUtterance||te?e.current=!0:e.current=!1,Object(n.useEffect)((function(){ne(t.current,speechSynthesis.getVoices())}),[t]);var ne=function(e,t){e.innerHTML=t.map((function(e){var t=document.createElement("option");return t.value=e.lang,t.textContent=e.name+(e.default?" (default)":""),t.setAttribute("data-voice-uri",e.voiceURI),t})).map((function(e){return e.outerHTML})).join("")},re=function(){y.current.innerHTML="",v.current=0,_.current.innerHTML="",a.current=[],c.current=[],_.current.innerHTML="",speechSynthesis.cancel(),U(!0),F(!0)},ce=function(e,t){e=String(e),t=Number(t)>>>0;var a=e.slice(0,t+1).search(/\S+$/),n=e.slice(t).search(/\s/);return n<0?e.slice(a):e.slice(a,n+t)},oe=function(e){for(var t=0;t<e.length;t++){var a='<span id="word_span_'+t+'">'+e[t]+"</span>&nbsp;";_.current.innerHTML+=a}};return r.a.createElement(r.a.Fragment,null,e.current?r.a.createElement(s.a,{className:g.a.content},r.a.createElement("div",{className:D?null:g.a.curtainBlocked,onClick:re}),r.a.createElement("div",{className:g.a.contentWrap},r.a.createElement(u.a,{className:g.a.jumbotron},r.a.createElement(i.a,{action:"",method:"get"},r.a.createElement(m.a,{className:g.a.info},"Simple app for speech synthesis using React.js and Web Speech API ",r.a.createElement("br",null),"In the text field, write the text that you want to play with your computer's voice"),r.a.createElement(p.a,{className:g.a.formGroup},r.a.createElement("div",{ref:_,className:D?null:g.a.panelText}),r.a.createElement("div",{className:D?null:g.a.textareaBlocked},r.a.createElement("div",{ref:y,className:D?null:g.a.currentWord})),r.a.createElement(d.a,{disabled:!D,type:"textarea",id:"text",ref:o,className:g.a.inputText,value:k,onChange:function(e){return function(e){R(e.target.value),""===k&&F(!0),re()}(e)},onClick:re})),r.a.createElement(p.a,{className:g.a.formGroup},r.a.createElement(f.a,{for:"voice"},"Voice:"),r.a.createElement("select",{className:"form-control",id:"voice",ref:t,onChange:re})),r.a.createElement(b.a,{form:!0,className:g.a.formGroup},r.a.createElement(h.a,{md:4},r.a.createElement(p.a,{className:g.a.rangeInput},r.a.createElement(f.a,{for:"rate"},"Rate: ",r.a.createElement("b",null,O)),r.a.createElement(d.a,{type:"range",id:"rate",min:"0.1",max:"2",value:O,step:"0.1",onChange:function(e){return function(e){T(e.target.value),re()}(e)}}))),r.a.createElement(h.a,{md:4},r.a.createElement(p.a,{className:g.a.rangeInput},r.a.createElement(f.a,{for:"pitch"},"Pitch: ",r.a.createElement("b",null,W)),r.a.createElement(d.a,{type:"range",id:"pitch",min:"0.1",max:"2",value:W,step:"0.1",onChange:function(e){return function(e){I(e.target.value),re()}(e)}}))),r.a.createElement(h.a,{md:4},r.a.createElement(p.a,{className:g.a.rangeInput},r.a.createElement(f.a,{for:"pitch"},"Volume: ",r.a.createElement("b",null,H)),r.a.createElement(d.a,{type:"range",id:"volume",min:"0.1",max:"2",value:H,step:"0.1",onChange:function(e){return function(e){A(e.target.value),re()}(e)}})))),r.a.createElement(p.a,{className:g.a.buttonGroup},D?r.a.createElement(E.a,{disabled:!k,type:"button",id:"button-speak",color:"success",className:g.a.button,onClick:function(){var e=k.split(" ");a.current=e,c.current=e,oe(e);var n=t.current.options[t.current.selectedIndex],r=speechSynthesis.getVoices().filter((function(e){return e.voiceURI===n.getAttribute("data-voice-uri")})).pop();ee.text=k,ee.voice=r,ee.lang=r.lang,ee.rate=O,ee.pitch=W,ee.volume=H,ee.onboundary=function(e){var t=ce(k,e.charIndex);y.current.innerHTML=t;try{var a=document.getElementById("word_span_"+v.current);a.style.color="blue",a.style.backgroundColor="#e4e4e4",a.style.padding="0 3px",a.style.display="inline-block",a.style.margin="0 -3px"}catch(e){}v.current++},ee.onend=function(){re()},speechSynthesis.speak(ee),U(!1),F(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"):r.a.createElement(E.a,{type:"button",id:"button-continue",color:"info",className:g.a.button,onClick:function(){speechSynthesis.resume(),U(!1)}},r.a.createElement("i",{className:"fas fa-play"})," ","Speak"),r.a.createElement(E.a,{disabled:!!L,type:"button",id:"button-pause",color:"info",className:g.a.button,onClick:function(){speechSynthesis.pause(),U(!0)}},r.a.createElement("i",{className:"fas fa-pause"})," Pause"),r.a.createElement(E.a,{disabled:!k,type:"button",id:"button-stop",color:"danger",className:g.a.button,onClick:re},r.a.createElement("i",{className:"fas fa-stop"})," Stop"),r.a.createElement(E.a,{disabled:!k,type:"button",id:"button-clear",color:"danger",className:g.a.button,onClick:function(){R(""),re()}},r.a.createElement("i",{className:"fas fa-trash-alt"})," ","Clear")),r.a.createElement(p.a,{className:g.a.buttonGroup},r.a.createElement(E.a,{type:"button",id:"button-record",color:X?"danger":"success",className:[g.a.button,X?g.a.blink:null].join(" "),onClick:function(){X?($(!1),ae.current.stop()):($(!0),ae.current.onresult=function(e){for(var t=""===k?k:k+" ",a=0;a<e.results.length;a++)t+=e.results[a][0].transcript;R(t)},ae.current.start())}},r.a.createElement("i",{className:"fas fa-microphone-alt"})," ","Record"),r.a.createElement(E.a,{disabled:!k,type:"button",id:"button-record",color:"info",className:g.a.button,onClick:function(){$(!1),ae.current.stop();var e=k.indexOf("\n");(e<0||e>=80)&&(e=40+k.substring(40).indexOf(" "));var t=encodeURI(k.substring(0,e)),a=encodeURI(k.substring(e+1));window.location.href="mailto:?subject="+t+"&body="+a}},r.a.createElement("i",{className:"fas fa-envelope"})," ","Email"),r.a.createElement(E.a,{disabled:!k,type:"button",id:"button-record",color:z?"success":"info",className:g.a.button,onClick:function(){$(!1),ae.current.stop(),navigator.clipboard.writeText(k).then((function(){Y(!0),setTimeout((function(){Y(!1)}),1e3)})).catch((function(e){console.log("Something went wrong",e)}))},style:{display:"inline-block",width:"100px"}},r.a.createElement("i",{className:"fas fa-copy"})," ",z?"Copied":"Copy")))))):r.a.createElement(s.a,null,r.a.createElement(b.a,null,r.a.createElement("p",{className:g.a.unsupported},"Speech Synthesis API Not Supported!"))))},v=a(10),x=a.n(v),N=function(){return r.a.createElement("header",{className:x.a.header},r.a.createElement("div",{className:x.a.headerWrap},r.a.createElement("h1",null,"READ.OK | Web Speech API")))},k=a(13),R=a.n(k),S=function(){return r.a.createElement("footer",{className:R.a.footer},r.a.createElement("p",null,"\xa9 2020 | READ.OK | Created by Dmitriy Zatulovskiy |"," ",r.a.createElement("a",{href:"https://github.com/GrafSoul/react-speech-synthesis",target:"_blank",rel:"noopener noreferrer"},"GitHub")))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={content:"TextReader_content__13bKa",contentWrap:"TextReader_contentWrap__3Oe6O",curtainBlocked:"TextReader_curtainBlocked__-6CW3",jumbotron:"TextReader_jumbotron__1Qtbg",info:"TextReader_info__M8cP8",formGroup:"TextReader_formGroup__W58Pc",inputText:"TextReader_inputText__-9i7C",rangeInput:"TextReader_rangeInput__10w88",button:"TextReader_button__1m_0l",buttonGroup:"TextReader_buttonGroup__2e7cw",textareaBlocked:"TextReader_textareaBlocked__nJXWW",panelText:"TextReader_panelText__2PdQ4",currentWord:"TextReader_currentWord__BBlWQ",blink:"TextReader_blink__2rAQG",blinker:"TextReader_blinker__1GXaS"}}},[[14,1,2]]]);
//# sourceMappingURL=main.032e7b8f.chunk.js.map