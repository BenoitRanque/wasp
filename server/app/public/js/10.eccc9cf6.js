(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{GpLA:function(e,t,i){"use strict";var o=i("JcF3"),a=i.n(o);t["default"]=a.a},JcF3:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"modal":{"title":"Tipo de Asistencia","subtitle":" "}}}'),delete e.options._Ctor}},JiqL:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-table",{staticClass:"no-shadow",attrs:{title:e.table.title,"row-key":e.table.rowKey,loading:e.table.loading,data:e.table.data,columns:e.table.columns,filter:e.table.filter,pagination:e.table.pagination},on:{"update:pagination":function(t){e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[i("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",flat:"",color:"primary",icon:"refresh",size:"md"},on:{click:function(t){e.fetchItems()}}}),i("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:e.table.filter,callback:function(t){e.$set(e.table,"filter",t)},expression:"table.filter"}})]}},{key:"top-right",fn:function(t){return[e.isAuthorized(e.resource,"create","any")?i("q-btn",{attrs:{round:"",color:"positive",icon:"add",size:"md"},on:{click:function(t){e.edit()}}}):e._e()]}},{key:"body-cell-colorcode",fn:function(t){return i("q-td",{attrs:{props:t,"auto-width":""}},[i("q-chip",{style:{background:t.row.color}},[e._v(e._s(t.row.code))])],1)}},{key:"body-cell-edit",fn:function(t){return i("q-td",{attrs:{props:t,"auto-width":""}},[e.isAuthorized(e.resource,["update","delete"],"any")?i("q-btn",{attrs:{size:"md",round:"",dense:"",flat:"",icon:"edit",color:"dark"},on:{click:function(i){e.edit(t.row)}}}):e._e()],1)}}])}),i("q-modal",{ref:"modal",attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":"","content-css":"width: 80vw; height: 80vh;"}},[i("q-modal-layout",[i("q-toolbar",{staticClass:"q-py-none q-pr-none",attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[e._v("\n          "+e._s(e.editMode?e.$t("edit"):e.$t("create"))+" "+e._s(e.$t("modal.title"))+"\n          "),i("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v(e._s(e.$t("modal.subtitle")))])]),i("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"close",color:"negative",size:"lg"},on:{click:function(t){e.cancel()}}})],1),i("q-toolbar",{staticClass:"justify-around q-py-sm",attrs:{slot:"footer",align:"around"},slot:"footer"},[e.editMode?[e.isAuthorized(e.resource,"delete","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"negative",icon:"delete"},on:{click:function(t){e.deleteItem(e.item)}}},[e._v(e._s(e.$t("buttons.deleteItem")))]):e._e(),e.isAuthorized(e.resource,"update","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"save",disable:e.$v.item.$invalid},on:{click:function(t){e.updateItem(e.item)}}},[e._v(e._s(e.$t("buttons.updateItem")))]):e._e()]:[e.isAuthorized(e.resource,"create","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"create",disable:e.$v.item.$invalid},on:{click:function(t){e.createItem(e.item)}}},[e._v(e._s(e.$t("buttons.createItem")))]):e._e()]],2),i("div",{staticClass:"layout-padding group"},[i("q-field",{attrs:{label:e.$t("field.type_id.label"),helper:e.$t("field.type_id.helper"),error:e.$v.item.type_id.$error,"error-label":e.validationError(e.$v.item.type_id)}},[i("q-input",{attrs:{type:"number",placeholder:e.$t("field.type_id.placeholder")},model:{value:e.$v.item.type_id.$model,callback:function(t){e.$set(e.$v.item.type_id,"$model",t)},expression:"$v.item.type_id.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.type_name.label"),helper:e.$t("field.type_name.helper"),error:e.$v.item.type_name.$error,"error-label":e.validationError(e.$v.item.type_name)}},[i("q-input",{attrs:{placeholder:e.$t("field.type_name.placeholder")},model:{value:e.$v.item.type_name.$model,callback:function(t){e.$set(e.$v.item.type_name,"$model",t)},expression:"$v.item.type_name.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.description.label"),helper:e.$t("field.description.helper"),error:e.$v.item.description.$error,"error-label":e.validationError(e.$v.item.description)}},[i("q-input",{attrs:{placeholder:e.$t("field.description.placeholder")},model:{value:e.$v.item.description.$model,callback:function(t){e.$set(e.$v.item.description,"$model",t)},expression:"$v.item.description.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.type_code.label"),helper:e.$t("field.type_code.helper"),error:e.$v.item.code.$error,"error-label":e.validationError(e.$v.item.code)}},[i("q-input",{attrs:{placeholder:e.$t("field.type_code.placeholder")},model:{value:e.$v.item.code.$model,callback:function(t){e.$set(e.$v.item.code,"$model",t)},expression:"$v.item.code.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.color.label"),helper:e.$t("field.color.helper"),error:e.$v.item.color.$error,"error-label":e.validationError(e.$v.item.color)}},[i("q-color",{attrs:{placeholder:e.$t("field.color.placeholder")},model:{value:e.$v.item.color.$model,callback:function(t){e.$set(e.$v.item.color,"$model",t)},expression:"$v.item.color.$model"}})],1)],1)],1)],1)],1)},a=[];o._withStripped=!0;i("VRzm"),i("rGqo"),i("yt8O");var r=i("2LSj"),l=i("RwI2"),n=i("NNmX"),s=i("ta7f");function d(){return{type_id:null,type_name:"",description:"",code:"",color:null}}var c={name:"HRAttType",mixins:[l["a"],n["a"]],data:function(){return{resource:"HRAttType",apiRoute:r["n"],editMode:!1,item:d(),table:{loading:!1,rowKey:"type_id",title:"",filter:"",data:[],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:10},columns:[{name:"type_id",required:!0,label:this.$t("field.type_id.label"),align:"left",field:"type_id",sortable:!0},{name:"type_name",required:!0,label:this.$t("field.type_name.label"),align:"left",field:"type_name",sortable:!0},{name:"description",required:!0,label:this.$t("field.description.label"),align:"left",field:"description",sortable:!0},{name:"colorcode",required:!0,label:this.$t("field.color.label"),align:"left",sortable:!0,field:"code"},{name:"edit",label:"",required:!0}]}}},validations:{item:{type_id:{required:s["required"]},type_name:{required:s["required"]},description:{},code:{required:s["required"]},color:{required:s["required"]}}},methods:{newItem:function(){return d()},fetchItems:function(){var e=this;this.table.loading=!0,Promise.all([this.$axios.get(r["n"],{params:{eager:""}})]).then(function(t){e.table.data=t[0]&&t[0].data?t[0].data:[],e.table.loading=!1}).catch(function(){e.table.loading=!1})},deleteParams:function(e){return{type_id:e.type_id}}},mounted:function(){this.fetchItems()}},m=c,u=(i("Z5c/"),i("KHd+")),p=i("GpLA"),f=Object(u["a"])(m,o,a,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(f);t["default"]=f.exports},NNmX:function(e,t,i){"use strict";t["a"]={methods:{validationError:function(e){for(var t in e.$params)if(e.hasOwnProperty(t)&&!1===e[t])return this.$t("validation.".concat(t));return this.$t("validation.error")}}}},"P+6d":function(e,t,i){},RwI2:function(e,t,i){"use strict";i("yt8O"),i("RW0V"),i("rGqo");var o=i("MVZn"),a=i.n(o),r=i("L2JU");t["a"]={computed:a()({},Object(r["c"])("core",{isAuthorized:"isAuthorized"})),methods:{createItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.createItem.title"),message:this.$t("confirm.createItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.post(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.failure"),type:"warning"})})})},updateItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.updateItem.title"),message:this.$t("confirm.updateItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.put(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.failure"),type:"warning"})})})},deleteItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.deleteItem.title"),message:this.$t("confirm.deleteItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.delete(t.apiRoute,{params:t.deleteParams(e)}).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.failure"),type:"positive"})})})},edit:function(e){var t=this;e?(this.editMode=!0,this.item=JSON.parse(JSON.stringify(e)),this.mapItemOptions&&Object.keys(this.mapItemOptions).forEach(function(e){Array.isArray(t.item[e])?t.item[e]=t.item[e].map(t.mapItemOptions[e]):t.item[e]&&(t.item[e]=t.mapItemOptions[e](t.item[e]))}),delete this.item.__index):this.editMode=!1,this.$refs.modal.show()},reset:function(){this.$refs.modal.hide(),this.$v.$reset(),this.item=this.newItem()},cancel:function(){var e=this;this.$v.$anyDirty?this.$q.dialog({title:this.$t("confirm.cancelEdit.title"),message:this.$t("confirm.cancelEdit.message"),ok:!0,cancel:!0}).then(function(){e.reset()}):this.reset()}}}},"Z5c/":function(e,t,i){"use strict";var o=i("P+6d"),a=i.n(o);a.a}}]);