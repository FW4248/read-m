// SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and CLA-assistant contributors
//
// SPDX-License-Identifier: Apache-2.0

module.controller('VersionViewCtrl', function($scope, $rootScope, $modalInstance, cla, $location, noCLA, showCLA, $window) {
  $scope.claObj = cla;
  $scope.noCLA = noCLA;
  $scope.showCLA = showCLA;
  $scope.cla = null;
  $scope.modalInstance = $modalInstance;
  $scope.newCLA = null;

  $scope.openNewCla = function () {
    $modalInstance.dismiss('Link opened');
    $window.location.href = '/' + $scope.claObj.owner + '/' + $scope.claObj.repo;
  };

  $scope.openRevision = function () {
    $window.open($scope.claObj.gist_url + '/revisions');
  };

   $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
  };
});
