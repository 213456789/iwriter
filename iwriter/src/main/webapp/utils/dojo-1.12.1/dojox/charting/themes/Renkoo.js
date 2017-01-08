//>>built
define("dojox/charting/themes/Renkoo",["../Theme","dojox/gfx/gradutils","./common"],function(f,g,b){var c=f.generateGradient,d={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:150};b.Renkoo=new f({chart:{fill:"#123666",pageStyle:{backgroundColor:"#123666",backgroundImage:"none",color:"#95afdb"}},plotarea:{fill:"#123666"},axis:{stroke:{color:"#95afdb",width:1},tick:{color:"#95afdb",position:"center",font:"normal normal normal 7pt Lucida Grande, Helvetica, Arial, sans-serif",fontColor:"#95afdb"}},series:{stroke:{width:2.5,
color:"#123666"},outline:null,font:"normal normal normal 8pt Lucida Grande, Helvetica, Arial, sans-serif",fontColor:"#95afdb"},marker:{stroke:{width:2.5,color:"#ccc"},outline:null,font:"normal normal normal 8pt Lucida Grande, Helvetica, Arial, sans-serif",fontColor:"#95afdb"},seriesThemes:[{fill:c(d,"#e7e391","#f8f7de")},{fill:c(d,"#ffb6b6","#ffe8e8")},{fill:c(d,"#bcda7d","#eef7da")},{fill:c(d,"#d5d5d5","#f4f4f4")},{fill:c(d,"#c1e3fd","#e4f3ff")}],markerThemes:[{fill:"#fcfcf3",stroke:{color:"#e7e391"}},
{fill:"#fff1f1",stroke:{color:"#ffb6b6"}},{fill:"#fafdf4",stroke:{color:"#bcda7d"}},{fill:"#fbfbfb",stroke:{color:"#d5d5d5"}},{fill:"#f3faff",stroke:{color:"#c1e3fd"}}]});b.Renkoo.next=function(a,c,d){if(-1=="slice,column,bar".indexOf(a)){var e=this.seriesThemes[this._current%this.seriesThemes.length];e.fill.space="plot";e.stroke={width:2,color:e.fill.colors[0].color};if("line"==a||"area"==a)e.stroke.width=4;var b=f.prototype.next.apply(this,arguments);delete e.stroke;e.fill.space="shape";return b}return f.prototype.next.apply(this,
arguments)};b.Renkoo.post=function(a,b){a=f.prototype.post.apply(this,arguments);"slice"!=b&&"circle"!=b||!a.series.fill||"radial"!=a.series.fill.type||(a.series.fill=g.reverse(a.series.fill));return a};return b.Renkoo});
//# sourceMappingURL=Renkoo.js.map