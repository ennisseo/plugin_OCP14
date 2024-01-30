"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    closeModal = _ref.closeModal;
  // Close the modal when clicking outside the modal content
  var handleOutsideClick = function handleOutsideClick(e) {
    if (isOpen && e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  // Close the modal on escape key press
  var handleEscapeKey = function handleEscapeKey(e) {
    if (isOpen && e.key === 'Escape') {
      closeModal();
    }
  };
  (0, _react.useEffect)(function () {
    // Attach event listeners when the modal is open
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Remove event listeners when the modal is closed
    return function () {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  });
  return isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Employee created !"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close-button",
    onClick: closeModal
  }, "X"))) : null;
};
var _default = exports["default"] = Modal;