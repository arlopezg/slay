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

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"}]}}'

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
    body: JSON.stringify({"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"}]}})
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
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-29T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":1,"name":"mercedes benz"}]}}';
$response = Requests::post('https://clientela.admetricks.com/brand-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{
  "meta": {
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-29T17:25:27.000Z"
    }
  },
  "data": {
    "industries": [
      {
        "metrics": {
          "impact": 108459,
          "count": 407,
          "valuation_usd": 2854.815503052798,
          "valuation_by_country": [
            {
              "chile": 2068325
            }
          ],
          "impressions": 831471,
          "valuation": 2068325
        },
        "id": 221,
        "name": "energía - energía domestica"
      }
    ],
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
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "metrics": {
              "impact": 40936,
              "count": 34,
              "valuation_usd": 1016.8930599231878,
              "valuation_by_country": [
                {
                  "chile": 736743
                }
              ],
              "impressions": 353745,
              "valuation": 736743
            },
            "date_int": 1609286400000
          }
        ],
        "id": 448,
        "days_with_impressions": 2
      }
    ],
    "ad_types": [
      {
        "metrics": {
          "impact": 108459,
          "count": 407,
          "valuation_usd": 2854.815503052798,
          "valuation_by_country": [
            {
              "chile": 2068325
            }
          ],
          "impressions": 831471,
          "valuation": 2068325
        },
        "id": 1,
        "name": "display"
      }
    ],
    "countries": [
      {
        "metrics": {
          "impact": 108459,
          "count": 407,
          "valuation_usd": 2854.815503052798,
          "valuation_by_country": [
            {
              "chile": 2068325
            }
          ],
          "impressions": 831471,
          "valuation": 2068325
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
          "impact": 102648,
          "count": 346,
          "valuation_usd": 2581.4146328584625,
          "valuation_by_country": [
            {
              "chile": 1870245
            }
          ],
          "impressions": 771635,
          "valuation": 1870245
        },
        "id": "direct",
        "name": "direct"
      },
      {
        "metrics": {
          "impact": 4874,
          "count": 54,
          "valuation_usd": 263.36503756518016,
          "valuation_by_country": [
            {
              "chile": 190809
            }
          ],
          "impressions": 51312,
          "valuation": 190809
        },
        "id": "unknown",
        "name": "unknown"
      },
      {
        "metrics": {
          "impact": 937,
          "count": 7,
          "valuation_usd": 10.03583262915494,
          "valuation_by_country": [
            {
              "chile": 7271
            }
          ],
          "impressions": 8524,
          "valuation": 7271
        },
        "id": "google",
        "name": "google"
      }
    ],
    "devices": [
      {
        "metrics": {
          "impact": 80953,
          "count": 343,
          "valuation_usd": 1741.3087481023842,
          "valuation_by_country": [
            {
              "chile": 1261585
            }
          ],
          "impressions": 430816,
          "valuation": 1261585
        },
        "id": 2,
        "name": "mobile"
      },
      {
        "metrics": {
          "impact": 27506,
          "count": 64,
          "valuation_usd": 1113.5067549504136,
          "valuation_by_country": [
            {
              "chile": 806740
            }
          ],
          "impressions": 400655,
          "valuation": 806740
        },
        "id": 1,
        "name": "desktop"
      }
    ],
    "date_range": {
      "start": "2020-12-29T00:25:40.000Z",
      "end": "2020-12-30T17:25:27.000Z"
    },
    "campaigns": [
      {
        "landing_page": "enel.cl/es/conoce-enel/prensa/news/d202011-hito-historico-para-enel-lider-del-dow-jones-sustainability-world-index-de-2020.html",
        "description": "feliz | fotografía | mañana | mundo | paisaje | pie foto | prenda pieza | ropa formal | vestido | viento",
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "title": "Hito histórico para Enel: líder del Dow Jones Sustainability World Index de 2020",
        "date_range": {
          "start": "2020-12-29T00:25:40.000Z",
          "end": "2020-12-30T17:25:27.000Z"
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
              "impact": 46938,
              "count": 353,
              "valuation_usd": 1527.2629749444334,
              "valuation_by_country": [
                {
                  "chile": 1106508
                }
              ],
              "impressions": 372396,
              "valuation": 1106508
            },
            "id": 1,
            "name": "chile"
          }
        ],
        "devices": [
          {
            "metrics": {
              "impact": 35900,
              "count": 294,
              "valuation_usd": 1068.118456205106,
              "valuation_by_country": [
                {
                  "chile": 773856
                }
              ],
              "impressions": 200355,
              "valuation": 773856
            },
            "id": 2,
            "name": "mobile"
          },
          {
            "metrics": {
              "impact": 11038,
              "count": 59,
              "valuation_usd": 459.1445187393274,
              "valuation_by_country": [
                {
                  "chile": 332652
                }
              ],
              "impressions": 172041,
              "valuation": 332652
            },
            "id": 1,
            "name": "desktop"
          }
        ],
        "metrics": {
          "impact": 46938,
          "count": 353,
          "valuation_usd": 1527.2629749444334,
          "valuation_by_country": [
            {
              "chile": 1106508
            }
          ],
          "impressions": 372396,
          "valuation": 1106508
        },
        "websites": [
          {
            "metrics": {
              "impact": 3288,
              "count": 238,
              "valuation_usd": 243.23264109580128,
              "valuation_by_country": [
                {
                  "chile": 176223
                }
              ],
              "impressions": 20609,
              "valuation": 176223
            },
            "domain": "duna.cl",
            "id": 475
          },
          {
            "metrics": {
              "impact": 8743,
              "count": 50,
              "valuation_usd": 690.0984131608112,
              "valuation_by_country": [
                {
                  "chile": 499979
                }
              ],
              "impressions": 62311,
              "valuation": 499979
            },
            "domain": "radioagricultura.cl",
            "id": 505
          },
          {
            "metrics": {
              "impact": 9007,
              "count": 34,
              "valuation_usd": 296.5863902747291,
              "valuation_by_country": [
                {
                  "chile": 214878
                }
              ],
              "impressions": 144020,
              "valuation": 214878
            },
            "domain": "eldinamo.cl",
            "id": 495
          },
          {
            "metrics": {
              "impact": 727,
              "count": 3,
              "valuation_usd": 9.156610323451227,
              "valuation_by_country": [
                {
                  "chile": 6634
                }
              ],
              "impressions": 7141,
              "valuation": 6634
            },
            "domain": "aqua.cl",
            "id": 498
          },
          {
            "metrics": {
              "impact": 3054,
              "count": 2,
              "valuation_usd": 41.29584327213405,
              "valuation_by_country": [
                {
                  "chile": 29919
                }
              ],
              "impressions": 15597,
              "valuation": 29919
            },
            "domain": "biobiochile.cl",
            "id": 448
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
              "impact": 168,
              "count": 2,
              "valuation_usd": 0.906827401644175,
              "valuation_by_country": [
                {
                  "chile": 657
                }
              ],
              "impressions": 855,
              "valuation": 657
            },
            "domain": "mch.cl",
            "id": 496
          },
          {
            "metrics": {
              "impact": 453,
              "count": 2,
              "valuation_usd": 38.75479419081453,
              "valuation_by_country": [
                {
                  "chile": 28078
                }
              ],
              "impressions": 5964,
              "valuation": 28078
            },
            "domain": "lared.cl",
            "id": 722
          },
          {
            "metrics": {
              "impact": 61,
              "count": 2,
              "valuation_usd": 0.9744598866983067,
              "valuation_by_country": [
                {
                  "chile": 706
                }
              ],
              "impressions": 846,
              "valuation": 706
            },
            "domain": "popsugar.com",
            "id": 887
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
              "impact": 486,
              "count": 2,
              "valuation_usd": 7.191127492490337,
              "valuation_by_country": [
                {
                  "chile": 5210
                }
              ],
              "impressions": 6274,
              "valuation": 5210
            },
            "domain": "enlacejudio.com",
            "id": 10423
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
              "impact": 10,
              "count": 1,
              "valuation_usd": 0.18495414280109504,
              "valuation_by_country": [
                {
                  "chile": 134
                }
              ],
              "impressions": 50,
              "valuation": 134
            },
            "domain": "elmorrocotudo.cl",
            "id": 453
          },
          {
            "metrics": {
              "impact": 58,
              "count": 1,
              "valuation_usd": 1.0103465114209074,
              "valuation_by_country": [
                {
                  "chile": 732
                }
              ],
              "impressions": 296,
              "valuation": 732
            },
            "domain": "df.cl",
            "id": 464
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
              "impact": 108,
              "count": 1,
              "valuation_usd": 9.501674022707002,
              "valuation_by_country": [
                {
                  "chile": 6884
                }
              ],
              "impressions": 1500,
              "valuation": 6884
            },
            "domain": "elnaveghable.cl",
            "id": 489
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
              "impact": 219,
              "count": 1,
              "valuation_usd": 1.1870191254398637,
              "valuation_by_country": [
                {
                  "chile": 860
                }
              ],
              "impressions": 1119,
              "valuation": 860
            },
            "domain": "as.com",
            "id": 851
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
          }
        ],
        "sold_by": [
          {
            "metrics": {
              "impact": 41313,
              "count": 295,
              "valuation_usd": 1255.274105407453,
              "valuation_by_country": [
                {
                  "chile": 909451
                }
              ],
              "impressions": 313460,
              "valuation": 909451
            },
            "id": "direct",
            "name": "direct"
          },
          {
            "metrics": {
              "impact": 4874,
              "count": 54,
              "valuation_usd": 263.36503756518016,
              "valuation_by_country": [
                {
                  "chile": 190809
                }
              ],
              "impressions": 51312,
              "valuation": 190809
            },
            "id": "unknown",
            "name": "unknown"
          },
          {
            "metrics": {
              "impact": 751,
              "count": 4,
              "valuation_usd": 8.623831971800312,
              "valuation_by_country": [
                {
                  "chile": 6248
                }
              ],
              "impressions": 7624,
              "valuation": 6248
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
              "impact": 46938,
              "count": 353,
              "valuation_usd": 1527.2629749444334,
              "valuation_by_country": [
                {
                  "chile": 1106508
                }
              ],
              "impressions": 372396,
              "valuation": 1106508
            },
            "id": 1,
            "name": "display"
          }
        ]
      }
    ],
    "campaigns_with_websites_by_date": [
      {
        "landing_page": "7418419",
        "description": null,
        "title": "Plan de Invierno - enel.cl",
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "metrics": {
          "impact": 61328,
          "count": 50,
          "valuation_usd": 1326.0052624809016,
          "valuation_by_country": [
            {
              "chile": 960696
            }
          ],
          "impressions": 458100,
          "valuation": 960696
        },
        "websites_by_date": [
          {
            "domain": "biobiochile.cl",
            "metrics_by_date": [
              {
                "date": "2020-12-29T00:00:00.000Z",
                "metrics": {
                  "impact": 22150,
                  "count": 17,
                  "valuation_usd": 332.88019016245147,
                  "valuation_by_country": [
                    {
                      "chile": 241173
                    }
                  ],
                  "impressions": 113331,
                  "valuation": 241173
                },
                "date_int": 1609200000000
              },
              {
                "date": "2020-12-30T00:00:00.000Z",
                "metrics": {
                  "impact": 39178,
                  "count": 33,
                  "valuation_usd": 993.1250723184501,
                  "valuation_by_country": [
                    {
                      "chile": 719523
                    }
                  ],
                  "impressions": 344769,
                  "valuation": 719523
                },
                "date_int": 1609286400000
              }
            ],
            "id": 448,
            "days_with_impressions": 2
          }
        ],
        "id": 7418419
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
              "impact": 10707,
              "count": 109,
              "valuation_usd": 401.81839625456706,
              "valuation_by_country": [
                {
                  "chile": 291119
                }
              ],
              "impressions": 124323,
              "valuation": 291119
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
          "impact": 64382,
          "count": 52,
          "valuation_usd": 1367.3011057530355,
          "valuation_by_country": [
            {
              "chile": 990615
            }
          ],
          "impressions": 473697,
          "valuation": 990615
        },
        "domain": "biobiochile.cl",
        "id": 448
      }
    ],
    "brands": [
      {
        "metrics": {
          "impact": 108459,
          "count": 407,
          "valuation_usd": 2854.815503052798,
          "valuation_by_country": [
            {
              "chile": 2068325
            }
          ],
          "impressions": 831471,
          "valuation": 2068325
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
            "impact": 49885,
            "valuation_usd": 1394.943468573017,
            "impressions": 469092,
            "valuation": 1010642
          },
          "date_int": 1609286400000
        }
      ],
      "ad_types": [
        {
          "metrics": {
            "impact": 108459,
            "valuation_usd": 2854.815503052798,
            "impressions": 831471,
            "valuation": 2068325
          },
          "id": 1,
          "name": "display"
        }
      ],
      "countries": [
        {
          "metrics": {
            "impact": 108459,
            "valuation_usd": 2854.815503052798,
            "impressions": 831471,
            "valuation": 2068325
          },
          "id": 1,
          "name": "chile"
        }
      ],
      "total_impressions": 831471,
      "total_impact": 108459,
      "devices": [
        {
          "metrics": {
            "impact": 80953,
            "valuation_usd": 1741.3087481023842,
            "impressions": 430816,
            "valuation": 1261585
          },
          "id": 2,
          "name": "mobile"
        },
        {
          "metrics": {
            "impact": 27506,
            "valuation_usd": 1113.5067549504136,
            "impressions": 400655,
            "valuation": 806740
          },
          "id": 1,
          "name": "desktop"
        }
      ],
      "total_valuation_usd": 2854.815503052798,
      "position": {
        "first_scroll": 0.14903002923199574,
        "second_scroll": 0.12375764018070688,
        "third_or_more_scroll": 0.7199176189210736
      },
      "total_valuation": 2068325
    }
  }
}
```
