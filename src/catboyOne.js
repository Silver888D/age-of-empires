import { useState, useEffect } from "react";


const CatboyOne = () => {
  const handleClickOne = () => {
    
    getQuote();
    getCatboy();
    getSaying();
    getGif();}
  const [catboy, setCatboy] = useState("");
  const getCatboy = async () => {
    let res = await fetch("https://api.catboys.com/img");
    let data = await res.json();
    setCatboy(data.url);
  };
  useEffect(() => {
    getCatboy();
  }, []);
  const [quote, setQuote] = useState("");
  const getQuote = async () => {
    let qRes = await fetch("https://api.catboys.com/catboy");
    let qData = await qRes.json();
    setQuote(qData.response);
  };
  useEffect(() => {
    getQuote();
  }, []);
  const [saying, setSaying] = useState("");
  const getSaying = async () => {
    let sRes = await fetch("https://api.catboys.com/8ball");
    let sData = await sRes.json();
    setSaying(sData.response);
  };
  useEffect(() => {
    getSaying();
  }, []);
  const [gif, setGif] = useState("");
  const getGif = async () => {
    let gRes = await fetch("https://api.catboys.com/baka");
    let gData = await gRes.json();
    setGif(gData.url);
  };
  useEffect(() => {
    getGif();
  }, []);

  return (
    <div>
      <h2>
        Catboy:<br></br>'{quote}'
      </h2>
      {catboy ? (
        <img src={catboy} alt="catboy"></img>
      ) : (
        <h2>no catboy for you!</h2>
      )}
      <h1>
        {quote}: '{saying}'
      </h1>
      <img src={gif} alt="gif"></img>
    </div>
  );
};

export default CatboyOne;
