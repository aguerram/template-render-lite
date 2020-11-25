module.exports = templateRender = (str, data) => {
  if (typeof str !== "string") throw "Input musr be a string";
  if (typeof data !== "object") throw "Data musr be an object";

  return str.replace(/\{([a-z]+){1}\}/g, (a, b) => {
    return data[b] ? data[b] : b;
  });
};
