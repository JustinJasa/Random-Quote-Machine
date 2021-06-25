import React, {useState, useEffect} from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTumblr} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

function App() {

  
  const[quotes, setQuotes] = useState([]);
  const[randomQuote, setRandomQuote] = useState(['']);
  const[randomColour,setRandomColour] = useState("##FF6633")


  useEffect(() => {
      async function fetchData(){
          const response = await fetch("https://type.fit/api/quotes")
          const data = await response.json();

          setQuotes(data);
          let randomIndex = Math.floor(Math.random() * data.length)
          setRandomQuote(data[randomIndex])
      }
      fetchData()

  }, [])

  const getNewQuote = () => {

    const colours = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66'
    ]

    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomCIndex = Math.floor(Math.random() * colours.length)
    setRandomQuote(quotes[randomIndex])
    setRandomColour(colours[randomCIndex]) 
  }



  return (
    <div style={{backgroundColor: randomColour, minHeight:"100vh"}}>

    <div className="container" >
      <div className="card">
        <div className="card-header">
          <h2>Inspirational Quotes</h2>
        </div>
        <div className="card-body">
          {randomQuote ? (
            <>
              <p className="card-text">{randomQuote.text}</p>
              <h4 className="card-title">{randomQuote.author || "Anonymous"}</h4>
            </>
          ) : (
              <h2>Loading</h2>
          )}
          <div className="row">
            <div className="button" onClick={getNewQuote}>New Quote</div>
              <a className="button twitter" href="https://twitter.com/intent/tweet" target = "_blank"><FontAwesomeIcon icon={faTwitter}/></a>
              <a className="button tumblr" href="https://www.tumblr.com/new/quote" target = "_blank"><FontAwesomeIcon icon={faTumblr}/></a>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default App;
