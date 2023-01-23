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
  "data": {
    "countries": [
      {
        "id": 1,
        "name": "chile",
        "metrics": {
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
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
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
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
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
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
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
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
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
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
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        }
      }
    ],
    "website_categories": [
      {
        "id": "Arts and Entertainment > Music and Audio",
        "name": "Arts and Entertainment > Music and Audio",
        "metrics": {
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        }
      }
    ],
    "campaigns": [
      {
        "id": 8247985,
        "title": "La energía que nos rodea: los nuevos usos en la vida cotidiana - 10.154.61.212",
        "landing_page": "enel.cl/es/conoce-enel/la-energia-de-chile-se-transforma/la-energia-que-nos-rodea-los-nuevos-usos-en-la-vida-cotidiana.html",
        "description": "azul eléctrico | circulo | gráficos | logo | magenta | marca | patrón | propiedad material | rectángulo",
        "metrics": {
          "count": 12,
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        },
        "date_range": {
          "start": "2022-12-29T01:51:54.000Z",
          "end": "2022-12-29T01:57:22.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_104a1e9ba7fdc80596d0f24744684d60.jpg"
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
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
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
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
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
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
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
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
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
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
                }
              ]
            }
          }
        ]
      }
    ],
    "campaigns_with_websites_by_date": [
      {
        "id": 8247985,
        "title": "La energía que nos rodea: los nuevos usos en la vida cotidiana - 10.154.61.212",
        "landing_page": "8247985",
        "description": null,
        "metrics": {
          "count": 12,
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        },
        "brand": {
          "id": 8968,
          "name": "enel"
        },
        "websites_by_date": [
          {
            "id": 475,
            "domain": "duna.cl",
            "metrics_by_date": [
              {
                "date": "2022-12-29T00:00:00.000Z",
                "date_int": 1672272000000,
                "metrics": {
                  "count": 12,
                  "impact": 60,
                  "impressions": 786,
                  "valuation": 1803.9138,
                  "valuation_usd": 2.2126,
                  "valuation_by_country": [
                    {
                      "chile": 1803.9137789628
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
                  "impact": 60,
                  "impressions": 786,
                  "valuation": 1803.9138,
                  "valuation_usd": 2.2126,
                  "valuation_by_country": [
                    {
                      "chile": 1803.9137789628
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
        "id": 475,
        "domain": "duna.cl",
        "category": "Arts and Entertainment > Music and Audio",
        "metrics": {
          "count": 12,
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        }
      }
    ],
    "brands_by_date": [
      {
        "id": 8968,
        "name": "enel",
        "metrics_by_date": [
          {
            "date": "2022-12-29T00:00:00.000Z",
            "date_int": 1672272000000,
            "metrics": {
              "count": 12,
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
                }
              ]
            }
          }
        ]
      }
    ],
    "websites_by_date": [
      {
        "id": 475,
        "domain": "duna.cl",
        "metrics_by_date": [
          {
            "date": "2022-12-29T00:00:00.000Z",
            "date_int": 1672272000000,
            "metrics": {
              "count": 12,
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
                }
              ]
            }
          }
        ],
        "days_with_impressions": 1
      }
    ],
    "date_range": {
      "start": "2022-12-29T01:51:54.000Z",
      "end": "2022-12-29T01:57:22.000Z"
    },
    "brands_with_websites_by_date": [
      {
        "id": 8968,
        "metrics": {
          "count": 12,
          "impact": 60,
          "impressions": 786,
          "valuation": 1803.9138,
          "valuation_usd": 2.2126,
          "valuation_by_country": [
            {
              "chile": 1803.9137789628
            }
          ]
        },
        "name": "enel",
        "websites_by_date": [
          {
            "id": 475,
            "domain": "duna.cl",
            "metrics_by_date": [
              {
                "date": "2022-12-29T00:00:00.000Z",
                "date_int": 1672272000000,
                "metrics": {
                  "count": 12,
                  "impact": 60,
                  "impressions": 786,
                  "valuation": 1803.9138,
                  "valuation_usd": 2.2126,
                  "valuation_by_country": [
                    {
                      "chile": 1803.9137789628
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
                  "impact": 60,
                  "impressions": 786,
                  "valuation": 1803.9138,
                  "valuation_usd": 2.2126,
                  "valuation_by_country": [
                    {
                      "chile": 1803.9137789628
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ],
    "campaigns_by_date": [
      {
        "id": 8247985,
        "name": "La energía que nos rodea: los nuevos usos en la vida cotidiana - 10.154.61.212",
        "metrics_by_date": [
          {
            "date": "2022-12-29T00:00:00.000Z",
            "date_int": 1672272000000,
            "metrics": {
              "count": 12,
              "impact": 60,
              "impressions": 786,
              "valuation": 1803.9138,
              "valuation_usd": 2.2126,
              "valuation_by_country": [
                {
                  "chile": 1803.9137789628
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
            "impact": 60,
            "impressions": 786,
            "valuation": 1803.9138,
            "valuation_usd": 2.2126
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 60,
            "impressions": 786,
            "valuation": 1803.9138,
            "valuation_usd": 2.2126
          }
        }
      ],
      "devices": [
        {
          "id": 1,
          "name": "desktop",
          "metrics": {
            "impact": 60,
            "impressions": 786,
            "valuation": 1803.9138,
            "valuation_usd": 2.2126
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2022-12-29T00:00:00.000Z",
          "date_int": 1672272000000,
          "metrics": {
            "impact": 60,
            "impressions": 786,
            "valuation": 1803.9138,
            "valuation_usd": 2.2126,
            "valuation_by_country": [
              {
                "chile": 1803.9137789628
              }
            ]
          }
        }
      ],
      "total_impressions": 786,
      "total_impact": 60,
      "total_valuation": 1803.9138,
      "total_valuation_usd": 2.2126,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 1.0,
        "third_or_more_scroll": 0.0
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2022-12-29T01:51:54.000Z",
      "end": "2022-12-29T01:57:22.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
