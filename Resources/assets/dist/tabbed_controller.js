"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stimulus = require("@hotwired/stimulus");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _addCollectionElementListeners = /*#__PURE__*/new WeakSet();

var _getInputNameFromCollectionElement = /*#__PURE__*/new WeakSet();

var _generateTabs = /*#__PURE__*/new WeakSet();

var _generateTab = /*#__PURE__*/new WeakSet();

var _setActive = /*#__PURE__*/new WeakSet();

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _setActive);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _generateTab);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _generateTabs);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getInputNameFromCollectionElement);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addCollectionElementListeners);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('Hllo');
      this.collectionTarget.addEventListener('ux-collection:change', this._onChange.bind(this));
      this.collectionTarget.addEventListener('ux-collection:add', this._onAdd.bind(this));

      _classPrivateMethodGet(this, _generateTabs, _generateTabs2).call(this);

      _classPrivateMethodGet(this, _setActive, _setActive2).call(this, 0);

      var _iterator = _createForOfIteratorHelper(this.collectionElementTargets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var collectionElement = _step.value;

          _classPrivateMethodGet(this, _addCollectionElementListeners, _addCollectionElementListeners2).call(this, collectionElement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.collectionTarget.removeEventListener('ux-collection:change', this._onChange.bind(this));
      this.collectionTarget.removeEventListener('ux-collection:add', this._onAdd.bind(this));
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      var _this2 = this;

      _classPrivateMethodGet(this, _generateTabs, _generateTabs2).call(this);

      var activeIndex = this.collectionElementTargets.findIndex(function (element) {
        return element.classList.contains('active');
      });

      if (this.collectionElementTargets.length > 0 && activeIndex === -1) {
        _classPrivateMethodGet(this, _setActive, _setActive2).call(this, 0);
      } else {
        // find current active
        _classPrivateMethodGet(this, _setActive, _setActive2).call(this, activeIndex);
      }

      this.collectionElementTargets.some(function (element, index) {
        if (element.querySelector('.form-error-message')) {
          _classPrivateMethodGet(_this2, _setActive, _setActive2).call(_this2, index);

          return true;
        }
      });
    }
  }, {
    key: "_onAdd",
    value: function _onAdd(event) {
      _classPrivateMethodGet(this, _generateTabs, _generateTabs2).call(this);

      _classPrivateMethodGet(this, _setActive, _setActive2).call(this, this.collectionElementTargets.length - 1);

      _classPrivateMethodGet(this, _addCollectionElementListeners, _addCollectionElementListeners2).call(this, event.detail);

      document.querySelectorAll('.tooltip').forEach(function (e) {
        return e.remove();
      });
    }
  }, {
    key: "remove",
    value: function remove(e) {
      // get index
      var index = this.tabButtonTargets.indexOf(e.target.closest('.nav-link'));
      this.collectionElementTargets[index].querySelector('[data-arkounay--ux-collection--collection-target="delete"]').click();
    }
  }, {
    key: "add",
    value: function add(e) {
      e.preventDefault();
      this.collectionTarget.querySelector('[data-arkounay--ux-collection--collection-target="add"]').click();
    }
    /**
     * @param collectionElement
     * @returns HTMLInputElement The first input element in a collectionElement will return its name
     */

  }]);

  return _default;
}(_stimulus.Controller);

exports["default"] = _default;

function _addCollectionElementListeners2(collectionElement) {
  var _this3 = this;

  // change tab name on keyup
  _classPrivateMethodGet(this, _getInputNameFromCollectionElement, _getInputNameFromCollectionElement2).call(this, collectionElement).addEventListener('keyup', function (e) {
    var name = e.target.value;

    if (!name) {
      name = _this3.emptyTabNameValue;
    }

    _this3.tabButtonTargets[_this3.collectionElementTargets.indexOf(collectionElement)].querySelector('.tab-name').textContent = name;
  }); // focus tab when html5 invalid


  var _iterator2 = _createForOfIteratorHelper(collectionElement.querySelectorAll('input,textarea,select')),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var el = _step2.value;
      el.addEventListener('invalid', function () {
        var index = _this3.collectionElementTargets.indexOf(collectionElement);

        _this3.tabButtonTargets[index].click();
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function _getInputNameFromCollectionElement2(collectionElement) {
  return collectionElement.querySelector('input');
}

function _generateTabs2() {
  var _this4 = this;

  var tabs = '';
  this.collectionElementTargets.forEach(function (element, index) {
    tabs += _classPrivateMethodGet(_this4, _generateTab, _generateTab2).call(_this4, element, index);
  });

  if (this.collectionTarget.dataset.allowAdd == 1) {
    var addButton = this.collectionTarget.querySelector('[data-arkounay--ux-collection--collection-target="add"]');
    var addButtonIcon = addButton.querySelector('svg').outerHTML;
    var isEmpty = this.collectionElementTargets.length === 0;
    var addButtonText = isEmpty ? addButton.textContent : '';
    var tooltip = isEmpty ? '' : "data-controller=\"tooltip\" data-bs-placement=\"right\" title=\"".concat(addButton.textContent, "\"");
    tabs += "<li class=\"nav-item nav-action-add\"><a ".concat(tooltip, " href=\"#\" class=\"nav-link\" data-action=\"arkounay--ux-collection--tabbed-collection#add\" type=\"button\" role=\"tab\">").concat(addButtonIcon, " ").concat(addButtonText, "</a></li>");
  }

  this.tabsTarget.innerHTML = tabs;
  this.tabsTarget.classList.toggle('nav-tabs-empty', this.tabButtonTargets.length === 0);
}

function _generateTab2(target, i) {
  var tiedCollectionElement = this.collectionElementTargets[i];

  var name = _classPrivateMethodGet(this, _getInputNameFromCollectionElement, _getInputNameFromCollectionElement2).call(this, tiedCollectionElement).value;

  if (!name) {
    name = this.emptyTabNameValue;
  }

  var removeButton = '';

  if (this.collectionTarget.dataset.allowRemove == 1) {
    removeButton = "<button class=\"ms-3 btn-sm btn-close\" data-action=\"arkounay--ux-collection--tabbed-collection#remove\"></button>";
  }

  return "<li class=\"nav-item\" role=\"presentation\">\n            <a href=\"#\" class=\"nav-link\" data-arkounay--ux-collection--tabbed-collection-target=\"tabButton\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-".concat(this.collectionTarget.id, "-").concat(i, "\" type=\"button\" role=\"tab\"><span class=\"tab-name\">").concat(name, "</span> ").concat(removeButton, "</a>\n        </li>");
}

function _setActive2(index) {
  var _this$tabButtonTarget,
      _this5 = this,
      _this$collectionEleme;

  var _iterator3 = _createForOfIteratorHelper(this.tabButtonTargets),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var tab = _step3.value;
      tab.classList.remove('active');
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  (_this$tabButtonTarget = this.tabButtonTargets[index]) === null || _this$tabButtonTarget === void 0 ? void 0 : _this$tabButtonTarget.classList.add('active');
  this.collectionElementTargets.forEach(function (element, index) {
    element.classList.remove('active');
    element.id = "tab-".concat(_this5.collectionTarget.id, "-").concat(index);
  });
  (_this$collectionEleme = this.collectionElementTargets[index]) === null || _this$collectionEleme === void 0 ? void 0 : _this$collectionEleme.classList.add('active');
}

_defineProperty(_default, "targets", ['collection', 'collectionElement', 'tabs', 'tabButton']);

_defineProperty(_default, "values", {
  emptyTabName: String
});