kioskApp.factory('galleryService', function ($http) {
    var factory = {};
    factory.fetchGalleryData = function () {
        var url = "gallery.json";
        return $http.get(url);
    };
    return factory;
});