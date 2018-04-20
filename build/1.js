webpackJsonp([1],{421:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),e=(u(3),u(60),u(106),u(105),function(){function l(l,n,u,t,e){this.navCtrl=l,this.nav=n,this._TodoListProvider=u,this.alert=t,this._ShareListProvider=e,this.titlePage="My Notes",this._showHideSearchBar=!0,this._emptyTodoList=!0,this._showSpinner=!0}return l.prototype.ngOnInit=function(){var l=this;this.sharedwithMeUser=this.nav.get("sharedwithMeUser"),this.sharedwithMeUser?(this._hideAddButton=!0,this.titlePage=this.sharedwithMeUser.displayName+" Shared Lists",this._ShareListProvider.getIdListsShared(this.sharedwithMeUser.uid).then(function(n){return l.subscriberTodoListId$=n.subscribe(function(n){return l.populateLists(l._TodoListProvider.getArrayList(l.sharedwithMeUser,n))})})):this.getList()},l.prototype.getList=function(){var l=this;this._TodoListProvider.getTodoList().then(function(n){l.populateLists(n)})},l.prototype.populateLists=function(l){var n=this;this.subscriberTodoList$=l.subscribe(function(l){n._showSpinner=!1,n._emptyTodoList=l.length<1,n.todoLists=l})},l.prototype.addList=function(){var l=this;this.alert.createAlert({title:"List Name",message:"Enter a name for this new list",inputs:[{name:"name",placeholder:"Title"}],noText:"Cancel",yesText:"Save",yesToastThen:"List succesfuly added",yesToastCatch:"Something wrong happened",yesFunction:function(n){return l._TodoListProvider.addList(n)}})},l.prototype.deleteList=function(l){var n=this;this.alert.createAlert({title:"Delete List",message:"Are you sure you want to delete this list?",inputs:[],noText:"Cancel",yesText:"Yes",yesToastThen:"List succesfuly deleted",yesToastCatch:"Something wrong happened",yesFunction:function(u){return n._TodoListProvider.deleteList(l)}})},l.prototype.updateList=function(l){var n=this;this.alert.createAlert({title:"Update List Name",message:"Enter the new list name",inputs:[{name:"name",placeholder:"New Title"}],noText:"Cancel",yesText:"Save",yesToastThen:"List name succesfuly updated",yesToastCatch:"Something wrong happened",yesFunction:function(u){return n._TodoListProvider.updateList(l,u.name)}})},l.prototype.shareList=function(l){this.navCtrl.push("ShareMyNotesPage",{sharedList:l})},l.prototype.unshareList=function(l){var n=this;if(this.sharedwithMeUser){var u=this.todoLists.length;this.alert.createAlert({title:"Unshare list",message:"Are you sure you want to stop accessing this list from "+this.sharedwithMeUser.displayName+"?",inputs:[],noText:"Cancel",yesText:"Yes",yesToastThen:"Shared list deleted",yesToastCatch:"Something wrong happened",yesFunction:function(t){return n._ShareListProvider.unshareListWithMe(n.sharedwithMeUser,l).then(function(l){1==u&&(n._ShareListProvider.deleteSharedUser(n.sharedwithMeUser,!0),n.navCtrl.pop())})}})}},l.prototype.presentToast=function(l){this.alert.presentToast(l)},l.prototype.goToDetails=function(l){this.navCtrl.push("DetailsPage",{details:l})},l.prototype.refreshLists=function(l){setTimeout(function(){l.complete()},2e3)},l.prototype.ngOnDestroy=function(){this.subscriberTodoList$&&this.subscriberTodoList$.unsubscribe(),this.subscriberTodoListId$&&this.subscriberTodoListId$.unsubscribe()},l}()),o=u(426),a=function(){return function(){}}(),i=u(292),r=u(293),c=u(294),s=u(295),d=u(296),_=u(297),h=u(298),f=u(299),p=u(300),m=u(291),g=u(290),b=u(302),v=u(78),Y=u(2),Z=u(112),y=u(5),L=u(28),I=u(9),j=u(32),T=u(15),w=u(188),x=t.X({encapsulation:2,styles:[],data:{}});function k(l){return t._22(0,[(l()(),t.Z(0,0,null,null,2,"div",[["class","refresher-pulling-icon"]],null,null,null,null,null)),(l()(),t.Z(1,0,null,null,1,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(2,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null)],function(l,n){l(n,2,0,n.component.pullingIcon)},function(l,n){l(n,1,0,t._13(n,2)._hidden)})}function z(l){return t._22(0,[(l()(),t.Z(0,0,null,null,0,"div",[["class","refresher-pulling-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.pullingText)})}function S(l){return t._22(0,[(l()(),t.Z(0,0,null,null,0,"div",[["class","refresher-refreshing-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.refreshingText)})}function C(l){return t._22(0,[(l()(),t.Z(0,0,null,null,4,"div",[["class","refresher-pulling"]],null,null,null,null,null)),(l()(),t.U(16777216,null,null,1,null,k)),t.Y(2,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,z)),t.Y(4,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.Z(5,0,null,null,5,"div",[["class","refresher-refreshing"]],null,null,null,null,null)),(l()(),t.Z(6,0,null,null,2,"div",[["class","refresher-refreshing-icon"]],null,null,null,null,null)),(l()(),t.Z(7,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,b.b,b.a)),t.Y(8,114688,null,0,v.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.U(16777216,null,null,1,null,S)),t.Y(10,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.pullingIcon),l(n,4,0,u.pullingText),l(n,8,0,u.refreshingSpinner),l(n,10,0,u.refreshingText)},function(l,n){l(n,7,0,t._13(n,8)._paused)})}var U=u(109),F=u(79),M=u(174),$=u(19),A=u(17),D=u(52),P=u(76),B=u(75),O=u(12),N=u(46),H=u(23),E=u(177),X=u(183),R=u(189),G=u(184),V=u(173),W=u(187),q=u(434),J=u(171),K=u(179),Q=u(110),ll=u(437),nl=u(176),ul=u(438),tl=u(77),el=u(428),ol=u(427),al=u(107),il=u(6),rl=u(182),cl=u(301),sl=u(11),dl=u(33),_l=u(24),hl=u(435),fl=u(22),pl=u(172),ml=u(14),gl=u(180),bl=u(108),vl=u(181),Yl=t.X({encapsulation:2,styles:[],data:{}});function Zl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,b.b,b.a)),t.Y(1,114688,null,0,v.a,[Y.a,t.j,t.z],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,t._13(n,1)._paused)})}function yl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,u){var t=!0;"ionRefresh"===n&&(t=!1!==l.component.refreshLists(u)&&t);return t},null,null)),t.Y(1,212992,null,0,Z.a,[y.a,L.a,t.u,I.l],null,{ionRefresh:"ionRefresh"}),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(3,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,C,x)),t.Y(4,114688,null,0,w.a,[Z.a,Y.a],null,null),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n  "]))],function(l,n){l(n,1,0),l(n,4,0)},function(l,n){l(n,0,0,"inactive"!==t._13(n,1).state,t._13(n,1)._top),l(n,3,0,t._13(n,4).r.state)})}function Ll(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"empty-list",[["h1Text","OMG!"],["h3Text","You have no Lists."],["h3Textsecond","Let's change that!"],["icon","notifications"]],null,null,null,g.c,g.b)),t.Y(1,49152,null,0,U.a,[],{icon:[0,"icon"],h1Text:[1,"h1Text"],h3Text:[2,"h3Text"],h3Textsecond:[3,"h3Textsecond"]},null)],function(l,n){l(n,1,0,"notifications","OMG!","You have no Lists.","Let's change that!")},null)}function Il(l){return t._22(0,[(l()(),t.Z(0,0,null,null,12,"div",[["padding",""]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(2,0,null,null,9,"h3",[["color","gray"],["ion-text",""],["text-center",""]],null,null,null,null,null)),t.Y(3,16384,null,0,F.a,[Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(5,0,null,null,5,"i",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n              Click on\n              "])),(l()(),t.Z(7,0,null,null,2,"span",[["color","warning"],["ion-text",""]],null,null,null,null,null)),t.Y(8,16384,null,0,F.a,[Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,null,["the list"])),(l()(),t._20(-1,null,[" to Add your first Task\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "]))],function(l,n){l(n,3,0,"gray");l(n,8,0,"warning")},null)}function jl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,11,"ion-item",[["class","item item-block"]],null,null,null,M.b,M.a)),t.Y(1,1097728,null,3,$.a,[A.a,Y.a,t.j,t.z,[2,D.a]],null,null),t._18(335544320,1,{contentLabel:0}),t._18(603979776,2,{_buttons:1}),t._18(603979776,3,{_icons:1}),t.Y(5,16384,null,0,P.a,[],null,null),(l()(),t._20(-1,2,["\n              "])),(l()(),t.Z(7,0,null,2,3,"span",[],null,null,null,null,null)),t.Y(8,278528,null,0,T.h,[t.p,t.q,t.j,t.A],{ngClass:[0,"ngClass"]},null),t._15(9,{strike:0}),(l()(),t._20(10,null,[" "," "])),(l()(),t._20(-1,2,["\n            "]))],function(l,n){l(n,8,0,l(n,9,0,n.context.$implicit.state))},function(l,n){l(n,10,0,n.context.$implicit.name)})}function Tl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,9,"div",[["padding",""]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(2,0,null,null,6,"ion-list",[],null,null,null,null,null)),t.Y(3,16384,null,0,B.a,[Y.a,t.j,t.z,y.a,I.l,O.a],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.U(16777216,null,null,2,null,jl)),t.Y(6,802816,null,0,T.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),t._16(7,1),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "]))],function(l,n){l(n,6,0,t._21(n,6,0,l(n,7,0,t._13(n.parent.parent.parent,0),n.parent.context.$implicit.items)))},null)}function wl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,8,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.deleteList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(1,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(3,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(4,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(6,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Delete"])),(l()(),t._20(-1,0,["\n          "]))],function(l,n){l(n,1,0,"danger","","");l(n,4,0,"trash")},function(l,n){l(n,3,0,t._13(n,4)._hidden)})}function xl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,8,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.unshareList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(1,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(3,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(4,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(6,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Unshare"])),(l()(),t._20(-1,0,["\n          "]))],function(l,n){l(n,1,0,"danger","","");l(n,4,0,"trash")},function(l,n){l(n,3,0,t._13(n,4)._hidden)})}function kl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,12,"ion-col",[["class","col"],["col-4",""]],null,null,null,null,null)),t.Y(1,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(3,0,null,null,8,"button",[["clear",""],["color","success"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.shareList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(4,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(6,0,null,0,1,"ion-icon",[["name","share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(7,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(9,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Share"])),(l()(),t._20(-1,0,["\n          "])),(l()(),t._20(-1,null,["\n        "]))],function(l,n){l(n,4,0,"success","","");l(n,7,0,"share")},function(l,n){l(n,6,0,t._13(n,7)._hidden)})}function zl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,63,"ion-card",[],[[8,"hidden",0]],null,null,null,null)),t.Y(1,16384,null,0,X.a,[Y.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(3,0,null,null,6,"ion-card-header",[],null,null,null,null,null)),t.Y(4,16384,null,0,R.a,[Y.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(6,0,null,null,2,"h2",[["color","primary"],["ion-text",""],["text-center",""]],null,null,null,null,null)),t.Y(7,16384,null,0,F.a,[Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(8,null,["",""])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(11,0,null,null,11,"ion-card-content",[],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.goToDetails(l.context.$implicit)&&t);return t},null,null)),t.Y(12,16384,null,0,G.a,[Y.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(14,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          List Summary\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.U(16777216,null,null,1,null,Il)),t.Y(18,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.U(16777216,null,null,1,null,Tl)),t.Y(21,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(24,0,null,null,38,"ion-row",[["class","row"],["justify-content-around",""]],null,null,null,null,null)),t.Y(25,16384,null,0,V.a,[],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(27,0,null,null,8,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),t.Y(28,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.U(16777216,null,null,1,null,wl)),t.Y(31,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.U(16777216,null,null,1,null,xl)),t.Y(34,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(37,0,null,null,12,"ion-col",[["class","col"],["col-4",""]],null,null,null,null,null)),t.Y(38,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(40,0,null,null,8,"button",[["clear",""],["color","warning"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateList(l.context.$implicit)&&t);return t},N.b,N.a)),t.Y(41,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(43,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(44,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(46,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Edit name"])),(l()(),t._20(-1,0,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.U(16777216,null,null,1,null,kl)),t.Y(52,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(54,0,null,null,7,"ion-col",[["align-self-center",""],["class","col"],["col-3",""],["text-center",""]],null,null,null,null,null)),t.Y(55,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(57,0,null,null,3,"ion-note",[],null,null,null,null,null)),t.Y(58,16384,null,0,W.a,[Y.a,t.j,t.z],null,null),(l()(),t._20(59,null,["\n            ","\n          "])),t._16(60,1),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "]))],function(l,n){var u=n.component;l(n,7,0,"primary"),l(n,18,0,!n.context.$implicit.items),l(n,21,0,!!n.context.$implicit.items),l(n,31,0,!u._hideAddButton),l(n,34,0,u._hideAddButton);l(n,41,0,"warning","","");l(n,44,0,"create"),l(n,52,0,!u._hideAddButton)},function(l,n){l(n,0,0,n.component._cardOrList),l(n,8,0,n.context.$implicit.name),l(n,43,0,t._13(n,44)._hidden),l(n,59,0,t._21(n,59,0,l(n,60,0,t._13(n.parent.parent,1),n.context.$implicit.date)))})}function Sl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,5,"button",[["color","success"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.shareList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(1,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(3,0,null,0,1,"ion-icon",[["name","share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(4,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            Share\n          "]))],function(l,n){l(n,1,0,"success");l(n,4,0,"share")},function(l,n){l(n,3,0,t._13(n,4)._hidden)})}function Cl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,5,"button",[["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.deleteList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(1,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(3,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(4,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            Delete\n          "]))],function(l,n){l(n,1,0,"danger");l(n,4,0,"trash")},function(l,n){l(n,3,0,t._13(n,4)._hidden)})}function Ul(l){return t._22(0,[(l()(),t.Z(0,0,null,null,5,"button",[["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.unshareList(l.parent.context.$implicit)&&t);return t},N.b,N.a)),t.Y(1,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(3,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(4,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            Unshare\n          "]))],function(l,n){l(n,1,0,"danger");l(n,4,0,"trash")},function(l,n){l(n,3,0,t._13(n,4)._hidden)})}function Fl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,69,"ion-list",[],[[8,"hidden",0]],null,null,null,null)),t.Y(1,16384,null,0,B.a,[Y.a,t.j,t.z,y.a,I.l,O.a],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(3,0,null,null,65,"ion-item-sliding",[],null,null,null,q.b,q.a)),t.Y(4,49152,null,2,J.a,[[2,B.a],y.a,t.z,t.j,t.u],null,null),t._18(335544320,4,{item:0}),t._18(603979776,5,{_itemOptions:1}),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(8,0,null,0,35,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.goToDetails(l.context.$implicit)&&t);return t},M.b,M.a)),t.Y(9,1097728,[[4,4]],3,$.a,[A.a,Y.a,t.j,t.z,[2,D.a]],null,null),t._18(335544320,6,{contentLabel:0}),t._18(603979776,7,{_buttons:1}),t._18(603979776,8,{_icons:1}),t.Y(13,16384,null,0,P.a,[],null,null),(l()(),t._20(-1,2,["\n          "])),(l()(),t.Z(15,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),t.Y(16,16384,null,0,K.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(18,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,2,["\n          "])),(l()(),t.Z(21,0,null,2,21,"ion-row",[["class","row"],["justify-content-start",""],["wrap",""]],null,null,null,null,null)),t.Y(22,16384,null,0,V.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(24,0,null,null,8,"ion-col",[["class","col"],["col-10",""]],null,null,null,null,null)),t.Y(25,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(27,0,null,null,4,"h2",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                "])),(l()(),t.Z(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t._20(30,null,["",""])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(34,0,null,null,7,"ion-col",[["class","col"],["text-wrap",""]],null,null,null,null,null)),t.Y(35,16384,null,0,E.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(37,0,null,null,3,"ion-note",[],null,null,null,null,null)),t.Y(38,16384,null,0,W.a,[Y.a,t.j,t.z],null,null),(l()(),t._20(39,null,["\n                Created ","\n              "])),t._16(40,1),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,2,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(45,0,null,1,12,"ion-item-options",[["side","left"]],null,null,null,null,null)),t.Y(46,16384,[[5,4]],0,Q.a,[t.j,y.a],{side:[0,"side"]},null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(48,0,null,null,5,"button",[["color","warning"],["ion-button",""],["s",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateList(l.context.$implicit)&&t);return t},N.b,N.a)),t.Y(49,1097728,null,0,H.a,[[8,""],Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(51,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(52,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            Edit name\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t.U(16777216,null,null,1,null,Sl)),t.Y(56,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(59,0,null,1,8,"ion-item-options",[["side","right"]],null,null,null,null,null)),t.Y(60,16384,[[5,4]],0,Q.a,[t.j,y.a],{side:[0,"side"]},null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.U(16777216,null,null,1,null,Cl)),t.Y(63,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.U(16777216,null,null,1,null,Ul)),t.Y(66,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "]))],function(l,n){var u=n.component;l(n,46,0,"left");l(n,49,0,"warning");l(n,52,0,"create"),l(n,56,0,!u._hideAddButton);l(n,60,0,"right"),l(n,63,0,!u._hideAddButton),l(n,66,0,u._hideAddButton)},function(l,n){l(n,0,0,!n.component._cardOrList),l(n,18,0,t._2(1,"https://ui-avatars.com/api/?name=",n.context.$implicit.name,"&length=1&background=E91E63")),l(n,30,0,n.context.$implicit.name),l(n,39,0,t._21(n,39,0,l(n,40,0,t._13(n.parent.parent,1),n.context.$implicit.date))),l(n,51,0,t._13(n,52)._hidden)})}function Ml(l){return t._22(0,[(l()(),t.Z(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,Ll)),t.Y(3,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,zl)),t.Y(6,802816,null,0,T.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,Fl)),t.Y(9,802816,null,0,T.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,3,0,u._emptyTodoList),l(n,6,0,u.todoLists),l(n,9,0,u.todoLists)},null)}function $l(l){return t._22(0,[(l()(),t.Z(0,0,null,null,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,ll.b,ll.a)),t.Y(1,1228800,null,2,nl.a,[y.a],null,null),t._18(335544320,9,{_mainButton:0}),t._18(603979776,10,{_fabLists:1}),(l()(),t._20(-1,0,["\n    "])),(l()(),t.Z(5,0,null,0,5,"button",[["color","secondary"],["ion-fab",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.addList()&&t);return t},ul.b,ul.a)),t.Y(6,49152,[[9,4]],0,tl.a,[Y.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n      "])),(l()(),t.Z(8,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(9,147456,null,0,j.a,[Y.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n    "])),(l()(),t._20(-1,0,["\n  "]))],function(l,n){l(n,6,0,"secondary");l(n,9,0,"add")},function(l,n){l(n,8,0,t._13(n,9)._hidden)})}function Al(l){return t._22(0,[t._14(0,el.a,[]),t._14(0,ol.a,[]),(l()(),t.Z(2,0,null,null,5,"ion-header",[],null,null,null,null,null)),t.Y(3,16384,null,0,al.a,[Y.a,t.j,t.z,[2,il.a]],null,null),(l()(),t._20(-1,null,["\n  "])),(l()(),t.Z(5,0,null,null,1,"nav-bar",[["enabledChangeDisplay","true"]],null,[[null,"onChangeDisplay"],[null,"onClickSearch"]],function(l,n,u){var t=!0,e=l.component;"onChangeDisplay"===n&&(t=!1!=(e._cardOrList=!e._cardOrList)&&t);"onClickSearch"===n&&(t=!1!=(e._showHideSearchBar=!e._showHideSearchBar)&&t);return t},m.c,m.b)),t.Y(6,49152,null,0,rl.a,[],{title:[0,"title"],enabledChangeDisplay:[1,"enabledChangeDisplay"]},{onClickSearch:"onClickSearch",onChangeDisplay:"onChangeDisplay"}),(l()(),t._20(-1,null,["\n"])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t.Z(9,0,null,null,21,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,cl.b,cl.a)),t.Y(10,4374528,null,0,L.a,[Y.a,y.a,O.a,t.j,t.z,sl.a,dl.a,t.u,[2,il.a],[2,_l.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(12,0,null,1,5,"ion-searchbar",[],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"searchbar-animated",null],[2,"searchbar-has-value",null],[2,"searchbar-active",null],[2,"searchbar-show-cancel",null],[2,"searchbar-left-aligned",null],[2,"searchbar-has-focus",null]],[[null,"ngModelChange"]],function(l,n,u){var t=!0;"ngModelChange"===n&&(t=!1!==(l.component.users=u)&&t);return t},hl.b,hl.a)),t.Y(13,671744,null,0,fl.k,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t._17(2048,null,fl.g,null,[fl.k]),t.Y(15,16384,null,0,fl.h,[fl.g],null,null),t.Y(16,1294336,null,0,pl.a,[Y.a,y.a,t.j,t.z,[2,fl.g]],null,null),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,Zl)),t.Y(20,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,2,1,null,yl)),t.Y(23,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,Ml)),t.Y(26,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,0,1,null,$l)),t.Y(29,16384,null,0,T.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,6,0,u.titlePage,"true"),l(n,13,0,u.users),l(n,16,0),l(n,20,0,u._showSpinner),l(n,23,0,!u._showSpinner),l(n,26,0,!u._showSpinner),l(n,29,0,!u._hideAddButton)},function(l,n){var u=n.component;l(n,9,0,t._13(n,10).statusbarPadding,t._13(n,10)._hasRefresher),l(n,12,1,[u._showHideSearchBar,t._13(n,15).ngClassUntouched,t._13(n,15).ngClassTouched,t._13(n,15).ngClassPristine,t._13(n,15).ngClassDirty,t._13(n,15).ngClassValid,t._13(n,15).ngClassInvalid,t._13(n,15).ngClassPending,t._13(n,16)._animated,t._13(n,16)._value,t._13(n,16)._isActive,t._13(n,16)._showCancelButton,t._13(n,16)._shouldAlignLeft,t._13(n,16)._isFocus])})}var Dl=t.V("page-home",e,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-home",[],null,null,null,Al,Yl)),t.Y(1,245760,null,0,e,[_l.a,ml.a,gl.a,bl.a,vl.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Pl=u(170),Bl=u(175),Ol=u(51);u.d(n,"HomePageModuleNgFactory",function(){return Nl});var Nl=t.W(a,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[i.a,r.a,c.a,s.a,d.a,_.a,h.a,f.a,p.a,m.a,g.a,Dl]],[3,t.i],t.s]),t._11(4608,T.l,T.k,[t.r,[2,T.t]]),t._11(4608,fl.o,fl.o,[]),t._11(4608,fl.d,fl.d,[]),t._11(512,T.c,T.c,[]),t._11(512,fl.m,fl.m,[]),t._11(512,fl.e,fl.e,[]),t._11(512,fl.l,fl.l,[]),t._11(512,Pl.a,Pl.a,[]),t._11(512,Pl.b,Pl.b,[]),t._11(512,o.a,o.a,[]),t._11(512,Bl.a,Bl.a,[]),t._11(512,a,a,[]),t._11(256,Ol.a,e,[])])})},426:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3),u(431);var t=function(){return function(){}}()},427:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l){for(var n=[],u=1;u<arguments.length;u++)n[u-1]=arguments[u];if(!l)return"";var t=Date.now()-l;return t>6048e5?new Date(l).toDateString():t>864e5?Math.round(t/864e5).toString()+" days ago":t>36e5?Math.round(t/36e5).toString()+" hours ago":t>6e4?Math.round(t/6e4).toString()+" minutes ago":t>1e3?Math.round(t/1e3).toString()+" seconds ago ":" one second ago"},l}()},428:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l,n){return l&&null!==l?Object.values(l):[]},l}()},431:function(l,n,u){"use strict";u(427),u(432),u(428),u(426)},432:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l){return l?"Finished":"Doing"},l}()},434:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),n.b=o;var t=u(0),e=(u(5),t.X({encapsulation:2,styles:[],data:{}}));function o(l){return t._22(2,[(l()(),t._20(-1,null,["\n    "])),t._12(null,0),(l()(),t._20(-1,null,["\n    "])),t._12(null,1),(l()(),t._20(-1,null,["\n  "]))],null,null)}},435:function(l,n,u){"use strict";u.d(n,"a",function(){return r}),n.b=c;var t=u(0),e=u(46),o=u(23),a=u(2),i=u(32),r=(u(5),t.X({encapsulation:2,styles:[],data:{}}));function c(l){return t._22(0,[t._18(402653184,1,{_searchbarInput:0}),t._18(402653184,2,{_searchbarIcon:0}),t._18(402653184,3,{_cancelButton:0}),(l()(),t.Z(3,0,null,null,8,"div",[["class","searchbar-input-container"]],null,null,null,null,null)),(l()(),t.Z(4,0,null,null,3,"button",[["class","searchbar-md-cancel"],["clear",""],["color","dark"],["ion-button",""],["mode","md"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.cancelSearchbar(u)&&t);"mousedown"===n&&(t=!1!==e.cancelSearchbar(u)&&t);return t},e.b,e.a)),t.Y(5,1097728,null,0,o.a,[[8,""],a.a,t.j,t.z],{color:[0,"color"],mode:[1,"mode"],clear:[2,"clear"]},null),(l()(),t.Z(6,0,null,0,1,"ion-icon",[["name","md-arrow-back"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(7,147456,null,0,i.a,[a.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,[[2,0],["searchbarIcon",1]],null,0,"div",[["class","searchbar-search-icon"]],null,null,null,null,null)),(l()(),t.Z(9,0,[[1,0],["searchbarInput",1]],null,0,"input",[["class","searchbar-input"],["dir","auto"]],[[1,"placeholder",0],[1,"type",0],[1,"autocomplete",0],[1,"autocorrect",0],[1,"spellcheck",0]],[[null,"input"],[null,"blur"],[null,"focus"]],function(l,n,u){var t=!0,e=l.component;"input"===n&&(t=!1!==e.inputChanged(u)&&t);"blur"===n&&(t=!1!==e.inputBlurred()&&t);"focus"===n&&(t=!1!==e.inputFocused()&&t);return t},null,null)),(l()(),t.Z(10,0,null,null,1,"button",[["class","searchbar-clear-icon"],["clear",""],["ion-button",""],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.clearInput(u)&&t);"mousedown"===n&&(t=!1!==e.clearInput(u)&&t);return t},e.b,e.a)),t.Y(11,1097728,null,0,o.a,[[8,""],a.a,t.j,t.z],{mode:[0,"mode"],clear:[1,"clear"]},null),(l()(),t.Z(12,0,[[3,0]],null,2,"button",[["class","searchbar-ios-cancel"],["clear",""],["ion-button",""],["mode","ios"],["type","button"]],[[8,"tabIndex",0]],[[null,"click"],[null,"mousedown"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.cancelSearchbar(u)&&t);"mousedown"===n&&(t=!1!==e.cancelSearchbar(u)&&t);return t},e.b,e.a)),t.Y(13,1097728,[["cancelButton",4]],0,o.a,[[8,""],a.a,t.j,t.z],{mode:[0,"mode"],clear:[1,"clear"]},null),(l()(),t._20(14,0,["",""]))],function(l,n){var u=n.component;l(n,5,0,"dark","md","");l(n,7,0,"md-arrow-back");l(n,11,0,u._mode,"");l(n,13,0,"ios","")},function(l,n){var u=n.component;l(n,6,0,t._13(n,7)._hidden),l(n,9,0,u.placeholder,u.type,u._autocomplete,u._autocorrect,u._spellcheck),l(n,12,0,u._isActive?1:-1),l(n,14,0,u.cancelButtonText)})}},437:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),n.b=o;var t=u(0),e=(u(5),t.X({encapsulation:2,styles:[],data:{}}));function o(l){return t._22(0,[t._12(null,0)],null,null)}},438:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),n.b=i;var t=u(0),e=u(32),o=u(2),a=t.X({encapsulation:2,styles:[],data:{}});function i(l){return t._22(2,[(l()(),t.Z(0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(1,147456,null,0,e.a,[o.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t._13(n,1)._hidden)})}}});