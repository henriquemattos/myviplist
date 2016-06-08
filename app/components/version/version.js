'use strict';

angular.module('myVipList.version', [
  'myVipList.version.interpolate-filter',
  'myVipList.version.version-directive'
])

.value('version', '0.1');
