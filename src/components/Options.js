import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="optionsBlock">
            <p>Your Options</p><button className='removeButton' onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        <div className='optionDiv'>
            {props.options.length == 0 ?
                <p id='addOptionText'>Please add an option to get started</p>
                :
                <ol id='optionsList'>
                    {
                        props.options.map((option,index) => <Option id='optionItem' key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} index={index+1} />)
                    }
                </ol>
            }
        </div>
    </div>
);

export default Options;


