> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/brands-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-29T01:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"},{"id":8968,"name":"enel"}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-29T01:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"},{"id":8968,"name":"enel"}]}}'

response = requests.post('https://clientela.admetricks.com/brands-report/', headers=headers, data=data)
```

```javascript
var fetch = require('node-fetch');

fetch('https://clientela.admetricks.com/brands-report/', {
    method: 'POST',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-29T01:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"},{"id":8968,"name":"enel"}]}})
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
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-29T01:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"},{"id":8968,"name":"enel"}]}}';
$response = Requests::post('https://clientela.admetricks.com/brands-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{
  "meta": {
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-29T00:38:54.000Z"
    }
  },
  "data": {
    "industries": [
      {
        "metrics": {
          "impact": 59007,
          "count": 267,
          "valuation_usd": 1462.2419319662692,
          "valuation_by_country": [
            {
              "chile": 1059400
            }
          ],
          "impressions": 364590,
          "valuation": 1059400
        },
        "id": 221,
        "name": "energía - energía domestica"
      }
    ],
    "websites_by_date": [
      {
        "domain": "radioagricultura.cl",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "metrics": {
              "impact": 8668,
              "count": 49,
              "valuation_usd": 680.2654779868186,
              "valuation_by_country": [
                {
                  "chile": 492855
                }
              ],
              "impressions": 61361,
              "valuation": 492855
            },
            "date_int": 1609200000000
          }
        ],
        "id": 505,
        "days_with_impressions": 1
      }
    ],
    "ad_types": [
      {
        "metrics": {
          "impact": 59007,
          "count": 267,
          "valuation_usd": 1462.2419319662692,
          "valuation_by_country": [
            {
              "chile": 1059400
            }
          ],
          "impressions": 364590,
          "valuation": 1059400
        },
        "id": 1,
        "name": "display"
      }
    ],
    "countries": [
      {
        "metrics": {
          "impact": 59007,
          "count": 267,
          "valuation_usd": 1462.2419319662692,
          "valuation_by_country": [
            {
              "chile": 1059400
            }
          ],
          "impressions": 364590,
          "valuation": 1059400
        },
        "id": 1,
        "name": "chile"
      }
    ],
    "website_categories": [
      {
        "metrics": {
          "impact": 320,
          "count": 2,
          "valuation_usd": 2.29950449184048,
          "valuation_by_country": [
            {
              "chile": 1666
            }
          ],
          "impressions": 1901,
          "valuation": 1666
        },
        "id": "unknown",
        "name": "unknown"
      }
    ],
    "sold_by": [
      {
        "metrics": {
          "impact": 54471,
          "count": 217,
          "valuation_usd": 1223.0382546229785,
          "valuation_by_country": [
            {
              "chile": 886096
            }
          ],
          "impressions": 318777,
          "valuation": 886096
        },
        "id": "direct",
        "name": "direct"
      },
      {
        "metrics": {
          "impact": 3872,
          "count": 45,
          "valuation_usd": 230.64747785654467,
          "valuation_by_country": [
            {
              "chile": 167105
            }
          ],
          "impressions": 38682,
          "valuation": 167105
        },
        "id": "unknown",
        "name": "unknown"
      },
      {
        "metrics": {
          "impact": 664,
          "count": 5,
          "valuation_usd": 8.55619948674618,
          "valuation_by_country": [
            {
              "chile": 6199
            }
          ],
          "impressions": 7131,
          "valuation": 6199
        },
        "id": "google",
        "name": "google"
      }
    ],
    "devices": [
      {
        "metrics": {
          "impact": 54371,
          "count": 244,
          "valuation_usd": 1293.2117887584297,
          "valuation_by_country": [
            {
              "chile": 936937
            }
          ],
          "impressions": 294524,
          "valuation": 936937
        },
        "id": 2,
        "name": "mobile"
      },
      {
        "metrics": {
          "impact": 4636,
          "count": 23,
          "valuation_usd": 169.03014320783956,
          "valuation_by_country": [
            {
              "chile": 122463
            }
          ],
          "impressions": 70066,
          "valuation": 122463
        },
        "id": 1,
        "name": "desktop"
      }
    ],
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-30T00:38:54.000Z"
    },
    "campaigns": [
      {
        "landing_page": "enel.cl/es/conoce-enel/prensa/news/d202011-hito-historico-para-enel-lider-del-dow-jones-sustainability-world-index-de-2020.html",
        "description": "feliz | fotografía | mañana | mundo | paisaje | pie foto | prenda pieza | ropa formal | vestido | viento",
        "title": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "date_range": {
          "start": "2020-12-29T00:25:40.000Z",
          "end": "2020-12-30T00:38:54.000Z"
        },
        "industry": {
          "id": 221,
          "name": "energía - energía domestica"
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "countries": [
          {
            "metrics": {
              "impact": 36664,
              "count": 246,
              "valuation_usd": 1127.814476176355,
              "valuation_by_country": [
                {
                  "chile": 817106
                }
              ],
              "impressions": 250284,
              "valuation": 817106
            },
            "id": 1,
            "name": "chile"
          }
        ],
        "devices": [
          {
            "metrics": {
              "impact": 32221,
              "count": 227,
              "valuation_usd": 960.3315985959783,
              "valuation_by_country": [
                {
                  "chile": 695764
                }
              ],
              "impressions": 181193,
              "valuation": 695764
            },
            "id": 2,
            "name": "mobile"
          },
          {
            "metrics": {
              "impact": 4443,
              "count": 19,
              "valuation_usd": 167.48287758037668,
              "valuation_by_country": [
                {
                  "chile": 121342
                }
              ],
              "impressions": 69091,
              "valuation": 121342
            },
            "id": 1,
            "name": "desktop"
          }
        ],
        "metrics": {
          "impact": 36664,
          "count": 246,
          "valuation_usd": 1127.814476176355,
          "valuation_by_country": [
            {
              "chile": 817106
            }
          ],
          "impressions": 250284,
          "valuation": 817106
        },
        "websites": [
          {
            "metrics": {
              "impact": 1483,
              "count": 163,
              "valuation_usd": 77.45437818974813,
              "valuation_by_country": [
                {
                  "chile": 56116
                }
              ],
              "impressions": 6913,
              "valuation": 56116
            },
            "domain": "duna.cl",
            "id": 475
          },
          {
            "metrics": {
              "impact": 8668,
              "count": 49,
              "valuation_usd": 680.2654779868186,
              "valuation_by_country": [
                {
                  "chile": 492855
                }
              ],
              "impressions": 61361,
              "valuation": 492855
            },
            "domain": "radioagricultura.cl",
            "id": 505
          },
          {
            "metrics": {
              "impact": 3497,
              "count": 15,
              "valuation_usd": 118.67706795763996,
              "valuation_by_country": [
                {
                  "chile": 85982
                }
              ],
              "impressions": 55917,
              "valuation": 85982
            },
            "domain": "eldinamo.cl",
            "id": 495
          },
          {
            "metrics": {
              "impact": 120,
              "count": 2,
              "valuation_usd": 2.5755554512450995,
              "valuation_by_country": [
                {
                  "chile": 1866
                }
              ],
              "impressions": 600,
              "valuation": 1866
            },
            "domain": "elamaule.cl",
            "id": 486
          },
          {
            "metrics": {
              "impact": 433,
              "count": 2,
              "valuation_usd": 2.369897486488658,
              "valuation_by_country": [
                {
                  "chile": 1717
                }
              ],
              "impressions": 2211,
              "valuation": 1717
            },
            "domain": "aciprensa.com",
            "id": 4839
          },
          {
            "metrics": {
              "impact": 3798,
              "count": 1,
              "valuation_usd": 35.51119541781025,
              "valuation_by_country": [
                {
                  "chile": 25728
                }
              ],
              "impressions": 19434,
              "valuation": 25728
            },
            "domain": "lacuarta.com",
            "id": 335
          },
          {
            "metrics": {
              "impact": 1815,
              "count": 1,
              "valuation_usd": 47.001816603027535,
              "valuation_by_country": [
                {
                  "chile": 34053
                }
              ],
              "impressions": 9279,
              "valuation": 34053
            },
            "domain": "publimetro.cl",
            "id": 341
          },
          {
            "metrics": {
              "impact": 1296,
              "count": 1,
              "valuation_usd": 17.527855667396313,
              "valuation_by_country": [
                {
                  "chile": 12699
                }
              ],
              "impressions": 6621,
              "valuation": 12699
            },
            "domain": "biobiochile.cl",
            "id": 448
          },
          {
            "metrics": {
              "impact": 31,
              "count": 1,
              "valuation_usd": 0.6749445957442946,
              "valuation_by_country": [
                {
                  "chile": 489
                }
              ],
              "impressions": 158,
              "valuation": 489
            },
            "domain": "paula.cl",
            "id": 467
          },
          {
            "metrics": {
              "impact": 37,
              "count": 1,
              "valuation_usd": 0.7467178451894957,
              "valuation_by_country": [
                {
                  "chile": 541
                }
              ],
              "impressions": 188,
              "valuation": 541
            },
            "domain": "elnortero.cl",
            "id": 481
          },
          {
            "metrics": {
              "impact": 290,
              "count": 1,
              "valuation_usd": 1.8191758224764423,
              "valuation_by_country": [
                {
                  "chile": 1318
                }
              ],
              "impressions": 1484,
              "valuation": 1318
            },
            "domain": "aqua.cl",
            "id": 498
          },
          {
            "metrics": {
              "impact": 160,
              "count": 1,
              "valuation_usd": 10.34777021328216,
              "valuation_by_country": [
                {
                  "chile": 7497
                }
              ],
              "impressions": 818,
              "valuation": 7497
            },
            "domain": "sonarfm.cl",
            "id": 508
          },
          {
            "metrics": {
              "impact": 72,
              "count": 1,
              "valuation_usd": 3.9171631139515504,
              "valuation_by_country": [
                {
                  "chile": 2838
                }
              ],
              "impressions": 1000,
              "valuation": 2838
            },
            "domain": "facemama.com",
            "id": 522
          },
          {
            "metrics": {
              "impact": 412,
              "count": 1,
              "valuation_usd": 37.5098043638997,
              "valuation_by_country": [
                {
                  "chile": 27176
                }
              ],
              "impressions": 5757,
              "valuation": 27176
            },
            "domain": "lared.cl",
            "id": 722
          },
          {
            "metrics": {
              "impact": 13936,
              "count": 1,
              "valuation_usd": 83.21004069333445,
              "valuation_by_country": [
                {
                  "chile": 60286
                }
              ],
              "impressions": 71349,
              "valuation": 60286
            },
            "domain": "yapo.cl",
            "id": 850
          },
          {
            "metrics": {
              "impact": 34,
              "count": 1,
              "valuation_usd": 0.18219363320704884,
              "valuation_by_country": [
                {
                  "chile": 132
                }
              ],
              "impressions": 171,
              "valuation": 132
            },
            "domain": "hellomagazine.com",
            "id": 874
          },
          {
            "metrics": {
              "impact": 30,
              "count": 1,
              "valuation_usd": 0.4803286693640379,
              "valuation_by_country": [
                {
                  "chile": 348
                }
              ],
              "impressions": 417,
              "valuation": 348
            },
            "domain": "popsugar.com",
            "id": 887
          },
          {
            "metrics": {
              "impact": 74,
              "count": 1,
              "valuation_usd": 0.3988936363396751,
              "valuation_by_country": [
                {
                  "chile": 289
                }
              ],
              "impressions": 375,
              "valuation": 289
            },
            "domain": "realtor.com",
            "id": 7104
          },
          {
            "metrics": {
              "impact": 46,
              "count": 1,
              "valuation_usd": 0.24568535387011134,
              "valuation_by_country": [
                {
                  "chile": 178
                }
              ],
              "impressions": 231,
              "valuation": 178
            },
            "domain": "noticialdia.com",
            "id": 7895
          },
          {
            "metrics": {
              "impact": 432,
              "count": 1,
              "valuation_usd": 6.89851347552144,
              "valuation_by_country": [
                {
                  "chile": 4998
                }
              ],
              "impressions": 6000,
              "valuation": 4998
            },
            "domain": "enlacejudio.com",
            "id": 10423
          }
        ],
        "sold_by": [
          {
            "metrics": {
              "impact": 32314,
              "count": 199,
              "valuation_usd": 890.0227994904187,
              "valuation_by_country": [
                {
                  "chile": 644825
                }
              ],
              "impressions": 205371,
              "valuation": 644825
            },
            "id": "direct",
            "name": "direct"
          },
          {
            "metrics": {
              "impact": 3872,
              "count": 45,
              "valuation_usd": 230.64747785654467,
              "valuation_by_country": [
                {
                  "chile": 167105
                }
              ],
              "impressions": 38682,
              "valuation": 167105
            },
            "id": "unknown",
            "name": "unknown"
          },
          {
            "metrics": {
              "impact": 478,
              "count": 2,
              "valuation_usd": 7.144198829391552,
              "valuation_by_country": [
                {
                  "chile": 5176
                }
              ],
              "impressions": 6231,
              "valuation": 5176
            },
            "id": "google",
            "name": "google"
          }
        ],
        "preview": {
          "ad_measurements": {
            "width": 300,
            "height": 250
          },
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_c4420d89bb6b5b5a1d348488ace3f8f0.jpg"
          }
        },
        "id": 7852217,
        "ad_types": [
          {
            "metrics": {
              "impact": 36664,
              "count": 246,
              "valuation_usd": 1127.814476176355,
              "valuation_by_country": [
                {
                  "chile": 817106
                }
              ],
              "impressions": 250284,
              "valuation": 817106
            },
            "id": 1,
            "name": "display"
          }
        ]
      }
    ],
    "campaigns_with_websites_by_date": [
      {
        "landing_page": "7852217",
        "description": null,
        "title": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "metrics": {
          "impact": 36664,
          "count": 246,
          "valuation_usd": 1127.814476176355,
          "valuation_by_country": [
            {
              "chile": 817106
            }
          ],
          "impressions": 250284,
          "valuation": 817106
        },
        "websites_by_date": [
          {
            "domain": "yapo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 13936,
                  "count": 1,
                  "valuation_usd": 83.21004069333445,
                  "valuation_by_country": [
                    {
                      "chile": 60286
                    }
                  ],
                  "impressions": 71349,
                  "valuation": 60286
                },
                "date_int": 1609200000000
              }
            ],
            "id": 850,
            "days_with_impressions": 1
          },
          {
            "domain": "radioagricultura.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 8668,
                  "count": 49,
                  "valuation_usd": 680.2654779868186,
                  "valuation_by_country": [
                    {
                      "chile": 492855
                    }
                  ],
                  "impressions": 61361,
                  "valuation": 492855
                },
                "date_int": 1609200000000
              }
            ],
            "id": 505,
            "days_with_impressions": 1
          },
          {
            "domain": "eldinamo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 3497,
                  "count": 15,
                  "valuation_usd": 118.67706795763996,
                  "valuation_by_country": [
                    {
                      "chile": 85982
                    }
                  ],
                  "impressions": 55917,
                  "valuation": 85982
                },
                "date_int": 1609200000000
              }
            ],
            "id": 495,
            "days_with_impressions": 1
          },
          {
            "domain": "lacuarta.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 3798,
                  "count": 1,
                  "valuation_usd": 35.51119541781025,
                  "valuation_by_country": [
                    {
                      "chile": 25728
                    }
                  ],
                  "impressions": 19434,
                  "valuation": 25728
                },
                "date_int": 1609200000000
              }
            ],
            "id": 335,
            "days_with_impressions": 1
          },
          {
            "domain": "publimetro.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 1815,
                  "count": 1,
                  "valuation_usd": 47.001816603027535,
                  "valuation_by_country": [
                    {
                      "chile": 34053
                    }
                  ],
                  "impressions": 9279,
                  "valuation": 34053
                },
                "date_int": 1609200000000
              }
            ],
            "id": 341,
            "days_with_impressions": 1
          },
          {
            "domain": "duna.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 1483,
                  "count": 163,
                  "valuation_usd": 77.45437818974813,
                  "valuation_by_country": [
                    {
                      "chile": 56116
                    }
                  ],
                  "impressions": 6913,
                  "valuation": 56116
                },
                "date_int": 1609200000000
              }
            ],
            "id": 475,
            "days_with_impressions": 1
          },
          {
            "domain": "biobiochile.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 1296,
                  "count": 1,
                  "valuation_usd": 17.527855667396313,
                  "valuation_by_country": [
                    {
                      "chile": 12699
                    }
                  ],
                  "impressions": 6621,
                  "valuation": 12699
                },
                "date_int": 1609200000000
              }
            ],
            "id": 448,
            "days_with_impressions": 1
          },
          {
            "domain": "enlacejudio.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 432,
                  "count": 1,
                  "valuation_usd": 6.89851347552144,
                  "valuation_by_country": [
                    {
                      "chile": 4998
                    }
                  ],
                  "impressions": 6000,
                  "valuation": 4998
                },
                "date_int": 1609200000000
              }
            ],
            "id": 10423,
            "days_with_impressions": 1
          },
          {
            "domain": "lared.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 412,
                  "count": 1,
                  "valuation_usd": 37.5098043638997,
                  "valuation_by_country": [
                    {
                      "chile": 27176
                    }
                  ],
                  "impressions": 5757,
                  "valuation": 27176
                },
                "date_int": 1609200000000
              }
            ],
            "id": 722,
            "days_with_impressions": 1
          },
          {
            "domain": "aciprensa.com",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "metrics": {
                  "impact": 433,
                  "count": 2,
                  "valuation_usd": 2.369897486488658,
                  "valuation_by_country": [
                    {
                      "chile": 1717
                    }
                  ],
                  "impressions": 2211,
                  "valuation": 1717
                },
                "date_int": 1609286400000
              }
            ],
            "id": 4839,
            "days_with_impressions": 1
          },
          {
            "domain": "aqua.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 290,
                  "count": 1,
                  "valuation_usd": 1.8191758224764423,
                  "valuation_by_country": [
                    {
                      "chile": 1318
                    }
                  ],
                  "impressions": 1484,
                  "valuation": 1318
                },
                "date_int": 1609200000000
              }
            ],
            "id": 498,
            "days_with_impressions": 1
          },
          {
            "domain": "facemama.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 72,
                  "count": 1,
                  "valuation_usd": 3.9171631139515504,
                  "valuation_by_country": [
                    {
                      "chile": 2838
                    }
                  ],
                  "impressions": 1000,
                  "valuation": 2838
                },
                "date_int": 1609200000000
              }
            ],
            "id": 522,
            "days_with_impressions": 1
          },
          {
            "domain": "sonarfm.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 160,
                  "count": 1,
                  "valuation_usd": 10.34777021328216,
                  "valuation_by_country": [
                    {
                      "chile": 7497
                    }
                  ],
                  "impressions": 818,
                  "valuation": 7497
                },
                "date_int": 1609200000000
              }
            ],
            "id": 508,
            "days_with_impressions": 1
          },
          {
            "domain": "elamaule.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 120,
                  "count": 2,
                  "valuation_usd": 2.5755554512450995,
                  "valuation_by_country": [
                    {
                      "chile": 1866
                    }
                  ],
                  "impressions": 600,
                  "valuation": 1866
                },
                "date_int": 1609200000000
              }
            ],
            "id": 486,
            "days_with_impressions": 1
          },
          {
            "domain": "popsugar.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 30,
                  "count": 1,
                  "valuation_usd": 0.4803286693640379,
                  "valuation_by_country": [
                    {
                      "chile": 348
                    }
                  ],
                  "impressions": 417,
                  "valuation": 348
                },
                "date_int": 1609200000000
              }
            ],
            "id": 887,
            "days_with_impressions": 1
          },
          {
            "domain": "realtor.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 74,
                  "count": 1,
                  "valuation_usd": 0.3988936363396751,
                  "valuation_by_country": [
                    {
                      "chile": 289
                    }
                  ],
                  "impressions": 375,
                  "valuation": 289
                },
                "date_int": 1609200000000
              }
            ],
            "id": 7104,
            "days_with_impressions": 1
          },
          {
            "domain": "noticialdia.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 46,
                  "count": 1,
                  "valuation_usd": 0.24568535387011134,
                  "valuation_by_country": [
                    {
                      "chile": 178
                    }
                  ],
                  "impressions": 231,
                  "valuation": 178
                },
                "date_int": 1609200000000
              }
            ],
            "id": 7895,
            "days_with_impressions": 1
          },
          {
            "domain": "elnortero.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 37,
                  "count": 1,
                  "valuation_usd": 0.7467178451894957,
                  "valuation_by_country": [
                    {
                      "chile": 541
                    }
                  ],
                  "impressions": 188,
                  "valuation": 541
                },
                "date_int": 1609200000000
              }
            ],
            "id": 481,
            "days_with_impressions": 1
          },
          {
            "domain": "hellomagazine.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 34,
                  "count": 1,
                  "valuation_usd": 0.18219363320704884,
                  "valuation_by_country": [
                    {
                      "chile": 132
                    }
                  ],
                  "impressions": 171,
                  "valuation": 132
                },
                "date_int": 1609200000000
              }
            ],
            "id": 874,
            "days_with_impressions": 1
          },
          {
            "domain": "paula.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 31,
                  "count": 1,
                  "valuation_usd": 0.6749445957442946,
                  "valuation_by_country": [
                    {
                      "chile": 489
                    }
                  ],
                  "impressions": 158,
                  "valuation": 489
                },
                "date_int": 1609200000000
              }
            ],
            "id": 467,
            "days_with_impressions": 1
          }
        ],
        "id": 7852217
      }
    ],
    "campaigns_by_date": [
      {
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "metrics": {
              "impact": 36231,
              "count": 244,
              "valuation_usd": 1125.4445786898664,
              "valuation_by_country": [
                {
                  "chile": 815389
                }
              ],
              "impressions": 248073,
              "valuation": 815389
            },
            "date_int": 1609200000000
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "metrics": {
              "impact": 433,
              "count": 2,
              "valuation_usd": 2.369897486488658,
              "valuation_by_country": [
                {
                  "chile": 1717
                }
              ],
              "impressions": 2211,
              "valuation": 1717
            },
            "date_int": 1609286400000
          }
        ],
        "id": 7852217,
        "name": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020"
      }
    ],
    "websites": [
      {
        "metrics": {
          "impact": 8668,
          "count": 49,
          "valuation_usd": 680.2654779868186,
          "valuation_by_country": [
            {
              "chile": 492855
            }
          ],
          "impressions": 61361,
          "valuation": 492855
        },
        "domain": "radioagricultura.cl",
        "id": 505
      }
    ],
    "brands_by_date": [
      {
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "metrics": {
              "impact": 58574,
              "count": 265,
              "valuation_usd": 1459.8720344797807,
              "valuation_by_country": [
                {
                  "chile": 1057683
                }
              ],
              "impressions": 362379,
              "valuation": 1057683
            },
            "date_int": 1609200000000
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "metrics": {
              "impact": 433,
              "count": 2,
              "valuation_usd": 2.369897486488658,
              "valuation_by_country": [
                {
                  "chile": 1717
                }
              ],
              "impressions": 2211,
              "valuation": 1717
            },
            "date_int": 1609286400000
          }
        ],
        "id": 8968,
        "name": "enel"
      }
    ],
    "brands": [
      {
        "metrics": {
          "impact": 59007,
          "count": 267,
          "valuation_usd": 1462.2419319662692,
          "valuation_by_country": [
            {
              "chile": 1059400
            }
          ],
          "impressions": 364590,
          "valuation": 1059400
        },
        "id": 8968,
        "name": "enel"
      }
    ],
    "summary": {
      "metrics_by_date": [
        {
          "date": "2020-12-29T00:00:00.000Z",
          "metrics": {
            "impact": 58574,
            "valuation_usd": 1459.8720344797807,
            "impressions": 362379,
            "valuation": 1057683
          },
          "date_int": 1609200000000
        },
        {
          "date": "2020-12-30T00:00:00.000Z",
          "metrics": {
            "impact": 433,
            "valuation_usd": 2.369897486488658,
            "impressions": 2211,
            "valuation": 1717
          },
          "date_int": 1609286400000
        }
      ],
      "ad_types": [
        {
          "metrics": {
            "impact": 59007,
            "valuation_usd": 1462.2419319662692,
            "impressions": 364590,
            "valuation": 1059400
          },
          "id": 1,
          "name": "display"
        }
      ],
      "countries": [
        {
          "metrics": {
            "impact": 59007,
            "valuation_usd": 1462.2419319662692,
            "impressions": 364590,
            "valuation": 1059400
          },
          "id": 1,
          "name": "chile"
        }
      ],
      "total_impressions": 364590,
      "total_impact": 59007,
      "devices": [
        {
          "metrics": {
            "impact": 54371,
            "valuation_usd": 1293.2117887584297,
            "impressions": 294524,
            "valuation": 936937
          },
          "id": 2,
          "name": "mobile"
        },
        {
          "metrics": {
            "impact": 4636,
            "valuation_usd": 169.03014320783956,
            "impressions": 70066,
            "valuation": 122463
          },
          "id": 1,
          "name": "desktop"
        }
      ],
      "total_valuation_usd": 1462.2419319662695,
      "position": {
        "first_scroll": 0.04339622641509434,
        "second_scroll": 0.06037735849056604,
        "third_or_more_scroll": 0.8924528301886793
      },
      "total_valuation": 1059400
    },
    "brands_with_websites_by_date": [
      {
        "metrics": {
          "impact": 59007,
          "count": 267,
          "valuation_usd": 1462.2419319662692,
          "valuation_by_country": [
            {
              "chile": 1059400
            }
          ],
          "impressions": 364590,
          "valuation": 1059400
        },
        "websites_by_date": [
          {
            "domain": "biobiochile.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 23446,
                  "count": 18,
                  "valuation_usd": 350.40804582984777,
                  "valuation_by_country": [
                    {
                      "chile": 253872
                    }
                  ],
                  "impressions": 119952,
                  "valuation": 253872
                },
                "date_int": 1609200000000
              }
            ],
            "id": 448,
            "days_with_impressions": 1
          },
          {
            "domain": "yapo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 13936,
                  "count": 1,
                  "valuation_usd": 83.21004069333445,
                  "valuation_by_country": [
                    {
                      "chile": 60286
                    }
                  ],
                  "impressions": 71349,
                  "valuation": 60286
                },
                "date_int": 1609200000000
              }
            ],
            "id": 850,
            "days_with_impressions": 1
          },
          {
            "domain": "radioagricultura.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 8668,
                  "count": 49,
                  "valuation_usd": 680.2654779868186,
                  "valuation_by_country": [
                    {
                      "chile": 492855
                    }
                  ],
                  "impressions": 61361,
                  "valuation": 492855
                },
                "date_int": 1609200000000
              }
            ],
            "id": 505,
            "days_with_impressions": 1
          },
          {
            "domain": "eldinamo.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 3497,
                  "count": 15,
                  "valuation_usd": 118.67706795763996,
                  "valuation_by_country": [
                    {
                      "chile": 85982
                    }
                  ],
                  "impressions": 55917,
                  "valuation": 85982
                },
                "date_int": 1609200000000
              }
            ],
            "id": 495,
            "days_with_impressions": 1
          },
          {
            "domain": "lacuarta.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 3798,
                  "count": 1,
                  "valuation_usd": 35.51119541781025,
                  "valuation_by_country": [
                    {
                      "chile": 25728
                    }
                  ],
                  "impressions": 19434,
                  "valuation": 25728
                },
                "date_int": 1609200000000
              }
            ],
            "id": 335,
            "days_with_impressions": 1
          },
          {
            "domain": "publimetro.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 1815,
                  "count": 1,
                  "valuation_usd": 47.001816603027535,
                  "valuation_by_country": [
                    {
                      "chile": 34053
                    }
                  ],
                  "impressions": 9279,
                  "valuation": 34053
                },
                "date_int": 1609200000000
              }
            ],
            "id": 341,
            "days_with_impressions": 1
          },
          {
            "domain": "duna.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 1483,
                  "count": 163,
                  "valuation_usd": 77.45437818974813,
                  "valuation_by_country": [
                    {
                      "chile": 56116
                    }
                  ],
                  "impressions": 6913,
                  "valuation": 56116
                },
                "date_int": 1609200000000
              }
            ],
            "id": 475,
            "days_with_impressions": 1
          },
          {
            "domain": "enlacejudio.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 432,
                  "count": 1,
                  "valuation_usd": 6.89851347552144,
                  "valuation_by_country": [
                    {
                      "chile": 4998
                    }
                  ],
                  "impressions": 6000,
                  "valuation": 4998
                },
                "date_int": 1609200000000
              }
            ],
            "id": 10423,
            "days_with_impressions": 1
          },
          {
            "domain": "lared.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 412,
                  "count": 1,
                  "valuation_usd": 37.5098043638997,
                  "valuation_by_country": [
                    {
                      "chile": 27176
                    }
                  ],
                  "impressions": 5757,
                  "valuation": 27176
                },
                "date_int": 1609200000000
              }
            ],
            "id": 722,
            "days_with_impressions": 1
          },
          {
            "domain": "aciprensa.com",
            "metrics_by_date": [
              {
                "date": "2020-12-30T00:00:00.000Z",
                "metrics": {
                  "impact": 433,
                  "count": 2,
                  "valuation_usd": 2.369897486488658,
                  "valuation_by_country": [
                    {
                      "chile": 1717
                    }
                  ],
                  "impressions": 2211,
                  "valuation": 1717
                },
                "date_int": 1609286400000
              }
            ],
            "id": 4839,
            "days_with_impressions": 1
          },
          {
            "domain": "aqua.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 290,
                  "count": 1,
                  "valuation_usd": 1.8191758224764423,
                  "valuation_by_country": [
                    {
                      "chile": 1318
                    }
                  ],
                  "impressions": 1484,
                  "valuation": 1318
                },
                "date_int": 1609200000000
              }
            ],
            "id": 498,
            "days_with_impressions": 1
          },
          {
            "domain": "facemama.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 72,
                  "count": 1,
                  "valuation_usd": 3.9171631139515504,
                  "valuation_by_country": [
                    {
                      "chile": 2838
                    }
                  ],
                  "impressions": 1000,
                  "valuation": 2838
                },
                "date_int": 1609200000000
              }
            ],
            "id": 522,
            "days_with_impressions": 1
          },
          {
            "domain": "minutoneuquen.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 186,
                  "count": 3,
                  "valuation_usd": 1.4120006573546287,
                  "valuation_by_country": [
                    {
                      "chile": 1023
                    }
                  ],
                  "impressions": 900,
                  "valuation": 1023
                },
                "date_int": 1609200000000
              }
            ],
            "id": 6403,
            "days_with_impressions": 1
          },
          {
            "domain": "sonarfm.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 160,
                  "count": 1,
                  "valuation_usd": 10.34777021328216,
                  "valuation_by_country": [
                    {
                      "chile": 7497
                    }
                  ],
                  "impressions": 818,
                  "valuation": 7497
                },
                "date_int": 1609200000000
              }
            ],
            "id": 508,
            "days_with_impressions": 1
          },
          {
            "domain": "elamaule.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 120,
                  "count": 2,
                  "valuation_usd": 2.5755554512450995,
                  "valuation_by_country": [
                    {
                      "chile": 1866
                    }
                  ],
                  "impressions": 600,
                  "valuation": 1866
                },
                "date_int": 1609200000000
              }
            ],
            "id": 486,
            "days_with_impressions": 1
          },
          {
            "domain": "popsugar.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 30,
                  "count": 1,
                  "valuation_usd": 0.4803286693640379,
                  "valuation_by_country": [
                    {
                      "chile": 348
                    }
                  ],
                  "impressions": 417,
                  "valuation": 348
                },
                "date_int": 1609200000000
              }
            ],
            "id": 887,
            "days_with_impressions": 1
          },
          {
            "domain": "realtor.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 74,
                  "count": 1,
                  "valuation_usd": 0.3988936363396751,
                  "valuation_by_country": [
                    {
                      "chile": 289
                    }
                  ],
                  "impressions": 375,
                  "valuation": 289
                },
                "date_int": 1609200000000
              }
            ],
            "id": 7104,
            "days_with_impressions": 1
          },
          {
            "domain": "noticialdia.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 46,
                  "count": 1,
                  "valuation_usd": 0.24568535387011134,
                  "valuation_by_country": [
                    {
                      "chile": 178
                    }
                  ],
                  "impressions": 231,
                  "valuation": 178
                },
                "date_int": 1609200000000
              }
            ],
            "id": 7895,
            "days_with_impressions": 1
          },
          {
            "domain": "elnortero.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 37,
                  "count": 1,
                  "valuation_usd": 0.7467178451894957,
                  "valuation_by_country": [
                    {
                      "chile": 541
                    }
                  ],
                  "impressions": 188,
                  "valuation": 541
                },
                "date_int": 1609200000000
              }
            ],
            "id": 481,
            "days_with_impressions": 1
          },
          {
            "domain": "hellomagazine.com",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 34,
                  "count": 1,
                  "valuation_usd": 0.18219363320704884,
                  "valuation_by_country": [
                    {
                      "chile": 132
                    }
                  ],
                  "impressions": 171,
                  "valuation": 132
                },
                "date_int": 1609200000000
              }
            ],
            "id": 874,
            "days_with_impressions": 1
          },
          {
            "domain": "paula.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 31,
                  "count": 1,
                  "valuation_usd": 0.6749445957442946,
                  "valuation_by_country": [
                    {
                      "chile": 489
                    }
                  ],
                  "impressions": 158,
                  "valuation": 489
                },
                "date_int": 1609200000000
              }
            ],
            "id": 467,
            "days_with_impressions": 1
          },
          {
            "domain": "diarioestrategia.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 7,
                  "count": 1,
                  "valuation_usd": 0.13526497010826355,
                  "valuation_by_country": [
                    {
                      "chile": 98
                    }
                  ],
                  "impressions": 75,
                  "valuation": 98
                },
                "date_int": 1609200000000
              }
            ],
            "id": 13236,
            "days_with_impressions": 1
          }
        ],
        "id": 8968,
        "name": "enel"
      }
    ]
  }
}
```
