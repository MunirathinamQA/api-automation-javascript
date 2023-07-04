class EnvUtils {
  static env = () => process.env.NODE_ENV;
  static apiUrl = () => process.env.API_URL;
}

module.exports = {
  env: EnvUtils.env(),
  apiUrl: EnvUtils.apiUrl(),
};
