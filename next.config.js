const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  env: {
    lang: "en",
    analyticId: "UA-146867983-1",
  },
});
