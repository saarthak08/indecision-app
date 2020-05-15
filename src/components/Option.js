import React from 'react';


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

export default Option;