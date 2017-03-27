'use strict';

// Configuring the Articles module
angular.module('themes').run(['Menus',
    function (Menus) {
        // Add the articles dropdown item
        Menus.addMenuItem('topbar', {
            title: 'Themes',
            state: 'themes',
            type: 'dropdown',
            roles: ['*']
        });

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'themes', {
            title: 'List Themes',
            state: 'themes.list'
        });

        // Add the dropdown create item
        Menus.addSubMenuItem('topbar', 'themes', {
            title: 'Create Theme',
            state: 'theme.create',
            roles: ['user']
        });
    }
]);

