import{h as D,Z as T,r as z,A as E,p as d,B as p,C as m,P as c,l as K,L as _,K as h,k as e,o as w,q as r,m as P,a1 as V,a0 as k,M as N,U as $,aj as W,t as s,T as b}from"./vue-836dfa82.js";import{k as j,l as L,_ as M}from"./index-3038d132.js";import{b as u,r as R}from"./validate-43384adb.js";import{F as i}from"./index-9c38993b.js";import{b as G}from"./controllerUrls-941681c3.js";import"./index-a50cf3de.js";import"./index-6e54af73.js";const Z={class:"title"},H=D({__name:"popupForm",setup(J){const x=j(),f=T(),a=W("baTable"),{t:l}=L(),v=z({username:[u({name:"required",title:l("auth.admin.username")}),u({name:"account"})],nickname:[u({name:"required",title:l("auth.admin.nickname")})],group_arr:[u({name:"required",message:l("Please select field",{field:l("auth.admin.grouping")})})],email:[u({name:"email",message:l("Please enter the correct field",{field:l("auth.admin.mailbox")})})],mobile:[u({name:"mobile",message:l("Please enter the correct field",{field:l("auth.admin.mobile")})})],password:[{validator:(g,o,n)=>{if(a.form.operate=="add"){if(!o)return n(new Error(l("Please input field",{field:l("auth.admin.Password")})))}else if(!o)return n();return R(o)?n():n(new Error(l("validate.Please enter the correct password")))},trigger:"blur"}]});return E(()=>a.form.operate,g=>{v.password[0].required=g=="add"}),(g,o)=>{const n=s("el-input"),C=s("el-form-item"),U=s("el-form"),S=s("el-scrollbar"),y=s("el-button"),F=s("el-dialog"),I=b("drag"),q=b("zoom"),A=b("loading"),B=b("blur");return d(),p(F,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(a).form.operate,onClose:e(a).toggleForm,"destroy-on-close":!0},{header:m(()=>[c((d(),K("div",Z,[_(h(e(a).form.operate?e(l)(e(a).form.operate):""),1)])),[[I,[".ba-operate-dialog",".el-dialog__header"]],[q,".ba-operate-dialog"]])]),footer:m(()=>[w("div",{style:P("width: calc(100% - "+e(a).form.labelWidth/1.8+"px)")},[r(y,{onClick:o[12]||(o[12]=t=>e(a).toggleForm(""))},{default:m(()=>[_(h(e(l)("Cancel")),1)]),_:1}),c((d(),p(y,{loading:e(a).form.submitLoading,onClick:o[13]||(o[13]=t=>e(a).onSubmit(f.value)),type:"primary"},{default:m(()=>[_(h(e(a).form.operateIds&&e(a).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[B]])],4)]),default:m(()=>[c((d(),p(S,{class:"ba-table-form-scrollbar"},{default:m(()=>[w("div",{class:$(["ba-operate-form","ba-"+e(a).form.operate+"-form"]),style:P("width: calc(100% - "+e(a).form.labelWidth/2+"px)")},[e(a).form.loading?N("",!0):(d(),p(U,{key:0,ref_key:"formRef",ref:f,onKeyup:o[11]||(o[11]=V(t=>e(a).onSubmit(f.value),["enter"])),model:e(a).form.items,"label-position":"right","label-width":e(a).form.labelWidth+"px",rules:v},{default:m(()=>[r(i,{label:e(l)("auth.admin.username"),modelValue:e(a).form.items.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e(a).form.items.username=t),type:"string",prop:"username",placeholder:e(l)("auth.admin.Administrator login")},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.nickname"),modelValue:e(a).form.items.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).form.items.nickname=t),type:"string",prop:"nickname",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.nickname")})},null,8,["label","modelValue","placeholder"]),(d(),p(i,{label:e(l)("auth.admin.grouping"),modelValue:e(a).form.items.group_arr,"onUpdate:modelValue":o[2]||(o[2]=t=>e(a).form.items.group_arr=t),prop:"group_arr",type:"remoteSelect",key:"group-"+e(a).form.items.id,"input-attr":{multiple:!0,params:{isTree:!0,absoluteAuth:e(x).id==e(a).form.items.id?0:1},field:"name","remote-url":e(G)+"index",placeholder:e(l)("Click Select")}},null,8,["label","modelValue","input-attr"])),r(i,{label:e(l)("auth.admin.head portrait"),type:"image",modelValue:e(a).form.items.avatar,"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).form.items.avatar=t)},null,8,["label","modelValue"]),r(i,{label:e(l)("auth.admin.mailbox"),prop:"email",modelValue:e(a).form.items.email,"onUpdate:modelValue":o[4]||(o[4]=t=>e(a).form.items.email=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mailbox")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.mobile"),prop:"mobile",modelValue:e(a).form.items.mobile,"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).form.items.mobile=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mobile")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.Password"),prop:"password",modelValue:e(a).form.items.password,"onUpdate:modelValue":o[6]||(o[6]=t=>e(a).form.items.password=t),type:"password",placeholder:e(a).form.operate=="add"?e(l)("Please input field",{field:e(l)("auth.admin.Password")}):e(l)("auth.admin.Please leave blank if not modified")},null,8,["label","modelValue","placeholder"]),r(C,{prop:"motto",label:e(l)("auth.admin.Personal signature")},{default:m(()=>[r(n,{onKeyup:[o[7]||(o[7]=V(k(()=>{},["stop"]),["enter"])),o[8]||(o[8]=V(k(t=>e(a).onSubmit(f.value),["ctrl"]),["enter"]))],modelValue:e(a).form.items.motto,"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).form.items.motto=t),type:"textarea",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(i,{label:e(l)("state"),modelValue:e(a).form.items.status,"onUpdate:modelValue":o[10]||(o[10]=t=>e(a).form.items.status=t),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[A,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}});const oe=M(H,[["__scopeId","data-v-4b9195d8"]]);export{oe as default};
