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
        disabled: true
      }, this.props.children);
    }
  }]);

  return Btn;
}(Component);

export { RoundBtn, Btn };
