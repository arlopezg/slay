> Ejemplo de petición

```shell
curl -k 'https://clientela.admetricks.com/opportunity-brand-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-28T00:00:00.000","group_by":"day"},"websites":{"exclude":[{"id":732,"domain":"guiainfantil.com"}],"include":[{"id":1350,"domain":"20minutos.es","last_seen":"2020-12-29T03:02:49Z","added":true}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-28T00:00:00.000","group_by":"day"},"websites":{"exclude":[{"id":732,"domain":"guiainfantil.com"}],"include":[{"id":1350,"domain":"20minutos.es","last_seen":"2020-12-29T03:02:49Z","added":true}]}}'

response = requests.post('https://clientela.admetricks.com/opportunity-brand-report/', headers=headers, data=data, verify=False)
```

```javascript
var fetch = require('node-fetch');

fetch('https://clientela.admetricks.com/opportunity-brand-report/', {
    method: 'POST',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-28T00:00:00.000","group_by":"day"},"websites":{"exclude":[{"id":732,"domain":"guiainfantil.com"}],"include":[{"id":1350,"domain":"20minutos.es","last_seen":"2020-12-29T03:02:49Z","added":true}]}})
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
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2020-12-30T23:59:59.999","start":"2020-12-28T00:00:00.000","group_by":"day"},"websites":{"exclude":[{"id":732,"domain":"guiainfantil.com"}],"include":[{"id":1350,"domain":"20minutos.es","last_seen":"2020-12-29T03:02:49Z","added":true}]}}';
$response = Requests::post('https://clientela.admetricks.com/opportunity-brand-report/', $headers, $data);
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
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
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
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
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
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
            }
          ]
        }
      }
    ],
    "brands": [
      {
        "id": 3,
        "name": "claro",
        "metrics": {
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
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
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
            }
          ]
        }
      }
    ],
    "industries": [
      {
        "id": 288,
        "name": "telecomunicaciones e internet - empresas de telecomunicaciones",
        "metrics": {
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
            }
          ]
        }
      }
    ],
    "website_categories": [],
    "campaigns": [
      {
        "id": 7847163,
        "title": "Todos Bienvenidos | Claro Chile",
        "landing_page": "clarochile.cl/personas/todos-bienvenidos",
        "description": "captura pantalla | colorido | cuadrado | línea | número | paralelo | rectángulo",
        "metrics": {
          "count": 1,
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
            }
          ]
        },
        "date_range": {
          "start": "2020-12-29T03:02:49.000Z",
          "end": "2020-12-29T03:02:49.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_64f743f73597d32265713f5cce72ce7d.jpg"
          },
          "ad_measurements": {
            "height": 280,
            "width": 336
          }
        },
        "brand": {
          "id": 3,
          "name": "claro"
        },
        "industry": {
          "id": 288,
          "name": "telecomunicaciones e internet - empresas de telecomunicaciones"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
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
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
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
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
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
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 1350,
            "domain": "20minutos.es",
            "metrics": {
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites": [
      {
        "id": 1350,
        "domain": "20minutos.es",
        "category": "1350",
        "metrics": {
          "count": 1,
          "impact": 16052,
          "impressions": 65518,
          "valuation": 155513.0,
          "valuation_usd": 190.7455,
          "valuation_by_country": [
            {
              "chile": 155513.0
            }
          ]
        }
      }
    ],
    "brands_by_date": [
      {
        "id": 3,
        "name": "claro",
        "metrics_by_date": [
          {
            "date": "2020-12-29T00:00:00.000Z",
            "date_int": 1609200000000,
            "metrics": {
              "count": 1,
              "impact": 16052,
              "impressions": 65518,
              "valuation": 155513.0,
              "valuation_usd": 190.7455,
              "valuation_by_country": [
                {
                  "chile": 155513.0
                }
              ]
            }
          }
        ]
      }
    ],
    "date_range": {
      "start": "2020-12-29T03:02:49.000Z",
      "end": "2020-12-29T03:02:49.000Z"
    },
    "summary": {
      "countries": [
        {
          "id": 1,
          "name": "chile",
          "metrics": {
            "impact": 16052,
            "impressions": 65518,
            "valuation": 155513.0,
            "valuation_usd": 190.7455
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 16052,
            "impressions": 65518,
            "valuation": 155513.0,
            "valuation_usd": 190.7455
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 16052,
            "impressions": 65518,
            "valuation": 155513.0,
            "valuation_usd": 190.7455
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2020-12-29T00:00:00.000Z",
          "date_int": 1609200000000,
          "metrics": {
            "impact": 16052,
            "impressions": 65518,
            "valuation": 155513.0,
            "valuation_usd": 190.7455,
            "valuation_by_country": [
              {
                "chile": 155513.0
              }
            ]
          }
        }
      ],
      "total_impressions": 65518,
      "total_impact": 16052,
      "total_valuation": 155513.0,
      "total_valuation_usd": 190.7455,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 0.0,
        "third_or_more_scroll": 1.0
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2020-12-29T03:02:49.000Z",
      "end": "2020-12-29T03:02:49.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
