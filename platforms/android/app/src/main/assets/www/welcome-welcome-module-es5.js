function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
    \*****************************************************************/

  /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ??angular_material_src_cdk_bidi_bidi_a */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_material_src_cdk_bidi_bidi_a", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir-document-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/directionality.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality = /*#__PURE__*/function () {
      /**
       * @param {?=} _document
       */
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          var bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.??fac = function Directionality_Factory(t) {
      return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](DIR_DOCUMENT, 8));
    };
    /** @nocollapse */


    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /** @nocollapse */


    Directionality.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */


    var Dir = /*#__PURE__*/function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      _createClass(Dir, [{
        key: "dir",
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var old = this._dir;
          /** @type {?} */

          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
        /**
         * Initialize once default value has been set.
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Dir;
    }();

    Dir.??fac = function Dir_Factory(t) {
      return new (t || Dir)();
    };

    Dir.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dir]',
          providers: [{
            provide: Directionality,
            useExisting: Dir
          }],
          host: {
            '[attr.dir]': '_rawDir'
          },
          exportAs: 'dir'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/bidi-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BidiModule
    });
    BidiModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BidiModule, {
        declarations: [Dir],
        exports: [Dir]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [Dir],
          declarations: [Dir]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bidi.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
    \********************************************************************/

  /*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
      return CdkStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
      return CdkStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
      return CdkStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
      return CdkStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
      return CdkStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
      return CdkStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
      return CdkStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
      return MAT_STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
      return STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
      return STEP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
      return StepperSelectionEvent;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/step-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function CdkStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????projection"](0);
      }
    }

    var _c0 = ["*"];

    var CdkStepHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       */
      function CdkStepHeader(_elementRef) {
        _classCallCheck(this, CdkStepHeader);

        this._elementRef = _elementRef;
      }
      /**
       * Focuses the step header.
       * @return {?}
       */


      _createClass(CdkStepHeader, [{
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
      }]);

      return CdkStepHeader;
    }();

    CdkStepHeader.??fac = function CdkStepHeader_Factory(t) {
      return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
    };

    CdkStepHeader.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
      type: CdkStepHeader,
      selectors: [["", "cdkStepHeader", ""]],
      hostAttrs: ["role", "tab"]
    });
    /** @nocollapse */

    CdkStepHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepHeader]',
          host: {
            'role': 'tab'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/step-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepLabel =
    /**
     * @param {?} template
     */
    function CdkStepLabel(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkStepLabel);

      this.template = template;
    };

    CdkStepLabel.??fac = function CdkStepLabel_Factory(t) {
      return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
    };

    CdkStepLabel.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
      type: CdkStepLabel,
      selectors: [["", "cdkStepLabel", ""]]
    });
    /** @nocollapse */

    CdkStepLabel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepLabel]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each stepper component.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Change event emitted on selection changes.
     */

    var StepperSelectionEvent = function StepperSelectionEvent() {
      _classCallCheck(this, StepperSelectionEvent);
    };

    if (false) {}
    /**
     * Enum to represent the different states of the steps.
     * @type {?}
     */


    var STEP_STATE = {
      NUMBER: 'number',
      EDIT: 'edit',
      DONE: 'done',
      ERROR: 'error'
    };
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @type {?}
     */

    var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * \@breaking-change 8.0.0.
     * @type {?}
     */

    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
    /**
     * Configurable options for stepper.
     * @record
     */

    function StepperOptions() {}

    if (false) {}

    var CdkStep = /*#__PURE__*/function () {
      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} _stepper
       * @param {?=} stepperOptions
       */
      function CdkStep(_stepper, stepperOptions) {
        _classCallCheck(this, CdkStep);

        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */

        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
      }
      /**
       * Whether the user can return to this step once it has been marked as completed.
       * @return {?}
       */


      _createClass(CdkStep, [{
        key: "editable",
        get: function get() {
          return this._editable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the completion of step is optional.
         * @return {?}
         */

      }, {
        key: "optional",
        get: function get() {
          return this._optional;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether step is marked as completed.
         * @return {?}
         */

      }, {
        key: "completed",
        get: function get() {
          return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultCompleted",
        value: function _getDefaultCompleted() {
          return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        }
        /**
         * Whether step has an error.
         * @return {?}
         */

      }, {
        key: "hasError",
        get: function get() {
          return this._customError == null ? this._getDefaultError() : this._customError;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultError",
        value: function _getDefaultError() {
          return this.stepControl && this.stepControl.invalid && this.interacted;
        }
        /**
         * Selects this step component.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          this._stepper.selected = this;
        }
        /**
         * Resets the step to its initial state. Note that this includes resetting form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.interacted = false;

          if (this._completedOverride != null) {
            this._completedOverride = false;
          }

          if (this._customError != null) {
            this._customError = false;
          }

          if (this.stepControl) {
            this.stepControl.reset();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Since basically all inputs of the MatStep get proxied through the view down to the
          // underlying MatStepHeader, we have to make sure that change detection runs correctly.
          this._stepper._stateChanged();
        }
      }]);

      return CdkStep;
    }();

    CdkStep.??fac = function CdkStep_Factory(t) {
      return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CdkStepper;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
    };

    CdkStep.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
      type: CdkStep,
      selectors: [["cdk-step"]],
      contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStepLabel, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.stepLabel = _t.first);
        }
      },
      viewQuery: function CdkStep_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????staticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        editable: "editable",
        optional: "optional",
        completed: "completed",
        hasError: "hasError",
        stepControl: "stepControl",
        label: "label",
        errorMessage: "errorMessage",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        state: "state"
      },
      exportAs: ["cdkStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????NgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function CdkStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkStep.ctorParameters = function () {
      return [{
        type: CdkStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkStepper;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [STEPPER_GLOBAL_OPTIONS]
        }]
      }];
    };

    CdkStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
        args: [CdkStepLabel]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
          "static": true
        }]
      }],
      stepControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['aria-labelledby']
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      completed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      hasError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'cdk-step',
          exportAs: 'cdkStep',
          template: '<ng-template><ng-content></ng-content></ng-template>',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      }, {
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
          args: [CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      });
    })();

    if (false) {}

    var CdkStepper = /*#__PURE__*/function () {
      /**
       * @param {?} _dir
       * @param {?} _changeDetectorRef
       * @param {?=} _elementRef
       * @param {?=} _document
       */
      function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        _classCallCheck(this, CdkStepper);

        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
      }
      /**
       * The list of step components that the stepper is holding.
       * @return {?}
       */


      _createClass(CdkStepper, [{
        key: "steps",
        get: function get() {
          return this._steps;
        }
        /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */

      }, {
        key: "linear",
        get: function get() {
          return this._linear;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the selected step.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} index
         * @return {?}
         */
        ,
        set: function set(index) {
          /** @type {?} */
          var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);

          if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
              throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }

            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
              this._updateSelectedItemIndex(index);
            }
          } else {
            this._selectedIndex = newIndex;
          }
        }
        /**
         * The step that is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
          return this.steps ? this.steps.toArray()[this.selectedIndex] :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} step
         * @return {?}
         */
        ,
        set: function set(step) {
          this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // Note that while the step headers are content children by default, any components that
          // extend this one might have them as view children. We initialize the keyboard handling in
          // AfterViewInit so we're guaranteed for both view and content children to be defined.
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader).withWrap().withVerticalOrientation(this._orientation === 'vertical');
          (this._dir ?
          /** @type {?} */
          this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return _this._keyManager.withHorizontalOrientation(direction);
          });

          this._keyManager.updateActiveItem(this._selectedIndex);

          this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this.selected) {
              _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Selects and focuses the next step in list.
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
        }
        /**
         * Selects and focuses the previous step in list.
         * @return {?}
         */

      }, {
        key: "previous",
        value: function previous() {
          this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
        /**
         * Resets the stepper to its initial state. Note that this includes clearing form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._updateSelectedItemIndex(0);

          this.steps.forEach(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.reset();
          });

          this._stateChanged();
        }
        /**
         * Returns a unique id for each step label element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepLabelId",
        value: function _getStepLabelId(i) {
          return "cdk-step-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns unique id for each step content element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepContentId",
        value: function _getStepContentId(i) {
          return "cdk-step-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Marks the component to be change detected.
         * @return {?}
         */

      }, {
        key: "_stateChanged",
        value: function _stateChanged() {
          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns position state of the step with the given index.
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_getAnimationDirection",
        value: function _getAnimationDirection(index) {
          /** @type {?} */
          var position = index - this._selectedIndex;

          if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
          } else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
          }

          return 'current';
        }
        /**
         * Returns the type of icon to be displayed.
         * @param {?} index
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getIndicatorType",
        value: function _getIndicatorType(index) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;

          /** @type {?} */
          var step = this.steps.toArray()[index];
          /** @type {?} */

          var isCurrentStep = this._isCurrentStep(index);

          return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @return {?}
         */

      }, {
        key: "_getDefaultIndicatorLogic",
        value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
          } else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
          }
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getGuidelineLogic",
        value: function _getGuidelineLogic(step, isCurrentStep) {
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
          } else if (step.completed && isCurrentStep) {
            return state;
          } else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
          } else {
            return state;
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_isCurrentStep",
        value: function _isCurrentStep(index) {
          return this._selectedIndex === index;
        }
        /**
         * Returns the index of the currently-focused step header.
         * @return {?}
         */

      }, {
        key: "_getFocusIndex",
        value: function _getFocusIndex() {
          return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
        }
        /**
         * @private
         * @param {?} newIndex
         * @return {?}
         */

      }, {
        key: "_updateSelectedItemIndex",
        value: function _updateSelectedItemIndex(newIndex) {
          /** @type {?} */
          var stepsArray = this.steps.toArray();
          this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex]
          }); // If focus is inside the stepper, move it to the next header, otherwise it may become
          // lost when the active step content is hidden. We can't be more granular with the check
          // (e.g. checking whether focus is inside the active step), because we don't have a
          // reference to the elements that are rendering out the content.

          this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
          this._selectedIndex = newIndex;

          this._stateChanged();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
          } else {
            manager.onKeydown(event);
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_anyControlsInvalidOrPending",
        value: function _anyControlsInvalidOrPending(index) {
          /** @type {?} */
          var steps = this.steps.toArray();
          steps[this._selectedIndex].interacted = true;

          if (this._linear && index >= 0) {
            return steps.slice(0, index).some(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              /** @type {?} */
              var control = step.stepControl;
              /** @type {?} */

              var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
              return isIncomplete && !step.optional && !step._completedOverride;
            });
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutDirection",
        value: function _layoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Checks whether the stepper contains the focused element.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (!this._document || !this._elementRef) {
            return false;
          }
          /** @type {?} */


          var stepperElement = this._elementRef.nativeElement;
          /** @type {?} */

          var focusedElement = this._document.activeElement;
          return stepperElement === focusedElement || stepperElement.contains(focusedElement);
        }
      }]);

      return CdkStepper;
    }();

    CdkStepper.??fac = function CdkStepper_Factory(t) {
      return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };

    CdkStepper.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
      type: CdkStepper,
      selectors: [["", "cdkStepper", ""]],
      contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStep, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStepHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx._stepHeader = _t);
        }
      },
      inputs: {
        linear: "linear",
        selectedIndex: "selectedIndex",
        selected: "selected"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["cdkStepper"]
    });
    /** @nocollapse */

    CdkStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    CdkStepper.propDecorators = {
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkStep, {
          descendants: true
        }]
      }],
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkStepHeader, {
          descendants: true
        }]
      }],
      linear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepper]',
          exportAs: 'cdkStepper'
        }]
      }], function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, {
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStepHeader, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Simplified representation of an "AbstractControl" from \@angular/forms.
     * Used to avoid having to bring in \@angular/forms for a single optional interface.
     * \@docs-private
     * @record
     */


    function AbstractControlLike() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper-button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var CdkStepperNext = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperNext(_stepper) {
        _classCallCheck(this, CdkStepperNext);

        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */

        this.type = 'submit';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperNext, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.next();
        }
      }]);

      return CdkStepperNext;
    }();

    CdkStepperNext.??fac = function CdkStepperNext_Factory(t) {
      return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](CdkStepper));
    };

    CdkStepperNext.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
      type: CdkStepperNext,
      selectors: [["button", "cdkStepperNext", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CdkStepperNext_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????hostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
    /** @nocollapse */

    CdkStepperNext.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperNext.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
        args: ['click']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: 'button[cdkStepperNext]',
          host: {
            '[type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: CdkStepper
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      });
    })();

    if (false) {}
    /**
     * Button that moves to the previous step in a stepper workflow.
     */


    var CdkStepperPrevious = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperPrevious(_stepper) {
        _classCallCheck(this, CdkStepperPrevious);

        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */

        this.type = 'button';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperPrevious, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.previous();
        }
      }]);

      return CdkStepperPrevious;
    }();

    CdkStepperPrevious.??fac = function CdkStepperPrevious_Factory(t) {
      return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](CdkStepper));
    };

    CdkStepperPrevious.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
      type: CdkStepperPrevious,
      selectors: [["button", "cdkStepperPrevious", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????hostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
    /** @nocollapse */

    CdkStepperPrevious.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperPrevious.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
        args: ['click']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: 'button[cdkStepperPrevious]',
          host: {
            '[type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: CdkStepper
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepperModule = function CdkStepperModule() {
      _classCallCheck(this, CdkStepperModule);
    };

    CdkStepperModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
      type: CdkStepperModule
    });
    CdkStepperModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
      factory: function CdkStepperModule_Factory(t) {
        return new (t || CdkStepperModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](CdkStepperModule, {
        declarations: function declarations() {
          return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]];
        },
        exports: function exports() {
          return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
          exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
          declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=stepper.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/cdk.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
    \***************************************************/

  /*! exports provided: VERSION */

  /***/
  function node_modulesAngularCdkFesm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Current version of the Angular Component Development Kit. */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=cdk.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
    \********************************************************************/

  /*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ??HttpInterceptingHandler, ??angular_packages_common_http_http_a, ??angular_packages_common_http_http_b, ??angular_packages_common_http_http_c, ??angular_packages_common_http_http_d, ??angular_packages_common_http_http_e, ??angular_packages_common_http_http_f, ??angular_packages_common_http_http_g, ??angular_packages_common_http_http_h */

  /***/
  function node_modulesAngularCommon__ivy_ngcc__Fesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??HttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license Angular v9.1.13
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/backend.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {
      _classCallCheck(this, HttpHandler);
    };

    if (false) {}
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {
      _classCallCheck(this, HttpBackend);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/headers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @record
     */


    function Update() {}

    if (false) {}
    /**
     * Represents the header configuration options for an HTTP request.
     * Instances are immutable. Modifying methods return a cloned
     * instance with the change. The original object is never changed.
     *
     * \@publicApi
     */


    var HttpHeaders = /*#__PURE__*/function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this2 = this;

        _classCallCheck(this, HttpHeaders);

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this2.maybeSetNormalizedName(name, key);

                if (_this2.headers.has(key)) {
                  /** @type {?} */
                  _this2.headers.get(key).push(value);
                } else {
                  _this2.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this2.headers.set(key, values);

                _this2.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} True if the header exists, false otherwise.
       */


      _createClass(HttpHeaders, [{
        key: "has",
        value: function has(name) {
          this.init();
          return this.headers.has(name.toLowerCase());
        }
        /**
         * Retrieves the first value of a given header.
         *
         * @param {?} name The header name.
         *
         * @return {?} The value string if the header exists, null otherwise
         */

      }, {
        key: "get",
        value: function get(name) {
          this.init();
          /** @type {?} */

          var values = this.headers.get(name.toLowerCase());
          return values && values.length > 0 ? values[0] : null;
        }
        /**
         * Retrieves the names of the headers.
         *
         * @return {?} A list of header names.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        /**
         * Retrieves a list of values for a given header.
         *
         * @param {?} name The header name from which to retrieve values.
         *
         * @return {?} A string of values if the header exists, null otherwise.
         */

      }, {
        key: "getAll",
        value: function getAll(name) {
          this.init();
          return this.headers.get(name.toLowerCase()) || null;
        }
        /**
         * Appends a new value to the existing set of values for a header
         * and returns them in a clone of the original instance.
         *
         * @param {?} name The header name for which to append the values.
         * @param {?} value The value to append.
         *
         * @return {?} A clone of the HTTP headers object with the value appended to the given header.
         */

      }, {
        key: "append",
        value: function append(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'a'
          });
        }
        /**
         * Sets or modifies a value for a given header in a clone of the original instance.
         * If the header already exists, its value is replaced with the given value
         * in the returned object.
         *
         * @param {?} name The header name.
         * @param {?} value The value or values to set or overide for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the newly set header value.
         */

      }, {
        key: "set",
        value: function set(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 's'
          });
        }
        /**
         * Deletes values for a given header in a clone of the original instance.
         *
         * @param {?} name The header name.
         * @param {?=} value The value or values to delete for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the given value deleted.
         */

      }, {
        key: "delete",
        value: function _delete(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'd'
          });
        }
        /**
         * @private
         * @param {?} name
         * @param {?} lcName
         * @return {?}
         */

      }, {
        key: "maybeSetNormalizedName",
        value: function maybeSetNormalizedName(name, lcName) {
          if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this3 = this;

          if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }

            this.lazyInit = null;

            if (!!this.lazyUpdate) {
              this.lazyUpdate.forEach(
              /**
              * @param {?} update
              * @return {?}
              */
              function (update) {
                return _this3.applyUpdate(update);
              });
              this.lazyUpdate = null;
            }
          }
        }
        /**
         * @private
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "copyFrom",
        value: function copyFrom(other) {
          var _this4 = this;

          other.init();
          Array.from(other.headers.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this4.headers.set(key,
            /** @type {?} */
            other.headers.get(key));

            _this4.normalizedNames.set(key,
            /** @type {?} */
            other.normalizedNames.get(key));
          });
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpHeaders();
          clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
          clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "applyUpdate",
        value: function applyUpdate(update) {
          /** @type {?} */
          var key = update.name.toLowerCase();

          switch (update.op) {
            case 'a':
            case 's':
              /** @type {?} */
              var value =
              /** @type {?} */
              update.value;

              if (typeof value === 'string') {
                value = [value];
              }

              if (value.length === 0) {
                return;
              }

              this.maybeSetNormalizedName(update.name, key);
              /** @type {?} */

              var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
              base.push.apply(base, _toConsumableArray(value));
              this.headers.set(key, base);
              break;

            case 'd':
              /** @type {?} */
              var toDelete =
              /** @type {?} */
              update.value;

              if (!toDelete) {
                this.headers["delete"](key);
                this.normalizedNames["delete"](key);
              } else {
                /** @type {?} */
                var existing = this.headers.get(key);

                if (!existing) {
                  return;
                }

                existing = existing.filter(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  return toDelete.indexOf(value) === -1;
                });

                if (existing.length === 0) {
                  this.headers["delete"](key);
                  this.normalizedNames["delete"](key);
                } else {
                  this.headers.set(key, existing);
                }
              }

              break;
          }
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          var _this5 = this;

          this.init();
          Array.from(this.normalizedNames.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return fn(
            /** @type {?} */
            _this5.normalizedNames.get(key),
            /** @type {?} */
            _this5.headers.get(key));
          });
        }
      }]);

      return HttpHeaders;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/params.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A codec for encoding and decoding parameters in URLs.
     *
     * Used by `HttpParams`.
     *
     * \@publicApi
     *
     * @record
     */


    function HttpParameterCodec() {}

    if (false) {}
    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec = /*#__PURE__*/function () {
      function HttpUrlEncodingCodec() {
        _classCallCheck(this, HttpUrlEncodingCodec);
      }

      _createClass(HttpUrlEncodingCodec, [{
        key: "encodeKey",
        value:
        /**
         * Encodes a key name for a URL parameter or query-string.
         * @param {?} key The key name.
         * @return {?} The encoded key name.
         */
        function encodeKey(key) {
          return standardEncoding(key);
        }
        /**
         * Encodes the value of a URL parameter or query-string.
         * @param {?} value The value.
         * @return {?} The encoded value.
         */

      }, {
        key: "encodeValue",
        value: function encodeValue(value) {
          return standardEncoding(value);
        }
        /**
         * Decodes an encoded URL parameter or query-string key.
         * @param {?} key The encoded key name.
         * @return {?} The decoded key name.
         */

      }, {
        key: "decodeKey",
        value: function decodeKey(key) {
          return decodeURIComponent(key);
        }
        /**
         * Decodes an encoded URL parameter or query-string value.
         * @param {?} value The encoded value.
         * @return {?} The decoded value.
         */

      }, {
        key: "decodeValue",
        value: function decodeValue(value) {
          return decodeURIComponent(value);
        }
      }]);

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * @record
     */


    function Update$1() {}

    if (false) {}
    /**
     * Options used to construct an `HttpParams` instance.
     *
     * \@publicApi
     * @record
     */


    function HttpParamsOptions() {}

    if (false) {}
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams = /*#__PURE__*/function () {
      /**
       * @param {?=} options
       */
      function HttpParams() {
        var _this6 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
        /** @type {?} */
        {};

        _classCallCheck(this, HttpParams);

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this6.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      _createClass(HttpParams, [{
        key: "has",
        value: function has(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.has(param)
          );
        }
        /**
         * Retrieves the first value for a parameter.
         * @param {?} param The parameter name.
         * @return {?} The first value of the given parameter,
         * or `null` if the parameter is not present.
         */

      }, {
        key: "get",
        value: function get(param) {
          this.init();
          /** @type {?} */

          var res =
          /** @type {?} */
          this.map.get(param);
          return !!res ? res[0] : null;
        }
        /**
         * Retrieves all values for a  parameter.
         * @param {?} param The parameter name.
         * @return {?} All values in a string array,
         * or `null` if the parameter not present.
         */

      }, {
        key: "getAll",
        value: function getAll(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.get(param) || null
          );
        }
        /**
         * Retrieves all the parameters for this body.
         * @return {?} The parameter names in a string array.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(
          /** @type {?} */
          this.map.keys());
        }
        /**
         * Appends a new value to existing values for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value to add.
         * @return {?} A new body with the appended value.
         */

      }, {
        key: "append",
        value: function append(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'a'
          });
        }
        /**
         * Replaces the value for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value.
         * @return {?} A new body with the new value.
         */

      }, {
        key: "set",
        value: function set(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 's'
          });
        }
        /**
         * Removes a given value or all values from a parameter.
         * @param {?} param The parameter name.
         * @param {?=} value The value to remove, if provided.
         * @return {?} A new body with the given value removed, or with all values
         * removed if no value is specified.
         */

      }, {
        key: "delete",
        value: function _delete(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'd'
          });
        }
        /**
         * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
         * separated by `&`s.
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          var _this7 = this;

          this.init();
          return this.keys().map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var eKey = _this7.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`


            return (
              /** @type {?} */

              /** @type {?} */
              _this7.map.get(key).map(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return eKey + '=' + _this7.encoder.encodeValue(value);
              }).join('&')
            );
          }) // filter out empty values because `b: []` produces `''`
          // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
          .filter(
          /**
          * @param {?} param
          * @return {?}
          */
          function (param) {
            return param !== '';
          }).join('&');
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpParams(
          /** @type {?} */
          {
            encoder: this.encoder
          });
          clone.cloneFrom = this.cloneFrom || this;
          clone.updates = (this.updates || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this8 = this;

          if (this.map === null) {
            this.map = new Map();
          }

          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return (
                /** @type {?} */
                _this8.map.set(key,
                /** @type {?} */

                /** @type {?} */

                /** @type {?} */
                _this8.cloneFrom.map.get(key))
              );
            });

            /** @type {?} */
            this.updates.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              switch (update.op) {
                case 'a':
                case 's':
                  /** @type {?} */
                  var base = (update.op === 'a' ?
                  /** @type {?} */
                  _this8.map.get(update.param) : undefined) || [];
                  base.push(
                  /** @type {?} */
                  update.value);

                  /** @type {?} */
                  _this8.map.set(update.param, base);

                  break;

                case 'd':
                  if (update.value !== undefined) {
                    /** @type {?} */
                    var _base =
                    /** @type {?} */
                    _this8.map.get(update.param) || [];
                    /** @type {?} */


                    var idx = _base.indexOf(update.value);

                    if (idx !== -1) {
                      _base.splice(idx, 1);
                    }

                    if (_base.length > 0) {
                      /** @type {?} */
                      _this8.map.set(update.param, _base);
                    } else {
                      /** @type {?} */
                      _this8.map["delete"](update.param);
                    }
                  } else {
                    /** @type {?} */
                    _this8.map["delete"](update.param);

                    break;
                  }

              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }]);

      return HttpParams;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/request.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Construction interface for `HttpRequest`s.
     *
     * All values are optional and will override default values if provided.
     * @record
     */


    function HttpRequestInit() {}

    if (false) {}
    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest = /*#__PURE__*/function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        _classCallCheck(this, HttpRequest);

        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      _createClass(HttpRequest, [{
        key: "serializeBody",
        value: function serializeBody() {
          // If no body is present, no need to serialize it.
          if (this.body === null) {
            return null;
          } // Check whether the body is already in a serialized form. If so,
          // it can just be returned directly.


          if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
            return this.body;
          } // Check whether the body is an instance of HttpUrlEncodedParams.


          if (this.body instanceof HttpParams) {
            return this.body.toString();
          } // Check whether the body is an object or array, and serialize with JSON if so.


          if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
            return JSON.stringify(this.body);
          } // Fall back on toString() for everything else.


          return (
            /** @type {?} */
            this.body.toString()
          );
        }
        /**
         * Examine the body and attempt to infer an appropriate MIME type
         * for it.
         *
         * If no such type can be inferred, this method will return `null`.
         * @return {?}
         */

      }, {
        key: "detectContentTypeHeader",
        value: function detectContentTypeHeader() {
          // An empty body has no content type.
          if (this.body === null) {
            return null;
          } // FormData bodies rely on the browser's content type assignment.


          if (isFormData(this.body)) {
            return null;
          } // Blobs usually have their own content type. If it doesn't, then
          // no type can be inferred.


          if (isBlob(this.body)) {
            return this.body.type || null;
          } // Array buffers have unknown contents and thus no type can be inferred.


          if (isArrayBuffer(this.body)) {
            return null;
          } // Technically, strings could be a form of JSON data, but it's safe enough
          // to assume they're plain strings.


          if (typeof this.body === 'string') {
            return 'text/plain';
          } // `HttpUrlEncodedParams` has its own content-type.


          if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } // Arrays, objects, and numbers will be encoded as JSON.


          if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
            return 'application/json';
          } // No type could be inferred.


          return null;
        }
        /**
         * @param {?=} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // For method, url, and responseType, take the current value unless
          // it is overridden in the update hash.

          /** @type {?} */
          var method = update.method || this.method;
          /** @type {?} */

          var url = update.url || this.url;
          /** @type {?} */

          var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
          // whatever current body is present is being overridden with an empty
          // body, whereas an `undefined` value in update.body implies no
          // override.

          /** @type {?} */

          var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
          // `false` and `undefined` in the update args.

          /** @type {?} */

          var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
          /** @type {?} */

          var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
          // `setParams` are used.

          /** @type {?} */

          var headers = update.headers || this.headers;
          /** @type {?} */

          var params = update.params || this.params; // Check whether the caller has asked to add headers.

          if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers = Object.keys(update.setHeaders).reduce(
            /**
            * @param {?} headers
            * @param {?} name
            * @return {?}
            */
            function (headers, name) {
              return headers.set(name,
              /** @type {?} */
              update.setHeaders[name]);
            }, headers);
          } // Check whether the caller has asked to set params.


          if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams).reduce(
            /**
            * @param {?} params
            * @param {?} param
            * @return {?}
            */
            function (params, param) {
              return params.set(param,
              /** @type {?} */
              update.setParams[param]);
            }, params);
          } // Finally, construct the new HttpRequest using the pieces from above.


          return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials
          });
        }
      }]);

      return HttpRequest;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/response.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base interface for progress events.
     *
     * \@publicApi
     * @record
     */

    function HttpProgressEvent() {}

    if (false) {}
    /**
     * A download progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpDownloadProgressEvent() {}

    if (false) {}
    /**
     * An upload progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpUploadProgressEvent() {}

    if (false) {}
    /**
     * An event indicating that the request was sent to the server. Useful
     * when a request may be retried multiple times, to distinguish between
     * retries on the final event stream.
     *
     * \@publicApi
     * @record
     */


    function HttpSentEvent() {}

    if (false) {}
    /**
     * A user-defined event.
     *
     * Grouping all custom events under this type ensures they will be handled
     * and forwarded by all implementations of interceptors.
     *
     * \@publicApi
     * @record
     * @template T
     */


    function HttpUserEvent() {}

    if (false) {}
    /**
     * An error that represents a failed attempt to JSON.parse text coming back
     * from the server.
     *
     * It bundles the Error object with the actual response body that failed to parse.
     *
     *
     * @record
     */


    function HttpJsonParseError() {}

    if (false) {}
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */


    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init) {
      var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

      _classCallCheck(this, HttpResponseBase);

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };

    if (false) {}
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase) {
      _inherits(HttpHeaderResponse, _HttpResponseBase);

      var _super = _createSuper(HttpHeaderResponse);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse() {
        var _this9;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpHeaderResponse);

        _this9 = _super.call(this, init);
        _this9.type = HttpEventType.ResponseHeader;
        return _this9;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpHeaderResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Perform a straightforward initialization of the new HttpHeaderResponse,
          // overriding the current parameters with new ones if given.
          return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpHeaderResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse = /*#__PURE__*/function (_HttpResponseBase2) {
      _inherits(HttpResponse, _HttpResponseBase2);

      var _super2 = _createSuper(HttpResponse);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse() {
        var _this10;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpResponse);

        _this10 = _super2.call(this, init);
        _this10.type = HttpEventType.Response;
        _this10.body = init.body !== undefined ? init.body : null;
        return _this10;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new HttpResponse({
            body: update.body !== undefined ? update.body : this.body,
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase3) {
      _inherits(HttpErrorResponse, _HttpResponseBase3);

      var _super3 = _createSuper(HttpErrorResponse);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this11;

        _classCallCheck(this, HttpErrorResponse);

        // Initialize with a default status of 0 / Unknown Error.
        _this11 = _super3.call(this, init, 0, 'Unknown Error');
        _this11.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this11.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this11.status >= 200 && _this11.status < 300) {
          _this11.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
        } else {
          _this11.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
        }

        _this11.error = init.error || null;
        return _this11;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/client.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient = /*#__PURE__*/function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        _classCallCheck(this, HttpClient);

        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      _createClass(HttpClient, [{
        key: "request",
        value: function request(first, url) {
          var _this12 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var req; // First, check whether the primary argument is an instance of `HttpRequest`.

          if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
          } else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.

            /** @type {?} */
            var headers = undefined;

            if (options.headers instanceof HttpHeaders) {
              headers = options.headers;
            } else {
              headers = new HttpHeaders(options.headers);
            } // Sort out parameters.

            /** @type {?} */


            var params = undefined;

            if (!!options.params) {
              if (options.params instanceof HttpParams) {
                params = options.params;
              } else {
                params = new HttpParams(
                /** @type {?} */
                {
                  fromObject: options.params
                });
              }
            } // Construct the request.


            req = new HttpRequest(first,
            /** @type {?} */
            url, options.body !== undefined ? options.body : null, {
              headers: headers,
              params: params,
              reportProgress: options.reportProgress,
              // By default, JSON is assumed to be returned for all calls.
              responseType: options.responseType || 'json',
              withCredentials: options.withCredentials
            });
          } // Start with an Observable.of() the initial request, and run the handler (which
          // includes all interceptors) inside a concatMap(). This way, the handler runs
          // inside an Observable chain, which causes interceptors to be re-run on every
          // subscription (this also makes retries re-run the handler, including interceptors).

          /** @type {?} */


          var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
          /**
          * @param {?} req
          * @return {?}
          */
          function (req) {
            return _this12.handler.handle(req);
          })); // If coming via the API signature which accepts a previously constructed HttpRequest,
          // the only option is to get the event stream. Otherwise, return the event stream if
          // that is what was requested.

          if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
          } // The requested stream contains either the full response or the body. In either
          // case, the first step is to filter the event stream to extract a stream of
          // responses(s).

          /** @type {?} */


          var res$ =
          /** @type {?} */
          events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof HttpResponse;
          })); // Decide which stream to return.

          switch (options.observe || 'body') {
            case 'body':
              // The requested stream is the body. Map the response stream to the response
              // body. This could be done more simply, but a misbehaving interceptor might
              // transform the response body into a different format and ignore the requested
              // responseType. Guard against this by validating that the response is of the
              // requested type.
              switch (req.responseType) {
                case 'arraybuffer':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is an ArrayBuffer.
                    if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                      throw new Error('Response is not an ArrayBuffer.');
                    }

                    return res.body;
                  }));

                case 'blob':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a Blob.
                    if (res.body !== null && !(res.body instanceof Blob)) {
                      throw new Error('Response is not a Blob.');
                    }

                    return res.body;
                  }));

                case 'text':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a string.
                    if (res.body !== null && typeof res.body !== 'string') {
                      throw new Error('Response is not a string.');
                    }

                    return res.body;
                  }));

                case 'json':
                default:
                  // No validation needed for JSON responses, as they can be of any type.
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return res.body;
                  }));
              }

            case 'response':
              // The response stream was requested directly, so return it.
              return res$;

            default:
              // Guard against new future observe types being added.
              throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
          }
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `DELETE` request to execute on the server. See the individual overloads for
         * details on the return type.
         *
         * @param {?} url     The endpoint URL.
         * @param {?=} options The HTTP options to send with the request.
         *
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('DELETE', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `GET` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('GET', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `HEAD` request to execute on the server. The `HEAD` method returns
         * meta information about the resource without transferring the
         * resource itself. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "head",
        value: function head(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('HEAD', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes a request with the special method
         * `JSONP` to be dispatched via the interceptor pipeline.
         * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
         * API endpoints that don't support newer,
         * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
         * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
         * requests even if the API endpoint is not located on the same domain (origin) as the client-side
         * application making the request.
         * The endpoint API must support JSONP callback for JSONP requests to work.
         * The resource API returns the JSON response wrapped in a callback function.
         * You can pass the callback function name as one of the query parameters.
         * Note that JSONP requests can only be used with `GET` requests.
         *
         * @template T
         * @param {?} url The resource URL.
         * @param {?} callbackParam The callback function name.
         *
         * @return {?}
         */

      }, {
        key: "jsonp",
        value: function jsonp(url, callbackParam) {
          return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes the configured
         * `OPTIONS` request to execute on the server. This method allows the client
         * to determine the supported HTTP methods and other capabilites of an endpoint,
         * without implying a resource action. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "options",
        value: function options(url) {
          var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.request('OPTIONS', url,
          /** @type {?} */
          _options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PATCH` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patch",
        value: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PATCH', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `POST` request to execute on the server. The server responds with the location of
         * the replaced resource. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "post",
        value: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('POST', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
         * with a new set of values.
         * See the individual overloads for details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "put",
        value: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PUT', url, addBody(options, body));
        }
      }]);

      return HttpClient;
    }();

    HttpClient.??fac = function HttpClient_Factory(t) {
      return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](HttpHandler));
    };

    HttpClient.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: HttpClient,
      factory: HttpClient.??fac
    });
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: HttpHandler
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Intercepts and handles an `HttpRequest` or `HttpResponse`.
     *
     * Most interceptors transform the outgoing request before passing it to the
     * next interceptor in the chain, by calling `next.handle(transformedReq)`.
     * An interceptor may transform the
     * response event stream as well, by applying additional RxJS operators on the stream
     * returned by `next.handle()`.
     *
     * More rarely, an interceptor may handle the request entirely,
     * and compose a new event stream instead of invoking `next.handle()`. This is an
     * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
     *
     * It is also rare but valid for an interceptor to return multiple responses on the
     * event stream for a single request.
     *
     * \@publicApi
     *
     * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
     *
     * \@usageNotes
     *
     * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
     * only in your `AppModule`, and add the interceptors to the root application injector .
     * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
     * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
     * interceptors provided in the root module.
     *
     * @record
     */


    function HttpInterceptor() {}

    if (false) {}
    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler = /*#__PURE__*/function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        _classCallCheck(this, HttpInterceptorHandler);

        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptorHandler, [{
        key: "handle",
        value: function handle(req) {
          return this.interceptor.intercept(req, this.next);
        }
      }]);

      return HttpInterceptorHandler;
    }();

    if (false) {}
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor = /*#__PURE__*/function () {
      function NoopInterceptor() {
        _classCallCheck(this, NoopInterceptor);
      }

      _createClass(NoopInterceptor, [{
        key: "intercept",
        value:
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return NoopInterceptor;
    }();

    NoopInterceptor.??fac = function NoopInterceptor_Factory(t) {
      return new (t || NoopInterceptor)();
    };

    NoopInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: NoopInterceptor,
      factory: NoopInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/jsonp.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */


    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {
      _classCallCheck(this, JsonpCallbackContext);
    };
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend = /*#__PURE__*/function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        _classCallCheck(this, JsonpClientBackend);

        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      _createClass(JsonpClientBackend, [{
        key: "nextCallback",
        value: function nextCallback() {
          return "ng_jsonp_callback_".concat(nextRequestId++);
        }
        /**
         * Processes a JSONP request and returns an event stream of the results.
         * @param {?} req The request object.
         * @return {?} An observable of the response events.
         *
         */

      }, {
        key: "handle",
        value: function handle(req) {
          var _this13 = this;

          // Firstly, check both the method and response type. If either doesn't match
          // then the request was improperly routed here and cannot be handled.
          if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
          } else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
          } // Everything else happens inside the Observable boundary.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.

            /** @type {?} */
            var callback = _this13.nextCallback();
            /** @type {?} */


            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

            /** @type {?} */

            var node = _this13.document.createElement('script');

            node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.

            /** @type {?} */

            var body = null; // Whether the response callback has been called.

            /** @type {?} */

            var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.

            /** @type {?} */

            var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.

            _this13.callbackMap[callback] =
            /**
            * @param {?=} data
            * @return {?}
            */
            function (data) {
              // Data has been received from the JSONP script. Firstly, delete this callback.
              delete _this13.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

              if (cancelled) {
                return;
              } // Set state to indicate data was received.


              body = data;
              finished = true;
            }; // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.

            /** @type {?} */


            var cleanup =
            /**
            * @return {?}
            */
            function cleanup() {
              // Remove the <script> tag if it's still on the page.
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              } // Remove the response callback from the callbackMap (window object in the
              // browser).


              delete _this13.callbackMap[callback];
            }; // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.

            /** @type {?} */


            var onLoad =
            /**
            * @param {?} event
            * @return {?}
            */
            function onLoad(event) {
              // Do nothing if the request has been cancelled.
              if (cancelled) {
                return;
              } // Cleanup the page.


              cleanup(); // Check whether the response callback has run.

              if (!finished) {
                // It hasn't, something went wrong with the request. Return an error via
                // the Observable error path. All JSONP errors have status 0.
                observer.error(new HttpErrorResponse({
                  url: url,
                  status: 0,
                  statusText: 'JSONP Error',
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              } // Success. body either contains the response body or null if none was
              // returned.


              observer.next(new HttpResponse({
                body: body,
                status: 200,
                statusText: 'OK',
                url: url
              })); // Complete the stream, the response is over.

              observer.complete();
            }; // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              // If the request was already cancelled, no need to emit anything.
              if (cancelled) {
                return;
              }

              cleanup(); // Wrap the error in a HttpErrorResponse.

              observer.error(new HttpErrorResponse({
                error: error,
                status: 0,
                statusText: 'JSONP Error',
                url: url
              }));
            }; // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.


            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);

            _this13.document.body.appendChild(node); // The request has now been successfully sent.


            observer.next({
              type: HttpEventType.Sent
            }); // Cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              }
            );
          });
        }
      }]);

      return JsonpClientBackend;
    }();

    JsonpClientBackend.??fac = function JsonpClientBackend_Factory(t) {
      return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    JsonpClientBackend.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: JsonpClientBackend,
      factory: JsonpClientBackend.??fac
    });
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: JsonpCallbackContext
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        _classCallCheck(this, JsonpInterceptor);

        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      _createClass(JsonpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method === 'JSONP') {
            return this.jsonp.handle(
            /** @type {?} */
            req);
          } // Fall through for normal HTTP requests.


          return next.handle(req);
        }
      }]);

      return JsonpInterceptor;
    }();

    JsonpInterceptor.??fac = function JsonpInterceptor_Factory(t) {
      return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](JsonpClientBackend));
    };

    JsonpInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: JsonpInterceptor,
      factory: JsonpInterceptor.??fac
    });
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: JsonpClientBackend
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/xhr.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {
      _classCallCheck(this, XhrFactory);
    };

    if (false) {}
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr = /*#__PURE__*/function () {
      function BrowserXhr() {
        _classCallCheck(this, BrowserXhr);
      }
      /**
       * @return {?}
       */


      _createClass(BrowserXhr, [{
        key: "build",
        value: function build() {
          return (
            /** @type {?} */
            new XMLHttpRequest()
          );
        }
      }]);

      return BrowserXhr;
    }();

    BrowserXhr.??fac = function BrowserXhr_Factory(t) {
      return new (t || BrowserXhr)();
    };

    BrowserXhr.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: BrowserXhr,
      factory: BrowserXhr.??fac
    });
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BrowserXhr, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * Tracks a response from the server that does not yet have a body.
     * @record
     */


    function PartialResponse() {}

    if (false) {}
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend = /*#__PURE__*/function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        _classCallCheck(this, HttpXhrBackend);

        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      _createClass(HttpXhrBackend, [{
        key: "handle",
        value: function handle(req) {
          var _this14 = this;

          // Quick check to give a better error message when a user attempts to use
          // HttpClient.jsonp() without installing the JsonpClientModule
          if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
          } // Everything happens on Observable subscription.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.

            /** @type {?} */
            var xhr = _this14.xhrFactory.build();

            xhr.open(req.method, req.urlWithParams);

            if (!!req.withCredentials) {
              xhr.withCredentials = true;
            } // Add all the requested headers.


            req.headers.forEach(
            /**
            * @param {?} name
            * @param {?} values
            * @return {?}
            */
            function (name, values) {
              return xhr.setRequestHeader(name, values.join(','));
            }); // Add an Accept header if one isn't present already.

            if (!req.headers.has('Accept')) {
              xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            } // Auto-detect the Content-Type header if one isn't present already.


            if (!req.headers.has('Content-Type')) {
              /** @type {?} */
              var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

              if (detectedType !== null) {
                xhr.setRequestHeader('Content-Type', detectedType);
              }
            } // Set the responseType if one was requested.


            if (req.responseType) {
              /** @type {?} */
              var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
              // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
              // xhr.response will be null, and xhr.responseText cannot be accessed to
              // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
              // is parsed by first requesting text and then applying JSON.parse.

              xhr.responseType =
              /** @type {?} */
              responseType !== 'json' ? responseType : 'text';
            } // Serialize the request body if one is present. If not, this will be set to null.

            /** @type {?} */


            var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.

            /** @type {?} */

            var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.

            /** @type {?} */

            var partialFromXhr =
            /**
            * @return {?}
            */
            function partialFromXhr() {
              if (headerResponse !== null) {
                return headerResponse;
              } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

              /** @type {?} */


              var status = xhr.status === 1223 ? 204 : xhr.status;
              /** @type {?} */

              var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

              /** @type {?} */

              var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
              // request URL.

              /** @type {?} */

              var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

              headerResponse = new HttpHeaderResponse({
                headers: headers,
                status: status,
                statusText: statusText,
                url: url
              });
              return headerResponse;
            }; // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.

            /** @type {?} */


            var onLoad =
            /**
            * @return {?}
            */
            function onLoad() {
              // Read response state from the memoized partial data.
              var _partialFromXhr = partialFromXhr(),
                  headers = _partialFromXhr.headers,
                  status = _partialFromXhr.status,
                  statusText = _partialFromXhr.statusText,
                  url = _partialFromXhr.url; // The body will be read out if present.

              /** @type {?} */


              var body = null;

              if (status !== 204) {
                // Use XMLHttpRequest.response if set, responseText otherwise.
                body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
              } // Normalize another potential bug (this one comes from CORS).


              if (status === 0) {
                status = !!body ? 200 : 0;
              } // ok determines whether the response will be transmitted on the event or
              // error channel. Unsuccessful status codes (not 2xx) will always be errors,
              // but a successful status code can still result in an error if the user
              // asked for JSON data and the body cannot be parsed as such.

              /** @type {?} */


              var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
              // will have done that already).

              if (req.responseType === 'json' && typeof body === 'string') {
                // Save the original body, before attempting XSSI prefix stripping.

                /** @type {?} */
                var originalBody = body;
                body = body.replace(XSSI_PREFIX, '');

                try {
                  // Attempt the parse. If it fails, a parse error should be delivered to the user.
                  body = body !== '' ? JSON.parse(body) : null;
                } catch (error) {
                  // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                  // JSON response. Restore the original body (including any XSSI prefix) to deliver
                  // a better error response.
                  body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                  // just isn't JSON. Otherwise, deliver the parsing error to the user.

                  if (ok) {
                    // Even though the response status was 2xx, this is still an error.
                    ok = false; // The parse error contains the text of the body that failed to parse.

                    body =
                    /** @type {?} */
                    {
                      error: error,
                      text: body
                    };
                  }
                }
              }

              if (ok) {
                // A successful response is delivered on the event stream.
                observer.next(new HttpResponse({
                  body: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                })); // The full body has been received and delivered, no further events
                // are possible. This request is complete.

                observer.complete();
              } else {
                // An unsuccessful request is delivered on the error channel.
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                }));
              }
            }; // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              var _partialFromXhr2 = partialFromXhr(),
                  url = _partialFromXhr2.url;
              /** @type {?} */


              var res = new HttpErrorResponse({
                error: error,
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Unknown Error',
                url: url || undefined
              });
              observer.error(res);
            }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.

            /** @type {?} */


            var sentHeaders = false; // The download progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */

            var onDownProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onDownProgress(event) {
              // Send the HttpResponseHeaders event if it hasn't been sent already.
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              } // Start building the download progress event to deliver on the response
              // event stream.

              /** @type {?} */


              var progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              }; // Set the total number of bytes in the event if it's available.

              if (event.lengthComputable) {
                progressEvent.total = event.total;
              } // If the request was for text content and a partial response is
              // available on XMLHttpRequest, include it in the progress event
              // to allow for streaming reads.


              if (req.responseType === 'text' && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              } // Finally, fire the event.


              observer.next(progressEvent);
            }; // The upload progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */


            var onUpProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onUpProgress(event) {
              // Upload progress events are simpler. Begin building the progress
              // event.

              /** @type {?} */
              var progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              }; // If the total number of bytes being uploaded is available, include
              // it.

              if (event.lengthComputable) {
                progress.total = event.total;
              } // Send the event.


              observer.next(progress);
            }; // By default, register for load and error events.


            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

            if (req.reportProgress) {
              // Download progress is always enabled if requested.
              xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener('progress', onUpProgress);
              }
            } // Fire the request, and notify the event stream that it was fired.


            xhr.send(
            /** @type {?} */
            reqBody);
            observer.next({
              type: HttpEventType.Sent
            }); // This is the return from the Observable function, which is the
            // request cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                xhr.abort();
              }
            );
          });
        }
      }]);

      return HttpXhrBackend;
    }();

    HttpXhrBackend.??fac = function HttpXhrBackend_Factory(t) {
      return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](XhrFactory));
    };

    HttpXhrBackend.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: HttpXhrBackend,
      factory: HttpXhrBackend.??fac
    });
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: XhrFactory
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/xsrf.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
      _classCallCheck(this, HttpXsrfTokenExtractor);
    };

    if (false) {}
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        _classCallCheck(this, HttpXsrfCookieExtractor);

        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      _createClass(HttpXsrfCookieExtractor, [{
        key: "getToken",
        value: function getToken() {
          if (this.platform === 'server') {
            return null;
          }
          /** @type {?} */


          var cookieString = this.doc.cookie || '';

          if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["??parseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
          }

          return this.lastToken;
        }
      }]);

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.??fac = function HttpXsrfCookieExtractor_Factory(t) {
      return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](XSRF_COOKIE_NAME));
    };

    HttpXsrfCookieExtractor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: HttpXsrfCookieExtractor,
      factory: HttpXsrfCookieExtractor.??fac
    });
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [XSRF_COOKIE_NAME]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        _classCallCheck(this, HttpXsrfInterceptor);

        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      _createClass(HttpXsrfInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          /** @type {?} */
          var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
          // Non-mutating requests don't require a token, and absolute URLs require special handling
          // anyway as the cookie set
          // on our origin is not the same as the token expected by another origin.

          if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
            return next.handle(req);
          }
          /** @type {?} */


          var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

          if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({
              headers: req.headers.set(this.headerName, token)
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.??fac = function HttpXsrfInterceptor_Factory(t) {
      return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](XSRF_HEADER_NAME));
    };

    HttpXsrfInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: HttpXsrfInterceptor,
      factory: HttpXsrfInterceptor.??fac
    });
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: HttpXsrfTokenExtractor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [XSRF_HEADER_NAME]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler = /*#__PURE__*/function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        _classCallCheck(this, HttpInterceptingHandler);

        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptingHandler, [{
        key: "handle",
        value: function handle(req) {
          if (this.chain === null) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(
            /**
            * @param {?} next
            * @param {?} interceptor
            * @return {?}
            */
            function (next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.backend);
          }

          return this.chain.handle(req);
        }
      }]);

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.??fac = function HttpInterceptingHandler_Factory(t) {
      return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    HttpInterceptingHandler.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: HttpInterceptingHandler,
      factory: HttpInterceptingHandler.??fac
    });
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: HttpBackend
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Constructs an `HttpHandler` that applies interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * Use as a factory function within `HttpClientModule`.
     *
     *
     * @param {?} backend
     * @param {?=} interceptors
     * @return {?}
     */


    function interceptingHandler(backend) {
      var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!interceptors) {
        return backend;
      }

      return interceptors.reduceRight(
      /**
      * @param {?} next
      * @param {?} interceptor
      * @return {?}
      */
      function (next, interceptor) {
        return new HttpInterceptorHandler(next, interceptor);
      }, backend);
    }
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule = /*#__PURE__*/function () {
      function HttpClientXsrfModule() {
        _classCallCheck(this, HttpClientXsrfModule);
      }

      _createClass(HttpClientXsrfModule, null, [{
        key: "disable",
        value:
        /**
         * Disable the default XSRF protection.
         * @return {?}
         */
        function disable() {
          return {
            ngModule: HttpClientXsrfModule,
            providers: [{
              provide: HttpXsrfInterceptor,
              useClass: NoopInterceptor
            }]
          };
        }
        /**
         * Configure XSRF protection.
         * @param {?=} options An object that can specify either or both
         * cookie name or header name.
         * - Cookie name default is `XSRF-TOKEN`.
         * - Header name default is `X-XSRF-TOKEN`.
         *
         * @return {?}
         */

      }, {
        key: "withOptions",
        value: function withOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: HttpClientXsrfModule,
            providers: [options.cookieName ? {
              provide: XSRF_COOKIE_NAME,
              useValue: options.cookieName
            } : [], options.headerName ? {
              provide: XSRF_HEADER_NAME,
              useValue: options.headerName
            } : []]
          };
        }
      }]);

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HttpClientXsrfModule
    });
    HttpClientXsrfModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HttpClientXsrfModule_Factory(t) {
        return new (t || HttpClientXsrfModule)();
      },
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, {
        provide: XSRF_COOKIE_NAME,
        useValue: 'XSRF-TOKEN'
      }, {
        provide: XSRF_HEADER_NAME,
        useValue: 'X-XSRF-TOKEN'
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [HttpXsrfInterceptor, {
            provide: HTTP_INTERCEPTORS,
            useExisting: HttpXsrfInterceptor,
            multi: true
          }, {
            provide: HttpXsrfTokenExtractor,
            useClass: HttpXsrfCookieExtractor
          }, {
            provide: XSRF_COOKIE_NAME,
            useValue: 'XSRF-TOKEN'
          }, {
            provide: XSRF_HEADER_NAME,
            useValue: 'X-XSRF-TOKEN'
          }]
        }]
      }], null, null);
    })();
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */


    var HttpClientModule = function HttpClientModule() {
      _classCallCheck(this, HttpClientModule);
    };

    HttpClientModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HttpClientModule
    });
    HttpClientModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HttpClientModule_Factory(t) {
        return new (t || HttpClientModule)();
      },
      providers: [HttpClient, {
        provide: HttpHandler,
        useClass: HttpInterceptingHandler
      }, HttpXhrBackend, {
        provide: HttpBackend,
        useExisting: HttpXhrBackend
      }, BrowserXhr, {
        provide: XhrFactory,
        useExisting: BrowserXhr
      }],
      imports: [[HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HttpClientModule, {
        imports: [HttpClientXsrfModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          /**
           * Optional configuration for XSRF protection.
           */
          imports: [HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN'
          })],

          /**
           * Configures the [dependency injector](guide/glossary#injector) where it is imported
           * with supporting services for HTTP communications.
           */
          providers: [HttpClient, {
            provide: HttpHandler,
            useClass: HttpInterceptingHandler
          }, HttpXhrBackend, {
            provide: HttpBackend,
            useExisting: HttpXhrBackend
          }, BrowserXhr, {
            provide: XhrFactory,
            useExisting: BrowserXhr
          }]
        }]
      }], null, null);
    })();
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */


    var HttpClientJsonpModule = function HttpClientJsonpModule() {
      _classCallCheck(this, HttpClientJsonpModule);
    };

    HttpClientJsonpModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HttpClientJsonpModule
    });
    HttpClientJsonpModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HttpClientJsonpModule_Factory(t) {
        return new (t || HttpClientJsonpModule)();
      },
      providers: [JsonpClientBackend, {
        provide: JsonpCallbackContext,
        useFactory: jsonpCallbackContext
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JsonpInterceptor,
        multi: true
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [JsonpClientBackend, {
            provide: JsonpCallbackContext,
            useFactory: jsonpCallbackContext
          }, {
            provide: HTTP_INTERCEPTORS,
            useClass: JsonpInterceptor,
            multi: true
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
    \************************************************************************/

  /*! exports provided: MatAnchor, MatButton, MatButtonModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
      return MatAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButton", function () {
      return MatButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
      return MatButtonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default color palette for round buttons (mat-fab and mat-mini-fab)
     * @type {?}
     */


    var _c0 = ["mat-button", ""];
    var _c1 = ["*"];
    var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
    /**
     * List of classes to add to MatButton instances based on host attributes to
     * style as different variants.
     * @type {?}
     */

    var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

    /**
     * \@docs-private
     */

    var MatButtonBase =
    /**
     * @param {?} _elementRef
     */
    function MatButtonBase(_elementRef) {
      _classCallCheck(this, MatButtonBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
    /**
     * Material design button.
     */


    var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
      _inherits(MatButton, _MatButtonMixinBase2);

      var _super4 = _createSuper(MatButton);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _animationMode
       */
      function MatButton(elementRef, _focusMonitor, _animationMode) {
        var _this15;

        _classCallCheck(this, MatButton);

        _this15 = _super4.call(this, elementRef);
        _this15._focusMonitor = _focusMonitor;
        _this15._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */

        _this15.isRoundButton = _this15._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */

        _this15.isIconButton = _this15._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.

        var _iterator = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (_this15._hasHostAttributes(attr)) {
              /** @type {?} */
              _this15._getHostElement().classList.add(attr);
            }
          } // Add a class that applies to all buttons. This makes it easier to target if somebody
          // wants to target all Material buttons. We do it here rather than `host` to ensure that
          // the class is applied to derived classes.

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        elementRef.nativeElement.classList.add('mat-button-base');

        _this15._focusMonitor.monitor(_this15._elementRef, true);

        if (_this15.isRoundButton) {
          _this15.color = DEFAULT_ROUND_BUTTON_COLOR;
        }

        return _this15;
      }
      /**
       * @return {?}
       */


      _createClass(MatButton, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the button.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Gets whether the button has one of the given attributes.
         * @param {...?} attributes
         * @return {?}
         */

      }, {
        key: "_hasHostAttributes",
        value: function _hasHostAttributes() {
          var _this16 = this;

          for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
            attributes[_key] = arguments[_key];
          }

          return attributes.some(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            return _this16._getHostElement().hasAttribute(attribute);
          });
        }
      }]);

      return MatButton;
    }(_MatButtonMixinBase);

    MatButton.??fac = function MatButton_Factory(t) {
      return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatButton.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatButton,
      selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
      viewQuery: function MatButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.ripple = _t.first);
        }
      },
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 3,
      hostBindings: function MatButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color"
      },
      exportAs: ["matButton"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatButton.propDecorators = {
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
          exportAs: 'matButton',
          host: {
            '[attr.disabled]': 'disabled || null',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          inputs: ['disabled', 'disableRipple', 'color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design anchor button.
     */


    var MatAnchor = /*#__PURE__*/function (_MatButton) {
      _inherits(MatAnchor, _MatButton);

      var _super5 = _createSuper(MatAnchor);

      /**
       * @param {?} focusMonitor
       * @param {?} elementRef
       * @param {?} animationMode
       */
      function MatAnchor(focusMonitor, elementRef, animationMode) {
        _classCallCheck(this, MatAnchor);

        return _super5.call(this, elementRef, focusMonitor, animationMode);
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(MatAnchor, [{
        key: "_haltDisabledEvents",
        value: function _haltDisabledEvents(event) {
          // A disabled button shouldn't apply any actions
          if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        }
      }]);

      return MatAnchor;
    }(MatButton);

    MatAnchor.??fac = function MatAnchor_Factory(t) {
      return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatAnchor.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatAnchor,
      selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 5,
      hostBindings: function MatAnchor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MatAnchor_click_HostBindingHandler($event) {
            return ctx._haltDisabledEvents($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex"
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatAnchor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAnchor.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatAnchor.propDecorators = {
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
          exportAs: 'matButton, matAnchor',
          host: {
            // Note that we ignore the user-specified tabindex when it's disabled for
            // consistency with the `mat-button` applied on native buttons where even
            // though they have an index, they're not tabbable.
            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '(click)': '_haltDisabledEvents($event)',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          inputs: ['disabled', 'disableRipple', 'color'],
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatButtonModule = function MatButtonModule() {
      _classCallCheck(this, MatButtonModule);
    };

    MatButtonModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatButtonModule
    });
    MatButtonModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatButtonModule_Factory(t) {
        return new (t || MatButtonModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatButtonModule, {
        declarations: function declarations() {
          return [MatButton, MatAnchor];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatButton, MatAnchor]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=button.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
    \**********************************************************************/

  /*! exports provided: APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, GestureConfig, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, MAT_HAMMER_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, SEP, ShowOnDirtyErrorStateMatcher, VERSION, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ??angular_material_src_material_core_core_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return APR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return AUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return AnimationCurves;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return AnimationDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return DEC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return ErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return FEB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return GestureConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return JAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return JUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return JUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return MAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return MATERIAL_SANITY_CHECKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return MAT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return MAT_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return MAT_DATE_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return MAT_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return MAT_HAMMER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return MAT_LABEL_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return MAT_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return MAT_OPTION_PARENT_COMPONENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return MAT_RIPPLE_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return MAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return MatCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return MatLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return MatLineModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return MatLineSetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return MatNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return MatOptionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return MatOptionSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return MatPseudoCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return MatRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return MatRippleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return NOV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return NativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return OCT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return RippleRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return RippleRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return SEP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return ShowOnDirtyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _countGroupLabelsBeforeOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _getOptionScrollPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return defaultRippleAnimationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return mixinColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return mixinDisableRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return mixinDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return mixinErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return mixinInitialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return mixinTabIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return setLines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??angular_material_src_material_core_core_a", function () {
      return MATERIAL_SANITY_CHECKS_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk */
    "./node_modules/@angular/cdk/fesm2015/cdk.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/version.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Material.
     * @type {?}
     */


    var _c0 = ["*", [["mat-option"], ["ng-container"]]];
    var _c1 = ["*", "mat-option, ng-container"];

    function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-pseudo-checkbox", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
      }
    }

    var _c2 = ["*"];
    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/animation/animation.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     */

    var AnimationCurves = function AnimationCurves() {
      _classCallCheck(this, AnimationCurves);
    };

    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';

    if (false) {}
    /**
     * \@docs-private
     */


    var AnimationDurations = function AnimationDurations() {
      _classCallCheck(this, AnimationDurations);
    };

    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/common-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Private version constant to circumvent test/build issues,
    // i.e. avoid core to depend on the @angular/material primary entry-point
    // Can be removed once the Material primary entry-point no longer
    // re-exports all secondary entry-points

    /** @type {?} */


    var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * \@docs-private
     * @return {?}
     */

    function MATERIAL_SANITY_CHECKS_FACTORY() {
      return true;
    }
    /**
     * Injection token that configures whether the Material sanity checks are enabled.
     * @type {?}
     */


    var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
      providedIn: 'root',
      factory: MATERIAL_SANITY_CHECKS_FACTORY
    });
    /**
     * Object that can be used to configure the sanity checks granularly.
     * @record
     */

    function GranularSanityChecks() {}

    if (false) {}
    /**
     * Module that captures anything that should be loaded and/or run for *all* Angular Material
     * components. This includes Bidi, etc.
     *
     * This module should be imported to each top-level component module (e.g., MatTabsModule).
     */


    var MatCommonModule = /*#__PURE__*/function () {
      /**
       * @param {?} highContrastModeDetector
       * @param {?} sanityChecks
       * @param {?=} document
       */
      function MatCommonModule(highContrastModeDetector, sanityChecks,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, MatCommonModule);

        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
        // in MatCommonModule.

        highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
        // throws an error if we use the `SanityChecks` type directly.


        this._sanityChecks = sanityChecks;

        if (!this._hasDoneGlobalChecks) {
          this._checkDoctypeIsDefined();

          this._checkThemeIsPresent();

          this._checkCdkVersionMatch();

          this._hasDoneGlobalChecks = true;
        }
      }
      /**
       * Access injected document if available or fallback to global document reference
       * @private
       * @return {?}
       */


      _createClass(MatCommonModule, [{
        key: "_getDocument",
        value: function _getDocument() {
          /** @type {?} */
          var doc = this._document || document;
          return typeof doc === 'object' && doc ? doc : null;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();
          /** @type {?} */


          var win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
          return typeof win === 'object' && win ? win : null;
        }
        /**
         * Whether any sanity checks are enabled.
         * @private
         * @return {?}
         */

      }, {
        key: "_checksAreEnabled",
        value: function _checksAreEnabled() {
          return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
        }
        /**
         * Whether the code is running in tests.
         * @private
         * @return {?}
         */

      }, {
        key: "_isTestEnv",
        value: function _isTestEnv() {
          /** @type {?} */
          var window =
          /** @type {?} */
          this._getWindow();

          return window && (window.__karma__ || window.jasmine);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkDoctypeIsDefined",
        value: function _checkDoctypeIsDefined() {
          /** @type {?} */
          var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
          /** @type {?} */
          this._sanityChecks.doctype);
          /** @type {?} */


          var document = this._getDocument();

          if (isEnabled && document && !document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkThemeIsPresent",
        value: function _checkThemeIsPresent() {
          // We need to assert that the `body` is defined, because these checks run very early
          // and the `body` won't be defined if the consumer put their scripts in the `head`.

          /** @type {?} */
          var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !
          /** @type {?} */
          this._sanityChecks.theme;
          /** @type {?} */

          var document = this._getDocument();

          if (isDisabled || !document || !document.body || typeof getComputedStyle !== 'function') {
            return;
          }
          /** @type {?} */


          var testElement = document.createElement('div');
          testElement.classList.add('mat-theme-loaded-marker');
          document.body.appendChild(testElement);
          /** @type {?} */

          var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
          // Firefox, the computed style is null if an application is running inside of a hidden iframe.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

          if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
          }

          document.body.removeChild(testElement);
        }
        /**
         * Checks whether the material version matches the cdk version
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCdkVersionMatch",
        value: function _checkCdkVersionMatch() {
          /** @type {?} */
          var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
          /** @type {?} */
          this._sanityChecks.version);

          if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
          }
        }
      }]);

      return MatCommonModule;
    }();

    MatCommonModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatCommonModule
    });
    MatCommonModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatCommonModule_Factory(t) {
        return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
    });
    /** @nocollapse */

    MatCommonModule.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MATERIAL_SANITY_CHECKS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatCommonModule, {
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/disabled.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanDisable() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisabled(base) {
      return /*#__PURE__*/function (_base2) {
        _inherits(_class, _base2);

        var _super6 = _createSuper(_class);

        /**
         * @param {...?} args
         */
        function _class() {
          var _this17;

          _classCallCheck(this, _class);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this17 = _super6.call.apply(_super6, [this].concat(args));
          _this17._disabled = false;
          return _this17;
        }
        /**
         * @return {?}
         */


        _createClass(_class, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return _class;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/color.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @record
     */


    function CanColor() {}

    if (false) {}
    /**
     * \@docs-private
     * @record
     */


    function HasElementRef() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `color` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultColor
     * @return {?}
     */


    function mixinColor(base, defaultColor) {
      return /*#__PURE__*/function (_base3) {
        _inherits(_class2, _base3);

        var _super7 = _createSuper(_class2);

        /**
         * @param {...?} args
         */
        function _class2() {
          var _this18;

          _classCallCheck(this, _class2);

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this18 = _super7.call.apply(_super7, [this].concat(args)); // Set the default color that can be specified from the mixin.

          _this18.color = defaultColor;
          return _this18;
        }
        /**
         * @return {?}
         */


        _createClass(_class2, [{
          key: "color",
          get: function get() {
            return this._color;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var colorPalette = value || defaultColor;

            if (colorPalette !== this._color) {
              if (this._color) {
                this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
              }

              if (colorPalette) {
                this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
              }

              this._color = colorPalette;
            }
          }
        }]);

        return _class2;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/disable-ripple.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanDisableRipple() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `disableRipple` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisableRipple(base) {
      return /*#__PURE__*/function (_base4) {
        _inherits(_class3, _base4);

        var _super8 = _createSuper(_class3);

        /**
         * @param {...?} args
         */
        function _class3() {
          var _this19;

          _classCallCheck(this, _class3);

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          _this19 = _super8.call.apply(_super8, [this].concat(args));
          _this19._disableRipple = false;
          return _this19;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */


        _createClass(_class3, [{
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return _class3;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/tabindex.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @record
     */


    function HasTabIndex() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `tabIndex` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultTabIndex
     * @return {?}
     */


    function mixinTabIndex(base) {
      var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return /*#__PURE__*/function (_base5) {
        _inherits(_class4, _base5);

        var _super9 = _createSuper(_class4);

        /**
         * @param {...?} args
         */
        function _class4() {
          var _this20;

          _classCallCheck(this, _class4);

          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          _this20 = _super9.call.apply(_super9, [this].concat(args));
          _this20._tabIndex = defaultTabIndex;
          return _this20;
        }
        /**
         * @return {?}
         */


        _createClass(_class4, [{
          key: "tabIndex",
          get: function get() {
            return this.disabled ? -1 : this._tabIndex;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
          }
        }]);

        return _class4;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/error-state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanUpdateErrorState() {}

    if (false) {}
    /**
     * \@docs-private
     * @record
     */


    function HasErrorState() {}

    if (false) {}
    /**
     * Mixin to augment a directive with updateErrorState method.
     * For component with `errorState` and need to update `errorState`.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinErrorState(base) {
      return /*#__PURE__*/function (_base6) {
        _inherits(_class5, _base6);

        var _super10 = _createSuper(_class5);

        /**
         * @param {...?} args
         */
        function _class5() {
          var _this21;

          _classCallCheck(this, _class5);

          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          _this21 = _super10.call.apply(_super10, [this].concat(args));
          /**
           * Whether the component is in an error state.
           */

          _this21.errorState = false;
          /**
           * Stream that emits whenever the state of the input changes such that the wrapping
           * `MatFormField` needs to run change detection.
           */

          _this21.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          return _this21;
        }
        /**
         * @return {?}
         */


        _createClass(_class5, [{
          key: "updateErrorState",
          value: function updateErrorState() {
            /** @type {?} */
            var oldState = this.errorState;
            /** @type {?} */

            var parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */

            var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */

            var control = this.ngControl ?
            /** @type {?} */
            this.ngControl.control : null;
            /** @type {?} */

            var newState = matcher.isErrorState(control, parent);

            if (newState !== oldState) {
              this.errorState = newState;
              this.stateChanges.next();
            }
          }
        }]);

        return _class5;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/initialized.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin that adds an initialized property to a directive which, when subscribed to, will emit a
     * value once markInitialized has been called, which should be done during the ngOnInit function.
     * If the subscription is made after it has already been marked as initialized, then it will trigger
     * an emit immediately.
     * \@docs-private
     * @record
     */


    function HasInitialized() {}

    if (false) {}
    /**
     * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinInitialized(base) {
      return /*#__PURE__*/function (_base7) {
        _inherits(_class6, _base7);

        var _super11 = _createSuper(_class6);

        /**
         * @param {...?} args
         */
        function _class6() {
          var _this22;

          _classCallCheck(this, _class6);

          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          _this22 = _super11.call.apply(_super11, [this].concat(args));
          /**
           * Whether this directive has been marked as initialized.
           */

          _this22._isInitialized = false;
          /**
           * List of subscribers that subscribed before the directive was initialized. Should be notified
           * during _markInitialized. Set to null after pending subscribers are notified, and should
           * not expect to be populated after.
           */

          _this22._pendingSubscribers = [];
          /**
           * Observable stream that emits when the directive initializes. If already initialized, the
           * subscriber is stored to be notified once _markInitialized is called.
           */

          _this22.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](
          /**
          * @param {?} subscriber
          * @return {?}
          */
          function (subscriber) {
            // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
            // when _markInitialized is called.
            if (_this22._isInitialized) {
              _this22._notifySubscriber(subscriber);
            } else {
              /** @type {?} */
              _this22._pendingSubscribers.push(subscriber);
            }
          });
          return _this22;
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */


        _createClass(_class6, [{
          key: "_markInitialized",
          value: function _markInitialized() {
            if (this._isInitialized) {
              throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
            }

            this._isInitialized = true;

            /** @type {?} */
            this._pendingSubscribers.forEach(this._notifySubscriber);

            this._pendingSubscribers = null;
          }
          /**
           * Emits and completes the subscriber stream (should only emit once).
           * @param {?} subscriber
           * @return {?}
           */

        }, {
          key: "_notifySubscriber",
          value: function _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
          }
        }]);

        return _class6;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/date-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
      providedIn: 'root',
      factory: MAT_DATE_LOCALE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DATE_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
    }
    /**
     * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
     * If you are importing and providing this in your code you can simply remove it.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */


    var MAT_DATE_LOCALE_PROVIDER = {
      provide: MAT_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
    };
    /**
     * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
     * @abstract
     * @template D
     */

    var DateAdapter = /*#__PURE__*/function () {
      function DateAdapter() {
        _classCallCheck(this, DateAdapter);

        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */


      _createClass(DateAdapter, [{
        key: "localeChanges",
        get: function get() {
          return this._localeChanges;
        }
        /**
         * Attempts to deserialize a value to a valid date object. This is different from parsing in that
         * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
         * string). The default implementation does not allow any deserialization, it simply checks that
         * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
         * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
         * support passing values from your backend directly to these properties by overriding this method
         * to also deserialize the format used by your backend.
         * @param {?} value The value to be deserialized into a date object.
         * @return {?} The deserialized date object, either a valid date, null if the value can be
         *     deserialized into a null date (e.g. the empty string), or an invalid date.
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
          }

          return this.invalid();
        }
        /**
         * Sets the locale used for all dates.
         * @param {?} locale The new locale.
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.locale = locale;

          this._localeChanges.next();
        }
        /**
         * Compares two dates.
         * @param {?} first The first date to compare.
         * @param {?} second The second date to compare.
         * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
         *     a number greater than 0 if the first date is later.
         */

      }, {
        key: "compareDate",
        value: function compareDate(first, second) {
          return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
        }
        /**
         * Checks if two dates are equal.
         * @param {?} first The first date to check.
         * @param {?} second The second date to check.
         * @return {?} Whether the two dates are equal.
         *     Null dates are considered equal to other null dates.
         */

      }, {
        key: "sameDate",
        value: function sameDate(first, second) {
          if (first && second) {
            /** @type {?} */
            var firstValid = this.isValid(first);
            /** @type {?} */

            var secondValid = this.isValid(second);

            if (firstValid && secondValid) {
              return !this.compareDate(first, second);
            }

            return firstValid == secondValid;
          }

          return first == second;
        }
        /**
         * Clamp the given date between min and max dates.
         * @param {?} date The date to clamp.
         * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
         * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
         * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
         *     otherwise `date`.
         */

      }, {
        key: "clampDate",
        value: function clampDate(date, min, max) {
          if (min && this.compareDate(date, min) < 0) {
            return min;
          }

          if (max && this.compareDate(date, max) > 0) {
            return max;
          }

          return date;
        }
      }]);

      return DateAdapter;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/native-date-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      SUPPORTS_INTL_API = typeof Intl != 'undefined';
    } catch (_a) {
      SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    var ??0 =
    /**
    * @param {?} i
    * @return {?}
    */
    function ??0(i) {
      return String(i + 1);
    };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_DATE_NAMES = range(31, ??0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
      _inherits(NativeDateAdapter, _DateAdapter);

      var _super12 = _createSuper(NativeDateAdapter);

      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      function NativeDateAdapter(matDateLocale, platform) {
        var _thisSuper, _this23;

        _classCallCheck(this, NativeDateAdapter);

        _this23 = _super12.call(this);
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        _this23.useUtcForDisplay = true;

        _get((_thisSuper = _assertThisInitialized(_this23), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


        _this23.useUtcForDisplay = !platform.TRIDENT;
        _this23._clampDate = platform.TRIDENT || platform.EDGE;
        return _this23;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      _createClass(NativeDateAdapter, [{
        key: "getYear",
        value: function getYear(date) {
          return date.getFullYear();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return date.getMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return date.getDate();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return date.getDay();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          var _this24 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              month: style,
              timeZone: 'utc'
            });
            return range(12,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this24._stripDirectionalityCharacters(_this24._format(dtf, new Date(2017, i, 1)));
            });
          }

          return DEFAULT_MONTH_NAMES[style];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          var _this25 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              day: 'numeric',
              timeZone: 'utc'
            });
            return range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this25._stripDirectionalityCharacters(_this25._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DATE_NAMES;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          var _this26 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              weekday: style,
              timeZone: 'utc'
            });
            return range(7,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this26._stripDirectionalityCharacters(_this26._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              year: 'numeric',
              timeZone: 'utc'
            });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return String(this.getYear(date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
          return 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return new Date(date.getTime());
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Check for invalid month and date (except upper bound on date which we have to check after
          // creating the Date).
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


          if (result.getMonth() != month) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return new Date();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value) {
          // We have no way using the native JS Date to set the parse format or locale, so we ignore these
          // parameters.
          if (typeof value == 'number') {
            return new Date(value);
          }

          return value ? new Date(Date.parse(value)) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
          }

          if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
              date = this.clone(date);
              date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }

            displayFormat = Object.assign(Object.assign({}, displayFormat), {
              timeZone: 'utc'
            });
            /** @type {?} */

            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return this._stripDirectionalityCharacters(date.toDateString());
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.addCalendarMonths(date, years * 12);
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          /** @type {?} */
          var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
          // month. In this case we want to go to the last day of the desired month.
          // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
          // guarantee this.


          if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
          }

          return newDate;
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (typeof value === 'string') {
            if (!value) {
              return null;
            } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.


            if (ISO_8601_REGEX.test(value)) {
              /** @type {?} */
              var date = new Date(value);

              if (this.isValid(date)) {
                return date;
              }
            }
          }

          return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return obj instanceof Date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return !isNaN(date.getTime());
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return new Date(NaN);
        }
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_createDateWithOverflow",
        value: function _createDateWithOverflow(year, month, date) {
          /** @type {?} */
          var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
          // abbreviations for 19xx.

          if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
          }

          return result;
        }
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */

      }, {
        key: "_2digit",
        value: function _2digit(n) {
          return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */

      }, {
        key: "_stripDirectionalityCharacters",
        value: function _stripDirectionalityCharacters(str) {
          return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */

      }, {
        key: "_format",
        value: function _format(dtf, date) {
          /** @type {?} */
          var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
          return dtf.format(d);
        }
      }]);

      return NativeDateAdapter;
    }(DateAdapter);

    NativeDateAdapter.??fac = function NativeDateAdapter_Factory(t) {
      return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
    };

    NativeDateAdapter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: NativeDateAdapter,
      factory: NativeDateAdapter.??fac
    });
    /** @nocollapse */

    NativeDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_DATE_LOCALE]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NativeDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/native-date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NativeDateModule = function NativeDateModule() {
      _classCallCheck(this, NativeDateModule);
    };

    NativeDateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: NativeDateModule
    });
    NativeDateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function NativeDateModule_Factory(t) {
        return new (t || NativeDateModule)();
      },
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }],
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NativeDateModule, {
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
          providers: [{
            provide: DateAdapter,
            useClass: NativeDateAdapter
          }]
        }]
      }], null, null);
    })();

    var ??0$1 = MAT_NATIVE_DATE_FORMATS;

    var MatNativeDateModule = function MatNativeDateModule() {
      _classCallCheck(this, MatNativeDateModule);
    };

    MatNativeDateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatNativeDateModule
    });
    MatNativeDateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatNativeDateModule_Factory(t) {
        return new (t || MatNativeDateModule)();
      },
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: ??0$1
      }],
      imports: [[NativeDateModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatNativeDateModule, {
        imports: [NativeDateModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatNativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [NativeDateModule],
          providers: [{
            provide: MAT_DATE_FORMATS,
            useValue: ??0$1
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/error/error-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Error state matcher that matches when a control is invalid and dirty.
     */


    var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
      function ShowOnDirtyErrorStateMatcher() {
        _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
      }

      _createClass(ShowOnDirtyErrorStateMatcher, [{
        key: "isErrorState",
        value:
        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        function isErrorState(control, form) {
          return !!(control && control.invalid && (control.dirty || form && form.submitted));
        }
      }]);

      return ShowOnDirtyErrorStateMatcher;
    }();

    ShowOnDirtyErrorStateMatcher.??fac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
      return new (t || ShowOnDirtyErrorStateMatcher)();
    };

    ShowOnDirtyErrorStateMatcher.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ShowOnDirtyErrorStateMatcher,
      factory: ShowOnDirtyErrorStateMatcher.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * Provider that defines how form controls behave with regards to displaying error messages.
     */


    var ErrorStateMatcher = /*#__PURE__*/function () {
      function ErrorStateMatcher() {
        _classCallCheck(this, ErrorStateMatcher);
      }

      _createClass(ErrorStateMatcher, [{
        key: "isErrorState",
        value:
        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        function isErrorState(control, form) {
          return !!(control && control.invalid && (control.touched || form && form.submitted));
        }
      }]);

      return ErrorStateMatcher;
    }();

    ErrorStateMatcher.??fac = function ErrorStateMatcher_Factory(t) {
      return new (t || ErrorStateMatcher)();
    };
    /** @nocollapse */


    ErrorStateMatcher.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
      factory: function ErrorStateMatcher_Factory() {
        return new ErrorStateMatcher();
      },
      token: ErrorStateMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/gestures/gesture-annotations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Stripped-down HammerJS annotations to be used within Material, which are necessary,
     * because HammerJS is an optional dependency. For the full annotations see:
     * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hammerjs/index.d.ts
     */

    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerInput() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerStatic() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function Recognizer() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function RecognizerStatic() {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerInstance() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerManager() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/gestures/gesture-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to provide options to the Hammerjs instance.
     * More info at http://hammerjs.github.io/api/.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @type {?}
     */


    var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
    /** @type {?} */

    var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

    var ??0$2 =
    /**
    * @return {?}
    */
    function ??0$2() {},
        ??1 =
    /**
    * @return {?}
    */
    function ??1() {};
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     * @type {?}
     */


    var noopHammerInstance = {
      on: ??0$2,
      off: ??1
    };
    /**
     * Adjusts configuration of our gesture library, Hammer.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     */

    var GestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(GestureConfig, _angular_platform_bro);

      var _super13 = _createSuper(GestureConfig);

      /**
       * @param {?=} _hammerOptions
       * @param {?=} _commonModule
       */
      function GestureConfig(_hammerOptions, _commonModule) {
        var _this27;

        _classCallCheck(this, GestureConfig);

        _this27 = _super13.call(this);
        _this27._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */

        _this27.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
        return _this27;
      }
      /**
       * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
       *
       * Our gesture names come from the Material Design gestures spec:
       * https://material.io/design/#gestures-touch-mechanics
       *
       * More information on default recognizers can be found in Hammer docs:
       * http://hammerjs.github.io/recognizer-pan/
       * http://hammerjs.github.io/recognizer-press/
       *
       * @param {?} element Element to which to assign the new HammerJS gestures.
       * @return {?} Newly-created HammerJS instance.
       */


      _createClass(GestureConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          /** @type {?} */
          var hammer = typeof window !== 'undefined' ?
          /** @type {?} */
          window.Hammer : null;

          if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
          }
          /** @type {?} */


          var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

          /** @type {?} */

          var pan = new hammer.Pan();
          /** @type {?} */

          var swipe = new hammer.Swipe();
          /** @type {?} */

          var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
          // Otherwise the previous `recognizeWith` will be dropped.
          // TODO: Confirm threshold numbers with Material Design UX Team

          /** @type {?} */

          var slide = this._createRecognizer(pan, {
            event: 'slide',
            threshold: 0
          }, swipe);
          /** @type {?} */


          var longpress = this._createRecognizer(press, {
            event: 'longpress',
            time: 500
          }); // Overwrite the default `pan` event to use the swipe event.


          pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
          // accidentally reset the longpress recognizer. In order to make sure that the two
          // recognizers can run simultaneously but don't affect each other, we allow the slide
          // recognizer to recognize while a longpress is being processed.
          // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

          longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

          mc.add([swipe, press, pan, slide, longpress]);
          return (
            /** @type {?} */
            mc
          );
        }
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @private
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */

      }, {
        key: "_createRecognizer",
        value: function _createRecognizer(base, options) {
          /** @type {?} */
          var recognizer = new
          /** @type {?} */
          base.constructor(options);

          for (var _len8 = arguments.length, inheritances = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
            inheritances[_key8 - 2] = arguments[_key8];
          }

          inheritances.push(base);
          inheritances.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return recognizer.recognizeWith(item);
          });
          return recognizer;
        }
      }]);

      return GestureConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"]);

    GestureConfig.??fac = function GestureConfig_Factory(t) {
      return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](MatCommonModule, 8));
    };

    GestureConfig.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: GestureConfig,
      factory: GestureConfig.??fac
    });
    /** @nocollapse */

    GestureConfig.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_HAMMER_OPTIONS]
        }]
      }, {
        type: MatCommonModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GestureConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_HAMMER_OPTIONS]
          }]
        }, {
          type: MatCommonModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/line/line.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shared directive to count lines inside a text area, such as a list item.
     * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
     * counted by checking the query list's length.
     */


    var MatLine = function MatLine() {
      _classCallCheck(this, MatLine);
    };

    MatLine.??fac = function MatLine_Factory(t) {
      return new (t || MatLine)();
    };

    MatLine.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatLine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-line], [matLine]',
          host: {
            'class': 'mat-line'
          }
        }]
      }], null, null);
    })();
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @param {?} lines
     * @param {?} element
     * @param {?=} prefix
     * @return {?}
     */


    function setLines(lines, element) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
      // Note: doesn't need to unsubscribe, because `changes`
      // gets completed by Angular when the view is destroyed.
      lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(lines)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref3) {
        var length = _ref3.length;
        setClass(element, "".concat(prefix, "-2-line"), false);
        setClass(element, "".concat(prefix, "-3-line"), false);
        setClass(element, "".concat(prefix, "-multi-line"), false);

        if (length === 2 || length === 3) {
          setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
        } else if (length > 3) {
          setClass(element, "".concat(prefix, "-multi-line"), true);
        }
      });
    }
    /**
     * Adds or removes a class from an element.
     * @param {?} element
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */


    function setClass(element, className, isAdd) {
      /** @type {?} */
      var classList = element.nativeElement.classList;
      isAdd ? classList.add(className) : classList.remove(className);
    }
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @deprecated Use `setLines` instead.
     * \@breaking-change 8.0.0
     */


    var MatLineSetter =
    /**
     * @param {?} lines
     * @param {?} element
     */
    function MatLineSetter(lines, element) {
      _classCallCheck(this, MatLineSetter);

      setLines(lines, element);
    };

    var MatLineModule = function MatLineModule() {
      _classCallCheck(this, MatLineModule);
    };

    MatLineModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatLineModule
    });
    MatLineModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatLineModule_Factory(t) {
        return new (t || MatLineModule)();
      },
      imports: [[MatCommonModule], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatLineModule, {
        declarations: [MatLine],
        imports: [MatCommonModule],
        exports: [MatLine, MatCommonModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatLineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule],
          declarations: [MatLine]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @enum {number} */


    var RippleState = {
      FADING_IN: 0,
      VISIBLE: 1,
      FADING_OUT: 2,
      HIDDEN: 3
    };
    /**
     * Reference to a previously launched ripple element.
     */

    var RippleRef = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} element
       * @param {?} config
       */
      function RippleRef(_renderer, element, config) {
        _classCallCheck(this, RippleRef);

        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */

        this.state = 3
        /* HIDDEN */
        ;
      }
      /**
       * Fades out the ripple element.
       * @return {?}
       */


      _createClass(RippleRef, [{
        key: "fadeOut",
        value: function fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }]);

      return RippleRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple-renderer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface that describes the configuration for the animation of a ripple.
     * There are two animation phases with different durations for the ripples.
     * @record
     */


    function RippleAnimationConfig() {}

    if (false) {}
    /**
     * Interface that describes the target for launching ripples.
     * It defines the ripple configuration and disabled state for interaction ripples.
     * \@docs-private
     * @record
     */


    function RippleTarget() {}

    if (false) {}
    /**
     * Default ripple animation configuration for ripples without an explicit
     * animation config specified.
     * @type {?}
     */


    var defaultRippleAnimationConfig = {
      enterDuration: 450,
      exitDuration: 400
    };
    /**
     * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
     * events to avoid synthetic mouse events.
     * @type {?}
     */

    var ignoreMouseEventsTimeout = 800;
    /**
     * Options that apply to all the event listeners that are bound by the ripple renderer.
     * @type {?}
     */

    var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Events that signal that the pointer is down.
     * @type {?}
     */

    var pointerDownEvents = ['mousedown', 'touchstart'];
    /**
     * Events that signal that the pointer is up.
     * @type {?}
     */

    var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
    /**
     * Helper service that performs DOM manipulations. Not intended to be used outside this module.
     * The constructor takes a reference to the ripple directive's host element and a map of DOM
     * event handlers to be installed on the element that triggers ripple animations.
     * This will eventually become a custom renderer once Angular support exists.
     * \@docs-private
     */

    var RippleRenderer = /*#__PURE__*/function () {
      /**
       * @param {?} _target
       * @param {?} _ngZone
       * @param {?} elementOrElementRef
       * @param {?} platform
       */
      function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
        _classCallCheck(this, RippleRenderer);

        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */

        this._isPointerDown = false;
        /**
         * Set of currently active ripple references.
         */

        this._activeRipples = new Set();
        /**
         * Whether pointer-up event listeners have been registered.
         */

        this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

        if (platform.isBrowser) {
          this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
       * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param {?=} config Extra ripple options.
       * @return {?}
       */


      _createClass(RippleRenderer, [{
        key: "fadeInRipple",
        value: function fadeInRipple(x, y) {
          var _this28 = this;

          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
          /** @type {?} */


          var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

          if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
          }
          /** @type {?} */


          var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
          /** @type {?} */

          var offsetX = x - containerRect.left;
          /** @type {?} */

          var offsetY = y - containerRect.top;
          /** @type {?} */

          var duration = animationConfig.enterDuration;
          /** @type {?} */

          var ripple = document.createElement('div');
          ripple.classList.add('mat-ripple-element');
          ripple.style.left = "".concat(offsetX - radius, "px");
          ripple.style.top = "".concat(offsetY - radius, "px");
          ripple.style.height = "".concat(radius * 2, "px");
          ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
          // set, the default color will be applied through the ripple theme styles.

          if (config.color != null) {
            ripple.style.backgroundColor = config.color;
          }

          ripple.style.transitionDuration = "".concat(duration, "ms");

          this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
          // ripple elements. This is critical because then the `scale` would not animate properly.


          enforceStyleRecalculation(ripple);
          ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

          /** @type {?} */

          var rippleRef = new RippleRef(this, ripple, config);
          rippleRef.state = 0
          /* FADING_IN */
          ; // Add the ripple reference to the list of all active ripples.

          this._activeRipples.add(rippleRef);

          if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
          } // Wait for the ripple element to be completely faded in.
          // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var isMostRecentTransientRipple = rippleRef === _this28._mostRecentTransientRipple;
            rippleRef.state = 1
            /* VISIBLE */
            ; // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.

            if (!config.persistent && (!isMostRecentTransientRipple || !_this28._isPointerDown)) {
              rippleRef.fadeOut();
            }
          }, duration);

          return rippleRef;
        }
        /**
         * Fades out a ripple reference.
         * @param {?} rippleRef
         * @return {?}
         */

      }, {
        key: "fadeOutRipple",
        value: function fadeOutRipple(rippleRef) {
          /** @type {?} */
          var wasActive = this._activeRipples["delete"](rippleRef);

          if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
          } // Clear out the cached bounding rect if we have no more ripples.


          if (!this._activeRipples.size) {
            this._containerRect = null;
          } // For ripples that are not active anymore, don't re-run the fade-out animation.


          if (!wasActive) {
            return;
          }
          /** @type {?} */


          var rippleEl = rippleRef.element;
          /** @type {?} */

          var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
          rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
          rippleEl.style.opacity = '0';
          rippleRef.state = 2
          /* FADING_OUT */
          ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            rippleRef.state = 3
            /* HIDDEN */
            ;

            /** @type {?} */
            rippleEl.parentNode.removeChild(rippleEl);
          }, animationConfig.exitDuration);
        }
        /**
         * Fades out all currently active ripples.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            return ripple.fadeOut();
          });
        }
        /**
         * Sets up the trigger event listeners
         * @param {?} elementOrElementRef
         * @return {?}
         */

      }, {
        key: "setupTriggerEvents",
        value: function setupTriggerEvents(elementOrElementRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

          if (!element || element === this._triggerElement) {
            return;
          } // Remove all previously registered event listeners from the trigger element.


          this._removeTriggerEvents();

          this._triggerElement = element;

          this._registerEvents(pointerDownEvents);
        }
        /**
         * Handles all registered events.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleEvent",
        value: function handleEvent(event) {
          if (event.type === 'mousedown') {
            this._onMousedown(
            /** @type {?} */
            event);
          } else if (event.type === 'touchstart') {
            this._onTouchStart(
            /** @type {?} */
            event);
          } else {
            this._onPointerUp();
          } // If pointer-up events haven't been registered yet, do so now.
          // We do this on-demand in order to reduce the total number of event listeners
          // registered by the ripples, which speeds up the rendering time for large UIs.


          if (!this._pointerUpEventsRegistered) {
            this._registerEvents(pointerUpEvents);

            this._pointerUpEventsRegistered = true;
          }
        }
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onMousedown",
        value: function _onMousedown(event) {
          // Screen readers will fire fake mouse events for space/enter. Skip launching a
          // ripple in this case for consistency with the non-screen-reader experience.

          /** @type {?} */
          var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
          /** @type {?} */

          var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

          if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
          }
        }
        /**
         * Function being called whenever the trigger is being pressed using touch.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onTouchStart",
        value: function _onTouchStart(event) {
          if (!this._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.

            /** @type {?} */

            var touches = event.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        }
        /**
         * Function being called whenever the trigger is being released.
         * @private
         * @return {?}
         */

      }, {
        key: "_onPointerUp",
        value: function _onPointerUp() {
          if (!this._isPointerDown) {
            return;
          }

          this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

            /** @type {?} */
            var isVisible = ripple.state === 1
            /* VISIBLE */
            || ripple.config.terminateOnPointerUp && ripple.state === 0
            /* FADING_IN */
            ;

            if (!ripple.config.persistent && isVisible) {
              ripple.fadeOut();
            }
          });
        }
        /**
         * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
         * @private
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "_runTimeoutOutsideZone",
        value: function _runTimeoutOutsideZone(fn) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(fn, delay);
          });
        }
        /**
         * Registers event listeners for a given list of events.
         * @private
         * @param {?} eventTypes
         * @return {?}
         */

      }, {
        key: "_registerEvents",
        value: function _registerEvents(eventTypes) {
          var _this29 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            eventTypes.forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this29._triggerElement.addEventListener(type, _this29, passiveEventOptions);
            });
          });
        }
        /**
         * Removes previously registered event listeners from the trigger element.
         * @return {?}
         */

      }, {
        key: "_removeTriggerEvents",
        value: function _removeTriggerEvents() {
          var _this30 = this;

          if (this._triggerElement) {
            pointerDownEvents.forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this30._triggerElement.removeEventListener(type, _this30, passiveEventOptions);
            });

            if (this._pointerUpEventsRegistered) {
              pointerUpEvents.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                /** @type {?} */
                _this30._triggerElement.removeEventListener(type, _this30, passiveEventOptions);
              });
            }
          }
        }
      }]);

      return RippleRenderer;
    }();

    if (false) {}
    /**
     * Enforces a style recalculation of a DOM element by computing its styles.
     * @param {?} element
     * @return {?}
     */


    function enforceStyleRecalculation(element) {
      // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
      // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
      // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      window.getComputedStyle(element).getPropertyValue('opacity');
    }
    /**
     * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */


    function distanceToFurthestCorner(x, y, rect) {
      /** @type {?} */
      var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
      /** @type {?} */

      var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
      return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Configurable options for `matRipple`.
     * @record
     */


    function RippleGlobalOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to specify the global ripple options.
     * @type {?}
     */


    var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

    var MatRipple = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} globalOptions
       * @param {?=} _animationMode
       */
      function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
        _classCallCheck(this, MatRipple);

        this._elementRef = _elementRef;
        this._animationMode = _animationMode;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */

        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */

        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
      }
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       * @return {?}
       */


      _createClass(MatRipple, [{
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = value;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         * @return {?}
         */

      }, {
        key: "trigger",
        get: function get() {
          return this._trigger || this._elementRef.nativeElement;
        }
        /**
         * @param {?} trigger
         * @return {?}
         */
        ,
        set: function set(trigger) {
          this._trigger = trigger;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._isInitialized = true;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        /**
         * Fades out all currently showing ripple elements.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        /**
         * Ripple configuration from the directive's input values.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "rippleConfig",
        get: function get() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
              enterDuration: 0,
              exitDuration: 0
            } : {}), this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
          };
        }
        /**
         * Whether ripples on pointer-down are disabled or not.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || !!this._globalOptions.disabled;
        }
        /**
         * Sets up the trigger event listeners if ripples are enabled.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupTriggerEventsIfEnabled",
        value: function _setupTriggerEventsIfEnabled() {
          if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
          }
        }
        /**
         * Launches a manual ripple at the specified coordinated or just by the ripple config.
         * @param {?} configOrX
         * @param {?=} y
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "launch",
        value: function launch(configOrX) {
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var config = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
          } else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
          }
        }
      }]);

      return MatRipple;
    }();

    MatRipple.??fac = function MatRipple_Factory(t) {
      return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatRipple.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        radius: ["matRippleRadius", "radius"],
        disabled: ["matRippleDisabled", "disabled"],
        trigger: ["matRippleTrigger", "trigger"],
        color: ["matRippleColor", "color"],
        unbounded: ["matRippleUnbounded", "unbounded"],
        centered: ["matRippleCentered", "centered"],
        animation: ["matRippleAnimation", "animation"]
      },
      exportAs: ["matRipple"]
    });
    /** @nocollapse */

    MatRipple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_RIPPLE_GLOBAL_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatRipple.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleColor']
      }],
      unbounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleUnbounded']
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleCentered']
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleRadius']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleAnimation']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleDisabled']
      }],
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleTrigger']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-ripple], [matRipple]',
          exportAs: 'matRipple',
          host: {
            'class': 'mat-ripple',
            '[class.mat-ripple-unbounded]': 'unbounded'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatRippleModule = function MatRippleModule() {
      _classCallCheck(this, MatRippleModule);
    };

    MatRippleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatRippleModule
    });
    MatRippleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatRippleModule_Factory(t) {
        return new (t || MatRippleModule)();
      },
      imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatRippleModule, {
        declarations: function declarations() {
          return [MatRipple];
        },
        imports: function imports() {
          return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
        },
        exports: function exports() {
          return [MatRipple, MatCommonModule];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatRippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
          exports: [MatRipple, MatCommonModule],
          declarations: [MatRipple]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/selection/pseudo-checkbox/pseudo-checkbox.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Component that shows a simplified checkbox without including any kind of "real" checkbox.
     * Meant to be used when the checkbox is purely decorative and a large number of them will be
     * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
     * Note that theming is meant to be handled by the parent element, e.g.
     * `mat-primary .mat-pseudo-checkbox`.
     *
     * Note that this component will be completely invisible to screen-reader users. This is *not*
     * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
     * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
     * of more complex components that appropriately handle selected / checked state.
     * \@docs-private
     */


    var MatPseudoCheckbox =
    /**
     * @param {?=} _animationMode
     */
    function MatPseudoCheckbox(_animationMode) {
      _classCallCheck(this, MatPseudoCheckbox);

      this._animationMode = _animationMode;
      /**
       * Display state of the checkbox.
       */

      this.state = 'unchecked';
      /**
       * Whether the checkbox is disabled.
       */

      this.disabled = false;
    };

    MatPseudoCheckbox.??fac = function MatPseudoCheckbox_Factory(t) {
      return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPseudoCheckbox.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 8,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled"
      },
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {},
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatPseudoCheckbox.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPseudoCheckbox.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatPseudoCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          selector: 'mat-pseudo-checkbox',
          template: '',
          host: {
            'class': 'mat-pseudo-checkbox',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/selection/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
      _classCallCheck(this, MatPseudoCheckboxModule);
    };

    MatPseudoCheckboxModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatPseudoCheckboxModule
    });
    MatPseudoCheckboxModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatPseudoCheckboxModule_Factory(t) {
        return new (t || MatPseudoCheckboxModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatPseudoCheckboxModule, {
        declarations: [MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatPseudoCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [MatPseudoCheckbox],
          declarations: [MatPseudoCheckbox]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/optgroup.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatOptgroup.

    /**
     * \@docs-private
     */


    var MatOptgroupBase = function MatOptgroupBase() {
      _classCallCheck(this, MatOptgroupBase);
    };
    /** @type {?} */


    var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

    /** @type {?} */


    var _uniqueOptgroupIdCounter = 0;
    /**
     * Component that is used to group instances of `mat-option`.
     */

    var MatOptgroup = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
      _inherits(MatOptgroup, _MatOptgroupMixinBase2);

      var _super14 = _createSuper(MatOptgroup);

      function MatOptgroup() {
        var _this31;

        _classCallCheck(this, MatOptgroup);

        _this31 = _super14.apply(this, arguments);
        /**
         * Unique id for the underlying label.
         */

        _this31._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
        return _this31;
      }

      return MatOptgroup;
    }(_MatOptgroupMixinBase);

    MatOptgroup.??fac = function MatOptgroup_Factory(t) {
      return ??MatOptgroup_BaseFactory(t || MatOptgroup);
    };

    MatOptgroup.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: ["role", "group", 1, "mat-optgroup"],
      hostVars: 4,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-optgroup-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled",
        label: "label"
      },
      exportAs: ["matOptgroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 2,
      consts: [[1, "mat-optgroup-label", 3, "id"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](3, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.label, " ");
        }
      },
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatOptgroup.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var ??MatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MatOptgroup);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatOptgroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-optgroup',
          exportAs: 'matOptgroup',
          template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled'],
          host: {
            'class': 'mat-optgroup',
            'role': 'group',
            '[class.mat-optgroup-disabled]': 'disabled',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-labelledby]': '_labelId'
          },
          styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/option.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Option IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Event object emitted by MatOption when selected or deselected.
     */

    var MatOptionSelectionChange =
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MatOptionSelectionChange(source) {
      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, MatOptionSelectionChange);

      this.source = source;
      this.isUserInput = isUserInput;
    };

    if (false) {}
    /**
     * Describes a parent component that manages a list of options.
     * Contains properties that the options can inherit.
     * \@docs-private
     * @record
     */


    function MatOptionParentComponent() {}

    if (false) {}
    /**
     * Injection token used to provide the parent component to options.
     * @type {?}
     */


    var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
    /**
     * Single option inside of a `<mat-select>` element.
     */

    var MatOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?} _parent
       * @param {?} group
       */
      function MatOption(_element, _changeDetectorRef, _parent, group) {
        _classCallCheck(this, MatOption);

        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */

        this.id = "mat-option-".concat(_uniqueIdCounter++);
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */


      _createClass(MatOption, [{
        key: "multiple",
        get: function get() {
          return this._parent && this._parent.multiple;
        }
        /**
         * Whether or not the option is currently selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.group && this.group.disabled || this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._parent && this._parent.disableRipple;
        }
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * @return {?}
         */

      }, {
        key: "viewValue",
        get: function get() {
          // TODO(kara): Add input property alternative for node envs.
          return (this._getHostElement().textContent || '').trim();
        }
        /**
         * Selects the option.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Deselects the option.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Sets focus onto this option.
         * @param {?=} _origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(_origin, options) {
          // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
          // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

          /** @type {?} */
          var element = this._getHostElement();

          if (typeof element.focus === 'function') {
            element.focus(options);
          }
        }
        /**
         * This method sets display styles on the option to make it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setActiveStyles",
        value: function setActiveStyles() {
          if (!this._active) {
            this._active = true;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * This method removes display styles on the option that made it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setInactiveStyles",
        value: function setInactiveStyles() {
          if (this._active) {
            this._active = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this.viewValue;
        }
        /**
         * Ensures the option is selected when activated from the keyboard.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
            this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


            event.preventDefault();
          }
        }
        /**
         * `Selects the option while indicating the selection came from the user. Used to
         * determine if the select's view -> model callback should be invoked.`
         * @return {?}
         */

      }, {
        key: "_selectViaInteraction",
        value: function _selectViaInteraction() {
          if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent(true);
          }
        }
        /**
         * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
         * attribute from single-selection, unselected options. Including the `aria-selected="false"`
         * attributes adds a significant amount of noise to screen-reader users without providing useful
         * information.
         * @return {?}
         */

      }, {
        key: "_getAriaSelected",
        value: function _getAriaSelected() {
          return this.selected || (this.multiple ? false : null);
        }
        /**
         * Returns the correct tabindex for the option depending on disabled state.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Gets the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          // Since parent components could be using the option's label to display the selected values
          // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
          // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
          // relatively cheap, however we still limit them only to selected options in order to avoid
          // hitting the DOM too often.
          if (this._selected) {
            /** @type {?} */
            var viewValue = this.viewValue;

            if (viewValue !== this._mostRecentViewValue) {
              this._mostRecentViewValue = viewValue;

              this._stateChanges.next();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * Emits the selection change event.
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_emitSelectionChangeEvent",
        value: function _emitSelectionChangeEvent() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
        }
      }]);

      return MatOption;
    }();

    MatOption.??fac = function MatOption_Factory(t) {
      return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MatOptgroup, 8));
    };

    MatOption.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatOption,
      selectors: [["mat-option"]],
      hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
      hostVars: 12,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????hostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
        }
      },
      inputs: {
        id: "id",
        disabled: "disabled",
        value: "value"
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      ngContentSelectors: _c2,
      decls: 4,
      vars: 3,
      consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_OPTION_PARENT_COMPONENT]
        }]
      }, {
        type: MatOptgroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatOption.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-option',
          exportAs: 'matOption',
          host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.mat-selected]': 'selected',
            '[class.mat-option-multiple]': 'multiple',
            '[class.mat-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': '_getAriaSelected()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.mat-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            'class': 'mat-option mat-focus-indicator'
          },
          template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Counts the amount of option group labels that precede the specified option.
     * \@docs-private
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */


    function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        /** @type {?} */
        var optionsArray = options.toArray();
        /** @type {?} */

        var groups = optionGroups.toArray();
        /** @type {?} */

        var groupCounter = 0;

        for (var i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }

        return groupCounter;
      }

      return 0;
    }
    /**
     * Determines the position to which to scroll a panel in order for an option to be into view.
     * \@docs-private
     * @param {?} optionIndex Index of the option to be scrolled into the view.
     * @param {?} optionHeight Height of the options.
     * @param {?} currentScrollPosition Current scroll position of the panel.
     * @param {?} panelHeight Height of the panel.
     * @return {?}
     */


    function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
      /** @type {?} */
      var optionOffset = optionIndex * optionHeight;

      if (optionOffset < currentScrollPosition) {
        return optionOffset;
      }

      if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
      }

      return currentScrollPosition;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatOptionModule = function MatOptionModule() {
      _classCallCheck(this, MatOptionModule);
    };

    MatOptionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatOptionModule
    });
    MatOptionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatOptionModule_Factory(t) {
        return new (t || MatOptionModule)();
      },
      imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatOptionModule, {
        declarations: function declarations() {
          return [MatOption, MatOptgroup];
        },
        imports: function imports() {
          return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule];
        },
        exports: function exports() {
          return [MatOption, MatOptgroup];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatOptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule],
          exports: [MatOption, MatOptgroup],
          declarations: [MatOption, MatOptgroup]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/label/label-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken that can be used to specify the global label options.
     * @deprecated Use `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token from
     *     `\@angular/material/form-field` instead.
     * \@breaking-change 11.0.0
     * @type {?}
     */


    var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
    /**
     * Configurable options for floating labels.
     * @deprecated Use `MatFormFieldDefaultOptions` from `\@angular/material/form-field` instead.
     * \@breaking-change 11.0.0
     * @record
     */

    function LabelOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/month-constants.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * When constructing a Date, the month is zero-based. This can be confusing, since people are
     * used to seeing them one-based. So we create these aliases to make writing the tests easier.
     * \@docs-private
     * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
     * @type {?}
     */


    var JAN = 0;
    /** @type {?} */

    var FEB = 1;
    /** @type {?} */

    var MAR = 2;
    /** @type {?} */

    var APR = 3;
    /** @type {?} */

    var MAY = 4;
    /** @type {?} */

    var JUN = 5;
    /** @type {?} */

    var JUL = 6;
    /** @type {?} */

    var AUG = 7;
    /** @type {?} */

    var SEP = 8;
    /** @type {?} */

    var OCT = 9;
    /** @type {?} */

    var NOV = 10;
    /** @type {?} */

    var DEC = 11;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
    \**********************************************************************/

  /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015IconJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
      return ICON_REGISTRY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
      return ICON_REGISTRY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
      return MAT_ICON_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
      return MAT_ICON_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
      return MatIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
      return MatIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
      return MatIconRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
      return getMatIconFailedToSanitizeLiteralError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
      return getMatIconFailedToSanitizeUrlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
      return getMatIconNameNotFoundError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
      return getMatIconNoHttpProviderError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an exception to be thrown in the case when attempting to
     * load an icon with a name that cannot be found.
     * \@docs-private
     * @param {?} iconName
     * @return {?}
     */


    var _c0 = ["*"];

    function getMatIconNameNotFoundError(iconName) {
      return Error("Unable to find icon with the name \"".concat(iconName, "\""));
    }
    /**
     * Returns an exception to be thrown when the consumer attempts to use
     * `<mat-icon>` without including \@angular/common/http.
     * \@docs-private
     * @return {?}
     */


    function getMatIconNoHttpProviderError() {
      return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
    }
    /**
     * Returns an exception to be thrown when a URL couldn't be sanitized.
     * \@docs-private
     * @param {?} url URL that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeUrlError(url) {
      return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
    }
    /**
     * Returns an exception to be thrown when a HTML string couldn't be sanitized.
     * \@docs-private
     * @param {?} literal HTML that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeLiteralError(literal) {
      return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
    }
    /**
     * Options that can be used to configure how an icon or the icons in an icon set are presented.
     * @record
     */


    function IconOptions() {}

    if (false) {}
    /**
     * Configuration for an icon, including the URL and possibly the cached SVG element.
     * \@docs-private
     */


    var SvgIconConfig =
    /**
     * @param {?} data
     * @param {?=} options
     */
    function SvgIconConfig(data, options) {
      _classCallCheck(this, SvgIconConfig);

      this.options = options; // Note that we can't use `instanceof SVGElement` here,
      // because it'll break during server-side rendering.

      if (!!
      /** @type {?} */
      data.nodeName) {
        this.svgElement =
        /** @type {?} */
        data;
      } else {
        this.url =
        /** @type {?} */
        data;
      }
    };

    if (false) {}
    /**
     * Service to register and display icons used by the `<mat-icon>` component.
     * - Registers icon URLs by namespace and name.
     * - Registers icon set URLs by namespace.
     * - Registers aliases for CSS classes, for use with icon fonts.
     * - Loads icons from URLs and extracts individual icons from icon sets.
     */


    var MatIconRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} _httpClient
       * @param {?} _sanitizer
       * @param {?} document
       * @param {?=} _errorHandler
       */
      function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
        _classCallCheck(this, MatIconRegistry);

        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */

        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */

        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */

        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */

        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */

        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */

        this._defaultFontSetClass = 'material-icons';
        this._document = document;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @template THIS
       * @this {THIS}
       * @param {?} iconName Name under which the icon should be registered.
       * @param {?} url
       * @param {?=} options
       * @return {THIS}
       */


      _createClass(MatIconRegistry, [{
        key: "addSvgIcon",
        value: function addSvgIcon(iconName, url, options) {
          return (
            /** @type {?} */
            this.addSvgIconInNamespace('', iconName, url, options)
          );
        }
        /**
         * Registers an icon using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteral",
        value: function addSvgIconLiteral(iconName, literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconLiteralInNamespace('', iconName, literal, options)
          );
        }
        /**
         * Registers an icon by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconInNamespace",
        value: function addSvgIconInNamespace(namespace, iconName, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteralInNamespace",
        value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._createSvgElementForSingleIcon(sanitizedLiteral, options);

          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Registers an icon set by URL in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSet",
        value: function addSvgIconSet(url, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetInNamespace('', url, options)
          );
        }
        /**
         * Registers an icon set using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteral",
        value: function addSvgIconSetLiteral(literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetLiteralInNamespace('', literal, options)
          );
        }
        /**
         * Registers an icon set by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetInNamespace",
        value: function addSvgIconSetInNamespace(namespace, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon set using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteralInNamespace",
        value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._svgElementFromString(sanitizedLiteral);

          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
         * component with the alias as the fontSet input will cause the class name to be applied
         * to the `<mat-icon>` element.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} alias Alias for the font.
         * @param {?=} className Class name override to be used instead of the alias.
         * @return {THIS}
         */

      }, {
        key: "registerFontClassAlias",
        value: function registerFontClassAlias(alias) {
          var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

          /** @type {?} */
          this._fontCssClassesByAlias.set(alias, className);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name associated with the alias by a previous call to
         * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
         * @param {?} alias
         * @return {?}
         */

      }, {
        key: "classNameForFontAlias",
        value: function classNameForFontAlias(alias) {
          return this._fontCssClassesByAlias.get(alias) || alias;
        }
        /**
         * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} className
         * @return {THIS}
         */

      }, {
        key: "setDefaultFontSetClass",
        value: function setDefaultFontSetClass(className) {
          /** @type {?} */
          this._defaultFontSetClass = className;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         * @return {?}
         */

      }, {
        key: "getDefaultFontSetClass",
        value: function getDefaultFontSetClass() {
          return this._defaultFontSetClass;
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
         * The response from the URL may be cached so this will not always cause an HTTP request, but
         * the produced element will always be a new copy of the originally fetched icon. (That is,
         * it will not contain any modifications made to elements previously returned).
         *
         * @param {?} safeUrl URL from which to fetch the SVG icon.
         * @return {?}
         */

      }, {
        key: "getSvgIconFromUrl",
        value: function getSvgIconFromUrl(safeUrl) {
          var _this32 = this;

          /** @type {?} */
          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          }
          /** @type {?} */


          var cachedIcon = this._cachedIconsByUrl.get(url);

          if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
          }

          return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return _this32._cachedIconsByUrl.set(
            /** @type {?} */
            url, svg);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return cloneSvg(svg);
          }));
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
         * and namespace. The icon must have been previously registered with addIcon or addIconSet;
         * if not, the Observable will throw an error.
         *
         * @param {?} name Name of the icon to be retrieved.
         * @param {?=} namespace Namespace in which to look for the icon.
         * @return {?}
         */

      }, {
        key: "getNamedSvgIcon",
        value: function getNamedSvgIcon(name) {
          var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          // Return (copy of) cached icon if possible.

          /** @type {?} */
          var key = iconKey(namespace, name);
          /** @type {?} */

          var config = this._svgIconConfigs.get(key);

          if (config) {
            return this._getSvgFromConfig(config);
          } // See if we have any icon sets registered for the namespace.

          /** @type {?} */


          var iconSetConfigs = this._iconSetConfigs.get(namespace);

          if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._svgIconConfigs.clear();

          this._iconSetConfigs.clear();

          this._cachedIconsByUrl.clear();
        }
        /**
         * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_getSvgFromConfig",
        value: function _getSvgFromConfig(config) {
          if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
          } else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return config.svgElement = svg;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return cloneSvg(svg);
            }));
          }
        }
        /**
         * Attempts to find an icon with the specified name in any of the SVG icon sets.
         * First searches the available cached icons for a nested element with a matching name, and
         * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
         * that have not been cached, and searches again after all fetches are completed.
         * The returned Observable produces the SVG element if possible, and throws
         * an error if no icon with the specified name can be found.
         * @private
         * @param {?} name
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_getSvgFromIconSetConfigs",
        value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
          var _this33 = this;

          // For all the icon set SVG elements we've fetched, see if any contain an icon with the
          // requested name.

          /** @type {?} */
          var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

          if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
          } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
          // fetched, fetch them now and look for iconName in the results.

          /** @type {?} */


          var iconSetFetchRequests = iconSetConfigs.filter(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return !iconSetConfig.svgElement;
          }).map(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return _this33._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              /** @type {?} */
              var url = _this33._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
              // combined Observable won't necessarily fail.

              /** @type {?} */


              var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required

              if (_this33._errorHandler) {
                _this33._errorHandler.handleError(new Error(errorMessage));
              } else {
                console.error(errorMessage);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
          }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
          // cached SVG element (unless the request failed), and we can check again for the icon.

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var foundIcon = _this33._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (!foundIcon) {
              throw getMatIconNameNotFoundError(name);
            }

            return foundIcon;
          }));
        }
        /**
         * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconName
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_extractIconWithNameFromAnySet",
        value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
          // Iterate backwards, so icon sets added later have precedence.
          for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            var config = iconSetConfigs[i];

            if (config.svgElement) {
              /** @type {?} */
              var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);

              if (foundIcon) {
                return foundIcon;
              }
            }
          }

          return null;
        }
        /**
         * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconFromConfig",
        value: function _loadSvgIconFromConfig(config) {
          var _this34 = this;

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            return _this34._createSvgElementForSingleIcon(svgText, config.options);
          }));
        }
        /**
         * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconSetFromConfig",
        value: function _loadSvgIconSetFromConfig(config) {
          var _this35 = this;

          // If the SVG for this icon set has already been parsed, do nothing.
          if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
          }

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
              config.svgElement = _this35._svgElementFromString(svgText);
            }

            return config.svgElement;
          }));
        }
        /**
         * Creates a DOM element from the given SVG string, and adds default attributes.
         * @private
         * @param {?} responseText
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_createSvgElementForSingleIcon",
        value: function _createSvgElementForSingleIcon(responseText, options) {
          /** @type {?} */
          var svg = this._svgElementFromString(responseText);

          this._setSvgAttributes(svg, options);

          return svg;
        }
        /**
         * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconSet
         * @param {?} iconName
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_extractSvgIconFromSet",
        value: function _extractSvgIconFromSet(iconSet, iconName, options) {
          // Use the `id="iconName"` syntax in order to escape special
          // characters in the ID (versus using the #iconName syntax).

          /** @type {?} */
          var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

          if (!iconSource) {
            return null;
          } // Clone the element and remove the ID to prevent multiple elements from being added
          // to the page with the same ID.

          /** @type {?} */


          var iconElement =
          /** @type {?} */
          iconSource.cloneNode(true);
          iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
          // the content of a new <svg> node.

          if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(
            /** @type {?} */
            iconElement, options);
          } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
          // that the same could be achieved by referring to it via <use href="#id">, however the <use>
          // tag is problematic on Firefox, because it needs to include the current page path.


          if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
          } // createElement('SVG') doesn't work as expected; the DOM ends up with
          // the correct nodes, but the SVG content doesn't render. Instead we
          // have to create an empty SVG node using innerHTML and append its content.
          // Elements created using DOMParser.parseFromString have the same problem.
          // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display

          /** @type {?} */


          var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


          svg.appendChild(iconElement);
          return this._setSvgAttributes(svg, options);
        }
        /**
         * Creates a DOM element from the given SVG string.
         * @private
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "_svgElementFromString",
        value: function _svgElementFromString(str) {
          /** @type {?} */
          var div = this._document.createElement('DIV');

          div.innerHTML = str;
          /** @type {?} */

          var svg =
          /** @type {?} */
          div.querySelector('svg');

          if (!svg) {
            throw Error('<svg> tag not found');
          }

          return svg;
        }
        /**
         * Converts an element into an SVG node by cloning all of its children.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_toSvgElement",
        value: function _toSvgElement(element) {
          /** @type {?} */
          var svg = this._svgElementFromString('<svg></svg>');
          /** @type {?} */


          var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

          for (var i = 0; i < attributes.length; i++) {
            var _attributes$i = attributes[i],
                name = _attributes$i.name,
                value = _attributes$i.value;

            if (name !== 'id') {
              svg.setAttribute(name, value);
            }
          }

          for (var _i2 = 0; _i2 < element.childNodes.length; _i2++) {
            if (element.childNodes[_i2].nodeType === this._document.ELEMENT_NODE) {
              svg.appendChild(element.childNodes[_i2].cloneNode(true));
            }
          }

          return svg;
        }
        /**
         * Sets the default attributes for an SVG element to be used as an icon.
         * @private
         * @param {?} svg
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_setSvgAttributes",
        value: function _setSvgAttributes(svg, options) {
          svg.setAttribute('fit', '');
          svg.setAttribute('height', '100%');
          svg.setAttribute('width', '100%');
          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

          if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
          }

          return svg;
        }
        /**
         * Returns an Observable which produces the string contents of the given URL. Results may be
         * cached, so future calls with the same URL may not cause another HTTP request.
         * @private
         * @param {?} safeUrl
         * @return {?}
         */

      }, {
        key: "_fetchUrl",
        value: function _fetchUrl(safeUrl) {
          var _this36 = this;

          if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
          }

          if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
          }
          /** @type {?} */


          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
          // already a request in progress for that URL. It's necessary to call share() on the
          // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.

          /** @type {?} */


          var inProgressFetch = this._inProgressUrlFetches.get(url);

          if (inProgressFetch) {
            return inProgressFetch;
          } // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
          // Observable. Figure out why and fix it.

          /** @type {?} */


          var req = this._httpClient.get(url, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this36._inProgressUrlFetches["delete"](url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());

          this._inProgressUrlFetches.set(url, req);

          return req;
        }
        /**
         * Registers an icon config by name in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} iconName Name under which to register the config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconConfig",
        value: function _addSvgIconConfig(namespace, iconName, config) {
          /** @type {?} */
          this._svgIconConfigs.set(iconKey(namespace, iconName), config);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers an icon set config in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconSetConfig",
        value: function _addSvgIconSetConfig(namespace, config) {
          /** @type {?} */
          var configNamespace =
          /** @type {?} */
          this._iconSetConfigs.get(namespace);

          if (configNamespace) {
            configNamespace.push(config);
          } else {
            /** @type {?} */
            this._iconSetConfigs.set(namespace, [config]);
          }

          return (
            /** @type {?} */
            this
          );
        }
      }]);

      return MatIconRegistry;
    }();

    MatIconRegistry.??fac = function MatIconRegistry_Factory(t) {
      return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };
    /** @nocollapse */


    MatIconRegistry.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /** @nocollapse */


    MatIconRegistry.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
      factory: function MatIconRegistry_Factory() {
        return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
      },
      token: MatIconRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatIconRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentRegistry
     * @param {?} httpClient
     * @param {?} sanitizer
     * @param {?=} document
     * @param {?=} errorHandler
     * @return {?}
     */


    function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
      return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](),
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
    /**
     * Clones an SVGElement while preserving type information.
     * @param {?} svg
     * @return {?}
     */

    function cloneSvg(svg) {
      return (
        /** @type {?} */
        svg.cloneNode(true)
      );
    }
    /**
     * Returns the cache key to use for an icon namespace and name.
     * @param {?} namespace
     * @param {?} name
     * @return {?}
     */


    function iconKey(namespace, name) {
      return namespace + ':' + name;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatIcon.

    /**
     * \@docs-private
     */


    var MatIconBase =
    /**
     * @param {?} _elementRef
     */
    function MatIconBase(_elementRef) {
      _classCallCheck(this, MatIconBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
    /**
     * Injection token used to provide the current location to `MatIcon`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
      providedIn: 'root',
      factory: MAT_ICON_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatIcon`.
     * \@docs-private
     * @record
     */

    function MatIconLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_ICON_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
     * @type {?}
     */


    var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

    var ??0 =
    /**
    * @param {?} attr
    * @return {?}
    */
    function ??0(attr) {
      return "[".concat(attr, "]");
    };
    /**
     * Selector that can be used to find all elements that are using a `FuncIRI`.
     * @type {?}
     */


    var funcIriAttributeSelector = funcIriAttributes.map(??0).join(', ');
    /**
     * Regex that can be used to extract the id out of a FuncIRI.
     * @type {?}
     */

    var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    /**
     * Component to display an icon. It can be used in the following ways:
     *
     * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
     *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
     *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
     *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
     *   Examples:
     *     `<mat-icon svgIcon="left-arrow"></mat-icon>
     *     <mat-icon svgIcon="animals:cat"></mat-icon>`
     *
     * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
     *   component. By default the Material icons font is used as described at
     *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
     *   alternate font by setting the fontSet input to either the CSS class to apply to use the
     *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
     *   Examples:
     *     `<mat-icon>home</mat-icon>
     *     <mat-icon fontSet="myfont">sun</mat-icon>`
     *
     * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
     *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
     *   CSS class which causes the glyph to be displayed via a :before selector, as in
     *   https://fortawesome.github.io/Font-Awesome/examples/
     *   Example:
     *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
     */

    var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
      _inherits(MatIcon, _MatIconMixinBase2);

      var _super15 = _createSuper(MatIcon);

      /**
       * @param {?} elementRef
       * @param {?} _iconRegistry
       * @param {?} ariaHidden
       * @param {?=} _location
       * @param {?=} _errorHandler
       */
      function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        var _this37;

        _classCallCheck(this, MatIcon);

        _this37 = _super15.call(this, elementRef);
        _this37._iconRegistry = _iconRegistry;
        _this37._location = _location;
        _this37._errorHandler = _errorHandler;
        _this37._inline = false;
        /**
         * Subscription to the current in-progress SVG icon request.
         */

        _this37._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.

        if (!ariaHidden) {
          elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }

        return _this37;
      }
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       * @return {?}
       */


      _createClass(MatIcon, [{
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} inline
         * @return {?}
         */
        ,
        set: function set(inline) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
        }
        /**
         * Font set that the icon is a part of.
         * @return {?}
         */

      }, {
        key: "fontSet",
        get: function get() {
          return this._fontSet;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontSet = this._cleanupFontValue(value);
        }
        /**
         * Name of an icon within a font set.
         * @return {?}
         */

      }, {
        key: "fontIcon",
        get: function get() {
          return this._fontIcon;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontIcon = this._cleanupFontValue(value);
        }
        /**
         * Splits an svgIcon binding value into its icon set and icon name components.
         * Returns a 2-element array of [(icon set), (icon name)].
         * The separator for the two fields is ':'. If there is no separator, an empty
         * string is returned for the icon set and the entire value is returned for
         * the icon name. If the argument is falsy, returns an array of two empty strings.
         * Throws an error if the name contains two or more ':' separators.
         * Examples:
         *   `'social:cake' -> ['social', 'cake']
         *   'penguin' -> ['', 'penguin']
         *   null -> ['', '']
         *   'a:b:c' -> (throws Error)`
         * @private
         * @param {?} iconName
         * @return {?}
         */

      }, {
        key: "_splitIconName",
        value: function _splitIconName(iconName) {
          if (!iconName) {
            return ['', ''];
          }
          /** @type {?} */


          var parts = iconName.split(':');

          switch (parts.length) {
            case 1:
              return ['', parts[0]];
            // Use default namespace.

            case 2:
              return (
                /** @type {?} */
                parts
              );

            default:
              throw Error("Invalid icon name: \"".concat(iconName, "\""));
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this38 = this;

          // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.

          /** @type {?} */
          var svgIconChanges = changes['svgIcon'];

          if (svgIconChanges) {
            this._currentIconFetch.unsubscribe();

            if (this.svgIcon) {
              var _this$_splitIconName = this._splitIconName(this.svgIcon),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
              /**
              * @param {?} svg
              * @return {?}
              */
              function (svg) {
                return _this38._setSvgElement(svg);
              },
              /**
              * @param {?} err
              * @return {?}
              */
              function (err) {
                /** @type {?} */
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required.

                if (_this38._errorHandler) {
                  _this38._errorHandler.handleError(new Error(errorMessage));
                } else {
                  console.error(errorMessage);
                }
              });
            } else if (svgIconChanges.previousValue) {
              this._clearSvgElement();
            }
          }

          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Update font classes because ngOnChanges won't be called if none of the inputs are present,
          // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          /** @type {?} */
          var cachedElements = this._elementsWithExternalReferences;

          if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.


            if (newPath !== this._previousPath) {
              this._previousPath = newPath;

              this._prependPathToReferences(newPath);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._currentIconFetch.unsubscribe();

          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_usingFontIcon",
        value: function _usingFontIcon() {
          return !this.svgIcon;
        }
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */

      }, {
        key: "_setSvgElement",
        value: function _setSvgElement(svg) {
          this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
          // Do this before inserting the element into the DOM, in order to avoid a style recalculation.

          /** @type {?} */


          var styleTags =
          /** @type {?} */
          svg.querySelectorAll('style');

          for (var i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
          } // Note: we do this fix here, rather than the icon registry, because the
          // references have to point to the URL at the time that the icon was created.


          if (this._location) {
            /** @type {?} */
            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);
          }

          this._elementRef.nativeElement.appendChild(svg);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSvgElement",
        value: function _clearSvgElement() {
          /** @type {?} */
          var layoutElement = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = layoutElement.childNodes.length;

          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
          // we can't use innerHTML, because IE will throw if the element has a data binding.


          while (childCount--) {
            /** @type {?} */
            var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
              layoutElement.removeChild(child);
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateFontIconClasses",
        value: function _updateFontIconClasses() {
          if (!this._usingFontIcon()) {
            return;
          }
          /** @type {?} */


          var elem = this._elementRef.nativeElement;
          /** @type {?} */

          var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

          if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
              elem.classList.remove(this._previousFontSetClass);
            }

            if (fontSetClass) {
              elem.classList.add(fontSetClass);
            }

            this._previousFontSetClass = fontSetClass;
          }

          if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
              elem.classList.remove(this._previousFontIconClass);
            }

            if (this.fontIcon) {
              elem.classList.add(this.fontIcon);
            }

            this._previousFontIconClass = this.fontIcon;
          }
        }
        /**
         * Cleans up a value to be used as a fontIcon or fontSet.
         * Since the value ends up being assigned as a CSS class, we
         * have to trim the value and omit space-separated values.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_cleanupFontValue",
        value: function _cleanupFontValue(value) {
          return typeof value === 'string' ? value.trim().split(' ')[0] : value;
        }
        /**
         * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
         * reference. This is required because WebKit browsers require references to be prefixed with
         * the current path, if the page has a `base` tag.
         * @private
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_prependPathToReferences",
        value: function _prependPathToReferences(path) {
          /** @type {?} */
          var elements = this._elementsWithExternalReferences;

          if (elements) {
            elements.forEach(
            /**
            * @param {?} attrs
            * @param {?} element
            * @return {?}
            */
            function (attrs, element) {
              attrs.forEach(
              /**
              * @param {?} attr
              * @return {?}
              */
              function (attr) {
                element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
              });
            });
          }
        }
        /**
         * Caches the children of an SVG element that have `url()`
         * references that we need to prefix with the current path.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cacheChildrenWithExternalReferences",
        value: function _cacheChildrenWithExternalReferences(element) {
          /** @type {?} */
          var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
          /** @type {?} */

          var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

          var _loop = function _loop(i) {
            funcIriAttributes.forEach(
            /**
            * @param {?} attr
            * @return {?}
            */
            function (attr) {
              /** @type {?} */
              var elementWithReference = elementsWithFuncIri[i];
              /** @type {?} */

              var value = elementWithReference.getAttribute(attr);
              /** @type {?} */

              var match = value ? value.match(funcIriPattern) : null;

              if (match) {
                /** @type {?} */
                var attributes = elements.get(elementWithReference);

                if (!attributes) {
                  attributes = [];
                  elements.set(elementWithReference, attributes);
                }

                /** @type {?} */
                attributes.push({
                  name: attr,
                  value: match[1]
                });
              }
            });
          };

          for (var i = 0; i < elementsWithFuncIri.length; i++) {
            _loop(i);
          }
        }
      }]);

      return MatIcon;
    }(_MatIconMixinBase);

    MatIcon.??fac = function MatIcon_Factory(t) {
      return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????injectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MAT_ICON_LOCATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };

    MatIcon.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MatIcon,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 4,
      hostBindings: function MatIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
        }
      },
      inputs: {
        color: "color",
        inline: "inline",
        fontSet: "fontSet",
        fontIcon: "fontIcon",
        svgIcon: "svgIcon"
      },
      exportAs: ["matIcon"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](0);
        }
      },
      styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: MatIconRegistry
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['aria-hidden']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_ICON_LOCATION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatIcon.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      svgIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: '<ng-content></ng-content>',
          selector: 'mat-icon',
          exportAs: 'matIcon',
          inputs: ['color'],
          host: {
            'role': 'img',
            'class': 'mat-icon notranslate',
            '[class.mat-icon-inline]': 'inline',
            '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatIconModule = function MatIconModule() {
      _classCallCheck(this, MatIconModule);
    };

    MatIconModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: MatIconModule
    });
    MatIconModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function MatIconModule_Factory(t) {
        return new (t || MatIconModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatIconModule, {
        declarations: function declarations() {
          return [MatIcon];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatIcon]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=icon.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return MAT_STEPPER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return MAT_STEPPER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return MatHorizontalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return MatStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return MatStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return MatStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return MatStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return MatStepperIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return MatStepperIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return MatStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return MatStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return MatStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return MatVerticalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return matStepperAnimations;
    });
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/step-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function MatStepHeader_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0, 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
      }
    }

    function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
      }
    }

    function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
      }
    }

    function MatStepHeader_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", ctx_r1.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "number");
      }
    }

    function MatStepHeader_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0, 13);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
      }
    }

    function MatStepHeader_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r3.label);
      }
    }

    function MatStepHeader_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r4._intl.optionalLabel);
      }
    }

    function MatStepHeader_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r5.errorMessage);
      }
    }

    function MatStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????projection"](0);
      }
    }

    var _c0 = ["*"];

    function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 6);
      }
    }

    function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-step-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
          var step_r2 = ctx.$implicit;
          return step_r2.select();
        })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r7._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var step_r2 = ctx.$implicit;
        var i_r3 = ctx.index;
        var isLast_r4 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !isLast_r4);
      }
    }

    function MatHorizontalStepper_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r11._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](1, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var step_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", step_r9.content);
      }
    }

    function MatVerticalStepper_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-step-header", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
          var step_r1 = ctx.$implicit;
          return step_r1.select();
        })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r5._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r7._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = ctx.$implicit;
        var i_r2 = ctx.index;
        var isLast_r3 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-stepper-vertical-line", !isLast_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", step_r1.content);
      }
    }

    var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(MatStepLabel, _angular_cdk_stepper_);

      var _super16 = _createSuper(MatStepLabel);

      function MatStepLabel() {
        _classCallCheck(this, MatStepLabel);

        return _super16.apply(this, arguments);
      }

      return MatStepLabel;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

    MatStepLabel.??fac = function MatStepLabel_Factory(t) {
      return ??MatStepLabel_BaseFactory(t || MatStepLabel);
    };

    MatStepLabel.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
      type: MatStepLabel,
      selectors: [["", "matStepLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
    });

    var ??MatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepLabel);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matStepLabel]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Stepper data that is required for internationalization.
     */


    var MatStepperIntl = function MatStepperIntl() {
      _classCallCheck(this, MatStepperIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      /**
       * Label that is rendered below optional steps.
       */

      this.optionalLabel = 'Optional';
    };

    MatStepperIntl.??fac = function MatStepperIntl_Factory(t) {
      return new (t || MatStepperIntl)();
    };
    /** @nocollapse */


    MatStepperIntl.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"])({
      factory: function MatStepperIntl_Factory() {
        return new MatStepperIntl();
      },
      token: MatStepperIntl,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */


    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatStepperIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/step-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
      _inherits(MatStepHeader, _angular_cdk_stepper_2);

      var _super17 = _createSuper(MatStepHeader);

      /**
       * @param {?} _intl
       * @param {?} _focusMonitor
       * @param {?} _elementRef
       * @param {?} changeDetectorRef
       */
      function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this39;

        _classCallCheck(this, MatStepHeader);

        _this39 = _super17.call(this, _elementRef);
        _this39._intl = _intl;
        _this39._focusMonitor = _focusMonitor;

        _focusMonitor.monitor(_elementRef, true);

        _this39._intlSubscription = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
        return _this39;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepHeader, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the step header.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._focusMonitor.focusVia(this._elementRef, 'program');
        }
        /**
         * Returns string label of given step if it is a text label.
         * @return {?}
         */

      }, {
        key: "_stringLabel",
        value: function _stringLabel() {
          return this.label instanceof MatStepLabel ? null : this.label;
        }
        /**
         * Returns MatStepLabel if the label of given step is a template label.
         * @return {?}
         */

      }, {
        key: "_templateLabel",
        value: function _templateLabel() {
          return this.label instanceof MatStepLabel ? this.label : null;
        }
        /**
         * Returns the host HTML element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Template context variables that are exposed to the `matStepperIcon` instances.
         * @return {?}
         */

      }, {
        key: "_getIconContext",
        value: function _getIconContext() {
          return {
            index: this.index,
            active: this.active,
            optional: this.optional
          };
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_getDefaultTextForState",
        value: function _getDefaultTextForState(state) {
          if (state == 'number') {
            return "".concat(this.index + 1);
          }

          if (state == 'edit') {
            return 'create';
          }

          if (state == 'error') {
            return 'warning';
          }

          return state;
        }
      }]);

      return MatStepHeader;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

    MatStepHeader.??fac = function MatStepHeader_Factory(t) {
      return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    MatStepHeader.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
      type: MatStepHeader,
      selectors: [["mat-step-header"]],
      hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
      inputs: {
        state: "state",
        label: "label",
        errorMessage: "errorMessage",
        iconOverrides: "iconOverrides",
        index: "index",
        selected: "selected",
        active: "active",
        optional: "optional",
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
      decls: 10,
      vars: 19,
      consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
      template: function MatStepHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, MatStepHeader_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, MatStepHeader_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, MatStepHeader_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-step-icon-selected", ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx._templateLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx._stringLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.optional && ctx.state != "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.state == "error");
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatStepHeader.ctorParameters = function () {
      return [{
        type: MatStepperIntl
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    MatStepHeader.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      iconOverrides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-step-header',
          template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
          host: {
            'class': 'mat-step-header mat-focus-indicator',
            'role': 'tab'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
        }]
      }], function () {
        return [{
          type: MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material steppers.
     * \@docs-private
     * @type {?}
     */


    var matStepperAnimations = {
      /**
       * Animation that transitions the step along the X axis in a horizontal stepper.
       */
      horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'none',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

      /**
       * Animation that transitions the step along the Y axis in a vertical stepper.
       */
      verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-icon.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Template context available to an attached `matStepperIcon`.
     * @record
     */

    function MatStepperIconContext() {}

    if (false) {}
    /**
     * Template to be used to override the icons inside the step header.
     */


    var MatStepperIcon =
    /**
     * @param {?} templateRef
     */
    function MatStepperIcon(templateRef) {
      _classCallCheck(this, MatStepperIcon);

      this.templateRef = templateRef;
    };

    MatStepperIcon.??fac = function MatStepperIcon_Factory(t) {
      return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    MatStepperIcon.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
      type: MatStepperIcon,
      selectors: [["ng-template", "matStepperIcon", ""]],
      inputs: {
        name: ["matStepperIcon", "name"]
      }
    });
    /** @nocollapse */

    MatStepperIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };

    MatStepperIcon.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matStepperIcon']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matStepperIcon]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matStepperIcon']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
      _inherits(MatStep, _angular_cdk_stepper_3);

      var _super18 = _createSuper(MatStep);

      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} stepper
       * @param {?} _errorStateMatcher
       * @param {?=} stepperOptions
       */
      function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this40;

        _classCallCheck(this, MatStep);

        _this40 = _super18.call(this, stepper, stepperOptions);
        _this40._errorStateMatcher = _errorStateMatcher;
        return _this40;
      }
      /**
       * Custom error state matcher that additionally checks for validity of interacted form.
       * @param {?} control
       * @param {?} form
       * @return {?}
       */


      _createClass(MatStep, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          /** @type {?} */
          var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
          // since user can trigger a form change by calling for another step without directly
          // interacting with the current form.

          /** @type {?} */


          var customErrorState = !!(control && control.invalid && this.interacted);
          return originalErrorState || customErrorState;
        }
      }]);

      return MatStep;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

    MatStep.??fac = function MatStep_Factory(t) {
      return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatStepper;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8));
    };

    MatStep.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
      type: MatStep,
      selectors: [["mat-step"]],
      contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStepLabel, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.stepLabel = _t.first);
        }
      },
      exportAs: ["matStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
        useExisting: MatStep
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
        useExisting: MatStep
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????projectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatStep.ctorParameters = function () {
      return [{
        type: MatStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatStepper;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
        }]
      }];
    };

    MatStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatStepLabel]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-step',
          template: "<ng-template><ng-content></ng-content></ng-template>\n",
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
            useExisting: MatStep
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
            useExisting: MatStep
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matStep',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
          }]
        }];
      }, {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatStepLabel]
        }]
      });
    })();

    if (false) {}

    var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
      _inherits(MatStepper, _angular_cdk_stepper_4);

      var _super19 = _createSuper(MatStepper);

      function MatStepper() {
        var _this41;

        _classCallCheck(this, MatStepper);

        _this41 = _super19.apply(this, arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */

        _this41.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */

        _this41._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */

        _this41._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        return _this41;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepper, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this42 = this;

          this._icons.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref4) {
            var name = _ref4.name,
                templateRef = _ref4.templateRef;
            return _this42._iconOverrides[name] = templateRef;
          }); // Mark the component for change detection whenever the content children query changes


          this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this42._stateChanged();
          });

          this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
          // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
          // See https://github.com/angular/angular/issues/24084
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
          /**
          * @param {?} x
          * @param {?} y
          * @return {?}
          */
          function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (
            /** @type {?} */
            event.toState === 'current') {
              _this42.animationDone.emit();
            }
          });
        }
      }]);

      return MatStepper;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

    MatStepper.??fac = function MatStepper_Factory(t) {
      return ??MatStepper_BaseFactory(t || MatStepper);
    };

    MatStepper.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
      type: MatStepper,
      selectors: [["", "matStepper", ""]],
      contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStep, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStepperIcon, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._icons = _t);
        }
      },
      viewQuery: function MatStepper_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](MatStepHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._stepHeader = _t);
        }
      },
      inputs: {
        disableRipple: "disableRipple"
      },
      outputs: {
        animationDone: "animationDone"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
    });
    MatStepper.propDecorators = {
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
        args: [MatStepHeader]
      }],
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatStep, {
          descendants: true
        }]
      }],
      _icons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatStepperIcon, {
          descendants: true
        }]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ??MatStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepper);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matStepper]',
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatStepper
          }]
        }]
      }], null, {
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: [MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStepperIcon, {
            descendants: true
          }]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
      _inherits(MatHorizontalStepper, _MatStepper);

      var _super20 = _createSuper(MatHorizontalStepper);

      function MatHorizontalStepper() {
        var _this43;

        _classCallCheck(this, MatHorizontalStepper);

        _this43 = _super20.apply(this, arguments);
        /**
         * Whether the label should display in bottom or end position.
         */

        _this43.labelPosition = 'end';
        return _this43;
      }

      return MatHorizontalStepper;
    }(MatStepper);

    MatHorizontalStepper.??fac = function MatHorizontalStepper_Factory(t) {
      return ??MatHorizontalStepper_BaseFactory(t || MatHorizontalStepper);
    };

    MatHorizontalStepper.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
      type: MatHorizontalStepper,
      selectors: [["mat-horizontal-stepper"]],
      hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
      hostVars: 4,
      hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
        }
      },
      inputs: {
        selectedIndex: "selectedIndex",
        labelPosition: "labelPosition"
      },
      exportAs: ["matHorizontalStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
        provide: MatStepper,
        useExisting: MatHorizontalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatHorizontalStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
      decls: 4,
      vars: 2,
      consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
      template: function MatHorizontalStepper_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matStepperAnimations.horizontalStepTransition]
      },
      changeDetection: 0
    });
    MatHorizontalStepper.propDecorators = {
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ??MatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatHorizontalStepper);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-horizontal-stepper',
          exportAs: 'matHorizontalStepper',
          template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
          inputs: ['selectedIndex'],
          host: {
            'class': 'mat-stepper-horizontal',
            '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
            '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
            'aria-orientation': 'horizontal',
            'role': 'tablist'
          },
          animations: [matStepperAnimations.horizontalStepTransition],
          providers: [{
            provide: MatStepper,
            useExisting: MatHorizontalStepper
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatHorizontalStepper
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
        }]
      }], null, {
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
      _inherits(MatVerticalStepper, _MatStepper2);

      var _super21 = _createSuper(MatVerticalStepper);

      /**
       * @param {?} dir
       * @param {?} changeDetectorRef
       * @param {?=} elementRef
       * @param {?=} _document
       */
      function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
      elementRef, _document) {
        var _this44;

        _classCallCheck(this, MatVerticalStepper);

        _this44 = _super21.call(this, dir, changeDetectorRef, elementRef, _document);
        _this44._orientation = 'vertical';
        return _this44;
      }

      return MatVerticalStepper;
    }(MatStepper);

    MatVerticalStepper.??fac = function MatVerticalStepper_Factory(t) {
      return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    MatVerticalStepper.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
      type: MatVerticalStepper,
      selectors: [["mat-vertical-stepper"]],
      hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
      inputs: {
        selectedIndex: "selectedIndex"
      },
      exportAs: ["matVerticalStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
        provide: MatStepper,
        useExisting: MatVerticalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatVerticalStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
      template: function MatVerticalStepper_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matStepperAnimations.verticalStepTransition]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatVerticalStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-vertical-stepper',
          exportAs: 'matVerticalStepper',
          template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
          inputs: ['selectedIndex'],
          host: {
            'class': 'mat-stepper-vertical',
            'aria-orientation': 'vertical',
            'role': 'tablist'
          },
          animations: [matStepperAnimations.verticalStepTransition],
          providers: [{
            provide: MatStepper,
            useExisting: MatVerticalStepper
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatVerticalStepper
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
      _inherits(MatStepperNext, _angular_cdk_stepper_5);

      var _super22 = _createSuper(MatStepperNext);

      function MatStepperNext() {
        _classCallCheck(this, MatStepperNext);

        return _super22.apply(this, arguments);
      }

      return MatStepperNext;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

    MatStepperNext.??fac = function MatStepperNext_Factory(t) {
      return ??MatStepperNext_BaseFactory(t || MatStepperNext);
    };

    MatStepperNext.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
      type: MatStepperNext,
      selectors: [["button", "matStepperNext", ""]],
      hostVars: 1,
      hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????hostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
    });

    var ??MatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepperNext);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'button[matStepperNext]',
          host: {
            '[type]': 'type'
          },
          inputs: ['type']
        }]
      }], null, null);
    })();
    /**
     * Button that moves to the previous step in a stepper workflow.
     */


    var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
      _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

      var _super23 = _createSuper(MatStepperPrevious);

      function MatStepperPrevious() {
        _classCallCheck(this, MatStepperPrevious);

        return _super23.apply(this, arguments);
      }

      return MatStepperPrevious;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

    MatStepperPrevious.??fac = function MatStepperPrevious_Factory(t) {
      return ??MatStepperPrevious_BaseFactory(t || MatStepperPrevious);
    };

    MatStepperPrevious.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
      type: MatStepperPrevious,
      selectors: [["button", "matStepperPrevious", ""]],
      hostVars: 1,
      hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????hostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
    });

    var ??MatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepperPrevious);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'button[matStepperPrevious]',
          host: {
            '[type]': 'type'
          },
          inputs: ['type']
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatStepperModule = function MatStepperModule() {
      _classCallCheck(this, MatStepperModule);
    };

    MatStepperModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
      type: MatStepperModule
    });
    MatStepperModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
      factory: function MatStepperModule_Factory(t) {
        return new (t || MatStepperModule)();
      },
      providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](MatStepperModule, {
        declarations: function declarations() {
          return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
          declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
          providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=stepper.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Panduan Singkat</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <div class=\"wave-container\">\n    \n    \n    <mat-vertical-stepper class=\"ion-padding\">\n      \n      <mat-step>\n        <ng-template matStepLabel>Registrasi</ng-template>\n        <div>\n          <img src=\"assets/2register.png\">\n          <ion-card-subtitle shape=\"round\" size=\"default\">dafarkan nama lengkap,\n            email, password dan citra wajah anda</ion-card-subtitle>\n        </div>\n      </mat-step>\n\n      <mat-step>\n        <ng-template matStepLabel>Login</ng-template>\n        <div>\n          <img src=\"assets/3login.png\">\n          <!-- <ion-button shape=\"round\" size=\"small\" class=\"ion-text-capitalize\">Check your Tempreture</ion-button> -->\n          <ion-card-subtitle shape=\"round\" size=\"default\">silahkan login menggunakan email, password,\n            dan citra wajah anda\n          </ion-card-subtitle>\n        </div>\n      </mat-step>\n\n      <mat-step>\n        <div>\n          <img src=\"assets/4profil.png\">\n        </div>\n        <ng-template matStepLabel>Profile</ng-template>\n        <ion-card-subtitle shape=\"round\" size=\"default\">setelah mengisi email, password beserta tangkapan \n          foto citra wajah anda, maka anda diberikan akses untuk masuk ke sistem \n        </ion-card-subtitle>\n        <div>\n          <br>\n          <ion-button color=\"warning\" href=\"/login\" shape=\"round\" size=\"small\" class=\"ion-text-capitalize\">Sudah mengerti, Lanjut</ion-button>\n        </div>\n      </mat-step>\n\n    </mat-vertical-stepper>\n\n    \n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#FFFFFF\" fill-opacity=\"1\" d=\"M0,64L120,101.3C240,139,480,213,720,202.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z\"></path></svg>\n    </div>\n  \n    <ion-toolbar>\n      <ion-title>\n        <span class=\"ion-float-left\">Delvan Nofrizaldi</span> \n          <span class=\"ion-float-right\">techinschool.id</span>\n      </ion-title>\n    </ion-toolbar>\n</ion-content>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/welcome/welcome-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/welcome/welcome-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: WelcomePageRoutingModule */

  /***/
  function srcAppWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
      return WelcomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }];

    var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
      _classCallCheck(this, WelcomePageRoutingModule);
    };

    WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/welcome/welcome.module.ts ***!
    \*******************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-routing.module */
    "./src/app/welcome/welcome-routing.module.ts");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/welcome/welcome.page.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/welcome/welcome.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #091d23;\n  color: #FFF;\n}\n\n.mat-stepper-vertical {\n  background: #091d23;\n}\n\n::ng-deep .mat-vertical-content {\n  padding: 0;\n}\n\n::ng-deep .mat-step-label {\n  color: #091d23;\n  font-weight: bold;\n  background-color: #ffc409;\n  padding: 6px 20px;\n  border-radius: 16px;\n}\n\n::ng-deep .mat-step-header .mat-step-icon {\n  background-color: #FFD167;\n  color: #091d23;\n  font-weight: bold;\n}\n\n::ng-deep .mat-stepper-vertical-line::before {\n  border-color: #FFF;\n}\n\n.wave-container {\n  position: relative;\n  color: #FFF;\n  text-align: center;\n  overflow: hidden;\n  background: #091d23;\n}\n\n.wave-container > svg {\n  display: block;\n}\n\nion-content ion-toolbar {\n  color: #091d23;\n  --background: rgba(0,0,0,0);\n}\n\nion-content ion-toolbar ion-title {\n  font-size: 12px;\n}\n\nimg {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kbHZuL1RlY2hJblNjaG9vbC8yLlNLUklQU0kvVUkgQVBMSUtBU0kvQ09WSUQtMTktSU9OSUM1LUFuZ3VsYXI5LVVJLW1hc3Rlci9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FER0k7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUNBUjs7QURDUTtFQUNBLGVBQUE7QUNDUjs7QURJQTtFQUNJLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDkxZDIzO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQ6ICMwOTFkMjM7XG59XG5cbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGNvbG9yOiAjMDkxZDIzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MDk7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQxNjc7XG4gICAgY29sb3I6ICMwOTFkMjM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICNGRkY7XG59XG5cbi53YXZlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICMwOTFkMjM7XG59XG5cbi53YXZlLWNvbnRhaW5lciA+IHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGNvbG9yOiAjMDkxZDIzO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzA5MWQyMztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQ6ICMwOTFkMjM7XG59XG5cbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMwOTFkMjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDA5O1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMTY3O1xuICBjb2xvcjogIzA5MWQyMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGO1xufVxuXG4ud2F2ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMwOTFkMjM7XG59XG5cbi53YXZlLWNvbnRhaW5lciA+IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIGNvbG9yOiAjMDkxZDIzO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG59XG5pb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/welcome/welcome.page.ts ***!
    \*****************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage() {
        _classCallCheck(this, WelcomePage);
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/welcome/welcome.page.scss"))["default"]]
    })], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=welcome-welcome-module-es5.js.map