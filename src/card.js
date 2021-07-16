const boxen = require("boxen");
const { bold, yellow } = require("chalk");

const lines = [
  bold("Aaron Zemetres"),
  "Data Viz Engineer at Pegasystems",
  "",
  bold("       Web: ") + yellow("https://azemetre.com"),
  bold("    Github: ") + yellow("https://github.com/azemetre"),
  bold("   Twitter: ") + yellow("https://twitter.com/azemetre"),
  bold("  LinkedIn: ") + yellow("https://linkedin.com/in/aaronzemetres"),
];

const message = lines.join("\n");

const card = boxen(message, {
  borderColor: "yellow",
  borderStyle: "classic",
  margin: 1,
  padding: 1,
});

module.exports = { card };
