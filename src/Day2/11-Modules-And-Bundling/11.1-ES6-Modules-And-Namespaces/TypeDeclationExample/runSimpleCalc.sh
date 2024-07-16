#!/bin/bash
# Usage: ./runSimpleCalc.sh
# This script assumes that the ts-node package has been installed globally.
# npm install -g ts-node
# npm install -g typescript
# npm install --save-dev @types/node
# npm install esm --save-dev
# node --loader ts-node/esm ./test/simpleCalc.ts
# chmod +x ./runSimpleCalc.sh
node --trace-warnings --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));' ./test/simpleCalc.ts
