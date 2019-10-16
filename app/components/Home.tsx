import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import DataStore from 'app/classes/DataStore';

interface IProps extends RouteComponentProps<any> {
    dataStore: DataStore;
}

export default class Home extends Component<IProps> {
    props: IProps;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}
