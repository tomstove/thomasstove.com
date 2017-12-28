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
          lineNumber: 43
        }
      }, console.log(this.props.data), _react2.default.createElement('section', { id: 'intro', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('img', { className: 'svgLogo', src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement('div', { className: 'welcome', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Hi, I\'m Tom Stove. I design and build furniture and cabinets to suit your space and needs. I use a variety of materials and techniques and am based in Hobart, Tasmania.')))), _react2.default.createElement('section', { id: 'biography', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'My Story')), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'My adventures in furniture design began in 2009 when my life took on a new direction. I found working with my hands in a creative fashion therapeutic and akin to simpler times. I was captivated with Italian minimalism and the sleek, clean lines representative of the early 21st century. Inspired by the works of designers ', _react2.default.createElement('a', { href: 'http://www.aisslinger.de/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Werner Aisslinger'), ' and ', _react2.default.createElement('a', { href: 'https://www.rknl.com/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Ronald Knol'), ', and of furniture studios ', _react2.default.createElement('a', { href: 'https://www.cappellini.it/en', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Cappellini'), ' and ', _react2.default.createElement('a', { href: 'https://www.vitra.com/en-au/home', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Vitra'), ', I set to work creating my own designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'In 2012, I took the next step in my education and began working with solid timber. I joined ', _react2.default.createElement('a', { href: 'https://www.dot.org.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Designed Objects Tasmania'), ', a cooperative studio and workshop to advance my craft. I learnt how to use machinery and discovered the beauty of working with timber.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Inspired by the robust designs of ', _react2.default.createElement('a', { href: 'http://www.marktuckey.com.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Mark Tuckey'), ', I designed and created cabinets using thick timber slabs whilst integrating elements from Scandinavian modern. The minimalist nature of the mid-century modern movement provided the next step in my journey.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Upon my completion of a Bachelor of Science from UTAS (that\'s another story) I decided to have a go at making furniture on a full-time basis. So it was that I discovered Shaker style furniture. I was drawn in by the stark minimalism which encapsulates the style where truly less is more. I honed my hand tool skills and learnt to construct furniture using traditional joinery techniques. I learnt the subtleties of wood movement (and the not so subtle effects of getting it wrong) and created small and large pieces with traditional timber drawers and doors. Inspired by the work of ', _react2.default.createElement('a', { href: 'http://www.sebastiancox.co.uk/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Sebastian Cox'), ', I introduced woven timber elements into my designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'In early 2017, I decided it was time to take the next step in my indefinite eduction and accepted a cabinet making apprenticeship through a prominent joinery firm in Hobart. Working in a professional workshop and using new materials and techniques has changed the way I think about, design and construct furniture and cabinets for the better.')))), _react2.default.createElement('section', { id: 'services', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'What I Offer')), _react2.default.createElement('div', { className: 'statement', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Being commission based, I specialise in offering custom furniture and cabinet solutions. I provide expertise with free-standing and built-in furniture in a range of styles and materials. Feel free to browse my works below and please get in contact to discuss your ideas.')))), _react2.default.createElement('section', { id: 'works', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Works and Sketches')), _react2.default.createElement('div', { className: 'worksContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.props.data.map(function (item) {
        return _react2.default.createElement('div', { className: 'photo', __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react2.default.createElement('a', { href: item.link, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement('img', { src: item.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        })));
      })))), _react2.default.createElement('section', { id: 'contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Get in touch')), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'You can get in contact with me at ', _react2.default.createElement('a', { href: 'mailto:tom@thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'tom@thomasstove.com'), ' or on 0457 001 345. I\'m also on ', _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'facebook'), ' and ', _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'instagram'), ' if you\'d prefer.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('img', { className: 'circle', src: '/static/profile_sml.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })))), _react2.default.createElement('footer', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('hr', { className: 'f', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { className: 'facebookLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('img', { src: '/static/Facebook.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }))), _react2.default.createElement('div', { className: 'instagramLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('img', { src: '/static/Instagram.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), _react2.default.createElement('div', { className: 'details', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('p', { className: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Made with \u2661 by Tom Stove, 2017')), _react2.default.createElement('div', { className: 'footerLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('a', { href: 'http://thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('img', { src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var rawData, data, newArr, i;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return instagram.get('users/self/media/recent', { count: 21 });

              case 2:
                rawData = _context.sent;
                data = [];

                rawData.data.forEach(function (item) {
                  if (item.carousel_media) {
                    item.carousel_media.forEach(function (image) {
                      data.push({
                        url: image.images.standard_resolution.url,
                        link: item.link
                      });
                    });
                  } else {
                    data.push({
                      url: item.images.standard_resolution.url,
                      link: item.link
                    });
                  }
                });

                newArr = [];

                while (data.length > 0) {
                  i = Math.floor(Math.random() * data.length);

                  newArr.push(data[i]);
                  data.splice(i, 1);
                }
                return _context.abrupt('return', { data: newArr });

              case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJSZWFjdCIsIkluc3RhZ3JhbSIsImluc3RhZ3JhbSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImxpbmsiLCJ1cmwiLCJnZXQiLCJjb3VudCIsInJhd0RhdGEiLCJmb3JFYWNoIiwiY2Fyb3VzZWxfbWVkaWEiLCJpbWFnZSIsInB1c2giLCJpbWFnZXMiLCJzdGFuZGFyZF9yZXNvbHV0aW9uIiwibmV3QXJyIiwibGVuZ3RoIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtZQUEwQixBQUNwQixBQUNWO2dCQUY4QixBQUVoQixBQUNkO2VBSEYsQUFBa0IsQUFBYyxBQUdqQjtBQUhpQixBQUM5QixDQURnQixBQUFJOzs7Ozs7Ozs7Ozs7OzZCQW9DWCxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsVUFFRSxBQUFRLElBQUksS0FBQSxBQUFLLE1BRm5CLEFBRUUsQUFBdUIsQUFFekIsdUJBQUEsY0FBQSxhQUFTLElBQVQsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLFdBQVUsS0FBekIsQUFBNkI7b0JBQTdCO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFB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Qzs7Ozs7Ozs7Ozs7Ozt1QkF6SG5CLFVBQUEsQUFBVSxJQUFWLEFBQWMsMkJBQTJCLEVBQUUsT0FBM0MsQUFBeUMsQSxBQUFTOzttQkFBbEU7QSxtQ0FDRjtBLHVCLEFBQU8sQUFDWDs7d0JBQUEsQUFBUSxLQUFSLEFBQWEsUUFBUSxVQUFBLEFBQVMsTUFBTSxBQUNsQztzQkFBRyxLQUFILEFBQVEsZ0JBQWdCLEFBQ3RCO3lCQUFBLEFBQUssZUFBTCxBQUFvQixRQUFRLFVBQUEsQUFBUyxPQUFPLEFBQzFDOzJCQUFBLEFBQUs7NkJBQ0UsTUFBQSxBQUFNLE9BQU4sQUFBYSxvQkFEVixBQUM4QixBQUN0Qzs4QkFBTSxLQUZSLEFBQVUsQUFFRyxBQUVkO0FBSlcsQUFDUjtBQUZKLEFBTUQ7QUFQRCx5QkFPTyxBQUNMO3lCQUFBLEFBQUs7MkJBQ0UsS0FBQSxBQUFLLE9BQUwsQUFBWSxvQkFEVCxBQUM2QixBQUNyQzs0QkFBTSxLQUZSLEFBQVUsQUFFRyxBQUVkO0FBSlcsQUFDUjtBQUlMO0FBZEQsQUFnQkk7O0EseUJBQVMsQUFFYixBOzt1QkFBTSxLQUFBLEFBQUssU0FBWCxBQUFvQixHQUFHLEFBQ2pCO0FBRGlCLHNCQUNiLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFXLEtBRGQsQUFDYixBQUFnQyxBQUN4Qzs7eUJBQUEsQUFBTyxLQUFLLEtBQVosQUFBWSxBQUFLLEFBQ2pCO3VCQUFBLEFBQUssT0FBTCxBQUFZLEdBQVosQUFBZSxBQUNoQjs7aURBQ00sRUFBRSxNQUFGLEFBQVEsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCVSxnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21zdG92ZS9Eb2N1bWVudHMvQ29kaW5nL25leHRqcy90aG9tYXNzdG92ZS5jb20ifQ==