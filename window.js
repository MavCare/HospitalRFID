console.log('main process working');

const electron = require('electron');
const app = electron.app;
const window = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function initWindow() {
    win = new window();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'pages/home/home.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', initWindow);

app.on('activate', () => {
    if(win === null) {
        initWindow();
    }
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});