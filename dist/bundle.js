import React, { Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var RoundBtn =
/*#__PURE__*/
function (_Component) {
  _inherits(RoundBtn, _Component);

  function RoundBtn(props) {
    _classCallCheck(this, RoundBtn);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundBtn).call(this, props));
  }

  _createClass(RoundBtn, [{
    key: "render",
    value: function render() {
      return React.createElement("button", {
        className: "btn round-btn",
        onClick: this.props.clickAction
      }, this.props.children);
    }
  }]);

  return RoundBtn;
}(Component);

var Btn =
/*#__PURE__*/
function (_Component) {
  _inherits(Btn, _Component);

  function Btn(props) {
    _classCallCheck(this, Btn);

    return _possibleConstructorReturn(this, _getPrototypeOf(Btn).call(this, props));
  }

  _createClass(Btn, [{
    key: "render",
    value: function render() {
      return React.createElement("button", {
        className: "btn ".concat(this.props.primary ? 'primary-btn' : 'secondary-btn'),
        onClick: this.props.clickAction,
        disabled: this.props.disabled
      }, this.props.children);
    }
  }]);

  return Btn;
}(Component);

var PillBtn =
/*#__PURE__*/
function (_Component) {
  _inherits(PillBtn, _Component);

  function PillBtn(props) {
    _classCallCheck(this, PillBtn);

    return _possibleConstructorReturn(this, _getPrototypeOf(PillBtn).call(this, props));
  }

  _createClass(PillBtn, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        className: "flex justify-content-center align-items-center"
      }, this.props.buttons && this.props.buttons.map(function (button, i) {
        return React.createElement("button", {
          key: i,
          className: "btn ".concat(i === 0 ? 'pill-btn-left' : '', " ").concat(i === _this.props.buttons.length - 1 ? 'pill-btn-right' : ''),
          onClick: button.action,
          disabled: button.disabled
        }, button.btnText);
      }));
    }
  }]);

  return PillBtn;
}(Component);

var OptionsList =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionsList, _Component);

  function OptionsList(props) {
    var _this;

    _classCallCheck(this, OptionsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionsList).call(this, props));
    _this.state = {
      checked: '',
      showHidden: false
    };
    _this.handleCheck = _this.handleCheck.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openMore = _this.openMore.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OptionsList, [{
    key: "handleCheck",
    value: function handleCheck(e) {
      this.setState({
        checked: e.target.id
      });
      this.props.action(e.target.value);
    }
  }, {
    key: "openMore",
    value: function openMore(e) {
      e.preventDefault();
      this.setState({
        showHidden: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = [];
      this.props.options.map(function (option, i) {
        options.push(React.createElement("label", {
          key: i,
          htmlFor: option.value,
          className: "single-option ".concat(_this2.state.checked === option.value ? 'checked-option' : '', " ").concat(option.disabled ? 'disabled-option' : ''),
          disabled: option.disabled
        }, React.createElement("input", {
          type: "radio",
          id: option.value,
          name: option.name,
          value: option.value,
          onChange: _this2.handleCheck,
          disabled: option.disabled
        }), option.text));
      });
      return React.createElement("form", {
        action: "",
        className: "flex justify-content-center align-items-center flex-column"
      }, options.length <= 3 && options, options.length > 3 && options.slice(0, 3), !this.state.showHidden && React.createElement("label", {
        htmlFor: "more",
        className: "single-option ".concat(this.state.checked === 'more' ? 'checked-option' : '')
      }, React.createElement("input", {
        type: "radio",
        id: "more",
        name: options[0].name,
        value: "more",
        onChange: this.openMore
      }), "More"), this.state.showHidden && options.slice(3));
    }
  }]);

  return OptionsList;
}(Component);

var PillOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(PillOptions, _Component);

  function PillOptions(props) {
    var _this;

    _classCallCheck(this, PillOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PillOptions).call(this, props));
    _this.state = {
      checked: ''
    };
    _this.handleCheck = _this.handleCheck.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PillOptions, [{
    key: "handleCheck",
    value: function handleCheck(e) {
      this.setState({
        checked: e.target.id
      });
      this.props.action(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("form", {
        action: "",
        className: "flex justify-content-center align-items-center flex-wrap"
      }, this.props.options && this.props.options.map(function (option, i) {
        return React.createElement("label", {
          key: i,
          htmlFor: option.value,
          className: "single-pill-option \n\t\t\t\t\t".concat(_this2.state.checked === option.value ? 'checked-option' : '', "  \n\t\t\t\t\t").concat(i === 0 && 'pill-option-left', "\n\t\t\t\t\t").concat(i === _this2.props.options.length - 1 && 'pill-option-right', "\n\t\t\t\t\t")
        }, React.createElement("input", {
          type: "radio",
          id: option.value,
          name: option.name,
          value: option.value,
          onChange: _this2.handleCheck
        }), option.text);
      }));
    }
  }]);

  return PillOptions;
}(Component);

export { RoundBtn, Btn, PillBtn, OptionsList, PillOptions };
