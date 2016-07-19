'use strict'
var path = require('path')
module.exports = function() {
  
  var spawn = require("child_process").spawn;
  var platforms = {
    darwin: {
      prebuilt: path.join("node_modules", ".bin", "electron"),
    },
    linux: {
      prebuilt: path.join("node_modules", ".bin", "electron"),
    },
    win: {
      prebuilt: path.join("node_modules", "electron", "electron.exe"),
    }
  }
  var platform = null;
  if(process.platform == "darwin") { platform = platforms["darwin"]; }
  else if(process.platform == "linux") { platform = platforms["linux"]; }
  else if(/^win/.test(process.platform)) { platform = platforms["win"]; }
  if(!platform) return console.log("Platform not supported");
  spawn(path.join(__dirname, platform.prebuilt), [__dirname, "--verbose"], {stdio:'inherit'});
}