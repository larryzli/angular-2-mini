angular.module("myApp").service("productsSrvc", function($http) {
    this.getProducts = id =>
        $http
            .get(`https://practiceapi.devmountain.com/products?category=${id}`)
            .then(response => {
                return response.data;
            });
});
