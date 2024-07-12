#!/bin/bash
set -e

composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

php craft up

npm install

npm run build

php craft clear-caches/all
