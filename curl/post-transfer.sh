#!/bin/bash

curl -kv \
  -X POST \
  -H 'Content-type: application/json' \
  -d '{ "amount": 10000, "source": "Tinkoff", "destination": "Alfa-bank", "status": "SUCCESS" }' \
  http://localhost:8080/api/v1/money/transfers
