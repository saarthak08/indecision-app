"use strict";

var visiblity = false;

var toggleVisiblity = function toggleVisiblity(e) {
    visiblity = !visiblity;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Visibility Toggle"
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: toggleVisiblity },
            visiblity ? "Hide Details" : "Show Details"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        visiblity && React.createElement(
            "p",
            null,
            "These are the details"
        )
    );
    ReactDOM.render(jsx, appRoot);
};

render();
