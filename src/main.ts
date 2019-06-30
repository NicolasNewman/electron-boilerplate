import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: BrowserWindow;

const createWindow = (): void => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
        // resizable: false,
        // frame: false
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', (): void => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', (): void => {
    if (mainWindow === null) {
        createWindow();
    }
});