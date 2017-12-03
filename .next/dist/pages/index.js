'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeInstagram = require('node-instagram');

var _nodeInstagram2 = _interopRequireDefault(_nodeInstagram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomstove/Documents/Coding/nextjs/thomasstove.com/pages/index.js?entry';


var instagram = new _nodeInstagram2.default({
  clientId: '4f857ddae3d04110abe43e533b820fc3',
  clientSecret: 'a55c4c1d377b4fe6a0e943ce889c86d3',
  accessToken: '1749449.1677ed0.90fddba0077949e4ab00c4296b9c0369'
});

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('section', { id: 'intro', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('img', { className: 'svgLogo', src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement('div', { className: 'welcome', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Hi, I\'m Tom Stove. I design and build furniture and cabinets to suit your space and needs. I use a variety of materials and techniques and am based in Hobart, Tasmania.')))), _react2.default.createElement('section', { id: 'biography', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'My Story')), _react2.default.createElement('div', { className: 'subhead', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'A lifes work of embracing both the creative and the quantitative, developing thriving online businesses and enviable brands.'), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'My adventures in furniture design began in 2009 when my life took on a new direction. I found working with my hands in a creative fashion therapeutic and akin to simpler times. I was captivated with Italian minimalism and the sleek, clean lines representative of the early 21st century. Inspired by the works of designers ', _react2.default.createElement('a', { href: 'http://www.aisslinger.de/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Werner Aisslinger'), ' and ', _react2.default.createElement('a', { href: 'https://www.rknl.com/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Ronald Knol'), ', and of furniture studios ', _react2.default.createElement('a', { href: 'https://www.cappellini.it/en', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Cappellini'), ' and ', _react2.default.createElement('a', { href: 'https://www.vitra.com/en-au/home', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Vitra'), ', I set to work creating my own designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'In 2012, I took the next step in my education and began working with solid timber. I joined ', _react2.default.createElement('a', { href: 'https://www.dot.org.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Designed Objects Tasmania'), ', a cooperative studio and workshop to advance my craft. I learnt how to use machinery and discovered the beauty of working with timber.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Inspired by the robust designs of ', _react2.default.createElement('a', { href: 'http://www.marktuckey.com.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Mark Tuckey'), ', I designed and created cabinets using thick timber slabs whilst integrating elements from Scandinavian modern. The minimalist nature of the mid-century modern movement provided the next step in my journey.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Upon my completion of a Bachelor of Science from UTAS (that\'s another story) I decided to have a go at making furniture on a full-time basis. So it was that I discovered Shaker style furniture. I was drawn in by the stark minimalism which encapsulates the style where truly less is more. I honed my hand tool skills and learnt to construct furniture using traditional joinery techniques. I learnt the subtleties of wood movement (and the not so subtle effects of getting it wrong) and created small and large pieces with traditional timber drawers and doors. Inspired by the work of ', _react2.default.createElement('a', { href: 'http://www.sebastiancox.co.uk/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Sebastian Cox'), ', I introduced woven timber elements into my designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'In early 2017, I decided it was time to take the next step in my indefinite eduction and accepted a cabinet making apprenticeship through a prominent joinery firm in Hobart. Working in a professional workshop and using new materials and techniques has changed the way I think about, design and construct furniture and cabinets for the better.')))), _react2.default.createElement('section', { id: 'works', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Works and Sketches')), _react2.default.createElement('div', { className: 'worksContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.props.data.data.map(function (item) {
        return _react2.default.createElement('div', { className: 'photo', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement('a', { href: item.link, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement('img', { src: item.images.standard_resolution.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })));
      })))), _react2.default.createElement('section', { id: 'contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Get in touch')), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'You can get in contact with me at ', _react2.default.createElement('a', { href: 'mailto:tom@thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'tom@thomasstove.com'), ' or on 0457 001 345. I\'m also on ', _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'facebook'), ' and ', _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'instagram'), ' if you\'d prefer.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('img', { className: 'circle', src: '/static/profile_sml.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })))), _react2.default.createElement('footer', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('hr', { className: 'f', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('div', { className: 'facebookLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('img', { src: '/static/Facebook.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }))), _react2.default.createElement('div', { className: 'instagramLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('img', { src: '/static/Instagram.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), _react2.default.createElement('div', { className: 'details', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('p', { className: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Made with \u2661 by Tom Stove, 2017')), _react2.default.createElement('div', { className: 'footerLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('a', { href: 'http://thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('img', { src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return instagram.get('users/self/media/recent', { count: 15 });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', { data: data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJSZWFjdCIsIkluc3RhZ3JhbSIsImluc3RhZ3JhbSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwibGluayIsImltYWdlcyIsInN0YW5kYXJkX3Jlc29sdXRpb24iLCJ1cmwiLCJnZXQiLCJjb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtZQUEwQixBQUNwQixBQUNWO2dCQUY4QixBQUVoQixBQUNkO2VBSEYsQUFBa0IsQUFBYyxBQUdqQjtBQUhpQixBQUM5QixDQURnQixBQUFJOzs7Ozs7Ozs7Ozs7OzZCQVlYLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBLGFBQVMsSUFBVCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsV0FBVSxLQUF6QixBQUE2QjtvQkFBN0I7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQTixBQUNBLEFBQ0UsQUFJRSxBQUNFLEFBS04saU1BQUEsY0FBQSxhQUFTLElBQVQsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7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eUUsQUFFM0U7QUFGMkU7NEJBRTNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsdUNBQXNDLFFBQTlDLEFBQXFEO29CQUFyRDtzQkFBQSxBQUE4RDtBQUE5RDtnREFBbUUsS0FBTCxBQUFTO29CQUFUO3NCQUxsRSxBQUlFLEFBQ0UsQUFBOEQsQUFFaEU7QUFGZ0U7NEJBRWhFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQVJKLEFBT0UsQUFDRSxBQUVGLHlEQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVE7b0JBQVI7c0JBQUEsQUFBaUM7QUFBakM7Z0RBQXNDLEtBQUwsQUFBUztvQkFBVDtzQkE5RXpDLEFBQ0UsQUFnRUEsQUFFRSxBQVVFLEFBQ0UsQUFBaUMsQUFPMUM7QUFQMEM7Ozs7Ozs7Ozs7Ozs7dUJBbkZ0QixVQUFBLEFBQVUsSUFBVixBQUFjLDJCQUEyQixFQUFFLE9BQTNDLEFBQWtELEEsQUFBVDs7bUJBQXREO0E7aURBQ0MsRUFBRSxNQUFGLEFBQVEsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUhVLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbXN0b3ZlL0RvY3VtZW50cy9Db2RpbmcvbmV4dGpzL3Rob21hc3N0b3ZlLmNvbSJ9