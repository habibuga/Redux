/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React from 'react';

function withTimer(Component) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            };
        }

        startTimer() {
            this.intervalId = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        counter: prevState.counter + 1
                    };
                });
            }, 1000);
        }

        stopTimer() {
            clearInterval(this.intervalId)
        }

        render() {
            return <Component {...this.props} counter={this.state.counter} startTimer={this.startTimer}
                              stopTimer={this.stopTimer}/>
        }
    }
}

export default withTimer;