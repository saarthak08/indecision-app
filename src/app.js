class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }
        this.setState((previousState) => {
            previousState.options.push(option)
            return {
                options: previousState.options
            };
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0 ? true : false} options={this.state.options} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOptions addOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        var options = this.props.options;
        if (options.length > 0) {
            var option = Math.floor(Math.random() * options.length);
            alert(options[option]);
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </ol>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.state= {
            error:undefined
        };
    }
    onFormSubmitted(e) {
        e.preventDefault();
        const option = e.target.elements.inputText.value.trim();
        const error = this.props.addOption(option);
        e.target.elements.inputText.value = "";
        this.setState(()=>{
            return {error};
        });
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

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));