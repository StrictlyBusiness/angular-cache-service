import CacheService from './cache-service';

describe('CacheService', function() {

  let cacheService = null;
  beforeEach('Inject cacheService for test', function() {
    cacheService = new CacheService();
  });

  afterEach('Reset all data', function() {
    cacheService.clear();
  });

  describe('.get and .set', function() {

    it('should retrieve undefined if a get does not exist', function() {
      let actual = cacheService.get('Object', 1);
      expect(actual).to.be.undefined;
    });

    it('should retrieve null if the key has been set to null', function() {
      let expected = cacheService.set('Object', 1, null);
      expect(expected).to.be.null;
      let actual = cacheService.get('Object', 1);
      expect(actual).to.be.null;
    });

    it('should retrieve a value if it has been set', function() {
      let expected = { id: 1, name: 'test' };
      cacheService.set('Object', expected.id, expected);
      let actual = cacheService.get('Object', expected.id);
      expect(actual).to.not.be.null;
      expect(actual.id).to.equal(expected.id);
      expect(actual.name).to.equal(expected.name);
    });

    it('should retrieve the correct object if two types have the same id', function() {
      let expected = { id: 1, name: 'test' };
      cacheService.set('Object', expected.id, expected);
      let other = { id: 1, name: 'other' };
      cacheService.set('Other', other.id, other);

      let actual = cacheService.get('Object', expected.id);
      expect(actual).to.equal(expected);
    });

    it('once set, it should return the same object instance, even if updated', function() {

      let expected = { id: 1, name: 'test' };
      cacheService.set('Object', expected.id, expected);

      // Update with a new instance
      let updated = { id: 1, name: 'updated' };
      cacheService.set('Object', updated.id, updated);

      // Get the instance and compare
      let actual = cacheService.get('Object', expected.id);
      // Must be the same instance (extended)
      expect(actual).to.equal(expected);
      // Should contain the updated values
      expect(actual.id).to.equal(updated.id);
      expect(actual.name).to.equal(updated.name);
    });

  });

  describe('.isCached', function() {

    it('should return true if an object is in the cache for the key', function() {

      // Add the null entry
      let expected = { id: 1, name: 'test' };
      cacheService.set('Object', expected.id, expected);

      // See if the object is in the cache
      let actual = cacheService.isCached('Object', expected.id);
      expect(actual).to.be.true;

    });

    it('should return false if an object is not in the cache for the key', function() {

      // See if the object is in the cache
      let actual = cacheService.isCached('Object', 1);
      expect(actual).to.be.false;

    });

    it('should return true if a null value is in the cache for the key', function() {

      // Add the null entry
      cacheService.set('Object', 1, null);

      // See if the object is in the cache
      let actual = cacheService.isCached('Object', 1);
      expect(actual).to.be.true;

    });

  });

  describe('.remove', function() {

    it('should return stored value when a value is removed', function() {

      let expected = { id: 1, name: 'test' };
      cacheService.set('Object', expected.id, expected);

      // Remove it from the cache and make sure it returns the stored value
      let actual = cacheService.remove('Object', expected.id);
      expect(actual).to.be.equal(expected);

      // Verify it is gone
      actual = cacheService.get('Object', expected.id);
      expect(actual).to.be.undefined;

    });

    it('should return undefined when an unassigned key is removed', function() {

      // Remove it from the cache
      let actual = cacheService.remove('Object', 1);
      expect(actual).to.be.undefined;

      // Get the instance and compare
      actual = cacheService.get('Object', 1);
      expect(actual).to.be.undefined;

    });

  });

  describe('.clear', function() {

    it('should remove all added objects, returning undefined', function() {

      // Add some instances
      let expected1 = { id: 1, name: 'test1' };
      cacheService.set('Object', expected1.id, expected1);
      let expected2 = { id: 2, name: 'test2' };
      cacheService.set('Object', expected2.id, expected2);

      // Clear the cache
      cacheService.clear();

      // Get the instances and compare
      let actual1 = cacheService.get('Object', expected1.id);
      expect(actual1).to.be.undefined;
      let actual2 = cacheService.get('Object', expected2.id);
      expect(actual2).to.be.undefined;

    });

  });

});
