import React from 'react';


export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    constructor(props) {
        super(props);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        const option = e.target.elements.inputText.value.trim();
        const error = this.props.addOption(option);
        e.target.elements.inputText.value = "";
        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div className='addOptionDiv'>
                {this.state.error && <p id='errorText'>{this.state.error}</p>}
                <form id='addOptionForm' onSubmit={this.onFormSubmitted}>
                    <input id='inputAddOption' type="text" name="inputText"></input>
                    &emsp;
                    <button id='addOptionButton'>Add Option</button>
                </form>
            </div>
        );
    }
}
