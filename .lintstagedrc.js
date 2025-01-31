const path = require("path"); // eslint-disable-line

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{cjs,mjs,js,jsx,ts,tsx,css}": [
    buildEslintCommand,
    "npx prettier . --write",
  ],
};
