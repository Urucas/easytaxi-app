var body   = document.getElementsByTagName("body")[0];
var progress = document.getElementsByTagName("progress")[0];
var closeBtt = document.querySelector("button.close");
closeBtt.onclick = function() {
  window.close();
  ipcRenderer.send("close");
}
var MAX = 100;
progress.setAttribute("max", MAX);
var interval = setInterval(updateProgress, 500);
function updateProgress() {
  progress.value = progress.value + 5 <= MAX ? progress.value + 5 : 0;
}
var iframe = document.createElement("iframe");
iframe.onload = function() {
  clearInterval(interval);
  progress.value = MAX;  
}
iframe.src = "https://webapp.easytaxi.com";
iframe.setAttribute("frameborder",  0);
body.appendChild(iframe);