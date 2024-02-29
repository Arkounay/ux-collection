function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }
var id = 0;
function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }
import { Controller } from '@hotwired/stimulus';
var _addCollectionElementListeners = /*#__PURE__*/_classPrivateFieldLooseKey("addCollectionElementListeners");
var _getInputNameFromCollectionElement = /*#__PURE__*/_classPrivateFieldLooseKey("getInputNameFromCollectionElement");
var _generateTabs = /*#__PURE__*/_classPrivateFieldLooseKey("generateTabs");
var _generateTab = /*#__PURE__*/_classPrivateFieldLooseKey("generateTab");
var _setActive = /*#__PURE__*/_classPrivateFieldLooseKey("setActive");
var _default = /*#__PURE__*/function (_Controller) {
  _inheritsLoose(_default, _Controller);
  function _default() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    Object.defineProperty(_assertThisInitialized(_this), _setActive, {
      value: _setActive2
    });
    Object.defineProperty(_assertThisInitialized(_this), _generateTab, {
      value: _generateTab2
    });
    Object.defineProperty(_assertThisInitialized(_this), _generateTabs, {
      value: _generateTabs2
    });
    /**
     * @param collectionElement
     * @returns HTMLInputElement The first input element in a collectionElement will return its name
     */
    Object.defineProperty(_assertThisInitialized(_this), _getInputNameFromCollectionElement, {
      value: _getInputNameFromCollectionElement2
    });
    Object.defineProperty(_assertThisInitialized(_this), _addCollectionElementListeners, {
      value: _addCollectionElementListeners2
    });
    return _this;
  }
  var _proto = _default.prototype;
  _proto.connect = function connect() {
    this.collectionTarget.addEventListener('ux-collection:change', this._onChange.bind(this));
    this.collectionTarget.addEventListener('ux-collection:add', this._onAdd.bind(this));
    this.addButton.parentNode.hidden = true;
    _classPrivateFieldLooseBase(this, _generateTabs)[_generateTabs]();
    _classPrivateFieldLooseBase(this, _setActive)[_setActive](0);
    for (var _iterator = _createForOfIteratorHelperLoose(this.collectionElementTargets), _step; !(_step = _iterator()).done;) {
      var collectionElement = _step.value;
      _classPrivateFieldLooseBase(this, _addCollectionElementListeners)[_addCollectionElementListeners](collectionElement);
    }
  };
  _proto.disconnect = function disconnect() {
    this.collectionTarget.removeEventListener('ux-collection:change', this._onChange.bind(this));
    this.collectionTarget.removeEventListener('ux-collection:add', this._onAdd.bind(this));
  };
  _proto._onChange = function _onChange() {
    var _this2 = this;
    _classPrivateFieldLooseBase(this, _generateTabs)[_generateTabs]();
    var activeIndex = this.collectionElementTargets.findIndex(function (element) {
      return element.classList.contains('active');
    });
    if (this.collectionElementTargets.length > 0 && activeIndex === -1) {
      _classPrivateFieldLooseBase(this, _setActive)[_setActive](0);
    } else {
      // find current active
      _classPrivateFieldLooseBase(this, _setActive)[_setActive](activeIndex);
    }
    this.collectionElementTargets.some(function (element, index) {
      if (element.querySelector('.form-error-message')) {
        _classPrivateFieldLooseBase(_this2, _setActive)[_setActive](index);
        return true;
      }
    });
  };
  _proto._onAdd = function _onAdd(event) {
    _classPrivateFieldLooseBase(this, _generateTabs)[_generateTabs]();
    _classPrivateFieldLooseBase(this, _setActive)[_setActive](this.collectionElementTargets.length - 1);
    _classPrivateFieldLooseBase(this, _addCollectionElementListeners)[_addCollectionElementListeners](event.detail);
    document.querySelectorAll('.tooltip').forEach(function (e) {
      return e.remove();
    });
    var deleteButton = event.detail.querySelector("[data-collection-id=\"" + this.idValue + "\"][data-arkounay--ux-collection--collection-target=\"delete\"]");
    if (deleteButton) {
      deleteButton.hidden = true;
    }
  };
  _proto.remove = function remove(e) {
    // get index
    var index = this.tabButtonTargets.indexOf(e.target.closest('.nav-link'));
    this.collectionElementTargets[index].querySelector("[data-collection-id=\"" + this.idValue + "\"][data-arkounay--ux-collection--collection-target=\"delete\"]").click();
  };
  _proto.add = function add(e) {
    e.preventDefault();
    this.addButton.click();
  };
  _createClass(_default, [{
    key: "addButton",
    get: function get() {
      return this.collectionTarget.querySelector("[data-collection-id=\"" + this.idValue + "\"][data-arkounay--ux-collection--collection-target=\"add\"]");
    }
  }]);
  return _default;
}(Controller);
function _addCollectionElementListeners2(collectionElement) {
  var _this3 = this;
  // change tab name on keyup
  _classPrivateFieldLooseBase(this, _getInputNameFromCollectionElement)[_getInputNameFromCollectionElement](collectionElement).addEventListener('keyup', function (e) {
    var name = e.target.value;
    if (!name) {
      name = _this3.emptyTabNameValue;
    }
    _this3.tabButtonTargets[_this3.collectionElementTargets.indexOf(collectionElement)].querySelector('.tab-name').textContent = name;
  });

  // focus tab when html5 invalid
  for (var _iterator2 = _createForOfIteratorHelperLoose(collectionElement.querySelectorAll('input,textarea,select')), _step2; !(_step2 = _iterator2()).done;) {
    var el = _step2.value;
    el.addEventListener('invalid', function () {
      var index = _this3.collectionElementTargets.indexOf(collectionElement);
      _this3.tabButtonTargets[index].click();
    });
  }
}
function _getInputNameFromCollectionElement2(collectionElement) {
  return collectionElement.querySelector('input');
}
function _generateTabs2() {
  var _this4 = this;
  var tabs = '';
  this.collectionElementTargets.forEach(function (element, index) {
    tabs += _classPrivateFieldLooseBase(_this4, _generateTab)[_generateTab](element, index);
  });
  var maxValue = this.collectionTarget.dataset['arkounay-UxCollection-CollectionMaxValue'];
  if (this.collectionTarget.dataset.allowAdd == 1 && (!maxValue || this.collectionElementTargets.length < maxValue)) {
    var addButtonIcon = this.addButton.querySelector('svg').outerHTML;
    var isEmpty = this.collectionElementTargets.length === 0;
    var addButtonText = isEmpty ? this.addButton.textContent : '';
    var tooltip = isEmpty ? '' : "data-controller=\"tooltip\" data-bs-placement=\"right\" title=\"" + this.addButton.textContent + "\"";
    tabs += "<li class=\"nav-item nav-action-add\"><a " + tooltip + " href=\"#\" class=\"nav-link\" data-action=\"arkounay--ux-collection--tabbed-collection#add\" type=\"button\" role=\"tab\">" + addButtonIcon + " " + addButtonText + "</a></li>";
  }
  this.tabsTarget.innerHTML = tabs;
  this.tabsTarget.classList.toggle('nav-tabs-empty', this.tabButtonTargets.length === 0);
}
function _generateTab2(target, i) {
  var tiedCollectionElement = this.collectionElementTargets[i];
  var name = _classPrivateFieldLooseBase(this, _getInputNameFromCollectionElement)[_getInputNameFromCollectionElement](tiedCollectionElement).value;
  if (!name) {
    name = this.emptyTabNameValue;
  }
  var minValue = this.collectionTarget.dataset['arkounay-UxCollection-CollectionMinValue'];
  var removeButton = '';
  if (this.collectionTarget.dataset.allowRemove == 1 && (!minValue || this.collectionElementTargets.length > minValue)) {
    removeButton = "<button class=\"ms-3 btn-sm btn-close\" data-action=\"arkounay--ux-collection--tabbed-collection#remove\"></button>";
  }
  return "<li class=\"nav-item\" role=\"presentation\">\n            <a href=\"#\" class=\"nav-link\" data-arkounay--ux-collection--tabbed-collection-target=\"tabButton\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-" + this.collectionTarget.id + "-" + i + "\" type=\"button\" role=\"tab\"><span class=\"tab-name\">" + name + "</span> " + removeButton + "</a>\n        </li>";
}
function _setActive2(index) {
  var _this$tabButtonTarget,
    _this5 = this,
    _this$collectionEleme;
  for (var _iterator3 = _createForOfIteratorHelperLoose(this.tabButtonTargets), _step3; !(_step3 = _iterator3()).done;) {
    var tab = _step3.value;
    tab.classList.remove('active');
  }
  (_this$tabButtonTarget = this.tabButtonTargets[index]) == null || _this$tabButtonTarget.classList.add('active');
  this.collectionElementTargets.forEach(function (element, index) {
    element.classList.remove('active');
    element.id = "tab-" + _this5.collectionTarget.id + "-" + index;
  });
  (_this$collectionEleme = this.collectionElementTargets[index]) == null || _this$collectionEleme.classList.add('active');
}
_default.targets = ['collection', 'collectionElement', 'tabs', 'tabButton'];
_default.values = {
  emptyTabName: String,
  id: String
};
export { _default as default };