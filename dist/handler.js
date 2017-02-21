'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handle = handle;

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errors = require(_appRootPath2.default + '/errors');

function handle(id, err) {

  var key = id.replace(/^#/, "");

  if (errors[key] == undefined) return handle('unknownError', err);

  var e = new Error(errors[key]);
  e.code = '#' + key;

  if (err) {
    e.stack = err.stack;
    e.oldError = err;
  }

  return e;
}
//# sourceMappingURL=handler.js.map