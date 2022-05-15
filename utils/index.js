const uuid = require("./uuid");
const { getBody, getParams, getRootRoute } = require("./request");
const updateResponse = require("./response");
const { validateUser } = require("./validator");
const { readData, writeData } = require("./database");

const utils = {
  uuid,
  getRootRoute,
  getBody,
  getParams,
  updateResponse,
  validateUser,
  readData,
  writeData,
};

module.exports = utils;
