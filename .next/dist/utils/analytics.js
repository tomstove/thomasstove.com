'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logException = exports.logEvent = exports.logPageView = exports.initGA = undefined;

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = exports.initGA = function initGA() {
  console.log('GA init');
  _reactGa2.default.initialize('UA-111794708-1');
};

var logPageView = exports.logPageView = function logPageView() {
  console.log('Logging pageview for ' + window.location.pathname);
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
};

var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    _reactGa2.default.event({ category: category, action: action });
  }
};

var logException = exports.logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    _reactGa2.default.exception({ description: description, fatal: fatal });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2FuYWx5dGljcy5qcyJdLCJuYW1lcyI6WyJSZWFjdEdBIiwiaW5pdEdBIiwiY29uc29sZSIsImxvZyIsImluaXRpYWxpemUiLCJsb2dQYWdlVmlldyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZXQiLCJwYWdlIiwicGFnZXZpZXciLCJsb2dFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiZXZlbnQiLCJsb2dFeGNlcHRpb24iLCJkZXNjcmlwdGlvbiIsImZhdGFsIiwiZXhjZXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBRUE7Ozs7OztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLFNBQU0sQUFDMUI7VUFBUSxBQUFSLElBQVksQUFBWixBQUNBO29CQUFRLEFBQVIsV0FBbUIsQUFBbkIsQUFDRDtBQUhNLEFBS1A7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsY0FBTSxBQUMvQjtVQUFRLEFBQVIsOEJBQW9DLE9BQU8sQUFBUCxTQUFnQixBQUFwRCxBQUNBO29CQUFRLEFBQVIsSUFBWSxFQUFFLE1BQU0sT0FBTyxBQUFQLFNBQWdCLEFBQXhCLEFBQVosQUFDQTtvQkFBUSxBQUFSLFNBQWlCLE9BQU8sQUFBUCxTQUFnQixBQUFqQyxBQUNEO0FBSk0sQUFNUDs7QUFBTyxJQUFNLDhCQUFXLFNBQVgsQUFBVyxXQUFnQztNQUEvQixBQUErQiwrRUFBcEIsQUFBb0I7TUFBaEIsQUFBZ0IsNkVBQVAsQUFBTyxBQUN0RDs7TUFBSSxZQUFZLEFBQWhCLFFBQXdCLEFBQ3RCO3NCQUFRLEFBQVIsTUFBYyxFQUFFLFVBQUYsVUFBWSxRQUFaLEFBQWQsQUFDRDtBQUNGO0FBSk0sQUFNUDs7QUFBTyxJQUFNLHNDQUFlLFNBQWYsQUFBZSxlQUFxQztNQUFwQyxBQUFvQyxrRkFBdEIsQUFBc0I7TUFBbEIsQUFBa0IsNEVBQVYsQUFBVSxBQUMvRDs7TUFBSSxBQUFKLGFBQWlCLEFBQ2Y7c0JBQVEsQUFBUixVQUFrQixFQUFFLGFBQUYsYUFBZSxPQUFmLEFBQWxCLEFBQ0Q7QUFDRjtBQUpNIiwiZmlsZSI6ImFuYWx5dGljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tc3RvdmUvRG9jdW1lbnRzL0NvZGluZy9uZXh0anMvdGhvbWFzc3RvdmUuY29tIn0=