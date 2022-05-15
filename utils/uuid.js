function uuid(str = "", i = 0) {
  while (i < 36) {
    str += [8, 13, 18, 23].includes(i++)
      ? "-"
      : Math.floor(Math.random() * 16).toString(16);
  }
  return str;
}

module.exports = uuid;
