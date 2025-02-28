import{d as X,f as Y,h as Z,i as ee,j as te,k as ne,l as ie}from"./chunk-GNNCB536.js";import"./chunk-PJP2MRHT.js";import{l as Q,m as U}from"./chunk-ZA5MY3L6.js";import"./chunk-PJDTXSU3.js";import{F as T}from"./chunk-JOUOMGLZ.js";import{f as J,i as q}from"./chunk-BAKDE3TO.js";import{a as $,b as B,c as W}from"./chunk-W552WUVZ.js";import"./chunk-6QABQPTC.js";import"./chunk-A5266VNW.js";import{b as F}from"./chunk-QCESVMCZ.js";import{Hb as K,Wb as v,jb as A,mb as j,pb as R,xb as G,zb as H}from"./chunk-ZAPQIPPU.js";import{Ca as d,Cb as V,Da as g,Dc as x,Dd as O,Ec as S,Fc as b,Gc as D,Ib as y,Ob as l,Wd as k,a as N,ac as a,ae as I,b as w,bc as r,gc as h,he as f,jc as C,lc as c,nd as E,od as P,qb as n,vb as z,wd as L,xc as p,yc as u,zc as _}from"./chunk-47HODLSN.js";function re(o,i){if(o&1&&(a(0,"div",6),p(1),r()),o&2){let e=c();n(),_(" ",e.$t("_buildTip"),`
`)}}function ae(o,i){if(o&1&&(a(0,"div"),p(1),r()),o&2){let e=c().$implicit;n(),u(e.desc)}}function me(o,i){if(o&1){let e=h();a(0,"input",15),b("ngModelChange",function(m){d(e);let s=c().$implicit;return S(s.desc,m)||(s.desc=m),g(m)}),r()}if(o&2){let e=c().$implicit;x("ngModel",e.desc)}}function se(o,i){if(o&1){let e=h();a(0,"a",16),C("nzOnConfirm",function(){d(e);let m=c().index,s=c();return g(s.handleDelete(m))}),p(1),r()}if(o&2){let e=c(2);l("nzPopconfirmTitle",e.$t("_confirmDel")),n(),_(" ",e.$t("_del")," ")}}function le(o,i){if(o&1){let e=h();a(0,"tr")(1,"td",7)(2,"input",8),b("ngModelChange",function(m){let s=d(e).$implicit;return S(s.name,m)||(s.name=m),g(m)}),r()(),a(3,"td",9)(4,"input",10),C("change",function(m){let s=d(e).index,oe=c();return g(oe.onColorChange(m,s))}),r(),p(5),r(),a(6,"td",11),y(7,ae,2,1,"div",12)(8,me,1,1,"input",13),r(),a(9,"td"),y(10,se,2,2,"a",14),r()()}if(o&2){let e=i.$implicit;n(2),x("ngModel",e.name),n(2),l("value",e.color),n(),_(" - ",e.color," "),n(2),l("ngIf",e.isInner),n(),l("ngIf",!e.isInner),n(2),l("ngIf",!e.isInner)}}var M=class o{constructor(i,e){this.message=i;this.modal=e}$t=f;isSelfDevelop=k;tagList=I;submitting=!1;incrementId=Math.max(...I.map(i=>Number(i.id)))+1;ngOnInit(){}onColorChange(i,e){let t=i.target.value;this.tagList[e].color=t}handleAdd(){this.tagList.some(e=>!e.name.trim())||(this.incrementId+=1,this.tagList.unshift({id:this.incrementId,name:"",color:"#f50000",desc:"",isInner:!1}))}handleDelete(i){this.tagList.splice(i,1)}handleSubmit(){if(this.submitting)return;let i={};if(this.tagList.forEach(e=>{e.name?.trim?.()&&(i[e.name]=w(N({},e),{name:void 0}))}),Object.keys(i).length!==this.tagList.length){this.message.error(f("_repeatAdd"));return}this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,K({message:"update tag",content:JSON.stringify(this.tagList),path:O}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(i,e){return e.id}static \u0275fac=function(e){return new(e||o)(z(v),z(T))};static \u0275cmp=V({type:o,selectors:[["system-tag"]],features:[D([T,v])],decls:19,vars:12,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-4 color-red font-bold",4,"ngIf"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-4","color-red","font-bold"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","160px"],["type","color",3,"change","value"],["width","200px"],[4,"ngIf"],["nz-input","","maxlength","20",3,"ngModel","ngModelChange",4,"ngIf"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom","class","color-red",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","","maxlength","20",3,"ngModelChange","ngModel"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let m=h();a(0,"button",1),C("click",function(){return d(m),g(t.handleAdd())}),p(1),r(),a(2,"button",2),C("click",function(){return d(m),g(t.handleSubmit())}),p(3),r(),y(4,re,2,1,"div",3),a(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th"),p(10),r(),a(11,"th"),p(12),r(),a(13,"th"),p(14),r(),a(15,"th"),p(16),r()()(),a(17,"tbody"),y(18,le,11,6,"tr",5),r()()}e&2&&(l("nzLoading",t.submitting),n(),_(" ",t.$t("_addRow"),`
`),n(),l("nzLoading",t.submitting),n(),_(" ",t.$t("_save"),`
`),n(),l("ngIf",!t.isSelfDevelop),n(),l("nzData",t.tagList),n(5),u(t.$t("_tagName")),n(2),u(t.$t("_color")),n(2),u(t.$t("_remark")),n(2),u(t.$t("_action")),n(2),l("ngForOf",t.tagList)("ngForTrackBy",t.trackByItem))},dependencies:[H,A,j,G,R,L,E,P,W,B,$,F,q,J,ie,ee,X,Y,ne,Z,te,U,Q],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}"]})};export{M as default};
