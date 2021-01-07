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
var fetch = require('node-fetch');

fetch('https://clientela.admetricks.com/campaign-report/', {
    method: 'POST',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ "order_by": "valuation", "search_term": "a", "campaigns": {"include": [{"id": 4394864}]}, "ad_types": {"include": [{"id": 1},{"id": 2},{"id": 3}]}, "countries": {"include": [{"id": 4}]}, "devices": {"include": [{"id": 1},{"id": 2}]}, "date_range": {"start": "2020-12-28T00:00:00.000","end": "2020-12-30T23:59:59.999","group_by": "day"} })
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

> Respuesta (200)
