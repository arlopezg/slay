> Ejemplo de petición

```shell
curl -X POST -H "Authorization: Token YOUR_TOKEN" "https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1"
```

```python
import requests

headers = {
    'Authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json'
}

params = (
    ('day', '2022-10-01'),
    ('country', '1'),
    ('device', '1'),
    ('ad_type', '1'),
)

response = requests.post(
  'https://clientela.admetricks.com/market-report/data/v5/',
  headers=headers,
  params=params
)
```

```javascript
const endpoint = "https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1"

fetch(endpoint, {
    method: 'POST',
    headers: {
        'Authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json'
    }
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
$endpoint = 'https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1'

$response = Requests::post($endpoint, $headers);

?>
```

> Ejemplo de petición filtrando por industrias

```shell
curl -X POST -H "Authorization: Token YOUR_TOKEN" "https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289"
```

```python
import requests

headers = {
    'Authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json'
}

params = (
    ('day', '2022-10-01'),
    ('country', '1'),
    ('device', '1'),
    ('ad_type', '1'),
    ('industries', '281,282,288,289')
)

response = requests.post(
  'https://clientela.admetricks.com/market-report/data/v5/',
  headers=headers,
  params=params
)
```

```javascript
const endpoint = "https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289"

fetch(endpoint, {
    method: 'POST',
    headers: {
        'Authorization': 'Token YOUR_TOKEN',
        'content-type': 'application/json'
    }
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
$endpoint = 'https://clientela.admetricks.com/market-report/data/v5/?day=2022-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289'

$response = Requests::post($endpoint, $headers);

?>
```

> Ejemplo de respuesta exitosa

```json
{
  "data": [
    {
		"date": "2022-10-01",
		"industry_id": 190,
		"industry": "construcción - empresas inmobiliarias",
		"brand_id": 125199,
		"brand": "inmobiliaria icuadra",
		"campaign_id": 6884532,
		"campaign_name": "Inicio - CyberMonday Icuadra",
		"campaign_landing_page": "cyber.icuadra.cl",
		"website_id": 7352,
		"website": "adictivo365.com",
		"ad_link": "https://ads.admetricks.com/banner_83281f54444d47cb176dc05a768df07a.jpg",
		"screenshot_link": "https://screenshots.admetricks.com/cache_id25cfa9f13a464e649c656d18f6602779.jpg",
		"ad_type_id": 1,
		"device_id": 1,
		"country_id": 1,
		"country": "chile",
		"ad_type": "display",
		"device": "desktop",
		"metrics_valuation": 3125.5296,
		"metrics_impressions": 4195,
		"metrics_valuation_usd": 3.6223
	}
  ]
}
```
