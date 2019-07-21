import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes';

export default class Counter extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className={styles.backButton} data-tid="backButton">
                    <Link to={routes.HOME}>
                        <i className="fa fa-arrow-left fa-3x" />
                    </Link>
                </div>
                <div className={`counter ${styles.counter}`} data-tid="counter">
                    {this.props.counter}
                </div>
                <div className={styles.btnGroup}>
                    <button
                        className={styles.btn}
                        onClick={this.props.increment}
                        data-tclass="btn"
                        type="button"
                    >
                        <i className="fa fa-plus" />
                    </button>
                    <button
                        className={styles.btn}
                        onClick={this.props.decrement}
                        data-tclass="btn"
                        type="button"
                    >
                        <i className="fa fa-minus" />
                    </button>
                    <button
                        className={styles.btn}
                        onClick={this.props.incrementIfOdd}
                        data-tclass="btn"
                        type="button"
                    >
                        odd
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => this.props.incrementAsync()}
                        data-tclass="btn"
                        type="button"
                    >
                        async
                    </button>
                </div>
            </div>
        );
    }
}