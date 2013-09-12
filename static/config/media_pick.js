define(
    ['jquery-nos-appdesk'],
    function($) {
        "use strict";
        return function(appDesk) {

            // Remove all primary actions
            $.each(appDesk.actions, function() {
                this.primary = false;
            });

            // Add "pick" as unique primary action
            appDesk.appdesk.grid.columns.actions.actions.unshift('pick');
            appDesk.appdesk.thumbnails.actions.unshift('pick');

            return {
                actions : {
                    pick : {
                        label : appDesk.i18n('Pick'),
                        icon : 'check',
                        text : true,
                        primary : true,
                        action : {
                            action : 'dialogPick',
                            event : 'select_media'
                        }
                    }
                }
            };
        };
    });