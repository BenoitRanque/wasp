(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2izI":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"row"},[e._t("header"),i("div",{staticClass:"col-auto"},[e.withSchedulePresets?i("q-toggle",{staticClass:"q-caption",attrs:{"left-label":"",label:"Mas opciones"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}}):e._e()],1)],2),e._t("default"),e.withSchedulePresets&&!e.advanced?i("q-field",{attrs:{label:e.$t("field.schedule.label")}},[i("q-select",{attrs:{placeholder:e.$t("field.schedule.placeholder"),options:e.presetScheduleOptions,value:e.value?e.value.schedule_id:null},on:{input:function(t){return e.$emit("input",t?e.schedulePresets.find(function(e){return e.schedule_id===t}):null)}}})],1):[i("q-field",{attrs:{label:e.$t("field.schedule_name.label")}},[i("q-input",{model:{value:e.model.schedule_name,callback:function(t){e.$set(e.model,"schedule_name",t)},expression:"model.schedule_name"}})],1),i("q-field",{attrs:{label:e.$t("field.description.label")}},[i("q-input",{model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),e._l(e.model.timetable,function(t,a){return i("timetable-wrapper",{key:a,style:{background:e.typeColor(e.model.timetable[a].type_id)},on:{remove:function(t){e.model.timetable.splice(a,1)}}},[i("template",{slot:"header"},[i("q-input",{staticClass:"col",attrs:{"hide-underline":""},model:{value:e.model.timetable[a].timetable_name,callback:function(t){e.$set(e.model.timetable[a],"timetable_name",t)},expression:"model.timetable[index].timetable_name"}})],1),void 0,i("template",{slot:"advanced"},[i("div",{staticClass:"row q-px-sm"},[i("q-select",{staticClass:"col-6",attrs:{"float-label":"Tipo de tiempo",options:e.timetableTypesOptions},model:{value:e.model.timetable[a].type_id,callback:function(t){e.$set(e.model.timetable[a],"type_id",t)},expression:"model.timetable[index].type_id"}}),i("q-datetime",{staticClass:"col-6",attrs:{format24h:!0,"float-label":"Duracion",type:"time"},model:{value:e.model.timetable[a].duration,callback:function(t){e.$set(e.model.timetable[a],"duration",t)},expression:"model.timetable[index].duration"}}),i("q-datetime",{staticClass:"col-6",attrs:{format24h:!1,"float-label":"Inicio",type:"time"},model:{value:e.model.timetable[a].start_time,callback:function(t){e.$set(e.model.timetable[a],"start_time",t)},expression:"model.timetable[index].start_time"}}),i("q-datetime",{staticClass:"col-6",attrs:{format24h:!1,"float-label":"Fin",type:"time"},model:{value:e.model.timetable[a].end_time,callback:function(t){e.$set(e.model.timetable[a],"end_time",t)},expression:"model.timetable[index].end_time"}}),i("div",{staticClass:"q-caption col-6 q-pt-sm"},[i("q-checkbox",{attrs:{label:"debe marcar inicio"},model:{value:e.model.timetable[a].start_require_event,callback:function(t){e.$set(e.model.timetable[a],"start_require_event",t)},expression:"model.timetable[index].start_require_event"}})],1),i("div",{staticClass:"q-caption col-6 q-pt-sm"},[i("q-checkbox",{attrs:{label:"debe marcar fin"},model:{value:e.model.timetable[a].end_require_event,callback:function(t){e.$set(e.model.timetable[a],"end_require_event",t)},expression:"model.timetable[index].end_require_event"}})],1)],1)])],2)}),i("div",{staticClass:"row justify-around q-pa-md"},[i("q-btn",{attrs:{icon:"add",color:"positive"}},[i("q-popover",{attrs:{self:"top middle",anchor:"bottom middle"}},[i("q-list",{attrs:{link:""}},e._l(e.timetablePresets,function(t,a){return i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],key:a,nativeOn:{click:function(i){e.addPreset(t)}}},[i("q-item-main",{attrs:{label:t.label,sublabel:t.sublabel}}),i("q-item-side",[i("q-chip",{style:{background:e.typeColor(t.type_id)}},[e._v(e._s(e.typeCode(t.type_id)))])],1)],1)}))],1),i("q-tooltip",[e._v("Aggregar Componente")])],1)],1)]],2)},s=[];a._withStripped=!0;i("dRSK"),i("rGqo");var n=i("KcV/"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-py-sm q-my-sm shadow-3"},[i("div",{staticClass:"row items-center q-px-sm"},[e._t("header"),i("div",{staticClass:"col-auto q-px-sm"},[i("q-toggle",{staticClass:"q-caption",attrs:{label:"Configuracion Avanzada","left-label":""},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}})],1),i("div",{staticClass:"col-auto"},[i("q-btn",{attrs:{icon:"close",size:"md",dense:"",color:"negative"},on:{click:function(t){e.$emit("remove")}}})],1)],2),e._t("default"),e.advanced?e._t("advanced"):e._e()],2)},o=[];l._withStripped=!0;var d={name:"TimetableWrapper",data:function(){return{advanced:!1}}},r=d,u=(i("4em7"),i("KHd+")),c=Object(u["a"])(r,l,o,!1,null,"cd74d6f6",null),m=c.exports,b=n["a"].ATT_TIMEOFF,p=n["a"].ATT_WORK,_=n["a"].ATT_BREAK,h={name:"ScheduleSelect",components:{TimetableWrapper:m},props:{value:{type:Object,default:null},standard:{type:Boolean,default:!1},schedulePresets:{type:Array,default:function(){return[]}},timetablePresets:{type:Array,default:function(){var e=this;return[{label:"Dia libre",sublabel:"",type_id:b,timetable:function(){return{type_id:b,timetable_name:"Dia Libre",start_time:null,start_require_event:!1,end_time:null,end_require_event:!1,duration:e.$date.buildDate({hours:8,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Libre",sublabel:"",type_id:b,timetable:function(){return{type_id:b,timetable_name:"Medio Dia Libre",start_time:null,start_require_event:!1,end_time:null,end_require_event:!1,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Almuerzo",sublabel:"",type_id:_,timetable:function(){return{type_id:_,timetable_name:"Almuerzo",start_time:e.$date.buildDate({hours:11,minutes:0,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:14,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:0,minutes:30,seconds:0,milliseconds:0})}}},{label:"Dia Laboral Continuo",sublabel:"08:30 - 16:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Dia Laboral Continuo 08:30 - 16:30",start_time:e.$date.buildDate({hours:8,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:16,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:8,minutes:0,seconds:0,milliseconds:0})}}},{label:"Dia Laboral Continuo",sublabel:"09:30 - 17:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Dia Laboral Continuo 09:30 - 17:30",start_time:e.$date.buildDate({hours:9,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:17,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:8,minutes:0,seconds:0,milliseconds:0})}}},{label:"Dia Laboral Continuo",sublabel:"10:30 - 18:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Dia Laboral Continuo 10:30 - 18:30",start_time:e.$date.buildDate({hours:10,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:18,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:8,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"08:30 - 12:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 08:30 - 12:30",start_time:e.$date.buildDate({hours:8,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:12,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"09:30 - 13:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 09:30 - 13:30",start_time:e.$date.buildDate({hours:9,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:13,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"10:30 - 14:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 10:30 - 14:30",start_time:e.$date.buildDate({hours:10,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:14,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"12:30 - 16:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 12:30 - 16:30",start_time:e.$date.buildDate({hours:12,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:16,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"13:30 - 17:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 13:30 - 17:30",start_time:e.$date.buildDate({hours:13,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:17,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}},{label:"Medio Dia Laboral",sublabel:"14:30 - 18:30",type_id:p,timetable:function(){return{type_id:p,timetable_name:"Medio Dia Laboral 14:30 - 18:30",start_time:e.$date.buildDate({hours:14,minutes:30,seconds:0,milliseconds:0}),start_require_event:!0,end_time:e.$date.buildDate({hours:18,minutes:30,seconds:0,milliseconds:0}),end_require_event:!0,duration:e.$date.buildDate({hours:4,minutes:0,seconds:0,milliseconds:0})}}}]}},timetableTypes:{type:Array,default:function(){return[]}}},data:function(){return{advanced:!1}},watch:{advanced:function(e,t){if(e){var i=this.value?JSON.parse(JSON.stringify(this.value)):{schedule_name:"",description:"",standard:!1,timetable:[]};i.standard=!1,delete i.schedule_id,delete i.created_at,delete i.updated_at,i.timetable.forEach(function(e){delete e.schedule_id,delete e.timetable_id,delete e.created_at,delete e.updated_at}),this.model=i}else this.$emit("input",null)},model:{deep:!0,handler:function(){this.$emit("input",this.model)}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},withSchedulePresets:function(){return!!(this.schedulePresets&&this.schedulePresets.length>0)},presetScheduleOptions:function(){return this.withSchedulePresets?this.schedulePresets.map(function(e){return{label:e.schedule_name,sublabel:e.description,value:e.schedule_id}}):[]},presetTimetableOptions:function(){return this.timetablePresets?this.timetablePresets:[]},timetableTypesOptions:function(){return this.timetableTypes?this.timetableTypes.map(function(e){return{value:e.type_id,label:e.type_name,sublabel:e.description,stamp:e.code}}):[]}},methods:{typeCode:function(e){if(this.timetableTypes&&this.timetableTypes.length){var t=this.timetableTypes.find(function(t){return t.type_id===e});if(t)return t.code}},typeColor:function(e){if(this.timetableTypes&&this.timetableTypes.length){var t=this.timetableTypes.find(function(t){return t.type_id===e});if(t)return t.color}},addPreset:function(e){var t=e.timetable();console.log(t),this.model.timetable.push(t)}}},f=h,v=(i("gL6v"),Object(u["a"])(f,a,s,!1,null,"20528818",null));t["a"]=v.exports},"4em7":function(e,t,i){"use strict";var a=i("Uust"),s=i.n(a);s.a},Jwxc:function(e,t){e.exports={ATT_WORK:11,ATT_EXTRA:12,ATT_BREAK:13,ATT_TIMEOFF:21,ATT_VACATION:22,ATT_HOLIDAY:23,ATT_LEAVE_SICK:24,ATT_LEAVE_PAID:25,ATT_LEAVE_UNPAID:26}},"KcV/":function(e,t,i){"use strict";t["a"]=i("Jwxc")},NNmX:function(e,t,i){"use strict";t["a"]={methods:{validationError:function(e){for(var t in e.$params)if(e.hasOwnProperty(t)&&!1===e[t])return this.$t("validation.".concat(t));return this.$t("validation.error")}}}},RwI2:function(e,t,i){"use strict";i("yt8O"),i("RW0V"),i("rGqo");var a=i("MVZn"),s=i.n(a),n=i("L2JU");t["a"]={computed:s()({},Object(n["c"])("core",{isAuthorized:"isAuthorized"})),methods:{createItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.createItem.title"),message:this.$t("confirm.createItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.post(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.failure"),type:"warning"})})})},updateItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.updateItem.title"),message:this.$t("confirm.updateItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.put(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.failure"),type:"warning"})})})},deleteItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.deleteItem.title"),message:this.$t("confirm.deleteItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.delete(t.apiRoute,{params:t.deleteParams(e)}).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.failure"),type:"positive"})})})},edit:function(e){var t=this;e?(this.editMode=!0,this.item=JSON.parse(JSON.stringify(e)),this.mapItemOptions&&Object.keys(this.mapItemOptions).forEach(function(e){Array.isArray(t.item[e])?t.item[e]=t.item[e].map(t.mapItemOptions[e]):t.item[e]&&(t.item[e]=t.mapItemOptions[e](t.item[e]))}),delete this.item.__index):this.editMode=!1,this.$refs.modal.show()},reset:function(){this.$refs.modal.hide(),this.$v.$reset(),this.item=this.newItem()},cancel:function(){var e=this;this.$v.$anyDirty?this.$q.dialog({title:this.$t("confirm.cancelEdit.title"),message:this.$t("confirm.cancelEdit.message"),ok:!0,cancel:!0}).then(function(){e.reset()}):this.reset()}}}},Uust:function(e,t,i){},WI5U:function(e,t,i){},gL6v:function(e,t,i){"use strict";var a=i("WI5U"),s=i.n(a);s.a}}]);