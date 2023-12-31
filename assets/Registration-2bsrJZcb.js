import{C as w,A as V,a as R}from"./AuthSection-wOCXLZqo.js";import{m as C,_ as c,a as r,o as f,h as D,d as l,e as p,b as t,f as P,c as y}from"./index-upleIQY3.js";import{C as A,e as F,p as b,i as x}from"./validationRules-7Er76OWK.js";import{B}from"./Button-gHuKnLaP.js";import{T as S}from"./Title-iIQVEMoZ.js";const U={name:"RegistrationForm",components:{CustomForm:w,CustomInput:A,Button:B,AuthContainer:V,Title:S},data(){return{loading:!1,formData:{name:"",email:"",password:"",confirmPassword:""}}},computed:{rules(){return{emailValidation:F,passwordValidation:b,isRequired:x}},nameRules(){return[this.rules.isRequired]},emailRules(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules(){return[this.rules.isRequired,this.rules.passwordValidation]},confirmPassword(){return[n=>({hasPassed:n===this.formData.password,message:"Password mismatch"})]}},methods:{...C("auth",["registerUser"]),async handleSubmit(){const{form:n}=this.$refs,s=n.validate(),{name:m,email:u,password:e}=this.formData;if(s)try{this.loading=!0,await this.registerUser({name:m,email:u,password:e}),this.$router.push({name:"HomePage"}),n.reset()}catch(o){this.$notify({type:"error",title:"Error",text:o.message})}finally{this.loading=!1}}}};function T(n,s,m,u,e,o){const d=r("Title"),i=r("CustomInput"),_=r("Button"),g=r("CustomForm"),h=r("AuthContainer");return f(),D(h,{class:"registration"},{default:l(()=>[t(d,{class:"registration__title"},{default:l(()=>[p("Registration")]),_:1}),t(g,{ref:"form",onSubmit:P(o.handleSubmit,["prevent"]),class:"registration__form"},{default:l(()=>[t(i,{modelValue:e.formData.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.formData.name=a),placeholder:"Name",name:"name",rules:o.nameRules,class:"registration__input"},null,8,["modelValue","rules"]),t(i,{modelValue:e.formData.email,"onUpdate:modelValue":s[1]||(s[1]=a=>e.formData.email=a),placeholder:"Email",name:"email",rules:o.emailRules,class:"registration__input"},null,8,["modelValue","rules"]),t(i,{modelValue:e.formData.password,"onUpdate:modelValue":s[2]||(s[2]=a=>e.formData.password=a),placeholder:"Password",type:"password",name:"password",rules:o.passwordRules,class:"registration__input"},null,8,["modelValue","rules"]),t(i,{modelValue:e.formData.confirmPassword,"onUpdate:modelValue":s[3]||(s[3]=a=>e.formData.confirmPassword=a),placeholder:"Confirm password",type:"password",name:"password",rules:o.confirmPassword,class:"registration__input"},null,8,["modelValue","rules"]),t(_,{type:"submit",class:"registration__button",loading:e.loading},{default:l(()=>[p("Registration")]),_:1},8,["loading"])]),_:1},8,["onSubmit"])]),_:1})}const q=c(U,[["render",T],["__scopeId","data-v-ca71a861"]]),v={name:"RegistrationPage",components:{AuthSection:R,RegisterForm:q}},I={class:"registration"};function k(n,s,m,u,e,o){const d=r("RegisterForm"),i=r("AuthSection");return f(),y("main",I,[t(i,null,{default:l(()=>[t(d)]),_:1})])}const z=c(v,[["render",k]]);export{z as default};