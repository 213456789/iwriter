//>>built
define("dojox/dtl/tag/logic",["dojo/_base/lang","../_base"],function(m,l){var g=m.getObject("tag.logic",!0,l);g.IfNode=m.extend(function(a,b,d,c){this.bools=a;this.trues=b;this.falses=d;this.type=c},{render:function(a,b){var d,c,e;if("or"==this.type){for(d=0;c=this.bools[d];d++)if(e=c[0],c=c[1],(c=c.resolve(a))&&!e||e&&!c)return this.falses&&(b=this.falses.unrender(a,b)),this.trues?this.trues.render(a,b,this):b;this.trues&&(b=this.trues.unrender(a,b));return this.falses?this.falses.render(a,b,this):
b}for(d=0;c=this.bools[d];d++)if(e=c[0],c=c[1],c=c.resolve(a),c==e)return this.trues&&(b=this.trues.unrender(a,b)),this.falses?this.falses.render(a,b,this):b;this.falses&&(b=this.falses.unrender(a,b));return this.trues?this.trues.render(a,b,this):b},unrender:function(a,b){b=this.trues?this.trues.unrender(a,b):b;return b=this.falses?this.falses.unrender(a,b):b},clone:function(a){var b=this.trues?this.trues.clone(a):null;a=this.falses?this.falses.clone(a):null;return new this.constructor(this.bools,
b,a,this.type)}});g.IfEqualNode=m.extend(function(a,b,d,c,e){this.var1=new l._Filter(a);this.var2=new l._Filter(b);this.trues=d;this.falses=c;this.negate=e},{render:function(a,b){var d=this.var1.resolve(a),c=this.var2.resolve(a),d="undefined"!=typeof d?d:"",c="undefined"!=typeof d?c:"";if(this.negate&&d!=c||!this.negate&&d==c)return this.falses&&(b=this.falses.unrender(a,b,this)),this.trues?this.trues.render(a,b,this):b;this.trues&&(b=this.trues.unrender(a,b,this));return this.falses?this.falses.render(a,
b,this):b},unrender:function(a,b){return g.IfNode.prototype.unrender.call(this,a,b)},clone:function(a){var b=this.trues?this.trues.clone(a):null;a=this.falses?this.falses.clone(a):null;return new this.constructor(this.var1.getExpression(),this.var2.getExpression(),b,a,this.negate)}});g.ForNode=m.extend(function(a,b,d,c){this.assign=a;this.loop=new l._Filter(b);this.reversed=d;this.nodelist=c;this.pool=[]},{render:function(a,b){var d,c,e,h=!1,f=this.assign;for(e=0;e<f.length;e++)if("undefined"!=typeof a[f[e]]){h=
!0;a=a.push();break}!h&&a.forloop&&(h=!0,a=a.push());e=this.loop.resolve(a)||[];var k=[];if(m.isObject(e)&&!m.isArrayLike(e))for(d in e)k.push([d,e[d]]);else k=e;for(d=k.length;d<this.pool.length;d++)this.pool[d].unrender(a,b,this);this.reversed&&(k=k.slice(0).reverse());var g=a.forloop={parentloop:a.get("forloop",{})};for(d=c=0;d<k.length;d++){var l=k[d];g.counter0=c;g.counter=c+1;g.revcounter0=k.length-c-1;g.revcounter=k.length-c;g.first=!c;g.last=c==k.length-1;if(m.isArrayLike(l))if(1<f.length){h||
(h=!0,a=a.push());var n={};for(e=0;e<l.length&&e<f.length;e++)n[f[e]]=l[e];m.mixin(a,n)}else a[f[0]]=l[1];c+1>this.pool.length&&this.pool.push(this.nodelist.clone(b));b=this.pool[c++].render(a,b,this)}delete a.forloop;if(h)a=a.pop();else for(e=0;e<f.length;e++)delete a[f[e]];return b},unrender:function(a,b){for(var d=0,c;c=this.pool[d];d++)b=c.unrender(a,b);return b},clone:function(a){return new this.constructor(this.assign,this.loop.getExpression(),this.reversed,this.nodelist.clone(a))}});m.mixin(g,
{if_:function(a,b){var d,c,e,h=[],f=b.contents.split();f.shift();b=f.join(" ");f=b.split(" and ");if(1==f.length)e="or",f=b.split(" or ");else for(e="and",d=0;d<f.length;d++)if(-1!=f[d].indexOf(" or "))throw Error("'if' tags can't mix 'and' and 'or'");for(d=0;c=f[d];d++){var k=!1;0==c.indexOf("not ")&&(c=c.slice(4),k=!0);h.push([k,new l._Filter(c)])}d=a.parse(["else","endif"]);c=!1;b=a.next_token();"else"==b.contents&&(c=a.parse(["endif"]),a.next_token());return new g.IfNode(h,d,c,e)},_ifequal:function(a,
b,d){var c=b.split_contents();if(3!=c.length)throw Error(c[0]+" takes two arguments");var e="end"+c[0],h=a.parse(["else",e]),f=!1;b=a.next_token();"else"==b.contents&&(f=a.parse([e]),a.next_token());return new g.IfEqualNode(c[1],c[2],h,f,d)},ifequal:function(a,b){return g._ifequal(a,b)},ifnotequal:function(a,b){return g._ifequal(a,b,!0)},for_:function(a,b){var d=b.contents.split();if(4>d.length)throw Error("'for' statements should have at least four words: "+b.contents);var c="reversed"==d[d.length-
1],e=c?-3:-2;if("in"!=d[d.length+e])throw Error("'for' tag received an invalid argument: "+b.contents);for(var h=d.slice(1,e).join(" ").split(/ *, */),f=0;f<h.length;f++)if(!h[f]||-1!=h[f].indexOf(" "))throw Error("'for' tag received an invalid argument: "+b.contents);f=a.parse(["endfor"]);a.next_token();return new g.ForNode(h,d[d.length+e+1],c,f)}});return g});
//# sourceMappingURL=logic.js.map