(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1b28"],{"7c17":function(t,e,a){"use strict";a.r(e);var r,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("b-card",{staticClass:"p-3 text-left",staticStyle:{"max-height":"552","min-height":"552px"},attrs:{"no-body":""}},[a("b-row",[a("b-col",[a("img",{staticClass:"rounded-circle",attrs:{width:"100%",src:t.cajero.entidad.imagen,"data-holder-rendered":"true"}})])],1),a("blockquote",{staticClass:"blockquote mb-0"},[a("h2",[t._v(t._s(t.cajero.tipo)+"-"+t._s(t.cajero.codigo)+"("+t._s(t.cajero.tipologia)+")")]),a("h5",[t._v(t._s(t.cajero.entidad_bancaria))]),a("p",{staticStyle:{margin:"0"}},[t._v("Terminal: "+t._s(t.cajero.terminal))]),a("p",{staticStyle:{margin:"0"}},[t._v("Administrador de seguridad: "+t._s(t.cajero.administrado))]),a("p",{staticStyle:{margin:"0"}},[t._v("Ciudad: "+t._s(t.cajero.ciudad.ciudad))]),a("p",{staticStyle:{margin:"0"}},[t._v("Direccion: "+t._s(t.cajero.direccion))]),a("footer",{staticClass:"blockquote-footer"},[a("small",{staticClass:"text-muted"},[t._v(" Cumpleaños "),a("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.cajero.cumpleanos))])])])])],1)],1),a("div",{staticClass:"col-lg-7"},[a("Trazabilidad")],1),a("div",{staticClass:"col-lg-12"},[a("Album")],1)])],1)},i=[],s=a("ade3"),n=a("1da1"),c=a("5530"),l=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("92c3")),d=a.n(l),u=a("2f62"),m=a("7bb1"),f=a("5658"),p=a("2579"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{"min-height":"552px"}},[a("div",{staticClass:"card-body"},[a("b-dropdown",{staticClass:"float-right",attrs:{right:"","toggle-class":"arrow-none card-drop",variant:"white"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"mdi mdi-dots-vertical"})]},proxy:!0}])},[a("b-dropdown-item",[t._v("Sales Report")]),a("b-dropdown-item",[t._v("Export Report")]),a("b-dropdown-item",[t._v("Profit")]),a("b-dropdown-item",[t._v("Action")])],1),a("h4",{staticClass:"card-title mb-4"},[t._v("Reportes")]),a("div",{staticClass:"clearfix mb-3"},[a("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(e){t.$bvModal.show("modal"),t.editMode=!1}}},[t._v("Crear reporte")])],1),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Search: "),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive"},[a("b-table",{attrs:{items:t.transactionData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-dropdown",{attrs:{size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),a("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!0,t.ver=!1,t.setear(e.item.id)}}},[t._v(" Editar ")]),a("b-dropdown-item-button",{on:{click:function(a){return t.eliminar(e.item.id)}}},[t._v(" Eliminar ")]),a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!1,t.ver=!0,t.setear(e.item.id)}}},[t._v(" Ver ")])],1)]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])],1),a("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Gestión de cargos","hide-footer":""}},[a("ValidationObserver",{ref:"form"},[a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Tipo de reporte ")]),a("ValidationProvider",{attrs:{name:"Tipo de reporte",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.tipo,expression:"form.tipo"}],staticClass:"form-control ",attrs:{name:"cumpleanos",disabled:t.ver},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"tipo",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Tipo 1"}},[t._v("Tipo 1")]),a("option",{attrs:{value:"Tipo 6"}},[t._v("Tipo 6")]),a("option",{attrs:{value:"Tipo 4"}},[t._v("Tipo 4")]),a("option",{attrs:{value:"Tipo 2"}},[t._v("Tipo 2")])]),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1),a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Fecha ")]),a("ValidationProvider",{attrs:{name:"fecha",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"date",value:"2019-08-19",type:"date",disabled:t.ver},model:{value:t.form.fecha,callback:function(e){t.$set(t.form,"fecha",e)},expression:"form.fecha"}}),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)]),a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Mes de reporte ")]),a("ValidationProvider",{attrs:{name:"cumpleaños",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.mes,expression:"form.mes"}],staticClass:"form-control ",attrs:{name:"cumpleanos",disabled:t.ver},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"mes",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Enero"}},[t._v("Enero")]),a("option",{attrs:{value:"Febrero"}},[t._v("Febrero")]),a("option",{attrs:{value:"Marzo"}},[t._v("Marzo")]),a("option",{attrs:{value:"Abril"}},[t._v("Abril")]),a("option",{attrs:{value:"Mayo"}},[t._v("Mayo")]),a("option",{attrs:{value:"Junio"}},[t._v("Junio")]),a("option",{attrs:{value:"Julio"}},[t._v("Julio")]),a("option",{attrs:{value:"Agosto"}},[t._v("Agosto")]),a("option",{attrs:{value:"Septiembre"}},[t._v("Septiembre")]),a("option",{attrs:{value:"Octubre"}},[t._v("Octubre")]),a("option",{attrs:{value:"Noviembre"}},[t._v("Noviembre")]),a("option",{attrs:{value:"Diciembre"}},[t._v("Diciembre")])]),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1),a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Descripción")]),a("ValidationProvider",{attrs:{name:"descripcion",rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.descripcion,expression:"form.descripcion"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:t.ver},domProps:{value:t.form.descripcion},on:{input:function(e){e.target.composing||t.$set(t.form,"descripcion",e.target.value)}}}),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1),a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Cambio de estado ")]),a("ValidationProvider",{attrs:{name:"cumpleaños",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.estado,expression:"form.estado"}],staticClass:"form-control ",attrs:{name:"cumpleanos",disabled:t.ver},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"estado",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Estado 1"}},[t._v("Estado 1")]),a("option",{attrs:{value:"Estado 4"}},[t._v("Estado 4")]),a("option",{attrs:{value:"Estado 3"}},[t._v("Estado 3")])]),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1)],1),t.ver||t.editMode?t._e():a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Guardar")]),!t.ver&&t.editMode?a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Editar")]):t._e()],1)],1)},v=[],b={components:{ValidationProvider:m["b"],ValidationObserver:m["a"]},data:function(){return{titulo:"hoal",transactionData:[],ver:!1,editMode:!1,totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,25,50],filter:null,filterOn:[],sortBy:"orderid",sortDesc:!1,fields:[{key:"fecha",sortable:!0,label:"Fecha"},{key:"mes",sortable:!0,label:"mes"},{key:"tipo",sortable:!0,label:"Tipo"},{key:"estado",sortable:!0,label:"Estado"},{key:"descripcion",sortable:!0,label:"Descripcion"},{key:"action"}],form:{id:"",fecha:"",tipo:"",estado:"",descripcion:""}}},computed:{rows:function(){return this.transactionData.length}},mounted:function(){this.totalRows=this.transactionData.length,this.form.id_cajero=this.$route.params.id,this.listar()},methods:{switchLoc:function(){var t=this;this.editMode?this.$refs.form.validate().then((function(e){e&&t.editar()})):this.$refs.form.validate().then((function(e){e&&t.agregarCargo()}))},agregarCargo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return e.next=5,t.axios.post("api/trazabilidad_ath",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var a in t.$swal("Agregado exito!","","success"),t.listar(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),r)t.form[a]=""})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 5:case"end":return e.stop()}}),e)})))()},editar:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return e.next=5,t.axios.put("api/trazabilidad_ath",a).then((function(e){if(200==e.status)for(var a in t.$swal("Editado con exito","","success"),t.listar(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),r)t.form[a]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 5:case"end":return e.stop()}}),e)})))()},eliminars:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=new FormData,r.append("id",t),a.next=4,e.axios.post("api/trazabilidad_ath/delete",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("Eliminado con exito!","","success"),e.listar())})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 4:case"end":return a.stop()}}),a)})))()},eliminar:function(t){var e=this;this.$swal({title:"Desea borrar este reporte?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&e.eliminars(t)}))},resete:function(){var t=this.form;for(var e in t)this.form[e]="";this.form.id_cajero=this.$route.params.id},setear:function(t){for(var e=0;e<this.transactionData.length;e++)if(this.transactionData[e].id===t)return this.form.id=this.transactionData[e].id,this.form.tipo=this.transactionData[e].tipo,this.form.mes=this.transactionData[e].mes,this.form.fecha=this.transactionData[e].fecha,this.form.descripcion=this.transactionData[e].descripcion,this.form.estado=this.transactionData[e].estado,this.form.id_cajero=this.$route.params.id,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listar:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("id",t.$route.params.id),e.next=4,t.axios.post("api/trazabilidad_ath/find",a).then((function(e){t.transactionData=e.data})).catch((function(t){console.log("error"+t)}));case 4:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},g=b,_=a("2877"),w=Object(_["a"])(g,h,v,!1,null,null,null),C=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.modoTable,expression:"!modoTable"}],staticClass:"card"},[a("div",{staticClass:"card-body"},[a("b-dropdown",{staticClass:"float-right",attrs:{right:"","toggle-class":"arrow-none card-drop",variant:"white"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"mdi mdi-dots-vertical"})]},proxy:!0}])},[a("b-dropdown-item",{on:{click:function(e){t.modoTable=!0}}},[t._v("Gestionar Album")]),t._l(t.transactionData,(function(e){return a("b-dropdown-item",{key:e.id,on:{click:function(a){return t.loadAlbum(e.id)}}},[t._v("Album - "+t._s(e.fecha))])}))],2),a("h4",{staticClass:"card-title"},[t._v("Álbum")]),a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":t.ur_fachada}},[a("div",{staticClass:"text-muted"},[a("h5",{staticClass:"text-white"},[t._v("Fachada")])])]),a("b-carousel-slide",{attrs:{"img-src":t.ur_site}},[a("div",{staticClass:"text-muted"},[a("h5",{staticClass:"text-white"},[t._v("Site")])])]),a("b-carousel-slide",{attrs:{"img-src":t.ur_frente}},[a("div",{staticClass:"text-muted"},[a("h5",{staticClass:"text-white"},[t._v("Frente")])])]),a("b-carousel-slide",{attrs:{"img-src":t.ur_perimetro}},[a("div",{staticClass:"text-muted"},[a("h5",{staticClass:"text-white"},[t._v("Perimetro")])])])],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modoTable,expression:"modoTable"}],staticClass:"card-body"},[a("b-dropdown",{staticClass:"float-right",attrs:{right:"","toggle-class":"arrow-none card-drop",variant:"white"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"mdi mdi-dots-vertical"})]},proxy:!0}])},[a("b-dropdown-item",{on:{click:function(e){t.modoTable=!1}}},[t._v("Ver álbum")])],1),a("h4",{staticClass:"card-title mb-4"},[t._v("Gestión de álbum")]),a("div",{staticClass:"clearfix mb-3"},[a("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(e){t.$bvModal.show("modal_album"),t.editMode=!1}}},[t._v("Crear")])],1),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Search: "),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive"},[a("b-table",{attrs:{items:t.transactionData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-dropdown",{attrs:{size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),a("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!0,t.ver=!1,t.setear(e.item.id)}}},[t._v(" Editar ")]),a("b-dropdown-item-button",{on:{click:function(a){return t.eliminar(e.item.id)}}},[t._v(" Eliminar ")]),a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!1,t.ver=!0,t.setear(e.item.id)}}},[t._v(" Ver ")])],1)]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])],1),a("b-modal",{attrs:{id:"modal_album",false:"",size:"lg",title:"Gestión de trazabilidad","hide-footer":""}},[a("ValidationObserver",{ref:"form"},[a("b-row",{staticClass:"mb-2"},[a("b-col",[a("label",[t._v("Perímetro")]),a("div",{attrs:{id:"preview mb-2"}},[t.url_perimetro?a("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"100%",src:t.url_perimetro}}):t._e()]),a("b-form-file",{attrs:{placeholder:"Seleccione su image...","drop-placeholder":"Drop file here..."},on:{change:t.onFileChangePerimetro},model:{value:t.perimetro,callback:function(e){t.perimetro=e},expression:"perimetro"}})],1),a("b-col",[a("label",[t._v("Site")]),a("div",{attrs:{id:"preview mb-2"}},[t.url_site?a("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"100%",src:t.url_site}}):t._e()]),a("b-form-file",{attrs:{placeholder:"Seleccione su firma...","drop-placeholder":"Drop file here..."},on:{change:t.onFileChangeSite},model:{value:t.site,callback:function(e){t.site=e},expression:"site"}})],1)],1),a("b-row",{staticClass:"mb-2"},[a("b-col",[a("label",[t._v("Frente")]),a("div",{attrs:{id:"preview mb-2"}},[t.url_frente?a("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"100%",src:t.url_frente}}):t._e()]),a("b-form-file",{attrs:{placeholder:"Seleccione su image...","drop-placeholder":"Drop file here..."},on:{change:t.onFileChangeFrente},model:{value:t.frente,callback:function(e){t.frente=e},expression:"frente"}})],1),a("b-col",[a("label",[t._v("Fachada")]),a("div",{attrs:{id:"preview mb-2"}},[t.url_fachada?a("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"100%",src:t.url_fachada}}):t._e()]),a("b-form-file",{attrs:{placeholder:"Seleccione su firma...","drop-placeholder":"Drop file here..."},on:{change:t.onFileChangeFachada},model:{value:t.fachada,callback:function(e){t.fachada=e},expression:"fachada"}})],1)],1),a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Fecha ")]),a("ValidationProvider",{attrs:{name:"fecha",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"date",value:"2019-08-19",type:"date",disabled:t.ver},model:{value:t.form.fecha,callback:function(e){t.$set(t.form,"fecha",e)},expression:"form.fecha"}}),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1),a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Observaciones")]),a("ValidationProvider",{attrs:{name:"descripcion",rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.observaciones,expression:"form.observaciones"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:t.ver},domProps:{value:t.form.observaciones},on:{input:function(e){e.target.composing||t.$set(t.form,"observaciones",e.target.value)}}}),a("span",{staticStyle:{color:"red"}},[t._v(t._s(r[0]))])]}}])})],1)])],1)],1),t.ver||t.editMode?t._e():a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Guardar")]),!t.ver&&t.editMode?a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Editar")]):t._e()],1)],1)},y=[],k={components:{ValidationProvider:m["b"],ValidationObserver:m["a"]},data:function(){return{transactionData:[],modoTable:!1,ver:!1,editMode:!1,totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,25,50],filter:null,filterOn:[],sortBy:"orderid",sortDesc:!1,fields:[{key:"fecha",sortable:!0,label:"Fecha"},{key:"observaciones",sortable:!0,label:"Oservaciones"},{key:"action"}],url_frente:null,url_fachada:null,url_site:null,url_perimetro:null,ur_frente:null,ur_fachada:null,ur_site:null,ur_perimetro:null,form:{id:"",codigo:"",descripcion:"",fecha:""}}},computed:{rows:function(){return this.transactionData.length}},mounted:function(){this.totalRows=this.transactionData.length,this.form.codigo=this.$route.params.id,this.form.entidad_id=this.$route.params.entidad,this.listar()},methods:{onFileChangePerimetro:function(t){var e=t.target.files[0];this.url_perimetro=URL.createObjectURL(e)},onFileChangeFachada:function(t){var e=t.target.files[0];this.url_fachada=URL.createObjectURL(e)},onFileChangeFrente:function(t){var e=t.target.files[0];this.url_frente=URL.createObjectURL(e)},onFileChangeSite:function(t){var e=t.target.files[0];this.url_site=URL.createObjectURL(e)},switchLoc:function(){var t=this;this.editMode?this.$refs.form.validate().then((function(e){e&&t.editar()})):this.$refs.form.validate().then((function(e){e&&t.agregarCargo()}))},agregarCargo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return t.perimetro&&a.append("perimetro",t.perimetro),t.site&&a.append("site",t.site),t.frente&&a.append("frente",t.frente),t.fachada&&a.append("fachada",t.fachada),e.next=9,t.axios.post("api/album",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var a in t.$swal("Agregado exito!","","success"),t.listar(),t.$root.$emit("bv::hide::modal","modal_album","#btnShow"),r)t.form[a]=""})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 9:case"end":return e.stop()}}),e)})))()},editar:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return t.perimetro&&a.append("perimetro",t.perimetro),t.site&&a.append("site",t.site),t.frente&&a.append("frente",t.frente),t.fachada&&a.append("fachada",t.fachada),e.next=9,t.axios.put("api/album",a).then((function(e){if(200==e.status)for(var a in t.$swal("Editado con exito","","success"),t.listar(),t.$root.$emit("bv::hide::modal","modal_album","#btnShow"),r)t.form[a]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 9:case"end":return e.stop()}}),e)})))()},eliminars:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=new FormData,r.append("id",t),a.next=4,e.axios.post("api/trazabilidad_ath/delete",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("Eliminado con exito!","","success"),e.listar())})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 4:case"end":return a.stop()}}),a)})))()},eliminar:function(t){var e=this;this.$swal({title:"Desea borrar este reporte?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&e.eliminars(t)}))},resete:function(){var t=this.form;for(var e in t)this.form[e]="";this.form.id_cajero=this.$route.params.id},loadAlbum:function(t){for(var e=0;e<this.transactionData.length;e++)if(this.transactionData[e].id===t)return this.ur_fachada=this.transactionData[e].fachada,this.ur_site=this.transactionData[e].site,this.ur_perimetro=this.transactionData[e].perimetro,void(this.ur_frente=this.transactionData[e].frente)},setear:function(t){for(var e=0;e<this.transactionData.length;e++)if(this.transactionData[e].id===t)return this.form.id=this.transactionData[e].id,this.form.tipo=this.transactionData[e].tipo,this.form.mes=this.transactionData[e].mes,this.form.fecha=this.transactionData[e].fecha,this.form.observaciones=this.transactionData[e].observaciones,this.form.estado=this.transactionData[e].estado,this.form.id_cajero=this.$route.params.id,void this.$root.$emit("bv::show::modal","modal_album","#btnShow")},listar:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("codigo",t.$route.params.id),a.append("entidad_id",t.$route.params.entidad),e.next=5,t.axios.post("api/album/find",a).then((function(e){t.transactionData=e.data,t.ur_fachada=t.transactionData[0].fachada,t.ur_site=t.transactionData[0].site,t.ur_perimetro=t.transactionData[0].perimetro,t.ur_frente=t.transactionData[0].frente})).catch((function(t){console.log("error"+t)}));case 5:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},D=k,$=Object(_["a"])(D,x,y,!1,null,null,null),S=$.exports,j=(r={components:{vueDropzone:d.a,Layout:f["a"],PageHeader:p["a"],ValidationProvider:m["b"],ValidationObserver:m["a"],Trazabilidad:C,Album:S},data:function(){return{title:"Procesos",items:[{text:"Cajeros ATH"},{text:"Detalles",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["cargo","descripcion","actions"],cajero:[],editMode:!1,form:{id:"",cargo:"",descripcion:""}}},computed:Object(c["a"])({},Object(u["d"])(["counter"])),created:function(){this.listarUsers()},methods:Object(c["a"])(Object(c["a"])({onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},Object(u["b"])(["guardarUsuario"])),{},{switchLoc:function(){var t=this;this.editMode?this.$refs.form.validate().then((function(e){e&&t.editarCargos()})):this.$refs.form.validate().then((function(e){e&&t.agregarCargo()}))},agregarCargo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return e.next=5,t.axios.post("api/cargos",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var a in t.$swal("Agregado exito!","","success"),t.listarCargos(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),r)t.form[a]=""})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 5:case"end":return e.stop()}}),e)})))()},editarCargos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in a=new FormData,r=t.form,r)a.append(o,r[o]);return e.next=5,t.axios.put("api/cargos",a).then((function(e){if(200==e.status)for(var a in t.$swal("Editado con exito","","success"),t.listarCargos(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),r)t.form[a]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 5:case"end":return e.stop()}}),e)})))()},eliminarCargos:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=new FormData,r.append("id",t),a.next=4,e.axios.post("api/cargos/delete",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("Eliminado con exito!","","success"),e.listarCargos())})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 4:case"end":return a.stop()}}),a)})))()},eliminarCargo:function(t){var e=this;this.$swal({title:"Desea borrar este cargo?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&e.eliminarCargos(t)}))},resete:function(){var t=this.form;for(var e in t)this.form[e]=""},setear:function(t){for(var e=0;e<this.cargos.length;e++)if(this.cargos[e].id===t)return this.form.id=this.cargos[e].id,this.form.cargo=this.cargos[e].cargo,this.form.descripcion=this.cargos[e].descripcion,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarCajero:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("id",t.$route.params.id),e.next=4,t.axios.post("api/cajeros/ath/byid",a).then((function(e){t.cajero=e.data,t.cajero=t.cajero[0]})).catch((function(t){console.log("error"+t)}));case 4:case"end":return e.stop()}}),e)})))()},setEmail:function(){this.form.username=this.form.email,console.log("holas")},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var t=localStorage.getItem("token");this.guardarUsuario(t)}else this.$router.push({name:"Home"})}})},Object(s["a"])(r,"created",(function(){this.session(),this.listarCajero()})),Object(s["a"])(r,"mounted",(function(){})),Object(s["a"])(r,"computed",{rows:function(){return this.cargos.length}}),r),O=j,P=Object(_["a"])(O,o,i,!1,null,null,null);e["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2d0e1b28.ee6418b6.js.map