(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"/6EM":function(t,e,o){},"2OYB":function(t,e,o){},"3CpC":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout-header",[o("q-toolbar",{attrs:{color:"primary"}},[o("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.$root.$emit("TOGGLE_DRAWER")}}},[o("q-icon",{attrs:{name:"menu"}})],1),o("q-toolbar-title",[t._v("\n      "+t._s(t.$t(t.$route.meta.label))+"\n      "),t.authenticated?o("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.$route.path.slice(1)))]):t._e()]),o("q-btn-group",{attrs:{rounded:""}},[o("q-btn",{staticClass:"q-pa-sm",attrs:{rounded:"",color:"white","text-color":"primary",icon:"home"},on:{click:function(e){t.$router.push("/")}}}),o("q-btn",{staticClass:"q-pa-sm",attrs:{rounded:"",color:"white","text-color":"primary",icon:"help_outline"},on:{click:function(e){t.$router.push(t.$route.meta.documentation)}}}),o("theme-settings"),o("q-btn",{staticClass:"q-pa-sm",attrs:{rounded:"",color:"white","text-color":"primary",icon:"account_circle",disable:!t.authenticated},on:{click:function(e){t.$router.push("/user")}}}),o("user-session")],1)],1)],1)},r=[];n._withStripped=!0;var i=o("MVZn"),s=o.n(i),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-btn",{staticClass:"q-pa-sm",attrs:{icon:"style",rounded:"","text-color":"primary",color:"white"},on:{click:function(e){t.$refs.modal.show()}}},[o("q-modal",{ref:"modal",attrs:{"content-css":{minWidth:"60vw",minHeight:"80vh"}}},[o("q-modal-layout",[o("q-toolbar",{staticClass:"q-py-none q-pr-none",attrs:{slot:"header"},slot:"header"},[o("q-toolbar-title",[t._v("\n          "+t._s(t.$t("theme"))+"\n        ")]),o("q-btn",{staticClass:"no-shadow",staticStyle:{"border-radius":"0"},attrs:{icon:"close",color:"negative",size:"lg"},on:{click:function(e){t.$refs.modal.hide()}}})],1),o("q-toolbar",{attrs:{slot:"footer"},slot:"footer"}),o("div",{staticClass:"layout-padding group"},t._l(t.colors,function(e){return o("q-field",{key:e,attrs:{label:t.$t(e+"-color")}},[o("q-color",{attrs:{color:e,inverted:"",modal:"",value:t.getColor(e)},on:{input:function(o){return t.setColor(e,o)}}})],1)}))],1)],1)],1)},c=[];a._withStripped=!0;var l=o("4IOb"),u={name:"ThemeSettings",data:function(){return{modal:!1,colors:["primary","secondary","tertiary","positive","negative","info","warning"]}},methods:{getColor:function(t){return l["U"].getBrand(t)},setColor:function(t,e){l["U"].setBrand(t,e)}}},d=u,f=(o("mzLQ"),o("KHd+")),p=o("aQTp"),h=Object(f["a"])(d,a,c,!1,null,"72d4945e",null);"function"===typeof p["default"]&&Object(p["default"])(h);var m=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-btn",{staticClass:"q-pa-sm",attrs:{rounded:"",color:t.authenticated?"negative":"secondary",icon:"power_settings_new"},on:{click:function(e){t.authenticated?t.logout():t.$refs.modal.show()}}},[o("q-modal",{ref:"modal",attrs:{minimized:"","content-css":"width: 400px; min-width: 30vw; min-height: 30vh","content-classes":"q-py-xl text-center"},on:{show:function(e){t.$refs.username.focus()},hide:t.reset}},[o("span",{staticClass:"q-display-1 q-my-md"},[t._v("\n      "+t._s(t.$t("login"))+"\n    ")]),o("q-input",{ref:"username",staticClass:"q-my-md",attrs:{type:"text",align:"center",placeholder:t.$t("username")},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.$refs.password.focus(e):null}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),o("q-input",{ref:"password",staticClass:"q-my-md",attrs:{type:"password",align:"center",placeholder:t.$t("password")},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("q-btn",{staticClass:"q-my-md",attrs:{dark:"",outline:"",rounded:"",label:t.$t("login")},on:{click:t.login}})],1)],1)},_=[];g._withStripped=!0;var w=o("L2JU"),q={name:"LoginLogout",data:function(){return{username:"",password:""}},computed:s()({},Object(w["c"])("core",{authenticated:"isAuthenticated"})),methods:s()({},Object(w["b"])("core",{loginAction:"login",logoutAction:"logout"}),{loginRequested:function(){this.$refs.modal.show()},reset:function(){this.username="",this.password=""},login:function(){var t=this;this.$q.loading.show(),this.loginAction({username:this.username,password:this.password,success:function(){t.reset(),t.$q.loading.hide(),t.$refs.modal.hide(),t.$q.notify({message:t.$t("login_success"),type:"positive"})},failure:function(){t.reset(),t.$q.loading.hide(),t.$refs.username.focus(),t.$q.notify({message:t.$t("login_failure"),type:"warning"})}})},logout:function(){var t=this;this.$q.dialog({title:this.$t("logout_confirm_title"),message:this.$t("logout_confirm_message"),ok:!0,cancel:!0}).then(function(){t.$q.loading.show(),t.logoutAction({success:function(){t.$q.loading.hide(),t.$q.notify({message:t.$t("logout_success"),type:"positive"})},failure:function(){t.$q.loading.hide()}})}).catch(function(){})}}),created:function(){this.$root.$on("AUTHENTICATION_REQUIRED",this.loginRequested),this.$root.$on("SESSION_TIMEOUT",this.loginRequested)},beforeDestroy:function(){this.$root.$off("AUTHENTICATION_REQUIRED",this.loginRequested),this.$root.$off("SESSION_TIMEOUT",this.loginRequested)}},$=q,v=(o("Bwz+"),o("eL8p")),b=Object(f["a"])($,g,_,!1,null,null,null);"function"===typeof v["default"]&&Object(v["default"])(b);var y=b.exports,C={name:"MainHeader",components:{ThemeSettings:m,UserSession:y},data:function(){return{}},computed:s()({},Object(w["c"])("core",{authenticated:"isAuthenticated"}))},O=C,k=(o("MRnw"),Object(f["a"])(O,n,r,!1,null,null,null));e["a"]=k.exports},"7+1x":function(t,e,o){"use strict";var n=o("GqgS"),r=o.n(n);r.a},"Bwz+":function(t,e,o){"use strict";var n=o("C5/D"),r=o.n(n);r.a},"C5/D":function(t,e,o){},DY7K:function(t,e,o){"use strict";var n=o("/6EM"),r=o.n(n);r.a},EMsr:function(t,e,o){},GqgS:function(t,e,o){},MRnw:function(t,e,o){"use strict";var n=o("EMsr"),r=o.n(n);r.a},aQTp:function(t,e,o){"use strict";var n=o("d5F5"),r=o.n(n);e["default"]=r.a},d5F5:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"es":{"theme":"Tema","primary-color":"Color Primario","secondary-color":"Color Segundario","tertiary-color":"Color Terciario","positive-color":"Color Positivo","negative-color":"Color Negativo","info-color":"Color Informacion","warning-color":"Color Advertencia"}}'),delete t.options._Ctor}},eL8p:function(t,e,o){"use strict";var n=o("g0Mf"),r=o.n(n);e["default"]=r.a},ez0Y:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hHh Lpr lFf"}},[o("main-header"),o("main-drawer"),o("q-page-container",[o("q-page",{staticClass:"fixed row justify-center items-center",attrs:{padding:""}},[o("img",{staticStyle:{width:"80%",opacity:"0.1"},attrs:{src:"statics/logo.png",alt:""}})]),o("router-view")],1)],1)},r=[];n._withStripped=!0;var i=o("3CpC"),s=o("fXzb"),a={name:"LayoutDefault",components:{MainHeader:i["a"],MainDrawer:s["a"]}},c=a,l=(o("DY7K"),o("KHd+")),u=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports},fXzb:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout-drawer",{model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[o("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[t.$route.meta.tabs?[o("q-list-header",[t._v(t._s(t.$t("pages")))]),t._l(t.$route.meta.tabs,function(e,n){return o("q-item",{key:n+"_"+e.hash,attrs:{inset:"",link:"",to:"/"+e.root+"/"+e.hash,replace:"",exact:""}},[o("q-item-main",[t._v("\n          "+t._s(t.$t(e.meta.label))+"\n        ")])],1)})]:t._e(),o("q-list-header",[t._v(t._s(t.$t("modules")))]),t._l(t.routes,function(e,n){return o("q-item",{key:n+"_"+e.hash,attrs:{inset:"",link:"",to:"/"+e.hash,replace:""}},[o("q-item-main",[t._v("\n        "+t._s(t.$t(e.meta.label))+"\n      ")])],1)})],2)],1)},r=[];n._withStripped=!0;var i=o("MVZn"),s=o.n(i),a=o("a64x"),c=o("L2JU"),l={name:"MainDrawer",data:function(){return{drawerOpen:!1,routes:a["a"]}},computed:s()({},Object(c["c"])("core",{authenticated:"isAuthenticated",authorized:"isAuthorized"}),Object(c["e"])("core",{session:"session"})),methods:{toggledrawer:function(t){this.drawerOpen=void 0===t?!this.drawerOpen:t}},created:function(){this.$root.$on("TOGGLE_DRAWER",this.toggledrawer)},beforeDestroy:function(){this.$root.$off("TOGGLE_DRAWER",this.toggledrawer)}},u=l,d=(o("7+1x"),o("KHd+")),f=Object(d["a"])(u,n,r,!1,null,null,null);e["a"]=f.exports},g0Mf:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"es":{"login":"Iniciar Session","logout":"Cerrar Session","logout_confirm_title":"Cerrar Session?","logout_confirm_message":"Cerrar Session?","login_success":"Login exitoso","login_failure":"Error al hacer Login","logout_success":"Logout exitoso","logout_failure":"Error al hacer Logout"}}'),delete t.options._Ctor}},mzLQ:function(t,e,o){"use strict";var n=o("2OYB"),r=o.n(n);r.a}}]);