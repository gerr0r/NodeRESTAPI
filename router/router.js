const routes = require("./routes");

function route(main) {
  const controller = routes[main];

  if (!controller) throw new Error(`Route or method not valid`);

  return controller;
}

module.exports = route;
