#!/bin/bash
set -e

composer install

php craft up

npm install

npm run build

php craft clear-caches/all
