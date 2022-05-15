function getBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk.toString();
      });
      req.on("end", () => {
        resolve(JSON.parse(data));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getRootRoute(url) {
  return url.split("/")[1];
}

function getParams(url) {
  const [_, _rootRoute, ...params] = url.split("/");
  return params;
}

module.exports = { getRootRoute, getParams, getBody };
