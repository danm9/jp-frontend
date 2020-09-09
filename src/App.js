import React, { useState } from 'react';
import './App.css';


function App() {
    const [justPick, setJustPick] = useState();

//    useEffect(()=> {
//        fetch('/justPick').then(res => res.json()).then(data => {
//          setJustPick(data.justPick);
//        })
//      }, []);

//    function displayJustPick() {
//        setJustPick(data.justPick);
//    }
    function handleChange(event) {
        fetch('/justPick').then(res => res.json()).then(data => {
          setJustPick(data.justPick);
        })
      }


    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">JustPick!</h1>
                <p className="lead">Can't decide where to go to eat?</p>
                <button onClick={handleChange} type="button" className="btn btn-primary">JustPick!</button>
            </div>
            <p className="align-baseline pl-3" style={{fontSize:"25px"}}>{justPick}</p>
        </div>
    );
}

export default App;