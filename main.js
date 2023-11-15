const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios"); //requestÇëÇó¿â
let win = null;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html").then(() => {});
}
app.whenReady().then(() => {
  ipcMain.handle("summation", async (event, options) => {
    await axios(options)
      .then(function (response) {
        win.webContents.send("summation-response", response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
