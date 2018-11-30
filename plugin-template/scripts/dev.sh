#!/usr/bin/env bash

# this starts a static files server
# so that you can load your plugin via:
# => http://localhost:3050/dist/plugin.js

./node_modules/.bin/http-server . -p 3050 -c-1  # disable all caching