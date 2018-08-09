var glass=function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e){var i,r,n,s=[].indexOf;e.filter=function(t,e){var i,r,n;for(r in i={},t)n=t[r],s.call(e,r)>=0&&(i[r]=n);return i},e.round=function(t,e){var i;return i=Math.pow(10,e),Math.round(t*i)/i},e.merge=i=function(t,e){var n,s;for(s in n=r(t,e))"object"==typeof n[s]&&null!=t[s]&&null!=e[s]&&(n[s]=i(t[s],e[s]));return n},r=function(...t){if((null!=t?t.length:void 0)>0)return n({},function(e){var i,r,n,s,a,o;for(s=[],i=0,n=t.length;i<n;i++)o=t[i],s.push(function(){var t;for(r in t=[],o)a=o[r],t.push(e[r]=a);return t}());return s})},n=function(t,e){return e(t),t},e.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},e.addClass=function(t,e){t.classList?t.classList.add(e):hasClass(t,e)||(t.className+=" "+e)},e.removeClass=function(t,e){var i;t.classList?t.classList.remove(e):hasClass(t,e)&&(i=new RegExp("(\\s|^)"+e+"(\\s|$)"),t.className=t.className.replace(i," "))}},function(t,e,i){var r,n,s;({merge:n}=i(0)),e.settings=function(t,e){var i,a,o,l,u;if(i=r[t],null!=e.presets)for(a=0,o=(u=e.presets).length;a<o;a++)l=u[a],i=n(i,s[t][l]);return n(i,e)},r={gauge:{title:"Title",width:1e3,height:1e3},quantity:{value:0,scale_factor:1,stepIncrement:.1},scale:{v0:0,v1:100,label:"",unit:"",barWidth:100,cyclic:!1,track:{color:"lightgrey"},tick:{division:2,thickness:5,color:"black"},subtick:{thickness:3,color:"black",division:2},number:{color:"black",division:2}},indicator:{color:"black",decimals:1,invert:!1,out_of_range:!0}},s={scale:{Room_Temperature:{label:"T",unit:"°C",v0:10,v1:30,tick:{v0:10,v1:30,divisions:4},subtick:{v0:10,v1:30,divisions:20},number:{v0:10,v1:30,divisions:2}},Clock:{type:"circle",cyclic:!0,v0:0,v1:12,tick:{v0:0,v1:12,divisions:12},subtick:{v0:0,v1:12,divisions:60},track:{color:"none"}},Ticks_Left:{tick:{offset1:-60,offset2:-100},subtick:{offset1:-60,offset2:-70},number:{offset:-180}},Ticks_Right:{tick:{offset1:60,offset2:100},subtick:{offset1:60,offset2:70},number:{offset:180}}}}},function(t,e,i){var r,n,s,a;({merge:a,addClass:s}=i(0)),e.SVG=n=function(){var t,e;class i{constructor(t,e){this.id=t,this.node=e}static add_svg(t,r){var n,s,a,o;return o=document.getElementById(t),a=document.createElementNS(e,"svg"),(n=o.appendChild(a)).setAttribute("viewBox",r.join(" ")),n.setAttribute("id",t),(s=new i(t,n)).defs=s.add_defs(),s}add_element(t,e,r){var n;if(n=this.new_tag(t,e,r),null!=t?t.length:void 0)return new i(t,n)}new_tag(t,i,r){var n,s,a;for(n in s=document.createElementNS(e,i),(null!=t?t.length:void 0)&&s.setAttribute("id",t),r)a=r[n],s.setAttribute(n,a);return this.node.appendChild(s)}add_text(t,e,i){var r;return(r=this.add_element(t,"text",i)).node.textContent=e,r}add_path(t,e,i){var n,s;return s=this.new_tag(t,"path",i),(n=new r(t,s)).node.setAttribute("d",e),n.node.setAttribute("pathLength",1),n.node.setAttribute("fill","none"),n.shape=e,n}add_group(t,e={}){return this.add_element(t,"g",e)}derive_path(t,e,i){return this.add_path(t,e.shape,i)}new_path(t,e,i){var n;return n=this.add_path(t,r[e.type](e),i),r.store[t]=n,n}add_polygon(t,e){return this.add_element(t,"polygon",e)}add_defs(){return this.add_element("defs","defs",{})}add_marker(t,e){return this.add_element(t,"marker",e)}follow_path(t){return this.add_element("motion"+this.id,"animateMotion",{begin:"indefinite",rotate:"auto",dur:"5s",keyTimes:"0;1",keyPoints:"0;0",calcMode:"linear",fill:"freeze",path:t.shape})}update(t){var e,i,r;for(e in i=[],t)r=t[e],i.push(this.node.setAttribute(e,r));return i}draw_tick(t){var e,i;return e=t.path.offset(t.x,t.offset1),i=t.path.offset(t.x,t.offset2),this.add_element("","line",{x1:e.x,y1:e.y,x2:i.x,y2:i.y,stroke:t.color,"stroke-width":t.thickness})}beginElement(){return this.node.beginElement()}setText(t){return this.node.textContent=t}setAttr(t,e){return this.node.setAttribute(t,e)}make_draggable(t,e){return this.node.classList.add("draggable"),this.node.dataset.quantity=e,this.node.dataset.path=t}addClass(t){return s(this.node,t)}removeClass(t){return removeClass(this.node,t)}}return i.store={},e="http://www.w3.org/2000/svg",t=function(t){var e,i,r;for(i in e=[],t)r=t[i],e.push(`${i}='${r}'`);return e.join(" ")},function(e,i,r){return`<${e} ${t(r)}>${i}</${e}>`},i}.call(this),r=function(){var t;return t=function(t,e){var i,r;return i=e.x-t.x,r=e.y-t.y,Math.sqrt(i*i+r*r)},class extends n{project(e,i){var r,n,s,a,o,l,u,c;for(c=e,l=this.position(e),r=t(l,i),s=.01,u=e>.5?-1:1,a=100;s>1e-4&&a>0;){if(a-=1,(c+=u*s)>1){if(!this.cyclic)return 1;c-=1}else if(c<0){if(!this.cyclic)return 0;c+=1}o=this.position(c),r<(n=t(o,i))&&(s/=2,u=-u),r=n}return c}position(t){return this.node.getPointAtLength(t*this.node.getTotalLength())}animate_dash(){return this.add_element("dashani"+this.id,"animate",{attributeName:"stroke-dashoffset",attributeType:"XML",begin:"indefinite",dur:"2s",calcMode:"linear",fill:"freeze"})}static horizontal(t){var e,i,r;return e=.1*t.w,i=.9*t.w,`M ${e} ${r=t.h/2} L ${i} ${r}`}static vertical(t){var e,i;return e=.1*t.h,i=.9*t.h,`M ${t.w/2} ${i} V ${e}`}static circular_arc(t){var e;return e=.6*t.w,`M ${.9*t.w-e} ${.9*t.h} a ${e} ${e} 0 0 1 ${e} ${-e}`}static horseshoe(t){var e;return e=.3*t.w,`M ${.3*t.w} ${.7*t.h} A ${e} ${e} 0 1 1 ${.7*t.w} ${.7*t.h}`}static circle(t){var e,i,r;return e=.3*t.w,`M ${i=.5*t.w} ${r=.2*t.h} `+`A ${e} ${e} 0 1 1 ${.5*t.w} ${.8*t.h} `+`A ${e} ${e} 0 1 1 ${i} ${r} `}offset(t,e){var i,r,n,s,a,o,l,u,c,h,d,f,v,p,g,m;return p=t,r=e,i=Math.acos,f=Math.PI,a=this.node.getTotalLength(),g=p>.01?p-.01:p,m=p<.99?p+.01:p,u=this.node.getPointAtLength(p*a),c=this.node.getPointAtLength(g*a),n=(h=this.node.getPointAtLength(m*a)).x-c.x,s=h.y-c.y,v=Math.sqrt(n*n+s*s),d=s<0?-i(n/v):i(n/v),o=-s/v,l=n/v,{x:u.x+r*o,y:u.y+r*l,phi:180*d/f}}}}.call(this)},function(t,e,i){t.exports=i(4)},function(t,e,i){"use strict";i.r(e);var r,n,s,a,o;i(5);({merge:a}=i(0)),({Scale:n}=i(10)),({SVG:r}=i(2)),({settings:o}=i(1)),({events:s}=i(13)),exports.Gauge=function(){class t{static create(e){var i,r,n;for(r in n=[],e)i=e[r],n.push(new t(r,i));return n}constructor(e,i){this.id=e,t.store[this.id]=this,this.config=o("gauge",i),this.svg=r.add_svg(this.id,[0,0,this.config.width,this.config.height]),s(this,this.svg),this.elements=a(this.draw_elements(),this.create_subelements())}create_subelements(){return{scales:n.create(this.config.scale,this.data())}}draw_elements(){return{title:this.draw_title()}}draw_title(){return this.svg.add_text(this.id,this.config.title,{class:"title","alignment-baseline":"middle","text-anchor":"start","font-size":100,"font-weight":"normal",x:0,y:.1*this.config.height})}data(){return{title:this.config.title,w:this.config.width,h:this.config.height,svg:this.svg}}static setValue(t){var e,i,r;for(e in i=[],t)r=t[e],i.push(this.store[e].setValue(r));return i}setValue(t){var e,i,r,n;for(n in i=[],e=this.elements.scales)r=e[n],i.push(r.setValue(this.data(),t));return i}stepValue(t,e){var i,r,n,s;for(s in r=[],i=this.elements.scales)n=i[s],r.push(n.stepValue(t,e));return r}getRelativeLimited(t){var e,i,r,n;for(n in i=!1,e=this.elements.scales)(r=e[n].getRelativeLimited(t))&&(i=r);return i}getRelative(t){var e,i,r,n;for(n in e=!1,i=this.elements.scales)(r=i[n].getRelative(t))&&(e=r);return e}setRelative(t,e){var i,r,n,s;for(s in r=[],i=this.elements.scales)n=i[s],r.push(n.setRelative(t,e));return r}static show(t){return this.store[t].style.visibility="visible"}static hide(t){return this.store[t].style.visibility="hidden"}}return t.store={},t}.call(void 0)},function(t,e,i){var r=i(6);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(8)(r,n);r.locals&&(t.exports=r.locals)},function(t,e,i){(t.exports=i(7)(!1)).push([t.i,'\n.gauge {\n  padding: 10%;\n}\n\n.gauge svg {\n  max-width: 100%;\n}\n\n/* .gauge path {\n  stroke-width: 75;\n  stroke: #ecf0f1;\n  fill: none;\n} */\n\n.gauge text {\n  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\n\n.draggable {\n  cursor: move;\n}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var n=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[i].concat(s).concat([n]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(r[s]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&r[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},function(t,e,i){var r={},n=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),a=null,o=0,l=[],u=i(9);function c(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=r[n.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(g(n.parts[a],e))}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(g(n.parts[a],e));r[n.id]={id:n.id,refs:1,parts:o}}}}function h(t,e){for(var i=[],r={},n=0;n<t.length;n++){var s=t[n],a=e.base?s[0]+e.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(o):i.push(r[a]={id:a,parts:[o]})}return i}function d(t,e){var i=s(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?i.insertBefore(e,r.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),l.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=s(t.insertInto+" "+t.insertAt.before);i.insertBefore(e,n)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),p(e,t.attrs),d(t,e),e}function p(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function g(t,e){var i,r,n,s;if(e.transform&&t.css){if(!(s=e.transform(t.css)))return function(){};t.css=s}if(e.singleton){var l=o++;i=a||(a=v(e)),r=b.bind(null,i,l,!1),n=b.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",p(e,t.attrs),d(t,e),e}(e),r=function(t,e,i){var r=i.css,n=i.sourceMap,s=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||s)&&(r=u(r));n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}.bind(null,i,e),n=function(){f(i),i.href&&URL.revokeObjectURL(i.href)}):(i=v(e),r=function(t,e){var i=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),n=function(){f(i)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=h(t,e);return c(i,e),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s];(o=r[a.id]).refs--,n.push(o)}t&&c(h(t,e),e);for(s=0;s<n.length;s++){var o;if(0===(o=n[s]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete r[o.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function b(t,e,i,r){var n=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var s=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,r=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(n=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,i){var r,n,s,a,o;({merge:s,filter:n,round:a}=i(0)),({Quantity:r}=i(11)),({settings:o}=i(1)),e.Scale=function(){var t,e;class i{static create(t,e){var r,n,s;for(s in n={},t)r=t[s],n[s]=new i(s,r,e);return n}constructor(t,e,i){this.id=t,this.config=o("scale",e),this.elements=s(this.draw_elements(i),this.create_subelements(i))}create_subelements(t){return{quantities:r.create(this.config.quantity,this.refine(t))}}refine(t){return{barWidth:this.config.barWidth,unit:this.config.unit,v0:this.config.v0,v1:this.config.v1,path:this.path_template,svg:t.svg,w:t.w,h:t.h,cyclic:this.config.cyclic}}draw_elements(t){return{template:this.draw_template(t),ticks:this.draw_ticks(t),track:this.draw_track(t),label:this.draw_label(t),scaling:this.draw_scaling(t),segments:this.draw_segments(t)}}draw_scaling(t){var i,r,n,s,o,l,u,c,h,d,f;for(r=this.config.number,d=[],s=o=0,l=(h=e(r)).length;o<l;s=++o)c=((f=h[s])-this.config.v0)/(this.config.v1-this.config.v0),u=this.path_template.offset(c,r.offset),i=null!=r.rotate?r.rotate:u.phi,n=t.svg.add_group(this.id+"G"+s,{transform:`rotate (${i} ${u.x} ${u.y})`}),d.push(n.add_text(this.id+"S"+s,a(f,1),{class:"scaling","alignment-baseline":"middle","text-anchor":"middle","font-size":100,"font-weight":"normal",x:u.x,y:u.y}));return d}draw_ticks(t){return{main:this.draw_tick_flavor(t,this.config.tick,"tick"),sub:this.draw_tick_flavor(t,this.config.subtick,"subtick")}}draw_tick_flavor(t,i,r){var n,s,a,o,l,u;for(n=t.svg.add_group(r+this.id),s=a=0,o=(u=e(i)).length;a<o;s=++a)l=(u[s]-this.config.v0)/(this.config.v1-this.config.v0),n.draw_tick({x:l,offset1:i.offset1,offset2:i.offset2,thickness:i.thickness,color:i.color,path:this.path_template});return n}draw_template(t){return this.path_template=t.svg.new_path("template"+this.id,s(this.config,t),{class:"template",visibility:"hidden"}),this.path_template.cyclic=this.config.cyclic,this.path_template}draw_track(t){return t.svg.new_path("track"+this.id,s(this.config,t),{class:"track","stroke-width":this.config.barWidth,stroke:this.config.track.color})}draw_segments(e){if(this.config.track.segments)return this.config.track.segments.map((i,r)=>{var n,s,a,o,l;return[a,o,l]=i.split(" "),n=t(this.config,o),s=t(this.config,l),n<0&&(n=0),s>1&&(s=1),e.svg.derive_path(this.id+"segment"+r,this.path_template,{stroke:a,"stroke-width":this.config.barWidth,"stroke-dasharray":`${s-n} ${1+n-s}`,"stroke-dashoffset":-n})})}draw_label(t){return t.svg.add_text(this.id,this.config.label,{class:"label","alignment-baseline":"middle","text-anchor":"start","font-size":100,"font-weight":"normal",x:0,y:.8*t.h})}setValue(t,e){var i,r,n;for(i in r=[],e)n=e[i],r.push(this.elements.quantities[i].setValue(this.refine(t),n));return r}setRelative(t,e){return this.elements.quantities[t].setRelative(this.refine({}),e)}stepValue(t,e){return this.elements.quantities[t].stepValue(this.refine({}),e)}getRelativeLimited(t){return this.elements.quantities[t].limited_value(this.refine({}))}getRelative(t){return this.elements.quantities[t].relative_value(this.refine({}))}}return t=function(t,e){return(e-t.v0)/(t.v1-t.v0)},function(t){var e,i;return`${e=t.thickness} ${(1-e*((i=t.divisions)+1))/i}`},e=function(t){var e;return e=t.divisions,function(){for(var t=[],i=0;0<=e?i<=e:i>=e;0<=e?i++:i--)t.push(i);return t}.apply(this).map(function(i){return t.v0+i/e*(t.v1-t.v0)})},i}.call(this)},function(t,e,i){var r,n,s;({merge:n}=i(0)),({Indicator:r}=i(12)),({settings:s}=i(1)),e.Quantity=class t{static create(e,i){var r,n,s;for(n in s={},e)r=e[n],s[n]=new t(n,r,i);return s}constructor(t,e,i){this.id=t,this.config=s("quantity",e),this.value=this.config.value,this.indicators=r.create(this.config.indicator,this.refine(i))}refine(t){return n(t,{a:this.value,r:this.relative_value(t),rl:this.limited_value(t),qId:this.id})}relative_value(t){var e,i;return e=t.v0*this.config.scale_factor,i=t.v1*this.config.scale_factor,(this.value-e)/(i-e)}limited_value(t){var e;return(e=this.relative_value(t))<0?0:e>1?1:e}setValue(t,e){var i,r,n,s,a;for(this.value=parseFloat(e),a=[],i=0,n=(s=this.indicators).length;i<n;i++)r=s[i],a.push(r.update(this.refine(t)));return a}setRelative(t,e){var i,r;return i=t.v0*this.config.scale_factor,r=t.v1*this.config.scale_factor,this.setValue(t,parseFloat(e)*(r-i)+i)}stepValue(t,e){var i,r,n;return i=Math.round(this.value/this.config.stepIncrement)*this.config.stepIncrement,n=r="up"===e?i+this.config.stepIncrement:i-this.config.stepIncrement,t.cyclic&&(r>t.v1?n=r-(t.v1-t.v0):r<t.v0&&(n=r+(t.v1-t.v0))),this.setValue(t,n)}}},function(t,e,i){var r,n,s,a,o,l,u;({merge:l}=i(0)),({settings:u}=i(1)),e.Indicator=a=class{static create(t,e){var i,a,l;for(l in a=[],t)switch((i=t[l]).type){case"bar":a.push(new r(l,i,e));break;case"digital":a.push(new s(l,i,e));break;case"pointer":a.push(new o(l,i,e));break;case"color":a.push(new n(l,i,e));break;default:console.log(`indicator type '${i.type}' isn't implemented, yet.`)}return a}constructor(t,e){this.id=t,this.config=u("indicator",e)}},r=class extends a{constructor(t,e,i){super(t,e),this.elements=this.draw_elements(i),this.update(i)}update(t){return this.update_bar(t),this.update_out_of_range(t)}draw_elements(t){var e;return e=this.draw_bar(t),console.log("using jquery?"),this.create_marker_defs(t),{bar:e,under:$("svg").find("#underflow"+this.id)[0],over:$("svg").find("#overflow"+this.id)[0]}}create_marker_defs(t){return".5,0 1,.5 .5,1","0,.5 .5,0 .5,1",t.svg.defs.add_marker("markerUnder"+this.id,{orient:"auto",fill:"skyblue",markerWidth:1,markerHeight:1,refX:.75,refY:.5}).add_polygon("underflow"+this.id,{visibility:"hidden",class:"underflow",points:"0,.5 .5,0 .5,1"}),t.svg.defs.add_marker("markerOver"+this.id,{orient:"auto",fill:"tomato",markerWidth:1,markerHeight:1,refX:.25,refY:.5}).add_polygon("overflow"+this.id,{visibility:"hidden",class:"overflow",points:".5,0 1,.5 .5,1"})}draw_bar(t){var e,i;return i=null!=this.config.width?this.config.width:t.barWidth,e=t.svg.derive_path(this.id,t.path,{class:"bar","stroke-width":i,stroke:this.config.color,"stroke-dasharray":1,"marker-start":`url('#markerUnder${this.id}')`,"marker-end":`url('#markerOver${this.id}')`}),this.dash=e.animate_dash(),this.previous_rl=0,e}update_bar(t){var e,i;return e=this.config.invert?this.previous_rl-1.5:1-this.previous_rl,i=this.config.invert?-t.rl:1-t.rl,this.dash.update({dur:.5*Math.abs(t.rl-this.previous_rl)+"s",from:e,to:i}),this.dash.beginElement(),this.previous_rl=t.rl}update_out_of_range(t){var e,i;return i=t.r<0?"visible":"hidden",e=t.r>1?"visible":"hidden",this.elements.under.setAttribute("visibility",i),this.elements.over.setAttribute("visibility",e)}},n=class extends a{draw(t){}update(t){return $("#"+this.config.target)[0].setAttribute(this.config.attribute,`hsl(${200*(1-t.rl)}, 80%, 50%)`)}},o=function(){var t;class e extends a{constructor(t,e,i){super(t,e),this.draw(i)}draw(e){var i,r,n;switch(this.group=e.svg.add_group(this.id),this.config.shape){case"line":[r,n]=this.config.dimension,this.group.add_element("pt"+this.id,"line",{y1:r,y2:n,x1:0,x2:0,stroke:this.config.color,"stroke-width":this.config.thickness});break;case"circle":this.group.add_element(this.id,"circle",{fill:this.config.color,r:this.config.radius});break;default:this.config.shape in t?(i=5,this.poly=this.group.add_polygon(this.id,{points:t[this.config.shape].map(function(t){return i*t}),fill:this.config.color}),this.group.setAttr("transform",`translate(0,${this.config.offset})`),this.config.draggable&&this.poly.make_draggable(e.path.id,e.qId)):console.log("Missing Pointer Shape",this.id,this.config)}return this.motion=this.group.follow_path(e.path),this.previous_rl=0,this.update(e)}update(t){var e;return t.cyclic&&(t.rl-this.previous_rl>.9?t.rl>.999?t.rl=0:this.previous_rl=1:t.rl-this.previous_rl<-.9&&(t.rl<.001?t.rl=1:this.previous_rl=0)),(e=null!=this.config.speed?this.config.speed:.5*Math.abs(t.rl-this.previous_rl))<.01&&(e=.01),this.motion.update({dur:e+"s",keyPoints:this.previous_rl+";"+t.rl}),this.motion.beginElement(),this.previous_rl=t.rl}}return e.prototype.defaults={type:"circle",color:"orange",radius:50,digits:1,digit_dy:-120},t={right:[0,0,5,10,-5,10],left:[0,0,5,-10,-5,-10],needle1:[0,-10,2,0,5,80,0,85,-5,80,-2,0]},e}.call(this),s=class extends a{constructor(t,e,i){super(t,e),this.draw(i)}draw(t){return this.display=t.svg.add_text(this.id,"",{class:"digital","alignment-baseline":"middle","text-anchor":"end","font-size":100,"font-weight":"bold",x:t.w,y:.8*t.h}),this.update(t)}update(t){return this.display.setText(this.number_unit(t))}number_unit(t){return`${t.a.toFixed(this.config.decimals)} ${t.unit}`}}},function(t,e,i){var r,n;({merge:n}=i(0)),({SVG:r}=i(2)),e.events=function(t,e){var i,n,s,a,o,l,u,c,h,d,f;return l=e.node,s=!1,c=!1,u=!1,h=!1,d=function(t){if(t.target.classList.contains("draggable"))return s=t.target,c=s.dataset.quantity,u=r.store[s.dataset.path]},a=function(t){return h=s,s=!1},n=(e=>{var i,r,n;if(s)return e.preventDefault(),r=t.getRelativeLimited(c),i=o(e),n=u.project(r,i),t.setRelative(c,n)}),f=(e=>{if(h)return e.wheelDelta>0?t.stepValue(c,"up"):t.stepValue(c,"down")}),i=(t=>{var e;return t.target.classList.contains("draggable")?(e=(h=t.target).getAttribute("fill"),h.setAttribute("stroke",e),h.setAttribute("stroke-width","10"),h.setAttribute("fill","white"),c=h.dataset.quantity):h=c=!1}),o=(t=>{var e;return e=l.getScreenCTM(),{x:(t.clientX-e.e)/e.a,y:(t.clientY-e.f)/e.d}}),l.addEventListener("mousedown",d),l.addEventListener("mousemove",n),l.addEventListener("mouseup",a),l.addEventListener("mouseleave",a),l.addEventListener("wheel",f,{passive:!0}),l.addEventListener("click",i)}}]);