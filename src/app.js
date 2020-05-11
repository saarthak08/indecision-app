console.log('App.js is running.');


var user={
    name:"Saarthak",
    age:26,
    location:"Aligarh",
};

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);


var template2= (
    <div>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot); 