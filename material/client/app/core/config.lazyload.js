(function () {
    'use strict';

    angular.module('app')
        .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: [
                    {
                        name: 'fontawesome',
                        files: [
                            'node_modules/font-awesome/css/font-awesome.css'
                        ]
                    },
                    {
                        name: 'weather-icons',
                        files: [
                            'node_modules/weather-icons/css/weather-icons.min.css'
                        ]
                    },
                    {
                        name: 'angular-material-data-table',
                        files: [
                            'node_modules/angular-material-data-table/dist/md-data-table.min.js'
                        ]
                    },
                    {
                        name: 'angular-wizard',
                        files: [
                            'node_modules/angular-wizard/dist/angular-wizard.min.js'
                        ]
                    },
                    {
                        name: 'email',
                        files: [
                            'app/email/email.module.js',
                            'app/email/email.controller.js',
                            'app/email/email.service.js',
                        ],
                        serie: true // load in the exact order. Otherwise, you get errors
                    },
                    {
                        name: 'googlemap',
                        files: [
                            'js!http://maps.google.com/maps/api/js', // prefix with `js!`, see https://github.com/ocombe/ocLazyLoad/issues/170
                            'node_modules/ngmap/build/scripts/ng-map.min.js'
                        ]
                    },
                    {
                        name: 'fullcalendar',
                        files: [
                            'node_modules/moment/min/moment.min.js',
                            'node_modules/fullcalendar/dist/fullcalendar.min.js',
                            'node_modules/angular-ui-calendar/src/calendar.js'
                        ],
                        serie: true // load in the exact order. Otherwise, fullcalendar may complain about lack of moment
                    }
                ]

            })

        }]
    );

})(); 
