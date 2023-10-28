# CartMarket

# Mock server
    - cd mock/cars
    - json-server --host 0.0.0.0 --port 8081 cars.json
# auth server:
    - cd mock/auths
    - json-server --host 0.0.0.0 --port 5000 -m ../../node_modules/json-server-auth
# decode token server:
    - cd mock/auths/decode-token-server
    - node index.js
# App
    - npm start 
