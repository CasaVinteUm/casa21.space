#!/bin/bash

npm run build
docker build -t jaonoctus/casa21.space .
