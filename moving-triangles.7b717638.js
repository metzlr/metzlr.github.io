parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qs9S":[function(require,module,exports) {
"use strict";function e(e,i){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=n(e))||i&&e&&"number"==typeof e.length){t&&(e=t);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,h=!0,o=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return h=e.done,e},e:function(e){o=!0,a=e},f:function(){try{h||null==t.return||t.return()}finally{if(o)throw a}}}}function i(e,i){return a(e)||s(e,i)||n(e,i)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,i){if(e){if("string"==typeof e)return r(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,i):void 0}}function r(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,n=new Array(i);t<i;t++)n[t]=e[t];return n}function s(e,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,s=void 0;try{for(var a,h=e[Symbol.iterator]();!(n=(a=h.next()).done)&&(t.push(a.value),!i||t.length!==i);n=!0);}catch(o){r=!0,s=o}finally{try{n||null==h.return||h.return()}finally{if(r)throw s}}return t}}function a(e){if(Array.isArray(e))return e}function h(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function o(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,i,t){return i&&o(e.prototype,i),t&&o(e,t),e}function c(e,i,t,n){var r=e.x-n.x,s=e.y-n.y,a=i.x-n.x,h=i.y-n.y,o=t.x-n.x,l=t.y-n.y,c=a*a+h*h,g=o*o+l*l;return r*(h*g-c*l)-s*(a*g-c*o)+(r*r+s*s)*(a*l-h*o)<0}function g(e,i,t){return(e.x-t.x)*(i.y-t.y)-(i.x-t.x)*(e.y-t.y)}function f(e,i,t,n){var r=g(e,i,t),s=g(e,t,n),a=g(e,n,i);return!((r<0||s<0||a<0)&&(r>0||s>0||a>0))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d=function(){function e(i,t){h(this,e),this.key=i,this.vertices=t,this.children=[]}return l(e,[{key:"addChild",value:function(e){this.children.push(e)}}]),e}(),v=function(){function e(i,t){h(this,e),this.nodes=new Map,this.nodes.set(i,new d(i,t))}return l(e,[{key:"addNode",value:function(e,i,t){var n=this;if(0==e.length)return!1;var r=void 0;return e.forEach(function(e){var s=n.nodes.get(e);s&&(null==r&&(r=new d(i,t),n.nodes.set(i,r)),s.addChild(r))}),!0}},{key:"getValues",value:function(){return this.nodes.values()}},{key:"size",value:function(){return this.nodes.size}}]),e}(),u=function e(i,t,n){h(this,e),this.pos=i,this.incEdge=t,this.id=n},p=function e(i){var t=i.origin,n=i.twin,r=i.incFace,s=i.next,a=i.prev;h(this,e),this.origin=t,this.twin=n,this.incFace=r,this.next=s,this.prev=a},E=function e(i,t){h(this,e),this.incEdge=i,this.graphKey=t},y=function(){function t(e,i){h(this,t),this.points=e,this.debugCtx=i,this.vertices=[],this.halfEdges=[],this.faces=[];for(var n=[{x:-1e4,y:-1e4},{x:500,y:1e4},{x:1e4,y:-1e4}],r=0;r<3;r++)this.vertices.push(new u(n[r],void 0,this.vertices.length));for(var s=0;s<6;s++)this.halfEdges.push(new p({origin:void 0,twin:void 0,incFace:void 0,next:void 0,prev:void 0}));this.faces.push(new E(this.halfEdges[0],0)),this.triangleGraph=new v(0,n),this.vertices[0].incEdge=this.halfEdges[0],this.vertices[1].incEdge=this.halfEdges[1],this.vertices[2].incEdge=this.halfEdges[2],this.halfEdges[0].origin=this.vertices[0],this.halfEdges[0].twin=this.halfEdges[3],this.halfEdges[0].incFace=this.faces[0],this.halfEdges[0].next=this.halfEdges[1],this.halfEdges[0].prev=this.halfEdges[2],this.halfEdges[1].origin=this.vertices[1],this.halfEdges[1].twin=this.halfEdges[4],this.halfEdges[1].incFace=this.faces[0],this.halfEdges[1].next=this.halfEdges[2],this.halfEdges[1].prev=this.halfEdges[0],this.halfEdges[2].origin=this.vertices[2],this.halfEdges[2].twin=this.halfEdges[5],this.halfEdges[2].incFace=this.faces[0],this.halfEdges[2].next=this.halfEdges[0],this.halfEdges[2].prev=this.halfEdges[1],this.halfEdges[3].origin=this.vertices[1],this.halfEdges[3].twin=this.halfEdges[0],this.halfEdges[3].incFace=null,this.halfEdges[3].next=this.halfEdges[4],this.halfEdges[3].prev=this.halfEdges[5],this.halfEdges[4].origin=this.vertices[2],this.halfEdges[4].twin=this.halfEdges[1],this.halfEdges[4].incFace=null,this.halfEdges[4].next=this.halfEdges[5],this.halfEdges[4].prev=this.halfEdges[3],this.halfEdges[5].origin=this.vertices[0],this.halfEdges[5].twin=this.halfEdges[2],this.halfEdges[5].incFace=null,this.halfEdges[5].next=this.halfEdges[3],this.halfEdges[5].prev=this.halfEdges[4],this.triangulate()}return l(t,[{key:"triangulate",value:function(){for(var e=this,t=function(t){var n=e.points[t],r=e.containingTriangle(n),s=i(e.splitTriangle(n,r),2),a=s[0];s[1].forEach(function(i){e.legalizeEdge(a,i)})},n=0;n<this.points.length;n++)t(n)}},{key:"splitTriangle",value:function(e,i){for(var t=new u(e,void 0,this.vertices.length),n=[],r=0;r<6;r++){var s=r%2==0;n.push(new p({origin:s?t:void 0,twin:void 0,incFace:void 0,next:void 0,prev:void 0}))}for(var a=0;a<3;a++){var h=n[2*a],o=0==a?n[5]:n[2*a-1];h.twin=o,o.twin=h}for(var l=this.getFaceHalfEdges(i),c=[],g=0;g<3;g++){var f=l[g],d=n[2*g+1],v=n[2*g],y=new E(v,this.faces.length+g);d.origin=f.next.origin,f.next=d,f.prev=v,f.incFace=y,d.next=v,d.prev=f,d.incFace=y,v.next=f,v.prev=d,v.incFace=y,c.push(y);var w=[f.origin.id,d.origin.id,v.origin.id];this.triangleGraph.addNode([i.graphKey],y.graphKey,w)||console.error("Error adding face to triangle graph:",y)}return t.incEdge=n[0],this.vertices.push(t),this.halfEdges=this.halfEdges.concat(n),this.faces=this.faces.concat(c),[t,l]}},{key:"legalizeEdge",value:function(e,t){var n=t.incFace,r=t.twin.incFace;if(null!=r){var s=t.twin.prev.origin.pos;if(c(e.pos,t.origin.pos,t.twin.origin.pos,s)){var a=t.twin.prev,h=t.twin.next,o=t.next,l=t.prev;t.next=a,t.prev=o,t.twin.next=l,t.twin.prev=h,t.origin=l.origin,t.twin.origin=a.origin,a.prev=t,a.next=o,o.prev=a,o.next=t,l.prev=t.twin,l.next=h,h.prev=l,h.next=t.twin;var g=[new E(l,this.faces.length),new E(o,this.faces.length+1)];t.twin.incFace=g[0],l.incFace=g[0],h.incFace=g[0],t.incFace=g[1],a.incFace=g[1],o.incFace=g[1];for(var f=0,d=g;f<d.length;f++){var v=d[f],u=i(this.getFaceVertices(v),3),p=u[0],y=u[1],w=u[2];this.triangleGraph.addNode([n.graphKey,r.graphKey],v.graphKey,[p.id,y.id,w.id])||console.error("Error adding face to triangle graph:",v),this.faces.push(v)}this.legalizeEdge(e,a),this.legalizeEdge(e,h)}}}},{key:"containingTriangle",value:function(i){for(var t=this.triangleGraph.nodes.get(0),n=0;t.children.length>0;){var r,s=!1,a=e(t.children);try{for(a.s();!(r=a.n()).done;){var h=r.value,o=[this.vertices[h.vertices[0]].pos,this.vertices[h.vertices[1]].pos,this.vertices[h.vertices[2]].pos];if(f(i,o[0],o[1],o[2])){t=h,s=!0;break}}}catch(l){a.e(l)}finally{a.f()}if(s||console.error("Uh oh. Triangle had children but none matched.",i),++n>1e4){console.error("Infinite loop here");break}}return this.faces[t.key]}},{key:"getFaceHalfEdges",value:function(e){for(var i=[e.incEdge],t=i[0],n=0;t.next.origin!=i[0].origin;)if(i.push(t.next),t=t.next,++n>1e4){console.error("Infinite loop here");break}return i}},{key:"getFaceVertices",value:function(e){for(var i=e.incEdge,t=[i.origin],n=0;i.next.origin!=t[0];)if(i=i.next,t.push(i.origin),++n>1e4)throw new Error("Infinite loop here");return t}},{key:"printFace",value:function(e){var i=this.getFaceHalfEdges(e);console.log("FACE INDEX:",e);for(var t=0;t<i.length;t++)console.log(i[t].origin.pos,"TO",i[t].twin.origin.pos),console.log(i[t])}},{key:"getTriangleData",value:function(){for(var e=[],t=3;t<this.vertices.length;t++)e.push(this.vertices[t].pos);for(var n=[],r=this.triangleGraph.getValues(),s=0;s<this.triangleGraph.size();s++){var a=r.next().value;if(0==a.children.length){var h=i(a.vertices,3),o=h[0],l=h[1],c=h[2];o<3||l<3||c<3||n.push([o-3,l-3,c-3])}}return{vertices:e,triangles:n}}},{key:"debugDraw",value:function(i){var t,n=e(this.faces);try{for(n.s();!(t=n.n()).done;){var r,s=t.value,a=e(this.getFaceHalfEdges(s));try{for(a.s();!(r=a.n()).done;){var h=r.value;i.beginPath();var o=[h.origin.pos.x,h.origin.pos.y],l=[h.twin.origin.pos.x,h.twin.origin.pos.y],c=[-5*i.canvas.width,-5*i.canvas.height],g=[5*i.canvas.width,-5*i.canvas.height],f=[i.canvas.width/2,5*i.canvas.height];"string"==typeof h.origin.pos&&(o="p0"===h.origin.pos?c:"p1"===h.origin.pos?g:f),"string"==typeof h.twin.origin.pos&&(l="p0"===h.twin.origin.pos?c:"p1"===h.twin.origin.pos?g:f),i.moveTo(o[0],o[1]),i.lineTo(l[0],l[1]),i.strokeStyle="green",i.lineWidth=2,i.stroke()}}catch(d){a.e(d)}finally{a.f()}}}catch(d){n.e(d)}finally{n.f()}}}]),t}(),w=y;exports.default=w;
},{}],"ruvf":[function(require,module,exports) {
"use strict";var i=t(require("./delaunay"));function t(i){return i&&i.__esModule?i:{default:i}}function o(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function e(i,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function n(i,t,o){return t&&e(i.prototype,t),o&&e(i,o),i}var a=function(){function i(t){var e=t.id,n=t.color,a=t.radius,r=t.position,h=t.velocity,s=t.staticObject,l=t.visible;o(this,i),this.id=e,this.color=n,this.radius=a,this.position=r,this.velocity=h,this.staticObject=s,this.visible=l}return n(i,[{key:"update",value:function(i){this.staticObject||(this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,(this.position.x-this.radius<0||this.position.x+this.radius>i.width)&&(this.velocity.x*=-1),(this.position.y-this.radius<0||this.position.y+this.radius>i.height)&&(this.velocity.y*=-1))}},{key:"draw",value:function(i){this.visible&&(i.beginPath(),i.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),i.fillStyle=this.color,i.fill())}}]),i}(),r=function(){var t,o,e,n,r,h,s,l=document.getElementById("main-canvas"),c=l.getContext("2d"),y="#B5B0FB66",u=!1,f=1,d={h:244,s:94,l:68},v=[-10,5];function x(){p(l),t={x:Math.floor(l.width/200),y:Math.floor(l.height/200)},o=[.6,.9],e=Math.min(.007*l.width,7),n=[],r=0,h=[],s=void 0,function(){n=[];for(var i=l.width/(t.x+1),h=l.height/(t.y+1),s=0;s<=t.y+1;s++)for(var c=0;c<=t.x+1;c++){var u={x:c*i,y:s*h},f=[1,-1],d=(Math.random()*(o[1]-o[0])+o[0])*f[Math.floor(2*Math.random())],v=(Math.random()*(o[1]-o[0])+o[0])*f[Math.floor(2*Math.random())],x=0===s||0===c||c===t.x+1||s===t.y+1,g=new a({id:r,color:y,radius:e,position:u,velocity:{x:d,y:v},staticObject:!!x,visible:!x});r++,n.push(g)}}()}x();var g=!1;function p(i){var t=window.devicePixelRatio,o=Math.floor(i.clientWidth*t),e=Math.floor(i.clientHeight*t);return(i.width!==o||i.height!==e)&&(i.width=o,i.height=e,!0)}function w(i){for(var t={x:void 0,y:void 0},o={x:void 0,y:void 0},e=0;e<i.length;e++)(i[e].x<t.x||void 0===t.x)&&(t.x=i[e].x),(i[e].x>o.x||void 0===o.x)&&(o.x=i[e].x),(i[e].y<t.y||void 0===t.y)&&(t.y=i[e].y),(i[e].y>o.y||void 0===o.y)&&(o.y=i[e].y);return{x:(o.x-t.x)/2+t.x,y:(o.y-t.y)/2+t.y}}setInterval(function(){p(l)&&x();h=[];for(var t=0;t<n.length;t++)n[t].update(l),h.push(n[t].position);s=new i.default(h,c),g=!0},1e3/60),requestAnimationFrame(function i(){!function(){if(!g)return;g=!1,c.fillStyle="#f0f0f0",c.fillRect(0,0,l.width,l.height);var i=s.getTriangleData();!function(i,t,o,e){for(var n=0;n<o.length;n++){var a=o[n],r=[t[a[0]],t[a[1]],t[a[2]]],h=r[0],s=r[1],c=r[2];i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(s.x,s.y),i.lineTo(c.x,c.y);var u=w([h,s,c]).y/l.height,x=d.l+(u*(v[1]-v[0])+v[0]);i.fillStyle="hsl(".concat(d.h,",").concat(d.s,"%,").concat(x,"%)"),i.fill(),i.strokeStyle=e?y:i.fillStyle,i.lineTo(h.x,h.y),i.lineWidth=f,i.stroke()}}(c,i.vertices,i.triangles,u);for(var t=0;t<n.length;t++)n[t].draw(c)}();requestAnimationFrame(i)})}();
},{"./delaunay":"qs9S"}]},{},["ruvf"], null)
//# sourceMappingURL=/moving-triangles.7b717638.js.map