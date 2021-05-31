> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/industry-report/' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","new_campaigns":1,"ad_format":1,"ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1}]},"date_range":{"start":"2020-11-23T00:00:00.000","end":"2020-11-24T23:59:59.999","group_by":"day"},"industries":{"include":[{"id":204,"name":"deportes y tiempo libre - artículos deportivos"}]}}'
```

```python
import requests

headers = {
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}


data = {
    "order_by": "valuation",
    "new_campaigns": 1,
    "ad_format": 1,
    "ad_types": { "include": [{ "id": 1 }] },
    "countries": { "include": [{ "id": 1 }] },
    "devices": { "include": [{ "id": 1 }] },
    "date_range": {
        "start": "2020-11-23T00:00:00.000",
        "end": "2020-11-24T23:59:59.999",
        "group_by": "day"
    },
    "industries": {
        "include": [{
            "id": 204,
            "name": "deportes y tiempo libre - artículos deportivos"
        }]
}

response = requests.post(
    'https://clientela.admetricks.com/industry-report/',
    headers=headers,
    data=data
)
```

```javascript
const params = {
  order_by: "valuation",
  new_campaigns: 1,
  ad_format: 1,
  ad_types: { include: [{ id: 1 }] },
  countries: { include: [{ id: 1 }] },
  devices: { include: [{ id: 1 }] },
  date_range: {
    start: "2020-11-23T00:00:00.000",
    end: "2020-11-24T23:59:59.999",
    group_by: "day",
  },
  industries: {
    include: [
      {
        id: 204,
        name: "deportes y tiempo libre - artículos deportivos",
      },
    ],
  },
};

fetch("https://clientela.admetricks.com/industry-report/", {
  method: "POST",
  headers: {
    authorization: "Token YOUR_TOKEN",
    "content-type": "application/json;charset=UTF-8",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(params),
});
```

```php
<?php

include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();

$headers = array(
    'authorization' => 'Token YOUR_TOKEN',
    'content-type' => 'application/json;charset=UTF-8'
);
$data = '{"order_by":"valuation","new_campaigns":1,"ad_format":1,"ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1}]},"date_range":{"start":"2020-11-23T00:00:00.000","end":"2020-11-24T23:59:59.999","group_by":"day"},"industries":{"include":[{"id":204,"name":"deportes y tiempo libre - art\xEDculos deportivos"}]}}';

$response = Requests::post('https://clientela.admetricks.com/industry-report/', $headers, $data);

?>
```

> Ejemplo de respuesta exitosa

```json
{
  "meta": {
    "date_range": {
      "start": "2021-01-01T08:16:38.000Z",
      "end": "2021-01-01T08:16:38.000Z"
    }
  },
  "data": {
    "industries": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": 204,
        "name": "deportes y tiempo libre - artículos deportivos"
      }
    ],
    "websites_by_date": [
      {
        "domain": "portalfitness.com",
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "date_int": 1609459200000
          }
        ],
        "id": 916
      }
    ],
    "ad_types": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": 1,
        "name": "display"
      }
    ],
    "countries": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": 1,
        "name": "chile"
      }
    ],
    "website_categories": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": "unknown",
        "name": "unknown"
      }
    ],
    "sold_by": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": "google",
        "name": "google"
      }
    ],
    "devices": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": 1,
        "name": "desktop"
      }
    ],
    "date_range": {
      "start": "2021-01-01T08:16:38.000Z",
      "end": "2021-01-01T08:16:38.000Z"
    },
    "campaigns": [
      {
        "landing_page": "promocion.maxrecovery.live/landing-max-recovery-2",
        "description": "camisa polo | camiseta | cofre | cola caballo | cámara | mano | oreja | tanque activo",
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "title": "Max Recovery | Handy Gym",
        "date_range": {
          "start": "2021-01-01T08:16:38.000Z",
          "end": "2021-01-01T08:16:38.000Z"
        },
        "industry": {
          "id": 204,
          "name": "deportes y tiempo libre - artículos deportivos"
        },
        "brand": {
          "id": 365920,
          "name": "max recovery chile"
        },
        "countries": [
          {
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "id": 1,
            "name": "chile"
          }
        ],
        "devices": [
          {
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "id": 1,
            "name": "desktop"
          }
        ],
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "websites": [
          {
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "domain": "portalfitness.com",
            "id": 916
          }
        ],
        "sold_by": [
          {
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "id": "google",
            "name": "google"
          }
        ],
        "preview": {
          "ad_measurements": {
            "width": 1200,
            "height": 280
          },
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_b70245a7aecbc2b92114fb06e05d86c4.jpg"
          }
        },
        "id": 7733539,
        "ad_types": [
          {
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "id": 1,
            "name": "display"
          }
        ]
      }
    ],
    "websites": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "domain": "portalfitness.com",
        "id": 916
      }
    ],
    "brands_by_date": [
      {
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "metrics": {
              "impact": 241,
              "count": 1,
              "valuation_usd": 1.1745968322666558,
              "valuation_by_country": [
                {
                  "chile": 851
                }
              ],
              "impressions": 750,
              "valuation": 851
            },
            "date_int": 1609459200000
          }
        ],
        "id": 365920,
        "name": "max recovery chile"
      }
    ],
    "brands": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "id": 365920,
        "name": "max recovery chile"
      }
    ],
    "summary": {
      "metrics_by_date": [
        {
          "date": "2021-01-01T00:00:00.000Z",
          "metrics": {
            "impact": 241,
            "valuation_usd": 1.1745968322666558,
            "impressions": 750,
            "valuation": 851
          },
          "date_int": 1609459200000
        }
      ],
      "ad_types": [
        {
          "metrics": {
            "impact": 241,
            "valuation_usd": 1.1745968322666558,
            "impressions": 750,
            "valuation": 851
          },
          "id": 1,
          "name": "display"
        }
      ],
      "countries": [
        {
          "metrics": {
            "impact": 241,
            "valuation_usd": 1.1745968322666558,
            "impressions": 750,
            "valuation": 851
          },
          "id": 1,
          "name": "chile"
        }
      ],
      "total_impressions": 750,
      "total_impact": 241,
      "devices": [
        {
          "metrics": {
            "impact": 241,
            "valuation_usd": 1.1745968322666558,
            "impressions": 750,
            "valuation": 851
          },
          "id": 1,
          "name": "desktop"
        }
      ],
      "total_valuation_usd": 1.1745968322666558,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 0.0,
        "third_or_more_scroll": 1.0
      },
      "total_valuation": 851
    },
    "brands_with_websites_by_date": [
      {
        "metrics": {
          "impact": 241,
          "count": 1,
          "valuation_usd": 1.1745968322666558,
          "valuation_by_country": [
            {
              "chile": 851
            }
          ],
          "impressions": 750,
          "valuation": 851
        },
        "websites_by_date": [
          {
            "domain": "portalfitness.com",
            "metrics_by_date": [
              {
                "date": "2021-01-01T00:00:00.000Z",
                "metrics": {
                  "impact": 241,
                  "count": 1,
                  "valuation_usd": 1.1745968322666558,
                  "valuation_by_country": [
                    {
                      "chile": 851
                    }
                  ],
                  "impressions": 750,
                  "valuation": 851
                },
                "date_int": 1609459200000
              }
            ],
            "id": 916,
            "days_with_impressions": 1
          }
        ],
        "id": 365920,
        "name": "max recovery chile"
      }
    ]
  }
}
```
