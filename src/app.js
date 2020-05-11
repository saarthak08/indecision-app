console.log('App.js is running.');

const app = {
    name: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderForm();
    }

};

const clearAppOptions = () => {
    app.options = [];
    renderForm();
};

const onWhatShouldIDo = () => {
    if (app.options.length > 0) {
        const randomNumber = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNumber];
        alert(option);
    }
};


const appRoot = document.getElementById('app');

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.name}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options.' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((number) => <li key={number}>{number}</li>)
                }
            </ol>
            <button disabled ={app.options.length>0?false:true} onClick={onWhatShouldIDo}>What should I do?</button>
            &ensp;
            <button onClick={clearAppOptions}>Remove All</button>
            <br />
            <br />
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Enter text"></input>
                &emsp;
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderForm();




