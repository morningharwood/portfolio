"use strict";

var _react = _interopRequireDefault(require("react"));

var _shallow = _interopRequireDefault(require("react-test-renderer/shallow"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Block', () => {
  it('renders correctly', () => {
    const renderer = new _shallow.default();
    const tree = renderer.render(_react.default.createElement(_index.default, {
      title: 'title'
    }));
    expect(tree).toMatchSnapshot();
  });
});