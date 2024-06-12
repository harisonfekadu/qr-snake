async function minifyHTML() {
  const { minify } = await import("minify");
  let minified = await minify("snake.html");
  minified = minified.replace("#000", "black");
  minified = minified.replace("#fff", "white");
  const prefix = "data:text/html,";
  const uri = prefix + minified;
  saveFile(uri);
  console.log(uri);
}

minifyHTML();

async function saveFile(data) {
  const fs = await import("node:fs");
  fs.writeFile("./snake-min", data, console.error);
}
