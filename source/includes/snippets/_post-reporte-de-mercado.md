> Ejemplo de petición

```shell
curl 'https://clientela.admetricks.com/market-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-raw '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1,"name":"chile"}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-25T00:00:00.000","end":"2021-01-25T00:00:59.999","group_by":"day"}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1,"name":"chile"}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-25T00:00:00.000","end":"2021-01-25T00:00:59.999","group_by":"day"}}'

response = requests.post('https://clientela.admetricks.com/market-report/', headers=headers, data=data)
```

```javascript
var fetch = require("node-fetch");

fetch("https://clientela.admetricks.com/market-report/", {
  method: "POST",
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: "Token YOUR_TOKEN",
    "content-type": "application/json;charset=UTF-8",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    order_by: "valuation",
    ad_types: { include: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    countries: { include: [{ id: 1, name: "chile" }] },
    devices: { include: [{ id: 1 }, { id: 2 }] },
    date_range: {
      start: "2021-01-25T00:00:00.000",
      end: "2021-01-25T00:00:59.999",
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
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":1,"name":"chile"}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-25T00:00:00.000","end":"2021-01-25T00:00:59.999","group_by":"day"}}';

$response = Requests::post('https://clientela.admetricks.com/market-report/', $headers, $data);
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
          "impact": 41866353,
          "impressions": 333824085,
          "valuation": 289749786.0,
          "valuation_usd": 355394.6047,
          "valuation_by_country": [
            {
              "chile": 289749786.0
            }
          ]
        }
      }
    ],
    "ad_types": [
      {
        "id": 2,
        "name": "video",
        "metrics": {
          "impact": 24665852,
          "impressions": 166904863,
          "valuation": 165542938.0,
          "valuation_usd": 203047.836,
          "valuation_by_country": [
            {
              "chile": 165542938.0
            }
          ]
        }
      },
      {
        "id": 1,
        "name": "display",
        "metrics": {
          "impact": 17192631,
          "impressions": 166871780,
          "valuation": 124184566.0,
          "valuation_usd": 152319.4386,
          "valuation_by_country": [
            {
              "chile": 124184566.0
            }
          ]
        }
      },
      {
        "id": 3,
        "name": "text",
        "metrics": {
          "impact": 7870,
          "impressions": 47441,
          "valuation": 22282.0,
          "valuation_usd": 27.3301,
          "valuation_by_country": [
            {
              "chile": 22282.0
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
          "impact": 22120083,
          "impressions": 95574851,
          "valuation": 184465449.0,
          "valuation_usd": 226257.3728,
          "valuation_by_country": [
            {
              "chile": 184465449.0
            }
          ]
        }
      },
      {
        "id": 1,
        "name": "desktop",
        "metrics": {
          "impact": 19746270,
          "impressions": 238249233,
          "valuation": 105284337.0,
          "valuation_usd": 129137.232,
          "valuation_by_country": [
            {
              "chile": 105284337.0
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
          "impact": 41864583,
          "impressions": 333815183,
          "valuation": 289740420.0,
          "valuation_usd": 355383.1168,
          "valuation_by_country": [
            {
              "chile": 289740420.0
            }
          ]
        }
      },
      {
        "id": 22818,
        "name": "universidad viña del mar  uvm",
        "metrics": {
          "impact": 543,
          "impressions": 4874,
          "valuation": 4166.0,
          "valuation_usd": 5.1098,
          "valuation_by_country": [
            {
              "chile": 4166.0
            }
          ]
        }
      },
      {
        "id": 269291,
        "name": "avanza centro ecográfico",
        "metrics": {
          "impact": 586,
          "impressions": 3000,
          "valuation": 3275.0,
          "valuation_usd": 4.017,
          "valuation_by_country": [
            {
              "chile": 3275.0
            }
          ]
        }
      },
      {
        "id": 193765,
        "name": "google ads",
        "metrics": {
          "impact": 389,
          "impressions": 500,
          "valuation": 1283.0,
          "valuation_usd": 1.5737,
          "valuation_by_country": [
            {
              "chile": 1283.0
            }
          ]
        }
      },
      {
        "id": 72828,
        "name": "go sur",
        "metrics": {
          "impact": 252,
          "impressions": 528,
          "valuation": 642.0,
          "valuation_usd": 0.7874,
          "valuation_by_country": [
            {
              "chile": 642.0
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
          "impact": 41864583,
          "impressions": 333815183,
          "valuation": 289740420.0,
          "valuation_usd": 355383.1168,
          "valuation_by_country": [
            {
              "chile": 289740420.0
            }
          ]
        }
      },
      {
        "id": "google",
        "name": "google",
        "metrics": {
          "impact": 1770,
          "impressions": 8902,
          "valuation": 9366.0,
          "valuation_usd": 11.4879,
          "valuation_by_country": [
            {
              "chile": 9366.0
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
          "impact": 41864583,
          "impressions": 333815183,
          "valuation": 289740420.0,
          "valuation_usd": 355383.1168,
          "valuation_by_country": [
            {
              "chile": 289740420.0
            }
          ]
        }
      },
      {
        "id": 319,
        "name": "educación y formación - universidades y enseñanza superior",
        "metrics": {
          "impact": 543,
          "impressions": 4874,
          "valuation": 4166.0,
          "valuation_usd": 5.1098,
          "valuation_by_country": [
            {
              "chile": 4166.0
            }
          ]
        }
      },
      {
        "id": 274,
        "name": "salud - clínicas, hospitales y centros médicos",
        "metrics": {
          "impact": 586,
          "impressions": 3000,
          "valuation": 3275.0,
          "valuation_usd": 4.017,
          "valuation_by_country": [
            {
              "chile": 3275.0
            }
          ]
        }
      },
      {
        "id": 280,
        "name": "servicios públicos y privados - consultorías y servicios empresariales",
        "metrics": {
          "impact": 389,
          "impressions": 500,
          "valuation": 1283.0,
          "valuation_usd": 1.5737,
          "valuation_by_country": [
            {
              "chile": 1283.0
            }
          ]
        }
      },
      {
        "id": 298,
        "name": "transporte, viajes y turismo - varios",
        "metrics": {
          "impact": 252,
          "impressions": 528,
          "valuation": 642.0,
          "valuation_usd": 0.7874,
          "valuation_by_country": [
            {
              "chile": 642.0
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
          "count": 682,
          "impact": 41864583,
          "impressions": 333815183,
          "valuation": 289740420.0,
          "valuation_usd": 355383.1168,
          "valuation_by_country": [
            {
              "chile": 289740420.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-25T00:00:01.000Z",
          "end": "2021-01-25T00:00:01.000Z"
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
              "impact": 41864583,
              "impressions": 333815183,
              "valuation": 289740420.0,
              "valuation_usd": 355383.1168,
              "valuation_by_country": [
                {
                  "chile": 289740420.0
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
              "impact": 17190861,
              "impressions": 166862878,
              "valuation": 124175200.0,
              "valuation_usd": 152307.9507,
              "valuation_by_country": [
                {
                  "chile": 124175200.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 24665852,
              "impressions": 166904863,
              "valuation": 165542938.0,
              "valuation_usd": 203047.836,
              "valuation_by_country": [
                {
                  "chile": 165542938.0
                }
              ]
            }
          },
          {
            "id": 3,
            "name": "text",
            "metrics": {
              "impact": 7870,
              "impressions": 47441,
              "valuation": 22282.0,
              "valuation_usd": 27.3301,
              "valuation_by_country": [
                {
                  "chile": 22282.0
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
              "impact": 19746270,
              "impressions": 238249233,
              "valuation": 105284337.0,
              "valuation_usd": 129137.232,
              "valuation_by_country": [
                {
                  "chile": 105284337.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 22118313,
              "impressions": 95565949,
              "valuation": 184456083.0,
              "valuation_usd": 226245.8848,
              "valuation_by_country": [
                {
                  "chile": 184456083.0
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
              "impact": 41864583,
              "impressions": 333815183,
              "valuation": 289740420.0,
              "valuation_usd": 355383.1168,
              "valuation_by_country": [
                {
                  "chile": 289740420.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics": {
              "impact": 16422352,
              "impressions": 105722320,
              "valuation": 164368798.0,
              "valuation_usd": 201607.6864,
              "valuation_by_country": [
                {
                  "chile": 164368798.0
                }
              ]
            }
          },
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 23355327,
              "impressions": 210195148,
              "valuation": 102655773.0,
              "valuation_usd": 125913.1486,
              "valuation_by_country": [
                {
                  "chile": 102655773.0
                }
              ]
            }
          },
          {
            "id": 467,
            "domain": "paula.cl",
            "metrics": {
              "impact": 1501,
              "impressions": 10725,
              "valuation": 26418.0,
              "valuation_usd": 32.4032,
              "valuation_by_country": [
                {
                  "chile": 26418.0
                }
              ]
            }
          },
          {
            "id": 818,
            "domain": "allmusic.com",
            "metrics": {
              "impact": 489,
              "impressions": 6324,
              "valuation": 3171.0,
              "valuation_usd": 3.8894,
              "valuation_by_country": [
                {
                  "chile": 3171.0
                }
              ]
            }
          },
          {
            "id": 247,
            "domain": "comohacerpara.com",
            "metrics": {
              "impact": 1281,
              "impressions": 9762,
              "valuation": 6718.0,
              "valuation_usd": 8.24,
              "valuation_by_country": [
                {
                  "chile": 6718.0
                }
              ]
            }
          },
          {
            "id": 341,
            "domain": "publimetro.cl",
            "metrics": {
              "impact": 62639,
              "impressions": 242817,
              "valuation": 894803.0,
              "valuation_usd": 1097.5268,
              "valuation_by_country": [
                {
                  "chile": 894803.0
                }
              ]
            }
          },
          {
            "id": 413,
            "domain": "msn.com",
            "metrics": {
              "impact": 39938,
              "impressions": 417526,
              "valuation": 303528.0,
              "valuation_usd": 372.2944,
              "valuation_by_country": [
                {
                  "chile": 303528.0
                }
              ]
            }
          },
          {
            "id": 437,
            "domain": "redgol.cl",
            "metrics": {
              "impact": 2601,
              "impressions": 18544,
              "valuation": 17166.0,
              "valuation_usd": 21.0551,
              "valuation_by_country": [
                {
                  "chile": 17166.0
                }
              ]
            }
          },
          {
            "id": 455,
            "domain": "radioimagina.cl",
            "metrics": {
              "impact": 1483,
              "impressions": 10193,
              "valuation": 38028.0,
              "valuation_usd": 46.6435,
              "valuation_by_country": [
                {
                  "chile": 38028.0
                }
              ]
            }
          },
          {
            "id": 466,
            "domain": "glamorama.cl",
            "metrics": {
              "impact": 1578,
              "impressions": 20018,
              "valuation": 122592.0,
              "valuation_usd": 150.3661,
              "valuation_by_country": [
                {
                  "chile": 122592.0
                }
              ]
            }
          },
          {
            "id": 680,
            "domain": "meteored.cl",
            "metrics": {
              "impact": 819,
              "impressions": 4774,
              "valuation": 6387.0,
              "valuation_usd": 7.834,
              "valuation_by_country": [
                {
                  "chile": 6387.0
                }
              ]
            }
          },
          {
            "id": 748,
            "domain": "mundorecetas.com",
            "metrics": {
              "impact": 2806,
              "impressions": 21460,
              "valuation": 21028.0,
              "valuation_usd": 25.792,
              "valuation_by_country": [
                {
                  "chile": 21028.0
                }
              ]
            }
          },
          {
            "id": 811,
            "domain": "cosasparatumuro.com",
            "metrics": {
              "impact": 777,
              "impressions": 7253,
              "valuation": 3752.0,
              "valuation_usd": 4.602,
              "valuation_by_country": [
                {
                  "chile": 3752.0
                }
              ]
            }
          },
          {
            "id": 862,
            "domain": "justjared.com",
            "metrics": {
              "impact": 1609,
              "impressions": 20518,
              "valuation": 10338.0,
              "valuation_usd": 12.6801,
              "valuation_by_country": [
                {
                  "chile": 10338.0
                }
              ]
            }
          },
          {
            "id": 869,
            "domain": "usmagazine.com",
            "metrics": {
              "impact": 154,
              "impressions": 1390,
              "valuation": 1017.0,
              "valuation_usd": 1.2474,
              "valuation_by_country": [
                {
                  "chile": 1017.0
                }
              ]
            }
          },
          {
            "id": 931,
            "domain": "lindisima.com",
            "metrics": {
              "impact": 1547,
              "impressions": 12860,
              "valuation": 8161.0,
              "valuation_usd": 10.0099,
              "valuation_by_country": [
                {
                  "chile": 8161.0
                }
              ]
            }
          },
          {
            "id": 1331,
            "domain": "los40.com",
            "metrics": {
              "impact": 1651,
              "impressions": 9130,
              "valuation": 7868.0,
              "valuation_usd": 9.6505,
              "valuation_by_country": [
                {
                  "chile": 7868.0
                }
              ]
            }
          },
          {
            "id": 1418,
            "domain": "hola.com",
            "metrics": {
              "impact": 135447,
              "impressions": 598217,
              "valuation": 776739.0,
              "valuation_usd": 952.7146,
              "valuation_by_country": [
                {
                  "chile": 776739.0
                }
              ]
            }
          },
          {
            "id": 5936,
            "domain": "levelup.com",
            "metrics": {
              "impact": 7431,
              "impressions": 43490,
              "valuation": 33680.0,
              "valuation_usd": 41.3104,
              "valuation_by_country": [
                {
                  "chile": 33680.0
                }
              ]
            }
          },
          {
            "id": 12198,
            "domain": "tarreo.com",
            "metrics": {
              "impact": 7387,
              "impressions": 67553,
              "valuation": 34233.0,
              "valuation_usd": 41.9887,
              "valuation_by_country": [
                {
                  "chile": 34233.0
                }
              ]
            }
          },
          {
            "id": 3,
            "domain": "enfemenino.com",
            "metrics": {
              "impact": 4244,
              "impressions": 24340,
              "valuation": 155159.0,
              "valuation_usd": 190.3113,
              "valuation_by_country": [
                {
                  "chile": 155159.0
                }
              ]
            }
          },
          {
            "id": 28,
            "domain": "foxdeportes.com",
            "metrics": {
              "impact": 493,
              "impressions": 3625,
              "valuation": 2781.0,
              "valuation_usd": 3.4111,
              "valuation_by_country": [
                {
                  "chile": 2781.0
                }
              ]
            }
          },
          {
            "id": 107,
            "domain": "dailymotion.com",
            "metrics": {
              "impact": 8923,
              "impressions": 110125,
              "valuation": 72709.0,
              "valuation_usd": 89.1817,
              "valuation_by_country": [
                {
                  "chile": 72709.0
                }
              ]
            }
          },
          {
            "id": 215,
            "domain": "elpais.com",
            "metrics": {
              "impact": 72708,
              "impressions": 400716,
              "valuation": 331099.0,
              "valuation_usd": 406.1118,
              "valuation_by_country": [
                {
                  "chile": 331099.0
                }
              ]
            }
          },
          {
            "id": 316,
            "domain": "upsocl.com",
            "metrics": {
              "impact": 371,
              "impressions": 1895,
              "valuation": 3698.0,
              "valuation_usd": 4.5358,
              "valuation_by_country": [
                {
                  "chile": 3698.0
                }
              ]
            }
          },
          {
            "id": 319,
            "domain": "definicion.de",
            "metrics": {
              "impact": 207,
              "impressions": 1537,
              "valuation": 1069.0,
              "valuation_usd": 1.3112,
              "valuation_by_country": [
                {
                  "chile": 1069.0
                }
              ]
            }
          },
          {
            "id": 335,
            "domain": "lacuarta.com",
            "metrics": {
              "impact": 34668,
              "impressions": 190471,
              "valuation": 277105.0,
              "valuation_usd": 339.8851,
              "valuation_by_country": [
                {
                  "chile": 277105.0
                }
              ]
            }
          },
          {
            "id": 344,
            "domain": "futuro.cl",
            "metrics": {
              "impact": 443,
              "impressions": 5643,
              "valuation": 26024.0,
              "valuation_usd": 31.9199,
              "valuation_by_country": [
                {
                  "chile": 26024.0
                }
              ]
            }
          },
          {
            "id": 370,
            "domain": "buscabiografias.com",
            "metrics": {
              "impact": 1514,
              "impressions": 8566,
              "valuation": 7462.0,
              "valuation_usd": 9.1526,
              "valuation_by_country": [
                {
                  "chile": 7462.0
                }
              ]
            }
          },
          {
            "id": 372,
            "domain": "ole.com.ar",
            "metrics": {
              "impact": 15243,
              "impressions": 75373,
              "valuation": 72019.0,
              "valuation_usd": 88.3354,
              "valuation_by_country": [
                {
                  "chile": 72019.0
                }
              ]
            }
          },
          {
            "id": 410,
            "domain": "13.cl",
            "metrics": {
              "impact": 2792,
              "impressions": 26563,
              "valuation": 77521.0,
              "valuation_usd": 95.0839,
              "valuation_by_country": [
                {
                  "chile": 77521.0
                }
              ]
            }
          },
          {
            "id": 412,
            "domain": "24horas.cl",
            "metrics": {
              "impact": 24675,
              "impressions": 104949,
              "valuation": 360425.0,
              "valuation_usd": 442.0818,
              "valuation_by_country": [
                {
                  "chile": 360425.0
                }
              ]
            }
          },
          {
            "id": 440,
            "domain": "mega.cl",
            "metrics": {
              "impact": 1100,
              "impressions": 6998,
              "valuation": 19718.0,
              "valuation_usd": 24.1852,
              "valuation_by_country": [
                {
                  "chile": 19718.0
                }
              ]
            }
          },
          {
            "id": 441,
            "domain": "meganoticias.cl",
            "metrics": {
              "impact": 40708,
              "impressions": 168826,
              "valuation": 4355340.0,
              "valuation_usd": 5342.0724,
              "valuation_by_country": [
                {
                  "chile": 4355340.0
                }
              ]
            }
          },
          {
            "id": 448,
            "domain": "biobiochile.cl",
            "metrics": {
              "impact": 44821,
              "impressions": 281803,
              "valuation": 557242.0,
              "valuation_usd": 683.489,
              "valuation_by_country": [
                {
                  "chile": 557242.0
                }
              ]
            }
          },
          {
            "id": 454,
            "domain": "adnradio.cl",
            "metrics": {
              "impact": 627,
              "impressions": 4160,
              "valuation": 1955.0,
              "valuation_usd": 2.3979,
              "valuation_by_country": [
                {
                  "chile": 1955.0
                }
              ]
            }
          },
          {
            "id": 458,
            "domain": "rockandpop.cl",
            "metrics": {
              "impact": 509,
              "impressions": 6891,
              "valuation": 20692.0,
              "valuation_usd": 25.3799,
              "valuation_by_country": [
                {
                  "chile": 20692.0
                }
              ]
            }
          },
          {
            "id": 461,
            "domain": "corazon.cl",
            "metrics": {
              "impact": 11901,
              "impressions": 60926,
              "valuation": 85204.0,
              "valuation_usd": 104.5076,
              "valuation_by_country": [
                {
                  "chile": 85204.0
                }
              ]
            }
          },
          {
            "id": 471,
            "domain": "carolina.cl",
            "metrics": {
              "impact": 3855,
              "impressions": 32330,
              "valuation": 146684.0,
              "valuation_usd": 179.9163,
              "valuation_by_country": [
                {
                  "chile": 146684.0
                }
              ]
            }
          },
          {
            "id": 477,
            "domain": "universitarios.cl",
            "metrics": {
              "impact": 92,
              "impressions": 539,
              "valuation": 313.0,
              "valuation_usd": 0.3839,
              "valuation_by_country": [
                {
                  "chile": 313.0
                }
              ]
            }
          },
          {
            "id": 507,
            "domain": "playfm.cl",
            "metrics": {
              "impact": 1580,
              "impressions": 6605,
              "valuation": 71993.0,
              "valuation_usd": 88.3035,
              "valuation_by_country": [
                {
                  "chile": 71993.0
                }
              ]
            }
          },
          {
            "id": 508,
            "domain": "sonarfm.cl",
            "metrics": {
              "impact": 357,
              "impressions": 1628,
              "valuation": 22774.0,
              "valuation_usd": 27.9336,
              "valuation_by_country": [
                {
                  "chile": 22774.0
                }
              ]
            }
          },
          {
            "id": 538,
            "domain": "paniko.cl",
            "metrics": {
              "impact": 872,
              "impressions": 7000,
              "valuation": 4793.0,
              "valuation_usd": 5.8789,
              "valuation_by_country": [
                {
                  "chile": 4793.0
                }
              ]
            }
          },
          {
            "id": 560,
            "domain": "icarito.cl",
            "metrics": {
              "impact": 504,
              "impressions": 6742,
              "valuation": 11070.0,
              "valuation_usd": 13.578,
              "valuation_by_country": [
                {
                  "chile": 11070.0
                }
              ]
            }
          },
          {
            "id": 601,
            "domain": "tudiscovery.com",
            "metrics": {
              "impact": 28,
              "impressions": 309,
              "valuation": 108.0,
              "valuation_usd": 0.1325,
              "valuation_by_country": [
                {
                  "chile": 108.0
                }
              ]
            }
          },
          {
            "id": 606,
            "domain": "eleconomistaamerica.cl",
            "metrics": {
              "impact": 724,
              "impressions": 9233,
              "valuation": 28537.0,
              "valuation_usd": 35.0023,
              "valuation_by_country": [
                {
                  "chile": 28537.0
                }
              ]
            }
          },
          {
            "id": 620,
            "domain": "capital.cl",
            "metrics": {
              "impact": 375,
              "impressions": 5228,
              "valuation": 5211.0,
              "valuation_usd": 6.3916,
              "valuation_by_country": [
                {
                  "chile": 5211.0
                }
              ]
            }
          },
          {
            "id": 621,
            "domain": "ed.cl",
            "metrics": {
              "impact": 45,
              "impressions": 353,
              "valuation": 186.0,
              "valuation_usd": 0.2281,
              "valuation_by_country": [
                {
                  "chile": 186.0
                }
              ]
            }
          },
          {
            "id": 649,
            "domain": "larojadeportes.cl",
            "metrics": {
              "impact": 149,
              "impressions": 1091,
              "valuation": 826.0,
              "valuation_usd": 1.0131,
              "valuation_by_country": [
                {
                  "chile": 826.0
                }
              ]
            }
          },
          {
            "id": 659,
            "domain": "seleccionchilena.com",
            "metrics": {
              "impact": 167,
              "impressions": 828,
              "valuation": 1912.0,
              "valuation_usd": 2.3452,
              "valuation_by_country": [
                {
                  "chile": 1912.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7076441,
        "title": " Admisión 2021 🏛 Universidad Viña del Mar",
        "landing_page": "uvm.cl/admision",
        "description": "adaptación | articulación | calzado | organismo | pie foto | pierna | producto | ropa calle | sombrerería | árbol",
        "metrics": {
          "count": 2,
          "impact": 543,
          "impressions": 4874,
          "valuation": 4166.0,
          "valuation_usd": 5.1098,
          "valuation_by_country": [
            {
              "chile": 4166.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-25T00:00:50.000Z",
          "end": "2021-01-25T00:00:50.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_091fb3e3b50a00e2a85cd7364267cb85.jpg"
          },
          "ad_measurements": {
            "height": 90,
            "width": 468
          }
        },
        "brand": {
          "id": 22818,
          "name": "universidad viña del mar  uvm"
        },
        "industry": {
          "id": 319,
          "name": "educación y formación - universidades y enseñanza superior"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
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
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
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
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
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
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 520,
            "domain": "peseu.com",
            "metrics": {
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7549772,
        "title": "Avanza Ecografías – Centro Ecográfico y Médico",
        "landing_page": "avanzaecografias.cl",
        "description": "producto",
        "metrics": {
          "count": 1,
          "impact": 586,
          "impressions": 3000,
          "valuation": 3275.0,
          "valuation_usd": 4.017,
          "valuation_by_country": [
            {
              "chile": 3275.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-25T00:00:54.000Z",
          "end": "2021-01-25T00:00:54.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_230330bfcdfb95ddd400c3fdb60e32de.jpg"
          },
          "ad_measurements": {
            "height": 250,
            "width": 300
          }
        },
        "brand": {
          "id": 269291,
          "name": "avanza centro ecográfico"
        },
        "industry": {
          "id": 274,
          "name": "salud - clínicas, hospitales y centros médicos"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
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
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
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
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
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
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 741,
            "domain": "sobrecelulasmadre.com",
            "metrics": {
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6863067,
        "title": "Google Ads: Atrae a más clientes con publicidad en línea",
        "landing_page": "ads.google.com/intl/es-419_cl/getstarted",
        "description": "aprendizaje | captura pantalla | diseño | dispositivo electronico | producto | sitio web | tecnología | trabajo",
        "metrics": {
          "count": 1,
          "impact": 389,
          "impressions": 500,
          "valuation": 1283.0,
          "valuation_usd": 1.5737,
          "valuation_by_country": [
            {
              "chile": 1283.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-25T00:00:11.000Z",
          "end": "2021-01-25T00:00:11.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_cbeb8be51ee8179ced68fbd1a5967f03.jpg"
          },
          "ad_measurements": {
            "height": 637,
            "width": 468
          }
        },
        "brand": {
          "id": 193765,
          "name": "google ads"
        },
        "industry": {
          "id": 280,
          "name": "servicios públicos y privados - consultorías y servicios empresariales"
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
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
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
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
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
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
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
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 46,
            "domain": "webdelabelleza.com",
            "metrics": {
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7680906,
        "title": "Mapa Satelital",
        "landing_page": "satellite-map.gosur.com/es",
        "description": "azul | captura pantalla | documento | línea | marca | paralelo",
        "metrics": {
          "count": 2,
          "impact": 252,
          "impressions": 528,
          "valuation": 642.0,
          "valuation_usd": 0.7874,
          "valuation_by_country": [
            {
              "chile": 642.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-25T00:00:09.000Z",
          "end": "2021-01-25T00:00:09.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_26d09292f03c4883324bd4c07e2384a6.jpg"
          },
          "ad_measurements": {
            "height": 390,
            "width": 468
          }
        },
        "brand": {
          "id": 72828,
          "name": "go sur"
        },
        "industry": {
          "id": 298,
          "name": "transporte, viajes y turismo - varios"
        },
        "countries": [
          {
            "id": 1,
            "name": "chile",
            "metrics": {
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
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
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
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
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
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
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 7419,
            "domain": "americadigital.com",
            "metrics": {
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites": [
      {
        "id": 144,
        "domain": "facebook.com",
        "metrics": {
          "impact": 16422352,
          "impressions": 105722320,
          "valuation": 164368798.0,
          "valuation_usd": 201607.6864,
          "valuation_by_country": [
            {
              "chile": 164368798.0
            }
          ]
        }
      },
      {
        "id": 147,
        "domain": "youtube.com",
        "metrics": {
          "impact": 23355327,
          "impressions": 210195148,
          "valuation": 102655773.0,
          "valuation_usd": 125913.1486,
          "valuation_by_country": [
            {
              "chile": 102655773.0
            }
          ]
        }
      },
      {
        "id": 441,
        "domain": "meganoticias.cl",
        "metrics": {
          "impact": 40708,
          "impressions": 168826,
          "valuation": 4355340.0,
          "valuation_usd": 5342.0724,
          "valuation_by_country": [
            {
              "chile": 4355340.0
            }
          ]
        }
      },
      {
        "id": 664,
        "domain": "portalinmobiliario.com",
        "metrics": {
          "impact": 98400,
          "impressions": 503804,
          "valuation": 3207952.0,
          "valuation_usd": 3934.7357,
          "valuation_by_country": [
            {
              "chile": 3207952.0
            }
          ]
        }
      },
      {
        "id": 341,
        "domain": "publimetro.cl",
        "metrics": {
          "impact": 62639,
          "impressions": 242817,
          "valuation": 894803.0,
          "valuation_usd": 1097.5268,
          "valuation_by_country": [
            {
              "chile": 894803.0
            }
          ]
        }
      },
      {
        "id": 1418,
        "domain": "hola.com",
        "metrics": {
          "impact": 135447,
          "impressions": 598217,
          "valuation": 776739.0,
          "valuation_usd": 952.7146,
          "valuation_by_country": [
            {
              "chile": 776739.0
            }
          ]
        }
      },
      {
        "id": 6706,
        "domain": "dafiti.cl",
        "metrics": {
          "impact": 105520,
          "impressions": 1475993,
          "valuation": 685955.0,
          "valuation_usd": 841.3629,
          "valuation_by_country": [
            {
              "chile": 685955.0
            }
          ]
        }
      },
      {
        "id": 8114,
        "domain": "animeflv.net",
        "metrics": {
          "impact": 88207,
          "impressions": 1233816,
          "valuation": 585647.0,
          "valuation_usd": 718.3294,
          "valuation_by_country": [
            {
              "chile": 585647.0
            }
          ]
        }
      },
      {
        "id": 448,
        "domain": "biobiochile.cl",
        "metrics": {
          "impact": 44821,
          "impressions": 281803,
          "valuation": 557242.0,
          "valuation_usd": 683.489,
          "valuation_by_country": [
            {
              "chile": 557242.0
            }
          ]
        }
      },
      {
        "id": 8042,
        "domain": "twitch.tv",
        "metrics": {
          "impact": 68415,
          "impressions": 956965,
          "valuation": 481605.0,
          "valuation_usd": 590.7159,
          "valuation_by_country": [
            {
              "chile": 481605.0
            }
          ]
        }
      },
      {
        "id": 7448,
        "domain": "fandom.com",
        "metrics": {
          "impact": 65768,
          "impressions": 585564,
          "valuation": 441628.0,
          "valuation_usd": 541.6819,
          "valuation_by_country": [
            {
              "chile": 441628.0
            }
          ]
        }
      },
      {
        "id": 674,
        "domain": "trabajando.cl",
        "metrics": {
          "impact": 60736,
          "impressions": 554106,
          "valuation": 440713.0,
          "valuation_usd": 540.5596,
          "valuation_by_country": [
            {
              "chile": 440713.0
            }
          ]
        }
      },
      {
        "id": 333,
        "domain": "latercera.com",
        "metrics": {
          "impact": 25863,
          "impressions": 99311,
          "valuation": 408583.0,
          "valuation_usd": 501.1503,
          "valuation_by_country": [
            {
              "chile": 408583.0
            }
          ]
        }
      },
      {
        "id": 412,
        "domain": "24horas.cl",
        "metrics": {
          "impact": 24675,
          "impressions": 104949,
          "valuation": 360425.0,
          "valuation_usd": 442.0818,
          "valuation_by_country": [
            {
              "chile": 360425.0
            }
          ]
        }
      },
      {
        "id": 505,
        "domain": "radioagricultura.cl",
        "metrics": {
          "impact": 6890,
          "impressions": 26457,
          "valuation": 344710.0,
          "valuation_usd": 422.8064,
          "valuation_by_country": [
            {
              "chile": 344710.0
            }
          ]
        }
      },
      {
        "id": 215,
        "domain": "elpais.com",
        "metrics": {
          "impact": 72708,
          "impressions": 400716,
          "valuation": 331099.0,
          "valuation_usd": 406.1118,
          "valuation_by_country": [
            {
              "chile": 331099.0
            }
          ]
        }
      },
      {
        "id": 407,
        "domain": "computrabajo.cl",
        "metrics": {
          "impact": 36832,
          "impressions": 515186,
          "valuation": 320302.0,
          "valuation_usd": 392.8686,
          "valuation_by_country": [
            {
              "chile": 320302.0
            }
          ]
        }
      },
      {
        "id": 717,
        "domain": "despegar.cl",
        "metrics": {
          "impact": 6711,
          "impressions": 93859,
          "valuation": 304208.0,
          "valuation_usd": 373.1284,
          "valuation_by_country": [
            {
              "chile": 304208.0
            }
          ]
        }
      },
      {
        "id": 413,
        "domain": "msn.com",
        "metrics": {
          "impact": 39938,
          "impressions": 417526,
          "valuation": 303528.0,
          "valuation_usd": 372.2944,
          "valuation_by_country": [
            {
              "chile": 303528.0
            }
          ]
        }
      },
      {
        "id": 14197,
        "domain": "knasta.cl",
        "metrics": {
          "impact": 45373,
          "impressions": 634660,
          "valuation": 301011.0,
          "valuation_usd": 369.2071,
          "valuation_by_country": [
            {
              "chile": 301011.0
            }
          ]
        }
      },
      {
        "id": 335,
        "domain": "lacuarta.com",
        "metrics": {
          "impact": 34668,
          "impressions": 190471,
          "valuation": 277105.0,
          "valuation_usd": 339.8851,
          "valuation_by_country": [
            {
              "chile": 277105.0
            }
          ]
        }
      },
      {
        "id": 16208,
        "domain": "doramasmp4.com",
        "metrics": {
          "impact": 40316,
          "impressions": 237191,
          "valuation": 223655.0,
          "valuation_usd": 274.3256,
          "valuation_by_country": [
            {
              "chile": 223655.0
            }
          ]
        }
      },
      {
        "id": 851,
        "domain": "as.com",
        "metrics": {
          "impact": 10352,
          "impressions": 93549,
          "valuation": 221796.0,
          "valuation_usd": 272.0454,
          "valuation_by_country": [
            {
              "chile": 221796.0
            }
          ]
        }
      },
      {
        "id": 6644,
        "domain": "chess.com",
        "metrics": {
          "impact": 43467,
          "impressions": 479556,
          "valuation": 201675.0,
          "valuation_usd": 247.3659,
          "valuation_by_country": [
            {
              "chile": 201675.0
            }
          ]
        }
      },
      {
        "id": 1318,
        "domain": "elmundo.es",
        "metrics": {
          "impact": 31758,
          "impressions": 423332,
          "valuation": 201665.0,
          "valuation_usd": 247.3536,
          "valuation_by_country": [
            {
              "chile": 201665.0
            }
          ]
        }
      },
      {
        "id": 4821,
        "domain": "reddit.com",
        "metrics": {
          "impact": 26295,
          "impressions": 294864,
          "valuation": 198210.0,
          "valuation_usd": 243.1158,
          "valuation_by_country": [
            {
              "chile": 198210.0
            }
          ]
        }
      },
      {
        "id": 853,
        "domain": "t13.cl",
        "metrics": {
          "impact": 11858,
          "impressions": 70797,
          "valuation": 181140.0,
          "valuation_usd": 222.1785,
          "valuation_by_country": [
            {
              "chile": 181140.0
            }
          ]
        }
      },
      {
        "id": 701,
        "domain": "tripadvisor.cl",
        "metrics": {
          "impact": 18091,
          "impressions": 253041,
          "valuation": 159490.0,
          "valuation_usd": 195.6236,
          "valuation_by_country": [
            {
              "chile": 159490.0
            }
          ]
        }
      },
      {
        "id": 1142,
        "domain": "ebay.com",
        "metrics": {
          "impact": 21040,
          "impressions": 294297,
          "valuation": 159108.0,
          "valuation_usd": 195.155,
          "valuation_by_country": [
            {
              "chile": 159108.0
            }
          ]
        }
      },
      {
        "id": 11221,
        "domain": "amazon.es",
        "metrics": {
          "impact": 22225,
          "impressions": 310871,
          "valuation": 158796.0,
          "valuation_usd": 194.7723,
          "valuation_by_country": [
            {
              "chile": 158796.0
            }
          ]
        }
      },
      {
        "id": 3,
        "domain": "enfemenino.com",
        "metrics": {
          "impact": 4244,
          "impressions": 24340,
          "valuation": 155159.0,
          "valuation_usd": 190.3113,
          "valuation_by_country": [
            {
              "chile": 155159.0
            }
          ]
        }
      },
      {
        "id": 1350,
        "domain": "20minutos.es",
        "metrics": {
          "impact": 30220,
          "impressions": 154725,
          "valuation": 151149.0,
          "valuation_usd": 185.3929,
          "valuation_by_country": [
            {
              "chile": 151149.0
            }
          ]
        }
      },
      {
        "id": 6359,
        "domain": "discogs.com",
        "metrics": {
          "impact": 25462,
          "impressions": 266914,
          "valuation": 147253.0,
          "valuation_usd": 180.6142,
          "valuation_by_country": [
            {
              "chile": 147253.0
            }
          ]
        }
      },
      {
        "id": 471,
        "domain": "carolina.cl",
        "metrics": {
          "impact": 3855,
          "impressions": 32330,
          "valuation": 146684.0,
          "valuation_usd": 179.9163,
          "valuation_by_country": [
            {
              "chile": 146684.0
            }
          ]
        }
      },
      {
        "id": 904,
        "domain": "mujerhoy.com",
        "metrics": {
          "impact": 940,
          "impressions": 13140,
          "valuation": 141241.0,
          "valuation_usd": 173.2401,
          "valuation_by_country": [
            {
              "chile": 141241.0
            }
          ]
        }
      },
      {
        "id": 3348,
        "domain": "depor.com",
        "metrics": {
          "impact": 24994,
          "impressions": 156953,
          "valuation": 134706.0,
          "valuation_usd": 165.2246,
          "valuation_by_country": [
            {
              "chile": 134706.0
            }
          ]
        }
      },
      {
        "id": 466,
        "domain": "glamorama.cl",
        "metrics": {
          "impact": 1578,
          "impressions": 20018,
          "valuation": 122592.0,
          "valuation_usd": 150.3661,
          "valuation_by_country": [
            {
              "chile": 122592.0
            }
          ]
        }
      },
      {
        "id": 721,
        "domain": "revistamujer.cl",
        "metrics": {
          "impact": 2347,
          "impressions": 15925,
          "valuation": 101152.0,
          "valuation_usd": 124.0687,
          "valuation_by_country": [
            {
              "chile": 101152.0
            }
          ]
        }
      },
      {
        "id": 16205,
        "domain": "plataformaarquitectura.cl",
        "metrics": {
          "impact": 16691,
          "impressions": 216460,
          "valuation": 85927.0,
          "valuation_usd": 105.3944,
          "valuation_by_country": [
            {
              "chile": 85927.0
            }
          ]
        }
      },
      {
        "id": 461,
        "domain": "corazon.cl",
        "metrics": {
          "impact": 11759,
          "impressions": 60203,
          "valuation": 85127.0,
          "valuation_usd": 104.4131,
          "valuation_by_country": [
            {
              "chile": 85127.0
            }
          ]
        }
      },
      {
        "id": 18283,
        "domain": "exe.app",
        "metrics": {
          "impact": 13231,
          "impressions": 67739,
          "valuation": 84482.0,
          "valuation_usd": 103.622,
          "valuation_by_country": [
            {
              "chile": 84482.0
            }
          ]
        }
      },
      {
        "id": 269,
        "domain": "diariofemenino.com",
        "metrics": {
          "impact": 4443,
          "impressions": 22745,
          "valuation": 81681.0,
          "valuation_usd": 100.1864,
          "valuation_by_country": [
            {
              "chile": 81681.0
            }
          ]
        }
      },
      {
        "id": 1530,
        "domain": "muyinteresante.es",
        "metrics": {
          "impact": 14730,
          "impressions": 125816,
          "valuation": 79655.0,
          "valuation_usd": 97.7014,
          "valuation_by_country": [
            {
              "chile": 79655.0
            }
          ]
        }
      },
      {
        "id": 1366,
        "domain": "elperiodico.com",
        "metrics": {
          "impact": 17540,
          "impressions": 96053,
          "valuation": 79497.0,
          "valuation_usd": 97.5076,
          "valuation_by_country": [
            {
              "chile": 79497.0
            }
          ]
        }
      },
      {
        "id": 410,
        "domain": "13.cl",
        "metrics": {
          "impact": 2792,
          "impressions": 26563,
          "valuation": 77521.0,
          "valuation_usd": 95.0839,
          "valuation_by_country": [
            {
              "chile": 77521.0
            }
          ]
        }
      },
      {
        "id": 107,
        "domain": "dailymotion.com",
        "metrics": {
          "impact": 8923,
          "impressions": 110125,
          "valuation": 72709.0,
          "valuation_usd": 89.1817,
          "valuation_by_country": [
            {
              "chile": 72709.0
            }
          ]
        }
      },
      {
        "id": 372,
        "domain": "ole.com.ar",
        "metrics": {
          "impact": 15243,
          "impressions": 75373,
          "valuation": 72019.0,
          "valuation_usd": 88.3354,
          "valuation_by_country": [
            {
              "chile": 72019.0
            }
          ]
        }
      },
      {
        "id": 507,
        "domain": "playfm.cl",
        "metrics": {
          "impact": 1580,
          "impressions": 6605,
          "valuation": 71993.0,
          "valuation_usd": 88.3035,
          "valuation_by_country": [
            {
              "chile": 71993.0
            }
          ]
        }
      },
      {
        "id": 1440,
        "domain": "elconfidencial.com",
        "metrics": {
          "impact": 7035,
          "impressions": 98402,
          "valuation": 66226.0,
          "valuation_usd": 81.23,
          "valuation_by_country": [
            {
              "chile": 66226.0
            }
          ]
        }
      },
      {
        "id": 2129,
        "domain": "stackoverflow.com",
        "metrics": {
          "impact": 10014,
          "impressions": 140072,
          "valuation": 64960.0,
          "valuation_usd": 79.6771,
          "valuation_by_country": [
            {
              "chile": 64960.0
            }
          ]
        }
      }
    ],
    "date_range": {
      "start": "2021-01-25T00:00:01.000Z",
      "end": "2021-01-25T00:00:54.000Z"
    },
    "brands_by_date": [
      {
        "id": 186036,
        "name": "other-brand",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 682,
              "impact": 41864583,
              "impressions": 333815183,
              "valuation": 289740420.0,
              "valuation_usd": 355383.1168,
              "valuation_by_country": [
                {
                  "chile": 289740420.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 22818,
        "name": "universidad viña del mar  uvm",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 269291,
        "name": "avanza centro ecográfico",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 193765,
        "name": "google ads",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 72828,
        "name": "go sur",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
                }
              ]
            }
          }
        ]
      }
    ],
    "industries_by_date": [
      {
        "id": 13,
        "name": "otros",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 682,
              "impact": 41864583,
              "impressions": 333815183,
              "valuation": 289740420.0,
              "valuation_usd": 355383.1168,
              "valuation_by_country": [
                {
                  "chile": 289740420.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 319,
        "name": "educación y formación - universidades y enseñanza superior",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 543,
              "impressions": 4874,
              "valuation": 4166.0,
              "valuation_usd": 5.1098,
              "valuation_by_country": [
                {
                  "chile": 4166.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 274,
        "name": "salud - clínicas, hospitales y centros médicos",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 586,
              "impressions": 3000,
              "valuation": 3275.0,
              "valuation_usd": 4.017,
              "valuation_by_country": [
                {
                  "chile": 3275.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 280,
        "name": "servicios públicos y privados - consultorías y servicios empresariales",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 389,
              "impressions": 500,
              "valuation": 1283.0,
              "valuation_usd": 1.5737,
              "valuation_by_country": [
                {
                  "chile": 1283.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 298,
        "name": "transporte, viajes y turismo - varios",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 252,
              "impressions": 528,
              "valuation": 642.0,
              "valuation_usd": 0.7874,
              "valuation_by_country": [
                {
                  "chile": 642.0
                }
              ]
            }
          }
        ]
      }
    ],
    "websites_by_date": [
      {
        "id": 144,
        "domain": "facebook.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 8,
              "impact": 16422352,
              "impressions": 105722320,
              "valuation": 164368798.0,
              "valuation_usd": 201607.6864,
              "valuation_by_country": [
                {
                  "chile": 164368798.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 147,
        "domain": "youtube.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 6,
              "impact": 23355327,
              "impressions": 210195148,
              "valuation": 102655773.0,
              "valuation_usd": 125913.1486,
              "valuation_by_country": [
                {
                  "chile": 102655773.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 441,
        "domain": "meganoticias.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 40708,
              "impressions": 168826,
              "valuation": 4355340.0,
              "valuation_usd": 5342.0724,
              "valuation_by_country": [
                {
                  "chile": 4355340.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 664,
        "domain": "portalinmobiliario.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 98400,
              "impressions": 503804,
              "valuation": 3207952.0,
              "valuation_usd": 3934.7357,
              "valuation_by_country": [
                {
                  "chile": 3207952.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 341,
        "domain": "publimetro.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 3,
              "impact": 62639,
              "impressions": 242817,
              "valuation": 894803.0,
              "valuation_usd": 1097.5268,
              "valuation_by_country": [
                {
                  "chile": 894803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1418,
        "domain": "hola.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 3,
              "impact": 135447,
              "impressions": 598217,
              "valuation": 776739.0,
              "valuation_usd": 952.7146,
              "valuation_by_country": [
                {
                  "chile": 776739.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6706,
        "domain": "dafiti.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 105520,
              "impressions": 1475993,
              "valuation": 685955.0,
              "valuation_usd": 841.3629,
              "valuation_by_country": [
                {
                  "chile": 685955.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 8114,
        "domain": "animeflv.net",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 88207,
              "impressions": 1233816,
              "valuation": 585647.0,
              "valuation_usd": 718.3294,
              "valuation_by_country": [
                {
                  "chile": 585647.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 448,
        "domain": "biobiochile.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 44821,
              "impressions": 281803,
              "valuation": 557242.0,
              "valuation_usd": 683.489,
              "valuation_by_country": [
                {
                  "chile": 557242.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 8042,
        "domain": "twitch.tv",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 68415,
              "impressions": 956965,
              "valuation": 481605.0,
              "valuation_usd": 590.7159,
              "valuation_by_country": [
                {
                  "chile": 481605.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7448,
        "domain": "fandom.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 65768,
              "impressions": 585564,
              "valuation": 441628.0,
              "valuation_usd": 541.6819,
              "valuation_by_country": [
                {
                  "chile": 441628.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 674,
        "domain": "trabajando.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 60736,
              "impressions": 554106,
              "valuation": 440713.0,
              "valuation_usd": 540.5596,
              "valuation_by_country": [
                {
                  "chile": 440713.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 333,
        "domain": "latercera.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 25863,
              "impressions": 99311,
              "valuation": 408583.0,
              "valuation_usd": 501.1503,
              "valuation_by_country": [
                {
                  "chile": 408583.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 412,
        "domain": "24horas.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 24675,
              "impressions": 104949,
              "valuation": 360425.0,
              "valuation_usd": 442.0818,
              "valuation_by_country": [
                {
                  "chile": 360425.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 505,
        "domain": "radioagricultura.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 6890,
              "impressions": 26457,
              "valuation": 344710.0,
              "valuation_usd": 422.8064,
              "valuation_by_country": [
                {
                  "chile": 344710.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 215,
        "domain": "elpais.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 72708,
              "impressions": 400716,
              "valuation": 331099.0,
              "valuation_usd": 406.1118,
              "valuation_by_country": [
                {
                  "chile": 331099.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 407,
        "domain": "computrabajo.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 36832,
              "impressions": 515186,
              "valuation": 320302.0,
              "valuation_usd": 392.8686,
              "valuation_by_country": [
                {
                  "chile": 320302.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 717,
        "domain": "despegar.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 6711,
              "impressions": 93859,
              "valuation": 304208.0,
              "valuation_usd": 373.1284,
              "valuation_by_country": [
                {
                  "chile": 304208.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 413,
        "domain": "msn.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 3,
              "impact": 39938,
              "impressions": 417526,
              "valuation": 303528.0,
              "valuation_usd": 372.2944,
              "valuation_by_country": [
                {
                  "chile": 303528.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 14197,
        "domain": "knasta.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 45373,
              "impressions": 634660,
              "valuation": 301011.0,
              "valuation_usd": 369.2071,
              "valuation_by_country": [
                {
                  "chile": 301011.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 335,
        "domain": "lacuarta.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 34668,
              "impressions": 190471,
              "valuation": 277105.0,
              "valuation_usd": 339.8851,
              "valuation_by_country": [
                {
                  "chile": 277105.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 16208,
        "domain": "doramasmp4.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 40316,
              "impressions": 237191,
              "valuation": 223655.0,
              "valuation_usd": 274.3256,
              "valuation_by_country": [
                {
                  "chile": 223655.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 851,
        "domain": "as.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 10352,
              "impressions": 93549,
              "valuation": 221796.0,
              "valuation_usd": 272.0454,
              "valuation_by_country": [
                {
                  "chile": 221796.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6644,
        "domain": "chess.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 3,
              "impact": 43467,
              "impressions": 479556,
              "valuation": 201675.0,
              "valuation_usd": 247.3659,
              "valuation_by_country": [
                {
                  "chile": 201675.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1318,
        "domain": "elmundo.es",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 31758,
              "impressions": 423332,
              "valuation": 201665.0,
              "valuation_usd": 247.3536,
              "valuation_by_country": [
                {
                  "chile": 201665.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4821,
        "domain": "reddit.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 26295,
              "impressions": 294864,
              "valuation": 198210.0,
              "valuation_usd": 243.1158,
              "valuation_by_country": [
                {
                  "chile": 198210.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 853,
        "domain": "t13.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 11858,
              "impressions": 70797,
              "valuation": 181140.0,
              "valuation_usd": 222.1785,
              "valuation_by_country": [
                {
                  "chile": 181140.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 701,
        "domain": "tripadvisor.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 18091,
              "impressions": 253041,
              "valuation": 159490.0,
              "valuation_usd": 195.6236,
              "valuation_by_country": [
                {
                  "chile": 159490.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1142,
        "domain": "ebay.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 21040,
              "impressions": 294297,
              "valuation": 159108.0,
              "valuation_usd": 195.155,
              "valuation_by_country": [
                {
                  "chile": 159108.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 11221,
        "domain": "amazon.es",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 22225,
              "impressions": 310871,
              "valuation": 158796.0,
              "valuation_usd": 194.7723,
              "valuation_by_country": [
                {
                  "chile": 158796.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 3,
        "domain": "enfemenino.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 4244,
              "impressions": 24340,
              "valuation": 155159.0,
              "valuation_usd": 190.3113,
              "valuation_by_country": [
                {
                  "chile": 155159.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1350,
        "domain": "20minutos.es",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 30220,
              "impressions": 154725,
              "valuation": 151149.0,
              "valuation_usd": 185.3929,
              "valuation_by_country": [
                {
                  "chile": 151149.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6359,
        "domain": "discogs.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 25462,
              "impressions": 266914,
              "valuation": 147253.0,
              "valuation_usd": 180.6142,
              "valuation_by_country": [
                {
                  "chile": 147253.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 471,
        "domain": "carolina.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 3855,
              "impressions": 32330,
              "valuation": 146684.0,
              "valuation_usd": 179.9163,
              "valuation_by_country": [
                {
                  "chile": 146684.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 904,
        "domain": "mujerhoy.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 940,
              "impressions": 13140,
              "valuation": 141241.0,
              "valuation_usd": 173.2401,
              "valuation_by_country": [
                {
                  "chile": 141241.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 3348,
        "domain": "depor.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 24994,
              "impressions": 156953,
              "valuation": 134706.0,
              "valuation_usd": 165.2246,
              "valuation_by_country": [
                {
                  "chile": 134706.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 466,
        "domain": "glamorama.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 3,
              "impact": 1578,
              "impressions": 20018,
              "valuation": 122592.0,
              "valuation_usd": 150.3661,
              "valuation_by_country": [
                {
                  "chile": 122592.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 721,
        "domain": "revistamujer.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 2347,
              "impressions": 15925,
              "valuation": 101152.0,
              "valuation_usd": 124.0687,
              "valuation_by_country": [
                {
                  "chile": 101152.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 16205,
        "domain": "plataformaarquitectura.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 16691,
              "impressions": 216460,
              "valuation": 85927.0,
              "valuation_usd": 105.3944,
              "valuation_by_country": [
                {
                  "chile": 85927.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 461,
        "domain": "corazon.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 11759,
              "impressions": 60203,
              "valuation": 85127.0,
              "valuation_usd": 104.4131,
              "valuation_by_country": [
                {
                  "chile": 85127.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 18283,
        "domain": "exe.app",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 13231,
              "impressions": 67739,
              "valuation": 84482.0,
              "valuation_usd": 103.622,
              "valuation_by_country": [
                {
                  "chile": 84482.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 269,
        "domain": "diariofemenino.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 4443,
              "impressions": 22745,
              "valuation": 81681.0,
              "valuation_usd": 100.1864,
              "valuation_by_country": [
                {
                  "chile": 81681.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1530,
        "domain": "muyinteresante.es",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 14730,
              "impressions": 125816,
              "valuation": 79655.0,
              "valuation_usd": 97.7014,
              "valuation_by_country": [
                {
                  "chile": 79655.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1366,
        "domain": "elperiodico.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 17540,
              "impressions": 96053,
              "valuation": 79497.0,
              "valuation_usd": 97.5076,
              "valuation_by_country": [
                {
                  "chile": 79497.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 410,
        "domain": "13.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 2792,
              "impressions": 26563,
              "valuation": 77521.0,
              "valuation_usd": 95.0839,
              "valuation_by_country": [
                {
                  "chile": 77521.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 107,
        "domain": "dailymotion.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 8923,
              "impressions": 110125,
              "valuation": 72709.0,
              "valuation_usd": 89.1817,
              "valuation_by_country": [
                {
                  "chile": 72709.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 372,
        "domain": "ole.com.ar",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 15243,
              "impressions": 75373,
              "valuation": 72019.0,
              "valuation_usd": 88.3354,
              "valuation_by_country": [
                {
                  "chile": 72019.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 507,
        "domain": "playfm.cl",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 2,
              "impact": 1580,
              "impressions": 6605,
              "valuation": 71993.0,
              "valuation_usd": 88.3035,
              "valuation_by_country": [
                {
                  "chile": 71993.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1440,
        "domain": "elconfidencial.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 7035,
              "impressions": 98402,
              "valuation": 66226.0,
              "valuation_usd": 81.23,
              "valuation_by_country": [
                {
                  "chile": 66226.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 2129,
        "domain": "stackoverflow.com",
        "metrics_by_date": [
          {
            "date": "2021-01-25T00:00:00.000Z",
            "date_int": 1611532800000,
            "metrics": {
              "count": 1,
              "impact": 10014,
              "impressions": 140072,
              "valuation": 64960.0,
              "valuation_usd": 79.6771,
              "valuation_by_country": [
                {
                  "chile": 64960.0
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
            "impact": 41866353,
            "impressions": 333824085,
            "valuation": 289749786.0,
            "valuation_usd": 355394.6047
          }
        }
      ],
      "ad_types": [
        {
          "id": 2,
          "name": "video",
          "metrics": {
            "impact": 24665852,
            "impressions": 166904863,
            "valuation": 165542938.0,
            "valuation_usd": 203047.836
          }
        },
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 17192631,
            "impressions": 166871780,
            "valuation": 124184566.0,
            "valuation_usd": 152319.4386
          }
        },
        {
          "id": 3,
          "name": "text",
          "metrics": {
            "impact": 7870,
            "impressions": 47441,
            "valuation": 22282.0,
            "valuation_usd": 27.3301
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 22120083,
            "impressions": 95574851,
            "valuation": 184465449.0,
            "valuation_usd": 226257.3728
          }
        },
        {
          "id": 1,
          "name": "desktop",
          "metrics": {
            "impact": 19746270,
            "impressions": 238249233,
            "valuation": 105284337.0,
            "valuation_usd": 129137.232
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2021-01-25T00:00:00.000Z",
          "date_int": 1611532800000,
          "metrics": {
            "impact": 41866353,
            "impressions": 333824085,
            "valuation": 289749786.0,
            "valuation_usd": 355394.6047,
            "valuation_by_country": [
              {
                "chile": 289749786.0
              }
            ]
          }
        }
      ],
      "total_impressions": 333824085,
      "total_impact": 41866353,
      "total_valuation": 289749786.0,
      "total_valuation_usd": 355394.6047,
      "position": {
        "first_scroll": 0.0029069767441860465,
        "second_scroll": 0.0,
        "third_or_more_scroll": 0.997093023255814
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2021-01-25T00:00:01.000Z",
      "end": "2021-01-25T00:00:54.000Z"
    }
  },
  "api_hits": {
    "consumed": 1,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
