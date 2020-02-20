const { bgRename, renameBot } = require("./demo/utils");

const { initPath, clearPreviousFiles } = require("./demo/init");
const { stringToPng } = require("./demo/text2svg");
const { readAll } = require("./demo/readText");
const { merge } = require("./demo/mergeMP3");
const { randomBgCopy } = require("./demo/randomBgCopy");
const { addBgm, generateBGM } = require("./demo/addBgm");
const { addJpg } = require("./demo/addJpg");
const { addText } = require("./demo/addText");

async function main() {
  global.config = initPath("./0220"); //写入全局配置文件
  let time = 250.956;
  clearPreviousFiles();
  await readAll();
  time = await merge();
  await generateBGM(time);
  await addBgm(time);
  await randomBgCopy(time);
  bgRename();
  await addJpg(time);
  await addText();
}

main();
