/* eslint-disable no-underscore-dangle */
import _ from 'lodash';

export default class CacheService {

  constructor() {
    this._cache = {};
  }

  // Returns an object that has been cached under the defined key for the
  // defined type
  get(type, id) {

    // Get the type cache
    let typeCache = this._cache[type];

    // If it doesn't exist, return undefined
    if (!typeCache) {
      return typeCache;
    }

    // Get the existing entry
    return typeCache[id];
  }

  // Sets the value for the specified key.
  set(type, id, newValue) {

    // Get the type cache or create if it doesn't exist
    let typeCache = this._cache[type];
    if (!typeCache) {
      typeCache = {};
      this._cache[type] = typeCache;
    }

    // Get the existing entry from the type cache
    let value = typeCache[id];

    if (value) {
      _.extend(value, newValue);
    } else {
      value = typeCache[id] = newValue;
    }

    return value;
  }

  // Returns true if there is a cached value for this key
  isCached(type, id) {
    return !_.isUndefined(this.get(type, id));
  }

  // Removes the value associated with the key from the cache
  remove(type, id) {

    // Get the typeCache and if it doesn't exist, return undefined
    let typeCache = this._cache[type];
    if (!typeCache) {
      return typeCache;
    }

    let value = typeCache[id];
    delete typeCache[id];
    return value;
  }

  // Clears all the values in the cache and returns a resolved promise when it
  // is completed
  clear() {
    this._cache = {};
  }

}
