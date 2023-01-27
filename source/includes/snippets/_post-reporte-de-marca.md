> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/brand-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-30T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":8968,"name":"enel"}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":8968,"name":"enel"}]}}'

response = requests.post('https://clientela.admetricks.com/brand-report/', headers=headers, data=data)

```

```javascript
var fetch = require('node-fetch');

fetch('https://clientela.admetricks.com/brand-report/', {
    method: 'POST',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":8968,"name":"enel"}}})
});
```

```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json, text/plain, */*',
    'authorization' => 'Token YOUR_TOKEN',
    'content-type' => 'application/json;charset=UTF-8'
);
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":8968,"name":"enel"}]}}';
$response = Requests::post('https://clientela.admetricks.com/brand-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{
  "data": {
    "countries": [
      {
        "id": 1,
        "name": "chile",
        "metrics": {
          "impact": 108459,
          "impressions": 831471,
          "valuation": 2991811.0,
          "valuation_usd": 3669.6265,
          "valuation_by_country": [
            {
              "chile": 2991811.0
            }
          ]
        }
      }
    ],
    "ad_types": [
      {
        "id": 1,
        "name": "display",
        "metrics": {
          "impact": 108459,
          "impressions": 831471,
          "valuation": 2991811.0,
          "valuation_usd": 3669.6265,
          "valuation_by_country": [
            {
              "chile": 2991811.0
            }
          ]
        }
      }
    ],
    "devices": [
      {
        "id": 2,
        "name": "mobile",
        "metrics": {
          "impact": 80953,
          "impressions": 430816,
          "valuation": 2286602.0,
          "valuation_usd": 2804.6475,
          "valuation_by_country": [
            {
              "chile": 2286602.0
            }
          ]
        }
      },
      {
        "id": 1,
        "name": "desktop",
        "metrics": {
          "impact": 27506,
          "impressions": 400655,
          "valuation": 705209.0,
          "valuation_usd": 864.979,
          "valuation_by_country": [
            {
              "chile": 705209.0
            }
          ]
        }
      }
    ],
    "brands": [
      {
        "id": 8968,
        "name": "enel",
        "metrics": {
          "impact": 108459,
          "impressions": 831471,
          "valuation": 2991811.0,
          "valuation_usd": 3669.6265,
          "valuation_by_country": [
            {
              "chile": 2991811.0
            }
          ]
        }
      }
    ],
    "sold_by": [
      {
        "id": "direct",
        "name": "direct",
        "metrics": {
          "impact": 102648,
          "impressions": 771635,
          "valuation": 2673589.0,
          "valuation_usd": 3279.3091,
          "valuation_by_country": [
            {
              "chile": 2673589.0
            }
          ]
        }
      },
      {
        "id": "unknown",
        "name": "unknown",
        "metrics": {
          "impact": 4874,
          "impressions": 51312,
          "valuation": 309980.0,
          "valuation_usd": 380.2081,
          "valuation_by_country": [
            {
              "chile": 309980.0
            }
          ]
        }
      },
      {
        "id": "google",
        "name": "google",
        "metrics": {
          "impact": 937,
          "impressions": 8524,
          "valuation": 8242.0,
          "valuation_usd": 10.1093,
          "valuation_by_country": [
            {
              "chile": 8242.0
            }
          ]
        }
      }
    ],
    "industries": [
      {
        "id": 221,
        "name": "energía - energía domestica",
        "metrics": {
          "impact": 108459,
          "impressions": 831471,
          "valuation": 2991811.0,
          "valuation_usd": 3669.6265,
          "valuation_by_country": [
            {
              "chile": 2991811.0
            }
          ]
        }
      }
    ],
    "website_categories": [
      {
        "id": "unknown",
        "name": "unknown",
        "metrics": {
          "impact": 320,
          "impressions": 1901,
          "valuation": 2116.0,
          "valuation_usd": 2.5954,
          "valuation_by_country": [
            {
              "chile": 2116.0
            }
          ]
        }
      }
    ],
    "campaigns": [
      {
        "id": 7852217,
        "title": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "landing_page": "enel.cl/es/conoce-enel/prensa/news/d202011-hito-historico-para-enel-lider-del-dow-jones-sustainability-world-index-de-2020.html",
        "description": "feliz | fotografía | mañana | mundo | paisaje | pie foto | prenda pieza | ropa formal | vestido | viento",
        "metrics": {
          "count": 353,
          "impact": 46938,
          "impressions": 372396,
          "valuation": 1760216.0,
          "valuation_usd": 2159.0051,
          "valuation_by_country": [
            {
              "chile": 1760216.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-29T00:25:40.000Z",
          "end": "2020-12-30T17:25:27.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_c4420d89bb6b5b5a1d348488ace3f8f0.jpg"
          },
          "ad_measurements": {
            "height": 250,
            "width": 300
          }
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "industry": {
          "id": 221,
          "name": "energía - energía domestica"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 46938,
              "impressions": 372396,
              "valuation": 1760216.0,
              "valuation_usd": 2159.0051,
              "valuation_by_country": [
                {
                  "chile": 1760216.0
                }
              ]
            }
          }
        ],
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 46938,
              "impressions": 372396,
              "valuation": 1760216.0,
              "valuation_usd": 2159.0051,
              "valuation_by_country": [
                {
                  "chile": 1760216.0
                }
              ]
            }
          }
        ],
        "devices": [
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 35900,
              "impressions": 200355,
              "valuation": 1497465.0,
              "valuation_usd": 1836.7261,
              "valuation_by_country": [
                {
                  "chile": 1497465.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "desktop",
            "metrics": {
              "impact": 11038,
              "impressions": 172041,
              "valuation": 262751.0,
              "valuation_usd": 322.2791,
              "valuation_by_country": [
                {
                  "chile": 262751.0
                }
              ]
            }
          }
        ],
        "sold_by": [
          {
            "id": "direct",
            "name": "direct",
            "metrics": {
              "impact": 41313,
              "impressions": 313460,
              "valuation": 1443224.0,
              "valuation_usd": 1770.1964,
              "valuation_by_country": [
                {
                  "chile": 1443224.0
                }
              ]
            }
          },
          {
            "id": "unknown",
            "name": "unknown",
            "metrics": {
              "impact": 4874,
              "impressions": 51312,
              "valuation": 309980.0,
              "valuation_usd": 380.2081,
              "valuation_by_country": [
                {
                  "chile": 309980.0
                }
              ]
            }
          },
          {
            "id": "google",
            "name": "google",
            "metrics": {
              "impact": 751,
              "impressions": 7624,
              "valuation": 7012.0,
              "valuation_usd": 8.6006,
              "valuation_by_country": [
                {
                  "chile": 7012.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 475,
            "domain": "duna.cl",
            "metrics": {
              "impact": 3288,
              "impressions": 20609,
              "valuation": 269215.0,
              "valuation_usd": 330.2075,
              "valuation_by_country": [
                {
                  "chile": 269215.0
                }
              ]
            }
          },
          {
            "id": 505,
            "domain": "radioagricultura.cl",
            "metrics": {
              "impact": 8743,
              "impressions": 62311,
              "valuation": 1053231.0,
              "valuation_usd": 1291.8478,
              "valuation_by_country": [
                {
                  "chile": 1053231.0
                }
              ]
            }
          },
          {
            "id": 495,
            "domain": "eldinamo.cl",
            "metrics": {
              "impact": 9007,
              "impressions": 144020,
              "valuation": 134333.0,
              "valuation_usd": 164.7671,
              "valuation_by_country": [
                {
                  "chile": 134333.0
                }
              ]
            }
          },
          {
            "id": 498,
            "domain": "aqua.cl",
            "metrics": {
              "impact": 727,
              "impressions": 7141,
              "valuation": 9206.0,
              "valuation_usd": 11.2917,
              "valuation_by_country": [
                {
                  "chile": 9206.0
                }
              ]
            }
          },
          {
            "id": 448,
            "domain": "biobiochile.cl",
            "metrics": {
              "impact": 3054,
              "impressions": 15597,
              "valuation": 47368.0,
              "valuation_usd": 58.0995,
              "valuation_by_country": [
                {
                  "chile": 47368.0
                }
              ]
            }
          },
          {
            "id": 486,
            "domain": "elamaule.cl",
            "metrics": {
              "impact": 120,
              "impressions": 600,
              "valuation": 2249.0,
              "valuation_usd": 2.7585,
              "valuation_by_country": [
                {
                  "chile": 2249.0
                }
              ]
            }
          },
          {
            "id": 496,
            "domain": "mch.cl",
            "metrics": {
              "impact": 168,
              "impressions": 855,
              "valuation": 1172.0,
              "valuation_usd": 1.4375,
              "valuation_by_country": [
                {
                  "chile": 1172.0
                }
              ]
            }
          },
          {
            "id": 722,
            "domain": "lared.cl",
            "metrics": {
              "impact": 453,
              "impressions": 5964,
              "valuation": 25652.0,
              "valuation_usd": 31.4636,
              "valuation_by_country": [
                {
                  "chile": 25652.0
                }
              ]
            }
          },
          {
            "id": 887,
            "domain": "popsugar.com",
            "metrics": {
              "impact": 61,
              "impressions": 846,
              "valuation": 929.0,
              "valuation_usd": 1.1395,
              "valuation_by_country": [
                {
                  "chile": 929.0
                }
              ]
            }
          },
          {
            "id": 4839,
            "domain": "aciprensa.com",
            "metrics": {
              "impact": 433,
              "impressions": 2211,
              "valuation": 2794.0,
              "valuation_usd": 3.427,
              "valuation_by_country": [
                {
                  "chile": 2794.0
                }
              ]
            }
          },
          {
            "id": 10423,
            "domain": "enlacejudio.com",
            "metrics": {
              "impact": 486,
              "impressions": 6274,
              "valuation": 5527.0,
              "valuation_usd": 6.7792,
              "valuation_by_country": [
                {
                  "chile": 5527.0
                }
              ]
            }
          },
          {
            "id": 335,
            "domain": "lacuarta.com",
            "metrics": {
              "impact": 3798,
              "impressions": 19434,
              "valuation": 45420.0,
              "valuation_usd": 55.7102,
              "valuation_by_country": [
                {
                  "chile": 45420.0
                }
              ]
            }
          },
          {
            "id": 341,
            "domain": "publimetro.cl",
            "metrics": {
              "impact": 1815,
              "impressions": 9279,
              "valuation": 49828.0,
              "valuation_usd": 61.1169,
              "valuation_by_country": [
                {
                  "chile": 49828.0
                }
              ]
            }
          },
          {
            "id": 453,
            "domain": "elmorrocotudo.cl",
            "metrics": {
              "impact": 10,
              "impressions": 50,
              "valuation": 244.0,
              "valuation_usd": 0.2993,
              "valuation_by_country": [
                {
                  "chile": 244.0
                }
              ]
            }
          },
          {
            "id": 464,
            "domain": "df.cl",
            "metrics": {
              "impact": 58,
              "impressions": 296,
              "valuation": 1127.0,
              "valuation_usd": 1.3823,
              "valuation_by_country": [
                {
                  "chile": 1127.0
                }
              ]
            }
          },
          {
            "id": 467,
            "domain": "paula.cl",
            "metrics": {
              "impact": 31,
              "impressions": 158,
              "valuation": 814.0,
              "valuation_usd": 0.9984,
              "valuation_by_country": [
                {
                  "chile": 814.0
                }
              ]
            }
          },
          {
            "id": 481,
            "domain": "elnortero.cl",
            "metrics": {
              "impact": 37,
              "impressions": 188,
              "valuation": 973.0,
              "valuation_usd": 1.1934,
              "valuation_by_country": [
                {
                  "chile": 973.0
                }
              ]
            }
          },
          {
            "id": 489,
            "domain": "elnaveghable.cl",
            "metrics": {
              "impact": 108,
              "impressions": 1500,
              "valuation": 5937.0,
              "valuation_usd": 7.2821,
              "valuation_by_country": [
                {
                  "chile": 5937.0
                }
              ]
            }
          },
          {
            "id": 508,
            "domain": "sonarfm.cl",
            "metrics": {
              "impact": 160,
              "impressions": 818,
              "valuation": 21004.0,
              "valuation_usd": 25.7626,
              "valuation_by_country": [
                {
                  "chile": 21004.0
                }
              ]
            }
          },
          {
            "id": 522,
            "domain": "facemama.com",
            "metrics": {
              "impact": 72,
              "impressions": 1000,
              "valuation": 2510.0,
              "valuation_usd": 3.0787,
              "valuation_by_country": [
                {
                  "chile": 2510.0
                }
              ]
            }
          },
          {
            "id": 850,
            "domain": "yapo.cl",
            "metrics": {
              "impact": 13936,
              "impressions": 71349,
              "valuation": 78592.0,
              "valuation_usd": 96.3976,
              "valuation_by_country": [
                {
                  "chile": 78592.0
                }
              ]
            }
          },
          {
            "id": 851,
            "domain": "as.com",
            "metrics": {
              "impact": 219,
              "impressions": 1119,
              "valuation": 1223.0,
              "valuation_usd": 1.5001,
              "valuation_by_country": [
                {
                  "chile": 1223.0
                }
              ]
            }
          },
          {
            "id": 874,
            "domain": "hellomagazine.com",
            "metrics": {
              "impact": 34,
              "impressions": 171,
              "valuation": 187.0,
              "valuation_usd": 0.2294,
              "valuation_by_country": [
                {
                  "chile": 187.0
                }
              ]
            }
          },
          {
            "id": 7104,
            "domain": "realtor.com",
            "metrics": {
              "impact": 74,
              "impressions": 375,
              "valuation": 419.0,
              "valuation_usd": 0.5139,
              "valuation_by_country": [
                {
                  "chile": 419.0
                }
              ]
            }
          },
          {
            "id": 7895,
            "domain": "noticialdia.com",
            "metrics": {
              "impact": 46,
              "impressions": 231,
              "valuation": 262.0,
              "valuation_usd": 0.3214,
              "valuation_by_country": [
                {
                  "chile": 262.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7418419,
        "title": "Plan de Invierno - enel.cl",
        "landing_page": "enel.cl/es/conoce-enel/plan-de-invierno.html",
        "description": "aprendizaje | medios comunicación | trabajo",
        "metrics": {
          "count": 50,
          "impact": 61328,
          "impressions": 458100,
          "valuation": 1230258.0,
          "valuation_usd": 1508.9815,
          "valuation_by_country": [
            {
              "chile": 1230258.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-29T13:42:51.000Z",
          "end": "2020-12-30T13:48:20.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_098a2d780f8592ad1c2af186ae571c7d.jpg"
          },
          "ad_measurements": {
            "height": 250,
            "width": 300
          }
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "industry": {
          "id": 221,
          "name": "energía - energía domestica"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 61328,
              "impressions": 458100,
              "valuation": 1230258.0,
              "valuation_usd": 1508.9815,
              "valuation_by_country": [
                {
                  "chile": 1230258.0
                }
              ]
            }
          }
        ],
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 61328,
              "impressions": 458100,
              "valuation": 1230258.0,
              "valuation_usd": 1508.9815,
              "valuation_by_country": [
                {
                  "chile": 1230258.0
                }
              ]
            }
          }
        ],
        "devices": [
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 45053,
              "impressions": 230461,
              "valuation": 789137.0,
              "valuation_usd": 967.9214,
              "valuation_by_country": [
                {
                  "chile": 789137.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "desktop",
            "metrics": {
              "impact": 16275,
              "impressions": 227639,
              "valuation": 441121.0,
              "valuation_usd": 541.06,
              "valuation_by_country": [
                {
                  "chile": 441121.0
                }
              ]
            }
          }
        ],
        "sold_by": [
          {
            "id": "direct",
            "name": "direct",
            "metrics": {
              "impact": 61328,
              "impressions": 458100,
              "valuation": 1230258.0,
              "valuation_usd": 1508.9815,
              "valuation_by_country": [
                {
                  "chile": 1230258.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 448,
            "domain": "biobiochile.cl",
            "metrics": {
              "impact": 61328,
              "impressions": 458100,
              "valuation": 1230258.0,
              "valuation_usd": 1508.9815,
              "valuation_by_country": [
                {
                  "chile": 1230258.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7795007,
        "title": "Gasoducto Atacama - enel.cl",
        "landing_page": "enel.cl/es/inversionistas/inversionistas-enel-generacion/nuestras-centrales/gasoducto.html",
        "description": "documento | línea",
        "metrics": {
          "count": 3,
          "impact": 186,
          "impressions": 900,
          "valuation": 1230.0,
          "valuation_usd": 1.5087,
          "valuation_by_country": [
            {
              "chile": 1230.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-29T08:54:41.000Z",
          "end": "2020-12-29T08:54:47.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_18ea152a6dd689918e80b698e7702944.jpg"
          },
          "ad_measurements": {
            "height": 600,
            "width": 336
          }
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "industry": {
          "id": 221,
          "name": "energía - energía domestica"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ],
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ],
        "devices": [
          {
            "id": 1,
            "name": "desktop",
            "metrics": {
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ],
        "sold_by": [
          {
            "id": "google",
            "name": "google",
            "metrics": {
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 6403,
            "domain": "minutoneuquen.com",
            "metrics": {
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4849020,
        "title": "Enel - Enel Distribución Chile",
        "landing_page": "eneldistribucion.cl",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 7,
          "impressions": 75,
          "valuation": 107.0,
          "valuation_usd": 0.1312,
          "valuation_by_country": [
            {
              "chile": 107.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-29T09:28:58.000Z",
          "end": "2020-12-29T09:28:58.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_6e959fb96553c00dc04996674c28f567.jpg"
          },
          "ad_measurements": {
            "height": 600,
            "width": 160
          }
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "industry": {
          "id": 221,
          "name": "energía - energía domestica"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ],
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ],
        "devices": [
          {
            "id": 1,
            "name": "desktop",
            "metrics": {
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ],
        "sold_by": [
          {
            "id": "direct",
            "name": "direct",
            "metrics": {
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 13236,
            "domain": "diarioestrategia.cl",
            "metrics": {
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ]
      }
    ],
    "campaigns_with_websites_by_date": [
      {
        "id": 7418419,
        "title": "Plan de Invierno - enel.cl",
        "landing_page": "7418419",
        "description": null,
        "metrics": {
          "count": 50,
          "impact": 61328,
          "impressions": 458100,
          "valuation": 1230258.0,
          "valuation_usd": 1508.9815,
          "valuation_by_country": [
            {
              "chile": 1230258.0
            }
          ]
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "websites_by_date": [
          {
            "id": 448,
            "domain": "biobiochile.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 17,
                  "impact": 22150,
                  "impressions": 113331,
                  "valuation": 450699.0,
                  "valuation_usd": 552.808,
                  "valuation_by_country": [
                    {
                      "chile": 450699.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 33,
                  "impact": 39178,
                  "impressions": 344769,
                  "valuation": 779559.0,
                  "valuation_usd": 956.1735,
                  "valuation_by_country": [
                    {
                      "chile": 779559.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 45053,
                  "impressions": 230461,
                  "valuation": 789137.0,
                  "valuation_usd": 967.9214,
                  "valuation_by_country": [
                    {
                      "chile": 789137.0
                    }
                  ]
                }
              },
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 16275,
                  "impressions": 227639,
                  "valuation": 441121.0,
                  "valuation_usd": 541.06,
                  "valuation_by_country": [
                    {
                      "chile": 441121.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 7852217,
        "title": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "landing_page": "7852217",
        "description": null,
        "metrics": {
          "count": 353,
          "impact": 46938,
          "impressions": 372396,
          "valuation": 1760216.0,
          "valuation_usd": 2159.0051,
          "valuation_by_country": [
            {
              "chile": 1760216.0
            }
          ]
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "websites_by_date": [
          {
            "id": 495,
            "domain": "eldinamo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 15,
                  "impact": 3497,
                  "impressions": 55917,
                  "valuation": 72317.0,
                  "valuation_usd": 88.7009,
                  "valuation_by_country": [
                    {
                      "chile": 72317.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 19,
                  "impact": 5510,
                  "impressions": 88103,
                  "valuation": 62016.0,
                  "valuation_usd": 76.0662,
                  "valuation_by_country": [
                    {
                      "chile": 62016.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 9007,
                  "impressions": 144020,
                  "valuation": 134333.0,
                  "valuation_usd": 164.7671,
                  "valuation_by_country": [
                    {
                      "chile": 134333.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 850,
            "domain": "yapo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 13936,
                  "impressions": 71349,
                  "valuation": 78592.0,
                  "valuation_usd": 96.3976,
                  "valuation_by_country": [
                    {
                      "chile": 78592.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 13936,
                  "impressions": 71349,
                  "valuation": 78592.0,
                  "valuation_usd": 96.3976,
                  "valuation_by_country": [
                    {
                      "chile": 78592.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 505,
            "domain": "radioagricultura.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 49,
                  "impact": 8668,
                  "impressions": 61361,
                  "valuation": 1036807.0,
                  "valuation_usd": 1271.7028,
                  "valuation_by_country": [
                    {
                      "chile": 1036807.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 75,
                  "impressions": 950,
                  "valuation": 16424.0,
                  "valuation_usd": 20.145,
                  "valuation_by_country": [
                    {
                      "chile": 16424.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 8743,
                  "impressions": 62311,
                  "valuation": 1053231.0,
                  "valuation_usd": 1291.8478,
                  "valuation_by_country": [
                    {
                      "chile": 1053231.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 475,
            "domain": "duna.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 163,
                  "impact": 1483,
                  "impressions": 6913,
                  "valuation": 93499.0,
                  "valuation_usd": 114.6818,
                  "valuation_by_country": [
                    {
                      "chile": 93499.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 75,
                  "impact": 1805,
                  "impressions": 13696,
                  "valuation": 175716.0,
                  "valuation_usd": 215.5257,
                  "valuation_by_country": [
                    {
                      "chile": 175716.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 2729,
                  "impressions": 13094,
                  "valuation": 186714.0,
                  "valuation_usd": 229.0153,
                  "valuation_by_country": [
                    {
                      "chile": 186714.0
                    }
                  ]
                }
              },
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 559,
                  "impressions": 7515,
                  "valuation": 82501.0,
                  "valuation_usd": 101.1922,
                  "valuation_by_country": [
                    {
                      "chile": 82501.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 335,
            "domain": "lacuarta.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 3798,
                  "impressions": 19434,
                  "valuation": 45420.0,
                  "valuation_usd": 55.7102,
                  "valuation_by_country": [
                    {
                      "chile": 45420.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 3798,
                  "impressions": 19434,
                  "valuation": 45420.0,
                  "valuation_usd": 55.7102,
                  "valuation_by_country": [
                    {
                      "chile": 45420.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 448,
            "domain": "biobiochile.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 1296,
                  "impressions": 6621,
                  "valuation": 23732.0,
                  "valuation_usd": 29.1086,
                  "valuation_by_country": [
                    {
                      "chile": 23732.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 1758,
                  "impressions": 8976,
                  "valuation": 23636.0,
                  "valuation_usd": 28.9909,
                  "valuation_by_country": [
                    {
                      "chile": 23636.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 3054,
                  "impressions": 15597,
                  "valuation": 47368.0,
                  "valuation_usd": 58.0995,
                  "valuation_by_country": [
                    {
                      "chile": 47368.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 341,
            "domain": "publimetro.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 1815,
                  "impressions": 9279,
                  "valuation": 49828.0,
                  "valuation_usd": 61.1169,
                  "valuation_by_country": [
                    {
                      "chile": 49828.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 1815,
                  "impressions": 9279,
                  "valuation": 49828.0,
                  "valuation_usd": 61.1169,
                  "valuation_by_country": [
                    {
                      "chile": 49828.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 498,
            "domain": "aqua.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 290,
                  "impressions": 1484,
                  "valuation": 1646.0,
                  "valuation_usd": 2.0189,
                  "valuation_by_country": [
                    {
                      "chile": 1646.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 2,
                  "impact": 437,
                  "impressions": 5657,
                  "valuation": 7560.0,
                  "valuation_usd": 9.2728,
                  "valuation_by_country": [
                    {
                      "chile": 7560.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 387,
                  "impressions": 5403,
                  "valuation": 7153.0,
                  "valuation_usd": 8.7736,
                  "valuation_by_country": [
                    {
                      "chile": 7153.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 340,
                  "impressions": 1738,
                  "valuation": 2053.0,
                  "valuation_usd": 2.5181,
                  "valuation_by_country": [
                    {
                      "chile": 2053.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 10423,
            "domain": "enlacejudio.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 432,
                  "impressions": 6000,
                  "valuation": 5178.0,
                  "valuation_usd": 6.3511,
                  "valuation_by_country": [
                    {
                      "chile": 5178.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 54,
                  "impressions": 274,
                  "valuation": 349.0,
                  "valuation_usd": 0.4281,
                  "valuation_by_country": [
                    {
                      "chile": 349.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 432,
                  "impressions": 6000,
                  "valuation": 5178.0,
                  "valuation_usd": 6.3511,
                  "valuation_by_country": [
                    {
                      "chile": 5178.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 54,
                  "impressions": 274,
                  "valuation": 349.0,
                  "valuation_usd": 0.4281,
                  "valuation_by_country": [
                    {
                      "chile": 349.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 722,
            "domain": "lared.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 412,
                  "impressions": 5757,
                  "valuation": 24210.0,
                  "valuation_usd": 29.6949,
                  "valuation_by_country": [
                    {
                      "chile": 24210.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 41,
                  "impressions": 207,
                  "valuation": 1442.0,
                  "valuation_usd": 1.7687,
                  "valuation_by_country": [
                    {
                      "chile": 1442.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 412,
                  "impressions": 5757,
                  "valuation": 24210.0,
                  "valuation_usd": 29.6949,
                  "valuation_by_country": [
                    {
                      "chile": 24210.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 41,
                  "impressions": 207,
                  "valuation": 1442.0,
                  "valuation_usd": 1.7687,
                  "valuation_by_country": [
                    {
                      "chile": 1442.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 4839,
            "domain": "aciprensa.com",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 2,
                  "impact": 433,
                  "impressions": 2211,
                  "valuation": 2794.0,
                  "valuation_usd": 3.427,
                  "valuation_by_country": [
                    {
                      "chile": 2794.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 433,
                  "impressions": 2211,
                  "valuation": 2794.0,
                  "valuation_usd": 3.427,
                  "valuation_by_country": [
                    {
                      "chile": 2794.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 489,
            "domain": "elnaveghable.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 108,
                  "impressions": 1500,
                  "valuation": 5937.0,
                  "valuation_usd": 7.2821,
                  "valuation_by_country": [
                    {
                      "chile": 5937.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 108,
                  "impressions": 1500,
                  "valuation": 5937.0,
                  "valuation_usd": 7.2821,
                  "valuation_by_country": [
                    {
                      "chile": 5937.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 851,
            "domain": "as.com",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 219,
                  "impressions": 1119,
                  "valuation": 1223.0,
                  "valuation_usd": 1.5001,
                  "valuation_by_country": [
                    {
                      "chile": 1223.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 219,
                  "impressions": 1119,
                  "valuation": 1223.0,
                  "valuation_usd": 1.5001,
                  "valuation_by_country": [
                    {
                      "chile": 1223.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 522,
            "domain": "facemama.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 72,
                  "impressions": 1000,
                  "valuation": 2510.0,
                  "valuation_usd": 3.0787,
                  "valuation_by_country": [
                    {
                      "chile": 2510.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 72,
                  "impressions": 1000,
                  "valuation": 2510.0,
                  "valuation_usd": 3.0787,
                  "valuation_by_country": [
                    {
                      "chile": 2510.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 496,
            "domain": "mch.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 2,
                  "impact": 168,
                  "impressions": 855,
                  "valuation": 1172.0,
                  "valuation_usd": 1.4375,
                  "valuation_by_country": [
                    {
                      "chile": 1172.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 168,
                  "impressions": 855,
                  "valuation": 1172.0,
                  "valuation_usd": 1.4375,
                  "valuation_by_country": [
                    {
                      "chile": 1172.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 887,
            "domain": "popsugar.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 30,
                  "impressions": 417,
                  "valuation": 470.0,
                  "valuation_usd": 0.5765,
                  "valuation_by_country": [
                    {
                      "chile": 470.0
                    }
                  ]
                }
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 31,
                  "impressions": 429,
                  "valuation": 459.0,
                  "valuation_usd": 0.563,
                  "valuation_by_country": [
                    {
                      "chile": 459.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 61,
                  "impressions": 846,
                  "valuation": 929.0,
                  "valuation_usd": 1.1395,
                  "valuation_by_country": [
                    {
                      "chile": 929.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 508,
            "domain": "sonarfm.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 160,
                  "impressions": 818,
                  "valuation": 21004.0,
                  "valuation_usd": 25.7626,
                  "valuation_by_country": [
                    {
                      "chile": 21004.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 160,
                  "impressions": 818,
                  "valuation": 21004.0,
                  "valuation_usd": 25.7626,
                  "valuation_by_country": [
                    {
                      "chile": 21004.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 486,
            "domain": "elamaule.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 2,
                  "impact": 120,
                  "impressions": 600,
                  "valuation": 2249.0,
                  "valuation_usd": 2.7585,
                  "valuation_by_country": [
                    {
                      "chile": 2249.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 120,
                  "impressions": 600,
                  "valuation": 2249.0,
                  "valuation_usd": 2.7585,
                  "valuation_by_country": [
                    {
                      "chile": 2249.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 7104,
            "domain": "realtor.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 74,
                  "impressions": 375,
                  "valuation": 419.0,
                  "valuation_usd": 0.5139,
                  "valuation_by_country": [
                    {
                      "chile": 419.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 74,
                  "impressions": 375,
                  "valuation": 419.0,
                  "valuation_usd": 0.5139,
                  "valuation_by_country": [
                    {
                      "chile": 419.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 464,
            "domain": "df.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 58,
                  "impressions": 296,
                  "valuation": 1127.0,
                  "valuation_usd": 1.3823,
                  "valuation_by_country": [
                    {
                      "chile": 1127.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 58,
                  "impressions": 296,
                  "valuation": 1127.0,
                  "valuation_usd": 1.3823,
                  "valuation_by_country": [
                    {
                      "chile": 1127.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 7895,
            "domain": "noticialdia.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 46,
                  "impressions": 231,
                  "valuation": 262.0,
                  "valuation_usd": 0.3214,
                  "valuation_by_country": [
                    {
                      "chile": 262.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 46,
                  "impressions": 231,
                  "valuation": 262.0,
                  "valuation_usd": 0.3214,
                  "valuation_by_country": [
                    {
                      "chile": 262.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 481,
            "domain": "elnortero.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 37,
                  "impressions": 188,
                  "valuation": 973.0,
                  "valuation_usd": 1.1934,
                  "valuation_by_country": [
                    {
                      "chile": 973.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 37,
                  "impressions": 188,
                  "valuation": 973.0,
                  "valuation_usd": 1.1934,
                  "valuation_by_country": [
                    {
                      "chile": 973.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 874,
            "domain": "hellomagazine.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 34,
                  "impressions": 171,
                  "valuation": 187.0,
                  "valuation_usd": 0.2294,
                  "valuation_by_country": [
                    {
                      "chile": 187.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 34,
                  "impressions": 171,
                  "valuation": 187.0,
                  "valuation_usd": 0.2294,
                  "valuation_by_country": [
                    {
                      "chile": 187.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 467,
            "domain": "paula.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 31,
                  "impressions": 158,
                  "valuation": 814.0,
                  "valuation_usd": 0.9984,
                  "valuation_by_country": [
                    {
                      "chile": 814.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 31,
                  "impressions": 158,
                  "valuation": 814.0,
                  "valuation_usd": 0.9984,
                  "valuation_by_country": [
                    {
                      "chile": 814.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 453,
            "domain": "elmorrocotudo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "date_int": 1609286400000,
                "metrics": {
                  "count": 1,
                  "impact": 10,
                  "impressions": 50,
                  "valuation": 244.0,
                  "valuation_usd": 0.2993,
                  "valuation_by_country": [
                    {
                      "chile": 244.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 10,
                  "impressions": 50,
                  "valuation": 244.0,
                  "valuation_usd": 0.2993,
                  "valuation_by_country": [
                    {
                      "chile": 244.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 7795007,
        "title": "Gasoducto Atacama - enel.cl",
        "landing_page": "7795007",
        "description": null,
        "metrics": {
          "count": 3,
          "impact": 186,
          "impressions": 900,
          "valuation": 1230.0,
          "valuation_usd": 1.5087,
          "valuation_by_country": [
            {
              "chile": 1230.0
            }
          ]
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "websites_by_date": [
          {
            "id": 6403,
            "domain": "minutoneuquen.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 3,
                  "impact": 186,
                  "impressions": 900,
                  "valuation": 1230.0,
                  "valuation_usd": 1.5087,
                  "valuation_by_country": [
                    {
                      "chile": 1230.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 186,
                  "impressions": 900,
                  "valuation": 1230.0,
                  "valuation_usd": 1.5087,
                  "valuation_by_country": [
                    {
                      "chile": 1230.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 4849020,
        "title": "Enel - Enel Distribución Chile",
        "landing_page": "4849020",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 7,
          "impressions": 75,
          "valuation": 107.0,
          "valuation_usd": 0.1312,
          "valuation_by_country": [
            {
              "chile": 107.0
            }
          ]
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "websites_by_date": [
          {
            "id": 13236,
            "domain": "diarioestrategia.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "date_int": 1609200000000,
                "metrics": {
                  "count": 1,
                  "impact": 7,
                  "impressions": 75,
                  "valuation": 107.0,
                  "valuation_usd": 0.1312,
                  "valuation_by_country": [
                    {
                      "chile": 107.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 1,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 7,
                  "impressions": 75,
                  "valuation": 107.0,
                  "valuation_usd": 0.1312,
                  "valuation_by_country": [
                    {
                      "chile": 107.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ],
    "websites": [
      {
        "id": 448,
        "domain": "biobiochile.cl",
        "category": "448",
        "metrics": {
          "count": 52,
          "impact": 64382,
          "impressions": 473697,
          "valuation": 1277626.0,
          "valuation_usd": 1567.081,
          "valuation_by_country": [
            {
              "chile": 1277626.0
            }
          ]
        }
      },
      {
        "id": 505,
        "domain": "radioagricultura.cl",
        "category": "505",
        "metrics": {
          "count": 50,
          "impact": 8743,
          "impressions": 62311,
          "valuation": 1053231.0,
          "valuation_usd": 1291.8478,
          "valuation_by_country": [
            {
              "chile": 1053231.0
            }
          ]
        }
      },
      {
        "id": 475,
        "domain": "duna.cl",
        "category": "475",
        "metrics": {
          "count": 238,
          "impact": 3288,
          "impressions": 20609,
          "valuation": 269215.0,
          "valuation_usd": 330.2075,
          "valuation_by_country": [
            {
              "chile": 269215.0
            }
          ]
        }
      },
      {
        "id": 495,
        "domain": "eldinamo.cl",
        "category": "495",
        "metrics": {
          "count": 34,
          "impact": 9007,
          "impressions": 144020,
          "valuation": 134333.0,
          "valuation_usd": 164.7671,
          "valuation_by_country": [
            {
              "chile": 134333.0
            }
          ]
        }
      },
      {
        "id": 850,
        "domain": "yapo.cl",
        "category": "850",
        "metrics": {
          "count": 1,
          "impact": 13936,
          "impressions": 71349,
          "valuation": 78592.0,
          "valuation_usd": 96.3976,
          "valuation_by_country": [
            {
              "chile": 78592.0
            }
          ]
        }
      },
      {
        "id": 341,
        "domain": "publimetro.cl",
        "category": "341",
        "metrics": {
          "count": 1,
          "impact": 1815,
          "impressions": 9279,
          "valuation": 49828.0,
          "valuation_usd": 61.1169,
          "valuation_by_country": [
            {
              "chile": 49828.0
            }
          ]
        }
      },
      {
        "id": 335,
        "domain": "lacuarta.com",
        "category": "335",
        "metrics": {
          "count": 1,
          "impact": 3798,
          "impressions": 19434,
          "valuation": 45420.0,
          "valuation_usd": 55.7102,
          "valuation_by_country": [
            {
              "chile": 45420.0
            }
          ]
        }
      },
      {
        "id": 722,
        "domain": "lared.cl",
        "category": "722",
        "metrics": {
          "count": 2,
          "impact": 453,
          "impressions": 5964,
          "valuation": 25652.0,
          "valuation_usd": 31.4636,
          "valuation_by_country": [
            {
              "chile": 25652.0
            }
          ]
        }
      },
      {
        "id": 508,
        "domain": "sonarfm.cl",
        "category": "508",
        "metrics": {
          "count": 1,
          "impact": 160,
          "impressions": 818,
          "valuation": 21004.0,
          "valuation_usd": 25.7626,
          "valuation_by_country": [
            {
              "chile": 21004.0
            }
          ]
        }
      },
      {
        "id": 498,
        "domain": "aqua.cl",
        "category": "unknown",
        "metrics": {
          "count": 3,
          "impact": 727,
          "impressions": 7141,
          "valuation": 9206.0,
          "valuation_usd": 11.2917,
          "valuation_by_country": [
            {
              "chile": 9206.0
            }
          ]
        }
      },
      {
        "id": 489,
        "domain": "elnaveghable.cl",
        "category": "489",
        "metrics": {
          "count": 1,
          "impact": 108,
          "impressions": 1500,
          "valuation": 5937.0,
          "valuation_usd": 7.2821,
          "valuation_by_country": [
            {
              "chile": 5937.0
            }
          ]
        }
      },
      {
        "id": 10423,
        "domain": "enlacejudio.com",
        "category": "10423",
        "metrics": {
          "count": 2,
          "impact": 486,
          "impressions": 6274,
          "valuation": 5527.0,
          "valuation_usd": 6.7792,
          "valuation_by_country": [
            {
              "chile": 5527.0
            }
          ]
        }
      },
      {
        "id": 4839,
        "domain": "aciprensa.com",
        "category": "4839",
        "metrics": {
          "count": 2,
          "impact": 433,
          "impressions": 2211,
          "valuation": 2794.0,
          "valuation_usd": 3.427,
          "valuation_by_country": [
            {
              "chile": 2794.0
            }
          ]
        }
      },
      {
        "id": 522,
        "domain": "facemama.com",
        "category": "522",
        "metrics": {
          "count": 1,
          "impact": 72,
          "impressions": 1000,
          "valuation": 2510.0,
          "valuation_usd": 3.0787,
          "valuation_by_country": [
            {
              "chile": 2510.0
            }
          ]
        }
      },
      {
        "id": 486,
        "domain": "elamaule.cl",
        "category": "486",
        "metrics": {
          "count": 2,
          "impact": 120,
          "impressions": 600,
          "valuation": 2249.0,
          "valuation_usd": 2.7585,
          "valuation_by_country": [
            {
              "chile": 2249.0
            }
          ]
        }
      },
      {
        "id": 6403,
        "domain": "minutoneuquen.com",
        "category": "6403",
        "metrics": {
          "count": 3,
          "impact": 186,
          "impressions": 900,
          "valuation": 1230.0,
          "valuation_usd": 1.5087,
          "valuation_by_country": [
            {
              "chile": 1230.0
            }
          ]
        }
      },
      {
        "id": 851,
        "domain": "as.com",
        "category": "851",
        "metrics": {
          "count": 1,
          "impact": 219,
          "impressions": 1119,
          "valuation": 1223.0,
          "valuation_usd": 1.5001,
          "valuation_by_country": [
            {
              "chile": 1223.0
            }
          ]
        }
      },
      {
        "id": 496,
        "domain": "mch.cl",
        "category": "496",
        "metrics": {
          "count": 2,
          "impact": 168,
          "impressions": 855,
          "valuation": 1172.0,
          "valuation_usd": 1.4375,
          "valuation_by_country": [
            {
              "chile": 1172.0
            }
          ]
        }
      },
      {
        "id": 464,
        "domain": "df.cl",
        "category": "464",
        "metrics": {
          "count": 1,
          "impact": 58,
          "impressions": 296,
          "valuation": 1127.0,
          "valuation_usd": 1.3823,
          "valuation_by_country": [
            {
              "chile": 1127.0
            }
          ]
        }
      },
      {
        "id": 481,
        "domain": "elnortero.cl",
        "category": "481",
        "metrics": {
          "count": 1,
          "impact": 37,
          "impressions": 188,
          "valuation": 973.0,
          "valuation_usd": 1.1934,
          "valuation_by_country": [
            {
              "chile": 973.0
            }
          ]
        }
      },
      {
        "id": 887,
        "domain": "popsugar.com",
        "category": "unknown",
        "metrics": {
          "count": 2,
          "impact": 61,
          "impressions": 846,
          "valuation": 929.0,
          "valuation_usd": 1.1395,
          "valuation_by_country": [
            {
              "chile": 929.0
            }
          ]
        }
      },
      {
        "id": 467,
        "domain": "paula.cl",
        "category": "467",
        "metrics": {
          "count": 1,
          "impact": 31,
          "impressions": 158,
          "valuation": 814.0,
          "valuation_usd": 0.9984,
          "valuation_by_country": [
            {
              "chile": 814.0
            }
          ]
        }
      },
      {
        "id": 7104,
        "domain": "realtor.com",
        "category": "7104",
        "metrics": {
          "count": 1,
          "impact": 74,
          "impressions": 375,
          "valuation": 419.0,
          "valuation_usd": 0.5139,
          "valuation_by_country": [
            {
              "chile": 419.0
            }
          ]
        }
      },
      {
        "id": 7895,
        "domain": "noticialdia.com",
        "category": "7895",
        "metrics": {
          "count": 1,
          "impact": 46,
          "impressions": 231,
          "valuation": 262.0,
          "valuation_usd": 0.3214,
          "valuation_by_country": [
            {
              "chile": 262.0
            }
          ]
        }
      },
      {
        "id": 453,
        "domain": "elmorrocotudo.cl",
        "category": "453",
        "metrics": {
          "count": 1,
          "impact": 10,
          "impressions": 50,
          "valuation": 244.0,
          "valuation_usd": 0.2993,
          "valuation_by_country": [
            {
              "chile": 244.0
            }
          ]
        }
      },
      {
        "id": 874,
        "domain": "hellomagazine.com",
        "category": "874",
        "metrics": {
          "count": 1,
          "impact": 34,
          "impressions": 171,
          "valuation": 187.0,
          "valuation_usd": 0.2294,
          "valuation_by_country": [
            {
              "chile": 187.0
            }
          ]
        }
      },
      {
        "id": 13236,
        "domain": "diarioestrategia.cl",
        "category": "13236",
        "metrics": {
          "count": 1,
          "impact": 7,
          "impressions": 75,
          "valuation": 107.0,
          "valuation_usd": 0.1312,
          "valuation_by_country": [
            {
              "chile": 107.0
            }
          ]
        }
      }
    ],
    "websites_by_date": [
      {
        "id": 448,
        "domain": "biobiochile.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 18,
              "impact": 23446,
              "impressions": 119952,
              "valuation": 474431.0,
              "valuation_usd": 581.9166,
              "valuation_by_country": [
                {
                  "chile": 474431.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 34,
              "impact": 40936,
              "impressions": 353745,
              "valuation": 803195.0,
              "valuation_usd": 985.1644,
              "valuation_by_country": [
                {
                  "chile": 803195.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 505,
        "domain": "radioagricultura.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 49,
              "impact": 8668,
              "impressions": 61361,
              "valuation": 1036807.0,
              "valuation_usd": 1271.7028,
              "valuation_by_country": [
                {
                  "chile": 1036807.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 75,
              "impressions": 950,
              "valuation": 16424.0,
              "valuation_usd": 20.145,
              "valuation_by_country": [
                {
                  "chile": 16424.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 475,
        "domain": "duna.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 163,
              "impact": 1483,
              "impressions": 6913,
              "valuation": 93499.0,
              "valuation_usd": 114.6818,
              "valuation_by_country": [
                {
                  "chile": 93499.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 75,
              "impact": 1805,
              "impressions": 13696,
              "valuation": 175716.0,
              "valuation_usd": 215.5257,
              "valuation_by_country": [
                {
                  "chile": 175716.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 495,
        "domain": "eldinamo.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 15,
              "impact": 3497,
              "impressions": 55917,
              "valuation": 72317.0,
              "valuation_usd": 88.7009,
              "valuation_by_country": [
                {
                  "chile": 72317.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 19,
              "impact": 5510,
              "impressions": 88103,
              "valuation": 62016.0,
              "valuation_usd": 76.0662,
              "valuation_by_country": [
                {
                  "chile": 62016.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 850,
        "domain": "yapo.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 13936,
              "impressions": 71349,
              "valuation": 78592.0,
              "valuation_usd": 96.3976,
              "valuation_by_country": [
                {
                  "chile": 78592.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 341,
        "domain": "publimetro.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 1815,
              "impressions": 9279,
              "valuation": 49828.0,
              "valuation_usd": 61.1169,
              "valuation_by_country": [
                {
                  "chile": 49828.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 335,
        "domain": "lacuarta.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 3798,
              "impressions": 19434,
              "valuation": 45420.0,
              "valuation_usd": 55.7102,
              "valuation_by_country": [
                {
                  "chile": 45420.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 722,
        "domain": "lared.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 412,
              "impressions": 5757,
              "valuation": 24210.0,
              "valuation_usd": 29.6949,
              "valuation_by_country": [
                {
                  "chile": 24210.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 41,
              "impressions": 207,
              "valuation": 1442.0,
              "valuation_usd": 1.7687,
              "valuation_by_country": [
                {
                  "chile": 1442.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 508,
        "domain": "sonarfm.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 160,
              "impressions": 818,
              "valuation": 21004.0,
              "valuation_usd": 25.7626,
              "valuation_by_country": [
                {
                  "chile": 21004.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 498,
        "domain": "aqua.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 290,
              "impressions": 1484,
              "valuation": 1646.0,
              "valuation_usd": 2.0189,
              "valuation_by_country": [
                {
                  "chile": 1646.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 2,
              "impact": 437,
              "impressions": 5657,
              "valuation": 7560.0,
              "valuation_usd": 9.2728,
              "valuation_by_country": [
                {
                  "chile": 7560.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 489,
        "domain": "elnaveghable.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 108,
              "impressions": 1500,
              "valuation": 5937.0,
              "valuation_usd": 7.2821,
              "valuation_by_country": [
                {
                  "chile": 5937.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 10423,
        "domain": "enlacejudio.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 432,
              "impressions": 6000,
              "valuation": 5178.0,
              "valuation_usd": 6.3511,
              "valuation_by_country": [
                {
                  "chile": 5178.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 54,
              "impressions": 274,
              "valuation": 349.0,
              "valuation_usd": 0.4281,
              "valuation_by_country": [
                {
                  "chile": 349.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 4839,
        "domain": "aciprensa.com",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 2,
              "impact": 433,
              "impressions": 2211,
              "valuation": 2794.0,
              "valuation_usd": 3.427,
              "valuation_by_country": [
                {
                  "chile": 2794.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 522,
        "domain": "facemama.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 72,
              "impressions": 1000,
              "valuation": 2510.0,
              "valuation_usd": 3.0787,
              "valuation_by_country": [
                {
                  "chile": 2510.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 486,
        "domain": "elamaule.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 2,
              "impact": 120,
              "impressions": 600,
              "valuation": 2249.0,
              "valuation_usd": 2.7585,
              "valuation_by_country": [
                {
                  "chile": 2249.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 6403,
        "domain": "minutoneuquen.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 3,
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 851,
        "domain": "as.com",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 219,
              "impressions": 1119,
              "valuation": 1223.0,
              "valuation_usd": 1.5001,
              "valuation_by_country": [
                {
                  "chile": 1223.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 496,
        "domain": "mch.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 2,
              "impact": 168,
              "impressions": 855,
              "valuation": 1172.0,
              "valuation_usd": 1.4375,
              "valuation_by_country": [
                {
                  "chile": 1172.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 464,
        "domain": "df.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 58,
              "impressions": 296,
              "valuation": 1127.0,
              "valuation_usd": 1.3823,
              "valuation_by_country": [
                {
                  "chile": 1127.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 481,
        "domain": "elnortero.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 37,
              "impressions": 188,
              "valuation": 973.0,
              "valuation_usd": 1.1934,
              "valuation_by_country": [
                {
                  "chile": 973.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 887,
        "domain": "popsugar.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 30,
              "impressions": 417,
              "valuation": 470.0,
              "valuation_usd": 0.5765,
              "valuation_by_country": [
                {
                  "chile": 470.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 31,
              "impressions": 429,
              "valuation": 459.0,
              "valuation_usd": 0.563,
              "valuation_by_country": [
                {
                  "chile": 459.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 2
      },
      {
        "id": 467,
        "domain": "paula.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 31,
              "impressions": 158,
              "valuation": 814.0,
              "valuation_usd": 0.9984,
              "valuation_by_country": [
                {
                  "chile": 814.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 7104,
        "domain": "realtor.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 74,
              "impressions": 375,
              "valuation": 419.0,
              "valuation_usd": 0.5139,
              "valuation_by_country": [
                {
                  "chile": 419.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 7895,
        "domain": "noticialdia.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 46,
              "impressions": 231,
              "valuation": 262.0,
              "valuation_usd": 0.3214,
              "valuation_by_country": [
                {
                  "chile": 262.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 453,
        "domain": "elmorrocotudo.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 10,
              "impressions": 50,
              "valuation": 244.0,
              "valuation_usd": 0.2993,
              "valuation_by_country": [
                {
                  "chile": 244.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 874,
        "domain": "hellomagazine.com",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 34,
              "impressions": 171,
              "valuation": 187.0,
              "valuation_usd": 0.2294,
              "valuation_by_country": [
                {
                  "chile": 187.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      },
      {
        "id": 13236,
        "domain": "diarioestrategia.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      }
    ],
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-30T17:25:27.000Z"
    },
    "campaigns_by_date": [
      {
        "id": 7852217,
        "name": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 244,
              "impact": 36231,
              "impressions": 248073,
              "valuation": 1460117.0,
              "valuation_usd": 1790.9166,
              "valuation_by_country": [
                {
                  "chile": 1460117.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 109,
              "impact": 10707,
              "impressions": 124323,
              "valuation": 300099.0,
              "valuation_usd": 368.0885,
              "valuation_by_country": [
                {
                  "chile": 300099.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7418419,
        "name": "Plan de Invierno - enel.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 17,
              "impact": 22150,
              "impressions": 113331,
              "valuation": 450699.0,
              "valuation_usd": 552.808,
              "valuation_by_country": [
                {
                  "chile": 450699.0
                }
              ]
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 33,
              "impact": 39178,
              "impressions": 344769,
              "valuation": 779559.0,
              "valuation_usd": 956.1735,
              "valuation_by_country": [
                {
                  "chile": 779559.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7795007,
        "name": "Gasoducto Atacama - enel.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 3,
              "impact": 186,
              "impressions": 900,
              "valuation": 1230.0,
              "valuation_usd": 1.5087,
              "valuation_by_country": [
                {
                  "chile": 1230.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4849020,
        "name": "Enel - Enel Distribución Chile",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 7,
              "impressions": 75,
              "valuation": 107.0,
              "valuation_usd": 0.1312,
              "valuation_by_country": [
                {
                  "chile": 107.0
                }
              ]
            }
          }
        ]
      }
    ],
    "summary": {
      "countries": [
        {
          "id": 1,
          "name": "chile",
          "metrics": {
            "impact": 108459,
            "impressions": 831471,
            "valuation": 2991811.0,
            "valuation_usd": 3669.6265
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 108459,
            "impressions": 831471,
            "valuation": 2991811.0,
            "valuation_usd": 3669.6265
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 80953,
            "impressions": 430816,
            "valuation": 2286602.0,
            "valuation_usd": 2804.6475
          }
        },
        {
          "id": 1,
          "name": "desktop",
          "metrics": {
            "impact": 27506,
            "impressions": 400655,
            "valuation": 705209.0,
            "valuation_usd": 864.979
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2020-12-29T00:00:00.000Z",
          "date_int": 1609200000000,
          "metrics": {
            "impact": 58574,
            "impressions": 362379,
            "valuation": 1912153.0,
            "valuation_usd": 2345.3645,
            "valuation_by_country": [
              {
                "chile": 1912153.0
              }
            ]
          }
        },
        {
          "date": "2020-12-30T00:00:00.000Z",
          "date_int": 1609286400000,
          "metrics": {
            "impact": 49885,
            "impressions": 469092,
            "valuation": 1079658.0,
            "valuation_usd": 1324.262,
            "valuation_by_country": [
              {
                "chile": 1079658.0
              }
            ]
          }
        }
      ],
      "total_impressions": 831471,
      "total_impact": 108459,
      "total_valuation": 2991811.0,
      "total_valuation_usd": 3669.6265000000003,
      "position": {
        "first_scroll": 0.14903002923199574,
        "second_scroll": 0.12616510383061122,
        "third_or_more_scroll": 0.724804866937393
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-30T17:25:27.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
