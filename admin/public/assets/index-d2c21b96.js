import{d as s}from"./controllerUrls-941681c3.js";import{_ as c}from"./popupForm.vue_vue_type_script_setup_true_lang-4e171bcf.js";import{b as m,T as p,a as d}from"./index-a50cf3de.js";import{l as b,X as f,aa as h}from"./index-3038d132.js";import{h as i,Z as _,z as k,p as o,l as g,k as n,B as w,M as y,q as l,t as v,an as x}from"./vue-836dfa82.js";import"./index-9c38993b.js";import"./validate-43384adb.js";import"./index-6e54af73.js";const q={class:"default-main ba-table-box"},T=i({name:"auth/menu"}),$=i({...T,setup(M){const{t:e}=b(),r=_(),t=new m(new f(s),{expandAll:!1,dblClickNotEditColumn:[void 0,"keepalive","status"],column:[{type:"selection",align:"center"},{label:e("auth.menu.title"),prop:"title",align:"left",width:"200"},{label:e("auth.menu.Icon"),prop:"icon",align:"center",width:"60",render:"icon",default:"el-icon-Minus"},{label:e("auth.menu.name"),prop:"name",align:"center","show-overflow-tooltip":!0},{label:e("auth.menu.type"),prop:"type",align:"center",render:"tag",custom:{menu:"danger",menu_dir:"success",button:"info"},replaceValue:{menu:e("auth.menu.type menu"),menu_dir:e("auth.menu.type menu_dir"),button:e("auth.menu.type button")}},{label:e("auth.menu.cache"),prop:"keepalive",align:"center",width:"80",render:"switch"},{label:e("state"),prop:"status",align:"center",width:"80",render:"switch"},{label:e("updatetime"),prop:"updatetime",align:"center",width:"160",render:"datetime"},{label:e("operate"),align:"center",width:"130",render:"buttons",buttons:h()}],dragSortLimitField:"pid"},{defaultItems:{type:"menu",menu_type:"tab",extend:"none",keepalive:0,status:"1",icon:"el-icon-Minus"}},{getIndex:()=>{var a;t.table.expandAll=!!((a=t.table.filter)!=null&&a.quick_search)},requestEdit:()=>{t.form.items&&!t.form.items.icon&&(t.form.items.icon="el-icon-Minus")}});return x("baTable",t),k(()=>{var a;t.table.ref=r.value,t.mount(),(a=t.getIndex())==null||a.then(()=>{t.dragSort()})}),(a,B)=>{const u=v("el-alert");return o(),g("div",q,[n(t).table.remark?(o(),w(u,{key:0,class:"ba-table-alert",title:n(t).table.remark,type:"info","show-icon":""},null,8,["title"])):y("",!0),l(p,{buttons:["refresh","add","edit","delete","unfold","quickSearch","columnDisplay"],"quick-search-placeholder":n(e)("quick Search Placeholder",{fields:n(e)("auth.menu.title")})},null,8,["quick-search-placeholder"]),l(d,{ref_key:"tableRef",ref:r,pagination:!1},null,512),l(c)])}}});export{$ as default};