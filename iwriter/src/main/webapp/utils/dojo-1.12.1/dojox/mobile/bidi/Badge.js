//>>built
define("dojox/mobile/bidi/Badge",["dojo/_base/declare","./common"],function(c,b){return c(null,{textDir:"",setValue:function(a){this.domNode.firstChild.innerHTML=b.enforceTextDirWithUcc(a,this.textDir)},setTextDir:function(a){this.textDir!==a&&(this.textDir=a,this.domNode.firstChild.innerHTML=b.enforceTextDirWithUcc(b.removeUCCFromText(this.domNode.firstChild.innerHTML),this.textDir))}})});
//# sourceMappingURL=Badge.js.map