#!/bin/bash

FILES="./fonts/content/**/*.ttf"
for f in $FILES
do
    ./bin/woff2_compress $f
done