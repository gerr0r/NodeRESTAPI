const { readData, writeData } = require("../utils"); // mock
const { uuid, validateUser } = require("../utils");

let data = readData();

const User = {
  findOne: (id) => {
    return new Promise((resolve, reject) => {
      const result = data.find((user) => user.id === id);
      if (!result) reject({ message: `user ${id} not found` });
      resolve(result);
    });
  },
  findAll: () => {
    return new Promise((resolve, _reject) => {
      resolve(data);
    });
  },
  add: (input) => {
    return new Promise((resolve, reject) => {
      const result = validateUser(input);
      if (!result.success) reject({ message: result.errors });

      result.data.id = uuid();

      data.push(result.data);
      writeData(data);

      resolve(result.data);
    });
  },
  mod: (id, input) => {
    return new Promise((resolve, reject) => {
      let userData = undefined;
      let index = 0;
      for (index; index < data.length; index++) {
        if (id === data[index].id) {
          userData = data[index];
          break;
        }
      }

      if (!userData) reject({ message: `user ${id} not found` });

      const { id: _userId, ...updateData } = { ...userData, ...input };

      const result = validateUser(updateData);
      if (!result.success) reject({ message: result.errors });

      data[index] = { id, ...result.data };

      writeData(data);

      resolve(result.data);
    });
  },
  del: (id) => {
    return new Promise((resolve, reject) => {
      const dataLength = data.length;
      data = data.filter((userId) => userId.id !== id);
      if (dataLength === data.length) {
        reject({ message: `user ${id} not found` });
      }
      writeData(data);
      resolve({ message: `user ${id} removed` });
    });
  },
};

module.exports = User;
