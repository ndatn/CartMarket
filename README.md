# CartMarket

# Mock server
cars server:
    - cd mock/cars
    - json-server --host 0.0.0.0 --port 8081 cars.json
auth server:
    - cd mock/auths
    - json-server --host 0.0.0.0 --port 5000 -m ../../node_modules/json-server-auth

# App
    - npm start 
