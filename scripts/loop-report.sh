#!/bin/bash
while [ true ] ; do
    sleep ${1:-0.5} ;
    npm run report;
done