'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stimulus = require("@hotwired/stimulus");

var _sortablejs = _interopRequireDefault(require("sortablejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _insertedAtPosition = /*#__PURE__*/new WeakSet();

var _getCollectionItemFromTarget = /*#__PURE__*/new WeakSet();

var _change = /*#__PURE__*/new WeakSet();

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

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _change);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getCollectionItemFromTarget);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _insertedAtPosition);

    _defineProperty(_assertThisInitialized(_this), "prototype", void 0);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
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
            _classPrivateMethodGet(_this2, _change, _change2).call(_this2);
          }
        };

        if (this.hasDragAndDropPreventOnFilterValue) {
          sortableOptions.preventOnFilter = this.dragAndDropPreventOnFilterValue;
        }

        if (this.hasDragAndDropFilterValue) {
          sortableOptions.filter = this.dragAndDropFilterValue;
        }

        _sortablejs["default"].create(this.element, sortableOptions);
      }

      _classPrivateMethodGet(this, _change, _change2).call(this);

      this._dispatchEvent('ux-collection:connect');
    }
  }, {
    key: "moveUp",
    value: function moveUp(e) {
      e.preventDefault();

      var element = _classPrivateMethodGet(this, _getCollectionItemFromTarget, _getCollectionItemFromTarget2).call(this, e.target);

      var index = this.collectionElementTargets.indexOf(element);

      if (index === 0) {
        return;
      }

      var newIndex = index - 1; // move the dom element up

      this.collectionElementTargets[newIndex].before(element);

      _classPrivateMethodGet(this, _change, _change2).call(this);

      this._dispatchEvent('ux-collection:moveUp', newIndex);
    }
  }, {
    key: "moveDown",
    value: function moveDown(e) {
      e.preventDefault();

      var element = _classPrivateMethodGet(this, _getCollectionItemFromTarget, _getCollectionItemFromTarget2).call(this, e.target);

      var index = this.collectionElementTargets.indexOf(element);

      if (index === this.length - 1) {
        return;
      }

      var newIndex = index + 1; // move the dom element down

      this.collectionElementTargets[newIndex].after(element);

      _classPrivateMethodGet(this, _change, _change2).call(this);

      this._dispatchEvent('ux-collection:moveDown', newIndex);
    }
  }, {
    key: "remove",
    value: function remove(e) {
      e.preventDefault();

      var element = _classPrivateMethodGet(this, _getCollectionItemFromTarget, _getCollectionItemFromTarget2).call(this, e.target);

      element.remove();

      _classPrivateMethodGet(this, _change, _change2).call(this);

      this._dispatchEvent('ux-collection:remove', element);
    }
  }, {
    key: "add",
    value: function add(e, position) {
      e === null || e === void 0 ? void 0 : e.preventDefault();
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

      return _classPrivateMethodGet(this, _insertedAtPosition, _insertedAtPosition2).call(this, position);
    }
  }, {
    key: "insert",
    value: function insert(e) {
      e.preventDefault();
      var prototype = this.prototype.replaceAll(this.prototypeName, this.autoIncrement);
      var position = this.insertTargets.indexOf(e.currentTarget);
      this.collectionElementTargets[position].insertAdjacentHTML('afterend', prototype);
      return _classPrivateMethodGet(this, _insertedAtPosition, _insertedAtPosition2).call(this, position);
    }
  }, {
    key: "length",
    get: function get() {
      return this.collectionElementTargets.length;
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(name, payload) {
      this.element.dispatchEvent(new CustomEvent(name, {
        detail: payload
      }));
    }
  }]);

  return _default;
}(_stimulus.Controller);

exports["default"] = _default;

function _insertedAtPosition2(position) {
  var added = this.collectionElementTargets[position + 1];

  _classPrivateMethodGet(this, _change, _change2).call(this);

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
  } else {
    var namePrefix = this.element.dataset.namePrefix; // refresh all form names if no position fields

    for (var _i = 0; _i < this.length; _i++) {
      var replaceRegExp = new RegExp("".concat(namePrefix, "[\\d+]").replaceAll('[', '\\[').replaceAll(']', '\\]'), 'g');

      var _iterator = _createForOfIteratorHelper(this.collectionElementTargets[_i].querySelectorAll(["[data-name-prefix^=\"".concat(namePrefix, "[\"]")])),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var collection = _step.value;
          // replace data-name-prefix for nested collection, otherwise sub-collections will have a bad namePrefix
          collection.dataset.namePrefix = collection.dataset.namePrefix.replaceAll(replaceRegExp, "".concat(namePrefix, "[").concat(_i, "]"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.collectionElementTargets[_i].querySelectorAll(["[data-name-prefix^=\"".concat(namePrefix, "[\"]")])),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _collection = _step2.value;
          // replace data-prototype for nested collection, otherwise sub-collections will have a bad inputs
          _collection.dataset.prototype = _collection.dataset.prototype.replaceAll(replaceRegExp, "".concat(namePrefix, "[").concat(_i, "]"));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this.collectionElementTargets[_i].querySelectorAll(["[name^=\"".concat(namePrefix, "[\"]")])),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          var newName = input.name.replaceAll(replaceRegExp, "".concat(namePrefix, "[").concat(_i, "]")).replaceAll('_ux_collection_tmp_swap', ''); // if a radio's name changes to an already existing name, it might uncheck the one which has the same name.
          // to prevent this I append _ux_collection_tmp_swap to get a temporary name. It'll get changed back when reassigning names

          var inputsWithSameName = this.element.querySelectorAll("[name=\"".concat(newName, "\"]"));

          var _iterator4 = _createForOfIteratorHelper(inputsWithSameName),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var inputWithSameName = _step4.value;

              if (_classPrivateMethodGet(this, _getCollectionItemFromTarget, _getCollectionItemFromTarget2).call(this, inputWithSameName) !== this.collectionElementTargets[_i]) {
                inputWithSameName.name += '_ux_collection_tmp_swap';
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          input.name = newName;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } // refresh button positions


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
  } // hide add button if there is a max value


  if (this.hasMaxValue) {
    var hasReachedMaxValue = this.length >= this.maxValue;

    if (this.hasAddTarget) {
      this.addTarget.classList.toggle('d-none', hasReachedMaxValue);
    }

    if (this.displayInsertButtonValue) {
      var _iterator5 = _createForOfIteratorHelper(this.insertTargets),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var insertTarget = _step5.value;
          insertTarget.classList.toggle('d-none', hasReachedMaxValue);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = _createForOfIteratorHelper(this.collectionElementTargets),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var element = _step6.value;
          element.classList.toggle('collection-element-with-insert', !hasReachedMaxValue);
          element.classList.toggle('mb-3', hasReachedMaxValue);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
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
  } // hide remove button if there is a min value


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

_defineProperty(_default, "targets", ['collectionElement', 'up', 'down', 'add', 'addWrapper', 'delete', 'insert', 'insertText']);

_defineProperty(_default, "values", {
  min: Number,
  max: Number,
  allowDragAndDrop: Boolean,
  dragAndDropFilter: String,
  dragAndDropPreventOnFilter: Boolean,
  displaySortButtons: Boolean,
  displayInsertButton: Boolean,
  positionSelector: String
});