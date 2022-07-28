export const sampleLocation = {
    "results": [
        {
            "address_components": [
                {
                    "long_name": "28210",
                    "short_name": "28210",
                    "types": ["postal_code"]
                },
                {
                    "long_name": "Charlotte",
                    "short_name": "Charlotte",
                    "types": ["locality", "political"]
                },
                {
                    "long_name": "Mecklenburg County",
                    "short_name": "Mecklenburg County",
                    "types": ["administrative_area_level_2", "political"]
                },
                {
                    "long_name": "North Carolina",
                    "short_name": "NC",
                    "types": ["administrative_area_level_1", "political"]
                },
                {
                    "long_name": "United States",
                    "short_name": "US",
                    "types": ["country", "political"]
                }
            ],
            "formatted_address": "Charlotte, NC 28210, USA",
            "geometry": {
                "bounds": {
                    "northeast": {
                        "lat": 35.2099251,
                        "lng": -80.8199959
                    },
                    "southwest": {
                        "lat": 35.0875369,
                        "lng": -80.927528
                    }
                },
                "location": {
                    "lat": 35.1274285,
                    "lng": -80.8599193
                },
                "location_type": "APPROXIMATE",
                "viewport": {
                    "northeast": {
                        "lat": 35.2099251,
                        "lng": -80.8199959
                    },
                    "southwest": {
                        "lat": 35.0875369,
                        "lng": -80.927528
                    }
                }
            },
            "place_id": "ChIJIzHaJSucVogR2xWt1-R9zbM",
            "postcode_localities": ["Charlotte", "Pineville"],
            "types": ["postal_code"]
        }
    ],
    "status": "OK"
};

export const sampleData = {
        "dt": 1658927353,
        "sunrise": 1658921108,
        "sunset": 1658971197,
        "temp": 301.5,
        "feels_like": 304.97,
        "pressure": 1016,
        "humidity": 73,
        "dew_point": 296.19,
        "uvi": 0.78,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.58,
        "wind_deg": 136,
        "wind_gust": 6.26,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
};

export const fullSample = {
        "lat": 35.1274,
        "lon": -80.8599,
        "timezone": "America/New_York",
        "timezone_offset": -14400,
        "current": {
            "dt": 1658946917,
            "sunrise": 1658917724,
            "sunset": 1658968254,
            "temp": 34.02,
            "feels_like": 40.62,
            "pressure": 1014,
            "humidity": 56,
            "dew_point": 24,
            "uvi": 3.86,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 3.6,
            "wind_deg": 240,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ]
        },
        "daily": [
            {
                "dt": 1658941200,
                "sunrise": 1658917724,
                "sunset": 1658968254,
                "moonrise": 1658912940,
                "moonset": 1658967420,
                "moon_phase": 0.97,
                "temp": {
                    "day": 34.39,
                    "min": 23.33,
                    "max": 34.64,
                    "night": 27.37,
                    "eve": 32.59,
                    "morn": 23.41
                },
                "feels_like": {
                    "day": 38.56,
                    "night": 28.48,
                    "eve": 34.96,
                    "morn": 24.03
                },
                "pressure": 1015,
                "humidity": 48,
                "dew_point": 21.79,
                "wind_speed": 5.06,
                "wind_deg": 248,
                "wind_gust": 10.72,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 81,
                "pop": 0.54,
                "rain": 0.23,
                "uvi": 9.51
            },
            {
                "dt": 1659027600,
                "sunrise": 1659004169,
                "sunset": 1659054609,
                "moonrise": 1659002760,
                "moonset": 1659056160,
                "moon_phase": 0,
                "temp": {
                    "day": 36.18,
                    "min": 24.39,
                    "max": 36.41,
                    "night": 27.73,
                    "eve": 31.62,
                    "morn": 24.39
                },
                "feels_like": {
                    "day": 37.25,
                    "night": 28.96,
                    "eve": 33.68,
                    "morn": 24.82
                },
                "pressure": 1015,
                "humidity": 33,
                "dew_point": 17.64,
                "wind_speed": 3.95,
                "wind_deg": 254,
                "wind_gust": 11.56,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 65,
                "pop": 0.23,
                "uvi": 9.58
            },
            {
                "dt": 1659114000,
                "sunrise": 1659090615,
                "sunset": 1659140961,
                "moonrise": 1659092700,
                "moonset": 1659144660,
                "moon_phase": 0.03,
                "temp": {
                    "day": 36.35,
                    "min": 23.84,
                    "max": 37.41,
                    "night": 26.84,
                    "eve": 32.14,
                    "morn": 23.84
                },
                "feels_like": {
                    "day": 37.54,
                    "night": 28.44,
                    "eve": 33.69,
                    "morn": 24.34
                },
                "pressure": 1015,
                "humidity": 33,
                "dew_point": 17.91,
                "wind_speed": 4.15,
                "wind_deg": 254,
                "wind_gust": 9.42,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 64,
                "pop": 0.51,
                "rain": 0.65,
                "uvi": 10.1
            },
            {
                "dt": 1659200400,
                "sunrise": 1659177060,
                "sunset": 1659227313,
                "moonrise": 1659182700,
                "moonset": 1659232860,
                "moon_phase": 0.06,
                "temp": {
                    "day": 35.53,
                    "min": 22.6,
                    "max": 35.53,
                    "night": 22.6,
                    "eve": 23.63,
                    "morn": 23.2
                },
                "feels_like": {
                    "day": 38.22,
                    "night": 23.42,
                    "eve": 24.56,
                    "morn": 23.9
                },
                "pressure": 1018,
                "humidity": 40,
                "dew_point": 19.9,
                "wind_speed": 4.4,
                "wind_deg": 342,
                "wind_gust": 9.12,
                "weather": [
                    {
                        "id": 502,
                        "main": "Rain",
                        "description": "heavy intensity rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 74,
                "pop": 1,
                "rain": 25.41,
                "uvi": 9.3
            },
            {
                "dt": 1659286800,
                "sunrise": 1659263506,
                "sunset": 1659313663,
                "moonrise": 1659272700,
                "moonset": 1659320880,
                "moon_phase": 0.09,
                "temp": {
                    "day": 33.78,
                    "min": 22.06,
                    "max": 33.78,
                    "night": 23.55,
                    "eve": 27.62,
                    "morn": 23.07
                },
                "feels_like": {
                    "day": 36.38,
                    "night": 24.21,
                    "eve": 29.4,
                    "morn": 23.86
                },
                "pressure": 1019,
                "humidity": 45,
                "dew_point": 20.32,
                "wind_speed": 3.61,
                "wind_deg": 235,
                "wind_gust": 7.75,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 95,
                "pop": 1,
                "rain": 2.31,
                "uvi": 9.32
            },
            {
                "dt": 1659373200,
                "sunrise": 1659349952,
                "sunset": 1659400012,
                "moonrise": 1659362640,
                "moonset": 1659408840,
                "moon_phase": 0.12,
                "temp": {
                    "day": 27.02,
                    "min": 22.21,
                    "max": 29.12,
                    "night": 24.06,
                    "eve": 24.5,
                    "morn": 23.28
                },
                "feels_like": {
                    "day": 28.56,
                    "night": 24.4,
                    "eve": 24.89,
                    "morn": 24.04
                },
                "pressure": 1018,
                "humidity": 66,
                "dew_point": 20.1,
                "wind_speed": 5.53,
                "wind_deg": 256,
                "wind_gust": 11.9,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 95,
                "pop": 0.92,
                "rain": 1.51,
                "uvi": 0.64
            },
            {
                "dt": 1659459600,
                "sunrise": 1659436398,
                "sunset": 1659486359,
                "moonrise": 1659452640,
                "moonset": 1659496800,
                "moon_phase": 0.16,
                "temp": {
                    "day": 33.74,
                    "min": 21.33,
                    "max": 33.74,
                    "night": 23.51,
                    "eve": 27.46,
                    "morn": 22.58
                },
                "feels_like": {
                    "day": 35.24,
                    "night": 24.16,
                    "eve": 29.45,
                    "morn": 23.11
                },
                "pressure": 1016,
                "humidity": 41,
                "dew_point": 18.81,
                "wind_speed": 3.92,
                "wind_deg": 210,
                "wind_gust": 10.36,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 10,
                "pop": 0.71,
                "rain": 1.26,
                "uvi": 1
            },
            {
                "dt": 1659546000,
                "sunrise": 1659522844,
                "sunset": 1659572705,
                "moonrise": 1659542700,
                "moonset": 1659584820,
                "moon_phase": 0.19,
                "temp": {
                    "day": 37.25,
                    "min": 21.85,
                    "max": 37.25,
                    "night": 23.8,
                    "eve": 31.31,
                    "morn": 23.8
                },
                "feels_like": {
                    "day": 39.82,
                    "night": 24.43,
                    "eve": 33.35,
                    "morn": 24.35
                },
                "pressure": 1016,
                "humidity": 35,
                "dew_point": 19.26,
                "wind_speed": 2.61,
                "wind_deg": 152,
                "wind_gust": 5.85,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 21,
                "pop": 0.97,
                "rain": 1.24,
                "uvi": 1
            }
        ]
}

