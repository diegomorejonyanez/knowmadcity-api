(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d8a4"],{d277:function(t,e,r){"use strict";r.r(e);var o,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{staticClass:"authentication-bg"},[r("PageHeader",{attrs:{title:t.title,items:t.items}}),r("div",{staticClass:"clearfix mb-3"},[r("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(e){t.$bvModal.show("modal"),t.editMode=!1}}},[t._v("Crear Usuario")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card ",staticStyle:{"background-color":"rgba(0,0,0,0.5)",color:"#fff"}},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"}),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Mostrar "),r("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" usuarios ")],1)])]),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Buscar: "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",staticStyle:{"background-color":"rgba(255,255,255,0.5)",color:"#fff","border-radius":"25px"},attrs:{type:"Buscar Usuario",placeholder:"Buscar Usuario..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),r("div",{staticClass:"table-responsive mb-0"},[r("b-table",{attrs:{items:t.users,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(Tipo_de_Usuario)",fn:function(e){return["Master"===e.item.tipo?r("b-badge",{attrs:{variant:"success"}},[t._v("Administrador ")]):r("b-badge",{attrs:{variant:"info"}},[t._v("Supervisor")])]}},{key:"cell(estado)",fn:function(e){return["activo"===e.item.status?r("b-badge",{attrs:{variant:"success"}},[t._v(" Activo ")]):r("b-badge",{attrs:{variant:"danger"}},[t._v(" Inactivo ")])]}},{key:"cell(actions)",fn:function(e){return[r("b-dropdown",{attrs:{size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),r("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[r("b-dropdown-item-button",{on:{click:function(r){t.editMode=!0,t.ver=!1,t.setear(e.item.id)}}},[t._v(" Editar Usuario")]),r("b-dropdown-item-button",{on:{click:function(r){return t.eliminarCargo(e.item.id)}}},[t._v(" Eliminar Usuario")]),r("b-dropdown-item-button",{on:{click:function(r){t.editMode=!1,t.ver=!0,t.setear(e.item.id)}}},[t._v(" Ver Usuario")])],1)]}}])})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])]),r("b-modal",{attrs:{id:"modal",false:"",size:"lg","hide-footer":"",title:"Gestión de usuarios","ok-only":""}},[r("ValidationObserver",{ref:"form"},[r("form-wizard",{attrs:{"next-button-text":"Siguiente","back-button-text":"Anterior","finish-button-text":"---",color:"#7fa3a3",transition:"fade"}},[r("tab-content",{attrs:{title:"Información de usuario",subtitle:"Paso 1",icon:"ri-user-3-fill"}},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Nombre ")]),r("ValidationProvider",{attrs:{name:"nombre",rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:t.form.nombre},on:{input:function(e){e.target.composing||t.$set(t.form,"nombre",e.target.value)}}}),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Email")]),r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:t.editMode},domProps:{value:t.form.email},on:{keyup:function(e){return t.setEmail()},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}])})],1)])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",[r("label",[t._v("Imagen")]),r("div",{attrs:{id:"preview mb-2"}},[r("p",{attrs:{align:"center"}},[t.url?r("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"200",height:"200",src:t.url}}):t._e()])]),r("b-form-file",{attrs:{placeholder:"Seleccione su image...","drop-placeholder":"Drop file here..."},on:{change:t.onFileChange},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1)],1),r("tab-content",{attrs:{title:"Tipo de Usuario",subtitle:"Paso 2",icon:"ri-apps-2-fill"}},[r("ValidationObserver",{ref:"form"},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Tipo")]),r("ValidationProvider",{attrs:{name:"tipo",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.tipo,expression:"form.tipo"}],staticClass:"form-control form-control-lg",attrs:{name:"tipo"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"tipo",e.target.multiple?r:r[0])},function(e){return t.setRoles()}]}},[r("option",{attrs:{value:"Master"}},[t._v("Administrador")]),r("option",{attrs:{value:"Administrador"}},[t._v("Supervisor")])]),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}])})],1)])],1),r("hr"),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Estatus")]),r("ValidationProvider",{attrs:{name:"status",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control form-control-lg",attrs:{name:"tipo"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"activo"}},[t._v("Activo")]),r("option",{attrs:{value:"inactivo"}},[t._v("Inactivo")])]),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}])})],1)])],1),t.editMode?t._e():r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Contraseña")]),r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}],null,!1,3329201509)})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[t._v("Confirmar contraseña")]),r("ValidationProvider",{attrs:{name:"repass",rules:"required|confirmed:password"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.repass,expression:"form.repass"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:t.form.repass},on:{input:function(e){e.target.composing||t.$set(t.form,"repass",e.target.value)}}}),r("span",{staticStyle:{color:"red"}},[t._v(t._s(o[0]))])]}}],null,!1,3018238149)})],1)])],1)],1)],1),r("tab-content",{attrs:{title:"Crear/Actualizar Usuario",subtitle:"Paso 4",icon:"ri-save-2-fill"}},[t.ver||t.editMode?t._e():r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Crear Usuario")]),!t.ver&&t.editMode?r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Editar Usuario")]):t._e()])],1)],1)],1),r("footer",{staticClass:"footer dark",staticStyle:{"background-color":"#505d69",color:"#fff"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[t._v(" 2021 © ")]),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"text-sm-right d-none d-sm-block"},[t._v(" Desarrollado por © Innova Tu Hotel ")])])])])])],1)},s=[],i=r("ade3"),n=r("1da1"),l=r("5530"),c=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("6dfc"),r("4a7a")),u=r.n(c),d=r("92c3"),f=r.n(d),m=r("2f62"),p=r("7bb1"),v=r("5658"),h=r("2579"),b=r("2ee4"),g=(r("da93"),o={components:{vueDropzone:f.a,Layout:v["a"],PageHeader:h["a"],ValidationProvider:p["b"],ValidationObserver:p["a"],vSelect:u.a,FormWizard:b["FormWizard"],TabContent:b["TabContent"]},data:function(){return{title:"Administracion de usuarios",items:[{text:"Gestión corporativa",color:"#ffffff"},{text:"Usuarios",color:"#ffffff",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[5,10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["nombre","Tipo_de_Usuario","estado","actions"],users:[],areas:[],cargos:[],regionales:[],regional:[],editMode:!1,form:{id:"",area_id:"",nombre:"",username:"",apellido:"",email:"",telefono:"",tipo:"",sexo:"",entidad:"",cargo:"",codigo:"",foto:"",password:"",repass:"",roles:"",direccion:"",regional:"",status:""}}},computed:Object(l["a"])({},Object(m["d"])(["counter"])),created:function(){this.listarUsers()},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["guardarUsuario"])),{},{submit:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("email submitted!");case 1:case"end":return t.stop()}}),t)})))()},switchLoc:function(){var t=this;this.editMode?this.$refs.form.validate().then((function(e){e&&t.editarUsuario()})):this.$refs.form.validate().then((function(e){e&&t.agregarUsuario()}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},agregarUsuario:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in r=new FormData,o=t.form,o)r.append(a,o[a]);return t.file&&r.append("filename",t.file),e.next=6,t.axios.post("api/user/create",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var r in t.$swal("Creado!!!","","success"),t.listarUsers(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),o)t.form[r]=""})).catch((function(e){t.$swal("Nose pudo crear este email esta siendo usado por otro usuario","","warning")}));case 6:case"end":return e.stop()}}),e)})))()},editarUsuario:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in r=new FormData,o=t.form,o)r.append(a,o[a]);return t.file&&r.append("filename",t.file),e.next=6,t.axios.post("api/user/update",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var r in t.$swal("Editado con exito","","success"),t.listarUsers(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),o)t.form[r]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 6:case"end":return e.stop()}}),e)})))()},setear:function(t){for(var e=0;e<this.users.length;e++)if(this.users[e].id===t)return this.form.id=this.users[e].id,this.form.nombre=this.users[e].nombre,this.form.username=this.users[e].username,this.form.apellido=this.users[e].apellido,this.form.email=this.users[e].email,this.form.telefono=this.users[e].telefono,this.form.tipo=this.users[e].tipo,this.form.sexo=this.users[e].sexo,this.form.entidad=this.users[e].entidad,this.form.cargo=this.users[e].cargo,this.form.regional=this.users[e].regional,this.form.codigo=this.users[e].codigo,this.form.tipo_tecnico=this.users[e].tipo_tecnico,this.form.cuenta=this.users[e].cuenta,this.form.area_id=this.users[e].area_id,this.form.nombre_cuenta=this.users[e].nombre_cuenta,this.form.tipo_tecnico=this.users[e].tipo_tecnico,this.form.tipo_cuenta=this.users[e].tipo_cuenta,this.form.codigo=this.users[e].codigo,this.form.status=this.users[e].status,this.form.direccion=this.users[e].direccion,this.form.dependencia=this.users[e].dependencia,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarUsers:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("api/user/all").then((function(e){t.users=e.data.rows})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},listarregional:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("api/regional").then((function(e){t.regionales=e.data.rows})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},setEmail:function(){this.form.username=this.form.email},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e)},onFileChangeFirma:function(t){var e=t.target.files[0];this.url_firma=URL.createObjectURL(e)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var t=localStorage.getItem("token");this.guardarUsuario(t)}else this.$router.push({name:"Home"})}})},Object(i["a"])(o,"created",(function(){this.session(),this.listarUsers()})),Object(i["a"])(o,"computed",{rows:function(){return this.users.length}}),o),_=g,w=r("2877"),C=Object(w["a"])(_,a,s,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d21d8a4.3bde5f2e.js.map