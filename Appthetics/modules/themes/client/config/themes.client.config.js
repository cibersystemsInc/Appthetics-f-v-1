/**
 * Created by Sumeet on 3/26/2017.
 */
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
        });i

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'themees', {
            title: 'List Themems',
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

