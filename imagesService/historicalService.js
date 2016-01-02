kioskApp.factory('historicalService', function ($http) {
    var factory = {};
    factory.fetchHistoricalData = function () {
        var url = "history.json";
        return $http.get(url);
    };
    return factory;
});