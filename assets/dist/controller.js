'use strict';

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
import Sortable from 'sortablejs';
var _insertedAtPosition = /*#__PURE__*/_classPrivateFieldLooseKey("insertedAtPosition");
var _getCollectionItemFromTarget = /*#__PURE__*/_classPrivateFieldLooseKey("getCollectionItemFromTarget");
var _change = /*#__PURE__*/_classPrivateFieldLooseKey("change");
var _default = /*#__PURE__*/function (_Controller) {
  _inheritsLoose(_default, _Controller);
  function _default() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    Object.defineProperty(_assertThisInitialized(_this), _change, {
      value: _change2
    });
    Object.defineProperty(_assertThisInitialized(_this), _getCollectionItemFromTarget, {
      value: _getCollectionItemFromTarget2
    });
    Object.defineProperty(_assertThisInitialized(_this), _insertedAtPosition, {
      value: _insertedAtPosition2
    });
    _this.prototype = void 0;
    return _this;
  }
  var _proto = _default.prototype;
  _proto.connect = function connect() {
    var _this2 = this;
    this.element[this.identifier] = this;
    this.prototype = this.element.dataset.prototype;
    this.prototypeName = this.element.dataset.prototypeName;
    this.autoIncrement = this.length;
    if (this.hasMinValue && this.minValue && this.prototype !== undefined) {
      for (var i = this.length; i < this.minValue; i++) {
        this.add();
      }
    }
    if (this.allowDragAndDropValue) {
      var sortableOptions = {
        draggable: '[data-arkounay--ux-collection--collection-target="collectionElement"]',
        onSort: function onSort() {
          _classPrivateFieldLooseBase(_this2, _change)[_change]();
        }
      };
      if (this.hasDragAndDropPreventOnFilterValue) {
        sortableOptions.preventOnFilter = this.dragAndDropPreventOnFilterValue;
      }
      if (this.hasDragAndDropFilterValue) {
        sortableOptions.filter = this.dragAndDropFilterValue;
      }
      Sortable.create(this.element, sortableOptions);
    }
    _classPrivateFieldLooseBase(this, _change)[_change]();
    this._dispatchEvent('ux-collection:connect');
  };
  _proto.moveUp = function moveUp(e) {
    e.preventDefault();
    var element = _classPrivateFieldLooseBase(this, _getCollectionItemFromTarget)[_getCollectionItemFromTarget](e.target);
    var index = this.collectionElementTargets.indexOf(element);
    if (index === 0) {
      return;
    }
    var newIndex = index - 1;

    // move the dom element up
    this.collectionElementTargets[newIndex].before(element);
    _classPrivateFieldLooseBase(this, _change)[_change]();
    this._dispatchEvent('ux-collection:moveUp', newIndex);
  };
  _proto.moveDown = function moveDown(e) {
    e.preventDefault();
    var element = _classPrivateFieldLooseBase(this, _getCollectionItemFromTarget)[_getCollectionItemFromTarget](e.target);
    var index = this.collectionElementTargets.indexOf(element);
    if (index === this.length - 1) {
      return;
    }
    var newIndex = index + 1;

    // move the dom element down
    this.collectionElementTargets[newIndex].after(element);
    _classPrivateFieldLooseBase(this, _change)[_change]();
    this._dispatchEvent('ux-collection:moveDown', newIndex);
  };
  _proto.remove = function remove(e) {
    e.preventDefault();
    var element = _classPrivateFieldLooseBase(this, _getCollectionItemFromTarget)[_getCollectionItemFromTarget](e.target);
    element.remove();
    _classPrivateFieldLooseBase(this, _change)[_change]();
    this._dispatchEvent('ux-collection:remove', element);
  };
  _proto.add = function add(e, position) {
    e == null || e.preventDefault();
    var prototype = this.prototype.replaceAll(this.prototypeName, this.autoIncrement);
    if (this.length === 0) {
      this.element.insertAdjacentHTML('afterbegin', prototype);
      position = -1;
    } else {
      if (position === undefined) {
        position = this.length - 1;
      }
      this.collectionElementTargets[position].insertAdjacentHTML('afterend', prototype);
    }
    return _classPrivateFieldLooseBase(this, _insertedAtPosition)[_insertedAtPosition](position);
  };
  _proto.insert = function insert(e) {
    e.preventDefault();
    var prototype = this.prototype.replaceAll(this.prototypeName, this.autoIncrement);
    var position = this.insertTargets.indexOf(e.currentTarget);
    this.collectionElementTargets[position].insertAdjacentHTML('afterend', prototype);
    return _classPrivateFieldLooseBase(this, _insertedAtPosition)[_insertedAtPosition](position);
  };
  _proto._dispatchEvent = function _dispatchEvent(name, payload) {
    this.element.dispatchEvent(new CustomEvent(name, {
      detail: payload
    }));
  };
  _createClass(_default, [{
    key: "length",
    get: function get() {
      return this.collectionElementTargets.length;
    }
  }]);
  return _default;
}(Controller);
function _insertedAtPosition2(position) {
  var added = this.collectionElementTargets[position + 1];
  _classPrivateFieldLooseBase(this, _change)[_change]();
  this._dispatchEvent('ux-collection:add', added);
  this.autoIncrement++;
  return added;
}
function _getCollectionItemFromTarget2(target) {
  return target.closest('[data-arkounay--ux-collection--collection-target="collectionElement"]');
}
function _change2() {
  this._dispatchEvent('ux-collection:before-change');
  if (this.hasPositionSelectorValue) {
    for (var i = 0; i < this.length; i++) {
      this.collectionElementTargets[i].querySelector(this.positionSelectorValue).value = i;
    }
  } else if (this.allowDragAndDropValue || this.displaySortButtonsValue || this.displayInsertButtonValue) {
    var namePrefix = this.element.dataset.namePrefix;
    // refresh all form names if no position fields
    for (var _i = 0; _i < this.length; _i++) {
      var replaceRegExp = new RegExp((namePrefix + "[\\d+]").replaceAll('[', '\\[').replaceAll(']', '\\]'), 'g');
      for (var _iterator = _createForOfIteratorHelperLoose(this.collectionElementTargets[_i].querySelectorAll(["[data-name-prefix^=\"" + namePrefix + "[\"]"])), _step; !(_step = _iterator()).done;) {
        var collection = _step.value;
        // replace data-name-prefix for nested collection, otherwise sub-collections will have a bad namePrefix
        collection.dataset.namePrefix = collection.dataset.namePrefix.replaceAll(replaceRegExp, namePrefix + "[" + _i + "]");
      }
      for (var _iterator2 = _createForOfIteratorHelperLoose(this.collectionElementTargets[_i].querySelectorAll(["[data-name-prefix^=\"" + namePrefix + "[\"]"])), _step2; !(_step2 = _iterator2()).done;) {
        var _collection = _step2.value;
        // replace data-prototype for nested collection, otherwise sub-collections will have a bad inputs
        _collection.dataset.prototype = _collection.dataset.prototype.replaceAll(replaceRegExp, namePrefix + "[" + _i + "]");
      }
      for (var _iterator3 = _createForOfIteratorHelperLoose(this.collectionElementTargets[_i].querySelectorAll(["[name^=\"" + namePrefix + "[\"]"])), _step3; !(_step3 = _iterator3()).done;) {
        var input = _step3.value;
        var newName = input.name.replaceAll(replaceRegExp, namePrefix + "[" + _i + "]").replaceAll('_ux_collection_tmp_swap', '');

        // if a radio's name changes to an already existing name, it might uncheck the one which has the same name.
        // to prevent this I append _ux_collection_tmp_swap to get a temporary name. It'll get changed back when reassigning names
        var inputsWithSameName = this.element.querySelectorAll("[name=\"" + newName + "\"]");
        for (var _iterator4 = _createForOfIteratorHelperLoose(inputsWithSameName), _step4; !(_step4 = _iterator4()).done;) {
          var inputWithSameName = _step4.value;
          if (_classPrivateFieldLooseBase(this, _getCollectionItemFromTarget)[_getCollectionItemFromTarget](inputWithSameName) !== this.collectionElementTargets[_i]) {
            inputWithSameName.name += '_ux_collection_tmp_swap';
          }
        }
        input.name = newName;
      }
    }
  }

  // refresh button positions
  if (this.upTargets.length > 0) {
    if (this.displaySortButtonsValue) {
      for (var _i2 = 0; _i2 < this.length; _i2++) {
        this.upTargets[_i2].classList.remove('d-none');
        this.downTargets[_i2].classList.remove('d-none');
      }
      this.upTargets[0].classList.add('d-none');
      this.downTargets[this.downTargets.length - 1].classList.add('d-none');
    } else {
      for (var _i3 = 0; _i3 < this.length; _i3++) {
        this.upTargets[_i3].classList.add('d-none');
        this.downTargets[_i3].classList.add('d-none');
      }
    }
  }

  // hide add button if there is a max value
  if (this.hasMaxValue) {
    var hasReachedMaxValue = this.length >= this.maxValue;
    if (this.hasAddTarget) {
      this.addTarget.classList.toggle('d-none', hasReachedMaxValue);
    }
    if (this.displayInsertButtonValue) {
      for (var _iterator5 = _createForOfIteratorHelperLoose(this.insertTargets), _step5; !(_step5 = _iterator5()).done;) {
        var insertTarget = _step5.value;
        insertTarget.classList.toggle('d-none', hasReachedMaxValue);
      }
      for (var _iterator6 = _createForOfIteratorHelperLoose(this.collectionElementTargets), _step6; !(_step6 = _iterator6()).done;) {
        var element = _step6.value;
        element.classList.toggle('collection-element-with-insert', !hasReachedMaxValue);
        element.classList.toggle('mb-3', hasReachedMaxValue);
      }
    }
  }
  if (this.displayInsertButtonValue) {
    this.addWrapperTarget.classList.toggle('d-none', this.length > 0);
    if (this.hasInsertTextTarget) {
      for (var _i4 = 0; _i4 < this.insertTextTargets.length - 1; _i4++) {
        this.insertTextTargets[_i4].textContent = this.insertTextTargets[_i4].dataset.insertText;
      }
      this.insertTextTargets[this.insertTextTargets.length - 1].textContent = this.insertTextTargets[this.insertTextTargets.length - 1].dataset.addText;
    }
  }

  // hide remove button if there is a min value
  if (this.hasMinValue && this.hasMinValue > 0 && this.deleteTargets.length > 0) {
    var hideDelete = this.length <= this.minValue;
    for (var _i5 = 0; _i5 < this.collectionElementTargets.length; _i5++) {
      this.collectionElementTargets[_i5].classList.toggle('collection-hide-delete', hideDelete);
    }
    for (var _i6 = 0; _i6 < this.deleteTargets.length; _i6++) {
      this.deleteTargets[_i6].classList.toggle('d-none', hideDelete);
    }
  }
  this._dispatchEvent('ux-collection:change');
}
_default.targets = ['collectionElement', 'up', 'down', 'add', 'addWrapper', 'delete', 'insert', 'insertText'];
_default.values = {
  min: Number,
  max: Number,
  allowDragAndDrop: Boolean,
  dragAndDropFilter: String,
  dragAndDropPreventOnFilter: Boolean,
  displaySortButtons: Boolean,
  displayInsertButton: Boolean,
  positionSelector: String
};
export { _default as default };