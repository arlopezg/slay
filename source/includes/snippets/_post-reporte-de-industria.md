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
  "data": {
    "countries": [
      {
        "id": 1,
        "name": "chile",
        "metrics": {
          "impact": 8241,
          "impressions": 30168,
          "valuation": 28176.0,
          "valuation_usd": 34.5595,
          "valuation_by_country": [
            {
              "chile": 28176.0
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
          "impact": 8241,
          "impressions": 30168,
          "valuation": 28176.0,
          "valuation_usd": 34.5595,
          "valuation_by_country": [
            {
              "chile": 28176.0
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
          "impact": 8241,
          "impressions": 30168,
          "valuation": 28176.0,
          "valuation_usd": 34.5595,
          "valuation_by_country": [
            {
              "chile": 28176.0
            }
          ]
        }
      }
    ],
    "brands": [
      {
        "id": 141894,
        "name": "gympro",
        "metrics": {
          "impact": 8152,
          "impressions": 29387,
          "valuation": 27512.0,
          "valuation_usd": 33.745,
          "valuation_by_country": [
            {
              "chile": 27512.0
            }
          ]
        }
      },
      {
        "id": 342746,
        "name": "dirt brothers",
        "metrics": {
          "impact": 62,
          "impressions": 674,
          "valuation": 518.0,
          "valuation_usd": 0.6354,
          "valuation_by_country": [
            {
              "chile": 518.0
            }
          ]
        }
      },
      {
        "id": 120972,
        "name": "yerka",
        "metrics": {
          "impact": 27,
          "impressions": 107,
          "valuation": 146.0,
          "valuation_usd": 0.1791,
          "valuation_by_country": [
            {
              "chile": 146.0
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
          "impact": 8241,
          "impressions": 30168,
          "valuation": 28176.0,
          "valuation_usd": 34.5595,
          "valuation_by_country": [
            {
              "chile": 28176.0
            }
          ]
        }
      }
    ],
    "industries": [
      {
        "id": 204,
        "name": "deportes y tiempo libre - artículos deportivos",
        "metrics": {
          "impact": 8241,
          "impressions": 30168,
          "valuation": 28176.0,
          "valuation_usd": 34.5595,
          "valuation_by_country": [
            {
              "chile": 28176.0
            }
          ]
        }
      }
    ],
    "website_categories": [],
    "campaigns": [
      {
        "id": 7797882,
        "title": "Peto Deportivo, Peto Polera de Entrenamiento - Mitre",
        "landing_page": "gympro.cl/deportes-y-fitness/peto-de-entrenamiento-mitre-junior-amarillo.html",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 8152,
          "impressions": 29387,
          "valuation": 27512.0,
          "valuation_usd": 33.745,
          "valuation_by_country": [
            {
              "chile": 27512.0
            }
          ]
        },
        "date_range": {
          "start": "2020-11-23T11:06:44.000Z",
          "end": "2020-11-23T11:06:44.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_145e33725b203c379d1e3aaf7bbdf5cf.jpg"
          },
          "ad_measurements": {
            "height": 300,
            "width": 970
          }
        },
        "brand": {
          "id": 141894,
          "name": "gympro"
        },
        "industry": {
          "id": 204,
          "name": "deportes y tiempo libre - artículos deportivos"
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
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
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
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
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
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
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
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 365,
            "domain": "clarin.com",
            "metrics": {
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7798600,
        "title": "Zapatilla DC Shoes Hombre DC INFINITE M SHOE B– Dirt Brothers",
        "landing_page": "dirtbrothers.cl/products/zapatilla-dc-shoes-hombre-dc-infinite-m-shoe-b",
        "description": "amarillo | blanco | engranaje deportes | equipo protección personal | guante | guante bateo | guante bicicleta | guante seguridad | ropa | ropa deporte",
        "metrics": {
          "count": 1,
          "impact": 62,
          "impressions": 674,
          "valuation": 518.0,
          "valuation_usd": 0.6354,
          "valuation_by_country": [
            {
              "chile": 518.0
            }
          ]
        },
        "date_range": {
          "start": "2020-11-23T17:20:52.000Z",
          "end": "2020-11-23T17:20:52.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_869179d3f518e157cc726586f752bc49.jpg"
          },
          "ad_measurements": {
            "height": 600,
            "width": 160
          }
        },
        "brand": {
          "id": 342746,
          "name": "dirt brothers"
        },
        "industry": {
          "id": 204,
          "name": "deportes y tiempo libre - artículos deportivos"
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
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
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
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
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
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
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
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 4250,
            "domain": "diarioconcepcion.cl",
            "metrics": {
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7799653,
        "title": "Chapa Yerka– Yerka Bikes Chile",
        "landing_page": "yerka.cl/products/chapa-yerka",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 22,
          "impressions": 79,
          "valuation": 106.0,
          "valuation_usd": 0.13,
          "valuation_by_country": [
            {
              "chile": 106.0
            }
          ]
        },
        "date_range": {
          "start": "2020-11-24T00:48:55.000Z",
          "end": "2020-11-24T00:48:55.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_cee4bae399a44001dde42e6fecc48886.jpg"
          },
          "ad_measurements": {
            "height": 300,
            "width": 970
          }
        },
        "brand": {
          "id": 120972,
          "name": "yerka"
        },
        "industry": {
          "id": 204,
          "name": "deportes y tiempo libre - artículos deportivos"
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
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
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
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
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
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
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
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 386,
            "domain": "aplicaciones.info",
            "metrics": {
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7799611,
        "title": "Botella Caramañola Bicicletas Aislación Térmica 516ml Montaña y Urbana– Yerka Bikes Chile",
        "landing_page": "yerka.cl/products/caramagiola-insulated-516ml",
        "description": "autopartes | pieza bicicleta | pistón automotriz | potencia bicicleta",
        "metrics": {
          "count": 1,
          "impact": 5,
          "impressions": 28,
          "valuation": 40.0,
          "valuation_usd": 0.0491,
          "valuation_by_country": [
            {
              "chile": 40.0
            }
          ]
        },
        "date_range": {
          "start": "2020-11-24T00:17:29.000Z",
          "end": "2020-11-24T00:17:29.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_0f6864f8cbe99d15374e81febea7b1a7.jpg"
          },
          "ad_measurements": {
            "height": 600,
            "width": 300
          }
        },
        "brand": {
          "id": 120972,
          "name": "yerka"
        },
        "industry": {
          "id": 204,
          "name": "deportes y tiempo libre - artículos deportivos"
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
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
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
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
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
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
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
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 1276,
            "domain": "bluradio.com",
            "metrics": {
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites": [
      {
        "id": 365,
        "domain": "clarin.com",
        "category": "365",
        "metrics": {
          "count": 1,
          "impact": 8152,
          "impressions": 29387,
          "valuation": 27512.0,
          "valuation_usd": 33.745,
          "valuation_by_country": [
            {
              "chile": 27512.0
            }
          ]
        }
      },
      {
        "id": 4250,
        "domain": "diarioconcepcion.cl",
        "category": "4250",
        "metrics": {
          "count": 1,
          "impact": 62,
          "impressions": 674,
          "valuation": 518.0,
          "valuation_usd": 0.6354,
          "valuation_by_country": [
            {
              "chile": 518.0
            }
          ]
        }
      },
      {
        "id": 386,
        "domain": "aplicaciones.info",
        "category": "386",
        "metrics": {
          "count": 1,
          "impact": 22,
          "impressions": 79,
          "valuation": 106.0,
          "valuation_usd": 0.13,
          "valuation_by_country": [
            {
              "chile": 106.0
            }
          ]
        }
      },
      {
        "id": 1276,
        "domain": "bluradio.com",
        "category": "1276",
        "metrics": {
          "count": 1,
          "impact": 5,
          "impressions": 28,
          "valuation": 40.0,
          "valuation_usd": 0.0491,
          "valuation_by_country": [
            {
              "chile": 40.0
            }
          ]
        }
      }
    ],
    "brands_by_date": [
      {
        "id": 141894,
        "name": "gympro",
        "metrics_by_date": [
          {
            "date": "2020-11-23T00:00:00.000Z",
            "date_int": 1606089600000,
            "metrics": {
              "count": 1,
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 342746,
        "name": "dirt brothers",
        "metrics_by_date": [
          {
            "date": "2020-11-23T00:00:00.000Z",
            "date_int": 1606089600000,
            "metrics": {
              "count": 1,
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 120972,
        "name": "yerka",
        "metrics_by_date": [
          {
            "date": "2020-11-24T00:00:00.000Z",
            "date_int": 1606176000000,
            "metrics": {
              "count": 2,
              "impact": 27,
              "impressions": 107,
              "valuation": 146.0,
              "valuation_usd": 0.1791,
              "valuation_by_country": [
                {
                  "chile": 146.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites_by_date": [
      {
        "id": 365,
        "domain": "clarin.com",
        "metrics_by_date": [
          {
            "date": "2020-11-23T00:00:00.000Z",
            "date_int": 1606089600000,
            "metrics": {
              "count": 1,
              "impact": 8152,
              "impressions": 29387,
              "valuation": 27512.0,
              "valuation_usd": 33.745,
              "valuation_by_country": [
                {
                  "chile": 27512.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4250,
        "domain": "diarioconcepcion.cl",
        "metrics_by_date": [
          {
            "date": "2020-11-23T00:00:00.000Z",
            "date_int": 1606089600000,
            "metrics": {
              "count": 1,
              "impact": 62,
              "impressions": 674,
              "valuation": 518.0,
              "valuation_usd": 0.6354,
              "valuation_by_country": [
                {
                  "chile": 518.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 386,
        "domain": "aplicaciones.info",
        "metrics_by_date": [
          {
            "date": "2020-11-24T00:00:00.000Z",
            "date_int": 1606176000000,
            "metrics": {
              "count": 1,
              "impact": 22,
              "impressions": 79,
              "valuation": 106.0,
              "valuation_usd": 0.13,
              "valuation_by_country": [
                {
                  "chile": 106.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1276,
        "domain": "bluradio.com",
        "metrics_by_date": [
          {
            "date": "2020-11-24T00:00:00.000Z",
            "date_int": 1606176000000,
            "metrics": {
              "count": 1,
              "impact": 5,
              "impressions": 28,
              "valuation": 40.0,
              "valuation_usd": 0.0491,
              "valuation_by_country": [
                {
                  "chile": 40.0
                }
              ]
            }
          }
        ]
      }
    ],
    "date_range": {
      "start": "2020-11-23T11:06:44.000Z",
      "end": "2020-11-24T00:48:55.000Z"
    },
    "brands_with_websites_by_date": [
      {
        "id": 141894,
        "metrics": {
          "count": 1,
          "impact": 8152,
          "impressions": 29387,
          "valuation": 27512.0,
          "valuation_usd": 33.745,
          "valuation_by_country": [
            {
              "chile": 27512.0
            }
          ]
        },
        "name": "gympro",
        "websites_by_date": [
          {
            "id": 365,
            "domain": "clarin.com",
            "metrics_by_date": [
              {
                "date": "2020-11-23T00:00:00.000Z",
                "date_int": 1606089600000,
                "metrics": {
                  "count": 1,
                  "impact": 8152,
                  "impressions": 29387,
                  "valuation": 27512.0,
                  "valuation_usd": 33.745,
                  "valuation_by_country": [
                    {
                      "chile": 27512.0
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
                  "impact": 8152,
                  "impressions": 29387,
                  "valuation": 27512.0,
                  "valuation_usd": 33.745,
                  "valuation_by_country": [
                    {
                      "chile": 27512.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 342746,
        "metrics": {
          "count": 1,
          "impact": 62,
          "impressions": 674,
          "valuation": 518.0,
          "valuation_usd": 0.6354,
          "valuation_by_country": [
            {
              "chile": 518.0
            }
          ]
        },
        "name": "dirt brothers",
        "websites_by_date": [
          {
            "id": 4250,
            "domain": "diarioconcepcion.cl",
            "metrics_by_date": [
              {
                "date": "2020-11-23T00:00:00.000Z",
                "date_int": 1606089600000,
                "metrics": {
                  "count": 1,
                  "impact": 62,
                  "impressions": 674,
                  "valuation": 518.0,
                  "valuation_usd": 0.6354,
                  "valuation_by_country": [
                    {
                      "chile": 518.0
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
                  "impact": 62,
                  "impressions": 674,
                  "valuation": 518.0,
                  "valuation_usd": 0.6354,
                  "valuation_by_country": [
                    {
                      "chile": 518.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 120972,
        "metrics": {
          "count": 2,
          "impact": 27,
          "impressions": 107,
          "valuation": 146.0,
          "valuation_usd": 0.1791,
          "valuation_by_country": [
            {
              "chile": 146.0
            }
          ]
        },
        "name": "yerka",
        "websites_by_date": [
          {
            "id": 386,
            "domain": "aplicaciones.info",
            "metrics_by_date": [
              {
                "date": "2020-11-24T00:00:00.000Z",
                "date_int": 1606176000000,
                "metrics": {
                  "count": 1,
                  "impact": 22,
                  "impressions": 79,
                  "valuation": 106.0,
                  "valuation_usd": 0.13,
                  "valuation_by_country": [
                    {
                      "chile": 106.0
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
                  "impact": 22,
                  "impressions": 79,
                  "valuation": 106.0,
                  "valuation_usd": 0.13,
                  "valuation_by_country": [
                    {
                      "chile": 106.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 1276,
            "domain": "bluradio.com",
            "metrics_by_date": [
              {
                "date": "2020-11-24T00:00:00.000Z",
                "date_int": 1606176000000,
                "metrics": {
                  "count": 1,
                  "impact": 5,
                  "impressions": 28,
                  "valuation": 40.0,
                  "valuation_usd": 0.0491,
                  "valuation_by_country": [
                    {
                      "chile": 40.0
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
                  "impact": 5,
                  "impressions": 28,
                  "valuation": 40.0,
                  "valuation_usd": 0.0491,
                  "valuation_by_country": [
                    {
                      "chile": 40.0
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
            "impact": 8241,
            "impressions": 30168,
            "valuation": 28176.0,
            "valuation_usd": 34.5595
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 8241,
            "impressions": 30168,
            "valuation": 28176.0,
            "valuation_usd": 34.5595
          }
        }
      ],
      "devices": [
        {
          "id": 1,
          "name": "desktop",
          "metrics": {
            "impact": 8241,
            "impressions": 30168,
            "valuation": 28176.0,
            "valuation_usd": 34.5595
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2020-11-23T00:00:00.000Z",
          "date_int": 1606089600000,
          "metrics": {
            "impact": 8214,
            "impressions": 30061,
            "valuation": 28030.0,
            "valuation_usd": 34.3804,
            "valuation_by_country": [
              {
                "chile": 28030.0
              }
            ]
          }
        },
        {
          "date": "2020-11-24T00:00:00.000Z",
          "date_int": 1606176000000,
          "metrics": {
            "impact": 27,
            "impressions": 107,
            "valuation": 146.0,
            "valuation_usd": 0.1791,
            "valuation_by_country": [
              {
                "chile": 146.0
              }
            ]
          }
        }
      ],
      "total_impressions": 30168,
      "total_impact": 8241,
      "total_valuation": 28176.0,
      "total_valuation_usd": 34.5595,
      "position": {
        "first_scroll": 0.0,
        "second_scroll": 0.75,
        "third_or_more_scroll": 0.25
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2020-11-23T11:06:44.000Z",
      "end": "2020-11-24T00:48:55.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
