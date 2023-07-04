const pino = require("pino");
const path = require("path");
module.exports = (fileName) =>
  pino({
    level: "debug",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: true,
        levelKey: false,
        ignore: "filename",
        messageFormat: "{levelLabel} - {filename} - {msg}",
      },
    },
  }).child({ filename: path.basename(fileName) });
