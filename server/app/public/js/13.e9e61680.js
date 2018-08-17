(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"3fI2":function(t,e,i){},"99Ce":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("q-table",{staticClass:"no-shadow",attrs:{title:t.table.title,"row-key":t.table.rowKey,loading:t.table.loading,data:t.table.data,columns:t.table.columns,filter:t.table.filter,pagination:t.table.pagination},on:{"update:pagination":function(e){t.$set(t.table,"pagination",e)}},scopedSlots:t._u([{key:"top-left",fn:function(e){return[i("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",flat:"",color:"primary",icon:"refresh",size:"md"},on:{click:function(e){t.fetchItems()}}}),i("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:t.table.filter,callback:function(e){t.$set(t.table,"filter",e)},expression:"table.filter"}})]}},{key:"top-right",fn:function(e){return[t.isAuthorized(t.resource,"create","any")?i("q-btn",{attrs:{round:"",color:"positive",icon:"add",size:"md"},on:{click:function(e){t.edit()}}}):t._e()]}},{key:"body-cell-type",fn:function(e){return i("q-td",{attrs:{props:e,"auto-width":""}},[i("q-chip",{style:{background:e.row.type.color}},[t._v(t._s(e.row.type.code))])],1)}},{key:"body-cell-edit",fn:function(e){return i("q-td",{attrs:{props:e,"auto-width":""}},[t.isAuthorized(t.resource,["update","delete"],"any")?i("q-btn",{attrs:{size:"md",round:"",dense:"",flat:"",icon:"edit",color:"dark"},on:{click:function(i){t.edit(e.row)}}}):t._e()],1)}}])}),i("q-modal",{ref:"modal",attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":"","content-css":"width: 80vw; height: 80vh;"}},[i("q-modal-layout",[i("q-toolbar",{staticClass:"q-py-none q-pr-none",attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("\n          "+t._s(t.editMode?t.$t("edit"):t.$t("create"))+" "+t._s(t.$t("modal.title"))+"\n          "),i("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.$t("modal.subtitle")))])]),i("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"close",color:"negative",size:"lg"},on:{click:function(e){t.cancel()}}})],1),i("q-toolbar",{staticClass:"justify-around q-py-sm",attrs:{slot:"footer",align:"around"},slot:"footer"},[t.editMode?[t.isAuthorized(t.resource,"delete","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"negative",icon:"delete",disable:t.$v.item.$invalid},on:{click:function(e){t.deleteItem(t.item)}}},[t._v(t._s(t.$t("buttons.deleteItem")))]):t._e(),t.isAuthorized(t.resource,"update","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"save",disable:t.$v.item.$invalid},on:{click:function(e){t.updateItem(t.item)}}},[t._v(t._s(t.$t("buttons.updateItem")))]):t._e()]:[t.isAuthorized(t.resource,"create","any")?i("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"create",disable:t.$v.item.$invalid},on:{click:function(e){t.createItem(t.item)}}},[t._v(t._s(t.$t("buttons.createItem")))]):t._e()]],2),i("div",{staticClass:"layout-padding group"},[i("schedule",{attrs:{standard:""},model:{value:t.$v.item.$model,callback:function(e){t.$set(t.$v.item,"$model",e)},expression:"$v.item.$model"}}),i("pre",[t._v("item: "+t._s(!!t.item))]),i("pre",[t._v("id: "+t._s(t.item&&!!t.item.schedule_id))])],1)],1)],1)],1)},a=[];n._withStripped=!0;i("RW0V"),i("VRzm"),i("rGqo"),i("yt8O");var o=i("MVZn"),s=i.n(o),r=i("2LSj"),l=i("k7eu"),c=i("L2JU"),d=i("RwI2"),u=i("NNmX"),m=i("ta7f");function f(){return{schedule_name:"",description:"",standard:!0,breaktime:[],uptime:[],downtime:[]}}var h={name:"HRAttSchedule",mixins:[d["a"],u["a"]],components:{Schedule:l["a"]},data:function(){return{resource:"HRAttSchedule",apiRoute:r["l"],editMode:!1,item:f(),advancedTimetable:!1,timetableTypes:null,options:{boolean:[{value:!0,label:this.$t("options.boolean.true")},{value:!1,label:this.$t("options.boolean.false")}],timetype_id:[]},table:{loading:!1,rowKey:"schedule_id",title:"",filter:"",data:[],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:10},columns:[{name:"schedule_name",required:!0,label:this.$t("field.schedule_name.label"),align:"left",field:"schedule_name",sortable:!0},{name:"description",required:!0,label:this.$t("field.description.label"),align:"left",field:"description",sortable:!0},{name:"standard",required:!0,label:this.$t("field.standard.label"),align:"left",field:"standard",sortable:!0},{name:"edit",label:"",required:!0}]}}},validations:{item:{required:m["required"]}},methods:s()({},Object(c["b"])("hr",{fetchTimetypes:"fetchTimetypes"}),{newItem:function(){return f()},fetchItems:function(){var t=this;this.table.loading=!0,Promise.all([this.$axios.get(r["l"],{params:{eager:"[breaktime, uptime, downtime]"}}),this.fetchTimetypes()]).then(function(e){t.table.data=e[0]&&e[0].data?e[0].data:[],t.table.loading=!1}).catch(function(){t.table.loading=!1})},deleteParams:function(t){return{schedule_id:t.schedule_id}},clonePreset:function(t){var e=this,i=s()({},t);return Object.keys(i).forEach(function(t){i[t]instanceof Date&&(i[t]=e.$date.clone(i[t]))}),i}}),mounted:function(){this.fetchItems()}},p=h,$=(i("ywt6"),i("KHd+")),b=i("FZHL"),g=Object($["a"])(p,n,a,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(g);e["default"]=g.exports},AdfW:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"es":{"modal":{"title":"Horario","subtitle":" "}}}'),delete t.options._Ctor}},FZHL:function(t,e,i){"use strict";var n=i("AdfW"),a=i.n(n);e["default"]=a.a},NNmX:function(t,e,i){"use strict";e["a"]={methods:{validationError:function(t){for(var e in t.$params)if(t.hasOwnProperty(e)&&!1===t[e])return this.$t("validation.".concat(e));return this.$t("validation.error")}}}},RwI2:function(t,e,i){"use strict";i("yt8O"),i("RW0V"),i("rGqo");var n=i("MVZn"),a=i.n(n),o=i("L2JU");e["a"]={computed:a()({},Object(o["c"])("core",{isAuthorized:"isAuthorized"})),methods:{createItem:function(t){var e=this;this.$q.dialog({title:this.$t("confirm.createItem.title"),message:this.$t("confirm.createItem.message"),ok:!0,cancel:!0}).then(function(){e.$q.loading.show(),e.$axios.post(e.apiRoute,t).then(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.create.success"),type:"positive"}),e.reset(),e.fetchItems()}).catch(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.create.failure"),type:"warning"})})}).catch(function(){})},updateItem:function(t){var e=this;this.$q.dialog({title:this.$t("confirm.updateItem.title"),message:this.$t("confirm.updateItem.message"),ok:!0,cancel:!0}).then(function(){e.$q.loading.show(),e.$axios.put(e.apiRoute,t).then(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.update.success"),type:"positive"}),e.reset(),e.fetchItems()}).catch(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.update.failure"),type:"warning"})})}).catch(function(){})},deleteItem:function(t){var e=this;this.$q.dialog({title:this.$t("confirm.deleteItem.title"),message:this.$t("confirm.deleteItem.message"),ok:!0,cancel:!0}).then(function(){e.$q.loading.show(),e.$axios.delete(e.apiRoute,{params:e.deleteParams(t)}).then(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.delete.success"),type:"positive"}),e.reset(),e.fetchItems()}).catch(function(){e.$q.loading.hide(),e.$q.notify({message:e.$t("operation.delete.failure"),type:"positive"})})}).catch(function(){})},edit:function(t){var e=this;t?(this.editMode=!0,this.item=JSON.parse(JSON.stringify(t)),this.mapItemOptions&&Object.keys(this.mapItemOptions).forEach(function(t){Array.isArray(e.item[t])?e.item[t]=e.item[t].map(e.mapItemOptions[t]):e.item[t]&&(e.item[t]=e.mapItemOptions[t](e.item[t]))}),delete this.item.__index):this.editMode=!1,this.$refs.modal.show()},reset:function(){this.$refs.modal.hide(),this.$v.$reset(),this.item=this.newItem()},cancel:function(){var t=this;this.$v.$anyDirty?this.$q.dialog({title:this.$t("confirm.cancelEdit.title"),message:this.$t("confirm.cancelEdit.message"),ok:!0,cancel:!0}).then(function(){t.reset()}):this.reset()}}}},ywt6:function(t,e,i){"use strict";var n=i("3fI2"),a=i.n(n);a.a}}]);