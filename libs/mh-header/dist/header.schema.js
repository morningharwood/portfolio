"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _cannerScript = _interopRequireDefault(require("canner-script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = (_ref) => {
  let attributes = _ref.attributes,
      children = _ref.children;
  return React.createElement("object", {
    keyName: attributes.keyName
  }, React.createElement("string", {
    keyName: "category",
    title: "Header Category"
  }), React.createElement("string", {
    keyName: "title",
    title: "Header Title"
  }), React.createElement("string", {
    keyName: "description",
    title: "Header Description"
  }));
};

exports.Header = Header;