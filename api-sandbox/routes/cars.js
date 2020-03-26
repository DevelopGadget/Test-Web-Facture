exports.Get = function (req, res) {
  if (req.validationErrors()) {
    return res.json(406, {
      status: 'error',
      details: req.validationErrorsJson()
    })
  }
  res.status(200);

  res.json({
    data: state.cars
  });
}

exports.GetId = function (req, res) {
  req.check('id', 'Missing car id').notEmpty();
  if (req.validationErrors()) {
    return res.json(406, {
      status: 'error',
      details: req.validationErrorsJson()
    })
  }
  var car = _.find(state.cars, function(item) {
    return item.id == req.params.id;
  });

  if (car) {
    res.status(200);
    res.json({
      data: car
    });
  } else {
    return res.json(404, {
      status: 'error',
      details: 'Not found'
    });
  }
}

exports.Put = function(req, res) {
  req.check('id', 'No car id').notEmpty();
  req.check('body', 'No content found').notEmpty();
  if (req.validationErrors()) {
    return res.json(400, {
      status: 'error',
      details: req.validationErrorsJson()
    });
  }
  var car = _.find(state.cars, function(item) {
    return item.id == parseInt(req.params.id);
  });

  if (!car) {
    return res.json(404, {
      status: 'error',
      details: 'Not found'
    });
  }

  _merge(state.cars, req.body);

  state.cars = _.reject(state.cars, {
    id: req.params.cars
  })
  state.cars.push(car);

  res.json({
    data: car
  });
};

exports.Post = function (req, res) {
  if (req.validationErrors()) {
    return res.json(406, {
      status: 'error',
      details: req.validationErrorsJson()
    })
  }
  req.body.id = state.cars.length + 1;

  state.cars.push(req.body)

  res.status(200);

  // set response body and send
  res.json({
    data: req.body
  });
}

exports.Delete = function(req, res) {
  req.check('id', 'Missing car id').notEmpty();
  if (req.validationErrors()) {
    return res.json(400, {
      status: 'error',
      details: req.validationErrorsJson()
    });
  }

  var car = _.find(state.cars, function(item) {
    return item.id == parseInt(req.params.id);
  });

  if (!car) {
    return res.json(404, {
      status: 'error',
      details: 'Not found'
    });
  } else {
    state.cars = _.reject(state.cars, {
      'id': req.params.id
    });
    res.json(204, '');
  }
};