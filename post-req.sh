#!/bin/bash

# Simple POST request for testing

curl -X POST -H "Content-Type: application/json" \
    -d '{"technology": "nodeJS"}' \
    http://localhost:3000/new
