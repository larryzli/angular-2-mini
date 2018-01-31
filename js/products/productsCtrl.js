angular
    .module("myApp")
    .controller("productsCtrl", function($scope, $stateParams, productsSrvc) {
        productsSrvc.getProducts($stateParams.id).then(products => {
            $scope.products = products;
        });
        $scope.test = "IT'S WORKING";
    });
