class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            console.log('Indecision App Component Mounted!');
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Saving Data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('Indecision App Component Updated!');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount!');
    }

    handleDeleteOption(option) {
        var options = this.state.options;
        options = options.filter((value, index, arr) => value !== option);
        this.setState(() => ({ options }));
    }

    handlePick() {
        var options = this.state.options;
        if (options.length > 0) {
            var option = Math.floor(Math.random() * options.length);
            alert(options[option]);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0 ? true : false} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOptions addOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Default Title'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 ? <p>Please add an option to get started!</p> :
                <button onClick={props.handleDeleteOptions}>Remove All</button>
            }
            <ul>
                {
                    props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
                }
            </ul>
        </div>
    );
}


class AddOptions extends React.Component {
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

const Option = (props) => {
    return (
        <div>
            <li>
                {props.optionText}
                &emsp;&nbsp;
                <button onClick={(e) => {
                    e.preventDefault();
                    props.handleDeleteOption(props.optionText);
                }}>
                    Remove
                </button>
            </li>
        </div>
    );
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));