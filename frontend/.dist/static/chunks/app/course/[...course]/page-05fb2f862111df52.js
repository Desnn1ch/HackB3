(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{4173:(e,t,s)=>{Promise.resolve().then(s.bind(s,2717))},9951:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});let{API_HOST:a}=s(7443);async function l(){try{let e=await fetch("".concat(a,"/auth/jwt/refresh"),{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorisation:"Bearer "+window.localStorage.getItem("access")},body:JSON.stringify({refresh:window.localStorage.getItem("refresh")})});if(e.ok)return window.localStorage.setItem("access",(await e.json()).access),!0;throw Error(e.status)}catch(e){return console.log(e),!1}}},1792:(e,t,s)=>{"use strict";s.d(t,{A:()=>x});var a=s(5155),l=s(7443),c=s(2254),i=s(2115),r=s(6046),n=s(5565),o=s(8173),d=s.n(o),u=s(9951);function x(){let[e,t]=(0,i.useState)({name:"",isLoad:!1});return(0,i.useEffect)(()=>{(async function(){if(!e.isLoad){let s="";try{let e=await fetch("".concat(l.API_HOST,"/auth/users/me"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+window.localStorage.getItem("access")}});if(e.ok)t({name:(await e.json()).username,isLoad:!0});else if(401==e.status)await (0,u.A)()?t({name:"",isLoad:!1}):s="".concat(l.APP_HOST,"/auth");else throw Error(e.status)}catch(s){console.log(s),t({name:e.name,isLoad:!0})}finally{""!=s&&(0,r.redirect)(s)}}})()}),(0,a.jsx)("header",{className:"z-50 p-5 w-full fixed",children:(0,a.jsxs)("div",{className:"px-10 py-5 w-full flex justify-between items-center bg-dark rounded-full shadow-base",children:[(0,a.jsx)(c.A,{}),(0,a.jsx)(d(),{href:"".concat(l.APP_HOST,"/student/courses"),className:"px-[30px] py-[15px] rounded-full text-white text-xl border-[1px] border-white",children:"к курсам"}),(0,a.jsx)(h,{})]})})}function h(e){let{name:t}=e,s="#".concat(Math.floor(0xffffff*Math.random()).toString(16).padEnd(6,"0")).toUpperCase();return(0,a.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,a.jsx)("span",{className:"text-white text-xl",children:t}),(0,a.jsx)("div",{className:"w-[60px] h-[60px] rounded-full bg-[".concat(s,"] flex items-center justify-center"),children:(0,a.jsx)(n.default,{alt:"avatar",src:"/UserIco.svg",width:44,height:44})})]})}},7443:(e,t,s)=>{"use strict";s.r(t),s.d(t,{API_HOST:()=>l,APP_HOST:()=>a});let a="http://localhost:3000",l="http://localhost:8000"},2254:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var a=s(5155),l=s(5565);function c(){return(0,a.jsx)(l.default,{alt:"B3 logo",width:198,height:60,src:"/LogoFull.svg"})}},666:(e,t,s)=>{"use strict";s.d(t,{Er:()=>c,_S:()=>i,pq:()=>r});var a=s(5155),l=s(5565);function c(e){let{body:t}=e;return(0,a.jsxs)("div",{className:"flex relative w-full gap-5 p-10 rounded-[20px] items-center bg-blue-opacity shadow-base",children:[(0,a.jsx)(l.default,{alt:"empty",width:230,height:230,src:"/empty.svg"}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-4 items-center",children:[(0,a.jsx)("h3",{className:"text-4xl text-center text-dark",children:"Упс, кажется тут ничего нет"}),(0,a.jsx)("p",{className:"text-xl text-center text-dark",children:t})]})]})}function i(e){let{isBlue:t,title:s,body:c,isReverse:i}=e;return(0,a.jsxs)("div",{className:"flex ".concat(i&&"flex-row-reverse"," w-full gap-5 p-10 rounded-[20px] items-center ").concat(t?"bg-blue-opacity":"bg-bright-opacity"," shadow-base"),children:[(0,a.jsx)(l.default,{alt:"empty",width:230,height:230,src:"/empty.svg"}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-4 items-center",children:[(0,a.jsx)("h3",{className:"text-4xl text-center text-dark",children:s}),(0,a.jsx)("p",{className:"text-xl text-center text-dark",children:c})]})]})}function r(e){let{width:t,height:s}=e;return(0,a.jsx)("div",{height:s,width:t,className:"h-[276px] rounded-[20px] shadow-base bg-dark opacity-5"})}s(8173)},2717:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(5155),l=s(7443),c=s(2115),i=s(6046),r=s(5565),n=s(5780),o=s(666),d=s(1792),u=s(9951),x=s(8173),h=s.n(x);function f(){let e=(0,i.usePathname)().split("/")[2],[t,s]=(0,c.useState)(-1),l=(0,n.A)("/courses/".concat(e),"/student");if(!l.isLoad||!l.isSuccess)return(0,a.jsx)(a.Fragment,{});{let e;return e=l.data.image?l.data.img:"url(/DefCourse.jpg)",(0,a.jsxs)("main",{className:"w-full relative bg-fixed bg-cover bg-center bg-no-repeat",style:{backgroundImage:e},children:[(0,a.jsx)(d.A,{}),(0,a.jsx)("div",{className:"w-full pt-[450px]",children:(0,a.jsxs)("div",{className:"w-full p-10 rounded-t-[40px] bg-dark flex flex-col items-start gap-[30px] text-white",children:[(0,a.jsx)("h2",{className:"text-4xl font-title",children:l.data.title}),(0,a.jsx)("p",{className:"w-full text-xl",children:l.data.description}),(0,a.jsxs)("span",{className:"text-base",children:["Дедлайн: ",l.data.deadline]}),(0,a.jsx)(p,{id:l.data.id,openModule:s})]})}),(0,a.jsx)(g,{id:t,close:()=>s(-1)})]})}}function p(e){let{id:t,openModule:s}=e,c=(0,n.A)("/modules?course=".concat(t),"".concat(l.APP_HOST,"/student"));if(c.isLoad)return c.isSuccess?(0,a.jsx)("ul",{className:"grid grid-cols-3 gap-[30px] p-10 rounded-[40px] bg-white",children:c.data.map(e=>(0,a.jsx)(m,{module:e,openModule:s},e.id))}):(0,a.jsx)(a.Fragment,{});o.pq}function m(e){let{module:t,openModule:s}=e;return(0,a.jsxs)("li",{className:"w-full flex flex-col gap-[15px] items-start p-5 rounded-[20px] shadow-base bg-bright-opacity",children:[(0,a.jsx)("h5",{className:"text-4xl text-dark",children:t.title}),(0,a.jsx)("p",{className:"text-xl text-dark",children:t.description}),(0,a.jsx)("button",{onClick:()=>s(t.id),className:"py-2.5 px-[30px] bg-blue rounded-xl hover:bg-blue focus:bg-blue text-white",children:"Открыть модуль"})]})}function g(e){let{id:t,close:s}=e,[n,o]=(0,c.useState)({data:null,isSuccess:!1,isLoad:!1});return((0,c.useEffect)(()=>{(async function(){if(!n.isLoad&&t>=0){let e="";try{let s=await fetch("".concat(l.API_HOST,"/modules/").concat(t,"/"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+window.localStorage.getItem("access")}});if(s.ok)o({data:await s.json(),isSuccess:!0,isLoad:!0});else if(401==s.status)await (0,u.A)()?o({name:null,isSuccess:!1,isLoad:!1}):e="".concat(l.APP_HOST,"/auth");else throw Error(s.status)}catch(e){console.log(e),o({data:n.data,isSuccess:!1,isLoad:!0})}finally{""!=e&&(0,i.redirect)(e)}}})()}),t>=0&&n.isSuccess)?(0,a.jsx)("div",{className:"z-30 fixed top-0 w-full px-5 py-[172px] h-screen backdrop-blur-lg overflow-scroll",children:(0,a.jsxs)("div",{className:"w-full flex flex-col gap-[30px] text-white bg-dark rounded-[40px] p-10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h3",{className:"text-4xl font-title",children:n.data.title}),(0,a.jsx)("button",{onClick:s,children:(0,a.jsx)(r.default,{src:"/Close.svg",alt:"close",width:30,height:30})})]}),(0,a.jsx)("p",{className:"text-xl",children:n.data.description}),(0,a.jsx)("span",{className:"text-base",children:n.data.deadline}),(0,a.jsx)(w,{id:t})]})}):(0,a.jsx)(a.Fragment,{})}function w(e){let{id:t}=e,s=(0,n.A)("/blocks?module=".concat(t));return s.isSuccess?(0,a.jsx)("ul",{className:"flex flex-col gap-[30px] p-10 rounded-[40px] bg-white",children:s.data.map(e=>(0,a.jsx)(j,{block:e},e.id))}):(0,a.jsx)(a.Fragment,{})}function j(e){let{block:t}=e;return(0,a.jsx)("li",{className:"w-full text-dark rounded-[20px] shadow-base",children:(0,a.jsx)(h(),{href:"".concat(l.APP_HOST,"/course/block/").concat(t.id),className:"w-full bg-white",children:(0,a.jsx)("p",{className:"text-xl w-full p-5",children:t.text_content})})})}},5780:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(2115),l=s(9951),c=s(7443);function i(e,t){let[s,i]=(0,a.useState)({data:null,isSuccess:!1,isLoad:!1});return(0,a.useEffect)(()=>{(async function(){if(!s.isLoad){let a="";try{let t=await fetch("".concat(c.API_HOST).concat(e),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+window.localStorage.getItem("access")}});if(t.ok)i({data:await t.json(),isSuccess:!0,isLoad:!0});else if(401==t.status)await (0,l.A)()?i({name:null,isSuccess:!1,isLoad:!1}):a="".concat(c.APP_HOST,"/auth");else throw Error(t.status)}catch(e){console.log(e),i({data:s.data,isSuccess:!1,isLoad:!0}),t&&(a="".concat(c.APP_HOST).concat(t))}finally{""!=a&&redirect(a)}}})()}),s}}},e=>{var t=t=>e(e.s=t);e.O(0,[738,173,441,517,358],()=>t(4173)),_N_E=e.O()}]);