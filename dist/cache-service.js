/* eslint-disable no-underscore-dangle */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var CacheService = (function () {
  function CacheService() {
    _classCallCheck(this, CacheService);

    this._cache = {};
  }

  // Returns an object that has been cached under the defined key for the
  // defined type

  _createClass(CacheService, [{
    key: 'get',
    value: function get(type, id) {

      // Get the type cache
      var typeCache = this._cache[type];

      // If it doesn't exist, return undefined
      if (!typeCache) {
        return typeCache;
      }

      // Get the existing entry
      return typeCache[id];
    }

    // Sets the value for the specified key.
  }, {
    key: 'set',
    value: function set(type, id, newValue) {

      // Get the type cache or create if it doesn't exist
      var typeCache = this._cache[type];
      if (!typeCache) {
        typeCache = {};
        this._cache[type] = typeCache;
      }

      // Get the existing entry from the type cache
      var value = typeCache[id];

      if (value) {
        _lodash2['default'].extend(value, newValue);
      } else {
        value = typeCache[id] = newValue;
      }

      return value;
    }

    // Returns true if there is a cached value for this key
  }, {
    key: 'isCached',
    value: function isCached(type, id) {
      return !_lodash2['default'].isUndefined(this.get(type, id));
    }

    // Removes the value associated with the key from the cache
  }, {
    key: 'remove',
    value: function remove(type, id) {

      // Get the typeCache and if it doesn't exist, return undefined
      var typeCache = this._cache[type];
      if (!typeCache) {
        return typeCache;
      }

      var value = typeCache[id];
      delete typeCache[id];
      return value;
    }

    // Clears all the values in the cache and returns a resolved promise when it
    // is completed
  }, {
    key: 'clear',
    value: function clear() {
      this._cache = {};
    }
  }]);

  return CacheService;
})();

exports['default'] = CacheService;
module.exports = exports['default'];