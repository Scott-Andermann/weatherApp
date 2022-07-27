export const sampleLocation = {
    "results" : [
       {
          "address_components" : [
             {
                "long_name" : "28210",
                "short_name" : "28210",
                "types" : [ "postal_code" ]
             },
             {
                "long_name" : "Charlotte",
                "short_name" : "Charlotte",
                "types" : [ "locality", "political" ]
             },
             {
                "long_name" : "Mecklenburg County",
                "short_name" : "Mecklenburg County",
                "types" : [ "administrative_area_level_2", "political" ]
             },
             {
                "long_name" : "North Carolina",
                "short_name" : "NC",
                "types" : [ "administrative_area_level_1", "political" ]
             },
             {
                "long_name" : "United States",
                "short_name" : "US",
                "types" : [ "country", "political" ]
             }
          ],
          "formatted_address" : "Charlotte, NC 28210, USA",
          "geometry" : {
             "bounds" : {
                "northeast" : {
                   "lat" : 35.2099251,
                   "lng" : -80.8199959
                },
                "southwest" : {
                   "lat" : 35.0875369,
                   "lng" : -80.927528
                }
             },
             "location" : {
                "lat" : 35.1274285,
                "lng" : -80.8599193
             },
             "location_type" : "APPROXIMATE",
             "viewport" : {
                "northeast" : {
                   "lat" : 35.2099251,
                   "lng" : -80.8199959
                },
                "southwest" : {
                   "lat" : 35.0875369,
                   "lng" : -80.927528
                }
             }
          },
          "place_id" : "ChIJIzHaJSucVogR2xWt1-R9zbM",
          "postcode_localities" : [ "Charlotte", "Pineville" ],
          "types" : [ "postal_code" ]
       }
    ],
    "status" : "OK"
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