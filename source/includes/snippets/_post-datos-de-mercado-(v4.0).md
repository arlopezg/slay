> Ejemplo de petición

```shell
curl -X POST -H "Authorization: Token YOUR_TOKEN" "https://clientela.admetricks.com/market-report/data/v4/?day=2020-10-01&country=1&device=1&ad_type=1"
```

```python
import requests

headers = {
    'Authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json'
}

params = (
    ('day', '2020-10-01'),
    ('country', '1'),
    ('device', '1'),
    ('ad_type', '1'),
)

response = requests.post(
  'https://clientela.admetricks.com/market-report/data/v4/',
  headers=headers,
  params=params
)
```

```javascript
const endpoint = "https://clientela.admetricks.com/market-report/data/v4/?day=2020-10-01&country=1&device=1&ad_type=1"

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
$endpoint = 'https://clientela.admetricks.com/market-report/data/v3/?day=2020-10-01&country=1&device=1&ad_type=1'

$response = Requests::post($endpoint, $headers);

?>
```

> Ejemplo de petición filtrando por industrias

```shell
curl -X POST -H "Authorization: Token YOUR_TOKEN" "https://clientela.admetricks.com/market-report/data/v4/?day=2020-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289"
```

```python
import requests

headers = {
    'Authorization': 'Token YOUR_TOKEN',
    'content-type': 'application/json'
}

params = (
    ('day', '2020-10-01'),
    ('country', '1'),
    ('device', '1'),
    ('ad_type', '1'),
    ('industries', '281,282,288,289')
)

response = requests.post(
  'https://clientela.admetricks.com/market-report/data/v4/',
  headers=headers,
  params=params
)
```

```javascript
const endpoint = "https://clientela.admetricks.com/market-report/data/v4/?day=2020-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289"

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
$endpoint = 'https://clientela.admetricks.com/market-report/data/v4/?day=2020-10-01&country=1&device=1&ad_type=1&industries=281,282,288,289'

$response = Requests::post($endpoint, $headers);

?>
```

> Ejemplo de respuesta exitosa

```json
{
  "data": [
    {
		"date": "2020-10-01",
		"industry_id": 234,
		"industry": "finanzas - servicios financieros",
		"brand_id": 2631,
		"brand": "paypal",
		"campaign_id": 3622536,
		"campaign_name": "Pagos en Línea en Colombia, Envíos de Fondos y Más - PayPal CO",
		"campaign_landing_page": "paypal.com",
		"website_id": 339,
		"website": "elmostrador.cl",
		"ad_link": "https://ads.admetricks.com/banner_a3e62c98d5728298eea4571af826513d.gif",
		"screenshot_link": "https://screenshots.admetricks.com/cache_idea3e2b28cedd45ffa8c3bcd921be57ff.jpg",
		"ad_type_id": 1,
		"device_id": 1,
		"country_id": 1,
		"country": "chile",
		"ad_type": "display",
		"device": "desktop",
		"metrics_valuation": 91293,
		"metrics_impressions": 66948,
		"metrics_valuation_usd": 105.80407379328439
	}
  ]
}
```
