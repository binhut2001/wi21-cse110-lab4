for (const property in statistics) {
  var name = ${property};
  var startChar = name.charAt(0);
  if (startChar == 'r' || ({${statistics[property]} % 2) == 1) {
    console.log(`${statistics[property]}`);
  }
}
