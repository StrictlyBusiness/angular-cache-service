import angular from 'angular';
import CacheService from './cache-service';

export default angular.module('aemis.cacheService', [])
  .service('cacheService', CacheService)
;
