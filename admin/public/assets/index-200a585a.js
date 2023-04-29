import{h as S,Z as G,r as O,z as L,p as a,l as _,P as z,B as f,C as u,q as p,k as m,au as R,a1 as b,R as h,Q as F,M as v,t as g,T as Q,a0 as C,o as K,K as T,L as A,E as Z,ab as H}from"./vue-836dfa82.js";import{F as $}from"./index-9c38993b.js";import{A as J,i as W,p as X,d as Y,a as ee}from"./add-e3e0277f.js";import{r as te}from"./router-1c38d888.js";import{b as oe}from"./validate-43384adb.js";import{l as ne,u as ae,n as M,_ as re}from"./index-3038d132.js";import"./index-a50cf3de.js";import"./controllerUrls-941681c3.js";import"./index-6e54af73.js";const le={class:"default-main"},ie={class:"config-form-item"},se={class:"config-form-item-name"},de={class:"del-config-form-item"},ue={key:0,class:"send-test-mail"},ce=["onClick"],fe=S({name:"routine/config"}),pe=S({...fe,setup(me){const{t:s}=ne(),B=ae(),y=G(),e=O({loading:!0,config:[],remark:"",configGroup:{},activeTab:"",showAddForm:!1,rules:{},form:{},quickEntrance:{},formKey:M()}),U=()=>{W().then(i=>{e.config=i.data.list,e.remark=i.data.remark,e.configGroup=i.data.configGroup,e.quickEntrance=i.data.quickEntrance,e.loading=!1;for(const n in e.configGroup){e.activeTab=n;break}let o={},r={};for(const n in e.config)for(const l in e.config[n].list){if(e.config[n].list[l].rule){let V=e.config[n].list[l].rule.split(","),x=[];V.forEach(w=>{x.push(oe({name:w,title:e.config[n].list[l].title}))}),r=Object.assign(r,{[e.config[n].list[l].name]:x})}o[e.config[n].list[l].name]=e.config[n].list[l].type=="number"?parseFloat(e.config[n].list[l].value):e.config[n].list[l].value}e.form=o,e.rules=r,e.formKey=M()}).catch(()=>{e.loading=!1})},D=i=>{if(i=="add_config")return e.showAddForm=!0,!1},k=i=>{i&&i.validate(o=>{if(o){const r={};for(const n in e.config)if(n==e.activeTab)for(const l in e.config[n].list)r[e.config[n].list[l].name]=e.form[e.config[n].list[l].name]??"";X("edit",r).then(()=>{for(const n in B.$state)r[n]&&B.$state[n]!=r[n]&&(B.$state[n]=r[n])})}})},I=i=>{Y([i.id]).then(()=>{U()})},q=()=>{if(!e.form.smtp_server||!e.form.smtp_port||!e.form.smtp_user||!e.form.smtp_pass||!e.form.smtp_sender_mail)return Z({type:"error",message:s("routine.config.Please enter the correct mail configuration")}),!1;H.prompt(s("routine.config.Please enter the recipient email address"),s("routine.config.Test mail sending"),{confirmButtonText:s("routine.config.send out"),cancelButtonText:s("Cancel"),inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:s("routine.config.Please enter the correct email address"),beforeClose:(i,o,r)=>{i==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText=s("routine.config.Sending"),ee(e.form,o.inputValue).then(n=>{r()}).catch(n=>{r()})):r()}})};return L(()=>{U()}),(i,o)=>{const r=g("Icon"),n=g("el-popconfirm"),l=g("el-button"),V=g("el-tab-pane"),x=g("el-tabs"),w=g("el-col"),N=g("el-card"),P=g("el-row"),j=Q("loading");return a(),_("div",le,[z((a(),f(P,{gutter:20},{default:u(()=>[p(w,{class:"xs-mb-20",xs:24,sm:16},{default:u(()=>[e.loading?v("",!0):(a(),f(m(R),{ref_key:"formRef",ref:y,onKeyup:o[7]||(o[7]=b(d=>k(y.value),["enter"])),model:e.form,rules:e.rules,"label-position":"top",key:e.formKey},{default:u(()=>[p(x,{modelValue:e.activeTab,"onUpdate:modelValue":o[6]||(o[6]=d=>e.activeTab=d),type:"border-card","before-leave":D},{default:u(()=>[(a(!0),_(h,null,F(e.config,(d,E)=>(a(),f(V,{class:"config-tab-pane",key:E,name:E,label:d.title},{default:u(()=>[(a(!0),_(h,null,F(d.list,(t,ge)=>(a(),_("div",ie,[t.group==e.activeTab?(a(),_(h,{key:0},[t.type=="number"?(a(),f($,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,modelModifiers:{number:!0},"input-attr":{placeholder:t.tip},data:{tip:t.tip},attr:Object.assign({prop:t.name},t.extend),key:"number-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","input-attr","data","attr"])):t.type=="editor"?(a(),f($,{label:t.title,type:t.type,onKeyup:[o[0]||(o[0]=b(C(()=>{},["stop"]),["enter"])),o[1]||(o[1]=b(C(c=>k(y.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,"input-attr":{placeholder:t.tip,style:{zIndex:99}},data:{tip:t.tip},attr:Object.assign({prop:t.name},t.extend),key:"editor-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","input-attr","data","attr"])):t.type=="textarea"?(a(),f($,{label:t.title,type:t.type,onKeyup:[o[2]||(o[2]=b(C(()=>{},["stop"]),["enter"])),o[3]||(o[3]=b(C(c=>k(y.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,"input-attr":{placeholder:t.tip,rows:3},data:{tip:t.tip},attr:Object.assign({prop:t.name},t.extend),key:"textarea-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","input-attr","data","attr"])):(a(),f($,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,"input-attr":{placeholder:t.tip},data:{tip:t.tip,content:t.content?t.content:{}},attr:Object.assign({prop:t.name},t.extend),key:"other-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","input-attr","data","attr"])),K("div",se,"$"+T(t.name),1),K("div",de,[t.allow_del?(a(),f(n,{key:0,onConfirm:c=>I(t),confirmButtonText:m(s)("delete"),title:m(s)("routine.config.Are you sure to delete the configuration item?")},{reference:u(()=>[p(r,{class:"close-icon",size:"15",name:"el-icon-Close"})]),_:2},1032,["onConfirm","confirmButtonText","title"])):v("",!0)])],64)):v("",!0)]))),256)),d.name=="mail"?(a(),_("div",ue,[p(l,{onClick:o[4]||(o[4]=t=>q())},{default:u(()=>[A(T(m(s)("routine.config.Test mail sending")),1)]),_:1})])):v("",!0),p(l,{type:"primary",onClick:o[5]||(o[5]=t=>k(y.value))},{default:u(()=>[A(T(m(s)("Save")),1)]),_:1})]),_:2},1032,["name","label"]))),128)),p(V,{name:"add_config",class:"config-tab-pane config-tab-pane-add",label:m(s)("routine.config.Add configuration item")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model","rules"]))]),_:1}),p(w,{xs:24,sm:8},{default:u(()=>[p(N,{header:m(s)("routine.config.Quick configuration entry")},{default:u(()=>[(a(!0),_(h,null,F(e.quickEntrance,d=>(a(),f(l,{class:"config_quick_entrance"},{default:u(()=>[K("div",{onClick:E=>m(te)(d.value)},T(d.key),9,ce)]),_:2},1024))),256))]),_:1},8,["header"])]),_:1})]),_:1})),[[j,e.loading]]),e.loading?v("",!0):(a(),f(J,{key:0,modelValue:e.showAddForm,"onUpdate:modelValue":o[8]||(o[8]=d=>e.showAddForm=d),"config-group":e.configGroup},null,8,["modelValue","config-group"]))])}}});const Ce=re(pe,[["__scopeId","data-v-529864f6"]]);export{Ce as default};
