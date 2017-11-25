'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomstove/Documents/Coding/nextjs/thomasstove.com/components/meta.js';


_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'my app'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/style.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTlByb2dyZXNzIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxnQkFBQSxBQUFPLHFCQUFxQixZQUFBO1NBQU0sb0JBQU4sQUFBTSxBQUFVO0FBQTVDO0FBQ0EsZ0JBQUEsQUFBTyx3QkFBd0IsWUFBQTtTQUFNLG9CQUFOLEFBQU0sQUFBVTtBQUEvQztBQUNBLGdCQUFBLEFBQU8scUJBQXFCLFlBQUE7U0FBTSxvQkFBTixBQUFNLEFBQVU7QUFBNUMsQUFFQTs7a0JBQWUsWUFBQTt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxtREFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sU0FBTixBQUFjO2dCQUFkO2tCQUhGLEFBR0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFKRixBQUlFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBTEYsQUFLRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVJTLEFBQ2IsQUFDRSxBQU1FO0FBQUE7O0FBUk4iLCJmaWxlIjoibWV0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tc3RvdmUvRG9jdW1lbnRzL0NvZGluZy9uZXh0anMvdGhvbWFzc3RvdmUuY29tIn0=