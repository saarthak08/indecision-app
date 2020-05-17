import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionsModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.clearSelectedOption = this.clearSelectedOption.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined,
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

    clearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handlePick() {
        var options = this.state.options;
        if (options.length > 0) {
            var option = Math.floor(Math.random() * options.length);
            this.setState(() => ({ selectedOption: options[option] }));
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists!';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0 ? true : false} handlePick={this.handlePick} />
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                    <AddOption addOption={this.handleAddOption} />
                    <OptionsModal
                        selectedOption={this.state.selectedOption}
                        clearSelectedOption={this.clearSelectedOption}
                    />
                </div>
            </div>
        );
    }
}

