(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),s=a("5Yp1"),i=a("zrwo"),l=a("KYPV"),c=a("lCZi"),o=a("QSIL"),u=a("Oh7H"),m=a("DTTI"),d=r.a.createElement,b=c.object().shape(Object(i.a)({},o.a,{conference:c.array().min(1,"*select at least one location").required("*required")})),f=function(){return d(l.b,{initialValues:{first:"",last:"",email:"",country_code:"",phone:"",conference:[],message:""},validationSchema:b,onSubmit:function(e,n){n.setSubmitting,m.c(e)}},function(e){var n=e.values,a=e.errors,t=e.status,r=e.touched,s=e.handleChange,i=e.handleSubmit,l=e.isSubmitting;return d("form",{onSubmit:i},d(o.b,{values:n,errors:a,status:t,touched:r,handleChange:s}),d("br",null),d("div",{className:"form-group"},d("label",null,"Conferences Interested:",d("span",{className:"text-danger"}," *")),a.conference&&r.conference?d("span",{className:"error-text"},a.conference):null,d("br",null),d(u.a,{name:"conference",value:"Sydney",className:"form-check-inline"}),d(u.a,{name:"conference",value:"Perth",className:"form-check-inline"}),d(u.a,{name:"conference",value:"Kuala Lumpur",className:"form-check-inline"})),d("br",null),d("div",{className:"form-group"},d("label",null,"Write a Message"),d("textarea",{className:"form-control",name:"message",rows:"2",onChange:s,value:n.message})),d("div",{style:{textAlign:"right"}},d("button",{type:"submit",className:"btn btn-primary",disabled:l},"Submit")))})},g=r.a.createElement,h={title:"Emboldened by His Spirit",subTitle:"Our conference launches in year 2021",image:"../static/img/header-01.jpg",className:"home-page",linkRef:"/#register",linkLabel:"Register your interest below"};n.default=function(){return g(s.a,{banner:h},g("div",{className:"section section-1"},g("div",{className:"container"},g("h2",{id:"register"},"Register Your Interest"),g(f,null))))}},vlRD:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);