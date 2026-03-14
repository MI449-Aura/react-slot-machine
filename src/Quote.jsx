import React, { useState, useEffect } from "react";
import './quote.css'

function Quote({ spinTrigger }) {
  const [quote, setQuote] = useState("Loading quote...");

  useEffect(() => {
    fetch("https://motivational-spark-api.vercel.app/api/quotes/random")
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
      })
      .catch(error => {
        console.log(error);
        setQuote("Could not load quote.");
      });
  }, [spinTrigger]);

  return <div className="quote">
    <p>Don't give up! Here's a motivational quote!</p><p>{quote}</p></div>;
}

export default Quote;