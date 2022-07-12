import { useState, useEffect } from "react";

const Dice = () => {
    // const handleClickOne = (e) => {
    //     e.preventDefault();
    //     getDie();
    // };
    // const handleClickTwo = (e) => {
    //     e.preventDefault();
    //     getDieTwo();
    // };
    const [die, setDie] = useState("");
    const getDie = async () => {
      let dRes = await fetch("https://api.catboys.com/dice");
      let dData = await dRes.json();
      setDie(dData.url);
    };
    useEffect(() => {
      getDie();
    }, []);
    const [dieTwo, setDieTwo] = useState("");
    const getDieTwo = async () => {
      let dResTwo = await fetch("https://api.catboys.com/dice");
      let dDataTwo = await dResTwo.json();
      setDieTwo(dDataTwo.url);
    };
    useEffect(() => {
      getDieTwo();
    }, []);
    return(
    <div className="die-images">
          <div>
            <img src={die} alt="die"></img>
          </div>
          <div>
            <img src={dieTwo} alt="die"></img>
          </div>
        </div>)}

export default Dice