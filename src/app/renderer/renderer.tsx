import {platforms, getPlatformInUse} from '../js/platforms';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

switch (getPlatformInUse()) {
    case platforms.WINDOWS:
        require('../sass/win-main.scss');
        break;
}
// Import the styles here to process them with webpack


ReactDOM.render(
    <div>
        <h4>Welcome to React, Electron and Typescript</h4>
        {/* <a className="btn btn--primary u-pad-lg">Click me</a> */}
        {/* <a className="btn btn--accent u-pad-lg">Click me</a> */}
        <input className="line-edit u-pad-lg" type="text" name="" id=""/>
        <input className="checkbox" type="checkbox" name="" id=""/>
    </div>,
    document.getElementById('app')
);
