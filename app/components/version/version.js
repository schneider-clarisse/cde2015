'use strict';

angular.module('CDE.version', [
  'CDE.version.interpolate-filter',
  'CDE.version.version-directive'
])

.value('version', '0.1');
