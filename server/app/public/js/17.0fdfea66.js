(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"1bpK":function(e,t,i){"use strict";var a=i("bEBZ"),r=i.n(a);r.a},NNmX:function(e,t,i){"use strict";t["a"]={methods:{validationError:function(e){for(var t in e.$params)if(e.hasOwnProperty(t)&&!1===e[t])return this.$t("validation.".concat(t));return this.$t("validation.error")}}}},RwI2:function(e,t,i){"use strict";i("yt8O"),i("RW0V"),i("rGqo");var a=i("MVZn"),r=i.n(a),o=i("L2JU");t["a"]={computed:r()({},Object(o["c"])("core",{isAuthorized:"isAuthorized"})),methods:{createItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.createItem.title"),message:this.$t("confirm.createItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.post(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.failure"),type:"warning"})})})},updateItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.updateItem.title"),message:this.$t("confirm.updateItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.put(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.failure"),type:"warning"})})})},deleteItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.deleteItem.title"),message:this.$t("confirm.deleteItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.delete(t.apiRoute,{params:t.deleteParams(e)}).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.failure"),type:"positive"})})})},edit:function(e){var t=this;e?(this.editMode=!0,this.item=JSON.parse(JSON.stringify(e)),this.mapItemOptions&&Object.keys(this.mapItemOptions).forEach(function(e){Array.isArray(t.item[e])?t.item[e]=t.item[e].map(t.mapItemOptions[e]):t.item[e]&&(t.item[e]=t.mapItemOptions[e](t.item[e]))}),delete this.item.__index):this.editMode=!1,this.$refs.modal.show()},reset:function(){this.$refs.modal.hide(),this.$v.$reset(),this.item=this.newItem()},cancel:function(){var e=this;this.$v.$anyDirty?this.$q.dialog({title:this.$t("confirm.cancelEdit.title"),message:this.$t("confirm.cancelEdit.message"),ok:!0,cancel:!0}).then(function(){e.reset()}):this.reset()}}}},bEBZ:function(e,t,i){},eMdR:function(e,t,i){"use strict";var a=i("oKO0"),r=i.n(a);t["default"]=r.a},oKO0:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"modal":{"title":"Pausa","subtitle":" "}}}'),delete e.options._Ctor}},x5hj:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-table",{staticClass:"no-shadow",attrs:{title:e.table.title,"row-key":e.table.rowKey,loading:e.table.loading,data:e.table.data,columns:e.table.columns,filter:e.table.filter,pagination:e.table.pagination},on:{"update:pagination":function(t){e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[i("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",flat:"",color:"primary",icon:"refresh",size:"md"},on:{click:function(t){e.fetchItems()}}}),i("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:e.table.filter,callback:function(t){e.$set(e.table,"filter",t)},expression:"table.filter"}})]}},{key:"top-right",fn:function(t){return[e.isAuthorized(e.resource,"create","any")?i("q-btn",{attrs:{round:"",color:"positive",icon:"add",size:"md"},on:{click:function(t){e.edit()}}}):e._e()]}},{key:"body-cell-edit",fn:function(t){return i("q-td",{attrs:{props:t,"auto-width":""}},[e.isAuthorized(e.resource,["update","delete"],"any")?i("q-btn",{attrs:{size:"md",round:"",dense:"",flat:"",icon:"edit",color:"dark"},on:{click:function(i){e.edit(t.row)}}}):e._e()],1)}}])}),i("q-modal",{ref:"modal",attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":"","content-css":"width: 80vw; height: 80vh;"}},[i("q-modal-layout",[i("q-toolbar",{staticClass:"q-py-none q-pr-none",attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[e._v("\n          "+e._s(e.editMode?e.$t("edit"):e.$t("create"))+" "+e._s(e.$t("modal.title"))+"\n          "),i("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v(e._s(e.$t("modal.subtitle")))])]),i("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"close",color:"negative",size:"lg"},on:{click:function(t){e.cancel()}}})],1),i("q-toolbar",{staticClass:"justify-around q-py-sm",attrs:{slot:"footer",align:"around"},slot:"footer"},[e.editMode?[e.isAuthorized(e.resource,"delete","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"negative",icon:"delete"},on:{click:function(t){e.deleteItem(e.item)}}},[e._v(e._s(e.$t("buttons.deleteItem")))]):e._e(),e.isAuthorized(e.resource,"update","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"save",disable:e.$v.item.$invalid},on:{click:function(t){e.updateItem(e.item)}}},[e._v(e._s(e.$t("buttons.updateItem")))]):e._e()]:[e.isAuthorized(e.resource,"create","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"create",disable:e.$v.item.$invalid},on:{click:function(t){e.createItem(e.item)}}},[e._v(e._s(e.$t("buttons.createItem")))]):e._e()]],2),i("div",{staticClass:"layout-padding group"},[i("q-field",{attrs:{label:e.$t("field.break_name.label"),helper:e.$t("field.break_name.helper"),error:e.$v.item.break_name.$error,"error-label":e.validationError(e.$v.item.break_name)}},[i("q-input",{attrs:{placeholder:e.$t("field.break_name.placeholder")},model:{value:e.$v.item.break_name.$model,callback:function(t){e.$set(e.$v.item.break_name,"$model",t)},expression:"$v.item.break_name.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.description.label"),helper:e.$t("field.description.helper"),error:e.$v.item.description.$error,"error-label":e.validationError(e.$v.item.description)}},[i("q-input",{attrs:{placeholder:e.$t("field.description.placeholder")},model:{value:e.$v.item.description.$model,callback:function(t){e.$set(e.$v.item.description,"$model",t)},expression:"$v.item.description.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.start.label"),helper:e.$t("field.start.helper"),error:e.$v.item.start.$error,"error-label":e.validationError(e.$v.item.start)}},[i("q-datetime",{attrs:{type:"time",placeholder:e.$t("field.description.placeholder")},model:{value:e.$v.item.start.$model,callback:function(t){e.$set(e.$v.item.start,"$model",t)},expression:"$v.item.start.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.end.label"),helper:e.$t("field.end.helper"),error:e.$v.item.end.$error,"error-label":e.validationError(e.$v.item.end)}},[i("q-datetime",{attrs:{type:"time",placeholder:e.$t("field.description.placeholder")},model:{value:e.$v.item.end.$model,callback:function(t){e.$set(e.$v.item.end,"$model",t)},expression:"$v.item.end.$model"}})],1),i("q-field",{attrs:{label:e.$t("field.duration.label"),helper:e.$t("field.duration.helper"),error:e.$v.item.duration.$error,"error-label":e.validationError(e.$v.item.duration)}},[i("q-datetime",{attrs:{type:"time",placeholder:e.$t("field.description.placeholder")},model:{value:e.$v.item.duration.$model,callback:function(t){e.$set(e.$v.item.duration,"$model",t)},expression:"$v.item.duration.$model"}})],1)],1)],1)],1)],1)},r=[];a._withStripped=!0;i("VRzm"),i("rGqo"),i("yt8O");var o=i("2LSj"),n=i("RwI2"),l=i("NNmX"),s=i("ta7f");function d(){return{break_name:"",description:"",start:null,end:null,duration:null}}var c={name:"HRAttBreak",mixins:[n["a"],l["a"]],data:function(){var e=this;return{resource:"HRAttBreak",apiRoute:o["i"],editMode:!1,item:d(),table:{loading:!1,rowKey:"break_id",title:"",filter:"",data:[],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:10},columns:[{name:"break_name",required:!0,label:this.$t("field.break_name.label"),align:"left",field:"break_name",sortable:!0},{name:"description",required:!0,label:this.$t("field.description.label"),align:"left",field:"description",sortable:!0},{name:"start",required:!0,label:this.$t("field.start.label"),align:"left",field:function(t){return t.start?e.$date.formatDate(new Date(t.start),"HH:mm"):""},sortable:!0},{name:"end",required:!0,label:this.$t("field.end.label"),align:"left",field:function(t){return t.end?e.$date.formatDate(new Date(t.end),"HH:mm"):""},sortable:!0},{name:"duration",required:!0,label:this.$t("field.duration.label"),align:"left",field:function(t){return t.duration?e.$date.formatDate(new Date(t.duration),"HH:mm"):""},sortable:!0},{name:"edit",label:"",required:!0}]}}},validations:{item:{break_name:{required:s["required"]},description:{},start:{required:s["required"]},end:{required:s["required"]},duration:{required:s["required"]}}},methods:{newItem:function(){return d()},fetchItems:function(){var e=this;this.table.loading=!0,Promise.all([this.$axios.get(o["i"],{params:{eager:""}})]).then(function(t){e.table.data=t[0]&&t[0].data?t[0].data:[],e.table.loading=!1}).catch(function(){e.table.loading=!1})},deleteParams:function(e){return{break_id:e.break_id}}},mounted:function(){this.fetchItems()}},m=c,u=(i("1bpK"),i("KHd+")),f=i("eMdR"),p=Object(u["a"])(m,a,r,!1,null,null,null);"function"===typeof f["default"]&&Object(f["default"])(p);t["default"]=p.exports}}]);