> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/verification-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fi;q=0.7,gl;q=0.6,el;q=0.5' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-09T23:59:59.999","start":"2021-01-07T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":156014,"name":"facebook"}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token 53c566f0ee81d09acb616e913e38bd22ed17c0e2',
    'content-type': 'application/json;charset=UTF-8',
    'accept-language': 'es-ES,es;q=0.9,en;q=0.8,fi;q=0.7,gl;q=0.6,el;q=0.5',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-09T23:59:59.999","start":"2021-01-07T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":156014,"name":"facebook"}]}}'

response = requests.post('https://clientela.admetricks.com/verification-report/', headers=headers, data=data)
```

```javascript
var fetch = require("node-fetch");

fetch(
  "https://clientela.admetricks.com/verification-report/",
  {
    method: "POST",
    headers: {
      accept: "application/json, text/plain, */*",
      authorization: "Token 53c566f0ee81d09acb616e913e38bd22ed17c0e2",
      "accept-language": "es-ES,es;q=0.9,en;q=0.8,fi;q=0.7,gl;q=0.6,el;q=0.5",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      order_by: "valuation",
      ad_types: { include: [{ id: 1 }, { id: 2 }, { id: 3 }] },
      countries: { include: [{ id: 3 }] },
      devices: { include: [{ id: 1 }, { id: 2 }] },
      date_range: {
        end: "2021-01-09T23:59:59.999",
        start: "2021-01-07T00:00:00.000",
        group_by: "day",
      },
      brands: { include: [{ id: 156014, name: "facebook" }] },
    }),
  }
);
```

```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json, text/plain, */*',
    'authorization' => 'Token 53c566f0ee81d09acb616e913e38bd22ed17c0e2',
    'content-type' => 'application/json;charset=UTF-8',
    'accept-language' => 'es-ES,es;q=0.9,en;q=0.8,fi;q=0.7,gl;q=0.6,el;q=0.5'
);
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-09T23:59:59.999","start":"2021-01-07T00:00:00.000","group_by":"day"},"brands":{"include":[{"id":156014,"name":"facebook"}]}}';
$response = Requests::post('https://clientela.admetricks.com/verification-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{{
  "data": {
    "countries": [
      {
        "id": 3,
        "name": "argentina",
        "metrics": {
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
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
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
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
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
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
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
            }
          ]
        }
      }
    ],
    "campaigns_with_websites_by_date": [
      {
        "id": 6512196,
        "title": "Registrarte en Facebook | Facebook",
        "landing_page": "facebook.com/campaign/landing.php?campaign_id=1653388251",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T06:02:16.000Z",
          "end": "2021-01-09T07:27:22.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_0d040ea31b45e49f998fc6f4daa61561.jpg"
          },
          "ad_measurements": {
            "height": 600,
            "width": 160
          }
        },
        "brand": {
          "id": 156014,
          "name": "facebook"
        },
        "industry": {
          "id": 229,
          "name": "informática y equipos de oficina - redes sociales"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 376,
              "impressions": 1500,
              "valuation": 68.0,
              "valuation_usd": 0.3716,
              "valuation_by_country": [
                {
                  "argentina": 68.0
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
              "impact": 376,
              "impressions": 1500,
              "valuation": 68.0,
              "valuation_usd": 0.3716,
              "valuation_by_country": [
                {
                  "argentina": 68.0
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
              "impact": 376,
              "impressions": 1500,
              "valuation": 68.0,
              "valuation_usd": 0.3716,
              "valuation_by_country": [
                {
                  "argentina": 68.0
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
              "impact": 376,
              "impressions": 1500,
              "valuation": 68.0,
              "valuation_usd": 0.3716,
              "valuation_by_country": [
                {
                  "argentina": 68.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 6190,
            "domain": "wildtangent.com",
            "metrics": {
              "impact": 376,
              "impressions": 1500,
              "valuation": 68.0,
              "valuation_usd": 0.3716,
              "valuation_by_country": [
                {
                  "argentina": 68.0
                }
              ]
            }
          }
        ],
        "websites_by_date": [
          {
            "id": 6190,
            "domain": "wildtangent.com",
            "metrics_by_date": [
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 1,
                  "impact": 188,
                  "impressions": 750,
                  "valuation": 32.0,
                  "valuation_usd": 0.1749,
                  "valuation_by_country": [
                    {
                      "argentina": 32.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-09T00:00:00.000Z",
                "date_int": 1610150400000,
                "metrics": {
                  "count": 1,
                  "impact": 188,
                  "impressions": 750,
                  "valuation": 36.0,
                  "valuation_usd": 0.1967,
                  "valuation_by_country": [
                    {
                      "argentina": 36.0
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
        "id": 6190,
        "domain": "wildtangent.com",
        "category": "6190",
        "metrics": {
          "count": 2,
          "impact": 376,
          "impressions": 1500,
          "valuation": 68.0,
          "valuation_usd": 0.3716,
          "valuation_by_country": [
            {
              "argentina": 68.0
            }
          ]
        }
      }
    ],
    "date_range": {
      "start": "2021-01-08T06:02:16.000Z",
      "end": "2021-01-09T07:27:22.000Z"
    },
    "summary": {
      "countries": [
        {
          "id": 3,
          "name": "argentina",
          "metrics": {
            "impact": 376,
            "impressions": 1500,
            "valuation": 68.0,
            "valuation_usd": 0.3716
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 376,
            "impressions": 1500,
            "valuation": 68.0,
            "valuation_usd": 0.3716
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 376,
            "impressions": 1500,
            "valuation": 68.0,
            "valuation_usd": 0.3716
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2021-01-08T00:00:00.000Z",
          "date_int": 1610064000000,
          "metrics": {
            "impact": 188,
            "impressions": 750,
            "valuation": 32.0,
            "valuation_usd": 0.1749,
            "valuation_by_country": [
              {
                "argentina": 32.0
              }
            ]
          }
        },
        {
          "date": "2021-01-09T00:00:00.000Z",
          "date_int": 1610150400000,
          "metrics": {
            "impact": 188,
            "impressions": 750,
            "valuation": 36.0,
            "valuation_usd": 0.1967,
            "valuation_by_country": [
              {
                "argentina": 36.0
              }
            ]
          }
        }
      ],
      "total_impressions": 1500,
      "total_impact": 376,
      "total_valuation": 68.0,
      "total_valuation_usd": 0.37160000000000004,
      "position": {
        "first_scroll": 1.0,
        "second_scroll": 0.0,
        "third_or_more_scroll": 0.0
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2021-01-08T06:02:16.000Z",
      "end": "2021-01-09T07:27:22.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
