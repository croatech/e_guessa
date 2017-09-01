webpackJsonp([1,0],[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(21),u=n(o),a=r(3),s=n(a),i=r(20),d=n(i),c=r(12),l=n(c),f=r(2);u.default.use(s.default),u.default.use(d.default),new u.default({el:"#app",router:f.router,template:"<App/>",components:{App:l.default}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o="http://localhost:4000/api",u=o+"/registrations/",a=o+"/sessions/",s=o+"/current_user/";t.default={user:{authenticated:!!localStorage.getItem("id_token")},login:function(e,t,r){var o=this;e.$http.post(a,t).then(function(e){localStorage.setItem("id_token",e.body.jwt),o.user.authenticated=!0,r&&n.router.push({path:r})},function(t){e.error=t.body})},currentUser:function(e){e.$http.get(s,{headers:this.getAuthHeader()}).then(function(t){e.user=t.body.user},function(e){console.log(e)})},signup:function(e,t,r){var o=this;e.$http.post(u,t).then(function(e){localStorage.setItem("id_token",e.body.jwt),o.user.authenticated=!0,r&&n.router.push({path:r})},function(t){e.errors=t.body})},logout:function(e,t){var r=this;e.$http.delete(a,t).then(function(e){localStorage.removeItem("id_token"),r.user.authenticated=!1,n.router.push({path:"/login"})},function(e){console.log(e.message)})},checkAuth:function(){var e=localStorage.getItem("id_token");this.user.authenticated=!!e},getAuthHeader:function(){return{Authorization:localStorage.getItem("id_token")}}}},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;var o=r(3),u=n(o),a=r(13),s=n(a),i=r(14),d=n(i),c=r(15),l=n(c),f=r(1),p=n(f),m=function(e,t,r){p.default.user.authenticated?r():r({path:"/login",query:{redirect:e.fullPath}})},v=function(e,t,r){p.default.user.authenticated?r(t.path):r()};t.router=new u.default({mode:"history",base:e,routes:[{path:"/",component:s.default,beforeEnter:m},{path:"/login",component:d.default,beforeEnter:v},{path:"/signup",component:l.default,beforeEnter:v},{path:"*",redirect:"/"}]})}).call(t,"/")},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.errorFor=void 0;var o=r(9),u=n(o);t.errorFor=function(e,t){var r=JSON.parse((0,u.default)(e)).errors;if(r){var n=r.find(function(e){return t in e});return n?n[t]:void 0}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),u=n(o);t.default={name:"App",data:function(){return{user:u.default.user}},methods:{logout:function(){u.default.logout(this,{headers:u.default.getAuthHeader()})}}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);n(o);t.default={name:"Hello"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),u=n(o);t.default={data:function(){return{credentials:{username:"",password:""},error:""}},methods:{login:function(){var e={username:this.credentials.username,password:this.credentials.password};u.default.login(this,{session:e},"/")}}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),u=n(o),a=r(4);t.default={data:function(){return{credentials:{username:"",password:""},errors:[]}},computed:{usernameError:function(){return(0,a.errorFor)(this.errors,"username")},passwordError:function(){return(0,a.errorFor)(this.errors,"password")}},methods:{submit:function(){var e={username:this.credentials.username,password:this.credentials.password};u.default.signup(this,{user:e},"/")}}}},,,,function(e,t,r){var n,o;n=r(5);var u=r(19);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,e.exports=n},function(e,t,r){var n,o;n=r(6);var u=r(16);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,e.exports=n},function(e,t,r){var n,o;n=r(7);var u=r(17);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,e.exports=n},function(e,t,r){var n,o;n=r(8);var u=r(18);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,e.exports=n},function(e,t){e.exports={render:function(){var e=this;e.$createElement;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement;return t("div",[t("h1",["Welcome to the hidden side!"])," "])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("h2",["Log In"])," ",t("p",["Log in to your account to get some great quotes."])," ",e.error?t("div",[t("p",[e._s(e.error.message)])]):e._e()," ",t("form",{on:{submit:function(t){t.preventDefault(),e.login(t)}}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],attrs:{type:"text",placeholder:"Enter your username"},domProps:{value:e._s(e.credentials.username)},on:{input:function(t){t.target.composing||(e.credentials.username=t.target.value)}}})])," ",t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e._s(e.credentials.password)},on:{input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}})])," ",t("button",{attrs:{type:"submit"}},["Access"])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("h2",["Sign Up"])," ",t("p",["Sign up for a free account!"])," ",t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],attrs:{type:"text",placeholder:"Enter your username"},domProps:{value:e._s(e.credentials.username)},on:{input:function(t){t.target.composing||(e.credentials.username=t.target.value)}}})," ",e.usernameError?t("div",[t("p",[e._s(e.usernameError)])]):e._e()])," ",t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e._s(e.credentials.password)},on:{input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}})," ",e.passwordError?t("div",[t("p",[e._s(e.passwordError)])]):e._e()])," ",t("button",{on:{click:function(t){e.submit()}}},["Register"])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("nav",[t("div",[t("ul",[t("li",[t("router-link",{attrs:{to:"/"}},["Home"])])," ",e.user.authenticated?e._e():t("li",[t("router-link",{attrs:{to:"login"}},["Login"])])," ",e.user.authenticated?e._e():t("li",[t("router-link",{attrs:{to:"signup"}},["Signup"])])," ",e.user.authenticated?t("li",[t("a",{attrs:{href:"/login"},on:{click:function(t){t.preventDefault(),e.logout()}}},["Logout"])]):e._e()])])])," ",t("div",[t("router-view")])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.51cb340980f11028b57a.js.map