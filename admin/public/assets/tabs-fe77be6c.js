import{s as t}from"./store-754b1f1d.js";import{i as I,h as B,m as D,c as v}from"./index-f673e7fe.js";import{h as L,_ as S}from"./index-3038d132.js";import{h as U,p as s,l as o,P as $,k as a,B as r,C as i,R as p,Q as u,t as n,T as z,o as l,q as g,L as m,K as c,M as E}from"./vue-836dfa82.js";const q=["onClick"],A={class:"goods-footer"},F={key:0,class:"goods-tag"},K={class:"goods-title"},M={class:"goods-data"},P={class:"download-count"},Q={key:0,class:"goods-price"},R={class:"original-price"},j={class:"current-price"},G={key:1,class:"goods-price"},H=U({__name:"tabs",setup(J){const h=()=>{I()};return(b,y)=>{const k=n("el-image"),f=n("el-tag"),T=n("Icon"),C=n("el-empty"),w=n("el-tab-pane"),x=n("el-tabs"),N=z("loading");return s(),o("div",null,[$((s(),r(x,{"element-loading-text":b.$t("module.Loading"),modelValue:a(t).table.params.activeTab,"onUpdate:modelValue":y[0]||(y[0]=d=>a(t).table.params.activeTab=d),type:"border-card",class:"store-tabs",onTabChange:h},{default:i(()=>[(s(!0),o(p,null,u(a(t).table.category,d=>(s(),r(w,{name:d.id.toString(),key:d.id,label:d.name,class:"store-tab-pane"},{default:i(()=>[a(t).table.modules[a(t).table.params.activeTab]&&a(t).table.modules[a(t).table.params.activeTab].length>0?(s(!0),o(p,{key:0},u(a(t).table.modules[a(t).table.params.activeTab],e=>(s(),o("div",{class:"goods",key:e.uid},[l("div",{onClick:_=>a(B)(e.uid),class:"goods-item suspension"},[g(k,{loading:"lazy",fit:"contain",class:"goods-img",src:e.logo?e.logo:a(L)("/static/images/local-module-logo.png")},null,8,["src"]),l("div",A,[e.tags&&e.tags.length>0?(s(),o("div",F,[(s(!0),o(p,null,u(e.tags,(_,V)=>(s(),r(f,{type:_.type,key:V},{default:i(()=>[m(c(_.name),1)]),_:2},1032,["type"]))),128))])):E("",!0),l("div",K,c(e.title),1),l("div",M,[l("span",P,[g(T,{name:"fa fa-download",color:"#c0c4cc",size:"13"}),m(" "+c(e.downloads?e.downloads:"-"),1)]),e.state===a(D).UNINSTALLED?(s(),o("span",Q,[l("span",R,c(a(v)(e.original_price,e.currency_select)),1),l("span",j,c(a(v)(e.present_price,e.currency_select)),1)])):(s(),o("div",G,[g(f,{effect:"dark",type:e.stateTag.type},{default:i(()=>[m(c(e.stateTag.text),1)]),_:2},1032,["type"])]))])])],8,q)]))),128)):(s(),r(C,{key:1,class:"modules-empty",description:b.$t("module.No more")},null,8,["description"]))]),_:2},1032,["name","label"]))),128))]),_:1},8,["element-loading-text","modelValue"])),[[N,a(t).loading.table]])])}}});const Z=S(H,[["__scopeId","data-v-3f1791bf"]]);export{Z as default};
