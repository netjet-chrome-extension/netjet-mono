#!/usr/bin/env bash

cd "$(dirname "$BASH_SOURCE")"
export GOPATH="$PWD"
go test sourcegraph_go_selenium