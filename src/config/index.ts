import merge from "lodash.merge";

const NODE_ENV = process.env.NODE_ENV;

let envConfig;

if (NODE_ENV === "PRODUCTION") {
  envConfig = require("./production").default;
} else if (NODE_ENV === "TESTING") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./development").default;
}

const defaultConfig = {
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT
};

export default merge(defaultConfig, envConfig);
