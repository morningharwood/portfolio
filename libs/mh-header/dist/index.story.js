"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Header', module).add('with default fixtures', () => _react.default.createElement(_index.default, {
  title: 'Nike Jordan Editor',
  description: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
  category: 'Web Application'
}));