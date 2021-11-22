webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Modal/AddImage.tsx":
/*!*******************************************!*\
  !*** ./src/components/Modal/AddImage.tsx ***!
  \*******************************************/
/*! exports provided: ModalAddImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalAddImage\", function() { return ModalAddImage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _Form_FormAddImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Form/FormAddImage */ \"./src/components/Form/FormAddImage.tsx\");\n\nvar _jsxFileName = \"/home/rafael/HD/Estudos/ignite-template-reactjs-upload-de-imagens/src/components/Modal/AddImage.tsx\";\n\n\nfunction ModalAddImage(_ref) {\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose;\n\n  var handleCloseModal = function handleCloseModal() {\n    onClose();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: handleCloseModal,\n    isCentered: true,\n    size: \"4xl\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n      bgColor: \"pGray.900\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n        fontSize: \"4xl\",\n        children: \"Nova imagem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n        px: 5,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Form_FormAddImage__WEBPACK_IMPORTED_MODULE_2__[\"FormAddImage\"], {\n          closeModal: handleCloseModal\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n_c = ModalAddImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalAddImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvQWRkSW1hZ2UudHN4PzkwNDMiXSwibmFtZXMiOlsiTW9kYWxBZGRJbWFnZSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBU0E7QUFPTyxTQUFTQSxhQUFULE9BRzZCO0FBQUEsTUFGbENDLE1BRWtDLFFBRmxDQSxNQUVrQztBQUFBLE1BRGxDQyxPQUNrQyxRQURsQ0EsT0FDa0M7O0FBQ2xDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBWTtBQUNuQ0QsV0FBTztBQUNSLEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsc0RBQUQ7QUFBTyxVQUFNLEVBQUVELE1BQWY7QUFBdUIsV0FBTyxFQUFFRSxnQkFBaEM7QUFBa0QsY0FBVSxNQUE1RDtBQUE2RCxRQUFJLEVBQUMsS0FBbEU7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFjLGFBQU8sRUFBQyxXQUF0QjtBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQWEsZ0JBQVEsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBS0UscUVBQUMsMERBQUQ7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFBLCtCQUNFLHFFQUFDLCtEQUFEO0FBQWMsb0JBQVUsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO0tBdEJlSCxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTW9kYWwvQWRkSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuaW1wb3J0IHsgRm9ybUFkZEltYWdlIH0gZnJvbSAnLi4vRm9ybS9Gb3JtQWRkSW1hZ2UnO1xuXG5pbnRlcmZhY2UgTW9kYWxBZGRJbWFnZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxBZGRJbWFnZSh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbn06IE1vZGFsQWRkSW1hZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpOiB2b2lkID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IGlzQ2VudGVyZWQgc2l6ZT1cIjR4bFwiPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vZGFsQ29udGVudCBiZ0NvbG9yPVwicEdyYXkuOTAwXCI+XG4gICAgICAgIDxNb2RhbEhlYWRlciBmb250U2l6ZT1cIjR4bFwiPk5vdmEgaW1hZ2VtPC9Nb2RhbEhlYWRlcj5cblxuICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuXG4gICAgICAgIDxNb2RhbEJvZHkgcHg9ezV9PlxuICAgICAgICAgIDxGb3JtQWRkSW1hZ2UgY2xvc2VNb2RhbD17aGFuZGxlQ2xvc2VNb2RhbH0gLz5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICA8L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Modal/AddImage.tsx\n");

/***/ })

})