import{a as ct,b as mt,c as _t}from"./chunk-XDBI3YKJ.js";import{a as He,b as je,d as rt,e as at,f as st,g as lt,h as N}from"./chunk-UFFFNBHH.js";import{a as ot}from"./chunk-KX5CFUKJ.js";import{b as v,d as R}from"./chunk-NW5BCTNL.js";import{j as U}from"./chunk-XRGHG3ZR.js";import{a as ht}from"./chunk-X5DZVUSZ.js";import{a as qe,b as M}from"./chunk-S3MD3F5M.js";import{a as O,b as Ae}from"./chunk-JY3UOZX3.js";import"./chunk-ECVPHFWG.js";import{a as Ye}from"./chunk-EKN6ZSYM.js";import{d as Je,e as Ke,f as Qe,g as Xe,h as Ze,i as et,j as tt,k as nt,l as it}from"./chunk-YJLOL2Y7.js";import"./chunk-PBTMU4FD.js";import{c as $e,e as Oe,i as De,j as Le,k as Me,l as Fe,m as Be}from"./chunk-BBEEYELM.js";import"./chunk-ITSCJ5SK.js";import{C as Ue,D as Re,E as Ge,F as D}from"./chunk-NF5WAO4V.js";import{a as Ee,b as Ve,c as We,e as $}from"./chunk-JRBG36C7.js";import{a as be,b as ue,c as Ce}from"./chunk-BOZZHDX5.js";import"./chunk-PXWW2J36.js";import{b as Ne}from"./chunk-XZT7Q72D.js";import{b as fe}from"./chunk-YMM7HZUU.js";import{$a as ze,Fb as Pe,Tb as L,V as ie,X as oe,Z as I,ab as ge,cb as E,db as ve,fb as we,gb as Ie,jb as Se,mb as Te,nb as ye,ob as ke,pb as V,qb as W}from"./chunk-YAZYZLSE.js";import{$b as K,Ac as te,Ad as se,Ba as h,Ca as x,Hb as C,Hc as F,Ia as Y,Id as le,Jb as c,Kd as ce,Ld as me,Pd as B,Qd as _e,Rd as de,Ud as pe,Vd as he,Wd as xe,Xb as r,Yb as a,Yd as b,Zb as z,_b as J,a as H,b as j,bc as w,ec as p,f as pt,fd as ne,gc as _,gd as y,hb as q,lb as i,mb as S,oc as A,od as k,pc as m,qc as d,rc as g,sc as Q,tb as T,td as re,ud as ae,vc as X,wc as Z,xc as ee}from"./chunk-RI72GEOT.js";var dt=pt(ht());function gt(l,n){if(l&1&&z(0,"app-logo",13),l&2){let e=_(3);c("src",e.iconUrl)("size",25)}}function vt(l,n){if(l&1&&C(0,gt,1,2,"app-logo",12),l&2){let e=_(2);c("ngIf",e.iconUrl)}}function wt(l,n){if(l&1){let e=w();r(0,"app-upload",14),p("onChange",function(o){h(e);let s=_(2);return x(s.onChangeFile(o))}),a()}}function It(l,n){if(l&1&&(J(0),r(1,"form",4)(2,"nz-form-item")(3,"nz-form-label",5),m(4),a(),r(5,"nz-form-control",6),z(6,"input",7),a()(),r(7,"nz-form-item")(8,"nz-form-label",5),m(9),a(),r(10,"nz-form-control",8),z(11,"nz-switch",9),a()(),r(12,"nz-form-item")(13,"nz-form-label",8),m(14),a(),r(15,"nz-form-control",8)(16,"nz-input-group",10),z(17,"input",11),a(),C(18,vt,1,1,"ng-template",null,0,F)(20,wt,1,0,"ng-template",null,1,F),a()()(),K()),l&2){let e=A(19),t=A(21),o=_();i(),c("formGroup",o.validateForm),i(2),c("nzSpan",6),i(),d(o.$t("_categoryName")),i(),c("nzSpan",18)("nzErrorTip",o.$t("_requiredName")),i(3),c("nzSpan",6),i(),d(o.$t("_onlyOwnVisible")),i(),c("nzSpan",18),i(3),c("nzSpan",6),i(),d(o.$t("_iconAddr")),i(),c("nzSpan",18),i(),c("nzPrefix",e)("nzSuffix",t)}}var P=class l{constructor(n,e){this.fb=n;this.message=e;this.validateForm=this.fb.group({title:["",[ge.required]],icon:[""],ownVisible:[!1]}),I.on("EDIT_CATEGORY_OPEN",(t={})=>{this.validateForm.get("title").setValue(t.title||""),this.validateForm.get("icon").setValue(t.icno||""),this.validateForm.get("ownVisible").setValue(!!t.ownVisible),this.showModal=!0})}onOk=new Y;title=b("_edit");$t=b;validateForm;showModal=!1;ngOnInit(){}get iconUrl(){return this.validateForm.get("icon")?.value||""}onChangeFile(n){this.validateForm.get("icon").setValue(n.cdn)}onCancel(){this.validateForm.reset(),this.showModal=!1}handleOk(){let{title:n,icon:e,ownVisible:t}=this.validateForm.value;if(!n||!n.trim()){this.message.error("Cannot be empty");return}n=n.trim(),this.onOk.emit({title:n,icon:e,ownVisible:t}),this.onCancel()}static \u0275fac=function(e){return new(e||l)(S(ke),S(L))};static \u0275cmp=T({type:l,selectors:[["edit-category"]],inputs:{title:"title"},outputs:{onOk:"onOk"},decls:2,vars:2,consts:[["prefixIcon",""],["suffixIconSearch",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle"],[4,"nzModalContent"],["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["formControlName","title","nz-input","","maxlength","50"],[3,"nzSpan"],["formControlName","ownVisible"],[3,"nzPrefix","nzSuffix"],["formControlName","icon","nz-input",""],[3,"src","size",4,"ngIf"],[3,"src","size"],[3,"onChange"]],template:function(e,t){e&1&&(r(0,"nz-modal",2),ee("nzVisibleChange",function(s){return Z(t.showModal,s)||(t.showModal=s),s}),p("nzOnCancel",function(){return t.onCancel()})("nzOnOk",function(){return t.handleOk()}),C(1,It,22,13,"ng-container",3),a()),e&2&&(X("nzVisible",t.showModal),c("nzTitle",t.title))},dependencies:[k,y,D,Ge,Re,N,je,He,at,rt,lt,st,$,Ee,We,Ve,M,qe,O,ot,V,Ie,ze,E,ve,ye,W,Se,Te],encapsulation:2})};var St=l=>({count:l});function Tt(l,n){if(l&1){let e=w();r(0,"button",10),p("click",function(){h(e);let o=_();return x(o.handleSync())}),m(1),a()}if(l&2){let e=_();c("nzLoading",e.syncLoading),i(),g(" ",e.$t("_save")," ")}}function yt(l,n){if(l&1){let e=w();r(0,"button",11),p("click",function(){h(e);let o=_();return x(o.handleReset())}),m(1),a()}if(l&2){let e=_();i(),g(" ",e.$t("_resetInitData")," ")}}function kt(l,n){l&1&&z(0,"i",39)}function Et(l,n){if(l&1){let e=w();r(0,"tr")(1,"td",17),p("nzCheckedChange",function(o){let s=h(e).$implicit,f=_(2);return x(f.onItemChecked(s.title,o))}),a(),r(2,"td"),z(3,"app-logo",33),a(),r(4,"td"),m(5),a(),r(6,"td"),C(7,kt,1,0,"i",34),a(),r(8,"td"),m(9),a(),r(10,"td",35)(11,"a",36),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveOneUp(o))}),m(12),a(),r(13,"a",37),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveOneDown(o))}),m(14),a(),r(15,"a",37),p("click",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.handleEditBtn(s,f))}),m(16),a(),r(17,"a",38),p("nzOnConfirm",function(){let o=h(e).index,s=_(2);return x(s.handleConfirmDelOne(o))}),m(18),a()()()}if(l&2){let e=n.$implicit,t=_(2);i(),c("nzChecked",t.setOfCheckedId.has(e.title)),i(2),c("src",e.icon||"")("name",e.title),i(2),d(e.title),i(2),c("ngIf",e.ownVisible),i(2),d(e.createdAt),i(3),d(t.$t("_moveUp")),i(2),d(t.$t("_moveDown")),i(2),d(t.$t("_edit")),i(),c("nzPopconfirmTitle",t.$t("_delWarn")),i(),g(" ",t.$t("_del")," ")}}function Vt(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title)("nzValue",e.title)}}function Wt(l,n){l&1&&z(0,"i",39)}function $t(l,n){if(l&1){let e=w();r(0,"tr")(1,"td",17),p("nzCheckedChange",function(o){let s=h(e).$implicit,f=_(2);return x(f.onItemChecked(s.title,o))}),a(),r(2,"td"),z(3,"app-logo",33),a(),r(4,"td"),m(5),a(),r(6,"td"),C(7,Wt,1,0,"i",34),a(),r(8,"td"),m(9),a(),r(10,"td",35)(11,"a",36),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveTwoUp(o))}),m(12),a(),r(13,"a",37),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveTwoDown(o))}),m(14),a(),r(15,"a",37),p("click",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.handleEditBtn(s,f))}),m(16),a(),r(17,"a",37),p("click",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.openMoveWebModal(s,f,2))}),m(18),a(),r(19,"a",38),p("nzOnConfirm",function(){let o=h(e).index,s=_(2);return x(s.handleConfirmDelTwo(o))}),m(20),a()()()}if(l&2){let e=n.$implicit,t=_(2);i(),c("nzChecked",t.setOfCheckedId.has(e.title||"")),i(2),c("src",e.icon||"")("name",e.title||""),i(2),d(e.title),i(2),c("ngIf",e.ownVisible),i(2),d(e.createdAt),i(3),d(t.$t("_moveUp")),i(2),d(t.$t("_moveDown")),i(2),d(t.$t("_edit")),i(2),d(t.$t("_move")),i(),c("nzPopconfirmTitle",t.$t("_delWarn")),i(),g(" ",t.$t("_del")," ")}}function Ot(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title)("nzValue",e.title)}}function Dt(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title||"")("nzValue",e.title)}}function Lt(l,n){l&1&&z(0,"i",39)}function Mt(l,n){if(l&1){let e=w();r(0,"tr")(1,"td",17),p("nzCheckedChange",function(o){let s=h(e).$implicit,f=_(2);return x(f.onItemChecked(s.title,o))}),a(),r(2,"td"),z(3,"app-logo",33),a(),r(4,"td"),m(5),a(),r(6,"td"),C(7,Lt,1,0,"i",34),a(),r(8,"td"),m(9),a(),r(10,"td",35)(11,"a",36),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveThreeUp(o))}),m(12),a(),r(13,"a",37),p("click",function(){let o=h(e).index,s=_(2);return x(s.moveThreeDown(o))}),m(14),a(),r(15,"a",37),p("click",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.handleEditBtn(s,f))}),m(16),a(),r(17,"a",37),p("click",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.openMoveWebModal(s,f,3))}),m(18),a(),r(19,"a",38),p("nzOnConfirm",function(){let o=h(e).index,s=_(2);return x(s.handleConfirmDelThree(o))}),m(20),a()()()}if(l&2){let e=n.$implicit,t=_(2);i(),c("nzChecked",t.setOfCheckedId.has(e.title||"")),i(2),c("src",e.icon||"")("name",e.title||""),i(2),d(e.title),i(2),c("ngIf",e.ownVisible),i(2),d(e.createdAt),i(3),d(t.$t("_moveUp")),i(2),d(t.$t("_moveDown")),i(2),d(t.$t("_edit")),i(2),d(t.$t("_move")),i(),c("nzPopconfirmTitle",t.$t("_delWarn")),i(),g(" ",t.$t("_del")," ")}}function Nt(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title)("nzValue",e.title)}}function Pt(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title||"")("nzValue",e.title)}}function At(l,n){if(l&1&&z(0,"nz-option",40),l&2){let e=n.$implicit;c("nzLabel",e.title||"")("nzValue",e.title||"")}}function Ft(l,n){if(l&1){let e=w();r(0,"div")(1,"a",36),p("click",function(){h(e);let o=_().index,s=_(2);return x(s.moveWebUp(o))}),m(2),a()()}if(l&2){let e=_(3);i(2),d(e.$t("_moveUp"))}}function Bt(l,n){if(l&1){let e=w();r(0,"div")(1,"a",36),p("click",function(){h(e);let o=_().index,s=_(2);return x(s.moveWebDown(o))}),m(2),a()()}if(l&2){let e=_(3);i(2),d(e.$t("_moveDown"))}}function Ut(l,n){if(l&1){let e=w();r(0,"div")(1,"a",36),p("click",function(){h(e);let o=_(),s=o.$implicit,f=o.index,u=_(2);return x(u.openMoveWebModal(s,f))}),m(2),a()()}if(l&2){let e=_(3);i(2),d(e.$t("_move"))}}function Rt(l,n){l&1&&z(0,"span",49)}function Gt(l,n){if(l&1&&z(0,"app-logo",33),l&2){let e=_().$implicit;c("src",e.icon)("name",e.name)}}function Ht(l,n){if(l&1&&z(0,"tag-list",50),l&2){let e=_().$implicit;c("data",e.tags)}}function jt(l,n){l&1&&z(0,"i",39)}function Yt(l,n){if(l&1){let e=w();r(0,"tr")(1,"td",17),p("nzCheckedChange",function(o){let s=h(e).$implicit,f=_(2);return x(f.onItemChecked(s.name,o))}),a(),r(2,"td",41),C(3,Ft,3,1,"div",42)(4,Bt,3,1,"div",42),r(5,"a",36),p("click",function(){let o=h(e).$implicit,s=_(2);return x(s.openEditModal(o))}),m(6),a(),C(7,Ut,3,1,"div",42),r(8,"a",43),p("nzOnConfirm",function(){let o=h(e),s=o.$implicit,f=o.index,u=_(2);return x(u.handleConfirmDelWebsite(s,f))}),m(9),a()(),r(10,"td"),C(11,Rt,1,0,"span",44),a(),r(12,"td"),C(13,Gt,1,2,"app-logo",45),a(),r(14,"td")(15,"a",46),m(16),a()(),r(17,"td"),C(18,Ht,1,1,"tag-list",47),a(),r(19,"td"),C(20,jt,1,0,"i",34),a(),r(21,"td")(22,"pre",48),m(23),a()(),r(24,"th",32),m(25),a(),r(26,"td"),m(27),a()()}if(l&2){let e=n.$implicit,t=_(2);i(),c("nzChecked",t.setOfCheckedId.has(e.name)),i(2),c("ngIf",t.errorWebs.length<=0),i(),c("ngIf",t.errorWebs.length<=0),i(2),d(t.$t("_edit")),i(),c("ngIf",t.errorWebs.length<=0),i(),c("nzPopconfirmTitle",t.$t("_confirmDel")),i(),g(" ",t.$t("_del")," "),i(2),c("ngIf",e.ok===!1),i(2),c("ngIf",e.icon),i(2),c("href",e.url,q),i(),d(e.name),i(2),c("ngIf",e.tags),i(2),c("ngIf",e.ownVisible),i(3),d(e.desc),i(2),d(e.breadcrumb),i(2),d(e.createdAt)}}function qt(l,n){if(l&1){let e=w();r(0,"nz-tabset",12),p("nzSelectedIndexChange",function(o){h(e);let s=_();return x(s.onTabChange(o))}),r(1,"nz-tab",13)(2,"button",14),p("click",function(){h(e);let o=_();return x(o.toggleCreateModal())}),m(3),a(),r(4,"button",15),p("nzOnConfirm",function(){h(e);let o=_();return x(o.onBatchDelete(1))}),m(5),a(),r(6,"nz-table",16,0)(9,"thead")(10,"tr")(11,"th",17),p("nzCheckedChange",function(o){h(e);let s=_();return x(s.onAllChecked(o,1))}),a(),r(12,"th"),m(13),a(),r(14,"th"),m(15),a(),r(16,"th"),m(17),a(),r(18,"th"),m(19),a(),r(20,"th"),m(21),a()()(),r(22,"tbody"),C(23,Et,19,11,"tr",18),a()()(),r(24,"nz-tab",13)(25,"nz-select",19),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeOneSelect(o))}),C(26,Vt,1,2,"nz-option",20),a(),r(27,"button",21),p("click",function(){h(e);let o=_();return x(o.toggleCreateModal())}),m(28),a(),r(29,"button",15),p("nzOnConfirm",function(){h(e);let o=_();return x(o.onBatchDelete(2))}),m(30),a(),r(31,"nz-table",16,0)(34,"thead")(35,"tr")(36,"th",17),p("nzCheckedChange",function(o){h(e);let s=_();return x(s.onAllChecked(o,2))}),a(),r(37,"th"),m(38),a(),r(39,"th"),m(40),a(),r(41,"th"),m(42),a(),r(43,"th"),m(44),a(),r(45,"th"),m(46),a()()(),r(47,"tbody"),C(48,$t,21,12,"tr",18),a()()(),r(49,"nz-tab",13)(50,"nz-select",22),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeOneSelect(o))}),C(51,Ot,1,2,"nz-option",20),a(),r(52,"nz-select",23),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeTwoSelect(o))}),C(53,Dt,1,2,"nz-option",20),a(),r(54,"button",21),p("click",function(){h(e);let o=_();return x(o.toggleCreateModal())}),m(55),a(),r(56,"button",15),p("nzOnConfirm",function(){h(e);let o=_();return x(o.onBatchDelete(3))}),m(57),a(),r(58,"nz-table",16,0)(61,"thead")(62,"tr")(63,"th",17),p("nzCheckedChange",function(o){h(e);let s=_();return x(s.onAllChecked(o,3))}),a(),r(64,"th"),m(65),a(),r(66,"th"),m(67),a(),r(68,"th"),m(69),a(),r(70,"th"),m(71),a(),r(72,"th"),m(73),a()()(),r(74,"tbody"),C(75,Mt,21,12,"tr",18),a()()(),r(76,"nz-tab",13)(77,"nz-select",24),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeOneSelect(o))}),C(78,Nt,1,2,"nz-option",20),a(),r(79,"nz-select",25),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeTwoSelect(o))}),C(80,Pt,1,2,"nz-option",20),a(),r(81,"nz-select",25),p("ngModelChange",function(o){h(e);let s=_();return x(s.hanldeThreeSelect(o))}),C(82,At,1,2,"nz-option",20),a(),r(83,"button",21),p("click",function(){h(e);let o=_();return x(o.openCreateWebModal())}),m(84),a(),r(85,"button",21),p("click",function(){h(e);let o=_();return x(o.getAllErrorWeb())}),m(86),a(),r(87,"button",15),p("nzOnConfirm",function(){h(e);let o=_();return x(o.onBatchDelete(4))}),m(88),a(),r(89,"nz-table",16,0)(92,"thead")(93,"tr")(94,"th",26),p("nzCheckedChange",function(o){h(e);let s=_();return x(s.onAllChecked(o,4))}),a(),r(95,"th",27),m(96),a(),r(97,"th",28),m(98),a(),r(99,"th",29),m(100),a(),r(101,"th",30),m(102),a(),r(103,"th",30),m(104),a(),r(105,"th",31),m(106),a(),r(107,"th",32),m(108),a(),r(109,"th",32),m(110),a(),r(111,"th"),m(112),a()()(),r(113,"tbody"),C(114,Yt,28,16,"tr",18),a()()()()}if(l&2){let e=_();c("nzSelectedIndex",e.tabActive),i(),c("nzTitle",e.$t("_mgr1")),i(2),g(" ",e.$t("_addTag")," "),i(),c("nzPopconfirmTitle",e.$t("_confirmDel"))("disabled",e.setOfCheckedId.size<=0),i(),g(" ",e.$t("_batchDel")," "),i(),c("nzData",e.websiteList)("nzShowPagination",!1),i(5),c("nzChecked",e.checkedAll),i(2),d(e.$t("_icon")),i(2),d(e.$t("_tagName")),i(2),d(e.$t("_onlyOwnVisible")),i(2),d(e.$t("_createAt")),i(2),d(e.$t("_action")),i(2),c("ngForOf",e.websiteList),i(),c("nzTitle",e.$t("_mgr2")),i(),c("ngModel",e.oneSelect)("nzPlaceHolder",e.$t("_sel1")),i(),c("ngForOf",e.websiteList),i(2),g(" ",e.$t("_addTag")," "),i(),c("nzPopconfirmTitle",e.$t("_confirmDel"))("disabled",e.setOfCheckedId.size<=0),i(),g(" ",e.$t("_batchDel")," "),i(),c("nzData",e.twoTableData)("nzShowPagination",!1),i(5),c("nzChecked",e.checkedAll),i(2),d(e.$t("_icon")),i(2),d(e.$t("_tagName")),i(2),d(e.$t("_onlyOwnVisible")),i(2),d(e.$t("_createAt")),i(2),d(e.$t("_action")),i(2),c("ngForOf",e.twoTableData),i(),c("nzTitle",e.$t("_mgr3")),i(),c("ngModel",e.oneSelect)("nzPlaceHolder",e.$t("_sel1")),i(),c("ngForOf",e.websiteList),i(),c("ngModel",e.twoSelect)("nzPlaceHolder",e.$t("_sel2")),i(),c("ngForOf",e.twoTableData),i(2),g(" ",e.$t("_addTag")," "),i(),c("nzPopconfirmTitle",e.$t("_confirmDel"))("disabled",e.setOfCheckedId.size<=0),i(),g(" ",e.$t("_batchDel")," "),i(),c("nzData",e.threeTableData)("nzShowPagination",!1),i(5),c("nzChecked",e.checkedAll),i(2),d(e.$t("_icon")),i(2),d(e.$t("_tagName")),i(2),d(e.$t("_onlyOwnVisible")),i(2),d(e.$t("_createAt")),i(2),d(e.$t("_action")),i(2),c("ngForOf",e.threeTableData),i(),c("nzTitle",e.$t("_mgrWeb")+"\uFF08"+e.internal.loginViewCount+"\uFF09"),i(),c("ngModel",e.oneSelect)("nzPlaceHolder",e.$t("_sel1")),i(),c("ngForOf",e.websiteList),i(),c("ngModel",e.twoSelect)("nzPlaceHolder",e.$t("_sel2")),i(),c("ngForOf",e.twoTableData),i(),c("ngModel",e.threeSelect)("nzPlaceHolder",e.$t("_sel3")),i(),c("ngForOf",e.threeTableData),i(2),Q(" ",e.$t("_addWeb"),"\uFF08",e.websiteTableData.length,"\uFF09 "),i(2),g(" ",e.$t("_getErrorWeb")," "),i(),c("nzPopconfirmTitle",e.$t("_confirmDel"))("disabled",e.setOfCheckedId.size<=0),i(),g(" ",e.$t("_batchDel")," "),i(),c("nzData",e.websiteTableData)("nzShowPagination",!1),i(5),c("nzChecked",e.checkedAll),i(2),d(e.$t("_action")),i(2),d(e.$t("_status")),i(2),d(e.$t("_icon")),i(2),d(e.$t("_webName")),i(2),d(e.$t("_associatedLabels")),i(2),d(e.$t("_onlyOwnVisible")),i(2),d(e.$t("_webDesc")),i(2),d(e.$t("_webTag")),i(2),d(e.$t("_createAt")),i(2),c("ngForOf",e.websiteTableData)}}var G=class l{constructor(n,e,t){this.modal=n;this.notification=e;this.message=t}$t=b;isSelfDevelop=me;settings=B;internal=pe;websiteList=he;gitRepoUrl=re.gitRepoUrl;isLogin=ce;showCreateModal=!1;syncLoading=!1;uploading=!1;tabActive=0;editIdx=0;isEdit=!1;oneSelect="";twoSelect="";threeSelect="";checkedAll=!1;setOfCheckedId=new Set;errorWebs=[];ngOnInit(){}get oneIndex(){return this.websiteList.findIndex(n=>n.title===this.oneSelect)}get twoIndex(){try{return this.twoTableData.findIndex(n=>n.title===this.twoSelect)}catch{return-1}}get threeIndex(){try{return this.threeTableData.findIndex(n=>n.title===this.threeSelect)}catch{return-1}}get twoTableData(){try{return this.websiteList.find(n=>n.title===this.oneSelect)?.nav||[]}catch{return[]}}get threeTableData(){try{return this.twoTableData.find(n=>n.title===this.twoSelect)?.nav||[]}catch{return[]}}get websiteTableData(){try{let n=this.threeTableData.find(e=>e.title===this.threeSelect);return n?n.nav:this.errorWebs}catch{return this.errorWebs}}getAllErrorWeb(){this.oneSelect="",this.twoSelect="",this.threeSelect="",this.onTabChange();let n=[];function e(t){if(Array.isArray(t))for(let o=0;o<t.length;o++){let s=t[o];s.url&&s.ok===!1?n.push(s):e(s.nav)}}e(this.websiteList),this.errorWebs=n,n.length<=0?this.message.success("No error!"):this.message.warning(`\u68C0\u6D4B\u51FA ${n.length} \u4E2A\u7F51\u7AD9\u7591\u4F3C\u5F02\u5E38`)}onAllChecked(n,e){switch(this.setOfCheckedId.clear(),e){case 1:this.websiteList.forEach(t=>{n?this.setOfCheckedId.add(t.title):this.setOfCheckedId.delete(t.title)});break;case 2:this.twoTableData.forEach(t=>{n?this.setOfCheckedId.add(t.title):this.setOfCheckedId.delete(t.title)});break;case 3:this.threeTableData.forEach(t=>{n?this.setOfCheckedId.add(t.title):this.setOfCheckedId.delete(t.title)});break;case 4:this.websiteTableData.forEach(t=>{n?this.setOfCheckedId.add(t.name):this.setOfCheckedId.delete(t.name)});break}}onItemChecked(n,e){e?this.setOfCheckedId.add(n):this.setOfCheckedId.delete(n)}onBatchDelete(n){switch(n){case 1:this.setOfCheckedId.forEach(e=>{let t=this.websiteList.findIndex(o=>o.title===e);t>=0&&this.websiteList.splice(t,1)});break;case 2:this.oneIndex>=0&&(this.websiteList[this.oneIndex].nav=this.websiteList[this.oneIndex].nav.filter(e=>!this.setOfCheckedId.has(e.title)));break;case 3:this.oneIndex>=0&&this.twoIndex>=0&&(this.websiteList[this.oneIndex].nav[this.twoIndex].nav=this.websiteList[this.oneIndex].nav[this.twoIndex].nav.filter(e=>!this.setOfCheckedId.has(e.title)));break;case 4:{let e=[];this.websiteTableData.forEach(t=>{let o=!this.setOfCheckedId.has(t.name);return o||e.push(t),o}),e.forEach(t=>{R(j(H({},t),{name:U(t.name),desc:U(t.desc)}))}),this.errorWebs.length&&this.getAllErrorWeb(),this.message.success(b("_delSuccess"))}break}this.onTabChange(),v(this.websiteList)}handleReset(){this.modal.info({nzTitle:b("_resetInitData"),nzContent:b("_warnReset"),nzOnOk:()=>{this.message.success(b("_actionSuccess")),window.localStorage.removeItem(se.s_url),le().finally(()=>{window.location.reload()})}})}handleDownloadBackup(){let n={db:this.websiteList,settings:B,tag:de,search:_e,component:xe};for(let e in n)(0,dt.saveAs)(new Blob([JSON.stringify(n[e])],{type:"text/plain;charset=utf-8"}),`${e}.json`)}handleUploadBackup(n){let e=this,t=n.target.files;if(t.length<=0)return;let o=t[0],s=new FileReader;s.readAsText(o),s.onload=function(f){try{let{result:u}=f.target;e.websiteList=JSON.parse(u),e.message.success(b("_actionSuccess")),v(e.websiteList).finally(()=>{location.reload()})}catch(u){e.notification.error(b("_error"),u.message)}}}goBack(){history.go(-1)}openMoveWebModal(n,e,t){I.emit("MOVE_WEB",{indexs:[this.oneIndex,this.twoIndex,this.threeIndex,e],data:[n],level:t})}openCreateWebModal(){if(this.tabActive===3&&!this.threeSelect)return this.message.error(b("_sel3"));I.emit("CREATE_WEB",{oneIndex:this.oneIndex,twoIndex:this.twoIndex,threeIndex:this.threeIndex})}openEditModal(n){I.emit("CREATE_WEB",{detail:n})}toggleCreateModal(){if(!this.showCreateModal){if(this.tabActive===1&&!this.oneSelect)return this.message.error(b("_sel1"));if(this.tabActive===2&&!this.twoSelect)return this.message.error(b("_sel2"))}this.isEdit=!1,I.emit("EDIT_CATEGORY_OPEN")}onTabChange(n){this.errorWebs=[],this.tabActive=n??this.tabActive,this.setOfCheckedId.clear(),this.checkedAll||setTimeout(()=>{this.checkedAll=!this.checkedAll,setTimeout(()=>{this.checkedAll=!this.checkedAll})})}handleConfirmDelOne(n){this.websiteList.splice(n,1),this.message.success(b("_delSuccess")),v(this.websiteList)}moveOneUp(n){if(n===0)return;let e=this.websiteList[n],t=this.websiteList[n-1];this.websiteList[n-1]=e,this.websiteList[n]=t,v(this.websiteList)}moveOneDown(n){if(n===this.websiteList.length-1)return;let e=this.websiteList[n],t=this.websiteList[n+1];this.websiteList[n+1]=e,this.websiteList[n]=t,v(this.websiteList)}moveTwoUp(n){try{if(n===0)return;let e=this.websiteList[this.oneIndex].nav[n],t=this.websiteList[this.oneIndex].nav[n-1];this.websiteList[this.oneIndex].nav[n-1]=e,this.websiteList[this.oneIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}moveTwoDown(n){try{if(n===this.websiteList[this.oneIndex].nav.length-1)return;let e=this.websiteList[this.oneIndex].nav[n],t=this.websiteList[this.oneIndex].nav[n+1];this.websiteList[this.oneIndex].nav[n+1]=e,this.websiteList[this.oneIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}handleConfirmDelTwo(n){this.twoTableData.splice(n,1),this.message.success(b("_delSuccess")),v(this.websiteList)}moveThreeUp(n){try{if(n===0)return;let e=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n],t=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n-1];this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n-1]=e,this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}moveThreeDown(n){try{if(n===this.websiteList[this.oneIndex].nav[this.twoIndex].nav.length-1)return;let e=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n],t=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n+1];this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n+1]=e,this.websiteList[this.oneIndex].nav[this.twoIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}handleConfirmDelThree(n){this.threeTableData.splice(n,1),this.message.success(b("_delSuccess")),v(this.websiteList)}moveWebUp(n){try{if(n===0)return;let e=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n],t=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n-1];this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n-1]=e,this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}moveWebDown(n){try{if(n===this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav.length-1)return;let e=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n],t=this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n+1];this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n+1]=e,this.websiteList[this.oneIndex].nav[this.twoIndex].nav[this.threeIndex].nav[n]=t,v(this.websiteList)}catch(e){this.notification.error(b("_error"),e.message)}}handleConfirmDelWebsite(n,e){R(n)&&(this.message.success(b("_delSuccess")),this.errorWebs.length&&this.getAllErrorWeb())}hanldeOneSelect(n){this.oneSelect=n??this.oneSelect,this.twoSelect="",this.threeSelect="",this.onTabChange()}hanldeTwoSelect(n){this.twoSelect=n??this.twoSelect,this.threeSelect="",this.onTabChange()}hanldeThreeSelect(n){this.threeSelect=n??this.threeSelect,this.onTabChange()}handleEditBtn(n,e){let{title:t,icon:o,name:s,ownVisible:f}=n;this.isEdit=!0,this.editIdx=e,I.emit("EDIT_CATEGORY_OPEN",{title:t||s,icon:o,ownVisible:f})}handleSync(){this.modal.info({nzTitle:b("_syncDataOut"),nzOkText:b("_confirmSync"),nzContent:b("_confirmSyncTip"),nzOnOk:()=>{this.syncLoading=!0,Pe({message:"update db",content:JSON.stringify(this.websiteList),path:ae}).then(()=>{this.message.success(b("_syncSuccessTip"))}).finally(()=>{this.syncLoading=!1})}})}handleOk(n){let e=Date.now(),{title:t,icon:o,ownVisible:s}=n;if(this.isEdit){switch(this.tabActive){case 0:{if(this.websiteList.some(u=>u.title===t)&&this.websiteList[this.editIdx].title!==t)return this.message.error(`${b("_repeatAdd")} "${t}"`);this.websiteList[this.editIdx].title=t,this.websiteList[this.editIdx].icon=o,this.websiteList[this.editIdx].ownVisible=s}break;case 1:{if(this.twoTableData.some(u=>u.title===t)&&this.twoTableData[this.editIdx].title!==t)return this.message.error(`${b("_repeatAdd")} "${t}"`);this.twoTableData[this.editIdx].title=t,this.twoTableData[this.editIdx].icon=o,this.twoTableData[this.editIdx].ownVisible=s}break;case 2:{if(this.threeTableData.some(u=>u.title===t)&&this.threeTableData[this.editIdx].title!==t)return this.message.error(`${b("_repeatAdd")} "${t}"`);this.threeTableData[this.editIdx].title=t,this.threeTableData[this.editIdx].icon=o,this.threeTableData[this.editIdx].ownVisible=s}break}this.message.success(b("_saveSuccess"))}else{switch(this.tabActive){case 0:{if(this.websiteList.some(u=>u.title===t))return this.message.error(`${b("_repeatAdd")} "${t}"`);this.websiteList.unshift({createdAt:e,title:t,icon:o,ownVisible:s,nav:[]})}break;case 1:{if(this.twoTableData.some(u=>u.title===t))return this.message.error(`${b("_repeatAdd")} "${t}"`);this.twoTableData.unshift({createdAt:e,title:t,icon:o,ownVisible:s,nav:[]})}break;case 2:{if(this.threeTableData.some(u=>u.title===t))return this.message.error(`${b("_repeatAdd")} "${t}"`);this.threeTableData.unshift({createdAt:e,title:t,icon:o,ownVisible:s,nav:[]})}break}this.message.success(b("_addSuccess"))}v(this.websiteList)}static \u0275fac=function(e){return new(e||l)(S(Ue),S(Ye),S(L))};static \u0275cmp=T({type:l,selectors:[["app-web"]],decls:12,vars:10,consts:[["rowSelectionTable","","basicTable",""],[1,"admin"],["nz-button","","nzType","primary",3,"nzLoading","click",4,"ngIf"],["nz-button","","style","margin: 0 15px 20px 15px",3,"click",4,"ngIf"],["nz-button","",2,"margin-right","15px",3,"click"],["id","file2","nz-button","","nz-tooltip","","nzTooltipPlacement","bottom",3,"nzTooltipTitle"],["type","file","name","file2","accept",".json",1,"file-upload",3,"change"],[1,"tip2"],[3,"nzSelectedIndex","nzSelectedIndexChange",4,"ngIf"],[3,"onOk","title"],["nz-button","","nzType","primary",3,"click","nzLoading"],["nz-button","",2,"margin","0 15px 20px 15px",3,"click"],[3,"nzSelectedIndexChange","nzSelectedIndex"],[3,"nzTitle"],["nz-button","","nzType","primary",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","bottom","nz-button","","nzDanger","",1,"ml-2.5",3,"nzOnConfirm","nzPopconfirmTitle","disabled"],[2,"margin-top","15px",3,"nzData","nzShowPagination"],[3,"nzCheckedChange","nzChecked"],[4,"ngFor","ngForOf"],["nzShowSearch","",2,"width","260px",3,"ngModelChange","ngModel","nzPlaceHolder"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-button","","nzType","primary",2,"margin-left","20px",3,"click"],["nzShowSearch","",2,"width","200px",3,"ngModelChange","ngModel","nzPlaceHolder"],["nzShowSearch","",2,"width","200px","margin-left","15px",3,"ngModelChange","ngModel","nzPlaceHolder"],["nzShowSearch","",2,"width","150px",3,"ngModelChange","ngModel","nzPlaceHolder"],["nzShowSearch","",2,"width","150px","margin-left","15px",3,"ngModelChange","ngModel","nzPlaceHolder"],["nzWidth","70px",3,"nzCheckedChange","nzChecked"],["nzWidth","60px",1,"text-center"],["nzWidth","70px"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","120px"],["nzWidth","300px"],[3,"src","name"],["nz-icon","","nzType","check","nzTheme","outline",4,"ngIf"],[1,"select-none"],[3,"click"],[1,"ml-2.5",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","bottom",1,"color-red","ml-2.5",3,"nzOnConfirm","nzPopconfirmTitle"],["nz-icon","","nzType","check","nzTheme","outline"],[3,"nzLabel","nzValue"],[1,"text-center","select-none"],[4,"ngIf"],["nz-popconfirm","","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"],["nz-icon","","nzType","close","nzTheme","outline","style","color: red",4,"ngIf"],[3,"src","name",4,"ngIf"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],["nz-icon","","nzType","close","nzTheme","outline",2,"color","red"],[3,"data"]],template:function(e,t){e&1&&(r(0,"div",1),C(1,Tt,2,2,"button",2)(2,yt,2,1,"button",3),r(3,"button",4),p("click",function(){return t.handleDownloadBackup()}),m(4),a(),r(5,"label",5),m(6),r(7,"input",6),p("change",function(s){return t.handleUploadBackup(s)}),a()(),r(8,"div",7),m(9),a(),C(10,qt,115,81,"nz-tabset",8),a(),r(11,"edit-category",9),p("onOk",function(s){return t.handleOk(s)}),a()),e&2&&(i(),c("ngIf",!t.isSelfDevelop),i(),c("ngIf",!t.isSelfDevelop),i(2),g(" ",t.$t("_backup")," "),i(),c("nzTooltipTitle",t.$t("_importBackupTip")),i(),g(" ",t.$t("_importBackup")," "),i(3),g(" ",t.$t("_errCountTip",te(8,St,t.settings.errorUrlCount||0))," "),i(),c("ngIf",t.isLogin),i(),c("title",t.isEdit?t.$t("_edit"):t.$t("_add")))},dependencies:[P,k,ne,y,Oe,$e,V,E,we,W,$,Ce,ue,be,fe,Ne,it,et,Je,Qe,Ke,nt,Ze,tt,Xe,_t,mt,ct,Be,Fe,Me,De,Le,O,oe,ie,D,N,M,Ae],styles:[".desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap;word-break:break-all}#file2[_ngcontent-%COMP%]{position:relative;cursor:pointer}#file2[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:1px;opacity:0;cursor:pointer}.tip2[_ngcontent-%COMP%]{color:#f50;font-weight:700;margin-top:10px}.admin[_ngcontent-%COMP%]     .ant-table{max-height:600px;overflow:auto}"]})};export{G as default};