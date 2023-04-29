import{L as d,F as u,r as f,u as n,f as o,n as m}from"./index-3038d132.js";import{d as p,r as h}from"./vue-836dfa82.js";const s=p("baAccount",{state:()=>({id:0,username:"",nickname:"",email:"",mobile:"",avatar:"",gender:0,birthday:"",money:0,score:0,lastlogintime:"",lastloginip:"",jointime:"",motto:"",token:"",refreshToken:""}),actions:{dataFill(e){this.$state=e},removeToken(){this.token="",this.refreshToken=""},getGenderIcon(){let e={name:"fa fa-transgender-alt",color:"var(--el-text-color-secondary)"};switch(this.gender){case 1:e={name:"fa fa-mars-stroke-v",color:"var(--el-color-primary)"};break;case 2:e={name:"fa fa-mars-stroke",color:"var(--el-color-danger)"};break}return e},setToken(e,t){this[t]=e},getToken(e="auth"){return e==="auth"?this.token:this.refreshToken},logout(){k().then(e=>{e.code==1&&(d.remove(u),f.go(0))})}},persist:{key:u}}),c="/api/user/",g="/api/common/captcha",r="/admin/module/",i="/api/v4.store/";function T(e={}){return o({url:r+"index",method:"get",params:e})}function y(e={}){const t=n();return o({url:t.apiUrl+i+"modules",method:"get",params:e})}function U(e){const t=s(),a=n();return o({url:a.apiUrl+i+"info",method:"get",params:e},{anotherToken:t.getToken("auth")})}function k(){const e=n(),t=s();return o({url:e.apiUrl+c+"logout",method:"POST",data:{refresh_token:t.getToken("refresh")}})}function A(){return n().apiUrl+g+"?server=1"}function I(e,t={}){const a=n();return o({url:a.apiUrl+c+"checkIn",data:t,method:e},{showSuccessMessage:!0})}function S(){const e=s(),t=n();return o({url:t.apiUrl+c+"info",method:"get"},{anotherToken:e.getToken("auth")})}function v(e={}){const t=s(),a=n();return o({url:a.apiUrl+i+"order",method:"post",params:e},{anotherToken:t.getToken("auth")})}function M(e,t){const a=s(),l=n();return o({url:l.apiUrl+i+"pay",method:"post",params:{order_id:e,pay_type:t}},{anotherToken:a.getToken("auth"),showSuccessMessage:!0})}function w(e){const t=s(),a=n();return o({url:a.apiUrl+"/api/pay/check",method:"get",params:{sn:e}},{anotherToken:t.getToken("auth"),showCodeMessage:!1})}function x(e){return o({url:r+"state",method:"get",params:{uid:e}})}function _(e,t,a={}){const l=s();return o({url:r+"install",method:"post",params:{uid:e,order_id:t,token:l.getToken("auth")},data:{extend:a}},{showCodeMessage:!1})}function L(e,t,a={}){const l=s();return o({url:r+"update",method:"POST",params:{uid:e,order_id:t,token:l.getToken("auth")},data:{extend:a}})}function O(e){return o({url:r+"uninstall",method:"post",params:{uid:e}},{showSuccessMessage:!0})}function F(e){return o({url:r+"changeState",method:"post",data:e},{showCodeMessage:!1})}function P(e){return o({url:r+"dependentInstallComplete",method:"post",params:{uid:e}})}function j(e){return o({url:r+"upload",method:"post",params:{file:e}})}const q=h({loading:{buy:!1,table:!0,common:!1,install:!1,goodsInfo:!1},dialog:{buy:!1,pay:!1,common:!1,goodsInfo:!1,baAccount:!1},table:{remark:"",modules:[],modulesEbak:[],category:[],onlyLocal:!1,indexLoaded:!1,params:{quickSearch:"",activeTab:"all"}},payInfo:{},goodsInfo:{},buy:{info:{},agreement:!0},common:{uid:"",moduleState:0,quickClose:!1,type:"loading",disableHmr:!1,dialogTitle:"",fileConflict:[],dependConflict:[],loadingTitle:"init",loadingComponentKey:m(),waitInstallDepend:[],dependInstallState:"none",disableConflictFile:[],disableDependConflict:[],disableParams:{}},installedModule:[],installedModuleUids:[]});export{v as a,A as b,I as c,w as d,_ as e,F as f,x as g,U as h,T as i,P as j,j as k,O as l,y as m,L as n,S as o,M as p,q as s,s as u};
