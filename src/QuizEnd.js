import React, { Component } from 'react'

class QuizEnd extends Component {

    render() {
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>

        )
    }
}

export default QuizEnd