/// <reference path="../angular.js" />
/// <reference path="../Apps/app.js" />

app.controller("mainCtrl", [
    "$scope",
    function ($scope) { // <-- This function is where the magic happens
        $scope.title = "My webshop";
        $scope.showList = true;
        $scope.newProduct = {
            name: "",
            description: ""
        };

        $scope.products = [
            {
                name: "Product 1",
                description: "Product 1 description"
            },
            {
                name: "Product 2",
                description: "Product 2 description"
            },
            {
                name: "Product 3",
                description: "Product 3 description"
            },
            {
                name: "Product 4",
                description: "Product 4 description"
            },
            {
                name: "Product 5",
                description: "Product 5 description"
            },
            {
                name: "Product 6",
                description: "Product 6 description"
            },
        ];

        $scope.addProduct = function () {
            $scope.products.push($scope.newProduct);
        }

        $scope.toggleList = function () {
            $scope.showList = !$scope.showList;
        };
    }
]);