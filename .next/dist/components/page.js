'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _analytics = require('../utils/analytics');

var _meta = require('./meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomstove/Documents/Coding/nextjs/thomasstove.com/components/page.js';


var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        (0, _analytics.initGA)();
        window.GA_INITIALIZED = true;
      }
      (0, _analytics.logPageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_meta2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.children));
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImluaXRHQSIsImxvZ1BhZ2VWaWV3IiwiTWV0YSIsIlBhZ2UiLCJ3aW5kb3ciLCJHQV9JTklUSUFMSVpFRCIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFtQjs7QUFDcEMsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFSSxBOzs7Ozs7Ozs7Ozt3Q0FDRSxBQUNuQjtVQUFJLENBQUMsT0FBTCxBQUFZLGdCQUFnQixBQUMxQjtBQUNBO2VBQUEsQUFBTyxpQkFBUCxBQUF3QixBQUN6QjtBQUNEO0FBQ0Q7Ozs7NkJBQ1MsQUFDUjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUM7O29CQUFEO3NCQURBLEFBQ0EsQUFDRTtBQURGO0FBQUEsMEJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BSlosQUFDRSxBQUVFLEFBQ2MsQUFJbkI7Ozs7O0VBakIrQixnQkFBTSxBOztrQkFBbkIsQSIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21zdG92ZS9Eb2N1bWVudHMvQ29kaW5nL25leHRqcy90aG9tYXNzdG92ZS5jb20ifQ==