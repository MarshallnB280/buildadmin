import{b as u,T as c,a as m}from"./index-a50cf3de.js";import{h as p}from"./controllerUrls-941681c3.js";import d from"./popupForm-524af0fd.js";import{l as b,X as f,aa as h}from"./index-3038d132.js";import{h as i,Z as _,z as g,p as o,l as k,k as a,B as w,M as y,q as n,t as v,an as M}from"./vue-836dfa82.js";import"./index-6e54af73.js";import"./index-9c38993b.js";import"./validate-43384adb.js";const T={class:"default-main ba-table-box"},q=i({name:"user/rule"}),P=i({...q,setup(x){const{t:e}=b(),l=_(),t=new u(new f(p),{expandAll:!0,column:[{type:"selection",align:"center",operator:!1},{label:e("auth.menu.title"),prop:"title",align:"left",width:"200"},{label:e("auth.menu.Icon"),prop:"icon",align:"center",width:"60",render:"icon",default:"el-icon-Minus"},{label:e("auth.menu.name"),prop:"name",align:"center","show-overflow-tooltip":!0},{label:e("auth.menu.type"),prop:"type",align:"center",render:"tag",custom:{menu:"danger",menu_dir:"success",route:"info"},replaceValue:{menu:e("user.rule.Member center menu items"),menu_dir:e("user.rule.Member center menu contents"),route:e("user.rule.Normal routing")}},{label:e("state"),prop:"status",align:"center",width:"80",render:"switch"},{label:e("updatetime"),prop:"updatetime",align:"center",width:"160",render:"datetime"},{label:e("createtime"),prop:"createtime",align:"center",width:"160",render:"datetime"},{label:e("operate"),align:"center",width:"130",render:"buttons",buttons:h()}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{type:"route",menu_type:"tab",extend:"none",keepalive:0,status:"1",icon:"el-icon-Minus"}},{requestEdit:()=>{t.form.items&&!t.form.items.icon&&(t.form.items.icon="el-icon-Minus")}});return M("baTable",t),g(()=>{var r;t.table.ref=l.value,t.mount(),(r=t.getIndex())==null||r.then(()=>{t.dragSort()})}),(r,B)=>{const s=v("el-alert");return o(),k("div",T,[a(t).table.remark?(o(),w(s,{key:0,class:"ba-table-alert",title:a(t).table.remark,type:"info","show-icon":""},null,8,["title"])):y("",!0),n(c,{buttons:["refresh","add","edit","delete","unfold","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("auth.menu.Rule title")})},null,8,["quick-search-placeholder"]),n(m,{ref_key:"tableRef",ref:l,pagination:!1},null,512),n(d)])}}});export{P as default};
