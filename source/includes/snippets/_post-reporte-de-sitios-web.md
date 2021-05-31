> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/website-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-07T23:59:59.999","start":"2021-01-01T00:00:00.000","group_by":"day"},"websites":{"include":[{"id":1350,"domain":"20minutos.es"}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-07T23:59:59.999","start":"2021-01-01T00:00:00.000","group_by":"day"},"websites":{"include":[{"id":1350,"domain":"20minutos.es"}]}}'

response = requests.post('https://clientela.admetricks.com/website-report/', headers=headers, data=data)
```

```javascript
var fetch = require('node-fetch');

fetch('https://clientela.admetricks.com/website-report/', {
    method: 'POST',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Token YOUR_TOKEN',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"order_by":"valuation","ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-07T23:59:59.999","start":"2021-01-01T00:00:00.000","group_by":"day"},"websites":{"include":[{"id":1350,"domain":"20minutos.es"}]}})
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
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1}]},"countries":{"include":[{"id":1}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"end":"2021-01-07T23:59:59.999","start":"2021-01-01T00:00:00.000","group_by":"day"},"websites":{"include":[{"id":1350,"domain":"20minutos.es"}]}}';
$response = Requests::post('https://clientel.admetricks.com/website-report/', $headers, $data);

```

> Ejemplo de respuesta exitosa

```json
{
  "meta": {
    "date_range": {
      "start": "2021-01-01T00:00:01.000Z",
      "end": "2021-01-07T00:00:01.000Z"
    }
  },
  "data": {
    "industries": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": 13,
        "name": "otros"
      }
    ],
    "websites_by_date": [
      {
        "domain": "20minutos.es",
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "metrics": {
              "impact": 24338,
              "count": 1,
              "valuation_usd": 152.57198500813615,
              "valuation_by_country": [
                {
                  "chile": 110539
                }
              ],
              "impressions": 124608,
              "valuation": 110539
            },
            "date_int": 1609459200000
          },
          {
            "date": "2021-01-02T00:00:00.000Z",
            "metrics": {
              "impact": 23276,
              "count": 1,
              "valuation_usd": 145.91363586729673,
              "valuation_by_country": [
                {
                  "chile": 105715
                }
              ],
              "impressions": 119170,
              "valuation": 105715
            },
            "date_int": 1609545600000
          },
          {
            "date": "2021-01-03T00:00:00.000Z",
            "metrics": {
              "impact": 25184,
              "count": 1,
              "valuation_usd": 157.87630419309593,
              "valuation_by_country": [
                {
                  "chile": 114382
                }
              ],
              "impressions": 128940,
              "valuation": 114382
            },
            "date_int": 1609632000000
          }
        ],
        "id": 1350
      }
    ],
    "ad_types": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": 1,
        "name": "display"
      }
    ],
    "countries": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": 1,
        "name": "chile"
      }
    ],
    "website_categories": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": "unknown",
        "name": "unknown"
      }
    ],
    "sold_by": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": "not available",
        "name": "not available"
      }
    ],
    "devices": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": 2,
        "name": "mobile"
      }
    ],
    "date_range": {
      "start": "2021-01-01T00:00:01.000Z",
      "end": "2021-01-03T00:00:01.000Z"
    },
    "campaigns": [
      {
        "landing_page": "docs.admetricks.com/other-campaigns",
        "description": null,
        "title": "Other campaigns",
        "date_range": {
          "start": "2021-01-01T00:00:01.000Z",
          "end": "2021-01-03T00:00:01.000Z"
        },
        "industry": {
          "id": 13,
          "name": "otros"
        },
        "brand": {
          "id": 186036,
          "name": "other-brand"
        },
        "countries": [
          {
            "metrics": {
              "impact": 72798,
              "count": 3,
              "valuation_usd": 456.3619250685288,
              "valuation_by_country": [
                {
                  "chile": 330636
                }
              ],
              "impressions": 372718,
              "valuation": 330636
            },
            "id": 1,
            "name": "chile"
          }
        ],
        "devices": [
          {
            "metrics": {
              "impact": 72798,
              "count": 3,
              "valuation_usd": 456.3619250685288,
              "valuation_by_country": [
                {
                  "chile": 330636
                }
              ],
              "impressions": 372718,
              "valuation": 330636
            },
            "id": 2,
            "name": "mobile"
          }
        ],
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "websites": [
          {
            "metrics": {
              "impact": 72798,
              "count": 3,
              "valuation_usd": 456.3619250685288,
              "valuation_by_country": [
                {
                  "chile": 330636
                }
              ],
              "impressions": 372718,
              "valuation": 330636
            },
            "domain": "20minutos.es",
            "id": 1350
          }
        ],
        "sold_by": [
          {
            "metrics": {
              "impact": 72798,
              "count": 3,
              "valuation_usd": 456.3619250685288,
              "valuation_by_country": [
                {
                  "chile": 330636
                }
              ],
              "impressions": 372718,
              "valuation": 330636
            },
            "id": "not available",
            "name": "not available"
          }
        ],
        "preview": {
          "ad_measurements": {
            "width": 300,
            "height": 250
          },
          "ad_file": {
            "name": "https://ads.admetricks.com/other_campaigns.jpg"
          }
        },
        "id": 6823116,
        "ad_types": [
          {
            "metrics": {
              "impact": 72798,
              "count": 3,
              "valuation_usd": 456.3619250685288,
              "valuation_by_country": [
                {
                  "chile": 330636
                }
              ],
              "impressions": 372718,
              "valuation": 330636
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
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "domain": "20minutos.es",
        "id": 1350
      }
    ],
    "brands_by_date": [
      {
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "metrics": {
              "impact": 24338,
              "count": 1,
              "valuation_usd": 152.57198500813615,
              "valuation_by_country": [
                {
                  "chile": 110539
                }
              ],
              "impressions": 124608,
              "valuation": 110539
            },
            "date_int": 1609459200000
          },
          {
            "date": "2021-01-02T00:00:00.000Z",
            "metrics": {
              "impact": 23276,
              "count": 1,
              "valuation_usd": 145.91363586729673,
              "valuation_by_country": [
                {
                  "chile": 105715
                }
              ],
              "impressions": 119170,
              "valuation": 105715
            },
            "date_int": 1609545600000
          },
          {
            "date": "2021-01-03T00:00:00.000Z",
            "metrics": {
              "impact": 25184,
              "count": 1,
              "valuation_usd": 157.87630419309593,
              "valuation_by_country": [
                {
                  "chile": 114382
                }
              ],
              "impressions": 128940,
              "valuation": 114382
            },
            "date_int": 1609632000000
          }
        ],
        "id": 186036,
        "name": "other-brand"
      }
    ],
    "brands": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "id": 186036,
        "name": "other-brand"
      }
    ],
    "summary": {
      "metrics_by_date": [
        {
          "date": "2021-01-01T00:00:00.000Z",
          "metrics": {
            "impact": 24338,
            "valuation_usd": 152.57198500813615,
            "impressions": 124608,
            "valuation": 110539
          },
          "date_int": 1609459200000
        },
        {
          "date": "2021-01-02T00:00:00.000Z",
          "metrics": {
            "impact": 23276,
            "valuation_usd": 145.91363586729673,
            "impressions": 119170,
            "valuation": 105715
          },
          "date_int": 1609545600000
        },
        {
          "date": "2021-01-03T00:00:00.000Z",
          "metrics": {
            "impact": 25184,
            "valuation_usd": 157.87630419309593,
            "impressions": 128940,
            "valuation": 114382
          },
          "date_int": 1609632000000
        }
      ],
      "ad_types": [
        {
          "metrics": {
            "impact": 72798,
            "valuation_usd": 456.3619250685288,
            "impressions": 372718,
            "valuation": 330636
          },
          "id": 1,
          "name": "display"
        }
      ],
      "countries": [
        {
          "metrics": {
            "impact": 72798,
            "valuation_usd": 456.3619250685288,
            "impressions": 372718,
            "valuation": 330636
          },
          "id": 1,
          "name": "chile"
        }
      ],
      "total_impressions": 372718,
      "total_impact": 72798,
      "devices": [
        {
          "metrics": {
            "impact": 72798,
            "valuation_usd": 456.3619250685288,
            "impressions": 372718,
            "valuation": 330636
          },
          "id": 2,
          "name": "mobile"
        }
      ],
      "total_valuation_usd": 456.3619250685289,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 0.0,
        "third_or_more_scroll": 1.0
      },
      "total_valuation": 330636
    },
    "brands_with_websites_by_date": [
      {
        "metrics": {
          "impact": 72798,
          "count": 3,
          "valuation_usd": 456.3619250685288,
          "valuation_by_country": [
            {
              "chile": 330636
            }
          ],
          "impressions": 372718,
          "valuation": 330636
        },
        "websites_by_date": [
          {
            "domain": "20minutos.es",
            "metrics_by_date": [
              {
                "date": "2021-01-01T00:00:00.000Z",
                "metrics": {
                  "impact": 24338,
                  "count": 1,
                  "valuation_usd": 152.57198500813615,
                  "valuation_by_country": [
                    {
                      "chile": 110539
                    }
                  ],
                  "impressions": 124608,
                  "valuation": 110539
                },
                "date_int": 1609459200000
              },
              {
                "date": "2021-01-02T00:00:00.000Z",
                "metrics": {
                  "impact": 23276,
                  "count": 1,
                  "valuation_usd": 145.91363586729673,
                  "valuation_by_country": [
                    {
                      "chile": 105715
                    }
                  ],
                  "impressions": 119170,
                  "valuation": 105715
                },
                "date_int": 1609545600000
              },
              {
                "date": "2021-01-03T00:00:00.000Z",
                "metrics": {
                  "impact": 25184,
                  "count": 1,
                  "valuation_usd": 157.87630419309593,
                  "valuation_by_country": [
                    {
                      "chile": 114382
                    }
                  ],
                  "impressions": 128940,
                  "valuation": 114382
                },
                "date_int": 1609632000000
              }
            ],
            "id": 1350,
            "days_with_impressions": 3
          }
        ],
        "id": 186036,
        "name": "other-brand"
      }
    ]
  }
}
```
