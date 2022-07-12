import { useState, useEffect } from "react";

const CatboyTwo = () => {
    const handleClickTwo = () => {
        
        getQuoteTwo();
        getCatboyTwo();
        getSayingTwo();
        getGifTwo();}
  const [catboyTwo, setCatboyTwo] = useState("");
  const getCatboyTwo = async () => {
    let resTwo = await fetch("https://api.catboys.com/img");
    let dataTwo = await resTwo.json();
    setCatboyTwo(dataTwo.url);
  };
  useEffect(() => {
    getCatboyTwo();
  }, []);

  const [quoteTwo, setQuoteTwo] = useState("");
  const getQuoteTwo = async () => {
    let qResTwo = await fetch("https://api.catboys.com/catboy");
    let qDataTwo = await qResTwo.json();
    setQuoteTwo(qDataTwo.response);
  };
  useEffect(() => {
    getQuoteTwo();
  }, []);
  const [sayingTwo, setSayingTwo] = useState("");
  const getSayingTwo = async () => {
    let sResTwo = await fetch("https://api.catboys.com/8ball");
    let sDataTwo = await sResTwo.json();
    setSayingTwo(sDataTwo.response);
  };
  useEffect(() => {
    getSayingTwo();
  }, []);
  const [gifTwo, setGifTwo] = useState("");
  const getGifTwo = async () => {
    let gResTwo = await fetch("https://api.catboys.com/baka");
    let gDataTwo = await gResTwo.json();
    setGifTwo(gDataTwo.url);
  };
  useEffect(() => {
    getGifTwo();
  }, []);
  
  return (
  <div>
    <h2>
      Catboy:<br></br>'{quoteTwo}'
    </h2>
    {catboyTwo ? (
      <img src={catboyTwo} alt="catboy"></img>
    ) : (
      <h2>no catboy for you!</h2>
    )}
    <h1>
      {quoteTwo}: '{sayingTwo}'
    </h1>
    <img src={gifTwo} alt="gif"></img>
  </div>);
};

export default CatboyTwo ;
