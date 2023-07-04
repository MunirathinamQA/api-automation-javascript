const request = require("supertest");
//Enable line no 3 and 4 if you're using Mac
/* require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const { apiUrl, env } = require("../utils/env-utils"); */
const logger = require("../logger-factory")(__filename);

const api = request(`${process.env.API_URL}\\`);
const apiUrl = `${process.env.API_URL}`;
logger.info("API Tests are running in env: %s url: %s", apiUrl, apiUrl);

const contentType = "Content-Type";
const accept = "Accept";
const authorization = "Authorization";
const json = "application/json";

const get = async (url, token = "") => {
  const res = await api
    .get(url)
    .set(accept, json)
    .set(authorization, token)
    .set(contentType, json);
  return { data: res.body };
};
const post = async (url, data, token = "") => {
  const res = await api
    .post(url)
    .set(accept, json)
    .set(authorization, token)
    .set(contentType, json)
    .send(data);
  return { data: res.body };
};
const patch = async (url, data, token = "") => {
  const res = await api
    .patch(url)
    .set(accept, json)
    .set(authorization, token)
    .set(contentType, json)
    .send(data);
  return { data: res.body };
};
const del = async (url, data, token = "") => {
  const res = await api
    .delete(url)
    .set(accept, json)
    .set(authorization, token)
    .set(contentType, json)
    .send(data);
  return { data: res.body };
};
module.exports = { get, post, patch, del };
