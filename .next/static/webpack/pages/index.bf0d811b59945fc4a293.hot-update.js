webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/home/rafael/HD/Estudos/ignite-template-reactjs-upload-de-imagens/src/components/Card.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Card(_ref) {\n  _s();\n\n  var data = _ref.data,\n      viewImage = _ref.viewImage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    borderRadius: \"md\",\n    bgColor: \"pGray.800\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n      isLoaded: !isLoading,\n      display: \"flex\",\n      justifyContent: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        src: data.url,\n        alt: data.title,\n        objectFit: \"fit\",\n        w: \"max\",\n        h: 48,\n        borderTopRadius: \"md\",\n        onClick: function onClick() {\n          return viewImage(data.url);\n        },\n        onLoad: function onLoad() {\n          return setIsLoading(false);\n        },\n        cursor: \"pointer\",\n        alignContent: \"center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      pt: 5,\n      pb: 4,\n      px: 6,\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"SkeletonText\"], {\n          fontSize: \"2xl\",\n          mt: 2,\n          noOfLines: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"SkeletonText\"], {\n          fontSize: \"md\",\n          mt: 7,\n          noOfLines: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n          fontSize: \"2xl\",\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          mt: 2.5,\n          fontSize: \"md\",\n          children: data.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, data.ts, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Card, \"5S7VQ8+9ArWv2AFPIfnY+LwrHeg=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3g/YmYzOCJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YSIsInZpZXdJbWFnZSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQWNPLFNBQVNBLElBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQzs7QUFBQSxrQkFDOUJDLHNEQUFRLENBQUMsSUFBRCxDQURzQjtBQUFBLE1BQ3pEQyxTQUR5RDtBQUFBLE1BQzlDQyxZQUQ4Qzs7QUFHaEUsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBbUIsZ0JBQVksRUFBQyxJQUFoQztBQUFxQyxXQUFPLEVBQUMsV0FBN0M7QUFBQSw0QkFDRSxxRUFBQyx5REFBRDtBQUFVLGNBQVEsRUFBRSxDQUFDRCxTQUFyQjtBQUFnQyxhQUFPLEVBQUMsTUFBeEM7QUFBK0Msb0JBQWMsRUFBQyxRQUE5RDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsV0FBRyxFQUFFSCxJQUFJLENBQUNLLEdBRFo7QUFFRSxXQUFHLEVBQUVMLElBQUksQ0FBQ00sS0FGWjtBQUdFLGlCQUFTLEVBQUMsS0FIWjtBQUlFLFNBQUMsRUFBQyxLQUpKO0FBS0UsU0FBQyxFQUFFLEVBTEw7QUFNRSx1QkFBZSxFQUFDLElBTmxCO0FBT0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1MLFNBQVMsQ0FBQ0QsSUFBSSxDQUFDSyxHQUFOLENBQWY7QUFBQSxTQVBYO0FBUUUsY0FBTSxFQUFFO0FBQUEsaUJBQU1ELFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsU0FSVjtBQVNFLGNBQU0sRUFBQyxTQVRUO0FBVUUsb0JBQVksRUFBQztBQVZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFnQkUscUVBQUMsb0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFZLFFBQUUsRUFBRSxDQUFoQjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBQSxnQkFDR0QsU0FBUyxnQkFDUjtBQUFBLGdDQUNFLHFFQUFDLDZEQUFEO0FBQWMsa0JBQVEsRUFBQyxLQUF2QjtBQUE2QixZQUFFLEVBQUUsQ0FBakM7QUFBb0MsbUJBQVMsRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBYyxrQkFBUSxFQUFDLElBQXZCO0FBQTRCLFlBQUUsRUFBRSxDQUFoQztBQUFtQyxtQkFBUyxFQUFFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFEUSxnQkFNUjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQVMsa0JBQVEsRUFBQyxLQUFsQjtBQUFBLG9CQUF5QkgsSUFBSSxDQUFDTTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMscURBQUQ7QUFBTSxZQUFFLEVBQUUsR0FBVjtBQUFlLGtCQUFRLEVBQUMsSUFBeEI7QUFBQSxvQkFDR04sSUFBSSxDQUFDTztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxLQUFVUCxJQUFJLENBQUNRLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQXJDZVQsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBJbWFnZSxcbiAgU2tlbGV0b24sXG4gIFNrZWxldG9uVGV4dCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENhcmQge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIGRhdGE6IENhcmQ7XG4gIHZpZXdJbWFnZTogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7IGRhdGEsIHZpZXdJbWFnZSB9OiBDYXJkUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3gga2V5PXtkYXRhLnRzfSBib3JkZXJSYWRpdXM9XCJtZFwiIGJnQ29sb3I9XCJwR3JheS44MDBcIj5cbiAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17IWlzTG9hZGluZ30gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2RhdGEudXJsfVxuICAgICAgICAgIGFsdD17ZGF0YS50aXRsZX1cbiAgICAgICAgICBvYmplY3RGaXQ9XCJmaXRcIlxuICAgICAgICAgIHc9XCJtYXhcIlxuICAgICAgICAgIGg9ezQ4fVxuICAgICAgICAgIGJvcmRlclRvcFJhZGl1cz1cIm1kXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3SW1hZ2UoZGF0YS51cmwpfVxuICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKX1cbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9Ta2VsZXRvbj5cblxuICAgICAgPEJveCBwdD17NX0gcGI9ezR9IHB4PXs2fT5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFNrZWxldG9uVGV4dCBmb250U2l6ZT1cIjJ4bFwiIG10PXsyfSBub09mTGluZXM9ezF9IC8+XG4gICAgICAgICAgICA8U2tlbGV0b25UZXh0IGZvbnRTaXplPVwibWRcIiBtdD17N30gbm9PZkxpbmVzPXsxfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPntkYXRhLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IG10PXsyLjV9IGZvbnRTaXplPVwibWRcIj5cbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card.tsx\n");

/***/ })

})