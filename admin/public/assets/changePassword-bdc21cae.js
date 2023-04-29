import{h as v,Z as b,r as V,t as i,p as y,l as C,q as n,C as l,o as S,a1 as L,k as r,L as c,K as f}from"./vue-836dfa82.js";import{l as N,g as $,t as I,a2 as k,_ as q}from"./index-3038d132.js";import{b as u}from"./validate-43384adb.js";import{F as w}from"./index-9c38993b.js";import"./index-a50cf3de.js";import"./controllerUrls-941681c3.js";import"./index-6e54af73.js";const x={class:"user-views"},R={class:"change-password"},U=v({__name:"changePassword",setup(B){const{t:s}=N(),P=$(),m=b(),e=V({formSubmitLoading:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[u({name:"required",title:s("user.account.changePassword.Old password")})],newPassword:[u({name:"required",title:s("user.account.changePassword.New password")}),u({name:"password"})],confirmPassword:[u({name:"required",title:s("user.account.changePassword.Confirm new password")}),u({name:"password"}),{validator:(d,o,a)=>{(e.form.newPassword||e.form.confirmPassword)&&(e.form.newPassword==e.form.confirmPassword?a():a(new Error(s("user.account.changePassword.The duplicate password does not match the new password")))),a()},trigger:"blur"}]}}),p=d=>{d&&d.validate(o=>{o&&(e.formSubmitLoading=!0,k(e.form).then(a=>{e.formSubmitLoading=!1,a.code==1&&P.logout()}).catch(()=>{e.formSubmitLoading=!1}))})};return(d,o)=>{const a=i("el-button"),_=i("el-form-item"),g=i("el-form"),h=i("el-card");return y(),C("div",x,[n(h,{class:"user-views-card",shadow:"hover",header:r(s)("user.account.changePassword.Change Password")},{default:l(()=>[S("div",R,[n(g,{model:e.form,rules:e.rules,"label-position":"top",ref_key:"formRef",ref:m,onKeyup:o[5]||(o[5]=L(t=>p(m.value),["enter"]))},{default:l(()=>[n(w,{label:r(s)("user.account.changePassword.Old password"),type:"password",modelValue:e.form.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.oldPassword=t),prop:"oldPassword","input-attr":{"show-password":!0},placeholder:r(s)("user.account.changePassword.Please enter your current password")},null,8,["label","modelValue","placeholder"]),n(w,{label:r(s)("user.account.changePassword.New password"),type:"password",modelValue:e.form.newPassword,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.newPassword=t),prop:"newPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.New password")})},null,8,["label","modelValue","placeholder"]),n(w,{label:r(s)("user.account.changePassword.Confirm new password"),type:"password",modelValue:e.form.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.confirmPassword=t),prop:"confirmPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.Confirm new password")})},null,8,["label","modelValue","placeholder"]),n(_,{class:"submit-buttons"},{default:l(()=>[n(a,{onClick:o[3]||(o[3]=t=>r(I)(m.value))},{default:l(()=>[c(f(d.$t("Reset")),1)]),_:1}),n(a,{type:"primary",loading:e.formSubmitLoading,onClick:o[4]||(o[4]=t=>p(m.value))},{default:l(()=>[c(f(d.$t("Save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["header"])])}}});const j=q(U,[["__scopeId","data-v-936437c5"]]);export{j as default};