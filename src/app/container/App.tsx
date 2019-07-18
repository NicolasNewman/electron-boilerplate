import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
    public render() {
        return (
            <div className='app'>
                <p>Hello!</p>
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}

export default App;