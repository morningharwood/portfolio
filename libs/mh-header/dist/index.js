"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styletronReact = require("styletron-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledHeader = (0, _styletronReact.styled)('header', () => {
  return {
    fontWeight: 'normal',
    color: 'var(--primaryOn)'
  };
});
const StyledCategory = (0, _styletronReact.styled)('h3', () => {
  return {
    fontSize: 'var(--ms-1)',
    fontFamily: 'var(--sans)',
    fontWeight: '700',
    margin: 0,
    color: 'var(--primaryAlt)',
    textTransform: 'uppercase'
  };
});
const StyledTitle = (0, _styletronReact.styled)('h1', () => {
  return {
    fontSize: 'var(--ms4)',
    fontFamily: 'var(--serif)',
    margin: 0
  };
});
const StyledParagraph = (0, _styletronReact.styled)('p', () => {
  return {
    fontSize: 'var(--ms0)'
  };
});

const Header = props => {
  const title = props.title,
        description = props.description,
        category = props.category;
  return _react.default.createElement(StyledHeader, null, _react.default.createElement(StyledCategory, null, category), _react.default.createElement(StyledTitle, null, title), _react.default.createElement(StyledParagraph, null, description, " "));
};

var _default = Header;
exports.default = _default;