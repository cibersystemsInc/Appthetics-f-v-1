'use strict';

// Setting up route
angular.module('themes').config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('themes', {
        abstract: true,
        url: '/themes',
        template: '<ui-view/>'
    })
        .state('themes.list', {
            abstract: true,
            url: '/list',
            templateUrl: 'modules/themes/client/views/list-themes.client.view.html'
        });
}
]);
