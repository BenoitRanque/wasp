(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{NNmX:function(e,t,a){"use strict";t["a"]={methods:{validationError:function(e){for(var t in e.$params)if(e.hasOwnProperty(t)&&!1===e[t])return this.$t("validation.".concat(t));return this.$t("validation.error")}}}},O4RM:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{staticClass:"no-shadow",attrs:{title:e.table.title,"row-key":e.table.rowKey,loading:e.table.loading,data:e.table.data,columns:e.table.columns,filter:e.table.filter,pagination:e.table.pagination,"visible-columns":e.table.visibleColumns},on:{"update:pagination":function(t){e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",flat:"",color:"primary",icon:"refresh",size:"md"},on:{click:function(t){e.fetchItems()}}}),a("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:e.table.filter,callback:function(t){e.$set(e.table,"filter",t)},expression:"table.filter"}})]}},{key:"top-right",fn:function(t){return[a("q-table-columns",{attrs:{columns:e.table.columns,color:"secondary"},model:{value:e.table.visibleColumns,callback:function(t){e.$set(e.table,"visibleColumns",t)},expression:"table.visibleColumns"}}),e.isAuthorized(e.resource,"create","any")?a("q-btn",{attrs:{round:"",color:"positive",icon:"add",size:"md"},on:{click:function(t){e.edit()}}}):e._e()]}},{key:"body-cell-edit",fn:function(t){return a("q-td",{attrs:{props:t,"auto-width":""}},[e.isAuthorized(e.resource,["update","delete"],"any")?a("q-btn",{attrs:{size:"md",round:"",dense:"",flat:"",icon:"edit",color:"dark"},on:{click:function(a){e.edit(t.row)}}}):e._e()],1)}}])}),a("q-modal",{ref:"modal",attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":"","content-css":"width: 80vw; height: 80vh;"}},[a("q-modal-layout",[a("q-toolbar",{staticClass:"q-py-none q-pr-none",attrs:{slot:"header"},slot:"header"},[a("q-toolbar-title",[e._v("\n          "+e._s(e.editMode?e.$t("edit"):e.$t("create"))+" "+e._s(e.$t("modal.title"))+"\n          "),a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v(e._s(e.$t("modal.subtitle")))])]),a("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"print",color:"info",size:"lg"},on:{click:function(t){e.$root.$emit("PRINT",!0)}}}),a("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"print",color:"info",size:"lg"},on:{click:function(t){e.$root.$emit("PRINT")}}}),a("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"close",color:"negative",size:"lg"},on:{click:function(t){e.cancel()}}})],1),a("q-toolbar",{staticClass:"print-hide justify-around q-py-sm",attrs:{slot:"footer",align:"around"},slot:"footer"},[e.editMode?[e.isAuthorized(e.resource,"delete","any")?a("q-btn",{attrs:{size:"lg",rounded:"",color:"negative",icon:"delete"},on:{click:function(t){e.deleteItem(e.item)}}},[e._v(e._s(e.$t("buttons.deleteItem")))]):e._e(),e.isAuthorized(e.resource,"update","any")?a("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"save",disable:e.$v.item.$invalid},on:{click:function(t){e.updateItem(e.item)}}},[e._v(e._s(e.$t("buttons.updateItem")))]):e._e()]:[e.isAuthorized(e.resource,"create","any")?a("q-btn",{attrs:{size:"lg",rounded:"",color:"positive",icon:"create",disable:e.$v.item.$invalid},on:{click:function(t){e.createItem(e.item)}}},[e._v(e._s(e.$t("buttons.createItem")))]):e._e()]],2),a("q-tabs",{attrs:{inverted:"","no-pane-border":"",align:"justify"}},[a("q-tab",{attrs:{slot:"title",default:"",name:"tab-1",label:"Datos"},slot:"title"}),a("q-tab",{attrs:{slot:"title",name:"tab-2",label:"Contacto"},slot:"title"}),a("q-tab",{attrs:{slot:"title",name:"tab-3",label:"Contrato"},slot:"title"}),a("q-tab-pane",{attrs:{name:"tab-1"}},[a("div",{staticClass:"group"},e._l({zktime_pin:"number",name_first:"text",name_middle:"text",name_paternal:"text",name_maternal:"text",name_married:"text",sex:"select",date_of_birth:"date",place_of_birth:"text",nationality:"text",marital_status:"select",document_type:"select",document_number:"text",document_extension:"text",document_emitted:"text",jubilado:"select",aporta_afp:"select",persona_con_discapacidad:"select",tutor_persona_con_discapacidad:"select",caja_de_salud:"select",afp:"select",nua_cua:"text"},function(t,l){return a("q-field",{key:l,attrs:{label:e.$t("field."+l+".label"),helper:e.$t("field."+l+".helper"),error:e.$v.item[l].$error,"error-label":e.validationError(e.$v.item[l])}},["select"===t?a("q-select",{attrs:{placeholder:e.$t("field."+l+".placeholder"),options:e.options[l]||e.options.boolean},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}}):["date","time","datetime"].includes(t)?a("q-datetime",{attrs:{placeholder:e.$t("field."+l+".placeholder"),type:t},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}}):a("q-input",{attrs:{placeholder:e.$t("field."+l+".placeholder"),type:t},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}})],1)}))]),a("q-tab-pane",{attrs:{name:"tab-2"}},[e._l(e.$v.item.contact.$each.$iter,function(t,l){return a("div",{key:"contact_"+l,staticClass:"group"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col q-headline"},[e._v(e._s(e.$t("field.contact.label"))+" "+e._s(Number(l)+1))]),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{size:"lg",color:"negative",dense:"",flat:"",round:"",icon:"cancel"},on:{click:function(t){e.item.contact.splice(Number(l),1)}}})],1)]),a("q-field",{attrs:{label:e.$t("field.contact_description.label"),helper:e.$t("field.contact_description.helper"),error:t.description.$error,"error-label":e.validationError(t.description)}},[a("q-input",{attrs:{placeholder:e.$t("field.contact_description.placeholder")},model:{value:t.description.$model,callback:function(a){e.$set(t.description,"$model",a)},expression:"contact.description.$model"}})],1),a("q-field",{attrs:{label:e.$t("field.contact_type.label"),helper:e.$t("field.contact_type.helper"),error:t.type.$error,"error-label":e.validationError(t.type)}},[a("q-select",{attrs:{placeholder:e.$t("field.contact_type.placeholder"),options:e.options.contact_type},model:{value:t.type.$model,callback:function(a){e.$set(t.type,"$model",a)},expression:"contact.type.$model"}})],1),a("q-field",{attrs:{label:e.$t("field.contact_value.label"),helper:e.$t("field.contact_value.helper"),error:t.value.$error,"error-label":e.validationError(t.value)}},[a("q-input",{attrs:{placeholder:e.$t("field.contact_value.placeholder")},model:{value:t.value.$model,callback:function(a){e.$set(t.value,"$model",a)},expression:"contact.value.$model"}})],1),a("q-field",{attrs:{label:e.$t("field.contact_emergency_contact.label"),helper:e.$t("field.contact_emergency_contact.helper"),error:t.emergency_contact.$error,"error-label":e.validationError(t.emergency_contact)}},[a("q-select",{attrs:{placeholder:e.$t("field.contact_emergency_contact.placeholder"),options:e.options.boolean},model:{value:t.emergency_contact.$model,callback:function(a){e.$set(t.emergency_contact,"$model",a)},expression:"contact.emergency_contact.$model"}})],1),a("hr")],1)}),a("div",{staticClass:"text-center q-ma-md"},[a("q-btn",{attrs:{icon:"add",ouline:"",color:"positive",size:"lg",round:""},on:{click:function(t){e.item.contact.push({type:"mobile",description:"",value:"",emergency_contact:!1})}}})],1)],2),a("q-tab-pane",{attrs:{name:"tab-3"}},[e._l(e.$v.item.contract.$each.$iter,function(t,l){return a("div",{key:"contract_"+l,staticClass:"group"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col q-headline"},[e._v(e._s(e.$t("field.contract.label"))+" "+e._s(Number(l)+1))]),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{size:"lg",color:"negative",dense:"",flat:"",round:"",icon:"cancel",disable:!!e.item.contract[Number(l)].contract_id},on:{click:function(t){e.item.contract.splice(Number(l),1)}}})],1)]),e._l({contract_start_date:"date",contract_end_date:"date",contract_active:"select",contract_cancel_date:"date",contract_cancel_motive:"select",tipo_contrato:"select",modalidad_contrato:"select",sucursal:"number",clasificacion_laboral:"select"},function(l,o){return a("q-field",{key:o,attrs:{label:e.$t("field."+o+".label"),helper:e.$t("field."+o+".helper"),error:t[o].$error,"error-label":e.validationError(t[o])}},["select"===l?a("q-select",{attrs:{placeholder:e.$t("field."+o+".placeholder"),options:e.options[o]||e.options.boolean},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}}):["date","time","datetime"].includes(l)?a("q-datetime",{attrs:{placeholder:e.$t("field."+o+".placeholder"),type:l},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}}):a("q-input",{attrs:{placeholder:e.$t("field."+o+".placeholder"),type:l},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}})],1)})],2)}),a("div",{staticClass:"text-center q-ma-md"},[a("q-btn",{attrs:{icon:"add",ouline:"",color:"positive",size:"lg",round:""},on:{click:function(t){e.item.contract.push({external_contract_id:null,contract_sign_date:e.date.startOfDate(new Date,"day"),contract_start_date:null,contract_end_date:null,contract_active:!0,contract_cancel_date:null,contract_cancel_motive:null,tipo_contrato:1,modalidad_contrato:1,sucursal:null,clasificacion_laboral:null})}}})],1)],2)],1),a("portal",{attrs:{to:"print"}},[a("div",{staticClass:"row gutter-sm"},[e._l({name_first:"text",name_middle:"text",name_paternal:"text",name_maternal:"text",name_married:"text",sex:"select",date_of_birth:"date",place_of_birth:"text",nationality:"text",marital_status:"select",document_type:"select",document_number:"text",document_extension:"text",document_emitted:"text",jubilado:"select",aporta_afp:"select",persona_con_discapacidad:"select",tutor_persona_con_discapacidad:"select",caja_de_salud:"select",afp:"select",nua_cua:"text",zktime_pin:"number"},function(t,l){return a("q-field",{key:l,staticClass:"col-6",attrs:{label:e.$t("field."+l+".label"),helper:e.$t("field."+l+".helper"),error:e.$v.item[l].$error,"error-label":e.validationError(e.$v.item[l])}},["select"===t?a("q-select",{attrs:{readonly:"",placeholder:e.$t("field."+l+".placeholder"),options:e.options[l]||e.options.boolean},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}}):["date","time","datetime"].includes(t)?a("q-datetime",{attrs:{readonly:"",placeholder:e.$t("field."+l+".placeholder"),type:t},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}}):a("q-input",{attrs:{readonly:"",placeholder:e.$t("field."+l+".placeholder"),type:t},model:{value:e.$v.item[l].$model,callback:function(t){e.$set(e.$v.item[l],"$model",t)},expression:"$v.item[field].$model"}})],1)}),e._l(e.$v.item.contact.$each.$iter,function(t,l){return a("div",{key:"contact_"+l,staticClass:"col-12 gutter-md row"},[a("div",{staticClass:"col-12 q-headline"},[e._v(e._s(e.$t("field.contact.label"))+" "+e._s(Number(l)+1))]),a("q-field",{staticClass:"col-6",attrs:{label:e.$t("field.contact_description.label"),helper:e.$t("field.contact_description.helper"),error:t.description.$error,"error-label":e.validationError(t.description)}},[a("q-input",{attrs:{readonly:"",placeholder:e.$t("field.contact_description.placeholder")},model:{value:t.description.$model,callback:function(a){e.$set(t.description,"$model",a)},expression:"contact.description.$model"}})],1),a("q-field",{staticClass:"col-6",attrs:{label:e.$t("field.contact_type.label"),helper:e.$t("field.contact_type.helper"),error:t.type.$error,"error-label":e.validationError(t.type)}},[a("q-select",{attrs:{readonly:"",placeholder:e.$t("field.contact_type.placeholder"),options:e.options.contact_type},model:{value:t.type.$model,callback:function(a){e.$set(t.type,"$model",a)},expression:"contact.type.$model"}})],1),a("q-field",{staticClass:"col-6",attrs:{label:e.$t("field.contact_value.label"),helper:e.$t("field.contact_value.helper"),error:t.value.$error,"error-label":e.validationError(t.value)}},[a("q-input",{attrs:{readonly:"",placeholder:e.$t("field.contact_value.placeholder")},model:{value:t.value.$model,callback:function(a){e.$set(t.value,"$model",a)},expression:"contact.value.$model"}})],1),a("q-field",{staticClass:"col-6",attrs:{label:e.$t("field.contact_emergency_contact.label"),helper:e.$t("field.contact_emergency_contact.helper"),error:t.emergency_contact.$error,"error-label":e.validationError(t.emergency_contact)}},[a("q-select",{attrs:{readonly:"",placeholder:e.$t("field.contact_emergency_contact.placeholder"),options:e.options.boolean},model:{value:t.emergency_contact.$model,callback:function(a){e.$set(t.emergency_contact,"$model",a)},expression:"contact.emergency_contact.$model"}})],1),a("hr")],1)}),e._l(e.$v.item.contract.$each.$iter,function(t,l){return a("div",{key:"contract_"+l,staticClass:"col-12 row gutter-md"},e._l({contract_start_date:"date",contract_end_date:"date",contract_active:"select",contract_cancel_date:"date",contract_cancel_motive:"select",tipo_contrato:"select",modalidad_contrato:"select",sucursal:"number",clasificacion_laboral:"select"},function(l,o){return a("q-field",{key:o,staticClass:"col-6",attrs:{label:e.$t("field."+o+".label"),helper:e.$t("field."+o+".helper"),error:t[o].$error,"error-label":e.validationError(t[o])}},["select"===l?a("q-select",{attrs:{readonly:"",placeholder:e.$t("field."+o+".placeholder"),options:e.options[o]||e.options.boolean},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}}):["date","time","datetime"].includes(l)?a("q-datetime",{attrs:{readonly:"",placeholder:e.$t("field."+o+".placeholder"),type:l},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}}):a("q-input",{attrs:{readonly:"",placeholder:e.$t("field."+o+".placeholder"),type:l},model:{value:t[o].$model,callback:function(a){e.$set(t[o],"$model",a)},expression:"contract[field].$model"}})],1)}))})],2)])],1)],1)],1)},o=[];l._withStripped=!0;a("VRzm"),a("rGqo"),a("yt8O"),a("SRfc"),a("f3/d");var i=a("MVZn"),n=a.n(i),c=a("RIqP"),r=a.n(c),s=a("4IOb"),d=a("2LSj"),u=a("RwI2"),m=a("NNmX"),p=a("ta7f");function _(){return{name_first:"",name_middle:"",name_paternal:"",name_maternal:"",name_married:"",sex:null,date_of_birth:null,place_of_birth:"",nationality:"Bolivia",marital_status:null,document_type:"CI",document_number:"",document_extension:"",document_emitted:"SCZ",jubilado:!1,aporta_afp:!1,persona_con_discapacidad:!1,tutor_persona_con_discapacidad:!1,caja_de_salud:null,afp:null,nua_cua:"",zktime_pin:null,contract:[{contract_start_date:null,contract_end_date:null,contract_active:!0,contract_cancel_date:null,contract_cancel_motive:null,tipo_contrato:1,modalidad_contrato:1,sucursal:null,clasificacion_laboral:null}],contact:[{description:"Telefono Celular",type:"mobile",value:"",emergency_contact:!1},{description:"Telefono Celular 2",type:"mobile",value:"",emergency_contact:!1},{description:"Telefono Fijo",type:"phone",value:"",emergency_contact:!1},{description:"Correo Electronico",type:"email",value:"",emergency_contact:!1},{description:"Telefono Celular Conyuge",type:"mobile",value:"",emergency_contact:!0},{description:"Correo Electronico Conyuge",type:"email",value:"",emergency_contact:!0}]}}var f={name:"Employees",mixins:[u["a"],m["a"]],data:function(){var e=this;return{date:s["V"],passwordResetUserId:null,resource:"HREmployee",apiRoute:d["o"],editMode:!1,item:_(),options:{boolean:[{label:this.$t("options.boolean.false"),value:!1},{label:this.$t("options.boolean.true"),value:!0}],contact_type:[{label:this.$t("options.contact.mobile"),value:"mobile"},{label:this.$t("options.contact.phone"),value:"phone"},{label:this.$t("options.contact.email"),value:"email"}],caja_de_salud:[{label:"Caja Nacional de Salud (C.N.S.)",value:1},{label:"Caja Petrolera de Salud (C.P.S.)",value:2},{label:"Caja de Salud de Caminos",value:3},{label:"Caja Bancaria Estatal de Salud (C.B.E.S.)",value:4},{label:"Caja de Salud de la Banca Privada (C.S.B.P.)",value:5},{label:"Caja de Salud Cordes",value:6},{label:"Seguro Social Universitario (S.I.S.S.U.B.)",value:7},{label:"Corporación del Seguro Social Militar (COOSMIL)",value:8},{label:"Seguro Integral de Salud (SINEC)",value:9}],document_type:[{label:this.$t("options.document_type.carnet"),value:"CI"},{label:this.$t("options.document_type.passport"),value:"PASSAPORTE"}],afp:[{label:"AFP Previsión",value:1},{label:"AFP Futuro",value:2}],clasificacion_laboral:[{label:"Ocupaciones de dirección en la administración pública y empresas",value:1},{label:"Ocupaciones de profesionales científicos e intelectuales",value:2},{label:"Ocupaciones de técnicos y profesionales de apoyo",value:3},{label:"Empleados de oficina",value:4},{label:"Trabajadores de los servicios y vendedores del comercio",value:5},{label:"Productores y trabajadores en la agricultura, pecuaria, agropecuaria y pesca",value:6},{label:"Trabajadores de la industria extractiva, construcción, industria manufacturera y otros oficios",value:7},{label:"Operadores de instalaciones y maquinarias",value:8},{label:"Trabajadores no calificados",value:9},{label:"Fuerzas armada",value:10}],modalidad_contrato:[{label:"Tiempo indefinido",value:1},{label:"A plazo fijo",value:2},{label:"Por temporada",value:3},{label:"Por realización de obra o servicio",value:4},{label:"Condicional o eventual",value:5}],tipo_contrato:[{label:"Escrito",value:1},{label:"Verbal",value:2}],contract_cancel_motive:[{value:1,label:"Retiro voluntario del trabajador"},{value:2,label:"Vencimiento de contrato"},{value:3,label:"Conclusión de obra"},{value:4,label:"Perjuicio material causado con intención en los instrumentos de trabajo"},{value:5,label:"Revelación de secretos industriales"},{value:6,label:"Omisiones o imprudencias que afecten a la seguridad o higiene industrial"},{value:7,label:"Inasistencia injustificada de más de seis días continuos"},{value:8,label:"Incumplimiento total o parcial del convenio"},{value:9,label:"Robo o hurto por el trabajador"},{value:10,label:"Retiro forzoso"}],sex:[{label:this.$t("options.sex.female"),value:"F"},{label:this.$t("options.sex.male"),value:"M"}],marital_status:[{value:0,label:this.$t("options.marital_status.single")},{value:1,label:this.$t("options.marital_status.married")},{value:2,label:this.$t("options.marital_status.divorced")},{value:3,label:this.$t("options.marital_status.civil_union")}]},table:{loading:!1,rowKey:"employee_id",title:"",filter:"",data:[],visibleColumns:["name_first","name_paternal","date_of_birth"],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:10},columns:r()(["name_first","name_middle","name_paternal","name_maternal","name_married","sex","place_of_birth","nationality","marital_status","zktime_pin"].map(function(t){return{name:t,label:e.$t("field.".concat(t,".label")),field:t,align:"left",sortable:!0}})).concat([{name:"date_of_birth",label:this.$t("field.date_of_birth.label"),field:function(e){return e.date_of_birth?new Date(e.date_of_birth).toDateString():""},align:"left",sortable:!0},{name:"age",label:this.$t("field.age.label"),field:function(e){return e.date_of_birth?Math.floor((new Date-new Date(e.date_of_birth))/315576e5):""},align:"left",sortable:!0},{name:"edit",label:"",required:!0}])}}},validations:{item:{name_first:{required:p["required"]},name_middle:{},name_paternal:{},name_maternal:{},name_married:{},sex:{},date_of_birth:{},place_of_birth:{},nationality:{},marital_status:{},document_type:{},document_number:{},document_extension:{},document_emitted:{},jubilado:{},aporta_afp:{},persona_con_discapacidad:{},tutor_persona_con_discapacidad:{},caja_de_salud:{},afp:{},nua_cua:{},zktime_pin:{},contact:{$each:{type:{},value:{},description:{},emergency_contact:{}}},contract:{$each:{contract_start_date:{},contract_end_date:{},contract_active:{},contract_cancel_date:{},contract_cancel_motive:{},tipo_contrato:{},modalidad_contrato:{},sucursal:{},clasificacion_laboral:{}}}}},methods:{schemaToColumns:function(e,t){var a=this;return e.map(function(e){return n()({name:t?t+"."+e.name:e.name,label:a.$t("item.".concat(e.name.match(/[^.]*$/),".label")),field:t?function(a){return a[t][e.name]}:e.name},e.column)})},newItem:function(){return _()},fetchItems:function(){var e=this;this.table.loading=!0,Promise.all([this.$axios.get(d["o"],{params:{eager:"[contract, contact]"}})]).then(function(t){e.table.data=t[0]&&t[0].data?t[0].data:[],e.table.loading=!1}).catch(function(){e.table.loading=!1})},deleteParams:function(e){return{employee_id:e.employee_id}}},mounted:function(){this.fetchItems()}},b=f,$=a("KHd+"),v=a("v2tf"),h=Object($["a"])(b,l,o,!1,null,null,null);"function"===typeof v["default"]&&Object(v["default"])(h);t["default"]=h.exports},RwI2:function(e,t,a){"use strict";a("yt8O"),a("RW0V"),a("rGqo");var l=a("MVZn"),o=a.n(l),i=a("L2JU");t["a"]={computed:o()({},Object(i["c"])("core",{isAuthorized:"isAuthorized"})),methods:{createItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.createItem.title"),message:this.$t("confirm.createItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.post(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.create.failure"),type:"warning"})})})},updateItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.updateItem.title"),message:this.$t("confirm.updateItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.put(t.apiRoute,e).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.update.failure"),type:"warning"})})})},deleteItem:function(e){var t=this;this.$q.dialog({title:this.$t("confirm.deleteItem.title"),message:this.$t("confirm.deleteItem.message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.$axios.delete(t.apiRoute,{params:t.deleteParams(e)}).then(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.success"),type:"positive"}),t.reset(),t.fetchItems()}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("operation.delete.failure"),type:"positive"})})})},edit:function(e){var t=this;e?(this.editMode=!0,this.item=JSON.parse(JSON.stringify(e)),this.mapItemOptions&&Object.keys(this.mapItemOptions).forEach(function(e){Array.isArray(t.item[e])?t.item[e]=t.item[e].map(t.mapItemOptions[e]):t.item[e]&&(t.item[e]=t.mapItemOptions[e](t.item[e]))}),delete this.item.__index):this.editMode=!1,this.$refs.modal.show()},reset:function(){this.$refs.modal.hide(),this.$v.$reset(),this.item=this.newItem()},cancel:function(){var e=this;this.$v.$anyDirty?this.$q.dialog({title:this.$t("confirm.cancelEdit.title"),message:this.$t("confirm.cancelEdit.message"),ok:!0,cancel:!0}).then(function(){e.reset()}):this.reset()}}}},UZq9:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"modal":{"title":"Empleado","subtitle":" "}}}'),delete e.options._Ctor}},v2tf:function(e,t,a){"use strict";var l=a("UZq9"),o=a.n(l);t["default"]=o.a}}]);