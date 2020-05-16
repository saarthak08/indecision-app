import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;


