(()=>{var e={};e.id=454,e.ids=[454],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},8513:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(260),n=s(8203),a=s(5155),i=s.n(a),l=s(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["student",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5257)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2548)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2804)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\page.js"],u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/student/page",pathname:"/student",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4404:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3219,23)),Promise.resolve().then(s.t.bind(s,4863,23)),Promise.resolve().then(s.t.bind(s,5155,23)),Promise.resolve().then(s.t.bind(s,802,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,8530,23)),Promise.resolve().then(s.t.bind(s,8921,23))},788:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6959,23)),Promise.resolve().then(s.t.bind(s,3875,23)),Promise.resolve().then(s.t.bind(s,8903,23)),Promise.resolve().then(s.t.bind(s,7174,23)),Promise.resolve().then(s.t.bind(s,4178,23)),Promise.resolve().then(s.t.bind(s,7190,23)),Promise.resolve().then(s.t.bind(s,1365,23))},5704:()=>{},2552:()=>{},1187:(e,t,s)=>{Promise.resolve().then(s.bind(s,2548))},1435:(e,t,s)=>{Promise.resolve().then(s.bind(s,1839))},294:(e,t,s)=>{Promise.resolve().then(s.bind(s,5257))},974:(e,t,s)=>{Promise.resolve().then(s.bind(s,3136))},9051:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let{API_HOST:r}=s(4531);async function n(){try{let e=await fetch(`${r}/auth/jwt/refresh`,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorisation:"Bearer "+window.localStorage.getItem("access")},body:JSON.stringify({refresh:window.localStorage.getItem("refresh")})});if(e.ok)return window.localStorage.setItem("access",(await e.json()).access),!0;throw Error(e.status)}catch(e){return console.log(e),!1}}},4531:(e,t,s)=>{"use strict";s.r(t),s.d(t,{API_HOST:()=>n,APP_HOST:()=>r});let r="http://localhost:3000",n="http://localhost:8000"},9286:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5512),n=s(5103);function a(){return(0,r.jsx)(n.default,{alt:"B3 logo",width:198,height:60,src:"/LogoFull.svg"})}},4372:(e,t,s)=>{"use strict";s.d(t,{Er:()=>a,_S:()=>i,pq:()=>l});var r=s(5512),n=s(5103);function a({body:e}){return(0,r.jsxs)("div",{className:"flex relative w-full gap-5 p-10 rounded-[20px] items-center bg-blue-opacity shadow-base",children:[(0,r.jsx)(n.default,{alt:"empty",width:230,height:230,src:"/empty.svg"}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-4 items-center",children:[(0,r.jsx)("h3",{className:"text-4xl text-center text-dark",children:"Упс, кажется тут ничего нет"}),(0,r.jsx)("p",{className:"text-xl text-center text-dark",children:e})]})]})}function i({isBlue:e,title:t,body:s,isReverse:a}){return(0,r.jsxs)("div",{className:`flex ${a&&"flex-row-reverse"} w-full gap-5 p-10 rounded-[20px] items-center ${e?"bg-blue-opacity":"bg-bright-opacity"} shadow-base`,children:[(0,r.jsx)(n.default,{alt:"empty",width:230,height:230,src:"/empty.svg"}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-4 items-center",children:[(0,r.jsx)("h3",{className:"text-4xl text-center text-dark",children:t}),(0,r.jsx)("p",{className:"text-xl text-center text-dark",children:s})]})]})}function l({width:e,height:t}){return(0,r.jsx)("div",{height:t,width:e,className:"h-[276px] rounded-[20px] shadow-base bg-dark opacity-5"})}s(8531)},1839:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var r=s(5512),n=s(8009),a=s(4531),i=s(2273),l=s(2231),o=s(5531);let d=()=>(0,l.U1)({reducer:{pages:o.Ay}});function c({children:e}){let t=(0,n.useRef)(null);return t.current||(t.current=d()),(0,r.jsx)(i.Kq,{store:t.current,children:e})}var u=s(9286),p=s(7668),x=s(8531),h=s.n(x),m=s(5103),f=s(9334);let v=[{id:0,name:"Главная",link:`${a.APP_HOST}/student/`,image:"/HomeImg"},{id:1,name:"Курсы",link:`${a.APP_HOST}/student/courses`,image:"/CourseImg"},{id:2,name:"Помощь",link:`${a.APP_HOST}/student/help`,image:"/Help"}];function g(){let e=(0,p.CU)(),t=(0,n.useRef)(!1);t.current||(e.dispatch((0,o.yd)(-2)),t.current=!0);let s=(0,p.GV)(e=>e.pages.page);return(0,r.jsx)("div",{className:"h-full w-auto relative bg-dark",children:(0,r.jsxs)("nav",{className:"sticky h-fit flex flex-col items-center min-w-[228px] bg-white",children:[(0,r.jsx)("div",{className:"flex w-full justify-center pb-[15px] pt-5 bg-dark",children:(0,r.jsx)(u.A,{})}),(0,r.jsx)(b,{activeId:s,id:1}),v.map(e=>(0,r.jsx)(w,{activeId:s,id:e.id,link:e.link,name:e.name,image:e.image},e.id)),(0,r.jsx)(b,{activeId:s,id:2}),(0,r.jsx)(j,{})]})})}function j(){let[e,t]=(0,n.useState)(!1);return(0,r.jsx)("button",{onClick:function(){window.localStorage.clear(),(0,f.redirect)(`${a.APP_HOST}/auth`)},onMouseOver:()=>t(!0),onMouseLeave:()=>t(!1),className:"flex flex-col items-center w-full h-fit bg-dark",children:(0,r.jsxs)("div",{className:"flex items-center w-full justify-center gap-x-[15px] py-[15px]",children:[(0,r.jsx)(m.default,{alt:"exit",src:`/Exit${e?"Active":""}.svg`,width:30,height:30,className:"stroke-white hover:stroke-[#FF0000] transition-all"}),(0,r.jsx)("span",{className:`transition-all text-left w-[118px] ${e?"text-[#FF0000]":"text-white"} text-xl`,children:"Выйти"})]})})}function b({activeId:e,id:t}){return(0,r.jsx)("div",{className:`flex w-full bg-dark justify-center py-[15px] ${0==e&&1==t&&"rounded-br-[20px]"} ${2==e&&2==t&&"rounded-tr-[20px]"}`,children:(0,r.jsx)("div",{className:"w-[186px] h-[2px] bg-[#C8CDD0] opacity-20"})})}function w({activeId:e,id:t,link:s,name:n,image:a}){return(0,r.jsx)(h(),{className:`flex flex-col items-center w-full h-fit bg-dark ${e-1==t||e+1==t?e-1==t?"rounded-br-[20px]":"rounded-tr-[20px]":""}`,href:s,children:(0,r.jsxs)("div",{className:`flex items-center w-full justify-center gap-x-[15px] py-[15px] ${e==t?"bg-white rounded-l-[20px]":"bg-transparent"} `,children:[(0,r.jsx)(m.default,{alt:n,src:`${a}${e==t?"Active":""}.svg`,width:30,height:30}),(0,r.jsx)("span",{className:`w-[118px] ${e==t?"text-blue":"text-white"} text-xl`,children:n})]})})}function P(){let[e,t]=(0,n.useState)({name:!1,isSuccess:!1});return(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("form",{className:"flex items-center gap-x-2.5",children:[(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)(m.default,{alt:"search",src:"/search.svg",width:30,height:30})}),(0,r.jsx)("input",{className:"w-[120px] py-1 px-1 border-none placeholder:text-xl placeholder:text-dark",placeholder:"Поиск..."})]}),(0,r.jsxs)("div",{className:"flex gap-x-5 items-center",children:[e.isSuccess&&(0,r.jsx)("p",{className:"text-xl text-dark",children:e.name}),(0,r.jsx)(m.default,{alt:"Avatar",src:"/UserDefAvatar.svg",width:60,height:60})]})]})}function y({children:e}){let[t,s]=(0,n.useState)({name:null,isSuccess:!1,isLoad:!1});return t.isSuccess?(0,r.jsx)(c,{children:(0,r.jsxs)("div",{className:"w-full flex p-5",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-y-[30px] py-5 px-10 rounded-[40px] bg-white",children:[(0,r.jsx)(P,{}),(0,r.jsx)(S,{}),e]})]})}):(0,r.jsx)(r.Fragment,{})}function S(){return(0,r.jsx)("div",{className:"flex w-full justify-center",children:(0,r.jsx)("div",{className:"w-full h-[2px] bg-[#C8CDD0] opacity-50"})})}s(9051)},3136:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5512);s(5531);var n=s(7668),a=s(8009),i=s(4372);function l(){let[e,t]=(0,a.useState)({name:!1,isSuccess:!1});return(0,r.jsx)(r.Fragment,{children:e.isSuccess&&e.name.length>0&&(0,r.jsxs)("h2",{className:"text-4xl font-title",children:["Добро пожаловать, ",e.name,"!"]})})}s(4531),s(9334);let o=[{id:0,title:"Краткая сводка по курсам",body:"Последний созданный курс / Курс в процессе создания, если впервые вход - предложение курс создать",isBlue:!0,isReverse:!0},{id:1,title:"Краткая сводка по аналитике",body:"Люди в команде, их прогресс в прохождении курса, пройденные курсы, процент правильных ответов",isBlue:!1,isReverse:!1}];function d(){return(0,n.jL)(),(0,n.jL)(e=>e.pages.page),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),o.map(e=>(0,r.jsx)(i._S,{title:e.title,body:e.body,isBlue:e.isBlue,isReverse:e.isReverse},e.id))]})}},7668:(e,t,s)=>{"use strict";s.d(t,{CU:()=>i,GV:()=>a,jL:()=>n});var r=s(2273);let n=r.wA,a=r.d4,i=r.Pj},5531:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>a,yd:()=>n});let r=(0,s(2231).Z0)({name:"pages",initialState:{page:-2},reducers:{changePage(e,t){e.value!=t.payload&&(e.page=t.payload)}}}),{changePage:n}=r.actions,a=r.reducer},2804:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>o});var r=s(2740),n=s(4946),a=s.n(n),i=s(6271),l=s.n(i);s(1135);let o={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${a().className} ${l().variable} antialiased w-full bg-dark font-sans`,children:e})})}},2548:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\OpenServer\\\\OSPanel\\\\domains\\\\HACKS\\\\B3-hack\\\\frontend\\\\src\\\\app\\\\student\\\\layout.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\layout.js","default")},5257:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\OpenServer\\\\OSPanel\\\\domains\\\\HACKS\\\\B3-hack\\\\frontend\\\\src\\\\app\\\\student\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\page.js","default")},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[22,684,531,112],()=>s(8513));module.exports=r})();