//Imprt React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create react component
const App = () => {
    const buttonText = { text: "Click Me" };
    const labelText = 'Enter Name: '
    return (
    <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input style={{border: '2px solid black'}} id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white', marginLeft: '5px'}}>{buttonText.text}</button>
    </div>
    );
}


//take the react component and display it
ReactDOM.render(
    <App />,
    document.getElementById('root')
);