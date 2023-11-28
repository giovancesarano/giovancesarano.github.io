"use strict";(self.webpackChunkfrontend_contrader=self.webpackChunkfrontend_contrader||[]).push([[900],{5900:(R,g,r)=>{r.r(g),r.d(g,{default:()=>L});var u=r(1896),i=r(6223),f=r(2296),Z=r(1545),m=r(9157),v=r(2032),P=r(6385),b=r(5986),C=r(617),O=r(8525),p=r(8034),I=r(6814),A=r(5940),y=r(3149),l=r(3302),x=r(1081),T=r(7914),e=r(5879),M=r(1522),D=r(7700),U=r(6025),E=r(3680);const q=["fileInput"];function k(s,c){if(1&s&&(e.TgZ(0,"div",40),e._UZ(1,"img",41),e.qZA()),2&s){const d=e.oxw();e.xp6(1),e.Q6J("src",d.imageData,e.LSH)}}function w(s,c){if(1&s&&(e.TgZ(0,"div",40)(1,"div",42),e._uU(2),e.qZA()()),2&s){const d=e.oxw();e.xp6(2),e.Oqu(d.name[0].toUpperCase()+" "+d.lastname[0].toUpperCase())}}let L=(()=>{var s;class c{constructor(o,t,a,n,_,h,N){this.router=o,this.utentiService=t,this.route=a,this._formBuilder=n,this.dialog=_,this.loginService=h,this.signupService=N,this.hasImage=!1,this.imageData="",this.errorsConstant=l.sm,this.id=0,this.userinfo_id=0,this.factory_id=0,this.cart_id=0,this.email="",this.password="",this.usertype="",this.lastname="",this.name="",this.date=new Date,this.gender="",this.nation="",this.province="",this.city="",this.address="",this.factory_name="",this.factory_province="",this.factory_city="",this.factory_address="",this.factory_description="",this.FormGroup=this._formBuilder.group({email:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),i.kI.minLength(3),i.kI.maxLength(128)]],password:["",[i.kI.required,i.kI.minLength(8),i.kI.maxLength(64)]],password2:["",[i.kI.required,i.kI.minLength(8),i.kI.maxLength(64)]],firstCtrl:[!1],usertype:["user",i.kI.required],checkbox:[!0,i.kI.requiredTrue],secondCtrl:[!1],firstname:["",[i.kI.required]],lastname:["",[i.kI.required]],birthday:["",[i.kI.required]],genre:["man",[i.kI.required]],nation:["",[i.kI.required]],province:["",[i.kI.required]],city:["",[i.kI.required]],address:["",[i.kI.required]],thirdCtrl:[!1]},{validator:T.R.MatchPassword}),this.isOptional=!1,this.hide=!0,this.isLastButtonDisabled=!1,this.isAdmin=!0,this.apiLoading=!1,this.checkBoxSelected=!1,this.log="",this.INPUT_CONSTANT=l.aq,this.ERRORS_CONSTANT=l.sm}ngOnInit(){let o=localStorage.getItem("userSession");null==o&&(o="");let t=JSON.parse(o);this.id=t.id,this.utentiService.readUser(this.id).subscribe(a=>{null!=a.image&&(this.imageData=a.image.data,this.hasImage=!0),this.userinfo_id=a.userInfoDTO.id,this.email=a.username,this.password=a.password,"ADMIN"==a.usertype?this.usertype="admin":(this.usertype="superadmin",this.isAdmin=!1),this.name=a.userInfoDTO.name,this.lastname=a.userInfoDTO.lastname,this.gender="UOMO"==a.userInfoDTO.genderType?"man":"woman",this.date=a.userInfoDTO.date,this.nation=a.userInfoDTO.nation,this.province=a.userInfoDTO.province,this.city=a.userInfoDTO.city,this.address=a.userInfoDTO.address,this.FormGroup=this._formBuilder.group({email:[this.email,[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),i.kI.minLength(3),i.kI.maxLength(128)]],password:[this.password,[i.kI.required,i.kI.minLength(8),i.kI.maxLength(64)]],password2:[this.password,[i.kI.required,i.kI.minLength(8),i.kI.maxLength(64)]],firstCtrl:[!1],usertype:["user",i.kI.required],checkbox:[!0,i.kI.requiredTrue],secondCtrl:[!1],firstname:[this.name,[i.kI.required]],lastname:[this.lastname,[i.kI.required]],birthday:[this.date.toLocaleString("EU-it"),[i.kI.required]],genre:["man",[i.kI.required]],nation:[this.nation,[i.kI.required]],province:[this.province,[i.kI.required]],city:[this.city,[i.kI.required]],address:[this.address,[i.kI.required]],thirdCtrl:[!1]},{validator:T.R.MatchPassword}),this.isAdmin?(this.factory_id=a.factoryDTO.id,this.factory_name=a.factoryDTO.name,this.factory_province=a.factoryDTO.province,this.factory_city=a.factoryDTO.city,this.factory_address=a.factoryDTO.address,this.factory_description=a.factoryDTO.description):this.cart_id=a.cart.id})}goToProfile(){this.router.navigate(["/gestionale/myprofileadmin"])}openFileInput(){this.fileInput.nativeElement.click()}onFileSelected(o){const t=o.target.files;if(t.length>0){const a=t[0];let n=new FileReader;n.readAsDataURL(a),n.onload=()=>{this.imageData=n.result}}}onUsertypeChanged(o){"user"==o.value?this.isAdmin=!1:"admin"==o.value&&(this.isAdmin=!0)}update(){let o=this.FormGroup.value.genre?.toUpperCase();o="MAN"==o?"UOMO":"DONNA";let t={id:this.id,factory_id:this.factory_id,userinfo_id:this.userinfo_id,cart_id:this.cart_id,email:this.FormGroup.value.email,usertype:this.usertype.toUpperCase(),password:this.FormGroup.value.password,lastname:this.FormGroup.value.lastname,firstname:this.FormGroup.value.firstname,birthday:this.FormGroup.value.birthday,genre:o,nation:this.FormGroup.value.nation,province:this.FormGroup.value.province,city:this.FormGroup.value.city,address:this.FormGroup.value.address,factory_name:this.factory_name,factory_description:this.factory_description,factory_address:this.factory_address,factory_city:this.factory_city,factory_province:this.factory_province,image:{id:this.id,data:this.imageData}};this.FormGroup.valid?(this.log="",this.signupService.checkEmail(t.email,t.id).subscribe({next:a=>{a&&(this.log="Email gi\xe0 in uso"),""==this.log?this.signupService.update(t).subscribe({next:n=>{null!=t.image&&(this.hasImage=!0),this.dialog.open(y.t,{width:"660px",height:"300px",disableClose:!0,data:{title:l.cm.profile_update_successful,body:l.cm.profile_update_successful2}}).afterClosed().subscribe(()=>{this.loginService.setUtenteSession(t.email,{address:t.address,city:t.city,date:t.birthday,genderType:t.genre,id:t.id,lastname:t.lastname,name:t.firstname,nation:t.nation,province:t.province},t.usertype,t.id),this.goToProfile()})},error:n=>{console.log(n),console.error(`Error: ${n.message}`),this.isLastButtonDisabled=!1,this.apiLoading=!1},complete:()=>{console.log("Observable complete")}}):(this.isLastButtonDisabled=!1,this.apiLoading=!1)}})):(this.apiLoading=!1,this.isLastButtonDisabled=!1)}elimina(){let o=this.id;this.dialog.open(x.g,{width:"660px",height:"300px",disableClose:!0,data:l.sD.cancella_utente}).afterClosed().subscribe(a=>{a&&this.utentiService.deleteUser(o).subscribe(n=>{this.dialog.open(y.t,{width:"660px",height:"300px",disableClose:!0,data:{title:l.cm.profile_delete_successful,body:l.cm.profile_delete_successful2}}).afterClosed().subscribe(()=>{this.router.navigate(["/login"])})})})}}return(s=c).\u0275fac=function(o){return new(o||s)(e.Y36(u.F0),e.Y36(M.p),e.Y36(u.gz),e.Y36(i.qu),e.Y36(D.uw),e.Y36(U.r6),e.Y36(U.Or))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-modifica-profilo"]],viewQuery:function(o,t){if(1&o&&e.Gf(q,5),2&o){let a;e.iGM(a=e.CRH())&&(t.fileInput=a.first)}},standalone:!0,features:[e.jDz],decls:122,vars:22,consts:[[1,"container2"],[1,"compX",2,"position","relative"],["class","round-img-profile",4,"ngIf"],["type","file",2,"display","none",3,"change"],["fileInput",""],[2,"border-radius","50%","width","28px","height","28px","background-color","#a6039b","bottom","4px","right","-8px","position","absolute","display","flex","align-items","center","justify-content","center","cursor","pointer",3,"click"],[2,"color","white","font-size","15px","width","fit-content","height","fit-content"],[1,"comp2",2,"padding-left","15px"],[1,"comp4"],[1,"button-confirm-container"],["mat-raised-button","",2,"padding-right","80px","padding-left","80px","background-color","#a6039b","color","white","float","right",3,"click"],[3,"formGroup"],[1,"p"],["appearance","outline",2,"flex-grow","1","padding-right","10px"],["matInput","","formControlName","lastname","name","lastname","required","","maxlength","255"],["matInput","","formControlName","firstname","name","firstname","required","","maxlength","255"],["formControlName","genre",3,"value"],["value","man"],["value","woman"],["matInput","","formControlName","birthday","placeholder","Scegli data",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","nation","required","","maxlength","255"],["matInput","","formControlName","province","required","","maxlength","2"],["matInput","","formControlName","city","required","","maxlength","255"],["matInput","","formControlName","address","required","","maxlength","255"],[1,"p3"],[1,"error"],["appearance","outline",2,"flex-grow","1","padding-right","10px","width","700px"],["matInput","","formControlName","email","name","email","required","","maxlength","128"],["formControlName","usertype",3,"value","selectionChange"],["value","user"],["value","admin"],["value","superadmin"],["name","password","matInput","","formControlName","password","required","","maxlength","64",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["name","password2","matInput","","formControlName","password2","required","","maxlength","64",3,"type"],[1,"comp1"],[1,"p2"],["mat-raised-button","",2,"font-weight","bold","padding-right","30px","padding-left","30px","border","1px solid #da0b00","color","#da0b00","background-color","white","float","right",3,"click"],[1,"round-img-profile"],[2,"width","64px","height","64px","border-radius","32px","object-fit","cover","object-position","center",3,"src"],[1,"flex-items"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,k,2,1,"div",2),e.YNc(3,w,3,1,"div",2),e.TgZ(4,"input",3,4),e.NdJ("change",function(n){return t.onFileSelected(n)}),e.qZA(),e.TgZ(6,"div",5),e.NdJ("click",function(){return t.openFileInput()}),e.TgZ(7,"mat-icon",6),e._uU(8,"edit"),e.qZA()()(),e.TgZ(9,"div",7)(10,"h3"),e._uU(11),e.qZA()(),e.TgZ(12,"div",8)(13,"div",9)(14,"button",10),e.NdJ("click",function(){return t.update()}),e._uU(15,"SALVA"),e.qZA()()()(),e._UZ(16,"br")(17,"br"),e.TgZ(18,"form",11)(19,"div",0)(20,"p",12),e._uU(21,"Informazioni Generali"),e.qZA()(),e.TgZ(22,"div",0)(23,"mat-form-field",13)(24,"mat-label"),e._uU(25,"Cognome"),e.qZA(),e._UZ(26,"input",14),e.qZA(),e.TgZ(27,"mat-form-field",13)(28,"mat-label"),e._uU(29,"Nome"),e.qZA(),e._UZ(30,"input",15),e.qZA()(),e.TgZ(31,"div",0)(32,"mat-form-field",13)(33,"mat-label"),e._uU(34,"Genere"),e.qZA(),e.TgZ(35,"mat-select",16)(36,"mat-option",17),e._uU(37,"Uomo"),e.qZA(),e.TgZ(38,"mat-option",18),e._uU(39,"Donna"),e.qZA()()(),e.TgZ(40,"mat-form-field",13)(41,"mat-label"),e._uU(42,"Data"),e.qZA(),e._UZ(43,"input",19)(44,"mat-datepicker-toggle",20)(45,"mat-datepicker",null,21),e.qZA()(),e.TgZ(47,"div",0)(48,"mat-form-field",13)(49,"mat-label"),e._uU(50,"Nazione"),e.qZA(),e._UZ(51,"input",22),e.qZA(),e.TgZ(52,"mat-form-field",13)(53,"mat-label"),e._uU(54,"Provincia"),e.qZA(),e._UZ(55,"input",23),e.qZA(),e.TgZ(56,"mat-form-field",13)(57,"mat-label"),e._uU(58,"Citt\xe0"),e.qZA(),e._UZ(59,"input",24),e.qZA(),e.TgZ(60,"mat-form-field",13)(61,"mat-label"),e._uU(62,"Indirizzo"),e.qZA(),e._UZ(63,"input",25),e.qZA()(),e.TgZ(64,"div",0)(65,"p",26),e._uU(66),e.qZA()(),e._UZ(67,"br")(68,"br"),e.TgZ(69,"div",0)(70,"p",27),e._uU(71),e.qZA()(),e.TgZ(72,"div",0)(73,"p",12),e._uU(74,"Informazioni Accesso"),e.qZA()(),e.TgZ(75,"div",0)(76,"mat-form-field",28)(77,"mat-label"),e._uU(78,"Email"),e.qZA(),e._UZ(79,"input",29),e.TgZ(80,"mat-error"),e._uU(81),e.qZA()(),e.TgZ(82,"mat-form-field",28)(83,"mat-label"),e._uU(84,"Tipologia Utente"),e.qZA(),e.TgZ(85,"mat-select",30),e.NdJ("selectionChange",function(n){return t.onUsertypeChanged(n)}),e.TgZ(86,"mat-option",31),e._uU(87,"User"),e.qZA(),e.TgZ(88,"mat-option",32),e._uU(89,"Admin"),e.qZA(),e.TgZ(90,"mat-option",33),e._uU(91,"SuperAdmin"),e.qZA()()()(),e.TgZ(92,"div",0)(93,"mat-form-field",13)(94,"mat-label"),e._uU(95,"Password"),e.qZA(),e._UZ(96,"input",34),e.TgZ(97,"button",35),e.NdJ("click",function(){return t.hide=!t.hide}),e.TgZ(98,"mat-icon"),e._uU(99),e.qZA()(),e.TgZ(100,"mat-error"),e._uU(101),e.qZA()(),e.TgZ(102,"mat-form-field",13)(103,"mat-label"),e._uU(104,"Conferma password"),e.qZA(),e._UZ(105,"input",36),e.TgZ(106,"button",35),e.NdJ("click",function(){return t.hide=!t.hide}),e.TgZ(107,"mat-icon"),e._uU(108),e.qZA()(),e.TgZ(109,"mat-error"),e._uU(110),e.qZA()()()(),e._UZ(111,"br"),e.TgZ(112,"div",0)(113,"div",37)(114,"p",12),e._uU(115,"Gestione Account"),e.qZA(),e.TgZ(116,"p",38),e._uU(117,"Puoi eliminare il tuo account e tutti i dati associati ad esso"),e.qZA()(),e.TgZ(118,"div",8)(119,"div",9)(120,"button",39),e.NdJ("click",function(){return t.elimina()}),e._uU(121,"ELIMINA"),e.qZA()()()()),2&o){const a=e.MAs(46);e.xp6(2),e.Q6J("ngIf",t.hasImage),e.xp6(1),e.Q6J("ngIf",!t.hasImage),e.xp6(8),e.AsE("",t.name," ",t.lastname,""),e.xp6(7),e.Q6J("formGroup",t.FormGroup),e.xp6(17),e.Q6J("value",t.gender),e.xp6(8),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(22),e.Oqu(t.INPUT_CONSTANT.campi_obbligatori),e.xp6(5),e.Oqu(t.log),e.xp6(10),e.Oqu(t.FormGroup.controls.email.hasError("pattern")?t.errorsConstant.input.email_pattern:""===t.FormGroup.controls.email.value?t.errorsConstant.required:t.FormGroup.controls.email.hasError("minlength")?t.errorsConstant.input.min_length_3:t.errorsConstant.input.max_length_128),e.xp6(4),e.Q6J("value",t.usertype),e.xp6(11),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(2),e.Oqu(""===t.FormGroup.controls.password.value?"Campo obbligatorio":t.FormGroup.controls.password.hasError("minlength")?"Almeno 8 caratteri":""),e.xp6(4),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(2),e.Oqu(t.FormGroup.controls.password2.hasError("passwordMismatch")?"Le password devono coincidere":"")}},dependencies:[I.ez,I.O5,u.Bz,f.ot,f.lW,f.RK,Z.T5,i.u5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.nD,i.UX,i.sg,i.u,m.lN,m.KE,m.hX,m.TO,m.R9,P.t,v.c,v.Nt,b.p9,C.Ps,C.Hw,O.LD,O.gD,E.ey,p.FA,p.Mq,p.hl,p.nW,A.Cq],styles:['.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;background-color:#0a4a89;background-size:cover;background-repeat:no-repeat;background-position:center center}[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper{height:10px!important}[_nghost-%COMP%]     .mat-mdc-form-field{margin:0!important}[_nghost-%COMP%]     .mat-stepper-horizontal-line{margin:-1!important;border-top-width:-1!important;border-top-style:solid;flex:none;height:19px!important;margin:0!important;min-width:0!important;border-top-color:transparent!important}[_nghost-%COMP%]     .mat-stepper-horizontal-line:before{content:">"}[_nghost-%COMP%]     .mat-step-icon-state-edit{background-color:#41cf0d}.styled-image[_ngcontent-%COMP%]{position:fixed;top:20px;left:20px;width:200px;height:130px;color:#fff}.form-cont[_ngcontent-%COMP%]{width:50%;padding:20px;border-radius:15px;background-color:#fff}.bottom-form-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:40px;margin-top:10px}.form-input-row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-mdc-form-field[_ngcontent-%COMP%]{margin-top:16px}.container2[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100%;padding:2px;background-color:#fff;border-radius:8px}.container2[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.container2[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.938rem;font-weight:700;color:#656d70;line-height:15px;text-decoration:none}.comp1[_ngcontent-%COMP%], .comp2[_ngcontent-%COMP%], .comp3[_ngcontent-%COMP%], .comp4[_ngcontent-%COMP%]{flex-grow:1}.compX[_ngcontent-%COMP%]{flex-grow:0}.p[_ngcontent-%COMP%]{color:#9b999d;font-weight:700}.p2[_ngcontent-%COMP%]{color:#9b999d}.p3[_ngcontent-%COMP%]{color:#9b999d;font-size:12px}.error[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px;white-space:pre-line;font-size:1.5rem;font-weight:500;color:#d32f2f;line-height:19px}.round-img-profile[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%;margin-right:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#47caff}.flex-items[_ngcontent-%COMP%]{display:flex;align-items:center;width:-moz-fit-content;width:fit-content;color:#fff;font-size:24px;line-height:1;font-weight:500}']}),c})()}}]);