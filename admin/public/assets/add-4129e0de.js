import{h as $,Z as j,r as M,p as v,B as h,C as s,P as q,l as I,L as x,K as _,k as a,o as D,q as n,m as B,a1 as f,a0 as b,t as y,T as w}from"./vue-1688d898.js";import{F as i}from"./index-b69fdefb.js";import{i as V}from"./index-c183c9c5.js";import{b as p,c as W}from"./validate-74c566c8.js";import{f as C,l as G,_ as R}from"./index-c7cbf40d.js";const g="/admin/routine.config/",k=new Map([["index",g+"index"],["add",g+"add"],["edit",g+"edit"],["del",g+"del"]]);function oe(){return C({url:k.get("index"),method:"get"})}function H(d,u){return C({url:k.get(d),method:"post",data:u},{showSuccessMessage:!0})}function ae(d){return C({url:k.get("del"),method:"DELETE",params:{ids:d}},{showSuccessMessage:!0})}function ne(d,u){return C({url:g+"sendTestMail",method:"POST",data:Object.assign({},d,{testMail:u})},{showSuccessMessage:!0})}const Z={class:"title"},J=$({__name:"add",props:{modelValue:{type:Boolean,default:!1},configGroup:{default:()=>({})}},emits:["update:modelValue"],setup(d,{emit:u}){const T=()=>{u("update:modelValue",!1)},{t:l}=G(),m=j(),t=M({inputTypes:{},labelWidth:160,submitLoading:!1,addConfig:{name:"",group:"",title:"",tip:"",type:"",content:`key1=value1
key2=value2`,rule:"",extend:"",weigh:0}}),K=M({name:[p({name:"required",title:l("routine.config.Variable name")}),p({name:"varName",message:l("Please enter the correct field",{field:l("routine.config.Variable name")})})],group:[p({name:"required",trigger:"change",message:l("Please select field",{field:l("routine.config.Variable grouping")})})],title:[p({name:"required",title:l("routine.config.Variable title")})],type:[p({name:"required",trigger:"change",message:l("Please select field",{field:l("routine.config.Variable type")})})],weigh:[p({name:"integer",title:l("routine.config.number")})]}),O=()=>{let r={};for(const e in V)V[e]!="remoteSelect"&&(r[V[e]]=V[e]);t.inputTypes=r};let P=["radio","checkbox","select","selects"];const A=r=>{let e=document.querySelector(".add-item-content");e&&(P.includes(r)?e.style.display="flex":e.style.display="none")},c=r=>{r&&r.validate(e=>{e&&H("add",t.addConfig).then(S=>{u("update:modelValue",!1)})})};return O(),(r,e)=>{const S=y("el-form"),E=y("el-scrollbar"),U=y("el-button"),z=y("el-dialog"),F=w("drag"),L=w("zoom"),N=w("blur");return v(),h(z,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":d.modelValue,onClose:T},{header:s(()=>[q((v(),I("div",Z,[x(_(a(l)("routine.config.Add configuration item")),1)])),[[F,[".ba-operate-dialog",".el-dialog__header"]],[L,".ba-operate-dialog"]])]),footer:s(()=>[D("div",{style:B("width: calc(100% - "+t.labelWidth/1.8+"px)")},[n(U,{onClick:T},{default:s(()=>[x(_(a(l)("Cancel")),1)]),_:1}),q((v(),h(U,{loading:t.submitLoading,onClick:e[14]||(e[14]=o=>c(m.value)),type:"primary"},{default:s(()=>[x(_(a(l)("add")),1)]),_:1},8,["loading"])),[[N]])],4)]),default:s(()=>[n(E,{class:"ba-table-form-scrollbar"},{default:s(()=>[D("div",{class:"ba-operate-form ba-add-form",style:B("width: calc(100% - "+t.labelWidth/2+"px)")},[n(S,{ref_key:"formRef",ref:m,onKeyup:e[13]||(e[13]=f(o=>c(m.value),["enter"])),rules:K,model:t.addConfig,"label-position":"left","label-width":120},{default:s(()=>[n(i,{label:a(l)("routine.config.Variable name"),type:"string",modelValue:t.addConfig.name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.addConfig.name=o),prop:"name"},null,8,["label","modelValue"]),n(i,{label:a(l)("routine.config.Variable grouping"),type:"select",modelValue:t.addConfig.group,"onUpdate:modelValue":e[1]||(e[1]=o=>t.addConfig.group=o),prop:"group",data:{content:d.configGroup}},null,8,["label","modelValue","data"]),n(i,{label:a(l)("routine.config.Variable title"),type:"string",modelValue:t.addConfig.title,"onUpdate:modelValue":e[2]||(e[2]=o=>t.addConfig.title=o),prop:"title"},null,8,["label","modelValue"]),n(i,{label:a(l)("routine.config.Variable description"),type:"string",modelValue:t.addConfig.tip,"onUpdate:modelValue":e[3]||(e[3]=o=>t.addConfig.tip=o)},null,8,["label","modelValue"]),n(i,{label:a(l)("routine.config.Variable type"),type:"select",modelValue:t.addConfig.type,"onUpdate:modelValue":e[4]||(e[4]=o=>t.addConfig.type=o),prop:"type",data:{content:t.inputTypes},"input-attr":{onChange:A}},null,8,["label","modelValue","data","input-attr"]),n(i,{class:"add-item-content",label:a(l)("routine.config.Dictionary data"),type:"textarea",onKeyup:[e[5]||(e[5]=f(b(()=>{},["stop"]),["enter"])),e[6]||(e[6]=f(b(o=>c(m.value),["ctrl"]),["enter"]))],modelValue:t.addConfig.content,"onUpdate:modelValue":e[7]||(e[7]=o=>t.addConfig.content=o),"input-attr":{rows:3,placeholder:a(l)("routine.config.One line at a time, without quotation marks, for example: key1=value1")}},null,8,["label","modelValue","input-attr"]),n(i,{label:a(l)("routine.config.Validation rules"),type:"selects",modelValue:t.addConfig.rule,"onUpdate:modelValue":e[8]||(e[8]=o=>t.addConfig.rule=o),data:{content:a(W)}},null,8,["label","modelValue","data"]),n(i,{label:a(l)("routine.config.Extended properties"),type:"textarea",onKeyup:[e[9]||(e[9]=f(b(()=>{},["stop"]),["enter"])),e[10]||(e[10]=f(b(o=>c(m.value),["ctrl"]),["enter"]))],modelValue:t.addConfig.extend,"onUpdate:modelValue":e[11]||(e[11]=o=>t.addConfig.extend=o),"input-attr":{placeholder:a(l)("routine.config.One attribute per line without quotation marks")}},null,8,["label","modelValue","input-attr"]),n(i,{label:a(l)("weigh"),type:"number",modelValue:t.addConfig.weigh,"onUpdate:modelValue":e[12]||(e[12]=o=>t.addConfig.weigh=o),modelModifiers:{number:!0},prop:"weigh"},null,8,["label","modelValue"])]),_:1},8,["rules","model"])],4)]),_:1})]),_:1},8,["model-value"])}}});const Q=R(J,[["__scopeId","data-v-3d1b0464"]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{Q as A,ne as a,ie as b,ae as d,oe as i,H as p};