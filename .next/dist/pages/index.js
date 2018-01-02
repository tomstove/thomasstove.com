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
          lineNumber: 44
        }
      }, _react2.default.createElement('section', { id: 'intro', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('img', { className: 'svgLogo', src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('div', { className: 'welcome', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Hi, I\'m Tom Stove. I design and build furniture and cabinets to suit your space and needs. I use a variety of materials and techniques and am based in Hobart, Tasmania.')))), _react2.default.createElement('section', { id: 'biography', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'My Story')), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'My adventures in furniture design began in 2009 when my life took on a new direction. I found working with my hands in a creative fashion therapeutic and akin to simpler times. I was captivated with Italian minimalism and the sleek, clean lines representative of the early 21st century. Inspired by the works of designers ', _react2.default.createElement('a', { href: 'http://www.aisslinger.de/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Werner Aisslinger'), ' and ', _react2.default.createElement('a', { href: 'https://www.rknl.com/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Ronald Knol'), ', and of furniture studios ', _react2.default.createElement('a', { href: 'https://www.cappellini.it/en', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Cappellini'), ' and ', _react2.default.createElement('a', { href: 'https://www.vitra.com/en-au/home', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Vitra'), ', I set to work creating my own designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'In 2012, I took the next step in my education and began working with solid timber. I joined ', _react2.default.createElement('a', { href: 'https://www.dot.org.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Designed Objects Tasmania'), ', a cooperative studio and workshop to advance my craft. I learnt how to use machinery and discovered the beauty of working with timber.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Inspired by the robust designs of ', _react2.default.createElement('a', { href: 'http://www.marktuckey.com.au/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Mark Tuckey'), ', I designed and created cabinets using thick timber slabs whilst integrating elements from Scandinavian modern. The minimalist nature of the mid-century modern movement provided the next step in my journey.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Upon my completion of a Bachelor of Science from UTAS (that\'s another story) I decided to have a go at making furniture on a full-time basis. So it was that I discovered Shaker style furniture. I was drawn in by the stark minimalism which encapsulates the style where truly less is more. I honed my hand tool skills and learnt to construct furniture using traditional joinery techniques. I learnt the subtleties of wood movement (and the not so subtle effects of getting it wrong) and created small and large pieces with traditional timber drawers and doors. Inspired by the work of ', _react2.default.createElement('a', { href: 'http://www.sebastiancox.co.uk/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Sebastian Cox'), ', I introduced woven timber elements into my designs.'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'In early 2017, I decided it was time to take the next step in my indefinite eduction and accepted a cabinet making apprenticeship through a prominent joinery firm in Hobart. Working in a professional workshop and using new materials and techniques has changed the way I think about, design and construct furniture and cabinets for the better.')))), _react2.default.createElement('section', { id: 'services', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'What I Offer')), _react2.default.createElement('div', { className: 'statement', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Being commission based, I specialise in offering custom furniture and cabinet solutions. I provide expertise with free-standing and built-in furniture in a range of styles and materials. Feel free to browse my works below and please get in contact to discuss your ideas.')))), _react2.default.createElement('section', { id: 'works', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Works and Sketches')), _react2.default.createElement('div', { className: 'worksContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, this.props.data.map(function (item) {
        return _react2.default.createElement('div', { className: 'photo', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react2.default.createElement('a', { href: item.link, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('img', { src: item.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        })));
      })))), _react2.default.createElement('section', { id: 'contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('div', { className: 'heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, 'Get in touch')), _react2.default.createElement('div', { className: 'leftContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'You can get in contact with me at ', _react2.default.createElement('a', { href: 'mailto:tom@thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'tom@thomasstove.com'), ' or on 0457 001 345. I\'m also on ', _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'facebook'), ' and ', _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'instagram'), ' if you\'d prefer.')), _react2.default.createElement('div', { className: 'rightContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('img', { className: 'circle', src: '/static/profile_sml.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })))), _react2.default.createElement('footer', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('hr', { className: 'f', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement('div', { className: 'gridContainer center', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('div', { className: 'facebookLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('a', { href: 'https://www.facebook.com/thomasstovefurniture/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('img', { src: '/static/Facebook.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))), _react2.default.createElement('div', { className: 'instagramLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('a', { href: 'https://www.instagram.com/tomstove/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('img', { src: '/static/Instagram.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }))), _react2.default.createElement('div', { className: 'details', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('p', { className: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, 'Made with \u2661 by Tom Stove, 2017')), _react2.default.createElement('div', { className: 'footerLogo', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('a', { href: 'http://thomasstove.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('img', { src: '/static/logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJSZWFjdCIsIkluc3RhZ3JhbSIsImluc3RhZ3JhbSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwibGluayIsInVybCIsImdldCIsImNvdW50IiwicmF3RGF0YSIsImZvckVhY2giLCJjYXJvdXNlbF9tZWRpYSIsImltYWdlIiwicHVzaCIsImltYWdlcyIsInN0YW5kYXJkX3Jlc29sdXRpb24iLCJuZXdBcnIiLCJsZW5ndGgiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BsaWNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1lBQTBCLEFBQ3BCLEFBQ1Y7Z0JBRjhCLEFBRWhCLEFBQ2Q7ZUFIRixBQUFrQixBQUFjLEFBR2pCO0FBSGlCLEFBQzlCLENBRGdCLEFBQUk7Ozs7Ozs7Ozs7Ozs7NkJBcUNYLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBLGFBQVMsSUFBVCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsV0FBVSxLQUF6QixBQUE2QjtvQkFBN0I7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQTixBQUNBLEFBQ0UsQUFJ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QXlDLEFBQVM7O21CQUFsRTtBLG1DQUNGO0EsdUIsQUFBTyxBQUNYOzt3QkFBQSxBQUFRLEtBQVIsQUFBYSxRQUFRLFVBQUEsQUFBUyxNQUFNLEFBQ2xDO3NCQUFHLEtBQUgsQUFBUSxnQkFBZ0IsQUFDdEI7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLFFBQVEsVUFBQSxBQUFTLE9BQU8sQUFDMUM7MkJBQUEsQUFBSzs2QkFDRSxNQUFBLEFBQU0sT0FBTixBQUFhLG9CQURWLEFBQzhCLEFBQ3RDOzhCQUFNLEtBRlIsQUFBVSxBQUVHLEFBRWQ7QUFKVyxBQUNSO0FBRkosQUFNRDtBQVBELHlCQU9PLEFBQ0w7eUJBQUEsQUFBSzsyQkFDRSxLQUFBLEFBQUssT0FBTCxBQUFZLG9CQURULEFBQzZCLEFBQ3JDOzRCQUFNLEtBRlIsQUFBVSxBQUVHLEFBRWQ7QUFKVyxBQUNSO0FBSUw7QUFkRCxBQWdCSTs7QSx5QkFBUyxBQUViLEE7O3VCQUFNLEtBQUEsQUFBSyxTQUFYLEFBQW9CLEdBQUcsQUFDakI7QUFEaUIsc0JBQ2IsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVcsS0FEZCxBQUNiLEFBQWdDLEFBQ3hDOzt5QkFBQSxBQUFPLEtBQUssS0FBWixBQUFZLEFBQUssQUFDakI7dUJBQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLEFBQ2hCOztpREFDTSxFQUFFLE1BQUYsQUFBUSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0JVLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbXN0b3ZlL0RvY3VtZW50cy9Db2RpbmcvbmV4dGpzL3Rob21hc3N0b3ZlLmNvbSJ9