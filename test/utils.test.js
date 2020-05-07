// IMPORT MODULES under test here:
// import example from '../src/example.js';
const weatherData = require('../data/weather.json');
const locationData = require('../data/geo.json');
const { bringWetherData, bringLocationData } = require('../utils.js');

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    const expected = [
        {
            'forcast': 'Scattered clouds',
            'time': '2020-05-05'
        },
        {
            'forcast': 'Light snow',
            'time': '2020-05-06'
        },

        {
            'forcast': 'Few clouds',
            'time': '2020-05-07'
        },

        {
            'forcast': 'Few clouds',
            'time': '2020-05-08'
        },

        {
            'forcast': 'Broken clouds',
            'time': '2020-05-09'
        },

        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-10'
        },

        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-11'
        },

        {
            'forcast': 'Light rain',
            'time': '2020-05-12'
        },

        {
            'forcast': 'Light rain',
            'time': '2020-05-13'
        },

        {
            'forcast': 'Light rain',
            'time': '2020-05-14'
        },

        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-15'
        },

        {
            'forcast': 'Light shower rain',
            'time': '2020-05-16'
        },

        {
            'forcast': 'Light rain',
            'time': '2020-05-17'
        },
        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-18'
        },

        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-19'
        },
        {
            'forcast': 'Overcast clouds',
            'time': '2020-05-20'
        }
    ];
    const result = bringWetherData(weatherData);
    assert.deepEqual(expected, result);
});

test('time to test a function', function(assert) {
    const expected = [
        {
            'formatted_query': 'Portland, Multnomah County, Oregon, USA',
            'latitude': '45.5202471',
            'longitude': '-122.6741949'
        },
        {
            'formatted_query': 'Portland, Cumberland County, Maine, USA',
            'latitude': '43.6610277',
            'longitude': '-70.2548596'
        },
        {
            'formatted_query': 'Portland, San Patricio County, Texas, USA',
            'latitude': '27.8768086',
            'longitude': '-97.3233874'
        },
        {
            'formatted_query': 'Portland, Jay County, Indiana, USA',
            'latitude': '40.4344895',
            'longitude': '-84.9777455'
        },
        {
            'formatted_query': 'Portland, Surrey County, Jamaika',
            'latitude': '18.1253511',
            'longitude': '-76.5347819830471'
        },
        {
            'formatted_query': 'Portland, Traill County, North Dakota, USA',
            'latitude': '47.4983191',
            'longitude': '-97.3703689'
        },
        {
            'formatted_query': 'Portland, Arkansas, USA',
            'latitude': '33.2378972',
            'longitude': '-91.5115095'
        },
        {
            'formatted_query': 'Portland, Arkansas, USA',
            'latitude': '33.2378972',
            'longitude': '-91.5115095'
        },
        {
            'formatted_query': 'Portland, Ionia County, Michigan, USA',
            'latitude': '42.8692006',
            'longitude': '-84.9030517'
        },
        {
            'formatted_query': 'Portland, Shire of Glenelg, Victoria, VIC 3305, Australia',
            'latitude': '-38.363435',
            'longitude': '141.605605508935'
        }
    ];

    const result = bringLocationData(locationData);
 
    assert.deepEqual(expected, result);
});