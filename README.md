# eos-commerce-mobile
eos e-commerce mobile - Based on GoStack challenger

# Turn on API

run first this cli below to turn on json server
```
json-server server.json -p 3333 to turn on json server
```

Install the app
```
react-native run-android
react-native run-ios
```

## Emulate with USB

If you want to try on physical mobile, you must change on src/services/api.js the baseURL
change localhost to you IP address.
After change the code, you must run code below:
```
json-server server.json -H <your ip address> -p 3333
```
