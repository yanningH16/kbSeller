webpackJsonp([14],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},A7IP:function(t,e,a){"use strict";function s(t){a("T3i6")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("cuN8"),i=a("j/7s"),o=a("VU/8"),r=s,p=o(n.a,i.a,!1,r,"data-v-64f4053b",null);e.default=p.exports},BO1k:function(t,e,a){t.exports={default:a("fxRn"),__esModule:!0}},Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var s=a("woOf"),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,a){var s=a("kM2E");s(s.S+s.F,"Object",{assign:a("To3L")})},T3i6:function(t,e,a){var s=a("zvfR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("92c43c08",s,!0)},To3L:function(t,e,a){"use strict";var s=a("lktj"),n=a("1kS7"),i=a("NpIQ"),o=a("sB3e"),r=a("MU5D"),p=Object.assign;t.exports=!p||a("S82l")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=p({},t)[a]||Object.keys(p({},e)).join("")!=s})?function(t,e){for(var a=o(t),p=arguments.length,l=1,d=n.f,c=i.f;p>l;)for(var u,g=r(arguments[l++]),A=d?s(g).concat(d(g)):s(g),h=A.length,f=0;h>f;)c.call(g,u=A[f++])&&(a[u]=g[u]);return a}:p},V3tA:function(t,e,a){a("R4wc"),t.exports=a("FeBl").Object.assign},cuN8:function(t,e,a){"use strict";var s=a("BO1k"),n=a.n(s),i=a("Dd8w"),o=a.n(i),r=a("SJI6");a.n(r);e.a={name:"batchOrder",data:function(){return{isPosting:!0,uploadFileName:"",oldFileName:"",filePostfix:"",uploadUrls:"",uploadSuccessObj:{isSuccess:!1,data:""},cantCreatTask:!0,isCanPostCreat:!1,postCompant:"1",postShop:"",shopListArr:[],postAddress:"",postAddressArr:[],postOrderType:"1",inputArr:[{thirdOrder:"",reciverName:"",address:"",telephone:""}],handObj:{minWeight:"",maxWeight:""}}},computed:o()({uploadParams:function(t){return this.oldFileName?{oldFileName:this.oldFileName,shopType:this.postShop.shopType}:{oldFileName:"",shopType:this.postShop.shopType}},headers:function(){return{accesstoken:this.userToken,userAccountId:this.userInfo.sellerAccountId}},canUpload:function(){return""===this.postCompant||""===this.postShop||""===this.postAddress}},Object(r.mapGetters)(["userInfo","userToken"])),methods:{add:function(){this.inputArr.push({thirdOrder:"",reciverName:"",address:"",telephone:""})},dele:function(t){this.inputArr.splice(t,1)},downModel:function(){window.open("../../../static/上传模板.zip")},uploadUrl:function(){var t="",e=/(\.csv)$/g,a=/(\.xlsx)$/g,s=/(\.xls)$/g;return e.test(this.uploadFileName)?t="/api/task/uploadFile":(a.test(this.uploadFileName)||s.test(this.uploadFileName))&&(t="/api/task/uploadFile/excel"),t},getFileName:function(t){var e=this;this.uploadSuccessObj.uploadFileName&&(this.oldFileName=this.uploadSuccessObj.uploadFileName),/(\.csv)$/g.test(t.name)?this.uploadUrls="/api/task/uploadFile":(/(\.xlsx)$/g.test(t.name)||/(\.xls)$/g.test(t.name))&&(this.uploadUrls="/api/task/uploadFile/excel");var a=new FormData;return a.append("file",t),this.oldFileName?a.append("oldFileName",this.oldFileName):a.append("oldFileName",""),a.append("shopType",this.postShop.shopType),this.$message({message:"文件上传中, 请稍等!!!",type:"warning"}),this.$ajax.post(this.uploadUrls,a).then(function(a){"200"===a.data.code?e.uploadSuccess(a.data,t):"1001"===a.data.code?e.$message({message:"数据缺失,请检查上传文件是否匹配店铺类型",type:"warning"}):e.$message({message:a.data.message,type:"warning"})}).catch(function(t){}),!1},randNum:function(t,e){return(Math.random()*(e-t+1)+t).toFixed(2)},testCanCreatTask:function(){1===parseInt(this.postOrderType)&&this.uploadSuccessObj.totalNum!==this.uploadSuccessObj.realNum?this.cantCreatTask=!0:this.cantCreatTask=!1},uploadSuccess:function(t,e,a){if("200"===t.code){var s=[],i=!0,o=!1,r=void 0;try{for(var p,l=n()(t.data.productNames);!(i=(p=l.next()).done);i=!0){var d=p.value;s.push({productName:d,minWeight:"",maxWeight:""})}}catch(t){o=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(o)throw r}}this.uploadSuccessObj.data=s,this.uploadSuccessObj.totalNum=t.data.totalNum,this.uploadSuccessObj.realNum=t.data.realNum,this.uploadSuccessObj.uploadFileName=t.data.uploadFileName,this.uploadSuccessObj.isSuccess=!0,this.filePostfix=t.data.filePostfix||"",this.testCanCreatTask(),this.$message({message:"上传完成!",type:"success"})}else this.$message({message:t.message,type:"warning"})},remberHistory:function(t,e){},downFail:function(){window.open("/api/task/downloadErrorOrderIds?fileName="+this.uploadSuccessObj.uploadFileName+"&shopType="+this.postShop.shopType+"&filePostfix="+this.filePostfix)},testAddress:function(t,e){1===parseInt(this.postShop.shopType)||2===parseInt(this.postShop.shopType)||3===parseInt(this.postShop.shopType)||parseInt(this.postShop.shopType)},sureToBuildTask:function(){var t=this;if(""===this.postShop||""===this.postAddress)this.$message({message:"请选择店铺相关信息!",type:"warning"});else if(1===parseInt(this.postOrderType)){var e=!0,a=!0,s=!1,i=void 0;try{for(var o,r=n()(this.uploadSuccessObj.data);!(a=(o=r.next()).done);a=!0){var p=o.value;for(var l in p){if("minWeight"===l&&""===p[l]||"maxWeight"===l&&""===p[l])return e=!1,this.$message({message:"请填写完整重量",type:"warning"}),!1;if(!(p.minWeight-0>=.05&&p.minWeight-0<=40&&p.maxWeight-0>=.05&&p.maxWeight-0<=40))return e=!1,this.$message({message:"重量请填写在0.05KG-40KG之间的范围",type:"warning"}),!1;if(p.minWeight-0>p.maxWeight-0)return e=!1,this.$message({message:"最小重量不能大于最大重量",type:"warning"}),!1;e=!0}}}catch(t){s=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(s)throw i}}if(e){this.isPosting=!1;var d="";d="xlsx"===this.filePostfix||"xls"===this.filePostfix?"/api/task/parseFile/excel":"/api/task/parseFile",this.$ajax.post(d,{uploadFileName:this.uploadSuccessObj.uploadFileName,shopType:this.postShop.shopType,logisticsType:this.postCompant,sellerShipAddressId:this.postAddress.shipAddressId,sellerAccountId:this.postAddress.sellerAccountId,sellerShopId:this.postShop.sellerShopId,shopName:this.postShop.shopName,realNum:this.uploadSuccessObj.realNum,totalNum:this.uploadSuccessObj.totalNum,productNames:this.uploadSuccessObj.data,filePostfix:this.filePostfix}).then(function(e){"200"===e.data.code?t.$router.push({name:"pay",query:{sellerTaskId:e.data.data.sellerTaskId}}):t.$message({message:e.data.message,type:"warning"})}).catch(function(){t.$message.error("生意太火爆了, 请稍后再试！")})}}else if(2===parseInt(this.postOrderType)){var c=[],u=!0,g=!1,A=void 0;try{for(var h,f=n()(this.inputArr);!(u=(h=f.next()).done);u=!0){var m=h.value;for(var b in m){if(""===m[b])return this.$message({message:"请完善订单信息!",type:"warning"}),this.isCanPostCreat=!1,!1;if("address"===b&&!/(^(([\u4e00-\u9fa5]+)([\s]+)){3}([\u4e00-\u9fa5]+))/g.test(m[b]))return this.$message({message:"地址格式有误!",type:"warning"}),this.isCanPostCreat=!1,!1;if("telephone"===b&&!/^\d{6,13}$/g.test(m[b]))return this.$message({message:"手机号码格式有误!",type:"warning"}),this.isCanPostCreat=!1,!1;this.isCanPostCreat=!0}c.push(m.thirdOrder)}}catch(t){g=!0,A=t}finally{try{!u&&f.return&&f.return()}finally{if(g)throw A}}""===this.handObj.minWeight||""===this.handObj.maxWeight?(this.$message({message:"请填写重量范围",type:"warning"}),this.isCanPostCreat=!1):this.handObj.minWeight-0>this.handObj.maxWeight-0?(this.$message({message:"最小重量不能大于最大重量",type:"warning"}),this.isCanPostCreat=!1):this.handObj.minWeight-0>=.05&&this.handObj.minWeight-0<=40&&this.handObj.maxWeight-0>=.05&&this.handObj.maxWeight-0<=40?this.isCanPostCreat=!0:(this.$message({message:"重量请填写在0.05KG-40KG之间的范围",type:"warning"}),this.isCanPostCreat=!1),this.isCanPostCreat&&(this.isPosting=!1,this.$ajax.post("/api/task/checkDuplicateThirdOrderId",{thirdOrderIds:c}).then(function(e){"200"===e.data.code?0===e.data.data.length?t.creatTaskByHandPost():0!==e.data.data.length&&(t.isPosting=!0,t.$message({dangerouslyUseHTMLString:!0,duration:1e4,type:"warning",showClose:!0,message:'<p style="font-size:16px;color:#ff3341;margin-bottom: 10px;">订单号重复,请修改该订单!</p>'+e.data.data.join(",<br />")})):t.$message({message:e.data.message,type:"warning"})}).catch(function(){t.$message.error("生意太火爆了, 请稍后再试！！")}))}},creatTaskByHandPost:function(){var t=this;this.$ajax.post("/api/task/createTaskByHand",{shopType:this.postShop.shopType,logisticsType:this.postCompant,sellerShipAddressId:this.postAddress.shipAddressId,sellerAccountId:this.postAddress.sellerAccountId,sellerShopId:this.postShop.sellerShopId,shopName:this.postShop.shopName,minWeight:this.handObj.minWeight,maxWeight:this.handObj.maxWeight,orders:this.inputArr}).then(function(e){"200"===e.data.code?t.$router.push({name:"pay",query:{sellerTaskId:e.data.data.sellerTaskId}}):(t.$message({message:e.data.message,type:"warning"}),t.isPosting=!0)}).catch(function(){t.$message.error("生意太火爆了, 请稍后再试！！")})},getShopList:function(){var t=this;this.$ajax.post("/api/seller/shopAddress/getShopShortList",{sellerAccountId:this.userInfo.sellerAccountId}).then(function(e){"200"===e.data.code?t.shopListArr=e.data.data:t.$message({message:e.data.message,type:"warning"})}).catch(function(){t.$message.error("生意太火爆了, 请稍后再试！！")})},getPostAddress:function(t){var e=this;this.$ajax.post("/api/seller/shopAddress/getAddressListByShopId",{shopId:t.sellerShopId}).then(function(t){if("200"===t.data.code){var a=t.data.data.list;e.postAddressArr=a,e.postAddress=a[0]}else e.$message({message:t.data.message,type:"warning"})}).catch(function(){e.$message.error("生意太火爆了, 请稍后再试！！")})}},mounted:function(){this.getShopList()}}},fxRn:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("g8Ux")},g8Ux:function(t,e,a){var s=a("77Pl"),n=a("3fs2");t.exports=a("FeBl").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},"j/7s":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapBg"},[a("div",{staticClass:"bg"},[a("div",{staticClass:"title"},[a("h2",[t._v("批量发货")]),t._v(" "),a("p",[t._v("收费标准:"+t._s(t.userInfo.price)+"元/单")])]),t._v(" "),a("ul",[a("li",[a("span",[t._v("快递公司")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postCompant,callback:function(e){t.postCompant=e},expression:"postCompant"}},[a("el-option",{attrs:{label:"圆通",value:"1"}})],1)],1),t._v(" "),a("li",[a("span",[t._v("发货店铺")]),t._v(" "),a("el-select",{attrs:{"value-key":"sellerShopId",placeholder:"请选择"},on:{change:t.getPostAddress},model:{value:t.postShop,callback:function(e){t.postShop=e},expression:"postShop"}},t._l(t.shopListArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.shopTypeName+"-"+t.shopName,value:t}})}))],1),t._v(" "),a("li",[a("span",[t._v("发货地址")]),t._v(" "),a("el-select",{attrs:{"value-key":"id",placeholder:"请选择"},model:{value:t.postAddress,callback:function(e){t.postAddress=e},expression:"postAddress"}},t._l(t.postAddressArr,function(t,e){return a("el-option",{key:e,attrs:{label:(t.senderName||"--")+" "+(t.senderPhone||"--")+" "+(t.province||"")+(t.city||"")+(t.region||"")+(t.address||""),value:t}})}))],1),t._v(" "),a("li",{staticClass:"radio"},[a("el-radio",{attrs:{label:"1"},on:{change:t.testCanCreatTask},model:{value:t.postOrderType,callback:function(e){t.postOrderType=e},expression:"postOrderType"}},[t._v("批量下单(表格)")]),t._v(" "),a("el-radio",{attrs:{label:"2"},on:{change:t.testCanCreatTask},model:{value:t.postOrderType,callback:function(e){t.postOrderType=e},expression:"postOrderType"}},[t._v("手工单条下单")])],1),t._v(" "),1==t.postOrderType?a("li",{staticClass:"text"},[a("em",[t._v("上传订单信息")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("2、支持自定义模板上传数据：\n          "),a("i",{staticStyle:{cursor:"pointer"},on:{click:t.downModel}},[t._v("下载模板")])]),t._v(" "),a("p",[t._v("3、单次上次最多上传500条记录")]),t._v(" "),a("el-upload",{attrs:{accept:[".xlsx",".xls"],"before-upload":t.getFileName,"on-success":t.uploadSuccess,"show-file-list":!1,action:"",data:t.uploadParams,headers:t.headers}},[t.uploadSuccessObj.isSuccess?t._e():a("button",{staticClass:"btn",class:{disabled:t.canUpload},attrs:{disabled:t.canUpload}},[t._v("上传文件")]),t._v(" "),t.uploadSuccessObj.isSuccess?a("button",{staticClass:"btn",class:{disabled:t.canUpload},staticStyle:{background:"#ededed",color:"#9b9b9b"},attrs:{disabled:t.canUpload}},[t._v("重新上传")]):t._e()]),t._v(" "),t.uploadSuccessObj.isSuccess?a("p",{staticClass:"prompt",class:{short:t.uploadSuccessObj.totalNum==t.uploadSuccessObj.realNum}},[t._v("\n          总共\n          "),a("span",{staticClass:"red"},[t._v(t._s(t.uploadSuccessObj.totalNum))]),t._v("条订单， 上传成功\n          "),a("span",{staticClass:"red"},[t._v(t._s(t.uploadSuccessObj.realNum))]),t._v("条， 上传失败\n          "),a("span",{staticClass:"red"},[t._v(t._s(t.uploadSuccessObj.totalNum-t.uploadSuccessObj.realNum))]),t._v("条, 共\n          "),a("span",{staticClass:"red"},[t._v(t._s(t.uploadSuccessObj.data?t.uploadSuccessObj.data.length:0))]),t._v("条SKU\n        ")]):t._e(),t._v(" "),t.uploadSuccessObj.totalNum!=t.uploadSuccessObj.realNum?a("button",{staticClass:"btn",staticStyle:{"margin-left":"20px"},on:{click:t.downFail}},[t._v("下载失败列表")]):t._e()],1):t._e(),t._v(" "),2==t.postOrderType?a("li",{staticClass:"hand"},[a("strong",{staticStyle:{display:"inline-block",width:"100px"}},[t._v("收件地址")]),t._v(" "),t._m(1),t._v(" "),t._l(t.inputArr,function(e,s){return a("p",{key:s,staticClass:"info"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdOrder,expression:"item.thirdOrder"}],attrs:{type:"text",placeholder:"订单编号"},domProps:{value:e.thirdOrder},on:{input:function(a){a.target.composing||t.$set(e,"thirdOrder",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.reciverName,expression:"item.reciverName"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.reciverName},on:{input:function(a){a.target.composing||t.$set(e,"reciverName",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"item.telephone"}],attrs:{type:"number",placeholder:"手机号"},domProps:{value:e.telephone},on:{input:function(a){a.target.composing||t.$set(e,"telephone",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"item.address"}],staticClass:"first",attrs:{type:"text",placeholder:"地址"},domProps:{value:e.address},on:{input:function(a){a.target.composing||t.$set(e,"address",a.target.value)}}}),t._v(" "),a("span",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer"},on:{click:function(e){t.dele(s)}}},[t._v("删除")])])}),t._v(" "),a("p",{staticClass:"go",on:{click:t.add}},[t._v("+继续添加")])],2):t._e(),t._v(" "),2==t.postOrderType?a("li",{staticClass:"handText"},[a("p",{staticClass:"kg"},[t._v("\n          物品重量\n          "),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number",placeholder:"请输入内容"},on:{blur:function(e){t.remberHistory(1,t.handObj.minWeight)}},model:{value:t.handObj.minWeight,callback:function(e){t.$set(t.handObj,"minWeight",e)},expression:"handObj.minWeight"}}),t._v("  kg  -   \n          "),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number",placeholder:"请输入内容"},on:{blur:function(e){t.remberHistory(2,t.handObj.maxWeight)}},model:{value:t.handObj.maxWeight,callback:function(e){t.$set(t.handObj,"maxWeight",e)},expression:"handObj.maxWeight"}}),t._v("  kg\n        ")],1),t._v(" "),a("p",{staticClass:"text"},[t._v("系统自动会给每个订单在您设置范围内随机生成一个重量，如需固定重要，则填写一致即可")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),1==t.postOrderType?a("li",{staticClass:"weight"},[a("p",[t._v("1、包裹重量随机生成，范围在最小和最大重量之间，如果不需要随机把最大和最小重量值设置成一样即可")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),t.uploadSuccessObj.isSuccess&&1==t.postOrderType?a("li",{staticClass:"forList"},t._l(t.uploadSuccessObj.data,function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.cantCreatTask,expression:"!cantCreatTask"}],key:s},[a("p",{staticStyle:{margin:"10px 0","font-weight":"bolder","font-size":"16px"}},[t._v(t._s(s+1)+".商品名称:\n            "),a("span",{staticStyle:{color:"rgb(13,188,121)"}},[t._v(t._s(e.productName))])]),t._v(" "),a("p",{staticStyle:{"margin-bottom":"40px","font-size":"14px"}},[t._v("\n            物品重量\n            "),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.minWeight,callback:function(a){t.$set(e,"minWeight",a)},expression:"item.minWeight"}}),t._v("  kg  -   \n            "),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.maxWeight,callback:function(a){t.$set(e,"maxWeight",a)},expression:"item.maxWeight"}}),t._v("  kg\n          ")],1)])})):t._e(),t._v(" "),a("li",{staticClass:"creatTask"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.isPosting,expression:"isPosting"}],staticClass:"btn",class:{disabled:t.cantCreatTask},attrs:{disabled:t.cantCreatTask},on:{click:t.sureToBuildTask}},[t._v("创建任务")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isPosting,expression:"!isPosting"}],staticClass:"btn"},[a("i",{staticClass:"el-icon-loading"})])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("1、支持淘宝、京东、天猫、拼多多导出的订单直接上传，点击\n          "),a("i",[t._v("查看帮助")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"font-size":"12px",color:"#ff3341","padding-bottom":"10px",display:"inline-block"}},[t._v("地址示例：浙江省 杭州市 萧山区 东三路海神苑K幢678（必须包含省市区信息，省市区一定要以\n          "),a("em",{staticStyle:{"font-weight":"bolder","font-size":"16px"}},[t._v("空格隔开")]),t._v("）")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text"},[t._v("最小重量不能低于\n          "),a("em",[t._v("0.05KG")]),t._v("最大重量不能高于\n          "),a("em",[t._v("40KG")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("2、最小重量不能低于\n          "),a("em",[t._v("0.05KG")]),t._v("最大重量不能高于\n          "),a("em",[t._v("40KG")])])}],i={render:s,staticRenderFns:n};e.a=i},woOf:function(t,e,a){t.exports={default:a("V3tA"),__esModule:!0}},zvfR:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".wrapBg[data-v-64f4053b]{padding:20px}.wrapBg .link[data-v-64f4053b]{color:#1c95ff;cursor:pointer}.wrapBg .disabled[data-v-64f4053b]{cursor:not-allowed}.wrapBg .bg[data-v-64f4053b]{background:#fff;padding:20px}.wrapBg .bg .title[data-v-64f4053b]{font-size:16px;color:#444;border-bottom:1px solid #e5e5e5;padding-bottom:18px}.wrapBg .bg .title p[data-v-64f4053b]{float:right;color:#ff2933;font-size:14px}.wrapBg .bg ul[data-v-64f4053b]{margin-top:40px}.wrapBg .bg ul li[data-v-64f4053b]{margin-bottom:24px;font-size:14px;color:#9b9b9b}.wrapBg .bg ul li span[data-v-64f4053b]{margin-right:40px}.wrapBg .bg ul .radio[data-v-64f4053b]{margin-left:99px}.wrapBg .bg ul .text[data-v-64f4053b]{color:#3c3c3c}.wrapBg .bg ul .text em[data-v-64f4053b]{color:#9b9b9b;margin-right:13px}.wrapBg .bg ul .text i[data-v-64f4053b]{color:#1c95ff}.wrapBg .bg ul .text .btn[data-v-64f4053b],.wrapBg .bg ul .text p[data-v-64f4053b]{margin-top:12px;margin-left:101px}.wrapBg .bg ul .text .prompt[data-v-64f4053b]{height:32px;padding:0 10px;display:inline-block;border-radius:15px;background:#222039;color:#fff;line-height:32px;padding-left:10px;position:relative}.wrapBg .bg ul .text .prompt .red[data-v-64f4053b]{margin-right:0;font-size:20px;font-weight:700;color:#ff3341}.wrapBg .bg ul .text .prompt .fontIcon[data-v-64f4053b]{font-size:20px;color:#fff}.wrapBg .bg ul .weight[data-v-64f4053b]{color:#444;font-size:12px;margin-left:99px}.wrapBg .bg ul .weight p[data-v-64f4053b]{margin-top:10px}.wrapBg .bg ul .forList[data-v-64f4053b]{color:#444;font-size:14px;margin-left:99px}.wrapBg .bg ul .forList .kg[data-v-64f4053b]{margin-top:12px;font-size:12px}.wrapBg .bg ul .forList .kg input[data-v-64f4053b]{width:76px;height:30px;border:1px solid #dedede;outline:none}.wrapBg .bg ul .creatTask[data-v-64f4053b]{text-align:center}.wrapBg .bg ul .hand p input[data-v-64f4053b]{width:140px;height:36px;border:1px solid #dedede;outline:none;margin-left:10px;margin-bottom:6px;border-radius:2px;padding-left:5px}.wrapBg .bg ul .hand p .first[data-v-64f4053b]{width:305px}.wrapBg .bg ul .hand .info[data-v-64f4053b]{margin-left:88px}.wrapBg .bg ul .hand .go[data-v-64f4053b]{margin-left:900px;margin-top:10px;font-size:12px;color:#198aff;cursor:pointer}.wrapBg .bg ul .handText[data-v-64f4053b]{margin-left:99px}.wrapBg .bg ul .handText input[data-v-64f4053b]{width:76px;height:36px;border:1px solid #dedede;outline:none;margin-left:10px;border-radius:4px;padding-left:5px}.wrapBg .bg ul .handText .text[data-v-64f4053b]{font-size:12px;color:#999;margin-top:8px}","",{version:3,sources:["C:/Users/Administrator/Desktop/delivery-seller/src/components/order/batchOrder.vue"],names:[],mappings:"AACA,yBACE,YAAc,CACf,AACD,+BACE,cAAe,AACf,cAAgB,CACjB,AACD,mCACE,kBAAoB,CACrB,AACD,6BACE,gBAAiB,AACjB,YAAc,CACf,AACD,oCACE,eAAgB,AAChB,WAAY,AACZ,gCAAiC,AACjC,mBAAqB,CACtB,AACD,sCACE,YAAa,AACb,cAAe,AACf,cAAgB,CACjB,AACD,gCACE,eAAiB,CAClB,AACD,mCACE,mBAAoB,AACpB,eAAgB,AAChB,aAAe,CAChB,AACD,wCACE,iBAAmB,CACpB,AACD,uCACE,gBAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,yCACE,cAAe,AACf,iBAAmB,CACpB,AACD,wCACE,aAAe,CAChB,AACD,mFAEE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,8CACE,YAAa,AACb,eAAgB,AAChB,qBAAsB,AACtB,mBAAoB,AACpB,mBAAoB,AACpB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,mDACE,eAAgB,AAChB,eAAgB,AAChB,gBAAkB,AAClB,aAAe,CAChB,AACD,wDACE,eAAgB,AAChB,UAAY,CACb,AACD,wCACE,WAAY,AACZ,eAAgB,AAChB,gBAAkB,CACnB,AACD,0CACE,eAAiB,CAClB,AACD,yCACE,WAAY,AACZ,eAAgB,AAChB,gBAAkB,CACnB,AACD,6CACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,mDACE,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,YAAc,CACf,AACD,2CACE,iBAAmB,CACpB,AACD,8CACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,aAAc,AACd,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,+CACE,WAAa,CACd,AACD,4CACE,gBAAkB,CACnB,AACD,0CACE,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,cAAgB,CACjB,AACD,0CACE,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,aAAc,AACd,iBAAkB,AAClB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,gDACE,eAAgB,AAChB,WAAY,AACZ,cAAgB,CACjB",file:"batchOrder.vue",sourcesContent:["\n.wrapBg[data-v-64f4053b] {\n  padding: 20px;\n}\n.wrapBg .link[data-v-64f4053b] {\n  color: #1c95ff;\n  cursor: pointer;\n}\n.wrapBg .disabled[data-v-64f4053b] {\n  cursor: not-allowed;\n}\n.wrapBg .bg[data-v-64f4053b] {\n  background: #fff;\n  padding: 20px;\n}\n.wrapBg .bg .title[data-v-64f4053b] {\n  font-size: 16px;\n  color: #444;\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 18px;\n}\n.wrapBg .bg .title p[data-v-64f4053b] {\n  float: right;\n  color: #ff2933;\n  font-size: 14px;\n}\n.wrapBg .bg ul[data-v-64f4053b] {\n  margin-top: 40px;\n}\n.wrapBg .bg ul li[data-v-64f4053b] {\n  margin-bottom: 24px;\n  font-size: 14px;\n  color: #9b9b9b;\n}\n.wrapBg .bg ul li span[data-v-64f4053b] {\n  margin-right: 40px;\n}\n.wrapBg .bg ul .radio[data-v-64f4053b] {\n  margin-left: 99px;\n}\n.wrapBg .bg ul .text[data-v-64f4053b] {\n  color: #3c3c3c;\n}\n.wrapBg .bg ul .text em[data-v-64f4053b] {\n  color: #9b9b9b;\n  margin-right: 13px;\n}\n.wrapBg .bg ul .text i[data-v-64f4053b] {\n  color: #1c95ff;\n}\n.wrapBg .bg ul .text p[data-v-64f4053b],\n.wrapBg .bg ul .text .btn[data-v-64f4053b] {\n  margin-top: 12px;\n  margin-left: 101px;\n}\n.wrapBg .bg ul .text .prompt[data-v-64f4053b] {\n  height: 32px;\n  padding: 0 10px;\n  display: inline-block;\n  border-radius: 15px;\n  background: #222039;\n  color: #fff;\n  line-height: 32px;\n  padding-left: 10px;\n  position: relative;\n}\n.wrapBg .bg ul .text .prompt .red[data-v-64f4053b] {\n  margin-right: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #ff3341;\n}\n.wrapBg .bg ul .text .prompt .fontIcon[data-v-64f4053b] {\n  font-size: 20px;\n  color: #fff;\n}\n.wrapBg .bg ul .weight[data-v-64f4053b] {\n  color: #444;\n  font-size: 12px;\n  margin-left: 99px;\n}\n.wrapBg .bg ul .weight p[data-v-64f4053b] {\n  margin-top: 10px;\n}\n.wrapBg .bg ul .forList[data-v-64f4053b] {\n  color: #444;\n  font-size: 14px;\n  margin-left: 99px;\n}\n.wrapBg .bg ul .forList .kg[data-v-64f4053b] {\n  margin-top: 12px;\n  font-size: 12px;\n}\n.wrapBg .bg ul .forList .kg input[data-v-64f4053b] {\n  width: 76px;\n  height: 30px;\n  border: 1px solid #dedede;\n  outline: none;\n}\n.wrapBg .bg ul .creatTask[data-v-64f4053b] {\n  text-align: center;\n}\n.wrapBg .bg ul .hand p input[data-v-64f4053b] {\n  width: 140px;\n  height: 36px;\n  border: 1px solid #dedede;\n  outline: none;\n  margin-left: 10px;\n  margin-bottom: 6px;\n  border-radius: 2px;\n  padding-left: 5px;\n}\n.wrapBg .bg ul .hand p .first[data-v-64f4053b] {\n  width: 305px;\n}\n.wrapBg .bg ul .hand .info[data-v-64f4053b] {\n  margin-left: 88px;\n}\n.wrapBg .bg ul .hand .go[data-v-64f4053b] {\n  margin-left: 900px;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #198aff;\n  cursor: pointer;\n}\n.wrapBg .bg ul .handText[data-v-64f4053b] {\n  margin-left: 99px;\n}\n.wrapBg .bg ul .handText input[data-v-64f4053b] {\n  width: 76px;\n  height: 36px;\n  border: 1px solid #dedede;\n  outline: none;\n  margin-left: 10px;\n  border-radius: 4px;\n  padding-left: 5px;\n}\n.wrapBg .bg ul .handText .text[data-v-64f4053b] {\n  font-size: 12px;\n  color: #999;\n  margin-top: 8px;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=14.34160553d958a31168e9.js.map