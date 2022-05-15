function updateResponse(res, code, data) {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(data));
  res.end();
}

module.exports = updateResponse;
