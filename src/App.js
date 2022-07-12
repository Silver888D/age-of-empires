import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "./ButtonsCss";
import CatboyOne from "./catboyOne";
import CatboyTwo from "./catboyTwo";
import Dice from "./Dice";

// function App() {
//   const [joke, setJoke] = useState('');
//   const getData = async () =>{
//     let res = await fetch('http://api.icndb.com/jokes/random');
//     let data = await res.json();
//     setJoke(data.value);
//   };
//   useEffect(()=>{getData()},[]);
//   return (
//     <div className="App">
//       <h1>Chuck Norris</h1>
//       {joke.joke ?
//       <h2>{joke.joke}</h2>
//     :
//     <h2>unfunny</h2>}
//       <button onClick={getData}>rand joke</button>
//     </div>
//   );
// }

const App =()=> {

  return (
    <div className="App">
      <Button onClick={handleClickOne} color="white" background="pink">
        Catboy 1- GO!
      </Button>
      <Button onClick={handleClickTwo} color="pink" background="white">
        Catboy 2 - GO!
      </Button>
      <div className="fight-box">
        <CatboyOne />
        <Dice />
        <CatboyTwo />
        
      </div>
    </div>
  );
}

export default App;
