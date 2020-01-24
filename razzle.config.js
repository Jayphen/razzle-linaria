module.exports = {
  modify: config => {
    const rules = config.module["rules"] || [];
    const jsRule = rules.find(rule => rule.test.test(".js"));

    jsRule.use.push({
      loader: "linaria/loader",
      options: {
        sourceMap: true,
        preprocessor: "none"
      }
    });

    config.module.rules = rules;

    return config;
  }
};
