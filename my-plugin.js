module.exports = {
  plugin: (schema, documents, config) => {
    return JSON.stringify(documents);
  },
};
