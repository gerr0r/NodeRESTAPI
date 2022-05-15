const http = require("http");
const route = require("./router/router");
const { getRootRoute } = require("./utils");

const server = http.createServer((req, res) => {
  try {
    const { url, method } = req;
    const rootRoute = getRootRoute(url);
    const controller = route(rootRoute);
    return controller[method](req, res);
  } catch (error) {
    return console.error(error.message);
  }
});

server.listen(5001);
