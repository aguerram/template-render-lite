module.exports = templateRender = (str, data) => {
  if (typeof str !== "string") throw "Input must be a string";
  if (typeof data !== "object") throw "Data must be an object";

  return str.replace(/\{([a-z_]+[a-zA-Z0-9_]+){1}\}/g, (a, b) => {
    return data[b] ? data[b] : b;
  });
};