state.cars = state.cars || require('./data/cars.js').cars.data;

var cars = require('./routes/cars.js');

Sandbox.define('/api/cars', 'GET', cars.Get);
Sandbox.define('/api/cars', 'POST', cars.Post);
Sandbox.define('/api/cars/{id}', 'GET', cars.GetId);
Sandbox.define('/api/cars/{id}', 'PUT', cars.Put);
Sandbox.define('/api/cars/{id}', 'DELETE', cars.Delete);
