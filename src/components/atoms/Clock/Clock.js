import React from 'react'

class Clock extends React.Component {
    state = {date: new Date()}

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>It's {this.state.date.toLocaleTimeString()} now.</h2>
            </div>
        )
    }
}

export default Clock
