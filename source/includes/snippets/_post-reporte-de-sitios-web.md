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
  "data": {
    "countries": [
      {
        "id": 1,
        "name": "chile",
        "metrics": {
          "impact": 217414,
          "impressions": 934600,
          "valuation": 961761.0,
          "valuation_usd": 1179.6546,
          "valuation_by_country": [
            {
              "chile": 961761.0
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
          "impact": 217414,
          "impressions": 934600,
          "valuation": 961761.0,
          "valuation_usd": 1179.6546,
          "valuation_by_country": [
            {
              "chile": 961761.0
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
          "impact": 217414,
          "impressions": 934600,
          "valuation": 961761.0,
          "valuation_usd": 1179.6546,
          "valuation_by_country": [
            {
              "chile": 961761.0
            }
          ]
        }
      }
    ],
    "brands": [
      {
        "id": 186036,
        "name": "other-brand",
        "metrics": {
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        }
      },
      {
        "id": 9077,
        "name": "falabella",
        "metrics": {
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        }
      }
    ],
    "sold_by": [
      {
        "id": "not available",
        "name": "not available",
        "metrics": {
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        }
      },
      {
        "id": "google",
        "name": "google",
        "metrics": {
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        }
      }
    ],
    "industries": [
      {
        "id": 13,
        "name": "otros",
        "metrics": {
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        }
      },
      {
        "id": 214,
        "name": "tiendas y restaurantes - tiendas de productos al por menor",
        "metrics": {
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        }
      }
    ],
    "website_categories": [
      {
        "id": "News and Media",
        "name": "News and Media",
        "metrics": {
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        }
      },
      {
        "id": "unknown",
        "name": "unknown",
        "metrics": {
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        }
      }
    ],
    "campaigns": [
      {
        "id": 6823116,
        "title": "Other campaigns",
        "landing_page": "docs.admetricks.com/other-campaigns",
        "description": null,
        "metrics": {
          "count": 6,
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-01T00:00:01.000Z",
          "end": "2021-01-06T00:00:01.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/other_campaigns.jpg"
          },
          "ad_measurements": {
            "height": 250,
            "width": 300
          }
        },
        "brand": {
          "id": 186036,
          "name": "other-brand"
        },
        "industry": {
          "id": 13,
          "name": "otros"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 145180,
              "impressions": 743308,
              "valuation": 778360.0,
              "valuation_usd": 954.7028,
              "valuation_by_country": [
                {
                  "chile": 778360.0
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
              "impact": 145180,
              "impressions": 743308,
              "valuation": 778360.0,
              "valuation_usd": 954.7028,
              "valuation_by_country": [
                {
                  "chile": 778360.0
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
              "impact": 145180,
              "impressions": 743308,
              "valuation": 778360.0,
              "valuation_usd": 954.7028,
              "valuation_by_country": [
                {
                  "chile": 778360.0
                }
              ]
            }
          }
        ],
        "sold_by": [
          {
            "id": "not available",
            "name": "not available",
            "metrics": {
              "impact": 145180,
              "impressions": 743308,
              "valuation": 778360.0,
              "valuation_usd": 954.7028,
              "valuation_by_country": [
                {
                  "chile": 778360.0
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
              "impact": 145180,
              "impressions": 743308,
              "valuation": 778360.0,
              "valuation_usd": 954.7028,
              "valuation_by_country": [
                {
                  "chile": 778360.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7990066,
        "title": " Liquidacion Mango Man - Falabella.com ",
        "landing_page": "falabella.com/falabella-cl/collection/liquidacion-mango-man",
        "description": "blanco | colorido | fotografía | línea | magenta | patrón | rojo | rosado",
        "metrics": {
          "count": 3,
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T03:21:38.000Z",
          "end": "2021-01-07T03:21:38.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_2988870f46de0c084cba3a82c2e1d9ed.jpg"
          },
          "ad_measurements": {
            "height": 250,
            "width": 300
          }
        },
        "brand": {
          "id": 9077,
          "name": "falabella"
        },
        "industry": {
          "id": 214,
          "name": "tiendas y restaurantes - tiendas de productos al por menor"
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
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
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
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
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
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
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
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
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
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
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
        "category": "News and Media",
        "metrics": {
          "count": 9,
          "impact": 217414,
          "impressions": 934600,
          "valuation": 961761.0,
          "valuation_usd": 1179.6546,
          "valuation_by_country": [
            {
              "chile": 961761.0
            }
          ]
        }
      }
    ],
    "brands_by_date": [
      {
        "id": 186036,
        "name": "other-brand",
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "date_int": 1609459200000,
            "metrics": {
              "count": 1,
              "impact": 24338,
              "impressions": 124608,
              "valuation": 130229.0,
              "valuation_usd": 159.7333,
              "valuation_by_country": [
                {
                  "chile": 130229.0
                }
              ]
            }
          },
          {
            "date": "2021-01-02T00:00:00.000Z",
            "date_int": 1609545600000,
            "metrics": {
              "count": 1,
              "impact": 23276,
              "impressions": 119170,
              "valuation": 126452.0,
              "valuation_usd": 155.1006,
              "valuation_by_country": [
                {
                  "chile": 126452.0
                }
              ]
            }
          },
          {
            "date": "2021-01-03T00:00:00.000Z",
            "date_int": 1609632000000,
            "metrics": {
              "count": 1,
              "impact": 25184,
              "impressions": 128940,
              "valuation": 133238.0,
              "valuation_usd": 163.424,
              "valuation_by_country": [
                {
                  "chile": 133238.0
                }
              ]
            }
          },
          {
            "date": "2021-01-04T00:00:00.000Z",
            "date_int": 1609718400000,
            "metrics": {
              "count": 1,
              "impact": 23833,
              "impressions": 122020,
              "valuation": 128431.0,
              "valuation_usd": 157.5279,
              "valuation_by_country": [
                {
                  "chile": 128431.0
                }
              ]
            }
          },
          {
            "date": "2021-01-05T00:00:00.000Z",
            "date_int": 1609804800000,
            "metrics": {
              "count": 1,
              "impact": 23993,
              "impressions": 122844,
              "valuation": 129004.0,
              "valuation_usd": 158.2307,
              "valuation_by_country": [
                {
                  "chile": 129004.0
                }
              ]
            }
          },
          {
            "date": "2021-01-06T00:00:00.000Z",
            "date_int": 1609891200000,
            "metrics": {
              "count": 1,
              "impact": 24556,
              "impressions": 125726,
              "valuation": 131006.0,
              "valuation_usd": 160.6863,
              "valuation_by_country": [
                {
                  "chile": 131006.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 9077,
        "name": "falabella",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites_by_date": [
      {
        "id": 1350,
        "domain": "20minutos.es",
        "metrics_by_date": [
          {
            "date": "2021-01-01T00:00:00.000Z",
            "date_int": 1609459200000,
            "metrics": {
              "count": 1,
              "impact": 24338,
              "impressions": 124608,
              "valuation": 130229.0,
              "valuation_usd": 159.7333,
              "valuation_by_country": [
                {
                  "chile": 130229.0
                }
              ]
            }
          },
          {
            "date": "2021-01-02T00:00:00.000Z",
            "date_int": 1609545600000,
            "metrics": {
              "count": 1,
              "impact": 23276,
              "impressions": 119170,
              "valuation": 126452.0,
              "valuation_usd": 155.1006,
              "valuation_by_country": [
                {
                  "chile": 126452.0
                }
              ]
            }
          },
          {
            "date": "2021-01-03T00:00:00.000Z",
            "date_int": 1609632000000,
            "metrics": {
              "count": 1,
              "impact": 25184,
              "impressions": 128940,
              "valuation": 133238.0,
              "valuation_usd": 163.424,
              "valuation_by_country": [
                {
                  "chile": 133238.0
                }
              ]
            }
          },
          {
            "date": "2021-01-04T00:00:00.000Z",
            "date_int": 1609718400000,
            "metrics": {
              "count": 1,
              "impact": 23833,
              "impressions": 122020,
              "valuation": 128431.0,
              "valuation_usd": 157.5279,
              "valuation_by_country": [
                {
                  "chile": 128431.0
                }
              ]
            }
          },
          {
            "date": "2021-01-05T00:00:00.000Z",
            "date_int": 1609804800000,
            "metrics": {
              "count": 1,
              "impact": 23993,
              "impressions": 122844,
              "valuation": 129004.0,
              "valuation_usd": 158.2307,
              "valuation_by_country": [
                {
                  "chile": 129004.0
                }
              ]
            }
          },
          {
            "date": "2021-01-06T00:00:00.000Z",
            "date_int": 1609891200000,
            "metrics": {
              "count": 1,
              "impact": 24556,
              "impressions": 125726,
              "valuation": 131006.0,
              "valuation_usd": 160.6863,
              "valuation_by_country": [
                {
                  "chile": 131006.0
                }
              ]
            }
          },
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 72234,
              "impressions": 191292,
              "valuation": 183401.0,
              "valuation_usd": 224.9518,
              "valuation_by_country": [
                {
                  "chile": 183401.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 7,
        "devices": [
          {
            "id": "mobile",
            "name": "mobile",
            "metrics": {
              "impact": 217414,
              "impressions": 934600,
              "valuation": 961761.0,
              "valuation_usd": 1179.6546,
              "valuation_by_country": [
                {
                  "chile": 961761.0
                }
              ]
            }
          }
        ]
      }
    ],
    "date_range": {
      "start": "2021-01-01T00:00:01.000Z",
      "end": "2021-01-07T03:21:38.000Z"
    },
    "brands_with_websites_by_date": [
      {
        "id": 186036,
        "metrics": {
          "count": 6,
          "impact": 145180,
          "impressions": 743308,
          "valuation": 778360.0,
          "valuation_usd": 954.7028,
          "valuation_by_country": [
            {
              "chile": 778360.0
            }
          ]
        },
        "name": "other-brand",
        "websites_by_date": [
          {
            "id": 1350,
            "domain": "20minutos.es",
            "metrics_by_date": [
              {
                "date": "2021-01-01T00:00:00.000Z",
                "date_int": 1609459200000,
                "metrics": {
                  "count": 1,
                  "impact": 24338,
                  "impressions": 124608,
                  "valuation": 130229.0,
                  "valuation_usd": 159.7333,
                  "valuation_by_country": [
                    {
                      "chile": 130229.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-02T00:00:00.000Z",
                "date_int": 1609545600000,
                "metrics": {
                  "count": 1,
                  "impact": 23276,
                  "impressions": 119170,
                  "valuation": 126452.0,
                  "valuation_usd": 155.1006,
                  "valuation_by_country": [
                    {
                      "chile": 126452.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-03T00:00:00.000Z",
                "date_int": 1609632000000,
                "metrics": {
                  "count": 1,
                  "impact": 25184,
                  "impressions": 128940,
                  "valuation": 133238.0,
                  "valuation_usd": 163.424,
                  "valuation_by_country": [
                    {
                      "chile": 133238.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-04T00:00:00.000Z",
                "date_int": 1609718400000,
                "metrics": {
                  "count": 1,
                  "impact": 23833,
                  "impressions": 122020,
                  "valuation": 128431.0,
                  "valuation_usd": 157.5279,
                  "valuation_by_country": [
                    {
                      "chile": 128431.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-05T00:00:00.000Z",
                "date_int": 1609804800000,
                "metrics": {
                  "count": 1,
                  "impact": 23993,
                  "impressions": 122844,
                  "valuation": 129004.0,
                  "valuation_usd": 158.2307,
                  "valuation_by_country": [
                    {
                      "chile": 129004.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-06T00:00:00.000Z",
                "date_int": 1609891200000,
                "metrics": {
                  "count": 1,
                  "impact": 24556,
                  "impressions": 125726,
                  "valuation": 131006.0,
                  "valuation_usd": 160.6863,
                  "valuation_by_country": [
                    {
                      "chile": 131006.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 6,
            "devices": [
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 145180,
                  "impressions": 743308,
                  "valuation": 778360.0,
                  "valuation_usd": 954.7028,
                  "valuation_by_country": [
                    {
                      "chile": 778360.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 9077,
        "metrics": {
          "count": 3,
          "impact": 72234,
          "impressions": 191292,
          "valuation": 183401.0,
          "valuation_usd": 224.9518,
          "valuation_by_country": [
            {
              "chile": 183401.0
            }
          ]
        },
        "name": "falabella",
        "websites_by_date": [
          {
            "id": 1350,
            "domain": "20minutos.es",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 3,
                  "impact": 72234,
                  "impressions": 191292,
                  "valuation": 183401.0,
                  "valuation_usd": 224.9518,
                  "valuation_by_country": [
                    {
                      "chile": 183401.0
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
                  "impact": 72234,
                  "impressions": 191292,
                  "valuation": 183401.0,
                  "valuation_usd": 224.9518,
                  "valuation_by_country": [
                    {
                      "chile": 183401.0
                    }
                  ]
                }
              }
            ]
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
            "impact": 217414,
            "impressions": 934600,
            "valuation": 961761.0,
            "valuation_usd": 1179.6546
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 217414,
            "impressions": 934600,
            "valuation": 961761.0,
            "valuation_usd": 1179.6546
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 217414,
            "impressions": 934600,
            "valuation": 961761.0,
            "valuation_usd": 1179.6546
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2021-01-01T00:00:00.000Z",
          "date_int": 1609459200000,
          "metrics": {
            "impact": 24338,
            "impressions": 124608,
            "valuation": 130229.0,
            "valuation_usd": 159.7333,
            "valuation_by_country": [
              {
                "chile": 130229.0
              }
            ]
          }
        },
        {
          "date": "2021-01-02T00:00:00.000Z",
          "date_int": 1609545600000,
          "metrics": {
            "impact": 23276,
            "impressions": 119170,
            "valuation": 126452.0,
            "valuation_usd": 155.1006,
            "valuation_by_country": [
              {
                "chile": 126452.0
              }
            ]
          }
        },
        {
          "date": "2021-01-03T00:00:00.000Z",
          "date_int": 1609632000000,
          "metrics": {
            "impact": 25184,
            "impressions": 128940,
            "valuation": 133238.0,
            "valuation_usd": 163.424,
            "valuation_by_country": [
              {
                "chile": 133238.0
              }
            ]
          }
        },
        {
          "date": "2021-01-04T00:00:00.000Z",
          "date_int": 1609718400000,
          "metrics": {
            "impact": 23833,
            "impressions": 122020,
            "valuation": 128431.0,
            "valuation_usd": 157.5279,
            "valuation_by_country": [
              {
                "chile": 128431.0
              }
            ]
          }
        },
        {
          "date": "2021-01-05T00:00:00.000Z",
          "date_int": 1609804800000,
          "metrics": {
            "impact": 23993,
            "impressions": 122844,
            "valuation": 129004.0,
            "valuation_usd": 158.2307,
            "valuation_by_country": [
              {
                "chile": 129004.0
              }
            ]
          }
        },
        {
          "date": "2021-01-06T00:00:00.000Z",
          "date_int": 1609891200000,
          "metrics": {
            "impact": 24556,
            "impressions": 125726,
            "valuation": 131006.0,
            "valuation_usd": 160.6863,
            "valuation_by_country": [
              {
                "chile": 131006.0
              }
            ]
          }
        },
        {
          "date": "2021-01-07T00:00:00.000Z",
          "date_int": 1609977600000,
          "metrics": {
            "impact": 72234,
            "impressions": 191292,
            "valuation": 183401.0,
            "valuation_usd": 224.9518,
            "valuation_by_country": [
              {
                "chile": 183401.0
              }
            ]
          }
        }
      ],
      "total_impressions": 934600,
      "total_impact": 217414,
      "total_valuation": 961761.0,
      "total_valuation_usd": 1179.6545999999998,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 0.0,
        "third_or_more_scroll": 1.0
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2021-01-01T00:00:01.000Z",
      "end": "2021-01-07T03:21:38.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
