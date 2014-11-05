'use strict';

describe('CDE.version module', function() {
  beforeEach(module('CDE.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
