> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/campaign-report/' \
-H 'accept: application/json, text/plain, */*' \
-H 'authorization: Token YOUR_TOKEN' \
-H 'content-type: application/json;charset=UTF-8' \
--data-binary '{
    "order_by": "valuation",
    "search_term": "a",
    "campaigns": {"include": [{"id": 4394864}]},
    "ad_types": {"include": [{"id": 1},{"id": 2},{"id": 3}]},
    "countries": {"include": [{"id": 4}]},
    "devices": {"include": [{"id": 1},{"id": 2}]},
    "date_range": {"start": "2020-12-28T00:00:00.000","end": "2020-12-30T23:59:59.999","group_by": "day"}
}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{ "order_by": "valuation", "search_term": "a", "campaigns": {"include": [{"id": 4394864}]}, "ad_types": {"include": [{"id": 1},{"id": 2},{"id": 3}]}, "countries": {"include": [{"id": 4}]}, "devices": {"include": [{"id": 1},{"id": 2}]}, "date_range": {"start": "2020-12-28T00:00:00.000","end": "2020-12-30T23:59:59.999","group_by": "day"} }'

response = requests.post('https://clientela.admetricks.com/campaign-report/', headers=headers, data=data)
```

```javascript
var fetch = require("node-fetch");

fetch("https://clientela.admetricks.com/campaign-report/", {
  method: "POST",
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: "Token YOUR_TOKEN",
    "content-type": "application/json;charset=UTF-8",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    order_by: "valuation",
    search_term: "a",
    campaigns: { include: [{ id: 4394864 }] },
    ad_types: { include: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    countries: { include: [{ id: 4 }] },
    devices: { include: [{ id: 1 }, { id: 2 }] },
    date_range: {
      start: "2020-12-28T00:00:00.000",
      end: "2020-12-30T23:59:59.999",
      group_by: "day",
    },
  }),
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
$data = '{ "order_by": "valuation", "search_term": "a", "campaigns": {"include": [{"id": 4394864}]}, "ad_types": {"include": [{"id": 1},{"id": 2},{"id": 3}]}, "countries": {"include": [{"id": 4}]}, "devices": {"include": [{"id": 1},{"id": 2}]}, "date_range": {"start": "2020-12-28T00:00:00.000","end": "2020-12-30T23:59:59.999","group_by": "day"} }';
$response = Requests::post('https://clientela.admetricks.com/campaign-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{
  "meta": {
    "date_range": {
      "start": "2020-12-26T15:11:09.000Z",
      "end": "2020-12-30T02:53:20.000Z"
    }
  },
  "data": {
    "industries": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": 196,
        "name": "cultura - productos editoriales impresos y online"
      }
    ],
    "websites_by_date": [
      {
        "domain": "dicio.com.br",
        "metrics_by_date": [
          {
            "date": "2020-12-26T00:00:00.000Z",
            "metrics": {
              "impact": 10107,
              "count": 3,
              "valuation_usd": 21.812546040735885,
              "valuation_by_country": [
                {
                  "brazil": 114
                }
              ],
              "impressions": 21261,
              "valuation": 114
            },
            "date_int": 1608940800000
          },
          {
            "date": "2020-12-27T00:00:00.000Z",
            "metrics": {
              "impact": 6134,
              "count": 2,
              "valuation_usd": 13.393668621504492,
              "valuation_by_country": [
                {
                  "brazil": 70
                }
              ],
              "impressions": 12904,
              "valuation": 70
            },
            "date_int": 1609027200000
          },
          {
            "date": "2020-12-28T00:00:00.000Z",
            "metrics": {
              "impact": 4816,
              "count": 1,
              "valuation_usd": 10.332258650874893,
              "valuation_by_country": [
                {
                  "brazil": 54
                }
              ],
              "impressions": 10131,
              "valuation": 54
            },
            "date_int": 1609113600000
          }
        ],
        "id": 1027,
        "days_with_impressions": 3
      }
    ],
    "ad_files": [
      {
        "date_range": {
          "start": "2020-12-26T15:13:30.000Z",
          "end": "2020-12-27T15:13:30.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "domain": "dicio.com.br",
            "id": 1027
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_41fff83ee7071ac99f644646b433f316.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 390
        },
        "metrics": {
          "impact": 6436,
          "count": 2,
          "valuation_usd": 13.967682990997542,
          "valuation_by_country": [
            {
              "brazil": 73
            }
          ],
          "impressions": 13539,
          "valuation": 73
        },
        "devices": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 193807588
      },
      {
        "date_range": {
          "start": "2020-12-26T15:11:09.000Z",
          "end": "2020-12-27T15:11:09.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "domain": "dicio.com.br",
            "id": 1027
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_fbbc41e7f44675ba11b9de49db3fbf39.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 390
        },
        "metrics": {
          "impact": 6436,
          "count": 2,
          "valuation_usd": 13.967682990997542,
          "valuation_by_country": [
            {
              "brazil": 73
            }
          ],
          "impressions": 13539,
          "valuation": 73
        },
        "devices": [
          {
            "metrics": {
              "impact": 6436,
              "count": 2,
              "valuation_usd": 13.967682990997542,
              "valuation_by_country": [
                {
                  "brazil": 73
                }
              ],
              "impressions": 13539,
              "valuation": 73
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 193812501
      },
      {
        "date_range": {
          "start": "2020-12-28T15:20:33.000Z",
          "end": "2020-12-28T15:20:33.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 4816,
              "count": 1,
              "valuation_usd": 10.332258650874893,
              "valuation_by_country": [
                {
                  "brazil": 54
                }
              ],
              "impressions": 10131,
              "valuation": 54
            },
            "domain": "dicio.com.br",
            "id": 1027
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 4816,
              "count": 1,
              "valuation_usd": 10.332258650874893,
              "valuation_by_country": [
                {
                  "brazil": 54
                }
              ],
              "impressions": 10131,
              "valuation": 54
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_900a8fa54e8a37380f822c6049164c87.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 4816,
              "count": 1,
              "valuation_usd": 10.332258650874893,
              "valuation_by_country": [
                {
                  "brazil": 54
                }
              ],
              "impressions": 10131,
              "valuation": 54
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 390
        },
        "metrics": {
          "impact": 4816,
          "count": 1,
          "valuation_usd": 10.332258650874893,
          "valuation_by_country": [
            {
              "brazil": 54
            }
          ],
          "impressions": 10131,
          "valuation": 54
        },
        "devices": [
          {
            "metrics": {
              "impact": 4816,
              "count": 1,
              "valuation_usd": 10.332258650874893,
              "valuation_by_country": [
                {
                  "brazil": 54
                }
              ],
              "impressions": 10131,
              "valuation": 54
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 195305111
      },
      {
        "date_range": {
          "start": "2020-12-26T15:15:56.000Z",
          "end": "2020-12-26T15:15:56.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 3369,
              "count": 1,
              "valuation_usd": 7.270848680245296,
              "valuation_by_country": [
                {
                  "brazil": 38
                }
              ],
              "impressions": 7087,
              "valuation": 38
            },
            "domain": "dicio.com.br",
            "id": 1027
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 3369,
              "count": 1,
              "valuation_usd": 7.270848680245296,
              "valuation_by_country": [
                {
                  "brazil": 38
                }
              ],
              "impressions": 7087,
              "valuation": 38
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_84df3a75e7a25357cf2c2a9a99199b7c.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 3369,
              "count": 1,
              "valuation_usd": 7.270848680245296,
              "valuation_by_country": [
                {
                  "brazil": 38
                }
              ],
              "impressions": 7087,
              "valuation": 38
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 390
        },
        "metrics": {
          "impact": 3369,
          "count": 1,
          "valuation_usd": 7.270848680245296,
          "valuation_by_country": [
            {
              "brazil": 38
            }
          ],
          "impressions": 7087,
          "valuation": 38
        },
        "devices": [
          {
            "metrics": {
              "impact": 3369,
              "count": 1,
              "valuation_usd": 7.270848680245296,
              "valuation_by_country": [
                {
                  "brazil": 38
                }
              ],
              "impressions": 7087,
              "valuation": 38
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 193807442
      },
      {
        "date_range": {
          "start": "2020-12-28T16:43:48.000Z",
          "end": "2020-12-28T16:43:48.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 48,
              "count": 1,
              "valuation_usd": 0.7653524926573995,
              "valuation_by_country": [
                {
                  "brazil": 4
                }
              ],
              "impressions": 576,
              "valuation": 4
            },
            "domain": "jornalopcao.com.br",
            "id": 8044
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 48,
              "count": 1,
              "valuation_usd": 0.7653524926573995,
              "valuation_by_country": [
                {
                  "brazil": 4
                }
              ],
              "impressions": 576,
              "valuation": 4
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_bc5bee7ad5154c4bccda203f7e439def.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 48,
              "count": 1,
              "valuation_usd": 0.7653524926573995,
              "valuation_by_country": [
                {
                  "brazil": 4
                }
              ],
              "impressions": 576,
              "valuation": 4
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 320,
          "height": 100
        },
        "metrics": {
          "impact": 48,
          "count": 1,
          "valuation_usd": 0.7653524926573995,
          "valuation_by_country": [
            {
              "brazil": 4
            }
          ],
          "impressions": 576,
          "valuation": 4
        },
        "devices": [
          {
            "metrics": {
              "impact": 48,
              "count": 1,
              "valuation_usd": 0.7653524926573995,
              "valuation_by_country": [
                {
                  "brazil": 4
                }
              ],
              "impressions": 576,
              "valuation": 4
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 195354200
      },
      {
        "date_range": {
          "start": "2020-12-28T11:33:16.000Z",
          "end": "2020-12-28T11:33:16.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 8,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 16,
              "valuation": 1
            },
            "domain": "gazetaweb.com.br",
            "id": 7964
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 8,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 16,
              "valuation": 1
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_e10340542517a6f94f9ff5627d0ae572.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 8,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 16,
              "valuation": 1
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 390
        },
        "metrics": {
          "impact": 8,
          "count": 1,
          "valuation_usd": 0.19133812316434987,
          "valuation_by_country": [
            {
              "brazil": 1
            }
          ],
          "impressions": 16,
          "valuation": 1
        },
        "devices": [
          {
            "metrics": {
              "impact": 8,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 16,
              "valuation": 1
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 195194494
      },
      {
        "date_range": {
          "start": "2020-12-30T02:53:20.000Z",
          "end": "2020-12-30T02:53:20.000Z"
        },
        "websites": [
          {
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "domain": "ofarroupilha.com.br",
            "id": 8004
          }
        ],
        "ad_types": [
          {
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "id": 1,
            "name": "display"
          }
        ],
        "url": "https://ads.admetricks.com/banner_273f1508eb9a217437e5303524ebd3f5.jpg",
        "sold_by": [
          {
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "id": "google",
            "name": "google"
          }
        ],
        "ad_measurements": {
          "width": 468,
          "height": 120
        },
        "metrics": {
          "impact": 13,
          "count": 1,
          "valuation_usd": 0.19133812316434987,
          "valuation_by_country": [
            {
              "brazil": 1
            }
          ],
          "impressions": 84,
          "valuation": 1
        },
        "devices": [
          {
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "id": 196333808
      }
    ],
    "ad_types": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": 1,
        "name": "display"
      }
    ],
    "countries": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": 4,
        "name": "brazil"
      }
    ],
    "website_categories": [
      {
        "metrics": {
          "impact": 6134,
          "count": 2,
          "valuation_usd": 13.393668621504492,
          "valuation_by_country": [
            {
              "brazil": 70
            }
          ],
          "impressions": 12904,
          "valuation": 70
        },
        "id": "unknown",
        "name": "unknown"
      }
    ],
    "sold_by": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": "google",
        "name": "google"
      }
    ],
    "devices": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": 2,
        "name": "mobile"
      }
    ],
    "date_range": {
      "start": "2020-12-26T15:11:09.000Z",
      "end": "2020-12-30T02:53:20.000Z"
    },
    "campaigns": [
      {
        "landing_page": "loja.grupoa.com.br",
        "description": null,
        "title": "Compre Livros Acadêmicos, Universitários, Profissionais e Técnicos",
        "date_range": {
          "start": "2020-12-26T15:11:09.000Z",
          "end": "2020-12-30T02:53:20.000Z"
        },
        "industry": {
          "id": 196,
          "name": "cultura - productos editoriales impresos y online"
        },
        "brand": {
          "id": 146829,
          "name": "grupo a"
        },
        "countries": [
          {
            "metrics": {
              "impact": 21126,
              "count": 9,
              "valuation_usd": 46.68650205210137,
              "valuation_by_country": [
                {
                  "brazil": 244
                }
              ],
              "impressions": 44972,
              "valuation": 244
            },
            "id": 4,
            "name": "brazil"
          }
        ],
        "devices": [
          {
            "metrics": {
              "impact": 21126,
              "count": 9,
              "valuation_usd": 46.68650205210137,
              "valuation_by_country": [
                {
                  "brazil": 244
                }
              ],
              "impressions": 44972,
              "valuation": 244
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "websites": [
          {
            "metrics": {
              "impact": 21057,
              "count": 6,
              "valuation_usd": 45.53847331311527,
              "valuation_by_country": [
                {
                  "brazil": 238
                }
              ],
              "impressions": 44296,
              "valuation": 238
            },
            "domain": "dicio.com.br",
            "id": 1027
          },
          {
            "metrics": {
              "impact": 8,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 16,
              "valuation": 1
            },
            "domain": "gazetaweb.com.br",
            "id": 7964
          },
          {
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "domain": "ofarroupilha.com.br",
            "id": 8004
          },
          {
            "metrics": {
              "impact": 48,
              "count": 1,
              "valuation_usd": 0.7653524926573995,
              "valuation_by_country": [
                {
                  "brazil": 4
                }
              ],
              "impressions": 576,
              "valuation": 4
            },
            "domain": "jornalopcao.com.br",
            "id": 8044
          }
        ],
        "sold_by": [
          {
            "metrics": {
              "impact": 21126,
              "count": 9,
              "valuation_usd": 46.68650205210137,
              "valuation_by_country": [
                {
                  "brazil": 244
                }
              ],
              "impressions": 44972,
              "valuation": 244
            },
            "id": "google",
            "name": "google"
          }
        ],
        "preview": {
          "ad_measurements": {
            "width": 468,
            "height": 390
          },
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_41fff83ee7071ac99f644646b433f316.jpg"
          }
        },
        "id": 4394864,
        "ad_types": [
          {
            "metrics": {
              "impact": 21126,
              "count": 9,
              "valuation_usd": 46.68650205210137,
              "valuation_by_country": [
                {
                  "brazil": 244
                }
              ],
              "impressions": 44972,
              "valuation": 244
            },
            "id": 1,
            "name": "display"
          }
        ]
      }
    ],
    "campaigns_by_date": [
      {
        "metrics_by_date": [
          {
            "date": "2020-12-26T00:00:00.000Z",
            "metrics": {
              "impact": 10107,
              "count": 3,
              "valuation_usd": 21.812546040735885,
              "valuation_by_country": [
                {
                  "brazil": 114
                }
              ],
              "impressions": 21261,
              "valuation": 114
            },
            "date_int": 1608940800000
          },
          {
            "date": "2020-12-27T00:00:00.000Z",
            "metrics": {
              "impact": 6134,
              "count": 2,
              "valuation_usd": 13.393668621504492,
              "valuation_by_country": [
                {
                  "brazil": 70
                }
              ],
              "impressions": 12904,
              "valuation": 70
            },
            "date_int": 1609027200000
          },
          {
            "date": "2020-12-28T00:00:00.000Z",
            "metrics": {
              "impact": 4872,
              "count": 3,
              "valuation_usd": 11.288949266696642,
              "valuation_by_country": [
                {
                  "brazil": 59
                }
              ],
              "impressions": 10723,
              "valuation": 59
            },
            "date_int": 1609113600000
          },
          {
            "date": "2020-12-29T00:00:00.000Z",
            "metrics": {
              "impact": 0,
              "count": 0,
              "valuation_usd": 0,
              "valuation_by_country": [],
              "impressions": 0,
              "valuation": 0
            },
            "date_int": 1609200000000
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "metrics": {
              "impact": 13,
              "count": 1,
              "valuation_usd": 0.19133812316434987,
              "valuation_by_country": [
                {
                  "brazil": 1
                }
              ],
              "impressions": 84,
              "valuation": 1
            },
            "date_int": 1609286400000
          }
        ],
        "id": 4394864,
        "name": "Compre Livros Acadêmicos, Universitários, Profissionais e Técnicos"
      }
    ],
    "websites": [
      {
        "metrics": {
          "impact": 21057,
          "count": 6,
          "valuation_usd": 45.53847331311527,
          "valuation_by_country": [
            {
              "brazil": 238
            }
          ],
          "impressions": 44296,
          "valuation": 238
        },
        "domain": "dicio.com.br",
        "id": 1027
      }
    ],
    "brands": [
      {
        "metrics": {
          "impact": 21126,
          "count": 9,
          "valuation_usd": 46.68650205210137,
          "valuation_by_country": [
            {
              "brazil": 244
            }
          ],
          "impressions": 44972,
          "valuation": 244
        },
        "id": 146829,
        "name": "grupo a"
      }
    ],
    "summary": {
      "metrics_by_date": [
        {
          "date": "2020-12-26T00:00:00.000Z",
          "metrics": {
            "impact": 10107,
            "valuation_usd": 21.812546040735885,
            "impressions": 21261,
            "valuation": 114
          },
          "date_int": 1608940800000
        },
        {
          "date": "2020-12-27T00:00:00.000Z",
          "metrics": {
            "impact": 6134,
            "valuation_usd": 13.393668621504492,
            "impressions": 12904,
            "valuation": 70
          },
          "date_int": 1609027200000
        },
        {
          "date": "2020-12-28T00:00:00.000Z",
          "metrics": {
            "impact": 4872,
            "valuation_usd": 11.288949266696642,
            "impressions": 10723,
            "valuation": 59
          },
          "date_int": 1609113600000
        },
        {
          "date": "2020-12-29T00:00:00.000Z",
          "metrics": {
            "impact": 0,
            "valuation_usd": 0,
            "impressions": 0,
            "valuation": 0
          },
          "date_int": 1609200000000
        },
        {
          "date": "2020-12-30T00:00:00.000Z",
          "metrics": {
            "impact": 13,
            "valuation_usd": 0.19133812316434987,
            "impressions": 84,
            "valuation": 1
          },
          "date_int": 1609286400000
        }
      ],
      "ad_types": [
        {
          "metrics": {
            "impact": 21126,
            "valuation_usd": 46.68650205210137,
            "impressions": 44972,
            "valuation": 244
          },
          "id": 1,
          "name": "display"
        }
      ],
      "countries": [
        {
          "metrics": {
            "impact": 21126,
            "valuation_usd": 46.68650205210137,
            "impressions": 44972,
            "valuation": 244
          },
          "id": 4,
          "name": "brazil"
        }
      ],
      "total_impressions": 44972,
      "total_impact": 21126,
      "devices": [
        {
          "metrics": {
            "impact": 21126,
            "valuation_usd": 46.68650205210137,
            "impressions": 44972,
            "valuation": 244
          },
          "id": 2,
          "name": "mobile"
        }
      ],
      "total_valuation_usd": 46.68650205210137,
      "position": {
        "first_scroll": 0.16666666666666666,
        "second_scroll": 0.0,
        "third_or_more_scroll": 0.8333333333333334
      },
      "total_valuation": 244
    }
  }
}
```
