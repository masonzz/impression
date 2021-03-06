'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _presets = require('../lib/presets');

var _presets2 = _interopRequireDefault(_presets);

var _observers = require('../configs/observers');

var observers = _interopRequireWildcard(_observers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @since 2016-10-30 14:24
 * @author vivaxy
 */

var RESIZE = 'resize';

exports.default = function (container) {
    var attached = false;
    var _callback = void 0;

    var on = function on(callback) {
        if (attached) {
            return false;
        } else {
            attached = true;
            _callback = function _callback() {
                return callback(observers.RESIZE);
            };
            (0, _presets2.default)(container);
            container.addEventListener(RESIZE, _callback);
            return true;
        }
    };

    var off = function off() {
        if (attached) {
            container.removeEventListener(RESIZE, _callback);
            attached = false;
            return true;
        } else {
            return false;
        }
    };

    return {
        on: on,
        off: off
    };
};