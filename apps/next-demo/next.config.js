/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);

const modulesExport = {
  env: {
    API_URL_THASH: process.env.API_URL_THASH
  }
}
module.exports = withTM(modulesExport, {
  reactStrictMode: true,
})
