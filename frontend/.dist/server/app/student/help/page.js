(()=>{var e={};e.id=248,e.ids=[248],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},1281:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(260),n=r(8203),a=r(5155),i=r.n(a),l=r(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["student",{children:["help",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7047)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\help\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2548)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2804)),"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\help\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/student/help/page",pathname:"/student/help",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4404:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},788:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},5704:()=>{},2552:()=>{},935:(e,t,r)=>{Promise.resolve().then(r.bind(r,7047))},1199:(e,t,r)=>{Promise.resolve().then(r.bind(r,6387))},1187:(e,t,r)=>{Promise.resolve().then(r.bind(r,2548))},1435:(e,t,r)=>{Promise.resolve().then(r.bind(r,1839))},9051:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let{API_HOST:s}=r(4531);async function n(){try{let e=await fetch(`${s}/auth/jwt/refresh`,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorisation:"Bearer "+window.localStorage.getItem("access")},body:JSON.stringify({refresh:window.localStorage.getItem("refresh")})});if(e.ok)return window.localStorage.setItem("access",(await e.json()).access),!0;throw Error(e.status)}catch(e){return console.log(e),!1}}},4531:(e,t,r)=>{"use strict";r.r(t),r.d(t,{API_HOST:()=>n,APP_HOST:()=>s});let s="http://localhost:3000",n="http://localhost:8000"},9286:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(5512),n=r(5103);function a(){return(0,s.jsx)(n.default,{alt:"B3 logo",width:198,height:60,src:"/LogoFull.svg"})}},6387:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5512);r(8009);var n=r(7668);function a(){return(0,n.jL)(),(0,n.jL)(e=>e.pages.page),(0,s.jsx)(s.Fragment,{})}r(5531)},1839:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var s=r(5512),n=r(8009),a=r(4531),i=r(2273),l=r(2231),o=r(5531);let d=()=>(0,l.U1)({reducer:{pages:o.Ay}});function c({children:e}){let t=(0,n.useRef)(null);return t.current||(t.current=d()),(0,s.jsx)(i.Kq,{store:t.current,children:e})}var u=r(9286),p=r(7668),h=r(8531),x=r.n(h),m=r(5103),f=r(9334);let v=[{id:0,name:"Главная",link:`${a.APP_HOST}/student/`,image:"/HomeImg"},{id:1,name:"Курсы",link:`${a.APP_HOST}/student/courses`,image:"/CourseImg"},{id:2,name:"Помощь",link:`${a.APP_HOST}/student/help`,image:"/Help"}];function g(){let e=(0,p.CU)(),t=(0,n.useRef)(!1);t.current||(e.dispatch((0,o.yd)(-2)),t.current=!0);let r=(0,p.GV)(e=>e.pages.page);return(0,s.jsx)("div",{className:"h-full w-auto relative bg-dark",children:(0,s.jsxs)("nav",{className:"sticky h-fit flex flex-col items-center min-w-[228px] bg-white",children:[(0,s.jsx)("div",{className:"flex w-full justify-center pb-[15px] pt-5 bg-dark",children:(0,s.jsx)(u.A,{})}),(0,s.jsx)(b,{activeId:r,id:1}),v.map(e=>(0,s.jsx)(P,{activeId:r,id:e.id,link:e.link,name:e.name,image:e.image},e.id)),(0,s.jsx)(b,{activeId:r,id:2}),(0,s.jsx)(j,{})]})})}function j(){let[e,t]=(0,n.useState)(!1);return(0,s.jsx)("button",{onClick:function(){window.localStorage.clear(),(0,f.redirect)(`${a.APP_HOST}/auth`)},onMouseOver:()=>t(!0),onMouseLeave:()=>t(!1),className:"flex flex-col items-center w-full h-fit bg-dark",children:(0,s.jsxs)("div",{className:"flex items-center w-full justify-center gap-x-[15px] py-[15px]",children:[(0,s.jsx)(m.default,{alt:"exit",src:`/Exit${e?"Active":""}.svg`,width:30,height:30,className:"stroke-white hover:stroke-[#FF0000] transition-all"}),(0,s.jsx)("span",{className:`transition-all text-left w-[118px] ${e?"text-[#FF0000]":"text-white"} text-xl`,children:"Выйти"})]})})}function b({activeId:e,id:t}){return(0,s.jsx)("div",{className:`flex w-full bg-dark justify-center py-[15px] ${0==e&&1==t&&"rounded-br-[20px]"} ${2==e&&2==t&&"rounded-tr-[20px]"}`,children:(0,s.jsx)("div",{className:"w-[186px] h-[2px] bg-[#C8CDD0] opacity-20"})})}function P({activeId:e,id:t,link:r,name:n,image:a}){return(0,s.jsx)(x(),{className:`flex flex-col items-center w-full h-fit bg-dark ${e-1==t||e+1==t?e-1==t?"rounded-br-[20px]":"rounded-tr-[20px]":""}`,href:r,children:(0,s.jsxs)("div",{className:`flex items-center w-full justify-center gap-x-[15px] py-[15px] ${e==t?"bg-white rounded-l-[20px]":"bg-transparent"} `,children:[(0,s.jsx)(m.default,{alt:n,src:`${a}${e==t?"Active":""}.svg`,width:30,height:30}),(0,s.jsx)("span",{className:`w-[118px] ${e==t?"text-blue":"text-white"} text-xl`,children:n})]})})}function w(){let[e,t]=(0,n.useState)({name:!1,isSuccess:!1});return(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("form",{className:"flex items-center gap-x-2.5",children:[(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)(m.default,{alt:"search",src:"/search.svg",width:30,height:30})}),(0,s.jsx)("input",{className:"w-[120px] py-1 px-1 border-none placeholder:text-xl placeholder:text-dark",placeholder:"Поиск..."})]}),(0,s.jsxs)("div",{className:"flex gap-x-5 items-center",children:[e.isSuccess&&(0,s.jsx)("p",{className:"text-xl text-dark",children:e.name}),(0,s.jsx)(m.default,{alt:"Avatar",src:"/UserDefAvatar.svg",width:60,height:60})]})]})}function S({children:e}){let[t,r]=(0,n.useState)({name:null,isSuccess:!1,isLoad:!1});return t.isSuccess?(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"w-full flex p-5",children:[(0,s.jsx)(g,{}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-y-[30px] py-5 px-10 rounded-[40px] bg-white",children:[(0,s.jsx)(w,{}),(0,s.jsx)(y,{}),e]})]})}):(0,s.jsx)(s.Fragment,{})}function y(){return(0,s.jsx)("div",{className:"flex w-full justify-center",children:(0,s.jsx)("div",{className:"w-full h-[2px] bg-[#C8CDD0] opacity-50"})})}r(9051)},7668:(e,t,r)=>{"use strict";r.d(t,{CU:()=>i,GV:()=>a,jL:()=>n});var s=r(2273);let n=s.wA,a=s.d4,i=s.Pj},5531:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>a,yd:()=>n});let s=(0,r(2231).Z0)({name:"pages",initialState:{page:-2},reducers:{changePage(e,t){e.value!=t.payload&&(e.page=t.payload)}}}),{changePage:n}=s.actions,a=s.reducer},2804:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>o});var s=r(2740),n=r(4946),a=r.n(n),i=r(6271),l=r.n(i);r(1135);let o={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${a().className} ${l().variable} antialiased w-full bg-dark font-sans`,children:e})})}},7047:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\OpenServer\\\\OSPanel\\\\domains\\\\HACKS\\\\B3-hack\\\\frontend\\\\src\\\\app\\\\student\\\\help\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\help\\page.js","default")},2548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\OpenServer\\\\OSPanel\\\\domains\\\\HACKS\\\\B3-hack\\\\frontend\\\\src\\\\app\\\\student\\\\layout.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\OpenServer\\OSPanel\\domains\\HACKS\\B3-hack\\frontend\\src\\app\\student\\layout.js","default")},1135:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[22,684,531,112],()=>r(1281));module.exports=s})();