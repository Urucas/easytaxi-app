var menubar = require('menubar');
var path = require('path');
var dir = path.join(__dirname, 'public');
var icon = path.join(__dirname, 'icon.png');
var DEBUG = false;
var electron = require('electron');
var ipcMain = electron.ipcMain;
var mb = menubar({
  dir:dir, width:360, height:540, 
  "alwaysOnTop": true, icon: icon
});
mb.on('after-create-window', function(){
  if(DEBUG) mb.window.openDevTools();
});
ipcMain.on("close", function(){
  console.log("Thank you! Come again");
  mb.window.close();
  mb.app.quit();
});