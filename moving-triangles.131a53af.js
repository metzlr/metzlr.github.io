// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"delaunay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function pointInCircle(a, b, c, p) {
  var dx = a.x - p.x;
  var dy = a.y - p.y;
  var ex = b.x - p.x;
  var ey = b.y - p.y;
  var fx = c.x - p.x;
  var fy = c.y - p.y;
  var ap = dx * dx + dy * dy;
  var bp = ex * ex + ey * ey;
  var cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}

function sign(p1, p2, p3) {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function pointInTriangle(pt, v1, v2, v3) {
  var d1 = sign(pt, v1, v2);
  var d2 = sign(pt, v2, v3);
  var d3 = sign(pt, v3, v1);
  var has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  var has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
}
/* 
  Directed Acylic Graph

  Used to find what triangle a point is within
*/


var Node = /*#__PURE__*/function () {
  function Node(key, vertices) {
    _classCallCheck(this, Node);

    this.key = key;
    this.vertices = vertices;
    this.children = [];
  }

  _createClass(Node, [{
    key: "addChild",
    value: function addChild(node) {
      this.children.push(node);
    }
  }]);

  return Node;
}();

var TriangleGraph = /*#__PURE__*/function () {
  function TriangleGraph(key, vertices) {
    _classCallCheck(this, TriangleGraph);

    this.nodes = new Map();
    this.nodes.set(key, new Node(key, vertices));
  }

  _createClass(TriangleGraph, [{
    key: "addNode",
    value: function addNode(parentKeys, key, vertices) {
      var _this = this;

      if (parentKeys.length == 0) return false;
      var newNode = undefined;
      parentKeys.forEach(function (parentKey) {
        var parentNode = _this.nodes.get(parentKey);

        if (parentNode) {
          if (newNode == undefined) {
            newNode = new Node(key, vertices);

            _this.nodes.set(key, newNode);
          }

          parentNode.addChild(newNode);
        }
      });
      return true;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this.nodes.values();
    }
  }, {
    key: "size",
    value: function size() {
      return this.nodes.size;
    }
  }]);

  return TriangleGraph;
}();

var Vertex = function Vertex(pos, incEdge, id) {
  _classCallCheck(this, Vertex);

  this.pos = pos;
  this.incEdge = incEdge;
  this.id = id;
};

var HalfEdge = function HalfEdge(_ref) {
  var origin = _ref.origin,
      twin = _ref.twin,
      incFace = _ref.incFace,
      next = _ref.next,
      prev = _ref.prev;

  _classCallCheck(this, HalfEdge);

  this.origin = origin;
  this.twin = twin;
  this.incFace = incFace;
  this.next = next;
  this.prev = prev;
};

var Face = function Face(incEdge, graphKey) {
  _classCallCheck(this, Face);

  this.incEdge = incEdge;
  this.graphKey = graphKey;
};

var Delaunay = /*#__PURE__*/function () {
  function Delaunay(points, debugCtx) {
    _classCallCheck(this, Delaunay);

    this.points = points;
    this.debugCtx = debugCtx;
    this.vertices = [];
    this.halfEdges = [];
    this.faces = []; // Contains index of a half-edge belonging to that face
    // Create triangle base triangle that "encapsulates" all points
    // First initialize empty structure
    // const tempPositions = [
    //   { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY },
    //   { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY },
    //   { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY },
    // ];

    var FAR_AWAY = 10000;
    var tempPositions = [{
      x: -FAR_AWAY,
      y: -FAR_AWAY
    }, {
      x: 500,
      y: FAR_AWAY
    }, {
      x: FAR_AWAY,
      y: -FAR_AWAY
    }];

    for (var i = 0; i < 3; i++) {
      //this.vertices.push(new Vertex(`p${i}`, undefined));
      this.vertices.push(new Vertex(tempPositions[i], undefined, this.vertices.length));
    }

    for (var _i = 0; _i < 6; _i++) {
      this.halfEdges.push(new HalfEdge({
        origin: undefined,
        twin: undefined,
        incFace: undefined,
        next: undefined,
        prev: undefined
      }));
    }

    this.faces.push(new Face(this.halfEdges[0], 0));
    this.triangleGraph = new TriangleGraph(0, tempPositions); // Now fill in proper values

    this.vertices[0].incEdge = this.halfEdges[0];
    this.vertices[1].incEdge = this.halfEdges[1];
    this.vertices[2].incEdge = this.halfEdges[2];
    this.halfEdges[0].origin = this.vertices[0];
    this.halfEdges[0].twin = this.halfEdges[3];
    this.halfEdges[0].incFace = this.faces[0];
    this.halfEdges[0].next = this.halfEdges[1];
    this.halfEdges[0].prev = this.halfEdges[2];
    this.halfEdges[1].origin = this.vertices[1];
    this.halfEdges[1].twin = this.halfEdges[4];
    this.halfEdges[1].incFace = this.faces[0];
    this.halfEdges[1].next = this.halfEdges[2];
    this.halfEdges[1].prev = this.halfEdges[0];
    this.halfEdges[2].origin = this.vertices[2];
    this.halfEdges[2].twin = this.halfEdges[5];
    this.halfEdges[2].incFace = this.faces[0];
    this.halfEdges[2].next = this.halfEdges[0];
    this.halfEdges[2].prev = this.halfEdges[1];
    this.halfEdges[3].origin = this.vertices[1];
    this.halfEdges[3].twin = this.halfEdges[0];
    this.halfEdges[3].incFace = null;
    this.halfEdges[3].next = this.halfEdges[4];
    this.halfEdges[3].prev = this.halfEdges[5];
    this.halfEdges[4].origin = this.vertices[2];
    this.halfEdges[4].twin = this.halfEdges[1];
    this.halfEdges[4].incFace = null;
    this.halfEdges[4].next = this.halfEdges[5];
    this.halfEdges[4].prev = this.halfEdges[3];
    this.halfEdges[5].origin = this.vertices[0];
    this.halfEdges[5].twin = this.halfEdges[2];
    this.halfEdges[5].incFace = null;
    this.halfEdges[5].next = this.halfEdges[3];
    this.halfEdges[5].prev = this.halfEdges[4];
    this.triangulate();
  }

  _createClass(Delaunay, [{
    key: "triangulate",
    value: function triangulate() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var point = _this2.points[i];

        var triangle = _this2.containingTriangle(point);
        /* Need case for when point lies on edge of triangle? */


        var _this2$splitTriangle = _this2.splitTriangle(point, triangle),
            _this2$splitTriangle2 = _slicedToArray(_this2$splitTriangle, 2),
            newVertex = _this2$splitTriangle2[0],
            affectedEdges = _this2$splitTriangle2[1];

        affectedEdges.forEach(function (edge) {
          _this2.legalizeEdge(newVertex, edge);
        }); //this.debugDraw(this.debugCtx);
      };

      for (var i = 0; i < this.points.length; i++) {
        _loop(i);
      } //this.getTriangleData();

    }
  }, {
    key: "splitTriangle",
    value: function splitTriangle(point, triangle) {
      // First create new vertex from point
      var newVertex = new Vertex(point, undefined, this.vertices.length); // Next create half-edges

      var newHalfEdges = [];

      for (var i = 0; i < 6; i++) {
        var leftEdge = i % 2 == 0 ? true : false;
        newHalfEdges.push(new HalfEdge({
          origin: leftEdge ? newVertex : undefined,
          twin: undefined,
          //this.halfEdges.length + ((i - 1) % 6),
          incFace: undefined,
          next: undefined,
          prev: undefined
        }));
      } // Assign half-edge twins


      for (var _i2 = 0; _i2 < 3; _i2++) {
        var e1 = newHalfEdges[_i2 * 2];
        var e2 = _i2 == 0 ? newHalfEdges[5] : newHalfEdges[_i2 * 2 - 1];
        e1.twin = e2;
        e2.twin = e1;
      } // Now create each new face and re-assign relevant next/prev edges


      var outerFaceEdges = this.getFaceHalfEdges(triangle);
      var newFaces = [];

      for (var _i3 = 0; _i3 < 3; _i3++) {
        var _e2 = outerFaceEdges[_i3];
        var _e3 = newHalfEdges[_i3 * 2 + 1];
        var e3 = newHalfEdges[_i3 * 2];
        var newFace = new Face(e3, this.faces.length + _i3);
        _e3.origin = _e2.next.origin;
        _e2.next = _e3;
        _e2.prev = e3;
        _e2.incFace = newFace;
        _e3.next = e3;
        _e3.prev = _e2;
        _e3.incFace = newFace;
        e3.next = _e2;
        e3.prev = _e3;
        e3.incFace = newFace;
        newFaces.push(newFace); //const vertices = [e1.origin.pos, e2.origin.pos, e3.origin.pos];

        var vertices = [_e2.origin.id, _e3.origin.id, e3.origin.id];

        if (!this.triangleGraph.addNode([triangle.graphKey], newFace.graphKey, vertices)) {
          console.error("Error adding face to triangle graph:", newFace);
        }
      } // Point vertex to first new half-edge


      newVertex.incEdge = newHalfEdges[0]; // Add new items

      this.vertices.push(newVertex);
      this.halfEdges = this.halfEdges.concat(newHalfEdges);
      this.faces = this.faces.concat(newFaces);
      return [newVertex, outerFaceEdges]; // Debug print new faces
      // for (let i = 0; i < 3; i++) {
      //   this.printFace(newFaces[i]);
      // }
    }
  }, {
    key: "legalizeEdge",
    value: function legalizeEdge(newVertex, edge) {
      var face = edge.incFace;
      var adjacentFace = edge.twin.incFace;

      if (adjacentFace == null) {
        return;
      } else {
        // Check if edge needs to be flipped
        var testPoint = edge.twin.prev.origin.pos;

        if (pointInCircle(newVertex.pos, edge.origin.pos, edge.twin.origin.pos, testPoint)) {
          var incFaceEdge1 = edge.twin.prev;
          var incFaceEdge2 = edge.twin.next;
          var faceEdge1 = edge.next;
          var faceEdge2 = edge.prev; // Flip edge

          edge.next = incFaceEdge1;
          edge.prev = faceEdge1;
          edge.twin.next = faceEdge2;
          edge.twin.prev = incFaceEdge2;
          edge.origin = faceEdge2.origin;
          edge.twin.origin = incFaceEdge1.origin; // Correct Edges

          incFaceEdge1.prev = edge;
          incFaceEdge1.next = faceEdge1;
          faceEdge1.prev = incFaceEdge1;
          faceEdge1.next = edge;
          faceEdge2.prev = edge.twin;
          faceEdge2.next = incFaceEdge2;
          incFaceEdge2.prev = faceEdge2;
          incFaceEdge2.next = edge.twin; // Create two new faces

          var newFaces = [new Face(faceEdge2, this.faces.length), new Face(faceEdge1, this.faces.length + 1)];
          edge.twin.incFace = newFaces[0];
          faceEdge2.incFace = newFaces[0];
          incFaceEdge2.incFace = newFaces[0];
          edge.incFace = newFaces[1];
          incFaceEdge1.incFace = newFaces[1];
          faceEdge1.incFace = newFaces[1];

          for (var _i4 = 0, _newFaces = newFaces; _i4 < _newFaces.length; _i4++) {
            var newFace = _newFaces[_i4];

            var _this$getFaceVertices = this.getFaceVertices(newFace),
                _this$getFaceVertices2 = _slicedToArray(_this$getFaceVertices, 3),
                v1 = _this$getFaceVertices2[0],
                v2 = _this$getFaceVertices2[1],
                v3 = _this$getFaceVertices2[2];

            if (!this.triangleGraph.addNode([face.graphKey, adjacentFace.graphKey], newFace.graphKey, [v1.id, v2.id, v3.id] //[v1.pos, v2.pos, v3.pos]
            )) {
              console.error("Error adding face to triangle graph:", newFace);
            }

            this.faces.push(newFace);
          } // Since edge flip could have affected triangles next to original adjacent triangle, check them


          this.legalizeEdge(newVertex, incFaceEdge1);
          this.legalizeEdge(newVertex, incFaceEdge2);
        }
      }
    }
  }, {
    key: "containingTriangle",
    value: function containingTriangle(point) {
      var currentNode = this.triangleGraph.nodes.get(0);
      var safety = 0;

      while (currentNode.children.length > 0) {
        var foundChild = false;

        var _iterator = _createForOfIteratorHelper(currentNode.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            //const vertices = child.vertices;
            var vertices = [this.vertices[child.vertices[0]].pos, this.vertices[child.vertices[1]].pos, this.vertices[child.vertices[2]].pos];

            if (pointInTriangle(point, vertices[0], vertices[1], vertices[2])) {
              currentNode = child;
              foundChild = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (!foundChild) {
          console.error("Uh oh. Triangle had children but none matched.", point);
        }

        safety++;

        if (safety > 10000) {
          console.error("Infinite loop here");
          break;
        }
      }

      return this.faces[currentNode.key];
    }
  }, {
    key: "getFaceHalfEdges",
    value: function getFaceHalfEdges(face) {
      var edges = [face.incEdge];
      var edge = edges[0];
      var safety = 0;

      while (edge.next.origin != edges[0].origin) {
        edges.push(edge.next);
        edge = edge.next;
        safety++;

        if (safety > 10000) {
          console.error("Infinite loop here");
          break;
        }
      }

      return edges;
    }
  }, {
    key: "getFaceVertices",
    value: function getFaceVertices(face) {
      var edge = face.incEdge;
      var vertices = [edge.origin];
      var safety = 0;

      while (edge.next.origin != vertices[0]) {
        edge = edge.next;
        vertices.push(edge.origin);
        safety++;

        if (safety > 10000) {
          throw new Error("Infinite loop here");
          break;
        }
      }

      return vertices;
    }
  }, {
    key: "printFace",
    value: function printFace(face) {
      var edges = this.getFaceHalfEdges(face);
      console.log("FACE INDEX:", face);

      for (var i = 0; i < edges.length; i++) {
        console.log(edges[i].origin.pos, "TO", edges[i].twin.origin.pos);
        console.log(edges[i]);
      }
    }
  }, {
    key: "getTriangleData",
    value: function getTriangleData() {
      //let vertices = this.vertices.slice(3, this.vertices.length);
      var vertices = [];

      for (var i = 3; i < this.vertices.length; i++) {
        vertices.push(this.vertices[i].pos);
      }

      var triangles = [];
      var triangleIterator = this.triangleGraph.getValues();

      for (var _i5 = 0; _i5 < this.triangleGraph.size(); _i5++) {
        var triangle = triangleIterator.next().value;
        if (triangle.children.length != 0) continue;

        var _triangle$vertices = _slicedToArray(triangle.vertices, 3),
            v1 = _triangle$vertices[0],
            v2 = _triangle$vertices[1],
            v3 = _triangle$vertices[2];

        if (v1 < 3 || v2 < 3 || v3 < 3) continue;
        triangles.push([v1 - 3, v2 - 3, v3 - 3]);
      }

      return {
        vertices: vertices,
        triangles: triangles
      };
    }
  }, {
    key: "debugDraw",
    value: function debugDraw(ctx) {
      // // Clear canvas
      // ctx.fillStyle = "#f0f0f0";
      // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var _iterator2 = _createForOfIteratorHelper(this.faces),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var face = _step2.value;
          var edges = this.getFaceHalfEdges(face);

          var _iterator3 = _createForOfIteratorHelper(edges),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var edge = _step3.value;
              ctx.beginPath();
              var v1 = [edge.origin.pos.x, edge.origin.pos.y];
              var v2 = [edge.twin.origin.pos.x, edge.twin.origin.pos.y];
              var p1 = [ctx.canvas.width * -5, ctx.canvas.height * -5];
              var p2 = [ctx.canvas.width * 5, ctx.canvas.height * -5];
              var p3 = [ctx.canvas.width / 2, ctx.canvas.height * 5];

              if (typeof edge.origin.pos === "string") {
                if (edge.origin.pos === "p0") {
                  v1 = p1;
                } else if (edge.origin.pos === "p1") {
                  v1 = p2;
                } else {
                  v1 = p3;
                }
              }

              if (typeof edge.twin.origin.pos === "string") {
                if (edge.twin.origin.pos === "p0") {
                  v2 = p1;
                } else if (edge.twin.origin.pos === "p1") {
                  v2 = p2;
                } else {
                  v2 = p3;
                }
              } // console.log(v1, "TO", v2);
              // console.log(edge, edge.twin);


              ctx.moveTo(v1[0], v1[1]);
              ctx.lineTo(v2[0], v2[1]);
              ctx.strokeStyle = "green";
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Delaunay;
}();

var _default = Delaunay;
exports.default = _default;
},{}],"moving-triangles.js":[function(require,module,exports) {
"use strict";

var _delaunay = _interopRequireDefault(require("./delaunay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle(_ref) {
    var id = _ref.id,
        color = _ref.color,
        radius = _ref.radius,
        position = _ref.position,
        velocity = _ref.velocity,
        staticObject = _ref.staticObject,
        visible = _ref.visible;

    _classCallCheck(this, Circle);

    this.id = id;
    this.color = color;
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
    this.staticObject = staticObject;
    this.visible = visible;
  }

  _createClass(Circle, [{
    key: "update",
    value: function update(canvas) {
      if (this.staticObject) return;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.x - this.radius < 0 || this.position.x + this.radius > canvas.width) {
        this.velocity.x *= -1;
      }

      if (this.position.y - this.radius < 0 || this.position.y + this.radius > canvas.height) {
        this.velocity.y *= -1;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.visible) return;
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }]);

  return Circle;
}();

var main = function () {
  var canvas = document.getElementById("main-canvas");
  var ctx = canvas.getContext("2d"); // window.onresize = () => {
  //   init();
  //   update();
  // };
  // Constants

  var fps = 60;
  var circleColor = "#B5B0FB66";
  var drawEdges = false;
  var lineColor = "#B5B0FB66";
  var lineWidth = 1;
  var triangleBaseColor = {
    h: 244,
    s: 94,
    l: 68
  };
  var triangleColorRangeL = [-10, 5]; // Non-constants

  var numCircles, circleSpeedRange, circleRadius, circles, idCounter, points, delaunay, delaunayData; // Setup scene

  function init() {
    resizeCanvas(canvas);
    numCircles = {
      x: Math.floor(canvas.width / 200),
      y: Math.floor(canvas.height / 200)
    };
    circleSpeedRange = [0.6, 0.9];
    circleRadius = Math.min(0.007 * canvas.width, 7);
    circles = [];
    idCounter = 0;
    points = [];
    delaunay = undefined;
    createCircles();
  }

  init(); // Initialize update loop. Locked to specific FPS

  var circlesUpdated = false;
  setInterval(update, 1000 / fps);
  requestAnimationFrame(render);

  function update() {
    var resized = resizeCanvas(canvas);

    if (resized) {
      init();
    }

    points = [];

    for (var i = 0; i < circles.length; i++) {
      circles[i].update(canvas);
      points.push(circles[i].position);
    }

    delaunay = new _delaunay.default(points, ctx);
    circlesUpdated = true;
  }

  function draw() {
    if (!circlesUpdated) return;
    circlesUpdated = false; // Clear canvas

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var delaunayData = delaunay.getTriangleData();
    drawTriangles(ctx, delaunayData.vertices, delaunayData.triangles, drawEdges);

    for (var i = 0; i < circles.length; i++) {
      circles[i].draw(ctx);
    }
  }

  function render() {
    draw(); //resizeCanvas(canvas);
    //console.log(canvas.width, canvas.height);

    requestAnimationFrame(render);
  }

  function resizeCanvas(canvas) {
    var realToCSSPixels = window.devicePixelRatio; // Lookup the size the browser is displaying the canvas in CSS pixels
    // and compute a size needed to make our drawingbuffer match it in
    // device pixels.

    var displayWidth = Math.floor(canvas.clientWidth * realToCSSPixels);
    var displayHeight = Math.floor(canvas.clientHeight * realToCSSPixels); // Check if the canvas is not the same size.

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      // Make the canvas the same size
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      return true;
    }

    return false;
  }

  function createCircles() {
    circles = [];
    var dx = canvas.width / (numCircles.x + 1);
    var dy = canvas.height / (numCircles.y + 1); // console.log(canvas.width, canvas.height);
    // console.log(numCircles);
    // Create grid of circles

    var offset = 2;

    for (var i = 0; i <= numCircles.y + 1; i++) {
      for (var j = 0; j <= numCircles.x + 1; j++) {
        var pos = {
          x: j * dx,
          y: i * dy
        };
        var direction = [1, -1];
        var velocityX = (Math.random() * (circleSpeedRange[1] - circleSpeedRange[0]) + circleSpeedRange[0]) * direction[Math.floor(Math.random() * 2)];
        var velocityY = (Math.random() * (circleSpeedRange[1] - circleSpeedRange[0]) + circleSpeedRange[0]) * direction[Math.floor(Math.random() * 2)];
        var edgeCircle = i === 0 || j === 0 || j === numCircles.x + 1 || i === numCircles.y + 1 ? true : false;
        var circle = new Circle({
          id: idCounter,
          color: circleColor,
          radius: circleRadius,
          position: pos,
          velocity: {
            x: velocityX,
            y: velocityY
          },
          staticObject: edgeCircle ? true : false,
          visible: edgeCircle ? false : true
        });
        idCounter++;
        circles.push(circle);
      }
    }
  }

  function drawTriangles(ctx, vertices, triangles, drawEdges) {
    for (var i = 0; i < triangles.length; i++) {
      var triangle = triangles[i];
      var _ref2 = [vertices[triangle[0]], vertices[triangle[1]], vertices[triangle[2]]],
          v1 = _ref2[0],
          v2 = _ref2[1],
          v3 = _ref2[2];
      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.lineTo(v3.x, v3.y);
      var heightRatio = getTriangleMidpoint([v1, v2, v3]).y / canvas.height;
      var lightness = triangleBaseColor.l + (heightRatio * (triangleColorRangeL[1] - triangleColorRangeL[0]) + triangleColorRangeL[0]);
      ctx.fillStyle = "hsl(".concat(triangleBaseColor.h, ",").concat(triangleBaseColor.s, "%,").concat(lightness, "%)");
      ctx.fill();
      ctx.strokeStyle = drawEdges ? circleColor : ctx.fillStyle;
      ctx.lineTo(v1.x, v1.y);
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }

  function getTriangleMidpoint(vertices) {
    var min = {
      x: undefined,
      y: undefined
    };
    var max = {
      x: undefined,
      y: undefined
    };

    for (var i = 0; i < vertices.length; i++) {
      if (vertices[i].x < min.x || min.x === undefined) {
        min.x = vertices[i].x;
      }

      if (vertices[i].x > max.x || max.x === undefined) {
        max.x = vertices[i].x;
      }

      if (vertices[i].y < min.y || min.y === undefined) {
        min.y = vertices[i].y;
      }

      if (vertices[i].y > max.y || max.y === undefined) {
        max.y = vertices[i].y;
      }
    }

    return {
      x: (max.x - min.x) / 2 + min.x,
      y: (max.y - min.y) / 2 + min.y
    };
  }
}();
},{"./delaunay":"delaunay.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42933" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","moving-triangles.js"], null)
//# sourceMappingURL=/moving-triangles.131a53af.js.map