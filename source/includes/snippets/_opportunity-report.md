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

> Respuesta (200)
