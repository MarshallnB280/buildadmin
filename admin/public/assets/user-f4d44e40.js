import{e as C,_ as y,l as k,g as I,a0 as M,m as S}from"./index-3038d132.js";import{u as B,a as j,r as q,g as A}from"./router-1c38d888.js";import{h as d,p as i,B as m,C as s,q as e,a6 as D,k as f,ad as b,t as n,m as v,a3 as F,z as N,i as $,E,D as H,S as T}from"./vue-836dfa82.js";import{H as w,A as z,F as x}from"./footer-ea31912f.js";import{m as R}from"./layout-d9f757b4.js";import"./useDark-d177a61f.js";function P(){return new Promise(c=>{c({type:"continue"})})}const U=d({__name:"main",setup(c){const l=C();return(u,r)=>{const a=n("router-view"),o=n("el-main");return i(),m(o,{class:"layout-main"},{default:s(()=>[e(a,null,{default:s(({Component:t})=>[e(D,{name:f(l).layout.mainAnimation,mode:"out-in"},{default:s(()=>[(i(),m(b(t)))]),_:2},1032,["name"])]),_:1})]),_:1})}}});const J=y(U,[["__scopeId","data-v-bc73de31"]]),L=d({__name:"default",setup(c){return(l,u)=>{const r=n("el-col"),a=n("el-row"),o=n("el-scrollbar"),t=n("el-container");return i(),m(t,{class:"is-vertical"},{default:s(()=>[e(w),e(o,{style:v(f(R)()),ref:"mainScrollbarRef"},{default:s(()=>[e(a,{class:"frontend-footer-brother",justify:"center"},{default:s(()=>[e(r,{class:"user-layouts",span:16,xs:24},{default:s(()=>[e(z,{class:"hidden-sm-and-down"}),e(J)]),_:1})]),_:1}),e(x)]),_:1},8,["style"])]),_:1})}}});const O=y(L,[["__scopeId","data-v-64942115"]]),V=d({__name:"disable",setup(c){return(l,u)=>{const r=n("el-alert"),a=n("el-col"),o=n("el-row"),t=n("el-scrollbar"),_=n("el-container");return i(),m(_,{class:"is-vertical"},{default:s(()=>[e(w),e(t,{style:v(f(R)()),ref:"mainScrollbarRef"},{default:s(()=>[e(o,{class:"frontend-footer-brother",justify:"center"},{default:s(()=>[e(a,{class:"user-layouts",span:16,xs:24},{default:s(()=>[e(r,{center:!0,title:l.$t("Member center disabled"),type:"error"},null,8,["title"])]),_:1})]),_:1}),e(x)]),_:1},8,["style"])]),_:1})}}});const W=y(V,[["__scopeId","data-v-e004cd2e"]]),G={components:{Default:O,Disable:W}},te=d({...G,__name:"user",setup(c){const{t:l}=k(),u=H(),r=T(),a=I(),o=B();return F(t=>{o.setActiveRoute(t)}),N(async()=>{const t=await P();if(t.type!="break"){if(t.type=="reload")return window.location.href=t.url;if(!a.token)return r.push({name:"userLogin"});M().then(_=>{if(_.data.userInfo.refreshToken=a.refreshToken,a.dataFill(_.data.userInfo),_.data.menus){if(j(_.data.menus),t.type=="jump")return r.push(t.url);if(u.params.to){const p=JSON.parse(u.params.to);if(p.path!=S.path){let g=$(p.query)?{}:p.query;q({path:p.path,query:g});return}}let h=A(o.state.viewRoutes);h?r.push({path:h.path}):E({type:"error",message:l("No route found to jump~")})}}),document.body.clientWidth<1024?o.setShrink(!0):o.setShrink(!1)}}),(t,_)=>(i(),m(b(f(o).state.layoutMode)))}});export{te as default};