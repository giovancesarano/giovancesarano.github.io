"use strict";(self.webpackChunkfrontend_contrader=self.webpackChunkfrontend_contrader||[]).push([[893],{6893:(E,c,s)=>{s.r(c),s.d(c,{default:()=>f});var d=s(6814),i=s(3302),p=s(5313),u=s(515),t=s(5879),g=s(6025),_=s(1507),h=s(1896);function m(n,l){if(1&n){const a=t.EpF();t.ynx(0),t.TgZ(1,"app-generic-table",3),t.NdJ("emitChangePage",function(e){t.CHM(a);const r=t.oxw();return t.KtG(r.changePage(e))}),t.qZA(),t.BQk()}if(2&n){const a=t.oxw();t.xp6(1),t.Q6J("pageIndex",a.pageIndex)("size",a.size)("totalElements",a.totalElements)("dataSource",a.dataSource)("displayedColumns",a.displayedColumns)("cellHeadTypes",a.cellHeadTypes)("hasSearch",!1)("hasSelect",!1)}}function P(n,l){if(1&n&&(t.TgZ(0,"div",4)(1,"span"),t._uU(2),t.ALo(3,"uppercase"),t.qZA()()),2&n){const a=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,1,a.resultConstant.nessun_risultato))}}let f=(()=>{var n;class l{constructor(o,e,r,S,v){this.genericTableService=o,this.loaderSpinnerService=e,this.prodottiService=r,this.activatedRoute=S,this.router=v,this.resultConstant=i.qA,this.size=i.aq.pageSize,this.pageIndex=i.aq.pageNumber,this.displayedColumns=i.Z0.prodotti,this.cellHeadTypes={select:"checkbox",nome:"sort"},this.listaProdotti=[]}ngOnInit(){this.getDataFromResolver()}changePage(o){this.loaderSpinnerService.show(),this.prodottiService.getListaProdotti(i.aq.pageSize,o.number).subscribe({next:e=>{this.totalElements=e.totalElements,this.pageIndex=o.number,e.content&&(this.listaProdotti=e.content,this.dataSource=new p.by(this.getMappedDataSource(this.listaProdotti))),this.genericTableService.emitFilteringStatus(!1),this.loaderSpinnerService.hide()},error:()=>this.loaderSpinnerService.hide()})}getDataFromResolver(){this.totalElements=this.activatedRoute.snapshot.data.listaProdotti.totalElements,this.pageIndex=this.activatedRoute.snapshot.data.listaProdotti.pageIndex,this.listaProdotti=this.activatedRoute.snapshot.data.listaProdotti,console.log(JSON.stringify(this.listaProdotti)),this.listaProdotti&&(this.dataSource=new p.by(this.getMappedDataSource(this.listaProdotti)))}getMappedDataSource(o){return o.map(e=>{const r=[{title:i.$I.visualizza,icon:i.fb.view,type:"icon",callback:()=>this.visualizzaProdotto(e.id)},{title:i.$I.modifica,icon:i.fb.edit,type:"icon",callback:()=>this.modificaProdotto(e.id)},{title:i.$I.elimina,icon:i.fb.delete,type:"icon",callback:()=>this.eliminaProdotto(e.id)}];return{id:e.id,name:e.name,type:e.type,price:"\u20ac "+e.price.toFixed(2),action:r}})}modificaProdotto(o){localStorage.setItem("productID",String(o)),this.router.navigate(["/gestionale/prodotti/modifica-prodotto"])}eliminaProdotto(o){this.prodottiService.deleteProdotto(o).subscribe(e=>{location.reload()}),console.log(`elimina prodotto ${o}`)}visualizzaProdotto(o){localStorage.setItem("productID",String(o)),this.router.navigate(["/gestionale/prodotti/dettaglio-prodotto"])}}return(n=l).\u0275fac=function(o){return new(o||n)(t.Y36(g.pZ),t.Y36(g.QU),t.Y36(_.A),t.Y36(h.gz),t.Y36(h.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lista-prodotti"]],standalone:!0,features:[t.jDz],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["noResult",""],[3,"pageIndex","size","totalElements","dataSource","displayedColumns","cellHeadTypes","hasSearch","hasSelect","emitChangePage"],[1,"body","mt-24"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,m,2,8,"ng-container",1),t.YNc(2,P,4,3,"ng-template",null,2,t.W1O),t.qZA()),2&o){const r=t.MAs(3);t.xp6(1),t.Q6J("ngIf",null==e.dataSource||null==e.dataSource.data?null:e.dataSource.data.length)("ngIfElse",r)}},dependencies:[u.p,d.gd,d.ez,d.O5],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100%;padding:12px;background-color:#fff;border-radius:8px}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.938rem;font-weight:700;color:#656d70;line-height:15px;text-decoration:none}"]}),l})()}}]);