#!/usr/bin/env bash


#nlu run --all-packages --allow-missing

nlu run --umbrella --override -c '.nlu.json' --allow-missing
