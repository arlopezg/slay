> Ejemplo de petición

```shell
curl -k 'http://clientela.admetricks.com/newdeals-report/' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Token YOUR_TOKEN' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-binary '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-07T00:00:00.000","end":"2021-01-09T00:00:59.999","group_by":"day"},"websites":{"our_sites":[{"id":144,"domain":"facebook.com"}],"include":[{"id":147,"domain":"youtube.com","last_seen":"2021-01-13T17:56:36Z"}]}}'
```

```python
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json;charset=UTF-8',
}

data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-07T00:00:00.000","end":"2021-01-09T00:00:59.999","group_by":"day"},"websites":{"our_sites":[{"id":144,"domain":"facebook.com"}],"include":[{"id":147,"domain":"youtube.com","last_seen":"2021-01-13T17:56:36Z"}]}}'

response = requests.post('http://clientela.admetricks.com/newdeals-report/', headers=headers, data=data, verify=False)
```

```javascript
var fetch = require("node-fetch");

fetch(
  "http://clientela.admetricks.com/newdeals-report/",
  {
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
      countries: { include: [{ id: 3 }] },
      devices: { include: [{ id: 1 }, { id: 2 }] },
      date_range: {
        start: "2021-01-07T00:00:00.000",
        end: "2021-01-09T00:00:59.999",
        group_by: "day",
      },
      websites: {
        our_sites: [{ id: 144, domain: "facebook.com" }],
        include: [
          { id: 147, domain: "youtube.com", last_seen: "2021-01-13T17:56:36Z" },
        ],
      },
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
    'authorization' => 'Token YOUR_TOKEN',
    'content-type' => 'application/json;charset=UTF-8'
);
$data = '{"order_by":"valuation","ad_types":{"include":[{"id":1},{"id":2},{"id":3}]},"countries":{"include":[{"id":3}]},"devices":{"include":[{"id":1},{"id":2}]},"date_range":{"start":"2021-01-07T00:00:00.000","end":"2021-01-09T00:00:59.999","group_by":"day"},"websites":{"our_sites":[{"id":144,"domain":"facebook.com"}],"include":[{"id":147,"domain":"youtube.com","last_seen":"2021-01-13T17:56:36Z"}]}}';
$response = Requests::post('http://clientela.admetricks.com/newdeals-report/', $headers, $data);
```

> Ejemplo de respuesta exitosa

```json
{
  "data": {
    "countries": [
      {
        "id": 3,
        "name": "argentina",
        "metrics": {
          "impact": 149562526,
          "impressions": 1366741881,
          "valuation": 146394419.0,
          "valuation_usd": 800017.1628,
          "valuation_by_country": [
            {
              "argentina": 146394419.0
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
          "impact": 69472023,
          "impressions": 699233284,
          "valuation": 79310534.0,
          "valuation_usd": 433416.7164,
          "valuation_by_country": [
            {
              "argentina": 79310534.0
            }
          ]
        }
      },
      {
        "id": 2,
        "name": "video",
        "metrics": {
          "impact": 80090503,
          "impressions": 667508597,
          "valuation": 67083885.0,
          "valuation_usd": 366600.4463,
          "valuation_by_country": [
            {
              "argentina": 67083885.0
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
          "impact": 58376882,
          "impressions": 252647400,
          "valuation": 93309685.0,
          "valuation_usd": 509919.3669,
          "valuation_by_country": [
            {
              "argentina": 93309685.0
            }
          ]
        }
      },
      {
        "id": 1,
        "name": "desktop",
        "metrics": {
          "impact": 91185644,
          "impressions": 1114094481,
          "valuation": 53084734.0,
          "valuation_usd": 290097.7959,
          "valuation_by_country": [
            {
              "argentina": 53084734.0
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
          "impact": 133660149,
          "impressions": 1190899138,
          "valuation": 140901368.0,
          "valuation_usd": 769998.7023,
          "valuation_by_country": [
            {
              "argentina": 140901368.0
            }
          ]
        }
      },
      {
        "id": 86445,
        "name": "crehana",
        "metrics": {
          "impact": 1812968,
          "impressions": 7399095,
          "valuation": 1233202.0,
          "valuation_usd": 6739.2102,
          "valuation_by_country": [
            {
              "argentina": 1233202.0
            }
          ]
        }
      },
      {
        "id": 12,
        "name": "movistar",
        "metrics": {
          "impact": 1129104,
          "impressions": 3027917,
          "valuation": 565667.0,
          "valuation_usd": 3091.2607,
          "valuation_by_country": [
            {
              "argentina": 565667.0
            }
          ]
        }
      },
      {
        "id": 269275,
        "name": "disney+",
        "metrics": {
          "impact": 1065082,
          "impressions": 8967749,
          "valuation": 386990.0,
          "valuation_usd": 2114.8254,
          "valuation_by_country": [
            {
              "argentina": 386990.0
            }
          ]
        }
      },
      {
        "id": 465,
        "name": "ford",
        "metrics": {
          "impact": 1314765,
          "impressions": 22775945,
          "valuation": 314294.0,
          "valuation_usd": 1717.5559,
          "valuation_by_country": [
            {
              "argentina": 314294.0
            }
          ]
        }
      },
      {
        "id": 39063,
        "name": "tidal",
        "metrics": {
          "impact": 415291,
          "impressions": 1679941,
          "valuation": 303141.0,
          "valuation_usd": 1656.6069,
          "valuation_by_country": [
            {
              "argentina": 303141.0
            }
          ]
        }
      },
      {
        "id": 252857,
        "name": "interactive brokers",
        "metrics": {
          "impact": 441616,
          "impressions": 1018424,
          "valuation": 171146.0,
          "valuation_usd": 935.2798,
          "valuation_by_country": [
            {
              "argentina": 171146.0
            }
          ]
        }
      },
      {
        "id": 558,
        "name": "musimundo",
        "metrics": {
          "impact": 86149,
          "impressions": 1711385,
          "valuation": 162036.0,
          "valuation_usd": 885.4954,
          "valuation_by_country": [
            {
              "argentina": 162036.0
            }
          ]
        }
      },
      {
        "id": 265933,
        "name": "teaching school",
        "metrics": {
          "impact": 404406,
          "impressions": 758817,
          "valuation": 156744.0,
          "valuation_usd": 856.5756,
          "valuation_by_country": [
            {
              "argentina": 156744.0
            }
          ]
        }
      },
      {
        "id": 288728,
        "name": "kaleanders",
        "metrics": {
          "impact": 778643,
          "impressions": 12111376,
          "valuation": 149557.0,
          "valuation_usd": 817.3001,
          "valuation_by_country": [
            {
              "argentina": 149557.0
            }
          ]
        }
      },
      {
        "id": 365577,
        "name": "l2core",
        "metrics": {
          "impact": 363263,
          "impressions": 626323,
          "valuation": 134095.0,
          "valuation_usd": 732.8032,
          "valuation_by_country": [
            {
              "argentina": 134095.0
            }
          ]
        }
      },
      {
        "id": 60384,
        "name": "hsbc bank international",
        "metrics": {
          "impact": 144272,
          "impressions": 707544,
          "valuation": 123962.0,
          "valuation_usd": 677.4283,
          "valuation_by_country": [
            {
              "argentina": 123962.0
            }
          ]
        }
      },
      {
        "id": 392,
        "name": "nba",
        "metrics": {
          "impact": 236212,
          "impressions": 435336,
          "valuation": 100471.0,
          "valuation_usd": 549.0546,
          "valuation_by_country": [
            {
              "argentina": 100471.0
            }
          ]
        }
      },
      {
        "id": 14992,
        "name": "domestika",
        "metrics": {
          "impact": 472517,
          "impressions": 7144113,
          "valuation": 86357.0,
          "valuation_usd": 471.9243,
          "valuation_by_country": [
            {
              "argentina": 86357.0
            }
          ]
        }
      },
      {
        "id": 955,
        "name": "etoro",
        "metrics": {
          "impact": 471950,
          "impressions": 5827105,
          "valuation": 74254.0,
          "valuation_usd": 405.7837,
          "valuation_by_country": [
            {
              "argentina": 74254.0
            }
          ]
        }
      },
      {
        "id": 557,
        "name": "volkswagen",
        "metrics": {
          "impact": 263489,
          "impressions": 5831039,
          "valuation": 68280.0,
          "valuation_usd": 373.137,
          "valuation_by_country": [
            {
              "argentina": 68280.0
            }
          ]
        }
      },
      {
        "id": 18489,
        "name": "macpaw",
        "metrics": {
          "impact": 80187,
          "impressions": 455377,
          "valuation": 56281.0,
          "valuation_usd": 307.5648,
          "valuation_by_country": [
            {
              "argentina": 56281.0
            }
          ]
        }
      },
      {
        "id": 158538,
        "name": "dental",
        "metrics": {
          "impact": 335871,
          "impressions": 5377807,
          "valuation": 54612.0,
          "valuation_usd": 298.444,
          "valuation_by_country": [
            {
              "argentina": 54612.0
            }
          ]
        }
      },
      {
        "id": 12963,
        "name": "bbva banco bilbao vizcaya argentaria",
        "metrics": {
          "impact": 260156,
          "impressions": 4481178,
          "valuation": 53508.0,
          "valuation_usd": 292.4109,
          "valuation_by_country": [
            {
              "argentina": 53508.0
            }
          ]
        }
      },
      {
        "id": 20013,
        "name": "parodontax",
        "metrics": {
          "impact": 301770,
          "impressions": 4043682,
          "valuation": 52575.0,
          "valuation_usd": 287.3122,
          "valuation_by_country": [
            {
              "argentina": 52575.0
            }
          ]
        }
      },
      {
        "id": 79730,
        "name": "semrush",
        "metrics": {
          "impact": 211121,
          "impressions": 4329842,
          "valuation": 50364.0,
          "valuation_usd": 275.2295,
          "valuation_by_country": [
            {
              "argentina": 50364.0
            }
          ]
        }
      },
      {
        "id": 91959,
        "name": "mas vision",
        "metrics": {
          "impact": 66231,
          "impressions": 298614,
          "valuation": 47899.0,
          "valuation_usd": 261.7588,
          "valuation_by_country": [
            {
              "argentina": 47899.0
            }
          ]
        }
      },
      {
        "id": 12900,
        "name": "banco itaú",
        "metrics": {
          "impact": 28127,
          "impressions": 295054,
          "valuation": 46950.0,
          "valuation_usd": 256.5727,
          "valuation_by_country": [
            {
              "argentina": 46950.0
            }
          ]
        }
      },
      {
        "id": 5,
        "name": "directv",
        "metrics": {
          "impact": 257994,
          "impressions": 3580615,
          "valuation": 43581.0,
          "valuation_usd": 238.1617,
          "valuation_by_country": [
            {
              "argentina": 43581.0
            }
          ]
        }
      },
      {
        "id": 2573,
        "name": "wix",
        "metrics": {
          "impact": 174684,
          "impressions": 3582582,
          "valuation": 41300.0,
          "valuation_usd": 225.6965,
          "valuation_by_country": [
            {
              "argentina": 41300.0
            }
          ]
        }
      },
      {
        "id": 130113,
        "name": "gobierno de argentina",
        "metrics": {
          "impact": 24820,
          "impressions": 260356,
          "valuation": 41299.0,
          "valuation_usd": 225.691,
          "valuation_by_country": [
            {
              "argentina": 41299.0
            }
          ]
        }
      },
      {
        "id": 11269,
        "name": "supermercados día",
        "metrics": {
          "impact": 21502,
          "impressions": 225560,
          "valuation": 36077.0,
          "valuation_usd": 197.1538,
          "valuation_by_country": [
            {
              "argentina": 36077.0
            }
          ]
        }
      },
      {
        "id": 564,
        "name": "ericsson",
        "metrics": {
          "impact": 173286,
          "impressions": 2695788,
          "valuation": 34111.0,
          "valuation_usd": 186.41,
          "valuation_by_country": [
            {
              "argentina": 34111.0
            }
          ]
        }
      },
      {
        "id": 1507,
        "name": "grammarly",
        "metrics": {
          "impact": 172860,
          "impressions": 2668836,
          "valuation": 32702.0,
          "valuation_usd": 178.7101,
          "valuation_by_country": [
            {
              "argentina": 32702.0
            }
          ]
        }
      },
      {
        "id": 76251,
        "name": "mindvalley",
        "metrics": {
          "impact": 131253,
          "impressions": 2691854,
          "valuation": 31936.0,
          "valuation_usd": 174.5241,
          "valuation_by_country": [
            {
              "argentina": 31936.0
            }
          ]
        }
      },
      {
        "id": 244020,
        "name": "pony argentina",
        "metrics": {
          "impact": 188846,
          "impressions": 3023716,
          "valuation": 30687.0,
          "valuation_usd": 167.6985,
          "valuation_by_country": [
            {
              "argentina": 30687.0
            }
          ]
        }
      },
      {
        "id": 20936,
        "name": "revolucion digital",
        "metrics": {
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        }
      },
      {
        "id": 354580,
        "name": "toro vino",
        "metrics": {
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        }
      },
      {
        "id": 223057,
        "name": "world of warships",
        "metrics": {
          "impact": 47397,
          "impressions": 2612252,
          "valuation": 27650.0,
          "valuation_usd": 151.1019,
          "valuation_by_country": [
            {
              "argentina": 27650.0
            }
          ]
        }
      },
      {
        "id": 483,
        "name": "open english",
        "metrics": {
          "impact": 130270,
          "impressions": 2244523,
          "valuation": 27524.0,
          "valuation_usd": 150.4133,
          "valuation_by_country": [
            {
              "argentina": 27524.0
            }
          ]
        }
      },
      {
        "id": 194679,
        "name": "saphirus",
        "metrics": {
          "impact": 130078,
          "impressions": 2240589,
          "valuation": 26755.0,
          "valuation_usd": 146.2109,
          "valuation_by_country": [
            {
              "argentina": 26755.0
            }
          ]
        }
      },
      {
        "id": 366830,
        "name": "the hunt exchange",
        "metrics": {
          "impact": 5872,
          "impressions": 208088,
          "valuation": 25916.0,
          "valuation_usd": 141.6259,
          "valuation_by_country": [
            {
              "argentina": 25916.0
            }
          ]
        }
      },
      {
        "id": 253276,
        "name": "farmaonline",
        "metrics": {
          "impact": 166924,
          "impressions": 1751156,
          "valuation": 23213.0,
          "valuation_usd": 126.8546,
          "valuation_by_country": [
            {
              "argentina": 23213.0
            }
          ]
        }
      },
      {
        "id": 114538,
        "name": "kavak",
        "metrics": {
          "impact": 125677,
          "impressions": 1757391,
          "valuation": 22260.0,
          "valuation_usd": 121.6466,
          "valuation_by_country": [
            {
              "argentina": 22260.0
            }
          ]
        }
      },
      {
        "id": 20515,
        "name": "property finder",
        "metrics": {
          "impact": 87630,
          "impressions": 1797192,
          "valuation": 21803.0,
          "valuation_usd": 119.1492,
          "valuation_by_country": [
            {
              "argentina": 21803.0
            }
          ]
        }
      },
      {
        "id": 352069,
        "name": "digital acelerator",
        "metrics": {
          "impact": 87246,
          "impressions": 1789324,
          "valuation": 20265.0,
          "valuation_usd": 110.7443,
          "valuation_by_country": [
            {
              "argentina": 20265.0
            }
          ]
        }
      },
      {
        "id": 365052,
        "name": "hardee's arabia",
        "metrics": {
          "impact": 128484,
          "impressions": 1347894,
          "valuation": 18463.0,
          "valuation_usd": 100.8967,
          "valuation_by_country": [
            {
              "argentina": 18463.0
            }
          ]
        }
      },
      {
        "id": 189089,
        "name": "datemyage",
        "metrics": {
          "impact": 111752,
          "impressions": 1789324,
          "valuation": 17647.0,
          "valuation_usd": 96.4374,
          "valuation_by_country": [
            {
              "argentina": 17647.0
            }
          ]
        }
      },
      {
        "id": 14,
        "name": "banco santander",
        "metrics": {
          "impact": 128108,
          "impressions": 1343960,
          "valuation": 17597.0,
          "valuation_usd": 96.1642,
          "valuation_by_country": [
            {
              "argentina": 17597.0
            }
          ]
        }
      },
      {
        "id": 306,
        "name": "pantene",
        "metrics": {
          "impact": 128108,
          "impressions": 1343960,
          "valuation": 17597.0,
          "valuation_usd": 96.1642,
          "valuation_by_country": [
            {
              "argentina": 17597.0
            }
          ]
        }
      },
      {
        "id": 9982,
        "name": "libertad",
        "metrics": {
          "impact": 128108,
          "impressions": 1343960,
          "valuation": 17596.0,
          "valuation_usd": 96.1587,
          "valuation_by_country": [
            {
              "argentina": 17596.0
            }
          ]
        }
      },
      {
        "id": 284169,
        "name": "kärcher",
        "metrics": {
          "impact": 25220,
          "impressions": 117111,
          "valuation": 17328.0,
          "valuation_usd": 94.6942,
          "valuation_by_country": [
            {
              "argentina": 17328.0
            }
          ]
        }
      },
      {
        "id": 9487,
        "name": "head & shoulders",
        "metrics": {
          "impact": 124096,
          "impressions": 1301858,
          "valuation": 17058.0,
          "valuation_usd": 93.2187,
          "valuation_by_country": [
            {
              "argentina": 17058.0
            }
          ]
        }
      },
      {
        "id": 3752,
        "name": "panadol",
        "metrics": {
          "impact": 86643,
          "impressions": 1347894,
          "valuation": 17056.0,
          "valuation_usd": 93.2077,
          "valuation_by_country": [
            {
              "argentina": 17056.0
            }
          ]
        }
      },
      {
        "id": 201575,
        "name": "tribu digital",
        "metrics": {
          "impact": 121084,
          "impressions": 1270259,
          "valuation": 16995.0,
          "valuation_usd": 92.8744,
          "valuation_by_country": [
            {
              "argentina": 16995.0
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
          "impact": 133660149,
          "impressions": 1190899138,
          "valuation": 140901368.0,
          "valuation_usd": 769998.7023,
          "valuation_by_country": [
            {
              "argentina": 140901368.0
            }
          ]
        }
      },
      {
        "id": "direct",
        "name": "direct",
        "metrics": {
          "impact": 5985860,
          "impressions": 20955628,
          "valuation": 3625390.0,
          "valuation_usd": 19812.0546,
          "valuation_by_country": [
            {
              "argentina": 3625390.0
            }
          ]
        }
      },
      {
        "id": "google",
        "name": "google",
        "metrics": {
          "impact": 9916517,
          "impressions": 154887115,
          "valuation": 1867661.0,
          "valuation_usd": 10206.4058,
          "valuation_by_country": [
            {
              "argentina": 1867661.0
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
          "impact": 133660149,
          "impressions": 1190899138,
          "valuation": 140901368.0,
          "valuation_usd": 769998.7023,
          "valuation_by_country": [
            {
              "argentina": 140901368.0
            }
          ]
        }
      },
      {
        "id": 318,
        "name": "educación y formación - cursos completos",
        "metrics": {
          "impact": 2634251,
          "impressions": 19957802,
          "valuation": 1388480.0,
          "valuation_usd": 7587.7744,
          "valuation_by_country": [
            {
              "argentina": 1388480.0
            }
          ]
        }
      },
      {
        "id": 288,
        "name": "telecomunicaciones e internet - empresas de telecomunicaciones",
        "metrics": {
          "impact": 2452180,
          "impressions": 15576281,
          "valuation": 996238.0,
          "valuation_usd": 5444.2478,
          "valuation_by_country": [
            {
              "argentina": 996238.0
            }
          ]
        }
      },
      {
        "id": 156,
        "name": "automoción - automóviles",
        "metrics": {
          "impact": 1702944,
          "impressions": 29915077,
          "valuation": 400087.0,
          "valuation_usd": 2186.398,
          "valuation_by_country": [
            {
              "argentina": 400087.0
            }
          ]
        }
      },
      {
        "id": 194,
        "name": "cultura - varios",
        "metrics": {
          "impact": 460093,
          "impressions": 3027835,
          "valuation": 318790.0,
          "valuation_usd": 1742.1256,
          "valuation_by_country": [
            {
              "argentina": 318790.0
            }
          ]
        }
      },
      {
        "id": 232,
        "name": "finanzas - bancos",
        "metrics": {
          "impact": 575763,
          "impressions": 6879758,
          "valuation": 250845.0,
          "valuation_usd": 1370.8194,
          "valuation_by_country": [
            {
              "argentina": 250845.0
            }
          ]
        }
      },
      {
        "id": 317,
        "name": "educación y formación - varios",
        "metrics": {
          "impact": 1033586,
          "impressions": 18652888,
          "valuation": 221962.0,
          "valuation_usd": 1212.9794,
          "valuation_by_country": [
            {
              "argentina": 221962.0
            }
          ]
        }
      },
      {
        "id": 319,
        "name": "educación y formación - universidades y enseñanza superior",
        "metrics": {
          "impact": 457152,
          "impressions": 1312159,
          "valuation": 179702.0,
          "valuation_usd": 982.0366,
          "valuation_by_country": [
            {
              "argentina": 179702.0
            }
          ]
        }
      },
      {
        "id": 234,
        "name": "finanzas - servicios financieros",
        "metrics": {
          "impact": 441616,
          "impressions": 1018424,
          "valuation": 171146.0,
          "valuation_usd": 935.2798,
          "valuation_by_country": [
            {
              "argentina": 171146.0
            }
          ]
        }
      },
      {
        "id": 214,
        "name": "tiendas y restaurantes - tiendas de productos al por menor",
        "metrics": {
          "impact": 86149,
          "impressions": 1711385,
          "valuation": 162036.0,
          "valuation_usd": 885.4954,
          "valuation_by_country": [
            {
              "argentina": 162036.0
            }
          ]
        }
      },
      {
        "id": 228,
        "name": "informática y equipos de oficina - software y aplicaciones",
        "metrics": {
          "impact": 494097,
          "impressions": 6783686,
          "valuation": 144845.0,
          "valuation_usd": 791.5499,
          "valuation_by_country": [
            {
              "argentina": 144845.0
            }
          ]
        }
      },
      {
        "id": 208,
        "name": "deportes y tiempo libre - juegos y juguetes",
        "metrics": {
          "impact": 363263,
          "impressions": 626323,
          "valuation": 134095.0,
          "valuation_usd": 732.8032,
          "valuation_by_country": [
            {
              "argentina": 134095.0
            }
          ]
        }
      },
      {
        "id": 203,
        "name": "deportes y tiempo libre - varios",
        "metrics": {
          "impact": 280027,
          "impressions": 1333932,
          "valuation": 111373.0,
          "valuation_usd": 608.6319,
          "valuation_by_country": [
            {
              "argentina": 111373.0
            }
          ]
        }
      },
      {
        "id": 233,
        "name": "finanzas - inversiones",
        "metrics": {
          "impact": 515765,
          "impressions": 6725701,
          "valuation": 85156.0,
          "valuation_usd": 465.3611,
          "valuation_by_country": [
            {
              "argentina": 85156.0
            }
          ]
        }
      },
      {
        "id": 173,
        "name": "belleza e higiene - varios",
        "metrics": {
          "impact": 387238,
          "impressions": 4940311,
          "valuation": 64451.0,
          "valuation_usd": 352.2122,
          "valuation_by_country": [
            {
              "argentina": 64451.0
            }
          ]
        }
      },
      {
        "id": 274,
        "name": "salud - clínicas, hospitales y centros médicos",
        "metrics": {
          "impact": 335871,
          "impressions": 5377807,
          "valuation": 54612.0,
          "valuation_usd": 298.444,
          "valuation_by_country": [
            {
              "argentina": 54612.0
            }
          ]
        }
      },
      {
        "id": 219,
        "name": "tiendas y restaurantes - supermercados y minimarkets",
        "metrics": {
          "impact": 149610,
          "impressions": 1569520,
          "valuation": 53673.0,
          "valuation_usd": 293.3126,
          "valuation_by_country": [
            {
              "argentina": 53673.0
            }
          ]
        }
      },
      {
        "id": 216,
        "name": "tiendas y restaurantes - ópticas",
        "metrics": {
          "impact": 66231,
          "impressions": 298614,
          "valuation": 47899.0,
          "valuation_usd": 261.7588,
          "valuation_by_country": [
            {
              "argentina": 47899.0
            }
          ]
        }
      },
      {
        "id": 176,
        "name": "belleza e higiene - cuidados del cuerpo",
        "metrics": {
          "impact": 300215,
          "impressions": 3586516,
          "valuation": 46194.0,
          "valuation_usd": 252.4413,
          "valuation_by_country": [
            {
              "argentina": 46194.0
            }
          ]
        }
      },
      {
        "id": 279,
        "name": "servicios públicos y privados - servicios de empresas",
        "metrics": {
          "impact": 93118,
          "impressions": 1997412,
          "valuation": 46181.0,
          "valuation_usd": 252.3702,
          "valuation_by_country": [
            {
              "argentina": 46181.0
            }
          ]
        }
      },
      {
        "id": 224,
        "name": "informática y equipos de oficina - varios",
        "metrics": {
          "impact": 174684,
          "impressions": 3582582,
          "valuation": 41300.0,
          "valuation_usd": 225.6965,
          "valuation_by_country": [
            {
              "argentina": 41300.0
            }
          ]
        }
      },
      {
        "id": 277,
        "name": "servicios públicos y privados - campañas de interés público",
        "metrics": {
          "impact": 24820,
          "impressions": 260356,
          "valuation": 41299.0,
          "valuation_usd": 225.691,
          "valuation_by_country": [
            {
              "argentina": 41299.0
            }
          ]
        }
      },
      {
        "id": 209,
        "name": "deportes y tiempo libre - consolas y videojuegos",
        "metrics": {
          "impact": 132677,
          "impressions": 3506914,
          "valuation": 39092.0,
          "valuation_usd": 213.6302,
          "valuation_by_country": [
            {
              "argentina": 39092.0
            }
          ]
        }
      },
      {
        "id": 236,
        "name": "finanzas - seguros y previsión",
        "metrics": {
          "impact": 213689,
          "impressions": 2286594,
          "valuation": 37600.0,
          "valuation_usd": 205.4767,
          "valuation_by_country": [
            {
              "argentina": 37600.0
            }
          ]
        }
      },
      {
        "id": 187,
        "name": "belleza e higiene - productos capilares",
        "metrics": {
          "impact": 252204,
          "impressions": 2645818,
          "valuation": 34655.0,
          "valuation_usd": 189.3829,
          "valuation_by_country": [
            {
              "argentina": 34655.0
            }
          ]
        }
      },
      {
        "id": 229,
        "name": "informática y equipos de oficina - redes sociales",
        "metrics": {
          "impact": 232836,
          "impressions": 3059583,
          "valuation": 34642.0,
          "valuation_usd": 189.3118,
          "valuation_by_country": [
            {
              "argentina": 34642.0
            }
          ]
        }
      },
      {
        "id": 162,
        "name": "automoción - concesionarias",
        "metrics": {
          "impact": 169492,
          "impressions": 2655987,
          "valuation": 33162.0,
          "valuation_usd": 181.2239,
          "valuation_by_country": [
            {
              "argentina": 33162.0
            }
          ]
        }
      },
      {
        "id": 293,
        "name": "textil y vestimenta - moda y complementos online",
        "metrics": {
          "impact": 188846,
          "impressions": 3023716,
          "valuation": 30687.0,
          "valuation_usd": 167.6985,
          "valuation_by_country": [
            {
              "argentina": 30687.0
            }
          ]
        }
      },
      {
        "id": 167,
        "name": "bebidas - vinos y espumantes",
        "metrics": {
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        }
      },
      {
        "id": 280,
        "name": "servicios públicos y privados - consultorías y servicios empresariales",
        "metrics": {
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        }
      },
      {
        "id": 262,
        "name": "limpieza - higiene del hogar",
        "metrics": {
          "impact": 130078,
          "impressions": 2240589,
          "valuation": 26755.0,
          "valuation_usd": 146.2109,
          "valuation_by_country": [
            {
              "argentina": 26755.0
            }
          ]
        }
      },
      {
        "id": 190,
        "name": "construcción - empresas inmobiliarias",
        "metrics": {
          "impact": 88613,
          "impressions": 2244523,
          "valuation": 26215.0,
          "valuation_usd": 143.2599,
          "valuation_by_country": [
            {
              "argentina": 26215.0
            }
          ]
        }
      },
      {
        "id": 272,
        "name": "salud - farmacias",
        "metrics": {
          "impact": 166924,
          "impressions": 1751156,
          "valuation": 23213.0,
          "valuation_usd": 126.8546,
          "valuation_by_country": [
            {
              "argentina": 23213.0
            }
          ]
        }
      },
      {
        "id": 294,
        "name": "textil y vestimenta - relojería y joyería",
        "metrics": {
          "impact": 139690,
          "impressions": 2236655,
          "valuation": 22059.0,
          "valuation_usd": 120.5482,
          "valuation_by_country": [
            {
              "argentina": 22059.0
            }
          ]
        }
      },
      {
        "id": 168,
        "name": "bebidas - cervezas",
        "metrics": {
          "impact": 87630,
          "impressions": 1797192,
          "valuation": 21804.0,
          "valuation_usd": 119.1546,
          "valuation_by_country": [
            {
              "argentina": 21804.0
            }
          ]
        }
      },
      {
        "id": 217,
        "name": "tiendas y restaurantes - restaurantes",
        "metrics": {
          "impact": 128484,
          "impressions": 1347894,
          "valuation": 18463.0,
          "valuation_usd": 100.8967,
          "valuation_by_country": [
            {
              "argentina": 18463.0
            }
          ]
        }
      },
      {
        "id": 260,
        "name": "limpieza - varios",
        "metrics": {
          "impact": 25220,
          "impressions": 117111,
          "valuation": 17328.0,
          "valuation_usd": 94.6942,
          "valuation_by_country": [
            {
              "argentina": 17328.0
            }
          ]
        }
      },
      {
        "id": 269,
        "name": "salud - medicamentos",
        "metrics": {
          "impact": 86643,
          "impressions": 1347894,
          "valuation": 17056.0,
          "valuation_usd": 93.2077,
          "valuation_by_country": [
            {
              "argentina": 17056.0
            }
          ]
        }
      },
      {
        "id": 241,
        "name": "hogar - electrodomésticos",
        "metrics": {
          "impact": 86451,
          "impressions": 1343960,
          "valuation": 16288.0,
          "valuation_usd": 89.0108,
          "valuation_by_country": [
            {
              "argentina": 16288.0
            }
          ]
        }
      },
      {
        "id": 245,
        "name": "hogar - productos infantiles",
        "metrics": {
          "impact": 4732,
          "impressions": 130178,
          "valuation": 15923.0,
          "valuation_usd": 87.0161,
          "valuation_by_country": [
            {
              "argentina": 15923.0
            }
          ]
        }
      },
      {
        "id": 337,
        "name": "medios de comunicación",
        "metrics": {
          "impact": 85280,
          "impressions": 894662,
          "valuation": 11442.0,
          "valuation_usd": 62.5283,
          "valuation_by_country": [
            {
              "argentina": 11442.0
            }
          ]
        }
      },
      {
        "id": 218,
        "name": "tiendas y restaurantes - tiendas online",
        "metrics": {
          "impact": 81862,
          "impressions": 858795,
          "valuation": 11358.0,
          "valuation_usd": 62.0693,
          "valuation_by_country": [
            {
              "argentina": 11358.0
            }
          ]
        }
      },
      {
        "id": 238,
        "name": "hogar - varios",
        "metrics": {
          "impact": 55876,
          "impressions": 894662,
          "valuation": 8824.0,
          "valuation_usd": 48.2215,
          "valuation_by_country": [
            {
              "argentina": 8824.0
            }
          ]
        }
      },
      {
        "id": 161,
        "name": "automoción - accesorios y mantenimiento de automóviles",
        "metrics": {
          "impact": 1891,
          "impressions": 52022,
          "valuation": 6479.0,
          "valuation_usd": 35.4065,
          "valuation_by_country": [
            {
              "argentina": 6479.0
            }
          ]
        }
      },
      {
        "id": 302,
        "name": "transporte, viajes y turismo - agencias y operadores turísticos",
        "metrics": {
          "impact": 42828,
          "impressions": 449298,
          "valuation": 6155.0,
          "valuation_usd": 33.6359,
          "valuation_by_country": [
            {
              "argentina": 6155.0
            }
          ]
        }
      },
      {
        "id": 169,
        "name": "bebidas - isotónicas/energéticas",
        "metrics": {
          "impact": 42640,
          "impressions": 447331,
          "valuation": 5721.0,
          "valuation_usd": 31.2642,
          "valuation_by_country": [
            {
              "argentina": 5721.0
            }
          ]
        }
      },
      {
        "id": 289,
        "name": "telecomunicaciones e internet - equipos y terminales",
        "metrics": {
          "impact": 42640,
          "impressions": 447331,
          "valuation": 5721.0,
          "valuation_usd": 31.2642,
          "valuation_by_country": [
            {
              "argentina": 5721.0
            }
          ]
        }
      },
      {
        "id": 325,
        "name": "religión y esoterismo - esoterismo",
        "metrics": {
          "impact": 42640,
          "impressions": 447331,
          "valuation": 5721.0,
          "valuation_usd": 31.2642,
          "valuation_by_country": [
            {
              "argentina": 5721.0
            }
          ]
        }
      }
    ],
    "website_categories": [
      {
        "id": "Internet and Telecom > Social Network",
        "name": "Internet and Telecom > Social Network",
        "metrics": {
          "impact": 55200308,
          "impressions": 357691240,
          "valuation": 81350317.0,
          "valuation_usd": 444563.7357,
          "valuation_by_country": [
            {
              "argentina": 81350317.0
            }
          ]
        }
      },
      {
        "id": "Arts and Entertainment > TV and Video",
        "name": "Arts and Entertainment > TV and Video",
        "metrics": {
          "impact": 84445701,
          "impressions": 854163526,
          "valuation": 63176441.0,
          "valuation_usd": 345247.0212,
          "valuation_by_country": [
            {
              "argentina": 63176441.0
            }
          ]
        }
      },
      {
        "id": "unknown",
        "name": "unknown",
        "metrics": {
          "impact": 9916517,
          "impressions": 154887115,
          "valuation": 1867661.0,
          "valuation_usd": 10206.4058,
          "valuation_by_country": [
            {
              "argentina": 1867661.0
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
          "count": 36,
          "impact": 133660149,
          "impressions": 1190899138,
          "valuation": 140901368.0,
          "valuation_usd": 769998.7023,
          "valuation_by_country": [
            {
              "argentina": 140901368.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:00:01.000Z",
          "end": "2021-01-09T00:00:01.000Z"
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
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 133660149,
              "impressions": 1190899138,
              "valuation": 140901368.0,
              "valuation_usd": 769998.7023,
              "valuation_by_country": [
                {
                  "argentina": 140901368.0
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
              "impact": 62790327,
              "impressions": 620122747,
              "valuation": 75470096.0,
              "valuation_usd": 412429.4662,
              "valuation_by_country": [
                {
                  "argentina": 75470096.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 70869822,
              "impressions": 570776391,
              "valuation": 65431272.0,
              "valuation_usd": 357569.2362,
              "valuation_by_country": [
                {
                  "argentina": 65431272.0
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
              "impact": 78578118,
              "impressions": 942118264,
              "valuation": 48786699.0,
              "valuation_usd": 266609.8666,
              "valuation_by_country": [
                {
                  "argentina": 48786699.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 55082031,
              "impressions": 248780874,
              "valuation": 92114669.0,
              "valuation_usd": 503388.8358,
              "valuation_by_country": [
                {
                  "argentina": 92114669.0
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
              "impact": 133660149,
              "impressions": 1190899138,
              "valuation": 140901368.0,
              "valuation_usd": 769998.7023,
              "valuation_by_country": [
                {
                  "argentina": 140901368.0
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
              "impact": 49214448,
              "impressions": 336735612,
              "valuation": 77724927.0,
              "valuation_usd": 424751.6811,
              "valuation_by_country": [
                {
                  "argentina": 77724927.0
                }
              ]
            }
          },
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 84445701,
              "impressions": 854163526,
              "valuation": 63176441.0,
              "valuation_usd": 345247.0212,
              "valuation_by_country": [
                {
                  "argentina": 63176441.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7775613,
        "title": "Vuélvete Premium y Obtén Acceso Ilimitado | Crehana | Crehana",
        "landing_page": "crehana.com/precios",
        "description": "bandera | dispositivo electronico | electrónica | logo | marca | producto | tecnología",
        "metrics": {
          "count": 34,
          "impact": 1812968,
          "impressions": 7399095,
          "valuation": 1233202.0,
          "valuation_usd": 6739.2102,
          "valuation_by_country": [
            {
              "argentina": 1233202.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T01:10:32.000Z",
          "end": "2021-01-08T18:15:48.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_31d17e73646f4fd81a942fbdca0e3fb0.jpg"
          },
          "ad_measurements": {
            "height": 776,
            "width": 500
          }
        },
        "brand": {
          "id": 86445,
          "name": "crehana"
        },
        "industry": {
          "id": 318,
          "name": "educación y formación - cursos completos"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 1812968,
              "impressions": 7399095,
              "valuation": 1233202.0,
              "valuation_usd": 6739.2102,
              "valuation_by_country": [
                {
                  "argentina": 1233202.0
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
              "impact": 1812968,
              "impressions": 7399095,
              "valuation": 1233202.0,
              "valuation_usd": 6739.2102,
              "valuation_by_country": [
                {
                  "argentina": 1233202.0
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
              "impact": 801402,
              "impressions": 6285039,
              "valuation": 851323.0,
              "valuation_usd": 4652.3154,
              "valuation_by_country": [
                {
                  "argentina": 851323.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 1011566,
              "impressions": 1114056,
              "valuation": 381879.0,
              "valuation_usd": 2086.8948,
              "valuation_by_country": [
                {
                  "argentina": 381879.0
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
              "impact": 1812968,
              "impressions": 7399095,
              "valuation": 1233202.0,
              "valuation_usd": 6739.2102,
              "valuation_by_country": [
                {
                  "argentina": 1233202.0
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
              "impact": 1812968,
              "impressions": 7399095,
              "valuation": 1233202.0,
              "valuation_usd": 6739.2102,
              "valuation_by_country": [
                {
                  "argentina": 1233202.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6841886,
        "title": "Ofertas en productos prepago - Black Friday 2020 | Movistar Argentina",
        "landing_page": "movistar.com.ar/productos-y-servicios/prepago",
        "description": "bandera | logo | línea | marca | producto | tecnología | verde",
        "metrics": {
          "count": 36,
          "impact": 1125654,
          "impressions": 2915137,
          "valuation": 551755.0,
          "valuation_usd": 3015.2343,
          "valuation_by_country": [
            {
              "argentina": 551755.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:51:13.000Z",
          "end": "2021-01-08T23:56:42.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_487816d484e2ef489a41477eef0bcdb5.jpg"
          },
          "ad_measurements": {
            "height": 125,
            "width": 305
          }
        },
        "brand": {
          "id": 12,
          "name": "movistar"
        },
        "industry": {
          "id": 288,
          "name": "telecomunicaciones e internet - empresas de telecomunicaciones"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 1125654,
              "impressions": 2915137,
              "valuation": 551755.0,
              "valuation_usd": 3015.2343,
              "valuation_by_country": [
                {
                  "argentina": 551755.0
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
              "impact": 1125654,
              "impressions": 2915137,
              "valuation": 551755.0,
              "valuation_usd": 3015.2343,
              "valuation_by_country": [
                {
                  "argentina": 551755.0
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
              "impact": 477426,
              "impressions": 2212534,
              "valuation": 322343.0,
              "valuation_usd": 1761.5421,
              "valuation_by_country": [
                {
                  "argentina": 322343.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 648228,
              "impressions": 702603,
              "valuation": 229412.0,
              "valuation_usd": 1253.6922,
              "valuation_by_country": [
                {
                  "argentina": 229412.0
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
              "impact": 1125654,
              "impressions": 2915137,
              "valuation": 551755.0,
              "valuation_usd": 3015.2343,
              "valuation_by_country": [
                {
                  "argentina": 551755.0
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
              "impact": 1125654,
              "impressions": 2915137,
              "valuation": 551755.0,
              "valuation_usd": 3015.2343,
              "valuation_by_country": [
                {
                  "argentina": 551755.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7781938,
        "title": "Disney+ | Lo mejor de Disney, Pixar, Marvel, Star Wars y National Geographic, en un mismo lugar.",
        "landing_page": "disneyplus.com/es-ar/welcome",
        "description": "juegos | película",
        "metrics": {
          "count": 35,
          "impact": 1065082,
          "impressions": 8967749,
          "valuation": 386990.0,
          "valuation_usd": 2114.8254,
          "valuation_by_country": [
            {
              "argentina": 386990.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T02:18:29.000Z",
          "end": "2021-01-08T23:56:42.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_03196d9be8868709733ad98c99909221.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 269275,
          "name": "disney+"
        },
        "industry": {
          "id": 288,
          "name": "telecomunicaciones e internet - empresas de telecomunicaciones"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 1065082,
              "impressions": 8967749,
              "valuation": 386990.0,
              "valuation_usd": 2114.8254,
              "valuation_by_country": [
                {
                  "argentina": 386990.0
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
              "impact": 659488,
              "impressions": 4712747,
              "valuation": 298238.0,
              "valuation_usd": 1629.8129,
              "valuation_by_country": [
                {
                  "argentina": 298238.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 405594,
              "impressions": 4255002,
              "valuation": 88752.0,
              "valuation_usd": 485.0125,
              "valuation_by_country": [
                {
                  "argentina": 88752.0
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
              "impact": 650344,
              "impressions": 8492162,
              "valuation": 234620.0,
              "valuation_usd": 1282.1529,
              "valuation_by_country": [
                {
                  "argentina": 234620.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 414738,
              "impressions": 475587,
              "valuation": 152370.0,
              "valuation_usd": 832.6726,
              "valuation_by_country": [
                {
                  "argentina": 152370.0
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
              "impact": 672690,
              "impressions": 1347386,
              "valuation": 297134.0,
              "valuation_usd": 1623.7798,
              "valuation_by_country": [
                {
                  "argentina": 297134.0
                }
              ]
            }
          },
          {
            "id": "google",
            "name": "google",
            "metrics": {
              "impact": 392392,
              "impressions": 7620363,
              "valuation": 89856.0,
              "valuation_usd": 491.0456,
              "valuation_by_country": [
                {
                  "argentina": 89856.0
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
              "impact": 672690,
              "impressions": 1347386,
              "valuation": 297134.0,
              "valuation_usd": 1623.7798,
              "valuation_by_country": [
                {
                  "argentina": 297134.0
                }
              ]
            }
          },
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 392392,
              "impressions": 7620363,
              "valuation": 89856.0,
              "valuation_usd": 491.0456,
              "valuation_by_country": [
                {
                  "argentina": 89856.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7438745,
        "title": "Service Unavailable",
        "landing_page": "cotizacion.ford.com/compra-online/index.htm",
        "description": "azul eléctrico | emblema | logo | marca",
        "metrics": {
          "count": 21,
          "impact": 1271937,
          "impressions": 22326647,
          "valuation": 308139.0,
          "valuation_usd": 1683.92,
          "valuation_by_country": [
            {
              "argentina": 308139.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:19:09.000Z",
          "end": "2021-01-08T19:49:14.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_0bee8f4b1ec102a67c377f0aad869293.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 465,
          "name": "ford"
        },
        "industry": {
          "id": 156,
          "name": "automoción - automóviles"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 1271937,
              "impressions": 22326647,
              "valuation": 308139.0,
              "valuation_usd": 1683.92,
              "valuation_by_country": [
                {
                  "argentina": 308139.0
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
              "impact": 1239004,
              "impressions": 12998170,
              "valuation": 171542.0,
              "valuation_usd": 937.4438,
              "valuation_by_country": [
                {
                  "argentina": 171542.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 32933,
              "impressions": 9328477,
              "valuation": 136597.0,
              "valuation_usd": 746.4762,
              "valuation_by_country": [
                {
                  "argentina": 136597.0
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
              "impact": 1271937,
              "impressions": 22326647,
              "valuation": 308139.0,
              "valuation_usd": 1683.92,
              "valuation_by_country": [
                {
                  "argentina": 308139.0
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
              "impact": 1258700,
              "impressions": 21962493,
              "valuation": 262786.0,
              "valuation_usd": 1436.0746,
              "valuation_by_country": [
                {
                  "argentina": 262786.0
                }
              ]
            }
          },
          {
            "id": "direct",
            "name": "direct",
            "metrics": {
              "impact": 13237,
              "impressions": 364154,
              "valuation": 45353.0,
              "valuation_usd": 247.8454,
              "valuation_by_country": [
                {
                  "argentina": 45353.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 1258700,
              "impressions": 21962493,
              "valuation": 262786.0,
              "valuation_usd": 1436.0746,
              "valuation_by_country": [
                {
                  "argentina": 262786.0
                }
              ]
            }
          },
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics": {
              "impact": 13237,
              "impressions": 364154,
              "valuation": 45353.0,
              "valuation_usd": 247.8454,
              "valuation_by_country": [
                {
                  "argentina": 45353.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7867873,
        "title": "TIDAL Holiday Offer | TIDAL",
        "landing_page": "tidal.com/offers/holiday-offer",
        "description": "agua | azul | azul cobalto | azul eléctrico | azur | blanco | colorido | línea",
        "metrics": {
          "count": 18,
          "impact": 415291,
          "impressions": 1679941,
          "valuation": 303141.0,
          "valuation_usd": 1656.6069,
          "valuation_by_country": [
            {
              "argentina": 303141.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T01:14:40.000Z",
          "end": "2021-01-08T23:56:42.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_4565e275a756054e89029be388c77594.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 39063,
          "name": "tidal"
        },
        "industry": {
          "id": 194,
          "name": "cultura - varios"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 415291,
              "impressions": 1679941,
              "valuation": 303141.0,
              "valuation_usd": 1656.6069,
              "valuation_by_country": [
                {
                  "argentina": 303141.0
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
              "impact": 335075,
              "impressions": 838459,
              "valuation": 168470.0,
              "valuation_usd": 920.6559,
              "valuation_by_country": [
                {
                  "argentina": 168470.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 80216,
              "impressions": 841482,
              "valuation": 134671.0,
              "valuation_usd": 735.9509,
              "valuation_by_country": [
                {
                  "argentina": 134671.0
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
              "impact": 220783,
              "impressions": 1452925,
              "valuation": 226097.0,
              "valuation_usd": 1235.5763,
              "valuation_by_country": [
                {
                  "argentina": 226097.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 194508,
              "impressions": 227016,
              "valuation": 77044.0,
              "valuation_usd": 421.0305,
              "valuation_by_country": [
                {
                  "argentina": 77044.0
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
              "impact": 415291,
              "impressions": 1679941,
              "valuation": 303141.0,
              "valuation_usd": 1656.6069,
              "valuation_by_country": [
                {
                  "argentina": 303141.0
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
              "impact": 415291,
              "impressions": 1679941,
              "valuation": 303141.0,
              "valuation_usd": 1656.6069,
              "valuation_by_country": [
                {
                  "argentina": 303141.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6797267,
        "title": "Fractional Trading | Interactive Brokers LLC",
        "landing_page": "interactivebrokers.com/mkt",
        "description": "medios comunicación | negocio | persona negocios | página web | reclutador | sitio web | trabajo",
        "metrics": {
          "count": 17,
          "impact": 441616,
          "impressions": 1018424,
          "valuation": 171146.0,
          "valuation_usd": 935.2798,
          "valuation_by_country": [
            {
              "argentina": 171146.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T14:49:16.000Z",
          "end": "2021-01-08T19:22:35.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_0c485754f4b372be8a3450b1e12219a0.jpg"
          },
          "ad_measurements": {
            "height": 564,
            "width": 500
          }
        },
        "brand": {
          "id": 252857,
          "name": "interactive brokers"
        },
        "industry": {
          "id": 234,
          "name": "finanzas - servicios financieros"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 441616,
              "impressions": 1018424,
              "valuation": 171146.0,
              "valuation_usd": 935.2798,
              "valuation_by_country": [
                {
                  "argentina": 171146.0
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
              "impact": 441616,
              "impressions": 1018424,
              "valuation": 171146.0,
              "valuation_usd": 935.2798,
              "valuation_by_country": [
                {
                  "argentina": 171146.0
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
              "impact": 301776,
              "impressions": 498204,
              "valuation": 106356.0,
              "valuation_usd": 581.215,
              "valuation_by_country": [
                {
                  "argentina": 106356.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "desktop",
            "metrics": {
              "impact": 139840,
              "impressions": 520220,
              "valuation": 64790.0,
              "valuation_usd": 354.0648,
              "valuation_by_country": [
                {
                  "argentina": 64790.0
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
              "impact": 441616,
              "impressions": 1018424,
              "valuation": 171146.0,
              "valuation_usd": 935.2798,
              "valuation_by_country": [
                {
                  "argentina": 171146.0
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
              "impact": 441616,
              "impressions": 1018424,
              "valuation": 171146.0,
              "valuation_usd": 935.2798,
              "valuation_by_country": [
                {
                  "argentina": 171146.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7293006,
        "title": "Máster en Dirección Logística y Operaciones",
        "landing_page": "techtitute.com/escuela-de-negocios/maestria/maestria-direccion-logistica-operaciones",
        "description": "logo | marca",
        "metrics": {
          "count": 8,
          "impact": 402515,
          "impressions": 706795,
          "valuation": 150265.0,
          "valuation_usd": 821.1691,
          "valuation_by_country": [
            {
              "argentina": 150265.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T15:46:00.000Z",
          "end": "2021-01-08T20:05:44.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_0a4648fbe53d61ec8188e3fd3f6d086f.jpg"
          },
          "ad_measurements": {
            "height": 792,
            "width": 500
          }
        },
        "brand": {
          "id": 265933,
          "name": "teaching school"
        },
        "industry": {
          "id": 319,
          "name": "educación y formación - universidades y enseñanza superior"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 402515,
              "impressions": 706795,
              "valuation": 150265.0,
              "valuation_usd": 821.1691,
              "valuation_by_country": [
                {
                  "argentina": 150265.0
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
              "impact": 402515,
              "impressions": 706795,
              "valuation": 150265.0,
              "valuation_usd": 821.1691,
              "valuation_by_country": [
                {
                  "argentina": 150265.0
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
              "impact": 139350,
              "impressions": 416176,
              "valuation": 68275.0,
              "valuation_usd": 373.1097,
              "valuation_by_country": [
                {
                  "argentina": 68275.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 263165,
              "impressions": 290619,
              "valuation": 81990.0,
              "valuation_usd": 448.0595,
              "valuation_by_country": [
                {
                  "argentina": 81990.0
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
              "impact": 402515,
              "impressions": 706795,
              "valuation": 150265.0,
              "valuation_usd": 821.1691,
              "valuation_by_country": [
                {
                  "argentina": 150265.0
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
              "impact": 402515,
              "impressions": 706795,
              "valuation": 150265.0,
              "valuation_usd": 821.1691,
              "valuation_by_country": [
                {
                  "argentina": 150265.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7169765,
        "title": "Seminario Web Registro",
        "landing_page": "kaleanders.com/seminario-web-aprender-ingles-3-meses32571993",
        "description": null,
        "metrics": {
          "count": 10,
          "impact": 778643,
          "impressions": 12111376,
          "valuation": 149557.0,
          "valuation_usd": 817.3001,
          "valuation_by_country": [
            {
              "argentina": 149557.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T12:18:27.000Z",
          "end": "2021-01-08T19:49:14.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_3bf933faee3ce85796ca6f20d175ab3a.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 288728,
          "name": "kaleanders"
        },
        "industry": {
          "id": 318,
          "name": "educación y formación - cursos completos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 778643,
              "impressions": 12111376,
              "valuation": 149557.0,
              "valuation_usd": 817.3001,
              "valuation_by_country": [
                {
                  "argentina": 149557.0
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
              "impact": 769776,
              "impressions": 8075562,
              "valuation": 108179.0,
              "valuation_usd": 591.1773,
              "valuation_by_country": [
                {
                  "argentina": 108179.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 8867,
              "impressions": 4035814,
              "valuation": 41378.0,
              "valuation_usd": 226.1228,
              "valuation_by_country": [
                {
                  "argentina": 41378.0
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
              "impact": 778643,
              "impressions": 12111376,
              "valuation": 149557.0,
              "valuation_usd": 817.3001,
              "valuation_by_country": [
                {
                  "argentina": 149557.0
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
              "impact": 778643,
              "impressions": 12111376,
              "valuation": 149557.0,
              "valuation_usd": 817.3001,
              "valuation_by_country": [
                {
                  "argentina": 149557.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 778643,
              "impressions": 12111376,
              "valuation": 149557.0,
              "valuation_usd": 817.3001,
              "valuation_by_country": [
                {
                  "argentina": 149557.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 3236674,
        "title": "3236674",
        "landing_page": "musimundo.com",
        "description": null,
        "metrics": {
          "count": 6,
          "impact": 39729,
          "impressions": 1092954,
          "valuation": 134961.0,
          "valuation_usd": 737.5357,
          "valuation_by_country": [
            {
              "argentina": 134961.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T04:40:25.000Z",
          "end": "2021-01-08T08:12:55.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_03cf959f7af4cd3291d046cce9d1a7e2.jpg"
          },
          "ad_measurements": {
            "height": 125,
            "width": 305
          }
        },
        "brand": {
          "id": 558,
          "name": "musimundo"
        },
        "industry": {
          "id": 214,
          "name": "tiendas y restaurantes - tiendas de productos al por menor"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 39729,
              "impressions": 1092954,
              "valuation": 134961.0,
              "valuation_usd": 737.5357,
              "valuation_by_country": [
                {
                  "argentina": 134961.0
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
              "impact": 39729,
              "impressions": 1092954,
              "valuation": 134961.0,
              "valuation_usd": 737.5357,
              "valuation_by_country": [
                {
                  "argentina": 134961.0
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
              "impact": 39729,
              "impressions": 1092954,
              "valuation": 134961.0,
              "valuation_usd": 737.5357,
              "valuation_by_country": [
                {
                  "argentina": 134961.0
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
              "impact": 39729,
              "impressions": 1092954,
              "valuation": 134961.0,
              "valuation_usd": 737.5357,
              "valuation_by_country": [
                {
                  "argentina": 134961.0
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
              "impact": 39729,
              "impressions": 1092954,
              "valuation": 134961.0,
              "valuation_usd": 737.5357,
              "valuation_by_country": [
                {
                  "argentina": 134961.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7975083,
        "title": "4qxm3",
        "landing_page": "l2corepvp.com",
        "description": "animación | captura pantalla | diseño gráfico | espacio | héroe | juguete | película | película acción | personaje ficción | póster",
        "metrics": {
          "count": 9,
          "impact": 363263,
          "impressions": 626323,
          "valuation": 134095.0,
          "valuation_usd": 732.8032,
          "valuation_by_country": [
            {
              "argentina": 134095.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T15:01:24.000Z",
          "end": "2021-01-08T19:58:58.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_058bf85d07d57bd407e5ed3f4b514adc.jpg"
          },
          "ad_measurements": {
            "height": 803,
            "width": 500
          }
        },
        "brand": {
          "id": 365577,
          "name": "l2core"
        },
        "industry": {
          "id": 208,
          "name": "deportes y tiempo libre - juegos y juguetes"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 363263,
              "impressions": 626323,
              "valuation": 134095.0,
              "valuation_usd": 732.8032,
              "valuation_by_country": [
                {
                  "argentina": 134095.0
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
              "impact": 363263,
              "impressions": 626323,
              "valuation": 134095.0,
              "valuation_usd": 732.8032,
              "valuation_by_country": [
                {
                  "argentina": 134095.0
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
              "impact": 144371,
              "impressions": 377221,
              "valuation": 63817.0,
              "valuation_usd": 348.7476,
              "valuation_by_country": [
                {
                  "argentina": 63817.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 218892,
              "impressions": 249102,
              "valuation": 70278.0,
              "valuation_usd": 384.0557,
              "valuation_by_country": [
                {
                  "argentina": 70278.0
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
              "impact": 363263,
              "impressions": 626323,
              "valuation": 134095.0,
              "valuation_usd": 732.8032,
              "valuation_by_country": [
                {
                  "argentina": 134095.0
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
              "impact": 363263,
              "impressions": 626323,
              "valuation": 134095.0,
              "valuation_usd": 732.8032,
              "valuation_by_country": [
                {
                  "argentina": 134095.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7804818,
        "title": "HSBC - Tarjeta de CrÃ©dito PowerCard",
        "landing_page": "argentina.hsbc.com.ar/PowerCard/index.html",
        "description": "captura pantalla | carmín | coquelicot | gráficos | marca | naranja | papel | rojo",
        "metrics": {
          "count": 5,
          "impact": 144272,
          "impressions": 707544,
          "valuation": 123962.0,
          "valuation_usd": 677.4283,
          "valuation_by_country": [
            {
              "argentina": 123962.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:13:07.000Z",
          "end": "2021-01-08T23:56:42.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_410e3f9dbae6e9dea270e3df438c2cbb.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 60384,
          "name": "hsbc bank international"
        },
        "industry": {
          "id": 232,
          "name": "finanzas - bancos"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 144272,
              "impressions": 707544,
              "valuation": 123962.0,
              "valuation_usd": 677.4283,
              "valuation_by_country": [
                {
                  "argentina": 123962.0
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
              "impact": 54574,
              "impressions": 572488,
              "valuation": 91708.0,
              "valuation_usd": 501.1665,
              "valuation_by_country": [
                {
                  "argentina": 91708.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 89698,
              "impressions": 135056,
              "valuation": 32254.0,
              "valuation_usd": 176.2619,
              "valuation_by_country": [
                {
                  "argentina": 32254.0
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
              "impact": 72724,
              "impressions": 624510,
              "valuation": 100536.0,
              "valuation_usd": 549.4098,
              "valuation_by_country": [
                {
                  "argentina": 100536.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 71548,
              "impressions": 83034,
              "valuation": 23426.0,
              "valuation_usd": 128.0186,
              "valuation_by_country": [
                {
                  "argentina": 23426.0
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
              "impact": 144272,
              "impressions": 707544,
              "valuation": 123962.0,
              "valuation_usd": 677.4283,
              "valuation_by_country": [
                {
                  "argentina": 123962.0
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
              "impact": 144272,
              "impressions": 707544,
              "valuation": 123962.0,
              "valuation_usd": 677.4283,
              "valuation_by_country": [
                {
                  "argentina": 123962.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7873992,
        "title": "NBA | NBA League Pass: disfruta de los partidos de la NBA en directo cuando quieras y donde quieras",
        "landing_page": "watch.nba.com/streaming-subscriptions",
        "description": "aptitud física | captura pantalla | corriendo | diseño gráfico | hacer deporte | pantalones cortos activos | paralelo | rodilla",
        "metrics": {
          "count": 7,
          "impact": 236212,
          "impressions": 435336,
          "valuation": 100471.0,
          "valuation_usd": 549.0546,
          "valuation_by_country": [
            {
              "argentina": 100471.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T13:38:10.000Z",
          "end": "2021-01-08T13:58:04.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_185c282b49bd3c0ffc31b906e8d4f2a7.jpg"
          },
          "ad_measurements": {
            "height": 551,
            "width": 468
          }
        },
        "brand": {
          "id": 392,
          "name": "nba"
        },
        "industry": {
          "id": 203,
          "name": "deportes y tiempo libre - varios"
        },
        "ad_format": {
          "id": 154,
          "name": "brand-day"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 236212,
              "impressions": 435336,
              "valuation": 100471.0,
              "valuation_usd": 549.0546,
              "valuation_by_country": [
                {
                  "argentina": 100471.0
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
              "impact": 236212,
              "impressions": 435336,
              "valuation": 100471.0,
              "valuation_usd": 549.0546,
              "valuation_by_country": [
                {
                  "argentina": 100471.0
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
              "impact": 124915,
              "impressions": 312378,
              "valuation": 52224.0,
              "valuation_usd": 285.3941,
              "valuation_by_country": [
                {
                  "argentina": 52224.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "mobile",
            "metrics": {
              "impact": 111297,
              "impressions": 122958,
              "valuation": 48247.0,
              "valuation_usd": 263.6605,
              "valuation_by_country": [
                {
                  "argentina": 48247.0
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
              "impact": 236212,
              "impressions": 435336,
              "valuation": 100471.0,
              "valuation_usd": 549.0546,
              "valuation_by_country": [
                {
                  "argentina": 100471.0
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
              "impact": 236212,
              "impressions": 435336,
              "valuation": 100471.0,
              "valuation_usd": 549.0546,
              "valuation_by_country": [
                {
                  "argentina": 100471.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 5355522,
        "title": "Invierta como uno de los mejores inversores",
        "landing_page": "etoro.com/aw.aspx",
        "description": null,
        "metrics": {
          "count": 6,
          "impact": 471950,
          "impressions": 5827105,
          "valuation": 74254.0,
          "valuation_usd": 405.7837,
          "valuation_by_country": [
            {
              "argentina": 74254.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:24:22.000Z",
          "end": "2021-01-08T05:29:44.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_6cc1c3f889914682da72bab90fea644a.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 955,
          "name": "etoro"
        },
        "industry": {
          "id": 233,
          "name": "finanzas - inversiones"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 471950,
              "impressions": 5827105,
              "valuation": 74254.0,
              "valuation_usd": 405.7837,
              "valuation_by_country": [
                {
                  "argentina": 74254.0
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
              "impact": 469980,
              "impressions": 4930476,
              "valuation": 65095.0,
              "valuation_usd": 355.7316,
              "valuation_by_country": [
                {
                  "argentina": 65095.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 1970,
              "impressions": 896629,
              "valuation": 9159.0,
              "valuation_usd": 50.0522,
              "valuation_by_country": [
                {
                  "argentina": 9159.0
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
              "impact": 471950,
              "impressions": 5827105,
              "valuation": 74254.0,
              "valuation_usd": 405.7837,
              "valuation_by_country": [
                {
                  "argentina": 74254.0
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
              "impact": 471950,
              "impressions": 5827105,
              "valuation": 74254.0,
              "valuation_usd": 405.7837,
              "valuation_by_country": [
                {
                  "argentina": 74254.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 471950,
              "impressions": 5827105,
              "valuation": 74254.0,
              "valuation_usd": 405.7837,
              "valuation_by_country": [
                {
                  "argentina": 74254.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7446302,
        "title": "Virtus | Modelos | Volkswagen",
        "landing_page": "volkswagen.com.ar/es/modelos-y-configurador/virtus.html",
        "description": "bandera | logo | marca",
        "metrics": {
          "count": 4,
          "impact": 177833,
          "impressions": 4932443,
          "valuation": 55970.0,
          "valuation_usd": 305.8652,
          "valuation_by_country": [
            {
              "argentina": 55970.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T11:22:39.000Z",
          "end": "2021-01-08T09:38:33.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_4265741fcd28361cd0a2f7008461db85.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 557,
          "name": "volkswagen"
        },
        "industry": {
          "id": 156,
          "name": "automoción - automóviles"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 177833,
              "impressions": 4932443,
              "valuation": 55970.0,
              "valuation_usd": 305.8652,
              "valuation_by_country": [
                {
                  "argentina": 55970.0
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
              "impact": 6897,
              "impressions": 3139185,
              "valuation": 32220.0,
              "valuation_usd": 176.0761,
              "valuation_by_country": [
                {
                  "argentina": 32220.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 170936,
              "impressions": 1793258,
              "valuation": 23750.0,
              "valuation_usd": 129.7892,
              "valuation_by_country": [
                {
                  "argentina": 23750.0
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
              "impact": 177833,
              "impressions": 4932443,
              "valuation": 55970.0,
              "valuation_usd": 305.8652,
              "valuation_by_country": [
                {
                  "argentina": 55970.0
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
              "impact": 177833,
              "impressions": 4932443,
              "valuation": 55970.0,
              "valuation_usd": 305.8652,
              "valuation_by_country": [
                {
                  "argentina": 55970.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 177833,
              "impressions": 4932443,
              "valuation": 55970.0,
              "valuation_usd": 305.8652,
              "valuation_by_country": [
                {
                  "argentina": 55970.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7342879,
        "title": "Captcha",
        "landing_page": "dentalcentroposadas.com/tratamientos/blanqueamiento-dental",
        "description": "boca | diente | labio | línea | mandíbula | odontología cosmetica | organo | piel | producto | sonrisa",
        "metrics": {
          "count": 2,
          "impact": 335871,
          "impressions": 5377807,
          "valuation": 54612.0,
          "valuation_usd": 298.444,
          "valuation_by_country": [
            {
              "argentina": 54612.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T10:14:12.000Z",
          "end": "2021-01-08T11:29:21.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_3b863d6d17f6d571d5044a642e99ac3b.jpg"
          },
          "ad_measurements": {
            "height": 90,
            "width": 728
          }
        },
        "brand": {
          "id": 158538,
          "name": "dental"
        },
        "industry": {
          "id": 274,
          "name": "salud - clínicas, hospitales y centros médicos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 335871,
              "impressions": 5377807,
              "valuation": 54612.0,
              "valuation_usd": 298.444,
              "valuation_by_country": [
                {
                  "argentina": 54612.0
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
              "impact": 335871,
              "impressions": 5377807,
              "valuation": 54612.0,
              "valuation_usd": 298.444,
              "valuation_by_country": [
                {
                  "argentina": 54612.0
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
              "impact": 335871,
              "impressions": 5377807,
              "valuation": 54612.0,
              "valuation_usd": 298.444,
              "valuation_by_country": [
                {
                  "argentina": 54612.0
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
              "impact": 335871,
              "impressions": 5377807,
              "valuation": 54612.0,
              "valuation_usd": 298.444,
              "valuation_by_country": [
                {
                  "argentina": 54612.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 335871,
              "impressions": 5377807,
              "valuation": 54612.0,
              "valuation_usd": 298.444,
              "valuation_by_country": [
                {
                  "argentina": 54612.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6635004,
        "title": "Solicita tu Tarjeta de Crédito | BBVA Argentina",
        "landing_page": "sacatutarjeta.bbva.com.ar/solicita-tarjeta",
        "description": null,
        "metrics": {
          "count": 4,
          "impact": 260156,
          "impressions": 4481178,
          "valuation": 53508.0,
          "valuation_usd": 292.4109,
          "valuation_by_country": [
            {
              "argentina": 53508.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:34:14.000Z",
          "end": "2021-01-08T15:04:08.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_a10eaace70cbac616827c0a2e16c28fd.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 12963,
          "name": "bbva banco bilbao vizcaya argentaria"
        },
        "industry": {
          "id": 232,
          "name": "finanzas - bancos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 260156,
              "impressions": 4481178,
              "valuation": 53508.0,
              "valuation_usd": 292.4109,
              "valuation_by_country": [
                {
                  "argentina": 53508.0
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
              "impact": 3940,
              "impressions": 1793258,
              "valuation": 18317.0,
              "valuation_usd": 100.0989,
              "valuation_by_country": [
                {
                  "argentina": 18317.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 256216,
              "impressions": 2687920,
              "valuation": 35191.0,
              "valuation_usd": 192.312,
              "valuation_by_country": [
                {
                  "argentina": 35191.0
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
              "impact": 260156,
              "impressions": 4481178,
              "valuation": 53508.0,
              "valuation_usd": 292.4109,
              "valuation_by_country": [
                {
                  "argentina": 53508.0
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
              "impact": 260156,
              "impressions": 4481178,
              "valuation": 53508.0,
              "valuation_usd": 292.4109,
              "valuation_by_country": [
                {
                  "argentina": 53508.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 260156,
              "impressions": 4481178,
              "valuation": 53508.0,
              "valuation_usd": 292.4109,
              "valuation_by_country": [
                {
                  "argentina": 53508.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6194522,
        "title": "Abrí tu caja de ahorro online y más desde el celular | Banco Itaú",
        "landing_page": "itau.com.ar/abritucuenta/Paginas/default.aspx",
        "description": "dispositivo electronico | fotografía | juegos | producto | tecnología",
        "metrics": {
          "count": 2,
          "impact": 28127,
          "impressions": 295054,
          "valuation": 46950.0,
          "valuation_usd": 256.5727,
          "valuation_by_country": [
            {
              "argentina": 46950.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T14:35:28.000Z",
          "end": "2021-01-08T14:24:16.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_e1c6b5fcfd4078017e58ce44c643acc7.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 12900,
          "name": "banco itaú"
        },
        "industry": {
          "id": 232,
          "name": "finanzas - bancos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 28127,
              "impressions": 295054,
              "valuation": 46950.0,
              "valuation_usd": 256.5727,
              "valuation_by_country": [
                {
                  "argentina": 46950.0
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
              "impact": 28127,
              "impressions": 295054,
              "valuation": 46950.0,
              "valuation_usd": 256.5727,
              "valuation_by_country": [
                {
                  "argentina": 46950.0
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
              "impact": 28127,
              "impressions": 295054,
              "valuation": 46950.0,
              "valuation_usd": 256.5727,
              "valuation_by_country": [
                {
                  "argentina": 46950.0
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
              "impact": 28127,
              "impressions": 295054,
              "valuation": 46950.0,
              "valuation_usd": 256.5727,
              "valuation_by_country": [
                {
                  "argentina": 46950.0
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
              "impact": 28127,
              "impressions": 295054,
              "valuation": 46950.0,
              "valuation_usd": 256.5727,
              "valuation_by_country": [
                {
                  "argentina": 46950.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7848056,
        "title": "directv-7848056",
        "landing_page": "directv.com.ar/comprar/tienda/directv-go-1",
        "description": "barbilla | boca | cabeza | cara | ceja | frente | labio | nariz | peinado",
        "metrics": {
          "count": 3,
          "impact": 257994,
          "impressions": 3580615,
          "valuation": 43581.0,
          "valuation_usd": 238.1617,
          "valuation_by_country": [
            {
              "argentina": 43581.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T16:13:19.000Z",
          "end": "2021-01-08T15:04:08.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_e8d2a3bfb8f06a248108ae86ef85ff10.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 5,
          "name": "directv"
        },
        "industry": {
          "id": 288,
          "name": "telecomunicaciones e internet - empresas de telecomunicaciones"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 257994,
              "impressions": 3580615,
              "valuation": 43581.0,
              "valuation_usd": 238.1617,
              "valuation_by_country": [
                {
                  "argentina": 43581.0
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
              "impact": 256028,
              "impressions": 2685953,
              "valuation": 34757.0,
              "valuation_usd": 189.9403,
              "valuation_by_country": [
                {
                  "argentina": 34757.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 1966,
              "impressions": 894662,
              "valuation": 8824.0,
              "valuation_usd": 48.2215,
              "valuation_by_country": [
                {
                  "argentina": 8824.0
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
              "impact": 257994,
              "impressions": 3580615,
              "valuation": 43581.0,
              "valuation_usd": 238.1617,
              "valuation_by_country": [
                {
                  "argentina": 43581.0
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
              "impact": 257994,
              "impressions": 3580615,
              "valuation": 43581.0,
              "valuation_usd": 238.1617,
              "valuation_by_country": [
                {
                  "argentina": 43581.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 257994,
              "impressions": 3580615,
              "valuation": 43581.0,
              "valuation_usd": 238.1617,
              "valuation_by_country": [
                {
                  "argentina": 43581.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7840766,
        "title": "Competitive Research with SEMrush",
        "landing_page": "semrush.com/lp/competitive-research-2/es",
        "description": null,
        "metrics": {
          "count": 4,
          "impact": 167498,
          "impressions": 3435180,
          "valuation": 40231.0,
          "valuation_usd": 219.8546,
          "valuation_by_country": [
            {
              "argentina": 40231.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:29:57.000Z",
          "end": "2021-01-08T07:29:57.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_04ca3dc32bc60b9b57395c3044980ffc.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 79730,
          "name": "semrush"
        },
        "industry": {
          "id": 317,
          "name": "educación y formación - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 167498,
              "impressions": 3435180,
              "valuation": 40231.0,
              "valuation_usd": 219.8546,
              "valuation_by_country": [
                {
                  "argentina": 40231.0
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
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 163724,
              "impressions": 1717590,
              "valuation": 22714.0,
              "valuation_usd": 124.1276,
              "valuation_by_country": [
                {
                  "argentina": 22714.0
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
              "impact": 167498,
              "impressions": 3435180,
              "valuation": 40231.0,
              "valuation_usd": 219.8546,
              "valuation_by_country": [
                {
                  "argentina": 40231.0
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
              "impact": 167498,
              "impressions": 3435180,
              "valuation": 40231.0,
              "valuation_usd": 219.8546,
              "valuation_by_country": [
                {
                  "argentina": 40231.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 167498,
              "impressions": 3435180,
              "valuation": 40231.0,
              "valuation_usd": 219.8546,
              "valuation_by_country": [
                {
                  "argentina": 40231.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7860676,
        "title": "Seleccionados Ahorrames",
        "landing_page": "diaonline.supermercadosdia.com.ar/Seleccionados-Ahorrames/busca",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 21502,
          "impressions": 225560,
          "valuation": 36077.0,
          "valuation_usd": 197.1538,
          "valuation_by_country": [
            {
              "argentina": 36077.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T18:27:27.000Z",
          "end": "2021-01-08T13:21:45.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_65aaaa5df5eeef08ae935c760712cddf.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 11269,
          "name": "supermercados día"
        },
        "industry": {
          "id": 219,
          "name": "tiendas y restaurantes - supermercados y minimarkets"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 21502,
              "impressions": 225560,
              "valuation": 36077.0,
              "valuation_usd": 197.1538,
              "valuation_by_country": [
                {
                  "argentina": 36077.0
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
              "impact": 21502,
              "impressions": 225560,
              "valuation": 36077.0,
              "valuation_usd": 197.1538,
              "valuation_by_country": [
                {
                  "argentina": 36077.0
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
              "impact": 21502,
              "impressions": 225560,
              "valuation": 36077.0,
              "valuation_usd": 197.1538,
              "valuation_by_country": [
                {
                  "argentina": 36077.0
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
              "impact": 21502,
              "impressions": 225560,
              "valuation": 36077.0,
              "valuation_usd": 197.1538,
              "valuation_by_country": [
                {
                  "argentina": 36077.0
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
              "impact": 21502,
              "impressions": 225560,
              "valuation": 36077.0,
              "valuation_usd": 197.1538,
              "valuation_by_country": [
                {
                  "argentina": 36077.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4598631,
        "title": "The Leader in Website Creation | Create Your Free Website | Wix.com",
        "landing_page": "wix.com/buildyourwebsite5/-now",
        "description": null,
        "metrics": {
          "count": 5,
          "impact": 132044,
          "impressions": 3135251,
          "valuation": 35579.0,
          "valuation_usd": 194.4323,
          "valuation_by_country": [
            {
              "argentina": 35579.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T08:07:34.000Z",
          "end": "2021-01-08T08:21:09.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_a6b4882309c1306c140d0914a1624cf9.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 2573,
          "name": "wix"
        },
        "industry": {
          "id": 224,
          "name": "informática y equipos de oficina - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 132044,
              "impressions": 3135251,
              "valuation": 35579.0,
              "valuation_usd": 194.4323,
              "valuation_by_country": [
                {
                  "argentina": 35579.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 3936,
              "impressions": 1791291,
              "valuation": 17982.0,
              "valuation_usd": 98.2681,
              "valuation_by_country": [
                {
                  "argentina": 17982.0
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
              "impact": 132044,
              "impressions": 3135251,
              "valuation": 35579.0,
              "valuation_usd": 194.4323,
              "valuation_by_country": [
                {
                  "argentina": 35579.0
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
              "impact": 132044,
              "impressions": 3135251,
              "valuation": 35579.0,
              "valuation_usd": 194.4323,
              "valuation_by_country": [
                {
                  "argentina": 35579.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 132044,
              "impressions": 3135251,
              "valuation": 35579.0,
              "valuation_usd": 194.4323,
              "valuation_by_country": [
                {
                  "argentina": 35579.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7998801,
        "title": "Ericsson - Helping to shape a world of communication",
        "landing_page": "ericsson.com/en",
        "description": "blanco | blanco negro | estilo | fotografía monocromática | gráficos | monocromo | negro",
        "metrics": {
          "count": 3,
          "impact": 173286,
          "impressions": 2695788,
          "valuation": 34111.0,
          "valuation_usd": 186.41,
          "valuation_by_country": [
            {
              "argentina": 34111.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T08:45:01.000Z",
          "end": "2021-01-08T09:45:34.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_eef1c3206907ae553d41528f513b03a7.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 564,
          "name": "ericsson"
        },
        "industry": {
          "id": 228,
          "name": "informática y equipos de oficina - software y aplicaciones"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 173286,
              "impressions": 2695788,
              "valuation": 34111.0,
              "valuation_usd": 186.41,
              "valuation_by_country": [
                {
                  "argentina": 34111.0
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
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 1974,
              "impressions": 898596,
              "valuation": 9493.0,
              "valuation_usd": 51.8774,
              "valuation_by_country": [
                {
                  "argentina": 9493.0
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
              "impact": 173286,
              "impressions": 2695788,
              "valuation": 34111.0,
              "valuation_usd": 186.41,
              "valuation_by_country": [
                {
                  "argentina": 34111.0
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
              "impact": 173286,
              "impressions": 2695788,
              "valuation": 34111.0,
              "valuation_usd": 186.41,
              "valuation_by_country": [
                {
                  "argentina": 34111.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 173286,
              "impressions": 2695788,
              "valuation": 34111.0,
              "valuation_usd": 186.41,
              "valuation_by_country": [
                {
                  "argentina": 34111.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7644260,
        "title": "Spring cleaning checklist for Mac",
        "landing_page": "cleanmymac-x.macpaw.com/29",
        "description": "captura pantalla | línea | online | producto | página web | sitio web",
        "metrics": {
          "count": 5,
          "impact": 73564,
          "impressions": 273177,
          "valuation": 33878.0,
          "valuation_usd": 185.1367,
          "valuation_by_country": [
            {
              "argentina": 33878.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T13:25:49.000Z",
          "end": "2021-01-08T16:41:28.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_80aef8e338c6b1442f540466e6406ecb.jpg"
          },
          "ad_measurements": {
            "height": 565,
            "width": 500
          }
        },
        "brand": {
          "id": 18489,
          "name": "macpaw"
        },
        "industry": {
          "id": 228,
          "name": "informática y equipos de oficina - software y aplicaciones"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 73564,
              "impressions": 273177,
              "valuation": 33878.0,
              "valuation_usd": 185.1367,
              "valuation_by_country": [
                {
                  "argentina": 33878.0
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
              "impact": 73564,
              "impressions": 273177,
              "valuation": 33878.0,
              "valuation_usd": 185.1367,
              "valuation_by_country": [
                {
                  "argentina": 33878.0
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
              "impact": 73564,
              "impressions": 273177,
              "valuation": 33878.0,
              "valuation_usd": 185.1367,
              "valuation_by_country": [
                {
                  "argentina": 33878.0
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
              "impact": 73564,
              "impressions": 273177,
              "valuation": 33878.0,
              "valuation_usd": 185.1367,
              "valuation_by_country": [
                {
                  "argentina": 33878.0
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
              "impact": 73564,
              "impressions": 273177,
              "valuation": 33878.0,
              "valuation_usd": 185.1367,
              "valuation_by_country": [
                {
                  "argentina": 33878.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 3218676,
        "title": "Grammarly",
        "landing_page": "grammarly.com",
        "description": null,
        "metrics": {
          "count": 5,
          "impact": 172860,
          "impressions": 2668836,
          "valuation": 32702.0,
          "valuation_usd": 178.7101,
          "valuation_by_country": [
            {
              "argentina": 32702.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T14:30:56.000Z",
          "end": "2021-01-08T14:30:56.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_9857e540dba66c04dcfbe4a29d10d240.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 1507,
          "name": "grammarly"
        },
        "industry": {
          "id": 228,
          "name": "informática y equipos de oficina - software y aplicaciones"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 172860,
              "impressions": 2668836,
              "valuation": 32702.0,
              "valuation_usd": 178.7101,
              "valuation_by_country": [
                {
                  "argentina": 32702.0
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
              "impact": 170936,
              "impressions": 1793258,
              "valuation": 23751.0,
              "valuation_usd": 129.7946,
              "valuation_by_country": [
                {
                  "argentina": 23751.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 1924,
              "impressions": 875578,
              "valuation": 8951.0,
              "valuation_usd": 48.9155,
              "valuation_by_country": [
                {
                  "argentina": 8951.0
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
              "impact": 172860,
              "impressions": 2668836,
              "valuation": 32702.0,
              "valuation_usd": 178.7101,
              "valuation_by_country": [
                {
                  "argentina": 32702.0
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
              "impact": 172860,
              "impressions": 2668836,
              "valuation": 32702.0,
              "valuation_usd": 178.7101,
              "valuation_by_country": [
                {
                  "argentina": 32702.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 172860,
              "impressions": 2668836,
              "valuation": 32702.0,
              "valuation_usd": 178.7101,
              "valuation_by_country": [
                {
                  "argentina": 32702.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7776841,
        "title": "Trucos para una salud excepcional - Masterclass gratuita con Ben Greenfield",
        "landing_page": "mindvalley.com/es/longevity/masterclass",
        "description": null,
        "metrics": {
          "count": 5,
          "impact": 131253,
          "impressions": 2691854,
          "valuation": 31936.0,
          "valuation_usd": 174.5241,
          "valuation_by_country": [
            {
              "argentina": 31936.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T06:03:49.000Z",
          "end": "2021-01-08T15:41:09.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_509348375c4f88affc082844d956a295.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 76251,
          "name": "mindvalley"
        },
        "industry": {
          "id": 317,
          "name": "educación y formación - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 131253,
              "impressions": 2691854,
              "valuation": 31936.0,
              "valuation_usd": 174.5241,
              "valuation_by_country": [
                {
                  "argentina": 31936.0
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
              "impact": 128296,
              "impressions": 1345927,
              "valuation": 18031.0,
              "valuation_usd": 98.5359,
              "valuation_by_country": [
                {
                  "argentina": 18031.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 2957,
              "impressions": 1345927,
              "valuation": 13905.0,
              "valuation_usd": 75.9881,
              "valuation_by_country": [
                {
                  "argentina": 13905.0
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
              "impact": 131253,
              "impressions": 2691854,
              "valuation": 31936.0,
              "valuation_usd": 174.5241,
              "valuation_by_country": [
                {
                  "argentina": 31936.0
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
              "impact": 131253,
              "impressions": 2691854,
              "valuation": 31936.0,
              "valuation_usd": 174.5241,
              "valuation_by_country": [
                {
                  "argentina": 31936.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 131253,
              "impressions": 2691854,
              "valuation": 31936.0,
              "valuation_usd": 174.5241,
              "valuation_by_country": [
                {
                  "argentina": 31936.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7979448,
        "title": "Plan Estratégico para la vacunación contra la COVID-19 en Argentina | Argentina.gob.ar",
        "landing_page": "argentina.gob.ar/coronavirus/vacunacion",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 18615,
          "impressions": 195267,
          "valuation": 30974.0,
          "valuation_usd": 169.2669,
          "valuation_by_country": [
            {
              "argentina": 30974.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T21:15:31.000Z",
          "end": "2021-01-07T21:15:31.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_bd72e136b7e8e0fd31becc153cc1a5cb.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 130113,
          "name": "gobierno de argentina"
        },
        "industry": {
          "id": 277,
          "name": "servicios públicos y privados - campañas de interés público"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 18615,
              "impressions": 195267,
              "valuation": 30974.0,
              "valuation_usd": 169.2669,
              "valuation_by_country": [
                {
                  "argentina": 30974.0
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
              "impact": 18615,
              "impressions": 195267,
              "valuation": 30974.0,
              "valuation_usd": 169.2669,
              "valuation_by_country": [
                {
                  "argentina": 30974.0
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
              "impact": 18615,
              "impressions": 195267,
              "valuation": 30974.0,
              "valuation_usd": 169.2669,
              "valuation_by_country": [
                {
                  "argentina": 30974.0
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
              "impact": 18615,
              "impressions": 195267,
              "valuation": 30974.0,
              "valuation_usd": 169.2669,
              "valuation_by_country": [
                {
                  "argentina": 30974.0
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
              "impact": 18615,
              "impressions": 195267,
              "valuation": 30974.0,
              "valuation_usd": 169.2669,
              "valuation_by_country": [
                {
                  "argentina": 30974.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6690563,
        "title": "Pony",
        "landing_page": "ponyargentina.com.ar",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 188846,
          "impressions": 3023716,
          "valuation": 30687.0,
          "valuation_usd": 167.6985,
          "valuation_by_country": [
            {
              "argentina": 30687.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T10:14:12.000Z",
          "end": "2021-01-08T10:30:18.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_cc68f5a8cb4968b10358e1cab9bff8ab.jpg"
          },
          "ad_measurements": {
            "height": 90,
            "width": 728
          }
        },
        "brand": {
          "id": 244020,
          "name": "pony argentina"
        },
        "industry": {
          "id": 293,
          "name": "textil y vestimenta - moda y complementos online"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 188846,
              "impressions": 3023716,
              "valuation": 30687.0,
              "valuation_usd": 167.6985,
              "valuation_by_country": [
                {
                  "argentina": 30687.0
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
              "impact": 188846,
              "impressions": 3023716,
              "valuation": 30687.0,
              "valuation_usd": 167.6985,
              "valuation_by_country": [
                {
                  "argentina": 30687.0
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
              "impact": 188846,
              "impressions": 3023716,
              "valuation": 30687.0,
              "valuation_usd": 167.6985,
              "valuation_by_country": [
                {
                  "argentina": 30687.0
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
              "impact": 188846,
              "impressions": 3023716,
              "valuation": 30687.0,
              "valuation_usd": 167.6985,
              "valuation_by_country": [
                {
                  "argentina": 30687.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 188846,
              "impressions": 3023716,
              "valuation": 30687.0,
              "valuation_usd": 167.6985,
              "valuation_by_country": [
                {
                  "argentina": 30687.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7539395,
        "title": "Cómo Crear una Agencia de Marketing en Redes Sociales Extremadamente Rentable En Los Próximos 30 Días",
        "landing_page": "revoluciondigital.com/clase-envivo",
        "description": "cuadrado | logo | línea",
        "metrics": {
          "count": 3,
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T17:37:06.000Z",
          "end": "2021-01-08T14:25:17.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_39d2aed7884d42809061ddc32b066d87.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 20936,
          "name": "revolucion digital"
        },
        "industry": {
          "id": 280,
          "name": "servicios públicos y privados - consultorías y servicios empresariales"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
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
              "impact": 170936,
              "impressions": 1793258,
              "valuation": 23750.0,
              "valuation_usd": 129.7892,
              "valuation_by_country": [
                {
                  "argentina": 23750.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 983,
              "impressions": 447331,
              "valuation": 4412.0,
              "valuation_usd": 24.1107,
              "valuation_by_country": [
                {
                  "argentina": 4412.0
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
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
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
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7783748,
        "title": "TORO – PROMOCIÓN A TORO TOMALO COMO QUIERAS",
        "landing_page": "tomalocomoquieras.com.ar",
        "description": null,
        "metrics": {
          "count": 3,
          "impact": 171919,
          "impressions": 2240589,
          "valuation": 28162.0,
          "valuation_usd": 153.8999,
          "valuation_by_country": [
            {
              "argentina": 28162.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:40:18.000Z",
          "end": "2021-01-08T06:16:43.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_420f3708dbec6f8a8c4c25bf210cbe92.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 354580,
          "name": "toro vino"
        },
        "industry": {
          "id": 167,
          "name": "bebidas - vinos y espumantes"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
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
              "impact": 170936,
              "impressions": 1793258,
              "valuation": 23750.0,
              "valuation_usd": 129.7892,
              "valuation_by_country": [
                {
                  "argentina": 23750.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 983,
              "impressions": 447331,
              "valuation": 4412.0,
              "valuation_usd": 24.1107,
              "valuation_by_country": [
                {
                  "argentina": 4412.0
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
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
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
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 171919,
              "impressions": 2240589,
              "valuation": 28162.0,
              "valuation_usd": 153.8999,
              "valuation_by_country": [
                {
                  "argentina": 28162.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7916337,
        "title": "Tienda Saphirus – Los mejor en aromatización para tu hogar!",
        "landing_page": "tiendasaphirus.com.ar",
        "description": "agua | azul | azul cobalto | azul eléctrico | azul majorelle | azur | línea | violeta",
        "metrics": {
          "count": 4,
          "impact": 130078,
          "impressions": 2240589,
          "valuation": 26755.0,
          "valuation_usd": 146.2109,
          "valuation_by_country": [
            {
              "argentina": 26755.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T06:03:49.000Z",
          "end": "2021-01-08T07:40:28.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_313a574c71d124d56c13775e9ecfbe05.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 194679,
          "name": "saphirus"
        },
        "industry": {
          "id": 262,
          "name": "limpieza - higiene del hogar"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 130078,
              "impressions": 2240589,
              "valuation": 26755.0,
              "valuation_usd": 146.2109,
              "valuation_by_country": [
                {
                  "argentina": 26755.0
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
              "impact": 1970,
              "impressions": 896629,
              "valuation": 9159.0,
              "valuation_usd": 50.0522,
              "valuation_by_country": [
                {
                  "argentina": 9159.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
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
              "impact": 130078,
              "impressions": 2240589,
              "valuation": 26755.0,
              "valuation_usd": 146.2109,
              "valuation_by_country": [
                {
                  "argentina": 26755.0
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
              "impact": 130078,
              "impressions": 2240589,
              "valuation": 26755.0,
              "valuation_usd": 146.2109,
              "valuation_by_country": [
                {
                  "argentina": 26755.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 130078,
              "impressions": 2240589,
              "valuation": 26755.0,
              "valuation_usd": 146.2109,
              "valuation_by_country": [
                {
                  "argentina": 26755.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 8000270,
        "title": "Trade hunts online with The Hunt Exchange",
        "landing_page": "thehuntexchange.com",
        "description": "blanco | documento | fotografía | línea",
        "metrics": {
          "count": 1,
          "impact": 5872,
          "impressions": 208088,
          "valuation": 25916.0,
          "valuation_usd": 141.6259,
          "valuation_by_country": [
            {
              "argentina": 25916.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T21:33:56.000Z",
          "end": "2021-01-08T21:33:56.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_84c2f039ec0be2507d6928a9f472a6b4.jpg"
          },
          "ad_measurements": {
            "height": 97,
            "width": 305
          }
        },
        "brand": {
          "id": 366830,
          "name": "the hunt exchange"
        },
        "industry": {
          "id": 279,
          "name": "servicios públicos y privados - servicios de empresas"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
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
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
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
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
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
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
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
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7999422,
        "title": "\n\t\tBuy Sensodyne Herbal Multi Care Toothpaste 100g Online - Lulu Hypermarket UAE",
        "landing_page": "luluhypermarket.com/en-ae/sensodyne-herbal-multi-care-toothpaste-100g/p/1704729",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 171312,
          "impressions": 1797192,
          "valuation": 24618.0,
          "valuation_usd": 134.5326,
          "valuation_by_country": [
            {
              "argentina": 24618.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T13:39:18.000Z",
          "end": "2021-01-08T13:39:18.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_519b75e7503581d4f9d0c00407bdc687.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 20013,
          "name": "parodontax"
        },
        "industry": {
          "id": 173,
          "name": "belleza e higiene - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
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
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
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
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
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
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 171312,
              "impressions": 1797192,
              "valuation": 24618.0,
              "valuation_usd": 134.5326,
              "valuation_by_country": [
                {
                  "argentina": 24618.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7842645,
        "title": "ALWAYS",
        "landing_page": "farmaonline.com/always",
        "description": null,
        "metrics": {
          "count": 3,
          "impact": 166924,
          "impressions": 1751156,
          "valuation": 23213.0,
          "valuation_usd": 126.8546,
          "valuation_by_country": [
            {
              "argentina": 23213.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T10:58:09.000Z",
          "end": "2021-01-08T12:39:08.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_d56448ced39064919888b49d6ba0cf7a.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 253276,
          "name": "farmaonline"
        },
        "industry": {
          "id": 272,
          "name": "salud - farmacias"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 166924,
              "impressions": 1751156,
              "valuation": 23213.0,
              "valuation_usd": 126.8546,
              "valuation_by_country": [
                {
                  "argentina": 23213.0
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
              "impact": 166924,
              "impressions": 1751156,
              "valuation": 23213.0,
              "valuation_usd": 126.8546,
              "valuation_by_country": [
                {
                  "argentina": 23213.0
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
              "impact": 166924,
              "impressions": 1751156,
              "valuation": 23213.0,
              "valuation_usd": 126.8546,
              "valuation_by_country": [
                {
                  "argentina": 23213.0
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
              "impact": 166924,
              "impressions": 1751156,
              "valuation": 23213.0,
              "valuation_usd": 126.8546,
              "valuation_by_country": [
                {
                  "argentina": 23213.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 166924,
              "impressions": 1751156,
              "valuation": 23213.0,
              "valuation_usd": 126.8546,
              "valuation_by_country": [
                {
                  "argentina": 23213.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7889864,
        "title": "¡Mejora tu pronunciación en inglés con el #DesafioOpenEnglish!",
        "landing_page": "openenglish.com/desafio-open-english",
        "description": "captura pantalla",
        "metrics": {
          "count": 3,
          "impact": 129283,
          "impressions": 1795225,
          "valuation": 22777.0,
          "valuation_usd": 124.4719,
          "valuation_by_country": [
            {
              "argentina": 22777.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:58:00.000Z",
          "end": "2021-01-08T17:20:34.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_d9eb64e1ce35715b8c59dfb55008440e.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 483,
          "name": "open english"
        },
        "industry": {
          "id": 317,
          "name": "educación y formación - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 129283,
              "impressions": 1795225,
              "valuation": 22777.0,
              "valuation_usd": 124.4719,
              "valuation_by_country": [
                {
                  "argentina": 22777.0
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
              "impact": 128296,
              "impressions": 1345927,
              "valuation": 18030.0,
              "valuation_usd": 98.5305,
              "valuation_by_country": [
                {
                  "argentina": 18030.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 987,
              "impressions": 449298,
              "valuation": 4747.0,
              "valuation_usd": 25.9414,
              "valuation_by_country": [
                {
                  "argentina": 4747.0
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
              "impact": 129283,
              "impressions": 1795225,
              "valuation": 22777.0,
              "valuation_usd": 124.4719,
              "valuation_by_country": [
                {
                  "argentina": 22777.0
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
              "impact": 129283,
              "impressions": 1795225,
              "valuation": 22777.0,
              "valuation_usd": 124.4719,
              "valuation_by_country": [
                {
                  "argentina": 22777.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 129283,
              "impressions": 1795225,
              "valuation": 22777.0,
              "valuation_usd": 124.4719,
              "valuation_by_country": [
                {
                  "argentina": 22777.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7875546,
        "title": "Diseño e impresión 3D de maquetas arquitectónicas (Agustín Arroyo). Curso online | Domestika",
        "landing_page": "domestika.org/es/courses/1544-diseno-e-impresion-3d-de-maquetas-arquitectonicas",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 4919,
          "impressions": 2238622,
          "valuation": 22394.0,
          "valuation_usd": 122.3789,
          "valuation_by_country": [
            {
              "argentina": 22394.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T06:15:20.000Z",
          "end": "2021-01-08T05:56:26.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_167dac770afda6f2668bb2fd11ae1e8c.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 14992,
          "name": "domestika"
        },
        "industry": {
          "id": 317,
          "name": "educación y formación - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 4919,
              "impressions": 2238622,
              "valuation": 22394.0,
              "valuation_usd": 122.3789,
              "valuation_by_country": [
                {
                  "argentina": 22394.0
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
              "impact": 4919,
              "impressions": 2238622,
              "valuation": 22394.0,
              "valuation_usd": 122.3789,
              "valuation_by_country": [
                {
                  "argentina": 22394.0
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
              "impact": 4919,
              "impressions": 2238622,
              "valuation": 22394.0,
              "valuation_usd": 122.3789,
              "valuation_by_country": [
                {
                  "argentina": 22394.0
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
              "impact": 4919,
              "impressions": 2238622,
              "valuation": 22394.0,
              "valuation_usd": 122.3789,
              "valuation_by_country": [
                {
                  "argentina": 22394.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 4919,
              "impressions": 2238622,
              "valuation": 22394.0,
              "valuation_usd": 122.3789,
              "valuation_by_country": [
                {
                  "argentina": 22394.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 4212045,
        "title": "Property Finder - UAE's number one property website for properties for sale and to rent.",
        "landing_page": "propertyfinder.ae",
        "description": null,
        "metrics": {
          "count": 3,
          "impact": 87630,
          "impressions": 1797192,
          "valuation": 21803.0,
          "valuation_usd": 119.1492,
          "valuation_by_country": [
            {
              "argentina": 21803.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T15:58:30.000Z",
          "end": "2021-01-08T16:15:24.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_35953706de157e39ea1e91219314a5ff.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 20515,
          "name": "property finder"
        },
        "industry": {
          "id": 190,
          "name": "construcción - empresas inmobiliarias"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
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
              "impact": 85656,
              "impressions": 898596,
              "valuation": 12310.0,
              "valuation_usd": 67.2718,
              "valuation_by_country": [
                {
                  "argentina": 12310.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 1974,
              "impressions": 898596,
              "valuation": 9493.0,
              "valuation_usd": 51.8774,
              "valuation_by_country": [
                {
                  "argentina": 9493.0
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
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
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
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7777274,
        "title": "Entrenamiento GRATIS - patriciomenaybar.com",
        "landing_page": "digitalacelerator.com/webinar-registrarse",
        "description": "azul eléctrico | camiseta | cuello | manga | músculo | ocio | recreación | sonrisa | árbol",
        "metrics": {
          "count": 2,
          "impact": 87246,
          "impressions": 1789324,
          "valuation": 20265.0,
          "valuation_usd": 110.7443,
          "valuation_by_country": [
            {
              "argentina": 20265.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:24:22.000Z",
          "end": "2021-01-07T07:24:22.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_359bcd0045f41ec8ac25f4ecab09952a.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 352069,
          "name": "digital acelerator"
        },
        "industry": {
          "id": 279,
          "name": "servicios públicos y privados - servicios de empresas"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 87246,
              "impressions": 1789324,
              "valuation": 20265.0,
              "valuation_usd": 110.7443,
              "valuation_by_country": [
                {
                  "argentina": 20265.0
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
              "impact": 1966,
              "impressions": 894662,
              "valuation": 8824.0,
              "valuation_usd": 48.2215,
              "valuation_by_country": [
                {
                  "argentina": 8824.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 85280,
              "impressions": 894662,
              "valuation": 11441.0,
              "valuation_usd": 62.5229,
              "valuation_by_country": [
                {
                  "argentina": 11441.0
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
              "impact": 87246,
              "impressions": 1789324,
              "valuation": 20265.0,
              "valuation_usd": 110.7443,
              "valuation_by_country": [
                {
                  "argentina": 20265.0
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
              "impact": 87246,
              "impressions": 1789324,
              "valuation": 20265.0,
              "valuation_usd": 110.7443,
              "valuation_by_country": [
                {
                  "argentina": 20265.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 87246,
              "impressions": 1789324,
              "valuation": 20265.0,
              "valuation_usd": 110.7443,
              "valuation_by_country": [
                {
                  "argentina": 20265.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7998943,
        "title": "\tWelcome to Hardees UAE | Explore Our Hardees Menu and Offers | Order Now with Delivery",
        "landing_page": "hardees.ae",
        "description": null,
        "metrics": {
          "count": 1,
          "impact": 128484,
          "impressions": 1347894,
          "valuation": 18463.0,
          "valuation_usd": 100.8967,
          "valuation_by_country": [
            {
              "argentina": 18463.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T09:45:34.000Z",
          "end": "2021-01-08T09:45:34.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_316db87932e8927f488ca9d447b02d5d.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 365052,
          "name": "hardee's arabia"
        },
        "industry": {
          "id": 217,
          "name": "tiendas y restaurantes - restaurantes"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
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
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
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
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
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
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7059879,
        "title": "DateMyAge.com — Active Senior Dating for Mature Singles Young at Heart",
        "landing_page": "datemyage.com/lpc02",
        "description": "gráficos | logo | marca",
        "metrics": {
          "count": 1,
          "impact": 111752,
          "impressions": 1789324,
          "valuation": 17647.0,
          "valuation_usd": 96.4374,
          "valuation_by_country": [
            {
              "argentina": 17647.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T16:07:37.000Z",
          "end": "2021-01-07T16:07:37.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_b4d55d55c8b3c30df41ff81102a1fc58.jpg"
          },
          "ad_measurements": {
            "height": 90,
            "width": 728
          }
        },
        "brand": {
          "id": 189089,
          "name": "datemyage"
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
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
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
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
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
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
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
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7904583,
        "title": "Verano Santander | Banco Santander",
        "landing_page": "santander.com.ar/banco/online/personas/beneficios/verano-santander",
        "description": "colorido | coquelicot | firmar | gráficos | marca | rectángulo | rojo | símbolo",
        "metrics": {
          "count": 3,
          "impact": 128108,
          "impressions": 1343960,
          "valuation": 17597.0,
          "valuation_usd": 96.1642,
          "valuation_by_country": [
            {
              "argentina": 17597.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T05:46:13.000Z",
          "end": "2021-01-08T17:55:43.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_d2f9a903d83aa4a6c8e0dc15b36cdbe1.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 14,
          "name": "banco santander"
        },
        "industry": {
          "id": 232,
          "name": "finanzas - bancos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17597.0,
              "valuation_usd": 96.1642,
              "valuation_by_country": [
                {
                  "argentina": 17597.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7848357,
        "title": "Venus – hiperlibertad",
        "landing_page": "hiperlibertad.com.ar/busca",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 128108,
          "impressions": 1343960,
          "valuation": 17596.0,
          "valuation_usd": 96.1587,
          "valuation_by_country": [
            {
              "argentina": 17596.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T11:28:21.000Z",
          "end": "2021-01-08T17:55:43.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_d3e6825b58ba977e7da2d48177cdc6de.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 9982,
          "name": "libertad"
        },
        "industry": {
          "id": 219,
          "name": "tiendas y restaurantes - supermercados y minimarkets"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
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
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 128108,
              "impressions": 1343960,
              "valuation": 17596.0,
              "valuation_usd": 96.1587,
              "valuation_by_country": [
                {
                  "argentina": 17596.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7969368,
        "title": "World of Warships—massive naval clashes. Take command of legendary vessels from the early 20th century and fight for domination on the high seas.",
        "landing_page": "redir.wargaming.net/p5idkk0h",
        "description": "artículo religioso | cruzar | línea | patrón | simetría | símbolo | verde | verde azulado",
        "metrics": {
          "count": 2,
          "impact": 3774,
          "impressions": 1717590,
          "valuation": 17517.0,
          "valuation_usd": 95.727,
          "valuation_by_country": [
            {
              "argentina": 17517.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T00:29:31.000Z",
          "end": "2021-01-08T05:34:39.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_d20a457f483a67c3d5ea678240c70ad6.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 223057,
          "name": "world of warships"
        },
        "industry": {
          "id": 209,
          "name": "deportes y tiempo libre - consolas y videojuegos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
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
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
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
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
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
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 3774,
              "impressions": 1717590,
              "valuation": 17517.0,
              "valuation_usd": 95.727,
              "valuation_by_country": [
                {
                  "argentina": 17517.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7458769,
        "title": "Campañas de crowdfunding desde cero (Disruptivo.tv). Curso online | Domestika",
        "landing_page": "domestika.org/es/courses/689-campanas-de-crowdfunding-desde-cero",
        "description": "documento | mandíbula | marca | negocio | papel | producto | producto papel | sentado",
        "metrics": {
          "count": 1,
          "impact": 127920,
          "impressions": 1341993,
          "valuation": 17162.0,
          "valuation_usd": 93.787,
          "valuation_by_country": [
            {
              "argentina": 17162.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:12:35.000Z",
          "end": "2021-01-07T07:12:35.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_16b7c8656e7115477e859f8a048ff56a.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 14992,
          "name": "domestika"
        },
        "industry": {
          "id": 317,
          "name": "educación y formación - varios"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 127920,
              "impressions": 1341993,
              "valuation": 17162.0,
              "valuation_usd": 93.787,
              "valuation_by_country": [
                {
                  "argentina": 17162.0
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
              "impact": 127920,
              "impressions": 1341993,
              "valuation": 17162.0,
              "valuation_usd": 93.787,
              "valuation_by_country": [
                {
                  "argentina": 17162.0
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
              "impact": 127920,
              "impressions": 1341993,
              "valuation": 17162.0,
              "valuation_usd": 93.787,
              "valuation_by_country": [
                {
                  "argentina": 17162.0
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
              "impact": 127920,
              "impressions": 1341993,
              "valuation": 17162.0,
              "valuation_usd": 93.787,
              "valuation_by_country": [
                {
                  "argentina": 17162.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 127920,
              "impressions": 1341993,
              "valuation": 17162.0,
              "valuation_usd": 93.787,
              "valuation_by_country": [
                {
                  "argentina": 17162.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 5637365,
        "title": "Ver shampoo para la caspa | Head & Shoulders LA",
        "landing_page": "headandshoulders-la.com/es/ver-productos",
        "description": null,
        "metrics": {
          "count": 2,
          "impact": 124096,
          "impressions": 1301858,
          "valuation": 17058.0,
          "valuation_usd": 93.2187,
          "valuation_by_country": [
            {
              "argentina": 17058.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T12:30:54.000Z",
          "end": "2021-01-08T16:04:19.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_fbe4d1931984a40c43405e7652b6de52.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 9487,
          "name": "head & shoulders"
        },
        "industry": {
          "id": 187,
          "name": "belleza e higiene - productos capilares"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 124096,
              "impressions": 1301858,
              "valuation": 17058.0,
              "valuation_usd": 93.2187,
              "valuation_by_country": [
                {
                  "argentina": 17058.0
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
              "impact": 124096,
              "impressions": 1301858,
              "valuation": 17058.0,
              "valuation_usd": 93.2187,
              "valuation_by_country": [
                {
                  "argentina": 17058.0
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
              "impact": 124096,
              "impressions": 1301858,
              "valuation": 17058.0,
              "valuation_usd": 93.2187,
              "valuation_by_country": [
                {
                  "argentina": 17058.0
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
              "impact": 124096,
              "impressions": 1301858,
              "valuation": 17058.0,
              "valuation_usd": 93.2187,
              "valuation_by_country": [
                {
                  "argentina": 17058.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 124096,
              "impressions": 1301858,
              "valuation": 17058.0,
              "valuation_usd": 93.2187,
              "valuation_by_country": [
                {
                  "argentina": 17058.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7998740,
        "title": "Panadol Cold + Flu Hot Lemon & Honey | Panadol",
        "landing_page": "panadol.me/en/products/adults/cold-and-flu/panadol-cf-vapour.html",
        "description": "atmósfera | azul | azul eléctrico | azul majorelle | azur | espacio | marca | mundo",
        "metrics": {
          "count": 2,
          "impact": 86643,
          "impressions": 1347894,
          "valuation": 17056.0,
          "valuation_usd": 93.2077,
          "valuation_by_country": [
            {
              "argentina": 17056.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T08:21:09.000Z",
          "end": "2021-01-08T12:50:30.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_525a376b3862cd5a807ec152356a3ec2.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 3752,
          "name": "panadol"
        },
        "industry": {
          "id": 269,
          "name": "salud - medicamentos"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
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
              "impact": 987,
              "impressions": 449298,
              "valuation": 4747.0,
              "valuation_usd": 25.9414,
              "valuation_by_country": [
                {
                  "argentina": 4747.0
                }
              ]
            }
          },
          {
            "id": 2,
            "name": "video",
            "metrics": {
              "impact": 85656,
              "impressions": 898596,
              "valuation": 12309.0,
              "valuation_usd": 67.2663,
              "valuation_by_country": [
                {
                  "argentina": 12309.0
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
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
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
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7214462,
        "title": "Tribu Digital - Webinar 3 Pasos para Crear tu Propio Curso - Suscripción",
        "landing_page": "tribudigital.com/webinar-3-pasos-lp-97",
        "description": "amarillo | gráficos | logo | marca | símbolo",
        "metrics": {
          "count": 3,
          "impact": 121084,
          "impressions": 1270259,
          "valuation": 16995.0,
          "valuation_usd": 92.8744,
          "valuation_by_country": [
            {
              "argentina": 16995.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T06:26:15.000Z",
          "end": "2021-01-08T07:33:35.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_160a987b10e899aed8bafa229cbf3dd8.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 201575,
          "name": "tribu digital"
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
              "impact": 121084,
              "impressions": 1270259,
              "valuation": 16995.0,
              "valuation_usd": 92.8744,
              "valuation_by_country": [
                {
                  "argentina": 16995.0
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
              "impact": 121084,
              "impressions": 1270259,
              "valuation": 16995.0,
              "valuation_usd": 92.8744,
              "valuation_by_country": [
                {
                  "argentina": 16995.0
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
              "impact": 121084,
              "impressions": 1270259,
              "valuation": 16995.0,
              "valuation_usd": 92.8744,
              "valuation_by_country": [
                {
                  "argentina": 16995.0
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
              "impact": 121084,
              "impressions": 1270259,
              "valuation": 16995.0,
              "valuation_usd": 92.8744,
              "valuation_by_country": [
                {
                  "argentina": 16995.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 121084,
              "impressions": 1270259,
              "valuation": 16995.0,
              "valuation_usd": 92.8744,
              "valuation_by_country": [
                {
                  "argentina": 16995.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7638041,
        "title": "Maestría en Negocios Digitales",
        "landing_page": "www2.udesa.edu.ar/posgrados/edan/fa/MND/dual.php",
        "description": "captura pantalla | mostrar anuncio | sitio web",
        "metrics": {
          "count": 1,
          "impact": 9918,
          "impressions": 104044,
          "valuation": 16803.0,
          "valuation_usd": 91.8251,
          "valuation_by_country": [
            {
              "argentina": 16803.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-08T14:24:16.000Z",
          "end": "2021-01-08T14:24:16.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_1bf6da33f3049d607daa9c90c11ef22f.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 11610,
          "name": "universidad de san andrés"
        },
        "industry": {
          "id": 319,
          "name": "educación y formación - universidades y enseñanza superior"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
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
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
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
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
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
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
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
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 6077392,
        "title": "avon-6077392",
        "landing_page": "avon.com.ar",
        "description": null,
        "metrics": {
          "count": 3,
          "impact": 86451,
          "impressions": 1343960,
          "valuation": 16288.0,
          "valuation_usd": 89.0108,
          "valuation_by_country": [
            {
              "argentina": 16288.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T07:58:00.000Z",
          "end": "2021-01-08T07:04:16.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/video_28d62b77a580c941d701811ce9059ec9.mp4"
          },
          "ad_measurements": {
            "height": 250,
            "width": 400
          }
        },
        "brand": {
          "id": 714,
          "name": "avon"
        },
        "industry": {
          "id": 176,
          "name": "belleza e higiene - cuidados del cuerpo"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 86451,
              "impressions": 1343960,
              "valuation": 16288.0,
              "valuation_usd": 89.0108,
              "valuation_by_country": [
                {
                  "argentina": 16288.0
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
              "impact": 85468,
              "impressions": 896629,
              "valuation": 11876.0,
              "valuation_usd": 64.9,
              "valuation_by_country": [
                {
                  "argentina": 11876.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 983,
              "impressions": 447331,
              "valuation": 4412.0,
              "valuation_usd": 24.1107,
              "valuation_by_country": [
                {
                  "argentina": 4412.0
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
              "impact": 86451,
              "impressions": 1343960,
              "valuation": 16288.0,
              "valuation_usd": 89.0108,
              "valuation_by_country": [
                {
                  "argentina": 16288.0
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
              "impact": 86451,
              "impressions": 1343960,
              "valuation": 16288.0,
              "valuation_usd": 89.0108,
              "valuation_by_country": [
                {
                  "argentina": 16288.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 86451,
              "impressions": 1343960,
              "valuation": 16288.0,
              "valuation_usd": 89.0108,
              "valuation_by_country": [
                {
                  "argentina": 16288.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 7818500,
        "title": "Vender Auto Usado. Cotizá tu Auto en 2 Minutos | Kavak",
        "landing_page": "kavak.com/ar/vender",
        "description": "azul | bandera | diagrama | logo | línea | marca | paralelo | señalización",
        "metrics": {
          "count": 3,
          "impact": 82849,
          "impressions": 1308093,
          "valuation": 16105.0,
          "valuation_usd": 88.0107,
          "valuation_by_country": [
            {
              "argentina": 16105.0
            }
          ]
        },
        "date_range": {
          "start": "2021-01-07T06:50:17.000Z",
          "end": "2021-01-08T08:57:26.000Z"
        },
        "preview": {
          "ad_file": {
            "name": "https://ads.admetricks.com/banner_d65b0e45b5c49357b59776ebbf815a09.jpg"
          },
          "ad_measurements": {
            "height": 48,
            "width": 48
          }
        },
        "brand": {
          "id": 114538,
          "name": "kavak"
        },
        "industry": {
          "id": 162,
          "name": "automoción - concesionarias"
        },
        "countries": [
          {
            "id": 3,
            "name": "argentina",
            "metrics": {
              "impact": 82849,
              "impressions": 1308093,
              "valuation": 16105.0,
              "valuation_usd": 88.0107,
              "valuation_by_country": [
                {
                  "argentina": 16105.0
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
              "impact": 81862,
              "impressions": 858795,
              "valuation": 11358.0,
              "valuation_usd": 62.0693,
              "valuation_by_country": [
                {
                  "argentina": 11358.0
                }
              ]
            }
          },
          {
            "id": 1,
            "name": "display",
            "metrics": {
              "impact": 987,
              "impressions": 449298,
              "valuation": 4747.0,
              "valuation_usd": 25.9414,
              "valuation_by_country": [
                {
                  "argentina": 4747.0
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
              "impact": 82849,
              "impressions": 1308093,
              "valuation": 16105.0,
              "valuation_usd": 88.0107,
              "valuation_by_country": [
                {
                  "argentina": 16105.0
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
              "impact": 82849,
              "impressions": 1308093,
              "valuation": 16105.0,
              "valuation_usd": 88.0107,
              "valuation_by_country": [
                {
                  "argentina": 16105.0
                }
              ]
            }
          }
        ],
        "websites": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics": {
              "impact": 82849,
              "impressions": 1308093,
              "valuation": 16105.0,
              "valuation_usd": 88.0107,
              "valuation_by_country": [
                {
                  "argentina": 16105.0
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
        "category": "Internet and Telecom > Social Network",
        "metrics": {
          "count": 218,
          "impact": 55200308,
          "impressions": 357691240,
          "valuation": 81350317.0,
          "valuation_usd": 444563.7357,
          "valuation_by_country": [
            {
              "argentina": 81350317.0
            }
          ]
        }
      },
      {
        "id": 147,
        "domain": "youtube.com",
        "category": "unknown",
        "metrics": {
          "count": 225,
          "impact": 94362218,
          "impressions": 1009050641,
          "valuation": 65044102.0,
          "valuation_usd": 355453.4271,
          "valuation_by_country": [
            {
              "argentina": 65044102.0
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
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 14,
              "impact": 44093241,
              "impressions": 407184306,
              "valuation": 46731700.0,
              "valuation_usd": 255379.6948,
              "valuation_by_country": [
                {
                  "argentina": 46731700.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 10,
              "impact": 46157465,
              "impressions": 400739148,
              "valuation": 46662360.0,
              "valuation_usd": 255000.7651,
              "valuation_by_country": [
                {
                  "argentina": 46662360.0
                }
              ]
            }
          },
          {
            "date": "2021-01-09T00:00:00.000Z",
            "date_int": 1610150400000,
            "metrics": {
              "count": 12,
              "impact": 43409443,
              "impressions": 382975683,
              "valuation": 47507308.0,
              "valuation_usd": 259618.2424,
              "valuation_by_country": [
                {
                  "argentina": 47507308.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 86445,
        "name": "crehana",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 21,
              "impact": 1048078,
              "impressions": 4112713,
              "valuation": 713526.0,
              "valuation_usd": 3899.2815,
              "valuation_by_country": [
                {
                  "argentina": 713526.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 13,
              "impact": 764890,
              "impressions": 3286382,
              "valuation": 519676.0,
              "valuation_usd": 2839.9287,
              "valuation_by_country": [
                {
                  "argentina": 519676.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 12,
        "name": "movistar",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 21,
              "impact": 541673,
              "impressions": 1998988,
              "valuation": 346765.0,
              "valuation_usd": 1895.0036,
              "valuation_by_country": [
                {
                  "argentina": 346765.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 17,
              "impact": 587431,
              "impressions": 1028929,
              "valuation": 218902.0,
              "valuation_usd": 1196.2571,
              "valuation_by_country": [
                {
                  "argentina": 218902.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 269275,
        "name": "disney+",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 17,
              "impact": 489929,
              "impressions": 4625053,
              "valuation": 180336.0,
              "valuation_usd": 985.5013,
              "valuation_by_country": [
                {
                  "argentina": 180336.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 18,
              "impact": 575153,
              "impressions": 4342696,
              "valuation": 206654.0,
              "valuation_usd": 1129.3241,
              "valuation_by_country": [
                {
                  "argentina": 206654.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 465,
        "name": "ford",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 10,
              "impact": 693053,
              "impressions": 12077937,
              "valuation": 140059.0,
              "valuation_usd": 765.3953,
              "valuation_by_country": [
                {
                  "argentina": 140059.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 12,
              "impact": 621712,
              "impressions": 10698008,
              "valuation": 174235.0,
              "valuation_usd": 952.1605,
              "valuation_by_country": [
                {
                  "argentina": 174235.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 39063,
        "name": "tidal",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 9,
              "impact": 201209,
              "impressions": 723038,
              "valuation": 141911.0,
              "valuation_usd": 775.5161,
              "valuation_by_country": [
                {
                  "argentina": 141911.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 9,
              "impact": 214082,
              "impressions": 956903,
              "valuation": 161230.0,
              "valuation_usd": 881.0907,
              "valuation_by_country": [
                {
                  "argentina": 161230.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 252857,
        "name": "interactive brokers",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 17,
              "impact": 441616,
              "impressions": 1018424,
              "valuation": 171146.0,
              "valuation_usd": 935.2798,
              "valuation_by_country": [
                {
                  "argentina": 171146.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 558,
        "name": "musimundo",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 4,
              "impact": 20310,
              "impressions": 585801,
              "valuation": 71654.0,
              "valuation_usd": 391.5752,
              "valuation_by_country": [
                {
                  "argentina": 71654.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 6,
              "impact": 65839,
              "impressions": 1125584,
              "valuation": 90382.0,
              "valuation_usd": 493.9201,
              "valuation_by_country": [
                {
                  "argentina": 90382.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 265933,
        "name": "teaching school",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 9,
              "impact": 404406,
              "impressions": 758817,
              "valuation": 156744.0,
              "valuation_usd": 856.5756,
              "valuation_by_country": [
                {
                  "argentina": 156744.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 288728,
        "name": "kaleanders",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 5,
              "impact": 259772,
              "impressions": 4473310,
              "valuation": 51972.0,
              "valuation_usd": 284.0169,
              "valuation_by_country": [
                {
                  "argentina": 51972.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 5,
              "impact": 518871,
              "impressions": 7638066,
              "valuation": 97585.0,
              "valuation_usd": 533.2831,
              "valuation_by_country": [
                {
                  "argentina": 97585.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 365577,
        "name": "l2core",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 24911,
              "impressions": 65089,
              "valuation": 10849.0,
              "valuation_usd": 59.2877,
              "valuation_by_country": [
                {
                  "argentina": 10849.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 8,
              "impact": 338352,
              "impressions": 561234,
              "valuation": 123246.0,
              "valuation_usd": 673.5155,
              "valuation_by_country": [
                {
                  "argentina": 123246.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 60384,
        "name": "hsbc bank international",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 24820,
              "impressions": 260356,
              "valuation": 41299.0,
              "valuation_usd": 225.691,
              "valuation_by_country": [
                {
                  "argentina": 41299.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 4,
              "impact": 119452,
              "impressions": 447188,
              "valuation": 82663.0,
              "valuation_usd": 451.7373,
              "valuation_by_country": [
                {
                  "argentina": 82663.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 392,
        "name": "nba",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 6,
              "impact": 215409,
              "impressions": 383314,
              "valuation": 91643.0,
              "valuation_usd": 500.8113,
              "valuation_by_country": [
                {
                  "argentina": 91643.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 20803,
              "impressions": 52022,
              "valuation": 8828.0,
              "valuation_usd": 48.2433,
              "valuation_by_country": [
                {
                  "argentina": 8828.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 14992,
        "name": "domestika",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 7,
              "impact": 343046,
              "impressions": 5346921,
              "valuation": 63145.0,
              "valuation_usd": 345.0752,
              "valuation_by_country": [
                {
                  "argentina": 63145.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 4,
              "impact": 129471,
              "impressions": 1797192,
              "valuation": 23212.0,
              "valuation_usd": 126.8491,
              "valuation_by_country": [
                {
                  "argentina": 23212.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 955,
        "name": "etoro",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 256823,
              "impressions": 3131317,
              "valuation": 38735.0,
              "valuation_usd": 211.6793,
              "valuation_by_country": [
                {
                  "argentina": 38735.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 215127,
              "impressions": 2695788,
              "valuation": 35519.0,
              "valuation_usd": 194.1045,
              "valuation_by_country": [
                {
                  "argentina": 35519.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 557,
        "name": "volkswagen",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 88229,
              "impressions": 2236655,
              "valuation": 24676.0,
              "valuation_usd": 134.8496,
              "valuation_by_country": [
                {
                  "argentina": 24676.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 4,
              "impact": 175260,
              "impressions": 3594384,
              "valuation": 43604.0,
              "valuation_usd": 238.2874,
              "valuation_by_country": [
                {
                  "argentina": 43604.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 18489,
        "name": "macpaw",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 22260,
              "impressions": 195267,
              "valuation": 23886.0,
              "valuation_usd": 130.5324,
              "valuation_by_country": [
                {
                  "argentina": 23886.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 5,
              "impact": 57927,
              "impressions": 260110,
              "valuation": 32395.0,
              "valuation_usd": 177.0324,
              "valuation_by_country": [
                {
                  "argentina": 32395.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 158538,
        "name": "dental",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 195566,
              "impressions": 3131317,
              "valuation": 30881.0,
              "valuation_usd": 168.7587,
              "valuation_by_country": [
                {
                  "argentina": 30881.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 140305,
              "impressions": 2246490,
              "valuation": 23731.0,
              "valuation_usd": 129.6853,
              "valuation_by_country": [
                {
                  "argentina": 23731.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 12963,
        "name": "bbva banco bilbao vizcaya argentaria",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 172526,
              "impressions": 2683986,
              "valuation": 31706.0,
              "valuation_usd": 173.2672,
              "valuation_by_country": [
                {
                  "argentina": 31706.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21802.0,
              "valuation_usd": 119.1437,
              "valuation_by_country": [
                {
                  "argentina": 21802.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 20013,
        "name": "parodontax",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 4,
              "impact": 301770,
              "impressions": 4043682,
              "valuation": 52575.0,
              "valuation_usd": 287.3122,
              "valuation_by_country": [
                {
                  "argentina": 52575.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 79730,
        "name": "semrush",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 4,
              "impact": 130869,
              "impressions": 2683986,
              "valuation": 30398.0,
              "valuation_usd": 166.1192,
              "valuation_by_country": [
                {
                  "argentina": 30398.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 80252,
              "impressions": 1645856,
              "valuation": 19966.0,
              "valuation_usd": 109.1103,
              "valuation_by_country": [
                {
                  "argentina": 19966.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 91959,
        "name": "mas vision",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 18363,
              "impressions": 215580,
              "valuation": 30173.0,
              "valuation_usd": 164.8896,
              "valuation_by_country": [
                {
                  "argentina": 30173.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 47868,
              "impressions": 83034,
              "valuation": 17726.0,
              "valuation_usd": 96.8692,
              "valuation_by_country": [
                {
                  "argentina": 17726.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 12900,
        "name": "banco itaú",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 23168,
              "impressions": 243032,
              "valuation": 38548.0,
              "valuation_usd": 210.6574,
              "valuation_by_country": [
                {
                  "argentina": 38548.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 4959,
              "impressions": 52022,
              "valuation": 8402.0,
              "valuation_usd": 45.9153,
              "valuation_by_country": [
                {
                  "argentina": 8402.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 5,
        "name": "directv",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 215166,
              "impressions": 3131317,
              "valuation": 37426.0,
              "valuation_usd": 204.5258,
              "valuation_by_country": [
                {
                  "argentina": 37426.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 42828,
              "impressions": 449298,
              "valuation": 6155.0,
              "valuation_usd": 33.6359,
              "valuation_by_country": [
                {
                  "argentina": 6155.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 2573,
        "name": "wix",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 4,
              "impact": 130869,
              "impressions": 2683986,
              "valuation": 30398.0,
              "valuation_usd": 166.1192,
              "valuation_by_country": [
                {
                  "argentina": 30398.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 43815,
              "impressions": 898596,
              "valuation": 10902.0,
              "valuation_usd": 59.5773,
              "valuation_by_country": [
                {
                  "argentina": 10902.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 130113,
        "name": "gobierno de argentina",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 24820,
              "impressions": 260356,
              "valuation": 41299.0,
              "valuation_usd": 225.691,
              "valuation_by_country": [
                {
                  "argentina": 41299.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 11269,
        "name": "supermercados día",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 11584,
              "impressions": 121516,
              "valuation": 19274.0,
              "valuation_usd": 105.3287,
              "valuation_by_country": [
                {
                  "argentina": 19274.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 9918,
              "impressions": 104044,
              "valuation": 16803.0,
              "valuation_usd": 91.8251,
              "valuation_by_country": [
                {
                  "argentina": 16803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 564,
        "name": "ericsson",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 173286,
              "impressions": 2695788,
              "valuation": 34111.0,
              "valuation_usd": 186.41,
              "valuation_by_country": [
                {
                  "argentina": 34111.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 1507,
        "name": "grammarly",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 86217,
              "impressions": 1320942,
              "valuation": 15646.0,
              "valuation_usd": 85.5024,
              "valuation_by_country": [
                {
                  "argentina": 15646.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 76251,
        "name": "mindvalley",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 43623,
              "impressions": 894662,
              "valuation": 10133.0,
              "valuation_usd": 55.3749,
              "valuation_by_country": [
                {
                  "argentina": 10133.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 244020,
        "name": "pony argentina",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 77094,
              "impressions": 1234392,
              "valuation": 13040.0,
              "valuation_usd": 71.2611,
              "valuation_by_country": [
                {
                  "argentina": 13040.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 20936,
        "name": "revolucion digital",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 86263,
              "impressions": 1341993,
              "valuation": 15853.0,
              "valuation_usd": 86.6336,
              "valuation_by_country": [
                {
                  "argentina": 15853.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 85656,
              "impressions": 898596,
              "valuation": 12309.0,
              "valuation_usd": 67.2663,
              "valuation_by_country": [
                {
                  "argentina": 12309.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 354580,
        "name": "toro vino",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 86263,
              "impressions": 1341993,
              "valuation": 15853.0,
              "valuation_usd": 86.6336,
              "valuation_by_country": [
                {
                  "argentina": 15853.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 85656,
              "impressions": 898596,
              "valuation": 12309.0,
              "valuation_usd": 67.2663,
              "valuation_by_country": [
                {
                  "argentina": 12309.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 223057,
        "name": "world of warships",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 3,
              "impact": 45589,
              "impressions": 1789324,
              "valuation": 18957.0,
              "valuation_usd": 103.5963,
              "valuation_by_country": [
                {
                  "argentina": 18957.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 1808,
              "impressions": 822928,
              "valuation": 8693.0,
              "valuation_usd": 47.5056,
              "valuation_by_country": [
                {
                  "argentina": 8693.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 483,
        "name": "open english",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 42640,
              "impressions": 447331,
              "valuation": 5721.0,
              "valuation_usd": 31.2642,
              "valuation_by_country": [
                {
                  "argentina": 5721.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 194679,
        "name": "saphirus",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 86263,
              "impressions": 1341993,
              "valuation": 15853.0,
              "valuation_usd": 86.6336,
              "valuation_by_country": [
                {
                  "argentina": 15853.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 43815,
              "impressions": 898596,
              "valuation": 10902.0,
              "valuation_usd": 59.5773,
              "valuation_by_country": [
                {
                  "argentina": 10902.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 366830,
        "name": "the hunt exchange",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 5872,
              "impressions": 208088,
              "valuation": 25916.0,
              "valuation_usd": 141.6259,
              "valuation_by_country": [
                {
                  "argentina": 25916.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 253276,
        "name": "farmaonline",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 81268,
              "impressions": 852560,
              "valuation": 10904.0,
              "valuation_usd": 59.5882,
              "valuation_by_country": [
                {
                  "argentina": 10904.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 85656,
              "impressions": 898596,
              "valuation": 12309.0,
              "valuation_usd": 67.2663,
              "valuation_by_country": [
                {
                  "argentina": 12309.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 114538,
        "name": "kavak",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 42640,
              "impressions": 447331,
              "valuation": 5721.0,
              "valuation_usd": 31.2642,
              "valuation_by_country": [
                {
                  "argentina": 5721.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 83037,
              "impressions": 1310060,
              "valuation": 16539.0,
              "valuation_usd": 90.3824,
              "valuation_by_country": [
                {
                  "argentina": 16539.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 20515,
        "name": "property finder",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 3,
              "impact": 87630,
              "impressions": 1797192,
              "valuation": 21803.0,
              "valuation_usd": 119.1492,
              "valuation_by_country": [
                {
                  "argentina": 21803.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 352069,
        "name": "digital acelerator",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 87246,
              "impressions": 1789324,
              "valuation": 20265.0,
              "valuation_usd": 110.7443,
              "valuation_by_country": [
                {
                  "argentina": 20265.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 365052,
        "name": "hardee's arabia",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 128484,
              "impressions": 1347894,
              "valuation": 18463.0,
              "valuation_usd": 100.8967,
              "valuation_by_country": [
                {
                  "argentina": 18463.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 189089,
        "name": "datemyage",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 111752,
              "impressions": 1789324,
              "valuation": 17647.0,
              "valuation_usd": 96.4374,
              "valuation_by_country": [
                {
                  "argentina": 17647.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 14,
        "name": "banco santander",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 85280,
              "impressions": 894662,
              "valuation": 11442.0,
              "valuation_usd": 62.5283,
              "valuation_by_country": [
                {
                  "argentina": 11442.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 42828,
              "impressions": 449298,
              "valuation": 6155.0,
              "valuation_usd": 33.6359,
              "valuation_by_country": [
                {
                  "argentina": 6155.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 306,
        "name": "pantene",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 2,
              "impact": 85280,
              "impressions": 894662,
              "valuation": 11442.0,
              "valuation_usd": 62.5283,
              "valuation_by_country": [
                {
                  "argentina": 11442.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 42828,
              "impressions": 449298,
              "valuation": 6155.0,
              "valuation_usd": 33.6359,
              "valuation_by_country": [
                {
                  "argentina": 6155.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 9982,
        "name": "libertad",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 85280,
              "impressions": 894662,
              "valuation": 11441.0,
              "valuation_usd": 62.5229,
              "valuation_by_country": [
                {
                  "argentina": 11441.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 42828,
              "impressions": 449298,
              "valuation": 6155.0,
              "valuation_usd": 33.6359,
              "valuation_by_country": [
                {
                  "argentina": 6155.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 284169,
        "name": "kärcher",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 23329,
              "impressions": 65089,
              "valuation": 10849.0,
              "valuation_usd": 59.2877,
              "valuation_by_country": [
                {
                  "argentina": 10849.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 1891,
              "impressions": 52022,
              "valuation": 6479.0,
              "valuation_usd": 35.4065,
              "valuation_by_country": [
                {
                  "argentina": 6479.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 9487,
        "name": "head & shoulders",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 81268,
              "impressions": 852560,
              "valuation": 10903.0,
              "valuation_usd": 59.5828,
              "valuation_by_country": [
                {
                  "argentina": 10903.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 1,
              "impact": 42828,
              "impressions": 449298,
              "valuation": 6155.0,
              "valuation_usd": 33.6359,
              "valuation_by_country": [
                {
                  "argentina": 6155.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 3752,
        "name": "panadol",
        "metrics_by_date": [
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 86643,
              "impressions": 1347894,
              "valuation": 17056.0,
              "valuation_usd": 93.2077,
              "valuation_by_country": [
                {
                  "argentina": 17056.0
                }
              ]
            }
          }
        ]
      },
      {
        "id": 201575,
        "name": "tribu digital",
        "metrics_by_date": [
          {
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 1,
              "impact": 42640,
              "impressions": 447331,
              "valuation": 5721.0,
              "valuation_usd": 31.2642,
              "valuation_by_country": [
                {
                  "argentina": 5721.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 2,
              "impact": 78444,
              "impressions": 822928,
              "valuation": 11274.0,
              "valuation_usd": 61.6102,
              "valuation_by_country": [
                {
                  "argentina": 11274.0
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
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 97,
              "impact": 17193351,
              "impressions": 117247319,
              "valuation": 27520621.0,
              "valuation_usd": 150394.8667,
              "valuation_by_country": [
                {
                  "argentina": 27520621.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 115,
              "impact": 22247244,
              "impressions": 135568989,
              "valuation": 27789002.0,
              "valuation_usd": 151861.5169,
              "valuation_by_country": [
                {
                  "argentina": 27789002.0
                }
              ]
            }
          },
          {
            "date": "2021-01-09T00:00:00.000Z",
            "date_int": 1610150400000,
            "metrics": {
              "count": 6,
              "impact": 15759713,
              "impressions": 104874932,
              "valuation": 26040694.0,
              "valuation_usd": 142307.3521,
              "valuation_by_country": [
                {
                  "argentina": 26040694.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 3,
        "devices": [
          {
            "id": "mobile",
            "name": "mobile",
            "metrics": {
              "impact": 36622644,
              "impressions": 150127910,
              "valuation": 48638458.0,
              "valuation_usd": 265799.7582,
              "valuation_by_country": [
                {
                  "argentina": 48638458.0
                }
              ]
            }
          },
          {
            "id": "desktop",
            "name": "desktop",
            "metrics": {
              "impact": 18577664,
              "impressions": 207563330,
              "valuation": 32711859.0,
              "valuation_usd": 178763.9775,
              "valuation_by_country": [
                {
                  "argentina": 32711859.0
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
            "date": "2021-01-07T00:00:00.000Z",
            "date_int": 1609977600000,
            "metrics": {
              "count": 105,
              "impact": 34362560,
              "impressions": 377714793,
              "valuation": 21859610.0,
              "valuation_usd": 119458.5374,
              "valuation_by_country": [
                {
                  "argentina": 21859610.0
                }
              ]
            }
          },
          {
            "date": "2021-01-08T00:00:00.000Z",
            "date_int": 1610064000000,
            "metrics": {
              "count": 114,
              "impact": 32349928,
              "impressions": 353235096,
              "valuation": 21717878.0,
              "valuation_usd": 118683.9994,
              "valuation_by_country": [
                {
                  "argentina": 21717878.0
                }
              ]
            }
          },
          {
            "date": "2021-01-09T00:00:00.000Z",
            "date_int": 1610150400000,
            "metrics": {
              "count": 6,
              "impact": 27649730,
              "impressions": 278100751,
              "valuation": 21466614.0,
              "valuation_usd": 117310.8903,
              "valuation_by_country": [
                {
                  "argentina": 21466614.0
                }
              ]
            }
          }
        ],
        "days_with_impressions": 3,
        "devices": [
          {
            "id": "mobile",
            "name": "mobile",
            "metrics": {
              "impact": 21754238,
              "impressions": 102519490,
              "valuation": 44671227.0,
              "valuation_usd": 244119.6087,
              "valuation_by_country": [
                {
                  "argentina": 44671227.0
                }
              ]
            }
          },
          {
            "id": "desktop",
            "name": "desktop",
            "metrics": {
              "impact": 72607980,
              "impressions": 906531151,
              "valuation": 20372875.0,
              "valuation_usd": 111333.8184,
              "valuation_by_country": [
                {
                  "argentina": 20372875.0
                }
              ]
            }
          }
        ]
      }
    ],
    "date_range": {
      "start": "2021-01-07T00:00:01.000Z",
      "end": "2021-01-09T00:00:01.000Z"
    },
    "brands_with_websites_by_date": [
      {
        "id": 186036,
        "metrics": {
          "count": 36,
          "impact": 133660149,
          "impressions": 1190899138,
          "valuation": 140901368.0,
          "valuation_usd": 769998.7023,
          "valuation_by_country": [
            {
              "argentina": 140901368.0
            }
          ]
        },
        "name": "other-brand",
        "websites_by_date": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 6,
                  "impact": 29403233,
                  "impressions": 300026556,
                  "valuation": 20961574.0,
                  "valuation_usd": 114550.9445,
                  "valuation_by_country": [
                    {
                      "argentina": 20961574.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 6,
                  "impact": 27392738,
                  "impressions": 276036218,
                  "valuation": 20748253.0,
                  "valuation_usd": 113385.1865,
                  "valuation_by_country": [
                    {
                      "argentina": 20748253.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-09T00:00:00.000Z",
                "date_int": 1610150400000,
                "metrics": {
                  "count": 6,
                  "impact": 27649730,
                  "impressions": 278100751,
                  "valuation": 21466614.0,
                  "valuation_usd": 117310.8903,
                  "valuation_by_country": [
                    {
                      "argentina": 21466614.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 3,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 62691463,
                  "impressions": 751644036,
                  "valuation": 18505214.0,
                  "valuation_usd": 101127.4125,
                  "valuation_by_country": [
                    {
                      "argentina": 18505214.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 21754238,
                  "impressions": 102519490,
                  "valuation": 44671227.0,
                  "valuation_usd": 244119.6087,
                  "valuation_by_country": [
                    {
                      "argentina": 44671227.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 8,
                  "impact": 14690008,
                  "impressions": 107157750,
                  "valuation": 25770126.0,
                  "valuation_usd": 140828.7504,
                  "valuation_by_country": [
                    {
                      "argentina": 25770126.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 4,
                  "impact": 18764727,
                  "impressions": 124702930,
                  "valuation": 25914107.0,
                  "valuation_usd": 141615.5787,
                  "valuation_by_country": [
                    {
                      "argentina": 25914107.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-09T00:00:00.000Z",
                "date_int": 1610150400000,
                "metrics": {
                  "count": 6,
                  "impact": 15759713,
                  "impressions": 104874932,
                  "valuation": 26040694.0,
                  "valuation_usd": 142307.3521,
                  "valuation_by_country": [
                    {
                      "argentina": 26040694.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 3,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 15886655,
                  "impressions": 190474228,
                  "valuation": 30281485.0,
                  "valuation_usd": 165482.454,
                  "valuation_by_country": [
                    {
                      "argentina": 30281485.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 33327793,
                  "impressions": 146261384,
                  "valuation": 47443442.0,
                  "valuation_usd": 259269.2271,
                  "valuation_by_country": [
                    {
                      "argentina": 47443442.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 465,
        "metrics": {
          "count": 22,
          "impact": 1314765,
          "impressions": 22775945,
          "valuation": 314294.0,
          "valuation_usd": 1717.5559,
          "valuation_by_country": [
            {
              "argentina": 314294.0
            }
          ]
        },
        "name": "ford",
        "websites_by_date": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 10,
                  "impact": 693053,
                  "impressions": 12077937,
                  "valuation": 140059.0,
                  "valuation_usd": 765.3953,
                  "valuation_by_country": [
                    {
                      "argentina": 140059.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 11,
                  "impact": 608475,
                  "impressions": 10333854,
                  "valuation": 128882.0,
                  "valuation_usd": 704.3152,
                  "valuation_by_country": [
                    {
                      "argentina": 128882.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 1301528,
                  "impressions": 22411791,
                  "valuation": 268941.0,
                  "valuation_usd": 1469.7105,
                  "valuation_by_country": [
                    {
                      "argentina": 268941.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics_by_date": [
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 1,
                  "impact": 13237,
                  "impressions": 364154,
                  "valuation": 45353.0,
                  "valuation_usd": 247.8454,
                  "valuation_by_country": [
                    {
                      "argentina": 45353.0
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
                  "impact": 13237,
                  "impressions": 364154,
                  "valuation": 45353.0,
                  "valuation_usd": 247.8454,
                  "valuation_by_country": [
                    {
                      "argentina": 45353.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 288728,
        "metrics": {
          "count": 9,
          "impact": 736003,
          "impressions": 11664045,
          "valuation": 143836.0,
          "valuation_usd": 786.0359,
          "valuation_by_country": [
            {
              "argentina": 143836.0
            }
          ]
        },
        "name": "kaleanders",
        "websites_by_date": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 4,
                  "impact": 217132,
                  "impressions": 4025979,
                  "valuation": 46251.0,
                  "valuation_usd": 252.7528,
                  "valuation_by_country": [
                    {
                      "argentina": 46251.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 5,
                  "impact": 518871,
                  "impressions": 7638066,
                  "valuation": 97585.0,
                  "valuation_usd": 533.2831,
                  "valuation_by_country": [
                    {
                      "argentina": 97585.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 736003,
                  "impressions": 11664045,
                  "valuation": 143836.0,
                  "valuation_usd": 786.0359,
                  "valuation_by_country": [
                    {
                      "argentina": 143836.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 269275,
        "metrics": {
          "count": 30,
          "impact": 922326,
          "impressions": 8635110,
          "valuation": 317818.0,
          "valuation_usd": 1736.8139,
          "valuation_by_country": [
            {
              "argentina": 317818.0
            }
          ]
        },
        "name": "disney+",
        "websites_by_date": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 5,
                  "impact": 217132,
                  "impressions": 4025979,
                  "valuation": 46251.0,
                  "valuation_usd": 252.7528,
                  "valuation_by_country": [
                    {
                      "argentina": 46251.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 5,
                  "impact": 175260,
                  "impressions": 3594384,
                  "valuation": 43605.0,
                  "valuation_usd": 238.2929,
                  "valuation_by_country": [
                    {
                      "argentina": 43605.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 392392,
                  "impressions": 7620363,
                  "valuation": 89856.0,
                  "valuation_usd": 491.0456,
                  "valuation_by_country": [
                    {
                      "argentina": 89856.0
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 12,
                  "impact": 272797,
                  "impressions": 599074,
                  "valuation": 134085.0,
                  "valuation_usd": 732.7486,
                  "valuation_by_country": [
                    {
                      "argentina": 134085.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 8,
                  "impact": 257137,
                  "impressions": 415673,
                  "valuation": 93877.0,
                  "valuation_usd": 513.0196,
                  "valuation_by_country": [
                    {
                      "argentina": 93877.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 223934,
                  "impressions": 663711,
                  "valuation": 110731.0,
                  "valuation_usd": 605.1235,
                  "valuation_by_country": [
                    {
                      "argentina": 110731.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 306000,
                  "impressions": 351036,
                  "valuation": 117231.0,
                  "valuation_usd": 640.6447,
                  "valuation_by_country": [
                    {
                      "argentina": 117231.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 14992,
        "metrics": {
          "count": 10,
          "impact": 431883,
          "impressions": 6717833,
          "valuation": 80905.0,
          "valuation_usd": 442.1302,
          "valuation_by_country": [
            {
              "argentina": 80905.0
            }
          ]
        },
        "name": "domestika",
        "websites_by_date": [
          {
            "id": 147,
            "domain": "youtube.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 6,
                  "impact": 302412,
                  "impressions": 4920641,
                  "valuation": 57693.0,
                  "valuation_usd": 315.2811,
                  "valuation_by_country": [
                    {
                      "argentina": 57693.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 4,
                  "impact": 129471,
                  "impressions": 1797192,
                  "valuation": 23212.0,
                  "valuation_usd": 126.8491,
                  "valuation_by_country": [
                    {
                      "argentina": 23212.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 431883,
                  "impressions": 6717833,
                  "valuation": 80905.0,
                  "valuation_usd": 442.1302,
                  "valuation_by_country": [
                    {
                      "argentina": 80905.0
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": 86445,
        "metrics": {
          "count": 23,
          "impact": 1379464,
          "impressions": 6367632,
          "valuation": 1034644.0,
          "valuation_usd": 5654.1292,
          "valuation_by_country": [
            {
              "argentina": 1034644.0
            }
          ]
        },
        "name": "crehana",
        "websites_by_date": [
          {
            "id": 144,
            "domain": "facebook.com",
            "metrics_by_date": [
              {
                "date": "2021-01-07T00:00:00.000Z",
                "date_int": 1609977600000,
                "metrics": {
                  "count": 19,
                  "impact": 986789,
                  "impressions": 4006638,
                  "valuation": 685915.0,
                  "valuation_usd": 3748.3927,
                  "valuation_by_country": [
                    {
                      "argentina": 685915.0
                    }
                  ]
                }
              },
              {
                "date": "2021-01-08T00:00:00.000Z",
                "date_int": 1610064000000,
                "metrics": {
                  "count": 4,
                  "impact": 392675,
                  "impressions": 2360994,
                  "valuation": 348729.0,
                  "valuation_usd": 1905.7365,
                  "valuation_by_country": [
                    {
                      "argentina": 348729.0
                    }
                  ]
                }
              }
            ],
            "days_with_impressions": 2,
            "devices": [
              {
                "id": "desktop",
                "name": "desktop",
                "metrics": {
                  "impact": 631296,
                  "impressions": 5543664,
                  "valuation": 739804.0,
                  "valuation_usd": 4042.8857,
                  "valuation_by_country": [
                    {
                      "argentina": 739804.0
                    }
                  ]
                }
              },
              {
                "id": "mobile",
                "name": "mobile",
                "metrics": {
                  "impact": 748168,
                  "impressions": 823968,
                  "valuation": 294840.0,
                  "valuation_usd": 1611.2435,
                  "valuation_by_country": [
                    {
                      "argentina": 294840.0
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
          "id": 3,
          "name": "argentina",
          "metrics": {
            "impact": 149562526,
            "impressions": 1366741881,
            "valuation": 146394419.0,
            "valuation_usd": 800017.1628
          }
        }
      ],
      "ad_types": [
        {
          "id": 1,
          "name": "display",
          "metrics": {
            "impact": 69472023,
            "impressions": 699233284,
            "valuation": 79310534.0,
            "valuation_usd": 433416.7164
          }
        },
        {
          "id": 2,
          "name": "video",
          "metrics": {
            "impact": 80090503,
            "impressions": 667508597,
            "valuation": 67083885.0,
            "valuation_usd": 366600.4463
          }
        }
      ],
      "devices": [
        {
          "id": 2,
          "name": "mobile",
          "metrics": {
            "impact": 58376882,
            "impressions": 252647400,
            "valuation": 93309685.0,
            "valuation_usd": 509919.3669
          }
        },
        {
          "id": 1,
          "name": "desktop",
          "metrics": {
            "impact": 91185644,
            "impressions": 1114094481,
            "valuation": 53084734.0,
            "valuation_usd": 290097.7959
          }
        }
      ],
      "metrics_by_date": [
        {
          "date": "2021-01-07T00:00:00.000Z",
          "date_int": 1609977600000,
          "metrics": {
            "impact": 51555911,
            "impressions": 494962112,
            "valuation": 49380231.0,
            "valuation_usd": 269853.4041,
            "valuation_by_country": [
              {
                "argentina": 49380231.0
              }
            ]
          }
        },
        {
          "date": "2021-01-08T00:00:00.000Z",
          "date_int": 1610064000000,
          "metrics": {
            "impact": 54597172,
            "impressions": 488804085,
            "valuation": 49506880.0,
            "valuation_usd": 270545.5163,
            "valuation_by_country": [
              {
                "argentina": 49506880.0
              }
            ]
          }
        },
        {
          "date": "2021-01-09T00:00:00.000Z",
          "date_int": 1610150400000,
          "metrics": {
            "impact": 43409443,
            "impressions": 382975683,
            "valuation": 47507308.0,
            "valuation_usd": 259618.2424,
            "valuation_by_country": [
              {
                "argentina": 47507308.0
              }
            ]
          }
        }
      ],
      "total_impressions": 1366741880,
      "total_impact": 149562526,
      "total_valuation": 146394419.0,
      "total_valuation_usd": 800017.1627999999,
      "position": {
        "first_scroll": 0.3793866286191938,
        "second_scroll": 0.006211538184386124,
        "third_or_more_scroll": 0.6067346909363426
      }
    }
  },
  "meta": {
    "date_range": {
      "start": "2021-01-07T00:00:01.000Z",
      "end": "2021-01-09T00:00:01.000Z"
    }
  },
  "api_hits": {
    "consumed": 9,
    "percentage_consumed": "0.0%",
    "available": 99999
  }
}
```
