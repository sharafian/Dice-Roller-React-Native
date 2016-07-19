#!/bin/bash

cd "`dirname $0`"

if [[ ! -f my-release-key.keystore ]]; then
  keytool \
    -genkey \
    -v \
    -keystore my-release-key.keystore \
    -alias alias_name \
    -keyalg RSA \
    -validity 10000
fi

jarsigner \
  -verbose \
  -keystore my-release-key.keystore \
  ../android/app/build/outputs/apk/app-release-unsigned.apk \
  alias_name
