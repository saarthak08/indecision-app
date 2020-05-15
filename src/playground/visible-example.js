class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };
    }

    toggleVisibility() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h2>Visibility Toggle</h2>
                <br></br>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <br></br><br></br>
                {this.state.visibility && (
                    <p>These are the details</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// let visiblity = false;

// const toggleVisiblity = (e) => {
//     visiblity=(!visiblity);
//     render();
// }; 

// var appRoot = document.getElementById('app');


// const render = () => {
//     const jsx = (
//         <div>
//             <h2>Visibility Toggle</h2>
//             <br></br>
//             <button onClick={toggleVisiblity}>{visiblity?"Hide Details":"Show Details"}</button>
//             <br></br><br></br>
//             {visiblity && (
//                 <p>These are the details</p>
//             )}
//         </div>
//     );  
//     ReactDOM.render(jsx,appRoot);
// };

// render();
