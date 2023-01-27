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
  "data": {
    "countries": [
      {
        "id": 4,
        "name": "brazil",
        "metrics": {
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
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
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
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
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
            }
          ]
        }
      }
    ],
    "brands": [
      {
        "id": 146829,
        "name": "grupo a",
        "metrics": {
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
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
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
            }
          ]
        }
      }
    ],
    "industries": [
      {
        "id": 196,
        "name": "cultura - productos editoriales impresos y online",
        "metrics": {
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
            }
          ]
        }
      }
    ],
    "website_categories": [],
    "campaigns": [
      {
        "id": 4394864,
        "title": "Compre Livros Acadêmicos, Universitários, Profissionais e Técnicos",
        "landing_page": "loja.grupoa.com.br",
        "description": null,
        "metrics": {
          "count": 4,
          "impact": 4885,
          "impressions": 10807,
          "valuation": 126.0,
          "valuation_usd": 24.194,
          "valuation_by_country": [
            {
              "brazil": 126.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-28T11:33:16.000Z",
          "end": "2020-12-30T02:53:20.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_273f1508eb9a217437e5303524ebd3f5.jpg"
          },
          "ad_measurements": {
            "height": 120,
            "width": 468
          }
        },
        "brand": {
          "id": 146829,
          "name": "grupo a"
        },
        "industry": {
          "id": 196,
          "name": "cultura - productos editoriales impresos y online"
        },
        "countries": [
          {
            "id": 4,
            "name": "brazil",
            "metrics": {
              "impact": 4885,
              "impressions": 10807,
              "valuation": 126.0,
              "valuation_usd": 24.194,
              "valuation_by_country": [
                {
                  "brazil": 126.0
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
              "impact": 4885,
              "impressions": 10807,
              "valuation": 126.0,
              "valuation_usd": 24.194,
              "valuation_by_country": [
                {
                  "brazil": 126.0
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
              "impact": 4885,
              "impressions": 10807,
              "valuation": 126.0,
              "valuation_usd": 24.194,
              "valuation_by_country": [
                {
                  "brazil": 126.0
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
              "impact": 4885,
              "impressions": 10807,
              "valuation": 126.0,
              "valuation_usd": 24.194,
              "valuation_by_country": [
                {
                  "brazil": 126.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 1027,
            "domain": "dicio.com.br",
            "metrics": {
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
                }
              ]
            }
          },
          {
            "id": 7964,
            "domain": "gazetaweb.com.br",
            "metrics": {
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
                }
              ]
            }
          },
          {
            "id": 8004,
            "domain": "ofarroupilha.com.br",
            "metrics": {
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
                }
              ]
            }
          },
          {
            "id": 8044,
            "domain": "jornalopcao.com.br",
            "metrics": {
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites": [
      {
        "id": 1027,
        "domain": "dicio.com.br",
        "category": "1027",
        "metrics": {
          "count": 1,
          "impact": 4816,
          "impressions": 10131,
          "valuation": 110.0,
          "valuation_usd": 21.1218,
          "valuation_by_country": [
            {
              "brazil": 110.0
            }
          ]
        }
      },
      {
        "id": 8044,
        "domain": "jornalopcao.com.br",
        "category": "8044",
        "metrics": {
          "count": 1,
          "impact": 48,
          "impressions": 576,
          "valuation": 10.0,
          "valuation_usd": 1.9202,
          "valuation_by_country": [
            {
              "brazil": 10.0
            }
          ]
        }
      },
      {
        "id": 8004,
        "domain": "ofarroupilha.com.br",
        "category": "8004",
        "metrics": {
          "count": 1,
          "impact": 13,
          "impressions": 84,
          "valuation": 4.0,
          "valuation_usd": 0.7681,
          "valuation_by_country": [
            {
              "brazil": 4.0
            }
          ]
        }
      },
      {
        "id": 7964,
        "domain": "gazetaweb.com.br",
        "category": "7964",
        "metrics": {
          "count": 1,
          "impact": 8,
          "impressions": 16,
          "valuation": 2.0,
          "valuation_usd": 0.384,
          "valuation_by_country": [
            {
              "brazil": 2.0
            }
          ]
        }
      }
    ],
    "websites_by_date": [
      {
        "id": 1027,
        "domain": "dicio.com.br",
        "metrics_by_date": [
          {
            "date": "2020-12-28T00:00:00.000Z",
            "date_int": 1609113600000,
            "metrics": {
              "count": 1,
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
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
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 8044,
        "domain": "jornalopcao.com.br",
        "metrics_by_date": [
          {
            "date": "2020-12-28T00:00:00.000Z",
            "date_int": 1609113600000,
            "metrics": {
              "count": 1,
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
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
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 8004,
        "domain": "ofarroupilha.com.br",
        "metrics_by_date": [
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
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
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7964,
        "domain": "gazetaweb.com.br",
        "metrics_by_date": [
          {
            "date": "2020-12-28T00:00:00.000Z",
            "date_int": 1609113600000,
            "metrics": {
              "count": 1,
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
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
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
                }
              ]
            }
          }
        ]
      }
    ],
    "date_range": {
      "start": "2020-12-28T11:33:16.000Z",
      "end": "2020-12-30T02:53:20.000Z"
    },
    "campaigns_by_date": [
      {
        "id": 4394864,
        "name": "Compre Livros Acadêmicos, Universitários, Profissionais e Técnicos",
        "metrics_by_date": [
          {
            "date": "2020-12-28T00:00:00.000Z",
            "date_int": 1609113600000,
            "metrics": {
              "count": 3,
              "impact": 4872,
              "impressions": 10723,
              "valuation": 122.0,
              "valuation_usd": 23.426,
              "valuation_by_country": [
                {
                  "brazil": 122.0
                }
              ]
            }
          },
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 0,
              "impact": 0,
              "impressions": 0,
              "valuation": 0.0,
              "valuation_usd": 0,
              "valuation_by_country": []
            }
          },
          {
            "date": "2020-12-30T00:00:00.000Z",
            "date_int": 1609286400000,
            "metrics": {
              "count": 1,
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
                }
              ]
            }
          }
        ]
      }
    ],
    "ad_files": [
      {
        "id": 195305111,
        "url": "https://ads.admetricks.com/banner_900a8fa54e8a37380f822c6049164c87.jpg",
        "metrics": {
          "count": 1,
          "impact": 4816,
          "impressions": 10131,
          "valuation": 110.0,
          "valuation_usd": 21.1218,
          "valuation_by_country": [
            {
              "brazil": 110.0
            }
          ]
        },
        "ad_measurements": {
          "height": 390,
          "width": 468
        },
        "date_range": {
          "start": "2020-12-28T15:20:33.000Z",
          "end": "2020-12-28T15:20:33.000Z"
        },
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
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
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
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
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 1027,
            "domain": "dicio.com.br",
            "metrics": {
              "impact": 4816,
              "impressions": 10131,
              "valuation": 110.0,
              "valuation_usd": 21.1218,
              "valuation_by_country": [
                {
                  "brazil": 110.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 195354200,
        "url": "https://ads.admetricks.com/banner_bc5bee7ad5154c4bccda203f7e439def.jpg",
        "metrics": {
          "count": 1,
          "impact": 48,
          "impressions": 576,
          "valuation": 10.0,
          "valuation_usd": 1.9202,
          "valuation_by_country": [
            {
              "brazil": 10.0
            }
          ]
        },
        "ad_measurements": {
          "height": 100,
          "width": 320
        },
        "date_range": {
          "start": "2020-12-28T16:43:48.000Z",
          "end": "2020-12-28T16:43:48.000Z"
        },
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
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
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
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
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 8044,
            "domain": "jornalopcao.com.br",
            "metrics": {
              "impact": 48,
              "impressions": 576,
              "valuation": 10.0,
              "valuation_usd": 1.9202,
              "valuation_by_country": [
                {
                  "brazil": 10.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 196333808,
        "url": "https://ads.admetricks.com/banner_273f1508eb9a217437e5303524ebd3f5.jpg",
        "metrics": {
          "count": 1,
          "impact": 13,
          "impressions": 84,
          "valuation": 4.0,
          "valuation_usd": 0.7681,
          "valuation_by_country": [
            {
              "brazil": 4.0
            }
          ]
        },
        "ad_measurements": {
          "height": 120,
          "width": 468
        },
        "date_range": {
          "start": "2020-12-30T02:53:20.000Z",
          "end": "2020-12-30T02:53:20.000Z"
        },
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
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
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
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
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 8004,
            "domain": "ofarroupilha.com.br",
            "metrics": {
              "impact": 13,
              "impressions": 84,
              "valuation": 4.0,
              "valuation_usd": 0.7681,
              "valuation_by_country": [
                {
                  "brazil": 4.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 195194494,
        "url": "https://ads.admetricks.com/banner_e10340542517a6f94f9ff5627d0ae572.jpg",
        "metrics": {
          "count": 1,
          "impact": 8,
          "impressions": 16,
          "valuation": 2.0,
          "valuation_usd": 0.384,
          "valuation_by_country": [
            {
              "brazil": 2.0
            }
          ]
        },
        "ad_measurements": {
          "height": 390,
          "width": 468
        },
        "date_range": {
          "start": "2020-12-28T11:33:16.000Z",
          "end": "2020-12-28T11:33:16.000Z"
        },
        "ad_types": [
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
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
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
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
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 7964,
            "domain": "gazetaweb.com.br",
            "metrics": {
              "impact": 8,
              "impressions": 16,
              "valuation": 2.0,
              "valuation_usd": 0.384,
              "valuation_by_country": [
                {
                  "brazil": 2.0
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
          "id": 4,
          "name": "brazil",
          "metrics": {
            "impact": 4885,
            "impressions": 10807,
            "valuation": 126.0,
            "valuation_usd": 24.194
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 4885,
            "impressions": 10807,
            "valuation": 126.0,
            "valuation_usd": 24.194
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 4885,
            "impressions": 10807,
            "valuation": 126.0,
            "valuation_usd": 24.194
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2020-12-28T00:00:00.000Z",
          "date_int": 1609113600000,
          "metrics": {
            "impact": 4872,
            "impressions": 10723,
            "valuation": 122.0,
            "valuation_usd": 23.426,
            "valuation_by_country": [
              {
                "brazil": 122.0
              }
            ]
          }
        },
        {
          "date": "2020-12-29T00:00:00.000Z",
          "date_int": 1609200000000,
          "metrics": {
            "impact": 0,
            "impressions": 0,
            "valuation": 0.0,
            "valuation_usd": 0,
            "valuation_by_country": []
          }
        },
        {
          "date": "2020-12-30T00:00:00.000Z",
          "date_int": 1609286400000,
          "metrics": {
            "impact": 13,
            "impressions": 84,
            "valuation": 4.0,
            "valuation_usd": 0.7681,
            "valuation_by_country": [
              {
                "brazil": 4.0
              }
            ]
          }
        }
      ],
      "total_impressions": 10807,
      "total_impact": 4885,
      "total_valuation": 126.0,
      "total_valuation_usd": 24.1941,
      "position": {
        "first_scroll": 0.3333333333333333,
        "second_scroll": 0.0,
        "third_or_more_scroll": 0.6666666666666666
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2020-12-28T11:33:16.000Z",
      "end": "2020-12-30T02:53:20.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
