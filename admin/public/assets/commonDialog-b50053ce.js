import{s as o}from"./store-754b1f1d.js";import f from"./installConflict-54250aee.js";import g from"./commonDone-b054ff97.js";import C from"./uploadInstall-c5d16eac.js";import k from"./confirmFileConflict-6b758ccb.js";import{h as y,p as t,l as a,q as i,C as c,k as e,P as v,M as l,B as m,t as s,T as x}from"./vue-836dfa82.js";import{_ as D}from"./index-3038d132.js";import"./index-f673e7fe.js";import"./index-9c38993b.js";import"./index-a50cf3de.js";import"./controllerUrls-941681c3.js";import"./index-6e54af73.js";const h=["element-loading-text"],I=y({__name:"commonDialog",setup(T){return(r,n)=>{const d=s("el-scrollbar"),p=s("el-dialog"),_=x("loading");return t(),a("div",null,[i(p,{"close-on-press-escape":e(o).common.quickClose,title:e(o).common.dialogTitle,"close-on-click-modal":e(o).common.quickClose,modelValue:e(o).dialog.common,"onUpdate:modelValue":n[0]||(n[0]=u=>e(o).dialog.common=u),class:"common-dialog"},{default:c(()=>[i(d,{height:500},{default:c(()=>[e(o).common.type=="loading"?v((t(),a("div",{"element-loading-text":e(o).common.loadingTitle?r.$t("module.stateTitle "+e(o).common.loadingTitle):"",key:e(o).common.loadingComponentKey,class:"common-loading"},null,8,h)),[[_,!0]]):l("",!0),e(o).common.type=="InstallConflict"?(t(),m(f,{key:1})):l("",!0),e(o).common.type=="disableConfirmConflict"?(t(),m(k,{key:2})):l("",!0),e(o).common.type=="done"?(t(),m(g,{key:3})):l("",!0),e(o).common.type=="uploadInstall"?(t(),m(C,{key:4})):l("",!0)]),_:1})]),_:1},8,["close-on-press-escape","title","close-on-click-modal","modelValue"])])}}});const $=D(I,[["__scopeId","data-v-e271020e"]]);export{$ as default};
