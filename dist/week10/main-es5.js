function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/actor/actor.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actor/actor.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActorActorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(1)\">Home</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(2)\">Add Actor/Movie</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(3)\">Update Actor</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(4)\">Delete Actor/Movie</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(5)\">Add Actor to Movies</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(6)\">Add Movies to Actor</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"section\" *ngIf=\"section==1\">\n  <h2><b><u>Actors</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n\n  <h2><b><u>Movies</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Name</th>\n      <th>Production Year</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n    </tr>\n  </table>\n\n  <h2><b><u>Actors with at least 2 movies</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of subsetDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n</div>\n\n\n<div class=\"section\" *ngIf=\"section==2\">\n  <div class=\"form-group\">\n\n    <br>\n\n    <h2><b><u>Actors</u></b></h2>\n\n    <label for=\"actorName\">Actor Full Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"actorName\">Birth Year</label>\n    <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSaveActor()\">Save Actor</button>\n\n  <br>\n  <br>\n\n  <div class=\"form-group\">\n\n    <h2><b><u>Movies</u></b></h2>\n\n    <label for=\"actorName\">Movie Full Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"movieFullName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"actorName\">Production Year</label>\n    <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"productionYear\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSaveMovie()\">Save Movie</button>\n\n\n\n</div>\n\n\n<div class=\"section\" *ngIf=\"section==3\">\n\n  <h2><b><u>Actors</u></b></h2>\n\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectUpdate(item)\">Update</button></td>\n    </tr>\n  </table>\n  <hr>\n  <div *ngIf=\"actorsDB.length>0\">\n    <div class=\"form-group\">\n      <label for=\"actorName\">Full Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"actorName\">Birth Year</label>\n      <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateActor()\">Update Actor</button>\n  </div>\n\n</div>\n\n\n<div class=\"section\" *ngIf=\"section==4\">\n\n  <h2><b><u>Actor</u></b></h2>\n\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n      <th>Delete?</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onDeleteActor(item)\">Delete</button></td>\n    </tr>\n  </table>\n\n  <h2><b><u>Movies</u></b></h2>\n\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Name</th>\n      <th>Production Year</th>\n      <th>Delete?</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onDeleteMovie(item)\">Delete</button></td>\n    </tr>\n  </table>\n\n  <h3><b><u>For Deleting Movies Produced Before a Specified Year</u></b></h3>\n\n  <label for=\"actorName\">Enter the Production Year</label>\n  <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"deleteYear\"><br>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteAsPerSpecificYear()\">Delete</button>\n\n</div>\n\n<div class=\"section\" *ngIf=\"section==5\">\n  <h2><b><u>Actors</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n\n  <h2><b><u>Movies</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Name</th>\n      <th>Production Year</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n    </tr>\n  </table>\n\n  <label for=\"actorName\">Enter the Full Name of the Actor (as shown in the list)</label>\n  <input type=\"text\" class=\"form-control\" id=\"actorArray\" [(ngModel)]=\"nameOfTheActor\">\n\n  <label for=\"actorName\">Enter the Full Name of the Movie (as shown in the list)</label>\n  <input type=\"text\" class=\"form-control\" id=\"movieArray\" [(ngModel)]=\"nameOfTheMovie\">\n  <br>\n  <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"addActorToMovie()\">Add Actor To Movie</button></td>\n\n</div>\n\n<div class=\"section\" *ngIf=\"section==6\">\n  <h2><b><u>Actors</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Actor Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n\n  <h2><b><u>Movies</u></b></h2>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Name</th>\n      <th>Production Year</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n    </tr>\n  </table>\n\n  <label for=\"actorName\">Enter the Full Name of the Actor (as shown in the list)</label>\n  <input type=\"text\" class=\"form-control\" id=\"actorArray\" [(ngModel)]=\"nameOfTheActor\">\n\n  <label for=\"actorName\">Enter the Full Name of the Movie (as shown in the list)</label>\n  <input type=\"text\" class=\"form-control\" id=\"movieArray\" [(ngModel)]=\"nameOfTheMovie\">\n  <br>\n  <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"addMovieToActor()\">Add Movie To Actor</button></td>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-actor></app-actor>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/actor/actor.component.css":
  /*!*******************************************!*\
    !*** ./src/app/actor/actor.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppActorActorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdG9yL2FjdG9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/actor/actor.component.ts":
  /*!******************************************!*\
    !*** ./src/app/actor/actor.component.ts ***!
    \******************************************/

  /*! exports provided: ActorComponent */

  /***/
  function srcAppActorActorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActorComponent", function () {
      return ActorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");

    var ActorComponent =
    /*#__PURE__*/
    function () {
      function ActorComponent(dbService) {
        _classCallCheck(this, ActorComponent);

        this.dbService = dbService;
        this.section = 1;
        this.actorsDB = [];
        this.moviesDB = [];
        this.subsetDB = [];
        this.movieFullName = "";
        this.productionYear = 0;
        this.fullName = "";
        this.bYear = 0;
        this.deleteYear = 0;
        this.nameOfTheMovie = "";
        this.nameOfTheActor = "";
      }

      _createClass(ActorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onGetActors();
          this.onGetMovies();
        } // Function to change the value of the section variable

      }, {
        key: "changeSection",
        value: function changeSection(sectionId) {
          this.section = sectionId;
          this.resetValues();
        } ////////////////////////////////////// Functions for the actors ////////////////////////////////////
        // Function to save all the actors in a database
        // Since the output of the getActors() happens to be an observable so we have to subscribe to it

      }, {
        key: "onGetActors",
        value: function onGetActors() {
          var _this = this;

          this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;

            for (var i = 0; i < _this.actorsDB.length; i++) {
              if (_this.actorsDB[i].movies.length >= 2) {
                _this.subsetDB.push(_this.actorsDB[i]);
              }
            }
          });
        } // Function to save the actor
        // On saving the current actor, we are calling the onGetActors function to display all the actors in the table format

      }, {
        key: "onSaveActor",
        value: function onSaveActor() {
          var _this2 = this;

          var obj = {
            name: this.fullName,
            bYear: this.bYear
          };
          this.dbService.createActor(obj).subscribe(function (result) {
            _this2.onGetActors();
          });
        } // Function to get all the details of the selected actor and assign those details to the global variable

      }, {
        key: "onSelectUpdate",
        value: function onSelectUpdate(item) {
          this.fullName = item.name;
          this.bYear = item.bYear;
          this.actorId = item._id;
        } // Function to update the details of the selected actor

      }, {
        key: "onUpdateActor",
        value: function onUpdateActor() {
          var _this3 = this;

          var obj = {
            name: this.fullName,
            bYear: this.bYear
          };
          this.dbService.updateActor(this.actorId, obj).subscribe(function (result) {
            _this3.onGetActors();
          });
        } // Function to delete an actor

      }, {
        key: "onDeleteActor",
        value: function onDeleteActor(item) {
          var _this4 = this;

          this.dbService.deleteActor(item._id).subscribe(function (result) {
            _this4.onGetActors();
          });
        } // Function to reset the values of all the variables

      }, {
        key: "resetValues",
        value: function resetValues() {
          this.fullName = "";
          this.bYear = 0;
          this.actorId = "";
          this.deleteYear = 0;
          this.nameOfTheMovie = "";
          this.nameOfTheActor = "";
          this.movieFullName = "";
          this.productionYear = 0;
        } ////////////////////////////////////// Functions for the Movies ////////////////////////////////////
        // Function to save all the actors in a database
        // Since the output of the getActors() happens to be an observable so we have to subscribe to it

      }, {
        key: "onGetMovies",
        value: function onGetMovies() {
          var _this5 = this;

          this.dbService.getMovies().subscribe(function (data) {
            _this5.moviesDB = data;
          });
        } // Function to save the actor
        // On saving the current actor, we are calling the onGetActors function to display all the actors in the table format

      }, {
        key: "onSaveMovie",
        value: function onSaveMovie() {
          var _this6 = this;

          var obj = {
            title: this.movieFullName,
            year: this.productionYear
          };
          this.dbService.createMovie(obj).subscribe(function (result) {
            _this6.onGetMovies();
          });
        } // Function to delete an actor

      }, {
        key: "onDeleteMovie",
        value: function onDeleteMovie(item) {
          var _this7 = this;

          this.dbService.deleteMovie(item._id).subscribe(function (result) {
            _this7.onGetMovies();
          });
        } // Function to delete a year produced before the specified year

      }, {
        key: "deleteAsPerSpecificYear",
        value: function deleteAsPerSpecificYear() {
          var idCollection = []; // Getting the ids of all those movies which are to be deleted

          for (var i = 0; i < this.moviesDB.length; i++) {
            if (this.moviesDB[i].year < this.deleteYear) {
              idCollection.push(this.moviesDB[i].year);
            }
          } // Deleting all those movies produced before the speicified year


          var totalLength = idCollection.length;

          for (var j = 0; j < totalLength; j++) {
            var currentMovieYear = idCollection[j];

            for (var k = 0; k < this.moviesDB.length; k++) {
              if (this.moviesDB[k].year === currentMovieYear) {
                this.onDeleteMovie(this.moviesDB[k]);
                break;
              }
            }
          }
        } // Function to add Actor to Movie

      }, {
        key: "addActorToMovie",
        value: function addActorToMovie() {
          var _this8 = this;

          var firstFlag = false;
          var movieIndex = 0;
          var actorIndex = 0; // Checking whether the given movie exist or not

          for (var j = 0; j < this.moviesDB.length; j++) {
            if (this.nameOfTheMovie === this.moviesDB[j].title) {
              movieIndex = j;

              for (var i = 0; i < this.actorsDB.length; i++) {
                if (this.nameOfTheActor === this.actorsDB[i].name) {
                  actorIndex = i;
                  firstFlag = true;
                  break;
                }
              }
            }
          }

          if (firstFlag === true) {
            this.moviesDB[movieIndex].actors.push(this.actorsDB[actorIndex]._id);
            this.dbService.updateMovie(this.moviesDB[movieIndex]._id, this.moviesDB[movieIndex]).subscribe(function (result) {
              _this8.onGetMovies();
            });
          } else {
            alert("Invalid Actor/Movie entered !");
          }
        } // Function to add Actor to Movie

      }, {
        key: "addMovieToActor",
        value: function addMovieToActor() {
          var _this9 = this;

          var firstFlag = false;
          var actorIndex = 0;
          var movieIndex = 0; // Checking whether the given movie exist or not

          for (var j = 0; j < this.actorsDB.length; j++) {
            if (this.nameOfTheActor === this.actorsDB[j].name) {
              actorIndex = j;

              for (var i = 0; i < this.moviesDB.length; i++) {
                if (this.nameOfTheMovie === this.moviesDB[i].title) {
                  movieIndex = i;
                  firstFlag = true;
                  break;
                }
              }
            }
          }

          if (firstFlag === true) {
            this.actorsDB[actorIndex].movies.push(this.moviesDB[movieIndex]._id);
            this.dbService.updateActor(this.actorsDB[actorIndex]._id, this.actorsDB[actorIndex]).subscribe(function (result) {
              _this9.onGetActors();
            });
          } else {
            alert("Invalid Actor/Movie entered !");
          }
        }
      }]);

      return ActorComponent;
    }();

    ActorComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    ActorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-actor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./actor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/actor/actor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./actor.component.css */
      "./src/app/actor/actor.component.css")).default]
    })], ActorComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'week10';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _actor_actor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./actor/actor.component */
    "./src/app/actor/actor.component.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _actor_actor_component__WEBPACK_IMPORTED_MODULE_4__["ActorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      providers: [_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/database.service.ts":
  /*!*************************************!*\
    !*** ./src/app/database.service.ts ***!
    \*************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
      })
    };

    var DatabaseService =
    /*#__PURE__*/
    function () {
      function DatabaseService(http) {
        _classCallCheck(this, DatabaseService);

        this.http = http;
      }

      _createClass(DatabaseService, [{
        key: "getActors",
        value: function getActors() {
          return this.http.get("/actors");
        }
      }, {
        key: "getActor",
        value: function getActor(id) {
          var url = "/actors/" + id;
          return this.http.get(url);
        }
      }, {
        key: "createActor",
        value: function createActor(data) {
          return this.http.post("/actors", data, httpOptions);
        }
      }, {
        key: "updateActor",
        value: function updateActor(id, data) {
          var url = "/actors/" + id;
          return this.http.put(url, data, httpOptions);
        }
      }, {
        key: "deleteActor",
        value: function deleteActor(id) {
          var url = "/actors/" + id;
          return this.http.delete(url, httpOptions);
        }
      }, {
        key: "getMovies",
        value: function getMovies() {
          return this.http.get("/movies");
        }
      }, {
        key: "createMovie",
        value: function createMovie(data) {
          return this.http.post("/movies", data, httpOptions);
        }
      }, {
        key: "deleteMovie",
        value: function deleteMovie(id) {
          var url = "/movies/" + id;
          return this.http.delete(url, httpOptions);
        }
      }, {
        key: "addTheActorToMovieArray",
        value: function addTheActorToMovieArray(id) {
          var url = "/addSpecifiedActor/" + id;
        }
      }, {
        key: "updateMovie",
        value: function updateMovie(id, data) {
          var url = "/movies/" + id;
          return this.http.put(url, data, httpOptions);
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DatabaseService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\17chowlr\Downloads\University\2019 Sem 2\FIT2095\week10\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map