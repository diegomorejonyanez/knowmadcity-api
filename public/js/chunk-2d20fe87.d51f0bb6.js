(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fe87"],{b641:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{title:e.title,items:e.items}}),a("div",{staticClass:"row"},e._l(e.entidades,(function(t){return a("div",{staticClass:"col-lg-6 col-xl-3"},[a("b-card",{attrs:{"img-src":t.imagen,"img-alt":"Card image","img-top":""}},[a("b-card-title",[a("h2",{staticClass:"card-title"},[e._v(e._s(t.empresa))])]),a("b-button",{staticClass:"btn-block",attrs:{href:"javascript:void(0);",variant:"primary",to:"cajeros_"+t.empresa}},[e._v("Ir")])],1)],1)})),0)],1)},i=[],s=a("1da1"),n=a("5530"),o=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("2f62")),c=a("7bb1"),l=a("5658"),d=a("2579"),u={components:{Layout:l["a"],PageHeader:d["a"],ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{title:"Administracion",items:[{text:"Procesos"},{text:"Cajeros"}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,entidades:[],editMode:!1,form:{}}},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["b"])(["guardarUsuario"])),Object(o["b"])(["cerrarSession"])),{},{listarentidades:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/entidades").then((function(t){e.entidades=t.data.rows})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})}}),created:function(){this.session(),this.listarentidades()},computed:Object(n["a"])(Object(n["a"])({},Object(o["d"])(["usuarioDB"])),{},{rows:function(){return this.terceros.length}})},m=u,b=a("2877"),f=Object(b["a"])(m,r,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d20fe87.d51f0bb6.js.map