#!/usr/bin/env bash

cd "$(dirname "$BASH_SOURCE")"
export GOPATH="$PWD"

export GOCACHE='off'

go test netjet/tebeka
go test netjet/sourcegraph

# or:  go test netjet/tebeka -run TestExample
# or:  go test netjet/sourcegraph -run TestExample