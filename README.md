?注意: 本仓库代码目的, 使用Electron(前端) / Flask(通信) / Python(后端) 来构建跨平台桌面级应用.

?使用:
可以参考我的教程: [Electron 联合 Flask + Python 实现跨平台桌面应用程序开发示例(4)](http://model.work/post/electron-联合-flask-+-python-实现跨平台桌面应用程序开发示例4/). 

?改动: 
1. 首先fork官方原仓库.
2. 参考[python与Electron联合编程记录之九(Electron与Flask联合编程实现)](https://blog.csdn.net/weixin_45193154/article/details/128028853).
3. 进行微小改动的同时修复问题bug, 可以放心使用.

> 以下是原仓库README.md内容[(#)](https://github.com/electron/electron-quick-start)
# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `preload.js` - A content script that runs before the renderer process loads.

You can learn more about each of these components in depth within the [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
