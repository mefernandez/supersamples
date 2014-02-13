
  ․․․․․․

  6 passing (45ms)


# Events

## Sports

### Get list of sports

`GET /sports`

**Response**

```json
{
	"status": 200,
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"body": {
		"sports": [
			{
				"id": 1,
				"name": "Soccer"
			},
			{
				"id": 2,
				"name": "Tennis"
			}
		]
	}
}
```

## Competitions

### Competitions by sport

`GET /sports/1/competitions`

**Response**

```json
{
	"status": 200,
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"body": {
		"competitions": [
			{
				"id": 1,
				"country": "gb",
				"name": "English premier league"
			},
			{
				"id": 2,
				"country": "fr",
				"name": "Coupe de France"
			}
		]
	}
}
```

### Filter by country

`GET /sports/1/competitions?country=fr`

**Response**

```json
{
	"status": 200,
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"body": {
		"competitions": [
			{
				"id": 2,
				"country": "fr",
				"name": "Coupe de France"
			}
		]
	}
}
```

# Admin

## Reporting

### Status check

`GET /status`

**Response**

```json
{
	"status": 200,
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"body": {
		"status": "OK"
	}
}
```

# User

## Tickets

### Buying tickets

`POST /tickets`

**Response**

```json
{
	"status": 201,
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"body": {
		"eventName": "Australian Open",
		"tickets": [
			"ticket1",
			"ticket2",
			"ticket3"
		]
	}
}
```

### Cancelling a ticket

`DELETE /tickets/123`

**Response**

```json
{
	"status": 204,
	"headers": {},
	"body": ""
}
```

Found 6 samples
Documentation generated in: /Users/mariano/git/supersamples/example-docs

