import React from 'react';


const Option = (props) => (
    <div id='optionDiv'>
        <li id='optionItem'>
            <p id='optionText'>
                {props.index}.&nbsp;
                {props.optionText}
            </p>
            <button className="removeButton" onClick={(e) => {
                e.preventDefault();
                props.handleDeleteOption(props.optionText);
            }}>
                Remove
            </button>
        </li>
    </div>
);

export default Option;