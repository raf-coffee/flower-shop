import path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const config = {
  "*.{cjs,mjs,js,jsx,ts,tsx,css}": [
    buildEslintCommand,
    "npx prettier . --write",
  ],
};

export default config;
