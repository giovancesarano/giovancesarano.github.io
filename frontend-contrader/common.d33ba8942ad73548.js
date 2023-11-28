"use strict";(self.webpackChunkfrontend_contrader=self.webpackChunkfrontend_contrader||[]).push([[592],{6975:(f,u,e)=>{e.d(u,{x:()=>a});var g=e(8645),c=e(5879);let a=(()=>{var i;class t{constructor(){this.profileUpdatedSubject=new g.x}updateProfile(){this.profileUpdatedSubject.next()}onProfileUpdated(){return this.profileUpdatedSubject.asObservable()}}return(i=t).\u0275fac=function(r){return new(r||i)},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),t})()},3601:(f,u,e)=>{e.d(u,{p:()=>t});var g=e(553),c=e(5879),a=e(9862),i=e(1896);let t=(()=>{var s;class r{constructor(o,n){this.http=o,this.router=n,this.baseUrl=g.N.apiUrl}insertOrder(o,n){return this.http.post(this.baseUrl+"order/insert?user_id="+o,n)}readOrder(o){return this.http.get(this.baseUrl+"order/read?id="+o)}getOrdersByUserId(o){return this.http.get(this.baseUrl+"order/getAllByID?user_id="+o)}}return(s=r).\u0275fac=function(o){return new(o||s)(c.LFG(a.eN),c.LFG(i.F0))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),r})()},1507:(f,u,e)=>{e.d(u,{A:()=>s});var g=e(6306),c=e(2096),a=e(553),i=e(5879),t=e(9862);let s=(()=>{var r;class d{constructor(n){this.http=n,this.baseUrl=a.N.apiUrl,this.httpOptions={headers:new Headers({"Content-Type":"application/json"})}}resolveListaProdotti(){return this.getListaProdotti(25,0).pipe((0,g.K)(n=>(0,c.of)("NO DATA FOUND")))}getListaProdotti(n,l,..._){let p=`${this.baseUrl}product/getall?pageSize=${n}&pageNumber=${l}`;return _.forEach(h=>{if(h)for(const[O,P]of Object.entries(h))p+=`&${O}=${P}`}),this.http.get(p)}deleteProdotto(n){let l=`${this.baseUrl}product/delete/?id=${n}`;return console.log(`post to ${l}`),this.http.post(l,this.httpOptions)}getProdotto(n){return this.http.get(`${this.baseUrl}product/read?id=${n}`)}insertProdotto(n){return console.log("insertProdotto() [prodotti.service.ts]"),console.log("payload:"+JSON.stringify(n)),this.http.post(this.baseUrl+"product/insert",n)}updateProdotto(n){return console.log("updateProdotto() [prodotti.service.ts]"),this.http.post(this.baseUrl+"product/update",n)}}return(r=d).\u0275fac=function(n){return new(n||r)(i.LFG(t.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),d})()},3076:(f,u,e)=>{e.d(u,{K:()=>t});var g=e(553),c=e(5879),a=e(9862),i=e(1896);let t=(()=>{var s;class r{constructor(o,n){this.http=o,this.router=n,this.baseUrl=g.N.apiUrl}getAllProducts(){return this.http.get(this.baseUrl+"product/getall")}}return(s=r).\u0275fac=function(o){return new(o||s)(c.LFG(a.eN),c.LFG(i.F0))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),r})()},1522:(f,u,e)=>{e.d(u,{p:()=>s});var g=e(6306),c=e(2096),a=e(553),i=e(5879),t=e(9862);let s=(()=>{var r;class d{constructor(n){this.http=n,this.baseUrl=a.N.apiUrl,this.httpOptions={headers:new Headers({"Content-Type":"application/json"})}}resolveListaUtenti(){return this.getListaUtenti(15,0).pipe((0,g.K)(n=>(0,c.of)("No data")))}deleteUser(n){return this.http.post(`${this.baseUrl}user/delete/?id=${n}`,this.httpOptions)}readUser(n){return this.http.get(`${this.baseUrl}user/read/?id=${n}`)}updateUser(n){return this.http.put(this.baseUrl+"user/update",n)}getListaUtenti(n,l,..._){let p=`${this.baseUrl}user/getallexceptsuperadmin?pageSize=${n}&pageNumber=${l}`;return _.forEach(h=>{if(h)for(const[O,P]of Object.entries(h))p+=`&${O}=${P}`}),this.http.get(p)}}return(r=d).\u0275fac=function(n){return new(n||r)(i.LFG(t.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),d})()},3149:(f,u,e)=>{e.d(u,{t:()=>r});var g=e(6814),c=e(9623),a=e(3302),i=e(7700),t=e(5879),s=e(617);let r=(()=>{var d;class o{constructor(l,_){this.data=l,this.dialog=_,this.labelConstant=a.$I,this.title="",this.body="",this.title=l.title,this.body=l.body}closeDialog(){this.dialog.close(!1)}}return(d=o).\u0275fac=function(l){return new(l||d)(t.Y36(i.WI),t.Y36(i.so))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-delete-successful"]],standalone:!0,features:[t.jDz],decls:11,vars:2,consts:[[1,"container"],[1,"head"],[1,"w-100"],["src","../../../assets/images/sm-logo.svg","alt","Contrader logo"],[1,"close-icon",3,"click"],[1,"body"],[1,"title"],[1,"subtitle"]],template:function(l,_){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"mat-icon",4),t.NdJ("click",function(){return _.closeDialog()}),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6),t._uU(8),t.qZA(),t.TgZ(9,"div",7),t._uU(10),t.qZA()()()),2&l&&(t.xp6(8),t.Oqu(_.title),t.xp6(2),t.Oqu(_.body))},dependencies:[g.ez,c.hd,s.Hw],styles:[".container[_ngcontent-%COMP%]{padding:24px;width:100%;height:100%;display:flex;flex-direction:column;gap:12px}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%;height:40px;display:flex;align-items:center}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;font-size:1.125rem;right:24px;top:24px;width:34px;height:34px;background-color:#f5f7fb;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#0a4d8f;cursor:pointer}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px 0}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:0 12px;font-size:2.5rem;font-weight:500;color:#fff;line-height:none;text-decoration:none;background-color:#0a4d8f}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:300;color:#0a4d8f;line-height:none;text-decoration:none;text-align:center}"]}),o})()},1081:(f,u,e)=>{e.d(u,{g:()=>d});var g=e(6814),c=e(9623),a=e(3302),i=e(7700),t=e(5879),s=e(2296),r=e(617);let d=(()=>{var o;class n{constructor(_,p){this.data=_,this.dialog=p,this.labelConstant=a.$I,this.buttonConstant=a.$C,this.title="",this.body="",this.BUTTON_CONSTANT=a.$C,this.title=_,this.body=_}closeDialog(){this.dialog.close(!1)}confirm(){this.dialog.close(!0)}}return(o=n).\u0275fac=function(_){return new(_||o)(t.Y36(i.WI),t.Y36(i.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-generic-confirm-modal"]],standalone:!0,features:[t.jDz],decls:13,vars:3,consts:[[1,"container"],[1,"head"],[1,"w-100"],["src","../../../assets/images/sm-logo.svg","alt","Contrader logo"],[1,"close-icon",3,"click"],[1,"body"],[1,"title"],["mat-raised-button","","color","primary",1,"button-apply",3,"click"]],template:function(_,p){1&_&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"mat-icon",4),t.NdJ("click",function(){return p.closeDialog()}),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6),t._uU(8),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return p.confirm()}),t._uU(10),t.qZA(),t.TgZ(11,"button",7),t.NdJ("click",function(){return p.closeDialog()}),t._uU(12),t.qZA()()()),2&_&&(t.xp6(8),t.Oqu(p.title),t.xp6(2),t.Oqu(p.buttonConstant.conferma),t.xp6(2),t.Oqu(p.buttonConstant.annulla))},dependencies:[g.ez,c.hd,s.lW,r.Hw],styles:[".container[_ngcontent-%COMP%]{padding:24px;width:100%;height:100%;display:flex;flex-direction:column;gap:12px}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%;height:40px;display:flex;align-items:center}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;font-size:1.125rem;right:24px;top:24px;width:34px;height:34px;background-color:#f5f7fb;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#0a4d8f;cursor:pointer}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px 0}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:0 12px;font-size:2.5rem;font-weight:500;color:#fff;line-height:none;text-decoration:none;background-color:#0a4d8f}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:300;color:#0a4d8f;line-height:none;text-decoration:none;text-align:center}"]}),n})()},7914:(f,u,e)=>{e.d(u,{R:()=>g});class g{static MatchPassword(a){a.get("password").value!==a.get("password2").value?a.get("password2")?.setErrors({passwordMismatch:!0}):a.get("password2")?.setErrors(null)}}}}]);