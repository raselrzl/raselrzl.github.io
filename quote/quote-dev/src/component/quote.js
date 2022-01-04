import { useState, useEffect} from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('Never compare myself to somebody else, I compare my today with yesterdy');
    const [autname, setAutname]=useState('Rasel');
    const [quotebox, setBoxcolor]=useState("quote-box");
    const [bodycolor, setBodycolor]=useState("body");
    const [randomNumber, setRandomNumber]=useState('0');

    const [quotesArray, setQuotesArray]=useState(null);

    let quoteLink="https://raselrzl.github.io/API/quotes.json";
    

    const fetchQuotes=async(url)=>{
        const res=await fetch(url);
        const getJSON= await res.json();
        setQuotesArray(getJSON.quotes);
        console.log(getJSON);
    }
    useEffect(()=>{
        fetchQuotes(quoteLink);
    },[quoteLink]);

    

   
    
    const handleClick=()=>{       
       setBoxcolor("box-color");
       setBodycolor("body2");
       
       let randomValue=Math.floor(Math.random()*quotesArray.length);
       setRandomNumber(randomValue);
       
        setQuote(quotesArray[randomValue].quote);
        setAutname(quotesArray[randomValue].author);
       
    }

    return (      
        <div id={bodycolor}> 
        
        <div id={quotebox}>  
                   
        
            <div>
                <h3 id="text"><span><i class="bi bi-chat-square-quote-fill"></i></span>  {quote}</h3>
                <p id="author"><i class="bi bi-pen-fill"></i> {autname}</p>
            </div>
            <div className="flex-container">
            <div className="buttons" >
                 <div class="logo"><a><i class="bi bi-facebook"></i></a></div>
                 <div class="logo"><a id="tweet-quote"><i class="bi bi-twitter"></i></a></div>               
            </div>
            <div className="buttons" id="next-quote-button"><button id="new-quote" onClick={()=>handleClick()}>Next Quote</button></div>
            </div>
        </div>
       
        </div>
        
     );
}
 
export default Quote;