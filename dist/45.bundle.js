(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/WVu":function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".app-login[data-v-4557679a]{display:flex;justify-content:center;align-items:center;border:1px solid #dadada;border-top:0;height:calc(100vh - 40px)}.app-login .app-details[data-v-4557679a]{margin-top:-60px}.app-login .requirements[data-v-4557679a]{min-width:400px;text-align:left;max-width:80%;margin:10px auto}.app-login .requirements .authorities .select[data-v-4557679a]{margin-top:-7px}.app-login .requirements .dangerous-authority[data-v-4557679a]{background:#ff0707;border:1px solid #cb0606;color:#fff;font-size:10px;margin-bottom:10px;margin-top:-7px;padding:10px;border-radius:4px}.app-login .requirements .boxes[data-v-4557679a]{width:100%}.app-login .requirements .boxes .box[data-v-4557679a]{width:100%}.app-login .requirements .requirement[data-v-4557679a]{padding:10px 0;display:flex;align-items:center;position:relative}.app-login .requirements .requirement label[data-v-4557679a]{font-size:10px;padding-top:2px}.app-login .requirements .requirement .icon[data-v-4557679a]{padding-right:5px;align-self:flex-start;color:#7a7a7a;margin-left:-8px}.app-login .requirements .requirement .icon.bubble[data-v-4557679a]{padding:3px 2px;border-radius:50%;background:#0799ff;border:1px solid #0778dd;color:#fff;font-size:9px;cursor:pointer}.app-login .requirements .requirement .icon.bubble:hover ~ .bubble-explainer[data-v-4557679a]{display:block}.app-login .requirements .requirement .bubble-explainer[data-v-4557679a]{position:absolute;right:-10px;bottom:calc(100% - 10px);width:380px;font-size:10px;background:#fff;color:#333;box-shadow:0 2px 4px rgba(7,155,232,0.23),0 8px 24px rgba(7,155,232,0.23);padding:20px;border-radius:4px;display:none;z-index:999999}.app-login .requirements .requirement .text[data-v-4557679a]{flex:1;font-size:10px}.app-login .requirements .requirement.all-accounts[data-v-4557679a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.all-accounts .icon[data-v-4557679a]:first-child{color:#0799ff}.app-login .requirements .requirement.all-accounts .network-accounts-list[data-v-4557679a]{max-height:100px;overflow-y:auto}.app-login .requirements .requirement.all-accounts .network-accounts[data-v-4557679a]{font-size:10px;font-weight:bold;display:inline-block;margin-right:5px}.app-login .requirements .requirement.all-accounts .network-accounts .name[data-v-4557679a]{color:#0799ff;text-decoration:underline}.app-login .requirements .requirement.personal[data-v-4557679a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.no-accounts[data-v-4557679a]{text-align:center;width:350px;display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid #0799ff;border-radius:4px;margin:20px auto 10px;padding:20px}.app-login .requirements .requirement.no-accounts .network-name[data-v-4557679a]{font-size:14px;font-weight:bold;margin-bottom:5px}.app-login .actions[data-v-4557679a]{margin-top:30px;position:absolute;bottom:30px;right:30px;left:30px;display:flex;justify-content:space-between}\n",""])},IeaP:function(t,e,i){"use strict";var n=i("L2JU"),a={components:{Scatter:i("wg2a").a},props:["app","suffix"],computed:{...Object(n.d)(["appReputation"]),...Object(n.c)(["ridlEnabled"]),unknownReputation(){return void 0===this.appReputation},trusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)>0},untrusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)<0}}},s=(i("tL4a"),i("KHd+")),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"app-details"},[t.untrusted?i("figure",{staticClass:"logo scam"},[i("i",{staticClass:"icon-attention"})]):i("figure",{staticClass:"logo",class:{border:"Scatter"!==t.app.applink&&!t.app.img}},["Scatter"===t.app.applink?i("Scatter"):t.app.img?i("img",{attrs:{src:t.app.img}}):i("span",[t._v(t._s(t.$t("popouts.popoutApp.noImage")))])],1),t._v(" "),t.ridlEnabled&&"Scatter"!==t.app.applink?i("section",[!1===t.appReputation?i("figure",{staticClass:"reputation"},[i("i",{staticClass:"icon-spin4 animate-spin"}),t._v(" loading reputation")]):i("section",[t.unknownReputation?i("figure",{staticClass:"reputation"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.unknown")))]):t._e(),t._v(" "),t.trusted?i("figure",{staticClass:"reputation trusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.trusty")))]):t._e(),t._v(" "),t.untrusted?i("figure",{staticClass:"reputation untrusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.scam")))]):t._e()])]):t._e(),t._v(" "),i("figure",{staticClass:"name"},[i("b",[t._v(t._s(t.app.name))]),t._v(" "),t.suffix?i("span",[t._v(t._s(t.suffix))]):t._e()])])}),[],!1,null,"3c121449",null);e.a=o.exports},J8XJ:function(t,e,i){var n=i("y5zb");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("1a4d8aa0",n,!0,{})},L6xj:function(t,e,i){var n=i("p7K2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("c9a2862e",n,!0,{})},Wcjy:function(t,e,i){var n=i("/WVu");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("3ee17790",n,!0,{})},h0p9:function(t,e,i){"use strict";var n=i("Wcjy");i.n(n).a},leBm:function(t,e,i){"use strict";i.r(e);var n=i("L2JU"),a=i("EY8S"),s=i("78si"),o=i.n(s),r=i("psvp"),l=i("IfgB"),c=i("Gbp+"),p=(i("F+MN"),i("+nw1")),u=i("IeaP");i("8olR");var d={props:["popup","expanded"],components:{PopOutApp:u.a,RequiredFields:r.a},data:()=>({account:null,selectedAccounts:[],searchTerms:"",selectedLocation:null,selectedIdentity:null,showingAll:!1,loginAll:!1,reputation:null}),created(){this.loginAll=this.popup.data.type===p.LOGIN_ALL,this.validAccounts.length&&(this.account=this.validAccounts[0]),this.selectIdentity(this.identities.sort((t,e)=>e.id===this.scatter.keychain.lastUsedIdentity?1:t.id===this.scatter.keychain.lastUsedIdentity?-1:0)[0])},computed:{...Object(n.d)(["scatter","balances"]),...Object(n.c)(["identity","identities","accounts","networks","locations"]),appData(){return this.popup.data.props.appData},validAccounts(){if(!this.accountRequirements.length)return[];return this.accountRequirements.map(t=>o.a.fromJson(t))[0].accounts().sort((t,e)=>"active"===e.authority?1:0).sort((t,e)=>e.logins-t.logins)},requestedNetworks(){return this.accountRequirements.map(t=>{const e=o.a.fromJson(t);return this.networks.find(t=>t.unique()===e.unique())})},network(){return o.a.fromJson(this.accountRequirements[0]||{})},savedNetwork(){return this.networks.find(t=>t.unique()===this.network.unique())},payload(){return this.popup.payload()},isValidIdentity(){return this.selectedIdentity.hasRequiredFields(this.fields,this.selectedLocation)},fields(){return a.IdentityRequiredFields.fromJson(this.payload.fields)},personalFields(){return this.fields.personal},locationFields(){return this.fields.location},missingFields(){return!(!this.personalFields.length&&!this.locationFields.length)&&!this.identity.hasRequiredFields(this.fields)},identityRequirements(){return this.fields.personal.concat(this.fields.location).join(", ")},accountRequirements(){return this.fields.accounts||[]},allRequirementsMet(){return!this.accountRequirements.length||!!this.validAccounts.length},onlyIdentityLogin(){return!this.fields.personal.length&&!this.fields.location.length&&!this.fields.accounts.length}},methods:{returnResult(t){this.$emit("returned",t)},selectTokenAndAccount(){l.a.push(c.a.selectAccount(t=>{t&&(this.account=t)},this.validAccounts))},login(){this.returnResult({identity:this.selectedIdentity,location:this.selectedLocation,accounts:this.account?[this.account]:[],missingFields:this.missingFields})},selectIdentity(t){this.selectedIdentity=t.clone(),t.getLocation()?this.selectedLocation=t.getLocation().clone():this.locations.length&&(this.selectedLocation=this.locations[0].clone())}}},g=(i("h0p9"),i("KHd+")),f=Object(g.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("PopOutHead",{attrs:{"id-selector":"1",identity:t.selectedIdentity},on:{closed:t.returnResult,identity:t.selectIdentity}}),t._v(" "),i("section",{staticClass:"app-login"},[i("section",[i("PopOutApp",{attrs:{app:t.appData,suffix:t.account?t.$t("popouts.login.suffix"):""}}),t._v(" "),i("section",{staticClass:"requirements"},[!t.loginAll&&t.validAccounts.length?i("section",{staticClass:"requirement account"},[i("section",{staticClass:"boxes"},[i("section",{staticClass:"box account-selector",on:{click:t.selectTokenAndAccount}},[i("section",[i("figure",{staticClass:"name"},[t._v(t._s(t.account.sendable()))]),t._v(" "),i("figure",{staticClass:"network"},[t._v(t._s(t.account.network().name))])]),t._v(" "),i("figure",{staticClass:"chevron fas fa-caret-square-down"})])])]):t._e(),t._v(" "),!t.loginAll&&t.account&&"owner"===t.account.authority?i("section",{staticClass:"dangerous-authority"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("popouts.login.dangerousPermission"))+"\n\t\t\t\t")]):t._e(),t._v(" "),!t.loginAll&&t.account&&t.account.authorities(!1).length>1?i("section",{staticClass:"authorities"},[i("Select",{attrs:{bordered:"1",options:t.account.authorities(!1),parser:function(t){return t.authority},iconparser:function(t){return"owner"===t.authority?{class:"icon-attention red"}:""},selected:t.account},on:{selected:function(e){return t.account=e}}})],1):t.loginAll&&t.validAccounts.length?i("section",{staticClass:"requirement all-accounts"},[i("figure",{staticClass:"icon icon-network"}),t._v(" "),i("section",{staticClass:"text"},[i("label",[t._v(t._s(t.$t("popouts.login.allAccountsFor")))]),t._v(" "),i("section",{staticClass:"network-accounts-list"},t._l(t.requestedNetworks,(function(e,n){return i("section",{staticClass:"network-accounts"},[i("span",{staticClass:"name"},[t._v(t._s(e.name)+" ("+t._s(e.accounts(!0).length)+" "+t._s(t.$tc("generic.accounts",e.accounts(!0).length))+")")]),t._v(" "),n+1<t.requestedNetworks.length?i("span",[t._v(",")]):t._e()])})),0)]),t._v(" "),i("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),i("section",{staticClass:"bubble-explainer"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.allAccountsDescription",{app:t.appData.name}))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.onlyIdentityLogin?i("section",{staticClass:"requirement personal"},[i("figure",{staticClass:"icon icon-check"}),t._v(" "),i("figure",{staticClass:"text"},[i("b",[t._v(t._s(t.$t("popouts.login.noInfoNeededTitle")))]),t._v(" "),i("br"),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.noInfoNeededDescription"))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.requestedNetworks.length&&!t.validAccounts.length?i("section",{staticClass:"requirement no-accounts"},[t.savedNetwork?i("figure",{staticClass:"network-name"},[t._v(t._s(t.savedNetwork.name))]):t._e(),t._v(" "),i("figure",{staticClass:"text"},[i("b",[t._v(t._s(t.$t("popouts.login.noAccountsTitle")))]),t._v(" "),i("br"),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.noAccountsDescription"))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.allRequirementsMet&&t.identityRequirements.length?i("section",{staticClass:"requirement personal"},[i("figure",{staticClass:"icon icon-user"}),t._v(" "),i("figure",{staticClass:"text"},[i("label",[t._v(t._s(t.$t("popouts.login.personalInformation")))]),t._v("\n\t\t\t\t\t\t"+t._s(t.identityRequirements)+"\n\t\t\t\t\t")]),t._v(" "),i("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),i("section",{staticClass:"bubble-explainer"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.requestingPersonalInformation",{app:t.appData.name}))+"\n\t\t\t\t\t")])]):t._e()])],1),t._v(" "),i("section",{staticClass:"actions"},[i("Button",{attrs:{big:"1",text:t.$t("generic.cancel")},nativeOn:{click:function(e){return t.returnResult(null)}}}),t._v(" "),i("Button",{staticStyle:{padding:"0 20px"},attrs:{big:"1",disabled:!t.allRequirementsMet,blue:"1",text:t.$t("generic.allow")},nativeOn:{click:function(e){return t.login(e)}}})],1)])],1)}),[],!1,null,"4557679a",null);e.default=f.exports},p7K2:function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".fields-title[data-v-586a6aca]{margin:-20px -30px 0;padding:20px 30px;background:linear-gradient(180deg, #007fd7 0%, #0799ff 100%);color:#fff;font-size:18px;margin-bottom:20px}.required-fields[data-v-586a6aca]{padding:20px 0 0}\n",""])},pNnu:function(t,e,i){"use strict";var n=i("L6xj");i.n(n).a},psvp:function(t,e,i){"use strict";i("L2JU");var n={props:["fields","identity","selectedIdentity","selectedLocation","clonedLocation"],data:()=>({}),computed:{identityRequirements(){return this.personalFields.concat(this.locationFields).join(", ")},personalFields(){return this.fields.personal},locationFields(){return this.fields.location}},methods:{fieldValueFor(t,e=!1){return e?this.identity.getPropertyValueByName(t,this.selectedLocation):this.selectedIdentity.getPropertyValueByName(t,this.clonedLocation)}}},a=(i("pNnu"),i("KHd+")),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"required-fields"},[i("section",{staticClass:"fields-title"},[t._v("\n\t\t"+t._s(t.$t("popouts.requiredFields.title"))+"\n\t")]),t._v(" "),i("section",[i("label",[t._v(t._s(t.$t("popouts.requiredFields.personalInformation")))]),t._v(" "),i("figure",{staticClass:"text"},[t._v("\n\t\t\t"+t._s(t.identityRequirements)+"\n\t\t")])])])}),[],!1,null,"586a6aca",null);e.a=s.exports},tL4a:function(t,e,i){"use strict";var n=i("J8XJ");i.n(n).a},y5zb:function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".reputation[data-v-3c121449]{padding:5px 12px;font-size:10px;margin-bottom:10px;margin-top:-5px;font-weight:bold;background:#f3f6f7;color:#c8c8c8}.reputation.trusted[data-v-3c121449]{background:#159F00;color:#fff}.reputation.untrusted[data-v-3c121449]{background:#ff0707;color:#fff}.app-details[data-v-3c121449]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-details .logo[data-v-3c121449]{display:flex;align-items:center;justify-content:center;height:100px;width:100px;border-radius:4px;padding:5px;margin-bottom:20px}.app-details .logo.border[data-v-3c121449]{background:#f3f6f7;border:1px solid #dfe0e1}.app-details .logo img[data-v-3c121449]{height:100%;width:100%}.app-details .logo span[data-v-3c121449]{font-size:10px;font-weight:bold;color:#7a7a7a}.app-details .logo.scam[data-v-3c121449]{font-size:48px;border-radius:50%;color:#ff0707;background:#f3f6f7;border:1px solid #dfe0e1;animation:pulsate 0.5s ease infinite}.app-details .name[data-v-3c121449]{font-size:14px}\n",""])}}]);