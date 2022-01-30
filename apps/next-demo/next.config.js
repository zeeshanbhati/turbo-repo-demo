/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);

const modulesExport = {
  env: {
    API_URL: process.env.API_URL
  }
}

module.exports = withTM(modulesExport, {
  reactStrictMode: true,
})
