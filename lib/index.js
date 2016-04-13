var menubar = require('menubar');
var path = require('path');
var dir = path.join(process.cwd(), 'public');
var icon = path.join(process.cwd(), 'icon.png');
var DEBUG = true;
var mb = menubar({
  dir:dir, width:360, height:540, 
  "always-on-top": true, icon: icon
});
mb.on('after-create-window', function(){
  if(DEBUG) mb.window.openDevTools();
});