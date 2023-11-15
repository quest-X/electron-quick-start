const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  summation: (options) => ipcRenderer.invoke("summation", options),
  summation_response: (callback) =>
    ipcRenderer.on("summation-response", callback),
});
