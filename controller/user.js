const { User } = require("../model");
const { getBody, getParams, updateResponse } = require("../utils");

const user = {
  GET: async (req, res) => {
    try {
      const userId = getParams(req.url)[0];
      const result = await User.findOne(userId);
      updateResponse(res, 200, result);
    } catch (error) {
      updateResponse(res, 404, error);
    }
  },

  POST: async (req, res) => {
    try {
      const userData = await getBody(req);
      const result = await User.add(userData);
      updateResponse(res, 201, result);
    } catch (error) {
      updateResponse(res, 400, error);
    }
  },

  PATCH: async (req, res) => {
    try {
      const userId = getParams(req.url)[0];
      const userData = await getBody(req);
      const result = await User.mod(userId, userData);
      updateResponse(res, 200, result);
    } catch (error) {
      updateResponse(res, 400, error);
    }
  },

  DELETE: async (req, res) => {
    try {
      const userId = getParams(req.url)[0];
      const result = await User.del(userId);
      updateResponse(res, 200, result);
    } catch (error) {
      updateResponse(res, 404, error);
    }
  },
};

const users = {
  GET: async (_req, res) => {
    const result = await User.findAll();
    updateResponse(res, 200, result);
  },
};

module.exports = { user, users };
