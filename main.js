const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Password Checker",
    width: 800,
    height: 600
  });

  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
