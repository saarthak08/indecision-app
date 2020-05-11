
let visiblity = false;

const toggleVisiblity = (e) => {
    visiblity=(!visiblity);
    render();
}; 

var appRoot = document.getElementById('app');


const render = () => {
    const jsx = (
        <div>
            <h2>Visibility Toggle</h2>
            <br></br>
            <button onClick={toggleVisiblity}>{visiblity?"Hide Details":"Show Details"}</button>
            <br></br><br></br>
            {visiblity && (
                <p>These are the details</p>
            )}
        </div>
    );  
    ReactDOM.render(jsx,appRoot);
};

render();
