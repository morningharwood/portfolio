"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = props => {
  const title = props.title,
        description = props.description;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, title), _react.default.createElement("div", null, description, " 1"));
};

var _default = Header;
exports.default = _default;