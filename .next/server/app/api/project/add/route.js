(()=>{var e={};e.id=553,e.ids=[553],e.modules={6037:e=>{"use strict";e.exports=require("mongoose")},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5154:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>j,routeModule:()=>g,serverHooks:()=>x,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var s={};r.r(s),r.d(s,{POST:()=>d,dynamic:()=>p});var n=r(2706),o=r(8203),a=r(5994),i=r(2956),c=r(4698),u=r(9187);let p="force-dynamic";async function d(e){try{await (0,i.A)();let t=await e.json();if(await c.A.create(t))return u.NextResponse.json({success:!0,message:"Data saved successfully"});return u.NextResponse.json({success:!1,message:"Something goes wrong !Please try again"})}catch(e){return console.log(e),u.NextResponse.json({success:!1,message:"Something goes wrong !Please try again"})}}let g=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/project/add/route",pathname:"/api/project/add",filename:"route",bundlePath:"app/api/project/add/route"},resolvedPagePath:"D:\\TAN\\NextJS-Fullstack-Portfolio-2023\\src\\app\\api\\project\\add\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:x}=g;function j(){return(0,a.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},6487:()=>{},8335:()=>{},2956:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(6037),n=r.n(s);async function o(){try{await n().connect("mongodb+srv://ngoctanttv2004:ngoctan@cluster-ngoctan.b1mza.mongodb.net/tan"),console.log("Database connected successfully")}catch(e){console.log(e)}}},4698:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(6037),n=r.n(s);let o=new(n()).Schema({name:String,website:String,technologies:String,github:String,imageUrl:{type:String,required:!0}},{timestamps:!0}),a=n().models.Project||n().model("Project",o)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,452],()=>r(5154));module.exports=s})();