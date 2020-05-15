import React from 'react';


export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmitted(e) {
        e.preventDefault();
        const option = e.target.elements.inputText.value.trim();
        const error = this.props.addOption(option);
        e.target.elements.inputText.value = "";
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmitted}>
                    <input type="text" name="inputText" placeholder='Your text here!'></input>
                    &emsp;
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
