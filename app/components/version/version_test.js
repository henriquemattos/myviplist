'use strict';

describe('myVipList.version module', function() {
  beforeEach(module('myVipList.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
