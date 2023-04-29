import{r as d,i as c,a as E,b as w,c as D,m as h,d as t,e as I}from"./index-c7cbf40d.js";import{d as T,r as g,G as O,N as R,O as b,E as u}from"./vue-1688d898.js";const f=T("memberCenter",()=>{const e=g({open:!1,layoutMode:"Default",activeRoute:null,viewRoutes:[],showHeadline:!1,authNode:new Map,shrink:!1,menuExpand:!1});return{state:e,setAuthNode:(_,k)=>{e.authNode.set(_,k)},setViewRoutes:_=>{e.viewRoutes=L(_)},setShowHeadline:_=>{e.showHeadline=_},setActiveRoute:_=>{e.activeRoute=_},setShrink:_=>{e.shrink=_},setStatus:_=>{e.open=_},setLayoutMode:_=>{e.layoutMode=_},toggleMenuExpand:(_=!e.menuExpand)=>{e.menuExpand=_}}});function L(e){return e.forEach(n=>{var r;((r=n.meta)==null?void 0:r.type)=="iframe"&&(n.path="/user/iframe/"+encodeURIComponent(n.path)),n.children&&n.children.length&&(n.children=L(n.children))}),e}const F=function(e="shade",n){const r=document.querySelector(".layout-container"),o=document.createElement("div");o.setAttribute("class","ba-layout-shade "+e),r.appendChild(o),O(o,"click",()=>A(n))},A=function(e=()=>{}){const n=document.querySelector(".ba-layout-shade");n&&n.remove(),e()},V=async e=>{try{const n=await d.push(e);R(n,b.aborted)?u({message:c.global.t("utils.Navigation failed, navigation guard intercepted!"),type:"error"}):R(n,b.duplicated)&&u({message:c.global.t("utils.Navigation failed, it is at the navigation target position!"),type:"warning"})}catch(n){u({message:c.global.t("utils.Navigation failed, invalid route!"),type:"error"}),console.error(n)}},P=e=>{var a,s;const n=[];d.getRoutes().forEach(i=>{i.path&&n.push(i.path)});let o=!1;for(const i in e){if(((a=e[i].meta)==null?void 0:a.type)!="menu_dir"&&n.indexOf(e[i].path)!==-1)return e[i];if(e[i].children&&((s=e[i].children)!=null&&s.length)&&(o=P(e[i].children),o))return o}return o},N=e=>{var r;switch((r=e.meta)==null?void 0:r.type){case"iframe":case"tab":V({path:e.path});break;case"link":window.open(e.path,"_blank");break;default:u({message:c.global.t("utils.Navigation failed, the menu type is unrecognized!"),type:"error"});break}const n=I();n.layout.shrink&&A(()=>{n.setLayout("menuCollapse",!0)})},M=e=>{l(Object.assign({"/src/views/frontend/index.vue":()=>t(()=>import("./index-298f36c6.js"),["assets/index-298f36c6.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/footer-62e1380b.js","assets/useDark-df4f13de.js"]),"/src/views/frontend/user/account/balance.vue":()=>t(()=>import("./balance-9ad0afbb.js"),["assets/balance-9ad0afbb.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js"]),"/src/views/frontend/user/account/changePassword.vue":()=>t(()=>import("./changePassword-943d60aa.js"),["assets/changePassword-943d60aa.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/validate-74c566c8.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js"]),"/src/views/frontend/user/account/integral.vue":()=>t(()=>import("./integral-9d98e117.js"),["assets/integral-9d98e117.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js"]),"/src/views/frontend/user/account/overview.vue":()=>t(()=>import("./overview-3aebed2b.js"),["assets/overview-3aebed2b.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/echarts-d2519496.js"]),"/src/views/frontend/user/account/profile.vue":()=>t(()=>import("./profile-7c2bb70d.js"),["assets/profile-7c2bb70d.js","assets/vue-1688d898.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/frontend/user/login.vue":()=>t(()=>import("./login-ed6e97ab.js"),["assets/login-ed6e97ab.js","assets/vue-1688d898.js","assets/footer-62e1380b.js","assets/useDark-df4f13de.js","assets/index-c7cbf40d.js","assets/validate-74c566c8.js"])}),e,h.name);const r="/"+h.name+"/",o=p(e,r,r),a=f();a.setViewRoutes(o),a.setShowHeadline(e.length>1)},S=e=>{l(Object.assign({"/src/views/backend/auth/admin/index.vue":()=>t(()=>import("./index-a5639eee.js"),["assets/index-a5639eee.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-12e49b4b.js","assets/validate-74c566c8.js","assets/index-b69fdefb.js"]),"/src/views/backend/auth/admin/popupForm.vue":()=>t(()=>import("./popupForm-12e49b4b.js"),["assets/popupForm-12e49b4b.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/validate-74c566c8.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js"]),"/src/views/backend/auth/adminLog/index.vue":()=>t(()=>import("./index-9ae189b0.js"),["assets/index-9ae189b0.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/info-d6e06bae.js"]),"/src/views/backend/auth/adminLog/info.vue":()=>t(()=>import("./info-d6e06bae.js"),["assets/info-d6e06bae.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js"]),"/src/views/backend/auth/group/index.vue":()=>t(()=>import("./index-57b67fd2.js"),["assets/index-57b67fd2.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-4699c3d3.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/auth/group/popupForm.vue":()=>t(()=>import("./popupForm-4699c3d3.js"),["assets/popupForm-4699c3d3.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/auth/menu/index.vue":()=>t(()=>import("./index-4e3519ea.js"),["assets/index-4e3519ea.js","assets/controllerUrls-941681c3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-1f25104b.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/auth/menu/popupForm.vue":()=>t(()=>import("./popupForm-82c62be2.js"),["assets/popupForm-82c62be2.js","assets/popupForm.vue_vue_type_script_setup_true_lang-1f25104b.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/crud/design.vue":()=>t(()=>import("./design-79be649e.js"),["assets/design-79be649e.js","assets/vue-1688d898.js","assets/index-c183c9c5.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/index-b69fdefb.js","assets/crud-24295230.js","assets/validate-74c566c8.js"]),"/src/views/backend/crud/index.vue":()=>t(()=>import("./index-20ca8c9d.js"),["assets/index-20ca8c9d.js","assets/start-aa03e7ed.js","assets/vue-1688d898.js","assets/crud-24295230.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js","assets/log.vue_vue_type_style_index_0_lang-e4825aea.js","assets/design-79be649e.js"]),"/src/views/backend/crud/log.vue":()=>t(()=>import("./log-d3e107f6.js"),["assets/log-d3e107f6.js","assets/log.vue_vue_type_style_index_0_lang-e4825aea.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/crud-24295230.js"]),"/src/views/backend/crud/start.vue":()=>t(()=>import("./start-aa03e7ed.js"),["assets/start-aa03e7ed.js","assets/vue-1688d898.js","assets/crud-24295230.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js","assets/log.vue_vue_type_style_index_0_lang-e4825aea.js"]),"/src/views/backend/dashboard.vue":()=>t(()=>import("./dashboard-8b52c2d6.js"),["assets/dashboard-8b52c2d6.js","assets/avatar-520fefc6.js","assets/echarts-d2519496.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js"]),"/src/views/backend/login.vue":()=>t(()=>import("./login-543ced24.js"),["assets/login-543ced24.js","assets/vue-1688d898.js","assets/avatar-520fefc6.js","assets/index-c7cbf40d.js","assets/index-9c543137.js","assets/validate-74c566c8.js"]),"/src/views/backend/module/components/baAccount.vue":()=>t(()=>import("./baAccount-bea3573e.js"),["assets/baAccount-bea3573e.js","assets/vue-1688d898.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js","assets/store-f3e06c76.js"]),"/src/views/backend/module/components/buy.vue":()=>t(()=>import("./buy-1fd9a3d3.js"),["assets/buy-1fd9a3d3.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/commonDialog.vue":()=>t(()=>import("./commonDialog-6fa2495b.js"),["assets/commonDialog-6fa2495b.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/installConflict-d59ef859.js","assets/index-892cad8c.js","assets/commonDone-face620c.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/uploadInstall-bbaad955.js","assets/confirmFileConflict-53b62058.js"]),"/src/views/backend/module/components/commonDone.vue":()=>t(()=>import("./commonDone-face620c.js"),["assets/commonDone-face620c.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js"]),"/src/views/backend/module/components/confirmFileConflict.vue":()=>t(()=>import("./confirmFileConflict-53b62058.js"),["assets/confirmFileConflict-53b62058.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/goodsInfo.vue":()=>t(()=>import("./goodsInfo-662049bf.js"),["assets/goodsInfo-662049bf.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js","assets/buy-1fd9a3d3.js","assets/pay-454c6082.js"]),"/src/views/backend/module/components/installConflict.vue":()=>t(()=>import("./installConflict-d59ef859.js"),["assets/installConflict-d59ef859.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/pay.vue":()=>t(()=>import("./pay-454c6082.js"),["assets/pay-454c6082.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/tableHeader.vue":()=>t(()=>import("./tableHeader-5c628844.js"),["assets/tableHeader-5c628844.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/tabs.vue":()=>t(()=>import("./tabs-d2e6e25b.js"),["assets/tabs-d2e6e25b.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js"]),"/src/views/backend/module/components/uploadInstall.vue":()=>t(()=>import("./uploadInstall-bbaad955.js"),["assets/uploadInstall-bbaad955.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/store-f3e06c76.js","assets/index-892cad8c.js"]),"/src/views/backend/module/index.vue":()=>t(()=>import("./index-d3c12d61.js"),["assets/index-d3c12d61.js","assets/store-f3e06c76.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/index-892cad8c.js","assets/tableHeader-5c628844.js","assets/baAccount-bea3573e.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js","assets/tabs-d2e6e25b.js","assets/goodsInfo-662049bf.js","assets/buy-1fd9a3d3.js","assets/pay-454c6082.js","assets/commonDialog-6fa2495b.js","assets/installConflict-d59ef859.js","assets/commonDone-face620c.js","assets/uploadInstall-bbaad955.js","assets/confirmFileConflict-53b62058.js"]),"/src/views/backend/routine/adminInfo.vue":()=>t(()=>import("./adminInfo-4eca308b.js"),["assets/adminInfo-4eca308b.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/validate-74c566c8.js"]),"/src/views/backend/routine/attachment/index.vue":()=>t(()=>import("./index-2e2b177b.js"),["assets/index-2e2b177b.js","assets/popupForm-eaa33f01.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-f058fb77.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/routine/attachment/popupForm.vue":()=>t(()=>import("./popupForm-eaa33f01.js"),["assets/popupForm-eaa33f01.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-f058fb77.js"]),"/src/views/backend/routine/config/add.vue":()=>t(()=>import("./add-4129e0de.js").then(s=>s.b),["assets/add-4129e0de.js","assets/vue-1688d898.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/routine/config/index.vue":()=>t(()=>import("./index-d3084819.js"),["assets/index-d3084819.js","assets/vue-1688d898.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/add-4129e0de.js","assets/validate-74c566c8.js"]),"/src/views/backend/security/dataRecycle/index.vue":()=>t(()=>import("./index-70bb884e.js"),["assets/index-70bb884e.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-d8ee599e.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/security/dataRecycle/popupForm.vue":()=>t(()=>import("./popupForm-d8ee599e.js"),["assets/popupForm-d8ee599e.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/security/dataRecycleLog/index.vue":()=>t(()=>import("./index-59a4c377.js"),["assets/index-59a4c377.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/info-a463e783.js"]),"/src/views/backend/security/dataRecycleLog/info.vue":()=>t(()=>import("./info-a463e783.js").then(s=>s.a),["assets/info-a463e783.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/security/sensitiveData/index.vue":()=>t(()=>import("./index-38c024eb.js"),["assets/index-38c024eb.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-3e11501d.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/security/sensitiveData/popupForm.vue":()=>t(()=>import("./popupForm-3e11501d.js"),["assets/popupForm-3e11501d.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/security/sensitiveDataLog/index.vue":()=>t(()=>import("./index-bdffbe0d.js"),["assets/index-bdffbe0d.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/info-d300cc72.js"]),"/src/views/backend/security/sensitiveDataLog/info.vue":()=>t(()=>import("./info-d300cc72.js").then(s=>s.a),["assets/info-d300cc72.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/user/group/index.vue":()=>t(()=>import("./index-01838657.js"),["assets/index-01838657.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-adb1e2a4.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/group/popupForm.vue":()=>t(()=>import("./popupForm-adb1e2a4.js"),["assets/popupForm-adb1e2a4.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/moneyLog/index.vue":()=>t(()=>import("./index-2b6a1423.js"),["assets/index-2b6a1423.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-d2244da7.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/moneyLog/popupForm.vue":()=>t(()=>import("./popupForm-d2244da7.js").then(s=>s.p),["assets/popupForm-d2244da7.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/rule/index.vue":()=>t(()=>import("./index-31849dfe.js"),["assets/index-31849dfe.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-83efb52b.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/rule/popupForm.vue":()=>t(()=>import("./popupForm-83efb52b.js"),["assets/popupForm-83efb52b.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/scoreLog/index.vue":()=>t(()=>import("./index-c45f12a5.js"),["assets/index-c45f12a5.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-62b871fe.js","assets/index-b69fdefb.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/scoreLog/popupForm.vue":()=>t(()=>import("./popupForm-62b871fe.js").then(s=>s.p),["assets/popupForm-62b871fe.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/index-f058fb77.js","assets/validate-74c566c8.js"]),"/src/views/backend/user/user/index.vue":()=>t(()=>import("./index-fc8a2636.js"),["assets/index-fc8a2636.js","assets/index-c183c9c5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js","assets/popupForm-423d14b5.js","assets/validate-74c566c8.js","assets/index-b69fdefb.js"]),"/src/views/backend/user/user/popupForm.vue":()=>t(()=>import("./popupForm-423d14b5.js"),["assets/popupForm-423d14b5.js","assets/vue-1688d898.js","assets/index-c7cbf40d.js","assets/validate-74c566c8.js","assets/index-b69fdefb.js","assets/index-c183c9c5.js","assets/controllerUrls-941681c3.js","assets/index-f058fb77.js"])}),e,E.name);const r="/"+E.name+"/",o=p(e,r,r);w().setTabsViewRoutes(o)},p=(e,n="/",r="/",o="admin")=>{const a=[],s=[];for(const i in e)if(e[i].extend!="add_rules_only")if(e[i].type=="menu"||e[i].type=="menu_dir"){if(e[i].type=="menu_dir"&&e[i].children&&!e[i].children.length)continue;const v=e[i].menu_type=="link"||e[i].menu_type=="iframe"?e[i].url:n+e[i].path;let m=[];e[i].children&&e[i].children.length>0&&(m=p(e[i].children,n,v)),a.push({path:v,name:e[i].name,component:e[i].component,meta:{title:e[i].title,icon:e[i].icon,keepalive:e[i].keepalive,type:e[i].menu_type},children:m})}else s.push(n+e[i].name);return s.length&&(o=="admin"?w().setAuthNode(r,s):o=="user"&&f().setAuthNode(r,s)),a},l=(e,n,r)=>{for(const o in n)n[o].extend!="add_menu_only"&&(n[o].type=="menu"&&(n[o].menu_type=="tab"&&e[n[o].component]||n[o].menu_type=="iframe")&&y(e,n[o],r),n[o].children&&n[o].children.length>0&&l(e,n[o].children,r))},y=(e,n,r)=>{let o="",a;n.menu_type=="iframe"?(o=(D()?"/admin":"/user")+"/iframe/"+encodeURIComponent(n.url),a=()=>t(()=>import("./iframe-3890b2b8.js"),["assets/iframe-3890b2b8.js","assets/layout-a659beef.js","assets/index-c7cbf40d.js","assets/vue-1688d898.js"])):(o=r?n.path:"/"+n.path,a=e[n.component]);const s={path:o,name:n.name,component:a,meta:{title:n.title,extend:n.extend,icon:n.icon,keepalive:n.keepalive,menu_type:n.menu_type,type:n.type,url:n.url,addtab:!0}};r?d.addRoute(r,s):d.addRoute(s)};export{M as a,A as c,P as g,S as h,N as o,V as r,F as s,f as u};