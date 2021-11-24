const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let loginWindow = null;

function createWindow() {
  loginWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  loginWindow.loadURL(path.join(__dirname, "index.html"));
  loginWindow.webContents.openDevTools();
  loginWindow.on("closed", () => {
    loginWindow = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (loginWindow === null) {
    createWindow();
  }
});
