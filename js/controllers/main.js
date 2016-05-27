myApp.controller('monController', ['$scope', '$http', function ($scope, $http) {

    // Crée un Object user
    $scope.games = {};

    // Nous voulons effectuer la requête
    // et obtenir le nom de l'utilisateur
    $http.get("./games.json")
    .success(function (data, status, headers, config) {
      // Ici nous assignons cet utilisateur à
      // notre modèle existant !
      $scope.games = data.games;
    })
    .error(function (data, status, headers, config) {
      document.getElementById('erreur').innerHTML = "Erreur de commincation avec le fichier JSON";
      // Une erreur est survenue
    });

  $scope.save = function() {
    $scope.games.push({"name": $scope.inputName,
    "platform": $scope.inputPlatform});

    $http.post('./games.json', $scope.games).then(function(data) {
    $scope.msg = 'Data saved';
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.games);
    });
  }



}]);
