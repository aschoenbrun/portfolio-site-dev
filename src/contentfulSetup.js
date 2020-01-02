const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: "juya7hxyd5x0",
  environment: "master",
  accessToken: "0zlV_-AWBsMoopE2XY2faO7_OnLoU_KLXEHV03ywvlM"
});

export default contentfulClient
