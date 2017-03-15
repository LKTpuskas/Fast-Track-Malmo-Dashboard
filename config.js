// Load environment variables from .env file if available
require('dotenv').load();
var calendars = [
    { title: 'Meeting room 1', id: 'data@fasttrackmalmo.com' },
    //{ title: 'Meeting room 2', id: 'company.com_321@group.calendar.google.com' }
];
var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    //    taupe
    //   Fast-Track
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        },
        calendar: {
            googleServiceEmail: process.env.GOOGLE_SERVICE_EMAIL,
            googleServiceKeypath: process.env.GOOGLE_SERVICE_KEYPATH
        },

        sheets: {
            googleServiceEmail: process.env.GOOGLE_SERVICE_EMAIL,
            googleServiceKeypath: process.env.GOOGLE_SERVICE_KEYPATH
        },

        analytics: {
            googleServiceEmail: process.env.GOOGLE_SERVICE_EMAIL,
            googleServiceKeypath: process.env.GOOGLE_SERVICE_KEYPATH
        }

    },

    // define duration between each dashboard rotation (ms)
    //rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 10000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 6,
            rows:    6,
            widgets: [

               /* {
                    type: 'analytics.page_views',
                    id: '109278861',
                    startDate: '30daysAgo',
                    columns: 2, rows: 2,
                    x: 0, y: 2
                },*/



                {
                    type: 'sheets.list',
                    // You can find the documentId in sheet URL 1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU
                    documentId: '1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU',
                    range: 'A1:D10',
                    // Use either 'list' or 'table'
                    // Table shows every other row with different bg color
                    style: 'table',
                    fontSize: 'auto', // Use default, fixed or auto-scaled font size
                    // Customize the list or list item styles
                    styles: {
                        list: {
                            listStyle: 'none'
                        },
                        listItem: {
                            textAlign: 'center'
                        }
                    },
                    // Values (cells) to show on each row. Use one or multiple column letters:
                    // Uses https://www.npmjs.com/package/string-format for formatting
                    // NOTE: The both `['{A} {B} {C}']` and `['{A}', '{B}', '{C}']` work, but
                    // latter makes it possible to style each field / show the values in different
                    // cells in table format
                    fields: [
                        '{A!date}',
                        '{B!uppercase}',
                        '{C} {D}'
                    ],
                    // Show two random entries (after optional filtering)
                    // Handy for picking random quote of the day etc.
                    //random: 2,
                    // Custom formatter functions, name must match with the usage: !method
                    // NOTE: Call method.toString() to every function!
                    // NOTE: `moment` is available
                   /* format: {
                        // !date formatter
                        date: function(s){
                            return new moment(s).format('YYYY-MM-DD');
                        }.toString(),
                        // !uppercase formatter
                        uppercase: function(s) {
                            return s.toUpperCase();
                        }.toString()
                    },*/
                    // Custom function to filter some results rows
                    // If defined, each row is processed through it.
                    // Return `false` if you want to filter the row out and `true`
                    // for inclusion.
                    // NOTE: Only one variable is passed, containing all columns from current row
                    // NOTE: Variable `columns` does not contain the columns out of the range
                    // NOTE: Call method.toString() to every function!
                    /*filter: function(columns, index){
                        // Filter out first two lines
                        if (index < 2) {
                            return false;
                        }

                        // Filter out the results that are in past
                        var eventStart = moment(columns.B, ['YYYY-MM-DD']);
                        if (eventStart.isBefore(new moment())) {
                            return false;
                        }

                        // Otherwise show the fields from that row
                        return true;
                    }.toString(),*/
                    columns: 2, rows: 3,
                    x: 0, y: 0
                },

                {
                    type: 'sheets.list',
                    // You can find the documentId in sheet URL 1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU
                    documentId: '1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU',
                    range: 'A1:D10',
                    // Use either 'list' or 'table'
                    // Table shows every other row with different bg color
                    style: 'table',
                    fontSize: 'auto', // Use default, fixed or auto-scaled font size
                    // Customize the list or list item styles
                    styles: {
                        list: {
                            listStyle: 'none'
                        },
                        listItem: {
                            textAlign: 'center'
                        }
                    },
                    // Values (cells) to show on each row. Use one or multiple column letters:
                    // Uses https://www.npmjs.com/package/string-format for formatting
                    // NOTE: The both `['{A} {B} {C}']` and `['{A}', '{B}', '{C}']` work, but
                    // latter makes it possible to style each field / show the values in different
                    // cells in table format
                    fields: [
                        '{A!date}',
                        '{B!uppercase}',
                        '{C} {D}'
                    ],
                    // Show two random entries (after optional filtering)
                    // Handy for picking random quote of the day etc.
                    //random: 2,
                    // Custom formatter functions, name must match with the usage: !method
                    // NOTE: Call method.toString() to every function!
                    // NOTE: `moment` is available
                    /* format: {
                     // !date formatter
                     date: function(s){
                     return new moment(s).format('YYYY-MM-DD');
                     }.toString(),
                     // !uppercase formatter
                     uppercase: function(s) {
                     return s.toUpperCase();
                     }.toString()
                     },*/
                    // Custom function to filter some results rows
                    // If defined, each row is processed through it.
                    // Return `false` if you want to filter the row out and `true`
                    // for inclusion.
                    // NOTE: Only one variable is passed, containing all columns from current row
                    // NOTE: Variable `columns` does not contain the columns out of the range
                    // NOTE: Call method.toString() to every function!
                    /*filter: function(columns, index){
                     // Filter out first two lines
                     if (index < 2) {
                     return false;
                     }

                     // Filter out the results that are in past
                     var eventStart = moment(columns.B, ['YYYY-MM-DD']);
                     if (eventStart.isBefore(new moment())) {
                     return false;
                     }

                     // Otherwise show the fields from that row
                     return true;
                     }.toString(),*/
                    columns: 2, rows: 3,
                    x: 4, y: 0
                },

                {
                    type: 'sheets.list',
                    // You can find the documentId in sheet URL 1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU
                    documentId: '1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU',
                    range: 'A1:D10',
                    // Use either 'list' or 'table'
                    // Table shows every other row with different bg color
                    style: 'table',
                    fontSize: 'auto', // Use default, fixed or auto-scaled font size
                    // Customize the list or list item styles
                    styles: {
                        list: {
                            listStyle: 'none'
                        },
                        listItem: {
                            textAlign: 'center'
                        }
                    },
                    // Values (cells) to show on each row. Use one or multiple column letters:
                    // Uses https://www.npmjs.com/package/string-format for formatting
                    // NOTE: The both `['{A} {B} {C}']` and `['{A}', '{B}', '{C}']` work, but
                    // latter makes it possible to style each field / show the values in different
                    // cells in table format
                    fields: [
                        '{A!date}',
                        '{B!uppercase}',
                        '{C} {D}'
                    ],
                    // Show two random entries (after optional filtering)
                    // Handy for picking random quote of the day etc.
                    //random: 2,
                    // Custom formatter functions, name must match with the usage: !method
                    // NOTE: Call method.toString() to every function!
                    // NOTE: `moment` is available
                    /* format: {
                     // !date formatter
                     date: function(s){
                     return new moment(s).format('YYYY-MM-DD');
                     }.toString(),
                     // !uppercase formatter
                     uppercase: function(s) {
                     return s.toUpperCase();
                     }.toString()
                     },*/
                    // Custom function to filter some results rows
                    // If defined, each row is processed through it.
                    // Return `false` if you want to filter the row out and `true`
                    // for inclusion.
                    // NOTE: Only one variable is passed, containing all columns from current row
                    // NOTE: Variable `columns` does not contain the columns out of the range
                    // NOTE: Call method.toString() to every function!
                    /*filter: function(columns, index){
                     // Filter out first two lines
                     if (index < 2) {
                     return false;
                     }

                     // Filter out the results that are in past
                     var eventStart = moment(columns.B, ['YYYY-MM-DD']);
                     if (eventStart.isBefore(new moment())) {
                     return false;
                     }

                     // Otherwise show the fields from that row
                     return true;
                     }.toString(),*/
                    columns: 2, rows: 3,
                    x: 0, y: 3
                },

                {
                    type: 'sheets.list',
                    // You can find the documentId in sheet URL 1edql9pECabgLZPOHI6EKv1HFkhRmVoYOroIhv_F4FBU
                    documentId: '1EpirQN63Q9QrqzwftRXKhTHNXxXc2WU5wrW21KhpO0w',
                    range: 'A1:D10',
                    // Use either 'list' or 'table'
                    // Table shows every other row with different bg color
                    style: 'table',
                    fontSize: 'auto', // Use default, fixed or auto-scaled font size
                    // Customize the list or list item styles
                    styles: {
                        list: {
                            listStyle: 'none'
                        },
                        listItem: {
                            textAlign: 'center'
                        }
                    },
                    // Values (cells) to show on each row. Use one or multiple column letters:
                    // Uses https://www.npmjs.com/package/string-format for formatting
                    // NOTE: The both `['{A} {B} {C}']` and `['{A}', '{B}', '{C}']` work, but
                    // latter makes it possible to style each field / show the values in different
                    // cells in table format
                    fields: [
                        '{A!date}',
                        '{B!uppercase}',
                        '{C} {D}'
                    ],
                    // Show two random entries (after optional filtering)
                    // Handy for picking random quote of the day etc.
                    //random: 2,
                    // Custom formatter functions, name must match with the usage: !method
                    // NOTE: Call method.toString() to every function!
                    // NOTE: `moment` is available
                    /* format: {
                     // !date formatter
                     date: function(s){
                     return new moment(s).format('YYYY-MM-DD');
                     }.toString(),
                     // !uppercase formatter
                     uppercase: function(s) {
                     return s.toUpperCase();
                     }.toString()
                     },*/
                    // Custom function to filter some results rows
                    // If defined, each row is processed through it.
                    // Return `false` if you want to filter the row out and `true`
                    // for inclusion.
                    // NOTE: Only one variable is passed, containing all columns from current row
                    // NOTE: Variable `columns` does not contain the columns out of the range
                    // NOTE: Call method.toString() to every function!
                    /*filter: function(columns, index){
                     // Filter out first two lines
                     if (index < 2) {
                     return false;
                     }

                     // Filter out the results that are in past
                     var eventStart = moment(columns.B, ['YYYY-MM-DD']);
                     if (eventStart.isBefore(new moment())) {
                     return false;
                     }

                     // Otherwise show the fields from that row
                     return true;
                     }.toString(),*/
                    columns: 2, rows: 3,
                    x: 4, y: 3
                },

                {
                    type: 'time.clock',
                    timezone: 'Europe/Malmo',
                    info: 'timezone',
                    sunRise: '6:30',
                    sunSet: '17:43',
                    columns: 2, rows: 2,
                    x: 2, y: 2
                },

               /* {
                    type:               'value.value',
                    title:              'Number of Likes',
                    url:                'https://dl.dropboxusercontent.com/u/19253297/test.json',
                    pathCurrent:        '$.current', /!* optional *!/
                    pathLastUpdated:    '$.lastUpdated', /!* optional *!/
                    pathChangeRate:     '$.changeRate', /!* optional *!/
                    lastUpdatedFormat:  'YYYY-MM-DDThh:mm:ssTZD', /!* optional *!/
                    lastUpdatedFromNow: true, /!* optional *!/
                    prefix:             '', /!* optional *!/
                    postfix:            ' likes', /!* optional *!/
                    columns: 2, rows: 2,
                    x: 2, y: 3
                }*/

                {
                    type: 'calendar.next_event',
                    calendars: calendars,
                    ordinal: 0, // closest event to current moment
                    columns: 2, rows: 2,
                    x: 2, y: 4
                },

                {
                    type:    'weather.weather',
                    city:    'Malmo',
                    country: 'SE',
                    lang:    'se',
                    limit:   2,
                    columns: 2, rows: 2,
                    x: 2, y: 0
                },
            ]
        },

        // second dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
               /* {
                    type: 'travis.build_history',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'plouc',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }*/
            ]
        }
    ]
};

module.exports = config;
