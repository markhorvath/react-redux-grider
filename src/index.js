//Imprt React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';



//create react component
const App = () => {
    return (
    <div>
        <label class="label" for="name">Enter name: </label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </div>
    );
}


//take the react component and display it
ReactDOM.render(
    <App />,
    document.getElementById('root')
);